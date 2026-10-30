import type { Metadata } from "next";
import { Poppins, Playball, Montserrat, Playfair_Display, Caveat, Satisfy } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

const playball = Playball({
  weight: "400",
  variable: "--font-playball",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  weight: ["400", "600", "700", "800"],
  variable: "--font-playfair",
  subsets: ["latin"],
});

const caveat = Caveat({
  weight: ["400", "500", "600", "700"],
  variable: "--font-caveat",
  subsets: ["latin"],
});

const satisfy = Satisfy({
  weight: "400",
  variable: "--font-satisfy",
  subsets: ["latin"],
});

// Site-wide metadata, all from CMS → SEO → Global; pages add their own from CMS → SEO → Pages
const SITE_URL = "https://kokalachi.com";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/analytics/CookieConsent";
import { SiteAnalytics } from "@/components/analytics/SiteAnalytics";
import { CustomScripts } from "@/components/analytics/CustomScripts";
import { JsonLd } from "@/components/seo/JsonLd";
import { getBlogPosts, getSiteConfig, getTrips } from "@/lib/content";

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
  const [trips, posts, site] = await Promise.all([getTrips(), getBlogPosts(), getSiteConfig()]);

  return (
    <html
      lang="en"
      className={`${poppins.variable} ${playball.variable} ${montserrat.variable} ${playfair.variable} ${caveat.variable} ${satisfy.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar
          trips={trips}
          latestPost={posts[0]}
          logos={{ dark: site.logo, light: site.socialLinks?.navbarLightLogo }}
        />
        <main className="flex-grow">{children}</main>
        <Footer trips={trips} site={site} />
        <CookieConsent />
        {/* Site-wide SEO & tracking from CMS → SEO → Global */}
        <JsonLd schema={site.schema} />
        <SiteAnalytics gaId={site.googleAnalyticsId} gtmId={site.gtmId} />
        <CustomScripts head={site.customHeaderScripts} footer={site.customFooterScripts} />
      </body>
    </html>
  );
}
