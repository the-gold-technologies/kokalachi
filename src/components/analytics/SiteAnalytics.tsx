"use client";

import Script from "next/script";
import { useAdConsent } from "@/lib/consent";

// Google Analytics and Tag Manager IDs from CMS → SEO → Global.
// Like the Meta Pixel, they load only after the visitor accepts cookies in the consent banner.
export function SiteAnalytics({ gaId, gtmId }: { gaId: string | null; gtmId: string | null }) {
  const consent = useAdConsent();
  if (consent !== "granted" || (!gaId && !gtmId)) return null;

  return (
    <>
      {gaId && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`} strategy="afterInteractive" />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', ${JSON.stringify(gaId)});
            `}
          </Script>
        </>
      )}
      {gtmId && (
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer',${JSON.stringify(gtmId)});
          `}
        </Script>
      )}
    </>
  );
}
