"use client";

import React from "react";
import { Heart, Sparkles, ShieldCheck } from "lucide-react";

export function MeetFounderSection() {
  return (
    <section id="founder" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-5xl">
        <div className="bg-[#0B2A3D] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column Image */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border-2 border-white/20">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600"
                alt="Founder of Kokalachi"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#0E5A60] text-white px-4 py-2 rounded-xl text-xs font-bold shadow-lg border border-teal-400/30 flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-[#D96C2C]" />
              <span>Founder & Lead Host</span>
            </div>
          </div>

          {/* Right Column Text */}
          <div className="lg:col-span-7 text-left space-y-4">
            <div className="inline-flex items-center gap-2 text-teal-300 font-bold text-xs uppercase tracking-wider">
              <Sparkles size={14} className="text-[#D96C2C]" />
              <span>Meet The Founder</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              &quot;I built Kokalachi because I got tired of putting dream trips on hold.&quot;
            </h2>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Like so many travellers, I had a long bucket list of places I longed to explore. But every time I tried to organize a group trip, schedules clashed, leaves got cancelled, and plans dissolved.
            </p>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              That&apos;s when I realized: <strong className="text-white">solo travel shouldn&apos;t mean being alone</strong>. Kokalachi was created to bring like-minded solo travellers together into intimate, curated circles — so you can stop waiting and start exploring.
            </p>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <div>
                <h4 className="font-extrabold text-white text-base">The Kokalachi Founding Team</h4>
                <p className="text-xs text-teal-300">Curators of Experiential Circles</p>
              </div>
              <Heart className="w-6 h-6 text-[#D96C2C] fill-[#D96C2C]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
