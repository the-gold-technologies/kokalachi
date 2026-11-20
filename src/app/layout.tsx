import type { Metadata } from "next";
import { preload } from "react-dom";
// Self-hosted fonts (public/fonts): the build never downloads from Google, which fails on the
// hosting build server. Same faces and settings next/font/google produced before.
import "./fonts.css";
import "./globals.css";

// The Latin files every page needs first, preloaded as next/font/google did
const PRELOADED_FONTS = [
  "0484562807a97172-s.p.woff2",
  "46bdd75a3ff56824-s.p.woff2",
  "7db6c35d839a711c-s.p.woff2",
  "8888a3826f4a3af4-s.p.woff2",
  "904be59b21bd51cb-s.p.woff2",
  "93ed22edef6e70f7-s.p.woff2",
  "b957ea75a84b6ea7-s.p.woff2",
  "d121c670c7edb705-s.p.woff2",
  "eaead17c7dbfcd5d-s.p.woff2",
  "eafabf029ad39a43-s.p.woff2",
];

// Site-wide metadata, all from CMS → SEO → Global; pages add their own from CMS → SEO → Pages
const SITE_URL = "https://kokalachi.com";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/analytics/CookieConsent";
import { SiteAnalytics } from "@/components/analytics/SiteAnalytics";
import { CustomScripts } from "@/components/analytics/CustomScripts";
import { JsonLd } from "@/components/seo/JsonLd";
import { getBlogPosts, getNavLabels, getSiteConfig, getTrips, getTripsPages } from "@/lib/content";
import { toTripsMenu } from "@/data/tripPages";

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSiteConfig();
  const shareImage = site.logo ? [{ url: site.logo, alt: site.siteTitle }] : undefined;
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: site.siteTitle, template: "%s | Kokalachi" },
    description: site.siteDescription,
    ...(site.favicon ? { icons: { icon: site.favicon, shortcut: site.favicon, apple: site.favicon } } : {}),
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: SITE_URL,
      siteName: "Kokalachi",
      title: site.siteTitle,
      description: site.siteDescription,
      images: shareImage,
    },
    twitter: { card: "summary", title: site.siteTitle, description: site.siteDescription, images: shareImage },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
    ...(site.searchConsoleId ? { verification: { google: site.searchConsoleId } } : {}),
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Shared with every page through the same cached CMS reads
  const [trips, posts, site, navLabels, tripsMenu] = await Promise.all([
    getTrips(),
    getBlogPosts(),
    getSiteConfig(),
    getNavLabels(),
    // The navbar's Trips dropdown and the footer links; they hide if the CMS can't be reached
    getTripsPages().then(toTripsMenu, (error) => {
      console.error("[cms] trips pages unavailable for the navbar & footer:", error);
      return null;
    }),
  ]);

  for (const file of PRELOADED_FONTS) {
    preload(`/fonts/${file}`, { as: "font", type: "font/woff2", crossOrigin: "" });
  }

  return (
    <html
      lang="en"
      className="site-fonts h-full antialiased scroll-smooth"
    >
      <body className="min-h-full flex flex-col">
        <Navbar
          trips={trips}
          latestPost={posts[0]}
          navLabels={navLabels}
          tripsMenu={tripsMenu}
          logos={{ dark: site.logo, light: site.socialLinks?.navbarLightLogo }}
          whatsapp={site.socialLinks?.whatsapp}
          phone={site.phone}
          topBar={site.topBar}
        />
        <main className="flex-grow">{children}</main>
        <Footer site={site} tripsMenu={tripsMenu} />
        <CookieConsent />
        {/* Site-wide SEO & tracking from CMS → SEO → Global */}
        <JsonLd schema={site.schema} />
        <SiteAnalytics gaId={site.googleAnalyticsId} gtmId={site.gtmId} />
        <CustomScripts head={site.customHeaderScripts} footer={site.customFooterScripts} />
      </body>
    </html>
  );
}
