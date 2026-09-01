"use client";

import React, { useState } from "react";
import {
  Play,
  Pause,
  Heart,
  Plane,
  MessageCircle,
  Cake,
  MapPin,
  Camera,
  Sparkles,
  Quote,
  Stamp,
  Paperclip,
} from "lucide-react";

export function MomentsThatStayedSection() {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isPlayingVideo1, setIsPlayingVideo1] = useState(false);
  const [isPlayingVideo2, setIsPlayingVideo2] = useState(false);
  const [likedCards, setLikedCards] = useState<Record<string, boolean>>({
    card2: false,
    card7: true,
  });

  const toggleLike = (id: string) => {
    setLikedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section
      id="moments"
      className="py-12 sm:py-14 lg:py-16 bg-white relative overflow-hidden select-none"
    >
      {/* Soft Decorative Ambient Background */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-[#D96C2C]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#0E5A60]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Grid Pattern Overlay for Scrapbook Board feel */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#0E5A60 1px, transparent 1px)`,
          backgroundSize: `24px 24px`,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative z-10 max-w-7xl text-center">
        {/* SECTION HEADER */}
        <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-[#C85A24] font-montserrat block mb-3">
          MOMENTS THAT STAYED
        </span>

        <div className="mb-4 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-5xl lg:text-[58px] font-normal text-[#0E5A60] leading-[1.25] font-serif">
            Every journey leaves with stories.{" "}
            <br className="hidden sm:inline" />
            <span className="relative inline-block text-[#0E5A60] font-script text-[1.25em] font-normal mr-2">
              Some leave with
              <svg
                className="absolute -bottom-1.5 left-0 w-full h-3 text-[#D96C2C]"
                viewBox="0 0 200 12"
                fill="none"
              >
                <path
                  d="M 4 8 Q 100 2 196 9"
                  stroke="currentColor"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span className="text-[#D96C2C] font-script text-[1.25em] font-normal inline-block">
              lifelong friendships.
            </span>
          </h2>
        </div>

        <p className="text-[#0E5A60]/80 text-sm sm:text-base lg:text-lg font-normal max-w-2xl mx-auto mb-16 font-sans">
          Real stories from real people. Real moments from real journeys.
        </p>

        {/* ARTISTIC ASYMMETRIC SCRAPBOOK TRAVEL COLLAGE */}
        <div className="relative mb-20 text-left max-w-6xl mx-auto pt-8">
          {/* FLOATING DECORATIVE SCRAPBOOK HANDWRITTEN ANNOTATIONS */}
          <div className="hidden md:flex flex-col items-start absolute -top-5 left-4 lg:left-8 z-30 transform -rotate-6 pointer-events-none">
            <span className="font-script text-xl sm:text-2xl text-[#D96C2C] font-normal tracking-wide whitespace-nowrap">
              100% Unfiltered Memories ♡
            </span>
            <svg
              className="w-10 h-5 text-[#D96C2C]/70 mt-0.5 transform rotate-12 ml-10"
              viewBox="0 0 50 30"
              fill="none"
            >
              <path
                d="M 5 5 C 20 25 35 15 45 20 M 38 14 L 45 20 L 40 28"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="hidden md:flex flex-col items-end absolute -top-5 right-4 lg:right-8 z-30 transform rotate-3 pointer-events-none">
            <span className="font-script text-xl sm:text-2xl text-[#0E5A60] font-normal tracking-wide whitespace-nowrap">
              Collected from 12+ Countries ✨
            </span>
            <svg
              className="w-10 h-5 text-[#0E5A60]/70 mt-0.5 transform -rotate-12 mr-8"
              viewBox="0 0 50 30"
              fill="none"
            >
              <path
                d="M 45 5 C 30 25 15 15 5 20 M 12 14 L 5 20 L 10 28"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* MAIN COLLAGE GRID CONTAINER */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start relative">
            {/* =========================================================
                FEATURED LEFT HERO: WIDESCREEN CINEMATIC VIDEO (7 COLS)
               ========================================================= */}
            <div className="md:col-span-7 relative z-20">
              {/* Main Cinematic Video Card */}
              <div className="rounded-[35px] shadow-xl hover:shadow-2xl transition-all duration-500 relative group h-[340px] sm:h-[400px] bg-slate-900 border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=85&w=1200"
                  alt="Friends laughing around campfire on beach at sunset"
                  className="w-full h-full rounded-[32px] object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t rounded-[32px] from-black/90 via-black/20 to-black/30" />

                {/* Top Left Washi Tape Overlay */}
                <div className="absolute -top-3 left-28 z-30 px-3.5 py-1 bg-[#FFF4E5]/95 backdrop-blur-md text-[#8C5E3C] font-script text-xs font-bold rounded-sm border-y border-amber-900/20 shadow-md transform -rotate-3 select-none flex items-center gap-1">
                  <span>📌 Unfiltered Moments</span>
                </div>

                {/* Top Right Travel Passport Cancellation Stamp */}
                <div className="absolute top-4 right-5 text-white/40 font-mono text-[9px] uppercase tracking-widest border border-white/30 px-2 py-1 rounded-sm rotate-6 z-20">
                  PASSPORT VERIFIED • SRI LANKA
                </div>

                {/* Bottom Quote Banner */}
                <div className="absolute bottom-5 left-6 right-6 text-white z-20 space-y-1">
                  <p className="text-base sm:text-lg font-serif italic leading-snug drop-shadow-md">
                    &quot;I almost cancelled this trip. Now I&apos;m planning my
                    next one.&quot;
                  </p>
                  <div className="text-xs text-amber-200 font-sans flex items-center gap-2 pt-1 font-medium">
                    <span>— The Slow Island, Sri Lanka</span>
                    <span className="text-[#D96C2C]">•</span>
                    <span>March 2026</span>
                  </div>
                </div>
              </div>

              {/* OVERLAPPING ROW BELOW HERO (WhatsApp Chat + Audio Player) */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 mt-6 items-start">
                {/* WhatsApp Chat Group Card (7 Cols inside left hero column) */}
                <div className="sm:col-span-7 bg-white rounded-3xl border border-slate-200/90 shadow-lg hover:shadow-xl transition-all overflow-hidden flex flex-col transform sm:-rotate-1">
                  {/* WhatsApp Header */}
                  <div className="bg-[#075E54] text-white p-3.5 px-4 flex items-center justify-between">
                    <div className="flex items-center gap-3 truncate">
                      <div className="w-9 h-9 rounded-full overflow-hidden border border-white/40 shrink-0">
                        <img
                          src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&q=80&w=100"
                          alt="Group Chat Avatar"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="truncate">
                        <div className="text-xs font-bold truncate">
                          Kokalachi Sri Lanka Fam 🌴
                        </div>
                        <div className="text-[10px] text-emerald-200 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span>28 active members</span>
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full font-mono">
                      Chat
                    </span>
                  </div>

                  {/* Chat Message Bubbles */}
                  <div className="p-4 bg-[#E5DDD5] space-y-3 flex-1 flex flex-col justify-center">
                    <div className="bg-white p-3 rounded-2xl rounded-tl-xs shadow-xs text-xs text-slate-800 space-y-1 max-w-[90%]">
                      <p className="leading-relaxed">
                        Can&apos;t believe it&apos;s been 3 months and this
                        group is still so active! 💚
                      </p>
                      <div className="text-[9px] text-slate-400 text-right">
                        10:42 AM
                      </div>
                    </div>
                    <div className="bg-[#DCF8C6] p-3 rounded-2xl rounded-tr-xs shadow-xs text-xs text-slate-800 space-y-1 self-end max-w-[90%]">
                      <p className="leading-relaxed">
                        Already planning our next destination together 😍
                      </p>
                      <div className="text-[9px] text-slate-400 text-right">
                        10:43 AM
                      </div>
                    </div>
                  </div>
                </div>

                {/* Voice Note Audio Snippet Card (5 Cols inside left hero column) */}
                <div className="sm:col-span-5 bg-[#FAF4EB] p-4 sm:p-5 rounded-3xl border border-amber-900/10 shadow-md flex flex-col justify-between hover:shadow-lg transition-all transform sm:rotate-2">
                  <div className="bg-white px-3 py-2 rounded-full border border-amber-900/10 flex items-center justify-between shadow-2xs mb-3">
                    <button
                      onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                      className="flex items-center gap-2 text-left group/audio cursor-pointer"
                    >
                      <div className="w-7 h-7 rounded-full bg-[#0E5A60] text-white flex items-center justify-center group-hover/audio:scale-105 transition-transform">
                        {isPlayingAudio ? (
                          <Pause size={12} className="fill-white" />
                        ) : (
                          <Play size={12} className="fill-white ml-0.5" />
                        )}
                      </div>
                      <div className="flex items-center gap-0.5 text-[#0E5A60]">
                        <span
                          className={`w-1 h-3 bg-[#0E5A60] rounded-full ${isPlayingAudio ? "animate-bounce" : ""}`}
                        />
                        <span
                          className={`w-1 h-5 bg-[#0E5A60] rounded-full ${isPlayingAudio ? "animate-bounce delay-75" : ""}`}
                        />
                        <span
                          className={`w-1 h-2 bg-[#0E5A60] rounded-full ${isPlayingAudio ? "animate-bounce" : ""}`}
                        />
                        <span
                          className={`w-1 h-6 bg-[#0E5A60] rounded-full ${isPlayingAudio ? "animate-bounce delay-150" : ""}`}
                        />
                        <span
                          className={`w-1 h-3 bg-[#0E5A60] rounded-full ${isPlayingAudio ? "animate-bounce" : ""}`}
                        />
                      </div>
                    </button>
                    <span className="text-[10px] font-mono text-slate-500 font-medium">
                      0:28
                    </span>
                  </div>

                  <p className="text-[#0E5A60] text-xs font-serif italic leading-relaxed mb-3">
                    &quot;We still meet every month. Different cities, same
                    people, same laughs!&quot;
                  </p>

                  <div className="flex items-center gap-2 pt-2 border-t border-amber-900/10">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100"
                      alt="Traveller Avatar"
                      className="w-6 h-6 rounded-full object-cover border border-white shadow-2xs"
                    />
                    <div className="text-[10px] text-slate-700 font-medium truncate">
                      Vietnam Food • Feb 2026
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* =========================================================
                FEATURED RIGHT SIDE: SCRAPBOOK STACK & POLAROIDS (5 COLS)
               ========================================================= */}
            <div className="md:col-span-5 space-y-6 relative z-10">
              {/* TOP RIGHT: JAPAN QUOTE PARCHMENT CARD */}
              <div className="bg-[#FFFDF9] p-6 sm:p-7 rounded-[30px] border border-amber-900/15 shadow-lg hover:shadow-xl transition-all relative transform md:-rotate-1">
                {/* Decorative Top Stamp */}
                <div className="absolute top-4 right-5 text-[#D96C2C]/30 text-2xl font-serif leading-none">
                  “
                </div>

                <p className="text-[#0E5A60] text-base sm:text-lg font-serif italic leading-relaxed mb-5">
                  &quot;I came alone, not knowing anyone. By the end of the
                  trip, I had a whole new family.&quot;
                </p>

                <div className="flex items-end justify-between pt-4 border-t border-amber-900/10">
                  <div className="text-xs text-[#0E5A60]/80 font-sans">
                    <div className="font-semibold text-[#0E5A60]">
                      — The Sakura Edition
                    </div>
                    <div className="text-[#0E5A60] font-bold text-[11px]">
                      Japan • April 2026
                    </div>
                  </div>

                  <button
                    onClick={() => toggleLike("card2")}
                    className="p-2 rounded-full hover:bg-amber-100/50 transition-colors"
                    aria-label="Like story"
                  >
                    <Heart
                      size={18}
                      className={
                        likedCards.card2
                          ? "text-[#EF4444] fill-[#EF4444]"
                          : "text-slate-400"
                      }
                    />
                  </button>
                </div>
              </div>

              {/* MIDDLE RIGHT: 2-COLUMN PHOTO & REEL COLLAGE (Alleyway Photo + Northern Lights Reel) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-stretch">
                {/* Alleyway Photo Card with Washi Tape */}
                <div className="rounded-3xl shadow-md hover:shadow-xl transition-all h-64 border-4 border-white relative group transform sm:rotate-2">
                  {/* Washi Tape Graphic */}
                  <div className="absolute -top-2.5 left-5 z-40 px-2.5 py-0.5 bg-[#D4EBE6]/95 backdrop-blur-md text-[#1E5D53] font-script text-[11px] font-bold rounded-sm border-y border-teal-900/20 shadow-md transform -rotate-6 select-none flex items-center gap-1">
                    <span>✨ Kyoto Walks</span>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&q=85&w=800"
                    alt="Traveller in Kyoto alleyway"
                    className="w-full h-full rounded-3xl object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t rounded-3xl from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-3 left-3 text-white text-[11px] font-script opacity-0 group-hover:opacity-100 transition-opacity">
                    Kyoto slow walks 🌸
                  </div>
                </div>

                {/* Northern Lights Vertical Reel Card */}
                <div className="rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all h-64 border-4 border-white relative group bg-slate-900 transform sm:-rotate-2">
                  <img
                    src="https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&fit=crop&q=85&w=800"
                    alt="Northern lights trip"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white text-[11px] font-medium truncate">
                    Iceland Aurora Magic 🌌
                  </div>
                </div>
              </div>

              {/* BOTTOM RIGHT: AUTHENTIC TILTED POLAROID PHOTO NOTE CARD */}
              <div className="p-4 pb-5 bg-[#FFFDF9] rounded-2xl border border-amber-900/15 shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-500 relative bg-paper-texture">
                {/* Washi Tape Strip at Center Top */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 z-30 px-3 py-0.5 bg-[#FDE8BD]/95 text-[#7A5012] font-script text-[11px] font-bold rounded-sm border-y border-amber-900/20 shadow-md transform -rotate-1 select-none flex items-center gap-1">
                  <span><span className="text-[#EF4444]">♡</span> Memory Lane</span>
                </div>

                <div className="overflow-hidden rounded-xl h-44 mb-3 border border-amber-900/10">
                  <img
                    src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=85&w=800"
                    alt="Friends gathering under festive lights"
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="text-sm text-slate-800 font-script font-normal leading-relaxed px-1 text-center">
                  &quot;This was the midnight talk where we decided to visit
                  Japan together next year!&quot;
                </p>

                <div className="text-[10px] font-sans text-slate-500 pt-2 border-t border-amber-900/10 mt-2 flex items-center justify-between">
                  <span>— Ladakh Road Trip • June 2025</span>
                  <span className="text-[#EF4444] font-script text-xs">
                    memories ♡
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM CONNECTED TIMELINE: "The Journey Continues..." (Clean without box or border line) */}
        <div className="relative text-left max-w-7xl mx-auto my-12 pt-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 relative z-10">
            {/* Left Title */}
            <div className="flex-shrink-0 text-center lg:text-left min-w-[210px] lg:pr-4">
              <h3 className="text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#1E293B] leading-[1.12] font-script">
                The Journey <br />
                Continues...{" "}
                <span className="text-[#EF4444] font-sans text-2xl sm:text-3xl inline-block ml-1">
                  ♡
                </span>
              </h3>
            </div>

            {/* Right 6-Step Horizontal Timeline */}
            <div className="flex-grow w-full relative">
              {/* Connecting Wavy Dotted Path */}
              <svg
                className="hidden lg:block absolute top-[10px] left-[4%] right-[4%] w-[92%] h-10 pointer-events-none z-0"
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

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 relative z-10 items-start">
                {/* STEP 1 */}
                <div className="flex flex-col items-center text-center group px-1">
                  <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#6B7D56] text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform mb-2.5">
                    <Plane size={20} className="stroke-[2]" />
                  </div>
                  <h4 className="font-semibold text-[#0E5A60] text-[12px] sm:text-[13px] mb-0.5 leading-snug">
                    Trip Ends
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-slate-600 leading-normal font-normal">
                    We part ways with full hearts.
                  </p>
                </div>

                {/* STEP 2 */}
                <div className="flex flex-col items-center text-center group px-1">
                  <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#C85A24] text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform mb-2.5">
                    <MessageCircle size={20} className="stroke-[2]" />
                  </div>
                  <h4 className="font-semibold text-[#0E5A60] text-[12px] sm:text-[13px] mb-0.5 leading-snug">
                    WhatsApp Still Active
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-slate-600 leading-normal font-normal">
                    The conversations never stop.
                  </p>
                </div>

                {/* STEP 3 */}
                <div className="flex flex-col items-center text-center group px-1">
                  <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#6B7D56] text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform mb-2.5">
                    <Cake size={20} className="stroke-[2]" />
                  </div>
                  <h4 className="font-semibold text-[#0E5A60] text-[12px] sm:text-[13px] mb-0.5 leading-snug">
                    Birthdays &amp; Milestones
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-slate-600 leading-normal font-normal">
                    We celebrate together, no matter the distance.
                  </p>
                </div>

                {/* STEP 4 */}
                <div className="flex flex-col items-center text-center group px-1">
                  <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#C85A24] text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform mb-2.5">
                    <MapPin size={20} className="stroke-[2]" />
                  </div>
                  <h4 className="font-semibold text-[#0E5A60] text-[12px] sm:text-[13px] mb-0.5 leading-snug">
                    Another Trip Booked
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-slate-600 leading-normal font-normal">
                    Because some bonds deserve more adventures.
                  </p>
                </div>

                {/* STEP 5 */}
                <div className="flex flex-col items-center text-center group px-1">
                  <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#6B7D56] text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform mb-2.5">
                    <Camera size={20} className="stroke-[2]" />
                  </div>
                  <h4 className="font-semibold text-[#0E5A60] text-[12px] sm:text-[13px] mb-0.5 leading-snug">
                    Reunions &amp; Meetups
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-slate-600 leading-normal font-normal">
                    Different plans, same people.
                  </p>
                </div>

                {/* STEP 6 */}
                <div className="flex flex-col items-center text-center group px-1">
                  <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#EF4444] text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform mb-2.5">
                    <Heart size={20} className="fill-white stroke-none" />
                  </div>
                  <h4 className="font-semibold text-[#0E5A60] text-[12px] sm:text-[13px] mb-0.5 leading-snug">
                    Friendships for Life
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-slate-600 leading-normal font-normal">
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
