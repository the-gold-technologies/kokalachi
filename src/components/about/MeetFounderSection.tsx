"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

export function MeetFounderSection() {
  const values = [
    { num: "01", text: "Curated Compatibility First" },
    { num: "02", text: "Intimate & Cozy Group Dynamics" },
    { num: "03", text: "Verified & Safe Solo Travellers" },
    { num: "04", text: "Slow, Immersive Local Experiences" },
    { num: "05", text: "Genuine Human Connection & Warmth" },
  ];

  return (
    <section
      id="meet-the-founder"
      className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden select-none"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Founder Photo Card with Abstract Geometric Accent Shapes */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Background Abstract Geometric Accent Blobs in Kokalachi Theme Colors */}
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-[#C85A24]/20 pointer-events-none" />
            <div className="absolute top-10 -left-10 w-16 h-16 rounded-full bg-[#0E5A60]/15 pointer-events-none" />
            <div className="absolute -bottom-6 -left-4 w-28 h-28 rounded-full bg-[#E3D4BF]/60 pointer-events-none" />

            {/* Founder Image Container */}
            <div className="relative w-full max-w-sm sm:max-w-md h-[440px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl bg-slate-100 z-10 border border-amber-900/10 group">
              <img
                src="/about_meet_founder.jpg"
                alt="Kokalachi Founder"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />

              {/* Bottom Floating Glass Badge Overlay */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/60 shadow-lg flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#C85A24] font-montserrat block">
                    FOUNDER &amp; CHIEF CURATOR
                  </span>
                  <h4 className="text-base font-bold text-[#0E5A60] font-serif">
                    Kokalachi Travel Tribe
                  </h4>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#C85A24] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Numbered Values List */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Category Tag */}
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-[#C85A24] font-montserrat block">
              MEET THE FOUNDER &amp; TEAM
            </span>

            {/* Bold Headline matching website typography */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0E5A60] leading-tight font-serif">
              The People Behind Every Journey
            </h2>

            {/* Subtitle matching website typography */}
            <p className="text-[#0E5A60]/85 text-base sm:text-lg font-sans leading-relaxed">
              &quot;I created Kokalachi after watching so many amazing people
              put off their travel dreams simply because they didn&apos;t have
              a group to go with. We build journeys where no one travels as a
              stranger.&quot;
            </p>

            {/* Numbered Values List */}
            <div className="space-y-3 pt-1">
              {values.map((v, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-[#0E5A60]/85 font-sans font-medium text-base sm:text-lg hover:text-[#0E5A60] transition-colors"
                >
                  <span className="text-[#C85A24] font-bold font-mono text-base sm:text-lg w-8 shrink-0">
                    {v.num}.
                  </span>
                  <span>{v.text}</span>
                </div>
              ))}
            </div>

            {/* Handwritten Footer Line (Single Line) */}
            <div className="pt-6 border-t border-amber-900/10">
              <p className="font-script text-xl sm:text-2xl lg:text-[26px] text-[#0E5A60] font-bold flex flex-wrap items-center gap-2 whitespace-nowrap">
                <span>Kokalachi Curation Team</span>
                <span className="text-[#C85A24] font-normal mx-1">—</span>
                <span className="text-[#C85A24]">
                  Delhi &amp; Worldwide Operations ♡
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
