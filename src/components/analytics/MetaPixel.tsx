"use client";

import { useEffect } from "react";
import Script from "next/script";
import { useAdConsent } from "@/lib/consent";

// Loads only after the visitor accepts advertising cookies in the consent banner
export function MetaPixel({ pixelId }: { pixelId: string }) {
  const consent = useAdConsent();
  if (consent !== "granted") return null;
  return <MetaPixelScript pixelId={pixelId} />;
}

// Next.js runs the inline pixel script only once per visit, so later visits to a
// trip page in the same session send their own PageView here
let firstMountDone = false;

function MetaPixelScript({ pixelId }: { pixelId: string }) {
  useEffect(() => {
    if (firstMountDone) {
      window.fbq?.("track", "PageView");
    }
    firstMountDone = true;
  }, []);

  return (
    <Script id="meta-pixel" strategy="afterInteractive">
      {`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('consent', 'grant');
        fbq('init', '${pixelId}');
        fbq('track', 'PageView');
      `}
    </Script>
  );
}
