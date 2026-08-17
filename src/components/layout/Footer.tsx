"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import {
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Send,
  Heart,
  Globe,
  ShieldCheck,
  Compass,
  Sparkles,
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
    <footer className="relative bg-[#071923] text-slate-200 overflow-hidden pt-16 pb-8 border-t border-teal-900/40 selection:bg-[#D96C2C] selection:text-white">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0E5A60]/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#D96C2C]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Feature Highlights Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12 mb-12 border-b border-slate-800/80">
          <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 hover:border-[#0E5A60]/50 transition-colors">
            <div className="p-3 rounded-lg bg-[#0E5A60]/20 text-[#3E7C7A] shrink-0">
              <Compass className="w-6 h-6 text-teal-400" />
            </div>
            <div>
              <h4 className="font-semibold text-white text-base">Small-Group Curated Expeditions</h4>
              <p className="text-sm text-slate-400 mt-1">Maximum 10-12 travelers per journey for intimate, meaningful connections.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 hover:border-[#0E5A60]/50 transition-colors">
            <div className="p-3 rounded-lg bg-[#D96C2C]/20 text-[#D96C2C] shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#D96C2C]" />
            </div>
            <div>
              <h4 className="font-semibold text-white text-base">Ethical & Slow Travel</h4>
              <p className="text-sm text-slate-400 mt-1">100% locally-guided tours supporting indigenous hosts and eco-lodges.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 hover:border-[#0E5A60]/50 transition-colors">
            <div className="p-3 rounded-lg bg-teal-500/10 text-teal-300 shrink-0">
              <Sparkles className="w-6 h-6 text-teal-300" />
            </div>
            <div>
              <h4 className="font-semibold text-white text-base">Vetted Fellow Seekers</h4>
              <p className="text-sm text-slate-400 mt-1">Thoughtful compatibility matching so you feel right at home from day one.</p>
            </div>
          </div>
        </div>

        {/* Footer Main Links & Newsletter Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Brand & Bio (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-start justify-start">
              <BrandLogo variant="light" size="md" />
            </div>
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              Kokalachi designs immersive, slow-paced journeys for conscious travelers, dreamers, and storytellers. We replace tourist traps with authentic human connection.
            </p>

            <div className="space-y-2.5 pt-2 text-sm text-slate-300">
              <div className="flex items-center gap-3 hover:text-teal-300 transition-colors">
                <MapPin className="w-4 h-4 text-[#D96C2C] shrink-0" />
                <span>Basecamp in Kochi, India & Global Field Guides</span>
              </div>
              <div className="flex items-center gap-3 hover:text-teal-300 transition-colors">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <a href="mailto:hello@kokalachi.com">hello@kokalachi.com</a>
              </div>
              <div className="flex items-center gap-3 hover:text-teal-300 transition-colors">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
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
                className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-[#D96C2C] text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-[#D96C2C] text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
              >
                <FaYoutube className="w-4 h-4" />
              </a>
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Community"
                className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-teal-600 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Global Community"
                className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-[#0E5A60] text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Explore Journeys (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-white font-semibold text-base tracking-wide uppercase text-xs text-teal-400">
              Explore Journeys
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="#upcoming" className="hover:text-teal-300 transition-colors flex items-center gap-1.5 group">
                  <ArrowRight className="w-3 h-3 text-[#D96C2C] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  <span>Upcoming Trips</span>
                </Link>
              </li>
              <li>
                <Link href="#iceland" className="hover:text-teal-300 transition-colors flex items-center gap-1.5 group">
                  <ArrowRight className="w-3 h-3 text-[#D96C2C] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  <span>Iceland Fjords Trail</span>
                </Link>
              </li>
              <li>
                <Link href="#kyoto" className="hover:text-teal-300 transition-colors flex items-center gap-1.5 group">
                  <ArrowRight className="w-3 h-3 text-[#D96C2C] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  <span>Kyoto Slow Craft</span>
                </Link>
              </li>
              <li>
                <Link href="#patagonia" className="hover:text-teal-300 transition-colors flex items-center gap-1.5 group">
                  <ArrowRight className="w-3 h-3 text-[#D96C2C] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  <span>Patagonia Wilderness</span>
                </Link>
              </li>
              <li>
                <Link href="#custom" className="hover:text-teal-300 transition-colors flex items-center gap-1.5 group">
                  <ArrowRight className="w-3 h-3 text-[#D96C2C] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  <span>Private Group Tours</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: The Kokalachi Story (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-white font-semibold text-base tracking-wide uppercase text-xs text-teal-400">
              Our Ethos
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="#why-exist" className="hover:text-teal-300 transition-colors flex items-center gap-1.5 group">
                  <ArrowRight className="w-3 h-3 text-[#D96C2C] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  <span>Why We Exist</span>
                </Link>
              </li>
              <li>
                <Link href="#difference" className="hover:text-teal-300 transition-colors flex items-center gap-1.5 group">
                  <ArrowRight className="w-3 h-3 text-[#D96C2C] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  <span>The Difference</span>
                </Link>
              </li>
              <li>
                <Link href="#founder" className="hover:text-teal-300 transition-colors flex items-center gap-1.5 group">
                  <ArrowRight className="w-3 h-3 text-[#D96C2C] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  <span>Meet The Founder</span>
                </Link>
              </li>
              <li>
                <Link href="#reviews" className="hover:text-teal-300 transition-colors flex items-center gap-1.5 group">
                  <ArrowRight className="w-3 h-3 text-[#D96C2C] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  <span>Traveler Stories</span>
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-teal-300 transition-colors flex items-center gap-1.5 group">
                  <ArrowRight className="w-3 h-3 text-[#D96C2C] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  <span>FAQs & Help</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter Dispatch (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-white font-semibold text-base tracking-wide uppercase text-xs text-teal-400">
              The Secret Dispatch
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Get early access to secret trip launches, rare visual travelogues, and slow travel advice. Zero spam, ever.
            </p>

            {subscribed ? (
              <div className="p-4 rounded-xl bg-teal-900/40 border border-teal-500/50 text-teal-200 flex items-center gap-3 text-sm animate-fade-in">
                <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0" />
                <span>You&apos;re on the list! Welcome to the Kokalachi circle.</span>
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
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-4 rounded-lg bg-[#D96C2C] hover:bg-[#c45e22] text-white text-xs font-medium flex items-center gap-1.5 transition-all shadow-md active:scale-95"
                  >
                    <span>Join</span>
                    <Send className="w-3 h-3" />
                  </button>
                </div>
                <p className="text-[11px] text-slate-400 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-teal-400" />
                  <span>We respect your privacy. Unsubscribe anytime in one click.</span>
                </p>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="flex items-center gap-1.5 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Kokalachi Travel Co. Built with</span>
            <Heart className="w-3.5 h-3.5 text-[#D96C2C] fill-[#D96C2C] inline-block mx-0.5" />
            <span>for wandering souls.</span>
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400">
            <Link href="#" className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-slate-200 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-slate-200 transition-colors">
              Sustainability Pledge
            </Link>
            <Link href="#" className="hover:text-slate-200 transition-colors">
              Cookie Preferences
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
