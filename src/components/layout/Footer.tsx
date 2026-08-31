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
  Globe,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa6";

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
    <footer className="relative bg-[#FAF5EE] text-[#0B2A3D] overflow-hidden pt-16 pb-8 border-t border-amber-900/10 select-none">
      {/* Decorative Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C85A24]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#0E5A60]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Footer Main Links & Newsletter Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-amber-900/10">
          {/* Column 1: Brand & Bio (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-start justify-start">
              <Link href="/" className="inline-block">
                <img
                  src="/logo-footer.png"
                  alt="Kokalachi Logo"
                  className="h-16 sm:h-20 w-auto object-contain hover:scale-105 transition-transform"
                />
              </Link>
            </div>
            <p className="text-[#0B2A3D]/80 text-xs sm:text-sm leading-relaxed max-w-sm font-sans">
              Kokalachi designs immersive, slow-paced journeys for conscious
              travelers, dreamers, and storytellers. We replace tourist traps
              with authentic human connection.
            </p>

            <div className="space-y-2.5 pt-1 text-xs sm:text-sm text-[#0B2A3D]/80 font-sans">
              <div className="flex items-center gap-3 hover:text-[#C85A24] transition-colors">
                <MapPin className="w-4 h-4 text-[#C85A24] shrink-0" />
                <span>Basecamp in Kochi, India &amp; Global Field Guides</span>
              </div>
              <div className="flex items-center gap-3 hover:text-[#C85A24] transition-colors">
                <Mail className="w-4 h-4 text-[#C85A24] shrink-0" />
                <a href="mailto:hello@kokalachi.com">hello@kokalachi.com</a>
              </div>
              <div className="flex items-center gap-3 hover:text-[#C85A24] transition-colors">
                <Phone className="w-4 h-4 text-[#C85A24] shrink-0" />
                <a href="tel:+919876543210">+91 (800) KOKALACHI</a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white border border-amber-900/10 hover:bg-[#C85A24] text-[#0B2A3D] hover:text-white flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 shadow-2xs"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-white border border-amber-900/10 hover:bg-[#C85A24] text-[#0B2A3D] hover:text-white flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 shadow-2xs"
              >
                <FaYoutube className="w-4 h-4" />
              </a>
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Community"
                className="w-9 h-9 rounded-full bg-white border border-amber-900/10 hover:bg-[#25D366] text-[#0B2A3D] hover:text-white flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 shadow-2xs"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Global Community"
                className="w-9 h-9 rounded-full bg-white border border-amber-900/10 hover:bg-[#C85A24] text-[#0B2A3D] hover:text-white flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 shadow-2xs"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Explore Journeys (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-[#C85A24] font-montserrat font-extrabold text-xs uppercase tracking-[0.2em]">
              Explore Journeys
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#0B2A3D]/80 font-sans">
              <li>
                <Link
                  href="#upcoming-journeys"
                  className="hover:text-[#C85A24] transition-colors flex items-center gap-1.5 group"
                >
                  <ArrowRight className="w-3 h-3 text-[#C85A24] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  <span>Upcoming Trips</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#upcoming-journeys"
                  className="hover:text-[#C85A24] transition-colors flex items-center gap-1.5 group"
                >
                  <ArrowRight className="w-3 h-3 text-[#C85A24] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  <span>Coastal Vietnam</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#upcoming-journeys"
                  className="hover:text-[#C85A24] transition-colors flex items-center gap-1.5 group"
                >
                  <ArrowRight className="w-3 h-3 text-[#C85A24] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  <span>Sri Lanka Escape</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#upcoming-journeys"
                  className="hover:text-[#C85A24] transition-colors flex items-center gap-1.5 group"
                >
                  <ArrowRight className="w-3 h-3 text-[#C85A24] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  <span>Iceland Fjords</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#upcoming-journeys"
                  className="hover:text-[#C85A24] transition-colors flex items-center gap-1.5 group"
                >
                  <ArrowRight className="w-3 h-3 text-[#C85A24] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  <span>Private Group Tours</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Ethos (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-[#C85A24] font-montserrat font-extrabold text-xs uppercase tracking-[0.2em]">
              Our Ethos
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#0B2A3D]/80 font-sans">
              <li>
                <Link
                  href="#why-we-exist"
                  className="hover:text-[#C85A24] transition-colors flex items-center gap-1.5 group"
                >
                  <ArrowRight className="w-3 h-3 text-[#C85A24] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  <span>Why We Exist</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#difference"
                  className="hover:text-[#C85A24] transition-colors flex items-center gap-1.5 group"
                >
                  <ArrowRight className="w-3 h-3 text-[#C85A24] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  <span>The Difference</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#good-company"
                  className="hover:text-[#C85A24] transition-colors flex items-center gap-1.5 group"
                >
                  <ArrowRight className="w-3 h-3 text-[#C85A24] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  <span>Trust &amp; Safety</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#behind-kokalachi"
                  className="hover:text-[#C85A24] transition-colors flex items-center gap-1.5 group"
                >
                  <ArrowRight className="w-3 h-3 text-[#C85A24] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  <span>Traveler Stories</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#faqs"
                  className="hover:text-[#C85A24] transition-colors flex items-center gap-1.5 group"
                >
                  <ArrowRight className="w-3 h-3 text-[#C85A24] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  <span>FAQs &amp; Help</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter Dispatch (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-[#C85A24] font-montserrat font-extrabold text-xs uppercase tracking-[0.2em]">
              The Secret Dispatch
            </h3>
            <p className="text-[#0B2A3D]/80 text-xs sm:text-sm leading-relaxed font-sans">
              Get early access to secret trip launches, rare visual travelogues,
              and slow travel advice. Zero spam, ever.
            </p>

            {subscribed ? (
              <div className="p-4 rounded-2xl bg-white border border-[#C85A24]/40 text-slate-800 flex items-center gap-3 text-xs sm:text-sm animate-fade-in font-sans shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-[#C85A24] shrink-0" />
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
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-amber-900/15 text-[#0B2A3D] placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-[#C85A24] focus:ring-1 focus:ring-[#C85A24] transition-all font-sans shadow-2xs"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-5 rounded-full bg-[#0B2A3D] hover:bg-[#061C29] text-white text-xs font-medium flex items-center gap-1.5 transition-all shadow-md active:scale-95 cursor-pointer"
                  >
                    <span>Join</span>
                    <Send className="w-3 h-3 -rotate-45" />
                  </button>
                </div>
                <p className="text-[11px] text-slate-500 flex items-center gap-1 font-sans">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C85A24]" />
                  <span>
                    We respect your privacy. Unsubscribe anytime in one click.
                  </span>
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-sans">
          <p className="flex items-center gap-1.5 text-center sm:text-left">
            <span>
              © {new Date().getFullYear()} Kokalachi Travel Co. Built with
            </span>
            <Heart className="w-3.5 h-3.5 text-[#EF4444] fill-[#EF4444] inline-block mx-0.5" />
            <span>for wandering souls.</span>
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-500">
            <Link href="#" className="hover:text-[#C85A24] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-[#C85A24] transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-[#C85A24] transition-colors">
              Sustainability Pledge
            </Link>
            <Link href="#" className="hover:text-[#C85A24] transition-colors">
              Cookie Preferences
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
