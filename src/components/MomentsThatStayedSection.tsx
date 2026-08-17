"use client";

import React from "react";
import {
  Play,
  Volume2,
  Heart,
  Plane,
  MessageCircle,
  Gift,
  Cake,
  MapPin,
  Camera,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export function MomentsThatStayedSection() {
  return (
    <section
      id="moments"
      className="py-20 lg:py-28 bg-[#FDFBF7] relative overflow-hidden select-none"
    >
      {/* Background Soft Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[#D96C2C]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative z-10 max-w-7xl text-center">
        
        {/* SECTION HEADER */}
        <div className="inline-block mb-3">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-[#D96C2C] font-montserrat">
            MOMENTS THAT STAYED
          </span>
        </div>

        <div className="mb-4 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-normal text-[#0B2A3D] leading-[1.15] font-serif">
            Every journey leaves with stories. <br />
            Some leave with{" "}
            <span
              className="text-[#C85A24] italic font-normal inline-block"
              style={{
                fontFamily: "var(--font-playball), Georgia, cursive, serif",
              }}
            >
              lifelong <br />
              friendships.
            </span>
          </h2>
        </div>

        <p className="text-[#0B2A3D]/75 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mb-12">
          Real stories from real people. Real moments from real journeys.
        </p>

        {/* BENTO GRID OF AUTHENTIC MEMORIES */}
        <div className="space-y-6 mb-16 text-left">
          
          {/* ROW 1: 4 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
            
            {/* CARD 1: Video Story Photo Card (5 cols) */}
            <div className="md:col-span-5 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 relative group h-72 sm:h-80 bg-slate-900 border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=85&w=800"
                alt="Friends around campfire on beach"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />
              
              {/* Video Badge */}
              <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 border border-white/20">
                <Play size={12} className="fill-white" />
                <span>Video Story</span>
              </div>

              {/* Center Play Icon Overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-14 h-14 rounded-full bg-white/30 backdrop-blur-md border border-white/60 flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform">
                  <Play size={24} className="fill-white ml-1" />
                </div>
              </div>

              {/* Bottom Quote Overlay */}
              <div className="absolute bottom-4 left-5 right-5 text-white space-y-1">
                <p className="text-xs sm:text-sm font-medium italic leading-snug drop-shadow-md">
                  &quot;I almost cancelled this trip. Now I&apos;m planning my next one.&quot;
                </p>
                <div className="text-[10px] sm:text-xs text-white/80 font-mono">
                  — The Slow Island, Sri Lanka • March 2026
                </div>
              </div>
            </div>

            {/* CARD 2: Text Quote Card (3 cols) */}
            <div className="md:col-span-3 bg-[#FFFBF5] p-6 rounded-3xl border border-[#D96C2C]/20 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <span className="text-4xl text-[#D96C2C]/40 font-serif leading-none block mb-1">
                  “
                </span>
                <p className="text-[#0B2A3D] text-xs sm:text-sm font-medium leading-relaxed">
                  I came alone, not knowing anyone. By the end of the trip, I had a whole new family.&quot;
                </p>
              </div>

              <div className="flex items-end justify-between pt-4 border-t border-[#D96C2C]/10 mt-4">
                <div className="text-[11px] text-[#0B2A3D]/70 font-medium">
                  — The Sakura Edition, Japan <br />
                  <span className="text-[#0E5A60] font-bold">April 2026</span>
                </div>
                <Heart size={16} className="text-[#D96C2C] fill-[#D96C2C]/20" />
              </div>
            </div>

            {/* CARD 3: Lantern Dinner Photo Card (2 cols) */}
            <div className="md:col-span-2 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all h-72 sm:h-80 border border-slate-200 group">
              <img
                src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=85&w=600"
                alt="Group enjoying outdoor dinner feast"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* CARD 4: Audio Voice Message Snippet Card (2 cols) */}
            <div className="md:col-span-2 bg-[#F7F3EC] p-5 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
              {/* Audio Waveform Pill Header */}
              <div className="bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full border border-slate-200 flex items-center justify-between shadow-xs mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#0E5A60] text-white flex items-center justify-center">
                    <Play size={10} className="fill-white ml-0.5" />
                  </div>
                  <div className="flex items-center gap-0.5 text-[#0E5A60]">
                    <span className="w-1 h-3 bg-[#0E5A60] rounded-full animate-pulse" />
                    <span className="w-1 h-4 bg-[#0E5A60] rounded-full" />
                    <span className="w-1 h-2 bg-[#0E5A60] rounded-full" />
                    <span className="w-1 h-5 bg-[#0E5A60] rounded-full animate-pulse" />
                    <span className="w-1 h-3 bg-[#0E5A60] rounded-full" />
                  </div>
                </div>
                <span className="text-[10px] font-mono text-slate-500">0:28</span>
              </div>

              <p className="text-[#0B2A3D] text-xs font-medium italic leading-snug mb-3">
                &quot;We still meet every month. Different cities, same people, same laughs!&quot;
              </p>

              <div className="flex items-center gap-2 pt-2 border-t border-slate-200/60">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100"
                  alt="Traveller Avatar"
                  className="w-6 h-6 rounded-full object-cover border border-white"
                />
                <div className="text-[10px] text-slate-600 font-semibold truncate">
                  Vietnam Food Journey • Feb 2026
                </div>
              </div>
            </div>

          </div>

          {/* ROW 2: 5 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
            
            {/* CARD 5: WhatsApp Chat Mockup Card (3 cols) */}
            <div className="md:col-span-3 bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden flex flex-col justify-between">
              {/* WhatsApp Header */}
              <div className="bg-[#075E54] text-white p-3 px-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full overflow-hidden border border-white/40 shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&q=80&w=100"
                    alt="Group Chat Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="truncate">
                  <div className="text-xs font-bold truncate">Kokalachi Sri Lanka Fam</div>
                  <div className="text-[10px] text-emerald-200">28 active members</div>
                </div>
              </div>

              {/* Chat Message Stream */}
              <div className="p-4 bg-[#E5DDD5] space-y-3 flex-1 flex flex-col justify-center">
                <div className="bg-white p-3 rounded-2xl rounded-tl-xs shadow-xs text-xs text-slate-800 space-y-1">
                  <p>Can&apos;t believe it&apos;s been 3 months and this group is still so active! 💚</p>
                  <div className="text-[9px] text-slate-400 text-right">10:42 AM</div>
                </div>
                <div className="bg-[#DCF8C6] p-3 rounded-2xl rounded-tr-xs shadow-xs text-xs text-slate-800 space-y-1 self-end w-[90%]">
                  <p>Already planning our next destination together 😍</p>
                  <div className="text-[9px] text-slate-400 text-right">10:43 AM</div>
                </div>
              </div>
            </div>

            {/* CARD 6: Scenic Mountain Train Photo Card (3 cols) */}
            <div className="md:col-span-3 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all h-64 sm:h-72 border border-slate-200 group">
              <img
                src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&q=85&w=800"
                alt="Friends hanging out of scenic mountain train"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* CARD 7: Text Quote Card (2 cols) */}
            <div className="md:col-span-2 bg-[#FFFBF5] p-5 rounded-3xl border border-[#D96C2C]/20 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
              <div>
                <span className="text-3xl text-[#D96C2C]/40 font-serif leading-none block mb-1">
                  “
                </span>
                <p className="text-[#0B2A3D] text-xs font-medium leading-relaxed">
                  I booked the trip for the destination. I&apos;d book again for the people.&quot;
                </p>
              </div>

              <div className="flex items-end justify-between pt-3 border-t border-[#D96C2C]/10 mt-3">
                <div className="text-[10px] text-[#0B2A3D]/70">
                  — Northern Lights, Iceland <br />
                  <span className="text-[#0E5A60] font-bold">Feb 2026</span>
                </div>
                <Heart size={14} className="text-[#D96C2C] fill-[#D96C2C]/20" />
              </div>
            </div>

            {/* CARD 8: Northern Lights Video Card (2 cols) */}
            <div className="md:col-span-2 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 relative group h-64 sm:h-72 bg-slate-900 border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&fit=crop&q=85&w=800"
                alt="Friends celebrating under Northern Lights"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-md text-white px-2.5 py-0.5 rounded-full text-[10px] font-semibold flex items-center gap-1">
                <Play size={10} className="fill-white" />
                <span>Video Story</span>
              </div>
            </div>

            {/* CARD 9: Sticky Polaroid Note Photo Card (2 cols) */}
            <div className="md:col-span-2 p-3 pb-4 bg-[#FFFDF9] rounded-2xl border border-amber-200/80 shadow-md transform rotate-[-2deg] hover:rotate-0 transition-transform duration-300 relative flex flex-col justify-between">
              <div className="w-10 h-3 bg-amber-200/70 absolute -top-1.5 left-1/2 -translate-x-1/2 rotate-[-3deg] z-20" />
              <div className="overflow-hidden rounded-xl h-36 mb-2">
                <img
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=85&w=600"
                  alt="Sunrise group talk"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-[10px] text-slate-700 italic leading-snug px-1">
                &quot;This was the talk where we decided to visit Japan next year!&quot;
              </p>
              <div className="text-[9px] font-serif text-slate-500 pt-1 border-t border-slate-100 mt-1">
                — Ladakh Road Trip • June 2025
              </div>
            </div>

          </div>

        </div>

        {/* BOTTOM CONNECTED TIMELINE: "The Journey Continues..." */}
        <div className="bg-[#FAF2E8] rounded-3xl border border-[#F2E5D5] p-6 sm:p-8 lg:p-10 shadow-[0_4px_25px_rgba(0,0,0,0.03)] relative text-left max-w-7xl mx-auto my-12 overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 relative z-10">
            
            {/* Left Title */}
            <div className="flex-shrink-0 text-center lg:text-left min-w-[210px] lg:pr-4">
              <h3
                className="text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#1E293B] leading-[1.12]"
                style={{
                  fontFamily: "var(--font-playball), Georgia, cursive, serif",
                }}
              >
                The Journey <br />
                Continues...{" "}
                <span className="text-[#C85A24] font-sans text-2xl sm:text-3xl inline-block ml-1">
                  ♡
                </span>
              </h3>
            </div>

            {/* Right 6-Step Horizontal Timeline */}
            <div className="flex-grow w-full relative">
              {/* Connecting Wavy Dotted Path */}
              <svg
                className="hidden lg:block absolute top-[28px] left-[4%] right-[4%] w-[92%] h-10 pointer-events-none z-0"
                viewBox="0 0 1000 50"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,25 C80,45 120,5 166,25 C233,45 270,5 333,25 C400,45 430,5 500,25 C570,45 600,5 666,25 C733,45 770,5 833,25 C900,45 940,5 1000,25"
                  stroke="#7A8F68"
                  strokeWidth="2"
                  strokeDasharray="5 5"
                  opacity="0.7"
                />
              </svg>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 relative z-10 items-start">
                {/* STEP 1 */}
                <div className="flex flex-col items-center text-center group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#6B7D56] text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform mb-3">
                    <Plane size={22} className="stroke-[2]" />
                  </div>
                  <h4 className="font-extrabold text-[#0B2A3D] text-[13px] sm:text-sm mb-1 leading-tight">
                    Trip Ends
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-tight font-medium max-w-[125px]">
                    We part ways with full hearts.
                  </p>
                </div>

                {/* STEP 2 */}
                <div className="flex flex-col items-center text-center group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#C85A24] text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform mb-3">
                    <MessageCircle size={22} className="stroke-[2]" />
                  </div>
                  <h4 className="font-extrabold text-[#0B2A3D] text-[13px] sm:text-sm mb-1 leading-tight">
                    WhatsApp Still Active
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-tight font-medium max-w-[125px]">
                    The conversations never stop.
                  </p>
                </div>

                {/* STEP 3 */}
                <div className="flex flex-col items-center text-center group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#6B7D56] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform mb-3">
                    <Cake size={22} className="stroke-[2]" />
                  </div>
                  <h4 className="font-extrabold text-[#0B2A3D] text-[13px] sm:text-sm mb-1 leading-tight">
                    Birthdays &amp; Milestones
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-tight font-medium max-w-[130px]">
                    We celebrate together, no matter the distance.
                  </p>
                </div>

                {/* STEP 4 */}
                <div className="flex flex-col items-center text-center group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#C85A24] text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform mb-3">
                    <MapPin size={22} className="stroke-[2]" />
                  </div>
                  <h4 className="font-extrabold text-[#0B2A3D] text-[13px] sm:text-sm mb-1 leading-tight">
                    Another Trip Booked
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-tight font-medium max-w-[130px]">
                    Because some bonds deserve more adventures.
                  </p>
                </div>

                {/* STEP 5 */}
                <div className="flex flex-col items-center text-center group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#6B7D56] text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform mb-3">
                    <Camera size={22} className="stroke-[2]" />
                  </div>
                  <h4 className="font-extrabold text-[#0B2A3D] text-[13px] sm:text-sm mb-1 leading-tight">
                    Reunions &amp; Meetups
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-tight font-medium max-w-[125px]">
                    Different plans, same people.
                  </p>
                </div>

                {/* STEP 6 */}
                <div className="flex flex-col items-center text-center group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#C85A24] text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform mb-3">
                    <Heart size={22} className="stroke-[2]" />
                  </div>
                  <h4 className="font-extrabold text-[#0B2A3D] text-[13px] sm:text-sm mb-1 leading-tight">
                    Friendships for Life
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-600 leading-tight font-medium max-w-[125px]">
                    From travel buddies to life buddies.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
