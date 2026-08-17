"use client";

import React, { useState } from "react";
import { Send, ArrowUp, ShieldCheck, Heart } from "lucide-react";
import { BrandLogo } from "./BrandLogo";

export function FooterV2() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail("");
      setSubscribed(false);
    }, 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0B2A3D] text-white pt-20 pb-10 border-t border-white/10 relative overflow-hidden select-none">
      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-6xl">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16 text-left">
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo variant="light" size="md" />

            <p className="text-[#F7F3EC]/80 text-xs leading-relaxed max-w-sm mt-3">
              Kokalachi brings together people who love travelling but don&apos;t always have the right people to travel with. Curated small circles, zero planning stress.
            </p>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="font-bold text-sm text-white mb-4 uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
              <li><a href="#hero" className="hover:text-[#D96C2C] transition-colors">Home</a></li>
              <li><a href="#why-we-exist" className="hover:text-[#D96C2C] transition-colors">Why We Exist</a></li>
              <li><a href="#how-it-works" className="hover:text-[#D96C2C] transition-colors">How It Works</a></li>
              <li><a href="#difference" className="hover:text-[#D96C2C] transition-colors">The Difference</a></li>
              <li><a href="#upcoming-circles" className="hover:text-[#D96C2C] transition-colors">Upcoming Circles</a></li>
            </ul>
          </div>

          {/* Col 4: Trust & Safety */}
          <div>
            <h4 className="font-bold text-sm text-white mb-4 uppercase tracking-wider">
              Trust & Safety
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
              <li><a href="#good-company" className="hover:text-[#D96C2C] transition-colors">Vetted Travellers</a></li>
              <li><a href="#good-company" className="hover:text-[#D96C2C] transition-colors">Pre-Trip Community</a></li>
              <li><a href="#good-company" className="hover:text-[#D96C2C] transition-colors">Dedicated Hosts</a></li>
              <li><a href="#faqs" className="hover:text-[#D96C2C] transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Col 5: Newsletter */}
          <div>
            <h4 className="font-bold text-sm text-white mb-4 uppercase tracking-wider">
              Join Our Circle
            </h4>
            <p className="text-xs text-slate-300 mb-3">
              Get notified when new small-group departures are announced.
            </p>

            {subscribed ? (
              <div className="p-3 bg-[#0E5A60] border border-teal-400 text-white text-xs rounded-xl font-semibold text-center">
                ✨ Welcome to the circle!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-3.5 py-2.5 text-xs bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-[#D96C2C]"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 bg-[#0E5A60] hover:bg-[#0a464b] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Subscribe</span>
                  <Send size={12} className="text-[#D96C2C]" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Kokalachi Travel Community. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-300 hover:text-[#D96C2C] transition-colors font-bold"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
