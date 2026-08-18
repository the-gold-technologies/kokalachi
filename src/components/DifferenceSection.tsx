"use client";

import React from "react";
import { TitleUnderline } from "@/components/ui/TitleUnderline";
import {
  Users,
  MessageSquare,
  UserCheck,
  Compass,
  Heart,
  Globe,
  Camera,
  Sparkles,
} from "lucide-react";

export function DifferenceSection() {
  return (
    <section
      id="difference"
      className="py-20 lg:py-28 bg-[#FDFBF7] relative overflow-hidden select-none"
    >
      {/* Background Decorative Dashed Flight Line Connecting All Cards */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
        viewBox="0 0 1400 700"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main Flight Path Threading Directly Behind Every Card */}
        <path
          d="M -50,380 Q 350,520 700,350 T 1450,440"
          fill="none"
          stroke="#D96C2C"
          strokeWidth="1.5"
          strokeDasharray="7 6"
          opacity="0.35"
        />
      </svg>

      {/* Ambient Brand Color Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#D96C2C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#0E5A60]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 max-w-[1360px] text-center">
        {/* LEFT HANDWRITTEN TRAVEL DOODLE (Fills Left White Space) */}
        <div className="hidden lg:flex flex-col items-center absolute top-40 opacity-60 -left-4 xl:left-8 transform -rotate-6 z-20 pointer-events-none hover:opacity-100 transition-opacity">
          <div className="text-xl xl:text-2xl text-[#D96C2C] font-bold leading-tight max-w-[180px] text-center font-script">
            Pack your bags &amp; leave the details to us! ✈️♡
          </div>
          {/* Curved Arrow Pointing to Headline */}
          <svg
            className="w-16 h-10 text-[#D96C2C]/70 mt-1 transform rotate-45"
            viewBox="0 0 60 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 35 Q 35 30 50 5 M 42 12 L 50 5 L 48 18"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="3 3"
            />
          </svg>
        </div>

        {/* RIGHT HANDWRITTEN TRAVEL DOODLE (Fills Right White Space) */}
        <div className="hidden lg:flex flex-col items-center absolute top-8 right-2 xl:right-8 transform rotate-6 z-20 pointer-events-none opacity-60 hover:opacity-100 transition-opacity">
          <div className="text-xl xl:text-2xl text-[#0E5A60] font-bold leading-tight max-w-[190px] text-center font-script">
            &ldquo;Memories &gt; Monuments&rdquo; 🌿✨
          </div>
          <div className="text-xs font-serif italic text-slate-500 mt-1 font-medium bg-[#FFFBF5] px-2 py-0.5 rounded border border-amber-900/10 shadow-2xs">
            📍 Built for Connection
          </div>
          {/* Curved Arrow Pointing Down to Cards */}
          <svg
            className="w-14 h-10 text-[#0E5A60]/70 mt-1 transform -rotate-12"
            viewBox="0 0 60 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 5 Q 30 35 50 30 M 42 22 L 50 30 L 40 36"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="3 3"
            />
          </svg>
        </div>

        {/* Section Tagline */}
        <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-[#C85A24] font-montserrat block mb-3">
          WHY KOKALACHI
        </span>

        {/* Main Headline */}
        <div className="mb-4 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-normal text-[#0B2A3D] leading-tight font-serif">
            More than a trip. <br />
            Here&apos;s what{" "}
            <span className="relative inline-block font-script font-normal text-[1.12em] text-[#0B2A3D]">
              makes
              <TitleUnderline />
            </span>{" "}
            us different.
          </h2>
        </div>

        {/* Subtitle Statement */}
        <div className="text-[#0B2A3D]/80 text-base sm:text-xl font-normal max-w-3xl mx-auto mb-16 leading-relaxed">
          <p className="font-medium text-[#0B2A3D] text-lg sm:text-xl">
            Every journey is designed around one simple belief:{" "}
            <span className="text-[#D96C2C] underline decoration-[#D96C2C]/40 underline-offset-4 font-semibold font-serif italic">
              great destinations become unforgettable when shared with the right
              people.
            </span>
          </p>
        </div>

        {/* 4 SCRAPBOOK POLAROID CARDS (SLIGHTLY WIDER CARDS GRID - MAX-W-[1360px] & GAP-5) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 items-stretch text-left mb-16 relative z-10">
          {/* POLAROID 1: Curated, Not Crowded (Tilted Left -2deg) */}
          <div className="transform -rotate-2 hover:rotate-0 transition-transform duration-500 group relative">
            {/* Masking Tape at Top Corner */}
            <div className="w-16 h-4 bg-amber-200/90 backdrop-blur-sm absolute -top-2.5 left-6 rotate-[-10deg] z-30 shadow-sm border-t border-white/60" />

            <div className="bg-[#FFFBF5] text-[#0B2A3D] p-4 sm:p-5 rounded-t-2xl shadow-xl hover:shadow-2xl transition-all relative overflow-hidden flex flex-col justify-between h-full border border-slate-200/90">
              {/* Photo Inset Box */}
              <div>
                <div className="bg-[#F7F3EC] p-2.5 rounded-xl shadow-inner mb-4 relative border border-slate-200/60">
                  <div className="overflow-hidden rounded-lg h-48 bg-slate-100 relative">
                    <img
                      src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=85&w=800"
                      alt="Curated group sharing dinner"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="text-center text-[11px] font-serif italic text-slate-500 pt-2 font-medium">
                    Sri Lanka Table Conversations ✨
                  </div>
                </div>

                <div className="space-y-2 px-1 pb-4">
                  <div className="flex items-center gap-1.5 text-[#D96C2C] font-serif italic font-bold text-xs">
                    <Users size={14} />
                    <span>01. Intimate Circles</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0B2A3D] font-serif leading-snug">
                    Curated, Not Crowded
                  </h3>

                  <p className="text-slate-600 text-[14px] leading-relaxed">
                    Groups are built around compatibility, not just headcount —
                    so conversations happen naturally and no one&apos;s left on
                    the sidelines.
                  </p>
                </div>
              </div>

              {/* Ripped Torn Paper Bottom Edge (Ultra Sharp & Distinctly Visible) */}
              <div className="relative -mx-5 -mb-5 pt-3 overflow-hidden">
                <svg
                  className="w-full h-5 text-[#EFE5D8] drop-shadow-[0_2px_3px_rgba(0,0,0,0.12)]"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                >
                  <polygon
                    points="0,0 5,16 10,2 15,18 20,4 25,16 30,3 35,17 40,2 45,16 50,3 55,18 60,4 65,16 70,2 75,17 80,3 85,16 90,2 95,15 100,0 100,20 0,20"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* POLAROID 2: Designed for Connection (Tilted Right +2deg) */}
          <div className="transform rotate-2 hover:rotate-0 transition-transform duration-500 group relative lg:mt-4">
            {/* Masking Tape at Top Right Corner */}
            <div className="w-16 h-4 bg-amber-200/90 backdrop-blur-sm absolute -top-2.5 right-6 rotate-[12deg] z-30 shadow-sm border-t border-white/60" />

            <div className="bg-[#FFFBF5] text-[#0B2A3D] p-4 sm:p-5 rounded-t-2xl shadow-xl hover:shadow-2xl transition-all relative overflow-hidden flex flex-col justify-between h-full border border-slate-200/90">
              {/* Photo Inset Box */}
              <div>
                <div className="bg-[#F7F3EC] p-2.5 rounded-xl shadow-inner mb-4 relative border border-slate-200/60">
                  <div className="overflow-hidden rounded-lg h-48 bg-slate-100 relative">
                    <img
                      src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=85&w=800"
                      alt="Shared dinner and connection"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="text-center text-[11px] font-serif italic text-slate-500 pt-2 font-medium">
                    Unfiltered Shared Moments ♡
                  </div>
                </div>

                <div className="space-y-2 px-1 pb-4">
                  <div className="flex items-center gap-1.5 text-[#D96C2C] font-serif italic font-bold text-xs">
                    <MessageSquare size={14} />
                    <span>02. Real Connection</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0B2A3D] font-serif leading-snug">
                    Designed for Connection, Not Just Sightseeing
                  </h3>

                  <p className="text-slate-600 text-[14px] leading-relaxed">
                    Our itineraries build in the moments that actually bring a
                    group together — shared meals, downtime, activities that
                    spark conversation — not just a checklist of monuments.
                  </p>
                </div>
              </div>

              {/* Ripped Torn Paper Bottom Edge (Ultra Sharp & Distinctly Visible) */}
              <div className="relative -mx-5 -mb-5 pt-3 overflow-hidden">
                <svg
                  className="w-full h-5 text-[#EFE5D8] drop-shadow-[0_2px_3px_rgba(0,0,0,0.12)]"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                >
                  <polygon
                    points="0,0 6,15 12,3 18,17 24,4 30,16 36,2 42,15 48,3 54,18 60,4 66,16 72,2 78,17 84,3 90,15 96,2 100,12 100,20 0,20"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* POLAROID 3: Hosted, End to End (Tilted Left -2deg) */}
          <div className="transform -rotate-2 hover:rotate-0 transition-transform duration-500 group relative">
            {/* Masking Tape at Top Corner */}
            <div className="w-16 h-4 bg-amber-200/90 backdrop-blur-sm absolute -top-2.5 left-6 rotate-[-10deg] z-30 shadow-sm border-t border-white/60" />

            <div className="bg-[#FFFBF5] text-[#0B2A3D] p-4 sm:p-5 rounded-t-2xl shadow-xl hover:shadow-2xl transition-all relative overflow-hidden flex flex-col justify-between h-full border border-slate-200/90">
              {/* Photo Inset Box */}
              <div>
                <div className="bg-[#F7F3EC] p-2.5 rounded-xl shadow-inner mb-4 relative border border-slate-200/60">
                  <div className="overflow-hidden rounded-lg h-48 bg-slate-100 relative">
                    <img
                      src="https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&fit=crop&q=85&w=800"
                      alt="Dedicated trip host on mountain peak"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="text-center text-[11px] font-serif italic text-slate-500 pt-2 font-medium">
                    Host Accompanied ⛰️
                  </div>
                </div>

                <div className="space-y-2 px-1 pb-4">
                  <div className="flex items-center gap-1.5 text-[#D96C2C] font-serif italic font-bold text-xs">
                    <UserCheck size={14} />
                    <span>03. Seamless Hosting</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0B2A3D] font-serif leading-snug">
                    Hosted, End to End
                  </h3>

                  <p className="text-slate-600 text-[14px] leading-relaxed">
                    A dedicated trip host travels with your group, handling
                    logistics and looking out for the group&apos;s experience,
                    so you can stay present instead of managing details.
                  </p>
                </div>
              </div>

              {/* Ripped Torn Paper Bottom Edge (Ultra Sharp & Distinctly Visible) */}
              <div className="relative -mx-5 -mb-5 pt-3 overflow-hidden">
                <svg
                  className="w-full h-5 text-[#EFE5D8] drop-shadow-[0_2px_3px_rgba(0,0,0,0.12)]"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                >
                  <polygon
                    points="0,0 5,16 11,2 17,14 23,5 29,18 35,3 41,16 47,2 53,15 59,4 65,18 71,3 77,15 83,4 89,17 95,2 100,14 100,20 0,20"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* POLAROID 4: Every Detail, Thoughtfully Planned (Tilted Right +3deg) */}
          <div className="transform rotate-3 hover:rotate-0 transition-transform duration-500 group relative lg:mt-5">
            {/* Masking Tape at Top Right Corner */}
            <div className="w-16 h-4 bg-amber-200/90 backdrop-blur-sm absolute -top-2.5 right-6 rotate-[10deg] z-30 shadow-sm border-t border-white/60" />

            <div className="bg-[#FFFBF5] text-[#0B2A3D] p-4 sm:p-5 rounded-t-2xl shadow-xl hover:shadow-2xl transition-all relative overflow-hidden flex flex-col justify-between h-full border border-slate-200/90">
              {/* Photo Inset Box */}
              <div>
                <div className="bg-[#F7F3EC] p-2.5 rounded-xl shadow-inner mb-4 relative border border-slate-200/60">
                  <div className="overflow-hidden rounded-lg h-48 bg-slate-100 relative">
                    <img
                      src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=85&w=800"
                      alt="Thoughtful beach bonfire itinerary"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="text-center text-[11px] font-serif italic text-slate-500 pt-2 font-medium">
                    Built With Pure Intention 🌊
                  </div>
                </div>

                <div className="space-y-2 px-1 pb-4">
                  <div className="flex items-center gap-1.5 text-[#D96C2C] font-serif italic font-bold text-xs">
                    <Compass size={14} />
                    <span>04. Intention &amp; Care</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0B2A3D] font-serif leading-snug">
                    Every Detail, Thoughtfully Planned
                  </h3>

                  <p className="text-slate-600 text-[14px] leading-relaxed">
                    From the pace of the itinerary to the choice of stays, every
                    journey is built with intention — not stitched together from
                    a template.
                  </p>
                </div>
              </div>

              {/* Ripped Torn Paper Bottom Edge (Ultra Sharp & Distinctly Visible) */}
              <div className="relative -mx-5 -mb-5 pt-3 overflow-hidden">
                <svg
                  className="w-full h-5 text-[#EFE5D8] drop-shadow-[0_2px_3px_rgba(0,0,0,0.12)]"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                >
                  <polygon
                    points="0,0 6,14 12,3 18,16 24,4 30,17 36,2 42,15 48,3 54,18 60,4 66,16 72,2 78,17 84,3 90,15 96,2 100,12 100,20 0,20"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SLEEK VALUE STRIP BAR */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 lg:px-8 shadow-sm flex flex-col xl:flex-row items-center justify-between gap-4 xl:gap-6 relative z-10 overflow-x-auto scrollbar-hide">
          <div className="flex items-center justify-center xl:justify-start gap-4 sm:gap-6 lg:gap-7 text-xs sm:text-sm xl:text-base font-bold text-[#0B2A3D] whitespace-nowrap shrink-0">
            <div className="flex items-center gap-2 hover:text-[#D96C2C] transition-colors cursor-default">
              <Users size={18} className="text-[#D96C2C] shrink-0" />
              <span>Real People</span>
            </div>
            <div className="flex items-center gap-2 hover:text-[#D96C2C] transition-colors cursor-default">
              <Globe size={18} className="text-[#D96C2C] shrink-0" />
              <span>Meaningful Experiences</span>
            </div>
            <div className="flex items-center gap-2 hover:text-[#D96C2C] transition-colors cursor-default">
              <Camera size={18} className="text-[#D96C2C] shrink-0" />
              <span>Lasting Memories</span>
            </div>
            <div className="flex items-center gap-2 hover:text-[#D96C2C] transition-colors cursor-default">
              <Heart size={18} className="text-[#D96C2C] shrink-0" />
              <span>Connections for Life</span>
            </div>
          </div>

          {/* Humanistic Handwritten Tagline */}
          <div className="text-lg sm:text-xl lg:text-2xl font-script text-[#D96C2C] flex items-center gap-1.5 font-normal whitespace-nowrap tracking-wide leading-none shrink-0">
            <span>That&apos;s the Kokalachi difference.</span>
            <span className="text-lg sm:text-xl font-normal text-[#D96C2C]">
              ♡
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
