"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Cookie, X } from "lucide-react";
import { onOpenCookieSettings, setAdConsent, useAdConsent } from "@/lib/consent";

// Trip pages are the only ones that use advertising cookies, so the banner asks there
const TRIP_PAGE = /^\/journeys\/[^/]+\/?$/;

export function CookieConsent() {
  const consent = useAdConsent();
  const pathname = usePathname() ?? "";
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => onOpenCookieSettings(() => setSettingsOpen(true)), []);

  const firstAsk = consent === "unset" && TRIP_PAGE.test(pathname);
  if (!settingsOpen && !firstAsk) return null;

  const choose = (value: "granted" | "denied") => {
    setAdConsent(value);
    setSettingsOpen(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-labelledby="cookie-consent-title"
      className="fixed z-[90] bottom-4 left-4 right-4 sm:right-auto sm:max-w-sm bg-white rounded-3xl border border-amber-900/10 shadow-[0_20px_60px_rgba(11,42,61,0.25)] p-5 animate-in fade-in slide-in-from-bottom-4 duration-500"
    >
      {settingsOpen && (
        <button
          onClick={() => setSettingsOpen(false)}
          aria-label="Close cookie settings"
          className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X size={16} />
        </button>
      )}

      <div className="flex items-center gap-2.5 mb-2">
        <span className="w-9 h-9 rounded-full bg-[#FDF0EC] text-[#D96C2C] flex items-center justify-center shrink-0">
          <Cookie size={18} />
        </span>
        <p id="cookie-consent-title" className="font-serif text-lg font-bold text-[#0E5A60]">
          {settingsOpen ? "Cookie settings" : "A quick question"}
        </p>
      </div>

      <p className="text-sm text-slate-600 leading-relaxed">
        We use Meta cookies on our trip pages to see which of our Facebook &amp; Instagram ads bring you
        here. Is that okay?{" "}
        <Link href="/privacy-policy#cookies" className="font-semibold text-[#C85A24] underline underline-offset-2 hover:text-[#0E5A60]">
          Privacy Policy
        </Link>
      </p>

      {settingsOpen && consent !== "unset" && consent !== "pending" && (
        <p className="mt-2 text-xs text-slate-500">
          Right now: <span className="font-semibold text-[#0E5A60]">{consent === "granted" ? "allowed" : "not allowed"}</span>
        </p>
      )}

      {/* Equal buttons: saying no is as easy as saying yes */}
      <div className="grid grid-cols-2 gap-2.5 mt-4">
        <button
          onClick={() => choose("denied")}
          className="py-2.5 rounded-full border border-[#0E5A60]/25 text-[#0E5A60] text-sm font-semibold hover:bg-[#0E5A60]/5 transition-colors cursor-pointer"
        >
          No thanks
        </button>
        <button
          onClick={() => choose("granted")}
          className="py-2.5 rounded-full bg-[#0E5A60] hover:bg-[#0B2A3D] text-white text-sm font-semibold transition-colors cursor-pointer"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
