"use client";

import React, { useState } from "react";
import Link from "next/link";
import { scrollToTopIfHome } from "@/lib/scrollToTop";
import { TaglineRoute } from "@/components/ui/TaglineRoute";
import {
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { FaInstagram, FaFacebookF } from "react-icons/fa6";
import type { TripsMenu } from "@/data/tripPages";
import type { SiteConfig } from "@/types/cms";
import { openCookieSettings } from "@/lib/consent";

interface FooterProps {
  site: SiteConfig; // contact details & social links from CMS → SEO → Global
  tripsMenu: TripsMenu | null; // the /trips pages (CMS → Trips Pages); null if unavailable
}

export function Footer({ site, tripsMenu }: FooterProps) {
  const footerLogo = site.socialLinks?.footerLogo;

  // Listing pages rather than single trips, so every destination (including new ones) is covered.
  // The /trips sub-pages use their tab labels and order from CMS → Trips Pages.
  const journeyLinks = [
    { label: "All Journeys", href: "/journeys" },
    ...(tripsMenu?.pages ?? [])
      .filter((page) => page.slug)
      .map((page) => ({ label: page.tabLabel, href: page.path })),
  ];

  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="relative bg-[#0E5A60] text-white/85 overflow-hidden pt-16 pb-8 border-t border-white/10 select-none">
      {/* Decorative Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D96C2C]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#0B2A3D]/30 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="site-container relative z-10">
        {/* Footer Main Links & Newsletter Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Bio (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-start justify-start">
              <Link href="/" onClick={scrollToTopIfHome} className="inline-block">
                {footerLogo && <img
                  src={footerLogo}
                  alt="Kokalachi Logo"
                  className="h-8 sm:h-9 w-auto object-contain hover:scale-105 transition-transform"
                />}
                <TaglineRoute
                  text="Travel. Connect. Belong"
                  className="mt-2.5"
                  wordClassName="text-[10px] text-[#CFE3DF]"
                  trailClassName="text-[#CFE3DF]/60"
                  lastClassName="text-[17px] text-[#F3B748]"
                />
              </Link>
            </div>
            <p className="text-white/80 text-xs sm:text-sm leading-relaxed max-w-sm font-sans">
              Kokalachi designs immersive, slow-paced journeys for conscious
              travelers, dreamers, and storytellers. We replace tourist traps
              with authentic human connection.
            </p>

            <div className="space-y-2.5 pt-1 text-xs sm:text-sm text-white/80 font-sans">
              {site.address && (
                <div className="flex items-center gap-3 hover:text-[#F3B748] transition-colors">
                  <MapPin className="w-4 h-4 text-[#F3B748] shrink-0" />
                  <span>{site.address}</span>
                </div>
              )}
              {site.email && (
                <div className="flex items-center gap-3 hover:text-[#F3B748] transition-colors">
                  <Mail className="w-4 h-4 text-[#F3B748] shrink-0" />
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </div>
              )}
              {site.phone && (
                <div className="flex items-center gap-3 hover:text-[#F3B748] transition-colors">
                  <Phone className="w-4 h-4 text-[#F3B748] shrink-0" />
                  <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}>{site.phone}</a>
                </div>
              )}
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {site.instagramUrl && (
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 border border-white/15 hover:bg-[#D96C2C] hover:border-[#D96C2C] text-white flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 shadow-2xs"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              )}
              {site.facebookUrl && (
              <a
                href={site.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 border border-white/15 hover:bg-[#D96C2C] hover:border-[#D96C2C] text-white flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 shadow-2xs"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
              )}
            </div>
          </div>

          {/* Column 2: Explore Journeys (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-[#F3B748] font-montserrat font-extrabold text-xs uppercase tracking-[0.2em]">
              Explore Journeys
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/80 font-sans">
              {journeyLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-[#F3B748] transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 text-[#F3B748] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Ethos (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-[#F3B748] font-montserrat font-extrabold text-xs uppercase tracking-[0.2em]">
              Our Ethos
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/80 font-sans">
              <li>
                <Link
                  href="/#why-we-exist"
                  className="hover:text-[#F3B748] transition-colors flex items-center gap-1.5 group"
                >
                  <ArrowRight className="w-3 h-3 text-[#F3B748] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  <span>Why We Exist</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#difference"
                  className="hover:text-[#F3B748] transition-colors flex items-center gap-1.5 group"
                >
                  <ArrowRight className="w-3 h-3 text-[#F3B748] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  <span>The Difference</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#good-company"
                  className="hover:text-[#F3B748] transition-colors flex items-center gap-1.5 group"
                >
                  <ArrowRight className="w-3 h-3 text-[#F3B748] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  <span>Trust &amp; Safety</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  className="hover:text-[#F3B748] transition-colors flex items-center gap-1.5 group"
                >
                  <ArrowRight className="w-3 h-3 text-[#F3B748] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  <span>Traveler Stories</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="hover:text-[#F3B748] transition-colors flex items-center gap-1.5 group"
                >
                  <ArrowRight className="w-3 h-3 text-[#F3B748] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  <span>Blogs &amp; Guides</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="hover:text-[#F3B748] transition-colors flex items-center gap-1.5 group"
                >
                  <ArrowRight className="w-3 h-3 text-[#F3B748] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  <span>FAQs &amp; Help</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter Dispatch (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-[#F3B748] font-montserrat font-extrabold text-xs uppercase tracking-[0.2em]">
              The Secret Dispatch
            </h3>
            <p className="text-white/80 text-xs sm:text-sm leading-relaxed font-sans">
              Get early access to secret trip launches, rare visual travelogues,
              and slow travel advice. Zero spam, ever.
            </p>

            {subscribed ? (
              <div className="p-4 rounded-2xl bg-white/10 border border-[#D96C2C]/50 text-white flex items-center gap-3 text-xs sm:text-sm animate-fade-in font-sans shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-[#F3B748] shrink-0" />
                <span>
                  You&apos;re on the list! Welcome to the Kokalachi circle.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2.5">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/15 text-white placeholder-white/40 text-xs sm:text-sm focus:outline-none focus:border-[#F3B748] focus:ring-1 focus:ring-[#F3B748] transition-all font-sans shadow-2xs"
                  />
                  <button
                    type="submit"
                    className="group absolute right-1.5 top-1.5 bottom-1.5 pl-4 pr-1.5 rounded-full bg-[#D96C2C] hover:bg-[#b8571e] text-white text-xs font-semibold flex items-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer"
                  >
                    <span>Join</span>
                    <span className="grid place-items-center h-6 w-6 rounded-full bg-white/20">
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                  </button>
                </div>
                <p className="text-[11px] text-white/60 flex items-center gap-1 font-sans">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#F3B748]" />
                  <span>
                    We respect your privacy. Unsubscribe anytime in one click.
                  </span>
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar: copyright on the left; legal links on the right with the credit in small below */}
        <div className="pt-8 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 text-xs text-white/60 font-sans">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Kokalachi. All rights reserved.
          </p>

          <div className="flex flex-col items-center sm:items-end gap-2">
            <div className="flex flex-wrap items-center justify-center gap-6 text-white/60">
              <Link href="/privacy-policy" className="hover:text-[#F3B748] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-[#F3B748] transition-colors">
                Terms &amp; Conditions
              </Link>
              <button type="button" onClick={openCookieSettings} className="hover:text-[#F3B748] transition-colors cursor-pointer">
                Cookie Settings
              </button>
            </div>
            <p className="text-[10.5px] text-white/45">
              Designed &amp; developed by{" "}
              <a
                href="https://thegoldtechnologies.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 underline underline-offset-2 hover:text-[#F3B748] transition-colors"
              >
                TGT
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
