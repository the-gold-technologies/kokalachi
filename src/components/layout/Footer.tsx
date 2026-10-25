"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Send,
  Heart,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { FaInstagram, FaFacebookF } from "react-icons/fa6";
import { tripCards } from "@/data/trips";
import { hasFullDetails, isBookingOpen } from "@/lib/departures";
import { openCookieSettings } from "@/lib/consent";

// Bookable trips with full itineraries (same picks as the navbar), between the two fixed links
const journeyLinks = [
  { label: "Upcoming Trips", href: "/journeys" },
  ...tripCards
    .filter((card) => isBookingOpen(card) && hasFullDetails(card.tourPackage))
    .slice(0, 3)
    .map((card) => ({ label: card.destination, href: `/journeys/${card.slug}` })),
  { label: "Private Group Tours", href: "/contact" },
];

export function Footer() {
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
              <Link href="/" className="inline-block">
                <img
                  src="/clean_logo_lighter.png"
                  alt="Kokalachi Logo"
                  className="h-8 sm:h-9 w-auto object-contain hover:scale-105 transition-transform"
                />
                <span className="block mt-2.5 text-[10px] font-montserrat font-bold uppercase tracking-[0.35em] text-[#CFE3DF]">
                  Travel. Connect. Belong
                </span>
              </Link>
            </div>
            <p className="text-white/80 text-xs sm:text-sm leading-relaxed max-w-sm font-sans">
              Kokalachi designs immersive, slow-paced journeys for conscious
              travelers, dreamers, and storytellers. We replace tourist traps
              with authentic human connection.
            </p>

            <div className="space-y-2.5 pt-1 text-xs sm:text-sm text-white/80 font-sans">
              <div className="flex items-center gap-3 hover:text-[#F6B48A] transition-colors">
                <MapPin className="w-4 h-4 text-[#F6B48A] shrink-0" />
                <span>91 Springboard, C-2, Sector 1, Noida - 201301</span>
              </div>
              <div className="flex items-center gap-3 hover:text-[#F6B48A] transition-colors">
                <Mail className="w-4 h-4 text-[#F6B48A] shrink-0" />
                <a href="mailto:hello@kokalachi.com">hello@kokalachi.com</a>
              </div>
              <div className="flex items-center gap-3 hover:text-[#F6B48A] transition-colors">
                <Phone className="w-4 h-4 text-[#F6B48A] shrink-0" />
                <a href="tel:+919711845700">+91 97118 45700</a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/kokalachi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 border border-white/15 hover:bg-[#D96C2C] hover:border-[#D96C2C] text-white flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 shadow-2xs"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/share/1MA2Wf52Cr/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 border border-white/15 hover:bg-[#D96C2C] hover:border-[#D96C2C] text-white flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 shadow-2xs"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Explore Journeys (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-[#F6B48A] font-montserrat font-extrabold text-xs uppercase tracking-[0.2em]">
              Explore Journeys
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/80 font-sans">
              {journeyLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-[#F6B48A] transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 text-[#F6B48A] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Ethos (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-[#F6B48A] font-montserrat font-extrabold text-xs uppercase tracking-[0.2em]">
              Our Ethos
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/80 font-sans">
              <li>
                <Link
                  href="/#why-we-exist"
                  className="hover:text-[#F6B48A] transition-colors flex items-center gap-1.5 group"
                >
                  <ArrowRight className="w-3 h-3 text-[#F6B48A] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  <span>Why We Exist</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#difference"
                  className="hover:text-[#F6B48A] transition-colors flex items-center gap-1.5 group"
                >
                  <ArrowRight className="w-3 h-3 text-[#F6B48A] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  <span>The Difference</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#good-company"
                  className="hover:text-[#F6B48A] transition-colors flex items-center gap-1.5 group"
                >
                  <ArrowRight className="w-3 h-3 text-[#F6B48A] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  <span>Trust &amp; Safety</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  className="hover:text-[#F6B48A] transition-colors flex items-center gap-1.5 group"
                >
                  <ArrowRight className="w-3 h-3 text-[#F6B48A] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  <span>Traveler Stories</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="hover:text-[#F6B48A] transition-colors flex items-center gap-1.5 group"
                >
                  <ArrowRight className="w-3 h-3 text-[#F6B48A] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  <span>Blogs &amp; Guides</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="hover:text-[#F6B48A] transition-colors flex items-center gap-1.5 group"
                >
                  <ArrowRight className="w-3 h-3 text-[#F6B48A] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  <span>FAQs &amp; Help</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter Dispatch (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-[#F6B48A] font-montserrat font-extrabold text-xs uppercase tracking-[0.2em]">
              The Secret Dispatch
            </h3>
            <p className="text-white/80 text-xs sm:text-sm leading-relaxed font-sans">
              Get early access to secret trip launches, rare visual travelogues,
              and slow travel advice. Zero spam, ever.
            </p>

            {subscribed ? (
              <div className="p-4 rounded-2xl bg-white/10 border border-[#D96C2C]/50 text-white flex items-center gap-3 text-xs sm:text-sm animate-fade-in font-sans shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-[#F6B48A] shrink-0" />
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
                    className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/15 text-white placeholder-white/40 text-xs sm:text-sm focus:outline-none focus:border-[#F6B48A] focus:ring-1 focus:ring-[#F6B48A] transition-all font-sans shadow-2xs"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-5 rounded-full bg-[#D96C2C] hover:bg-[#b8571e] text-white text-xs font-medium flex items-center gap-1.5 transition-all shadow-md active:scale-95 cursor-pointer"
                  >
                    <span>Join</span>
                    <Send className="w-3 h-3 -rotate-45" />
                  </button>
                </div>
                <p className="text-[11px] text-white/60 flex items-center gap-1 font-sans">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#F6B48A]" />
                  <span>
                    We respect your privacy. Unsubscribe anytime in one click.
                  </span>
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60 font-sans">
          <p className="flex items-center gap-1.5 text-center sm:text-left">
            <span>
              © {new Date().getFullYear()} Kokalachi Travel Co. Built with
            </span>
            <Heart className="w-3.5 h-3.5 text-[#EF4444] fill-[#EF4444] inline-block mx-0.5" />
            <span>for wandering souls, by{" "}
              <a
                href="https://thegoldtechnologies.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F6B48A] hover:underline font-normal transition-colors"
              >
                TGT
              </a>
            .</span>
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-white/60">
            <Link href="/privacy-policy" className="hover:text-[#F6B48A] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#F6B48A] transition-colors">
              Terms &amp; Conditions
            </Link>
            <button type="button" onClick={openCookieSettings} className="hover:text-[#F6B48A] transition-colors cursor-pointer">
              Cookie Settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
