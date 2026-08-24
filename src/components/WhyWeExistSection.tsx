"use client";

import React from "react";
import { TitleUnderline } from "@/components/ui/TitleUnderline";
import { FlyingBirds } from "@/components/ui/FlyingBirds";
import {
  X,
  Heart,
  ArrowRight,
  Phone,
  Video,
  MoreVertical,
  ShieldCheck,
  BookOpen,
  Users,
} from "lucide-react";

export function WhyWeExistSection() {
  return (
    <section
      id="why-we-exist"
      className="py-16 sm:py-20 lg:py-24 bg-[#FAF5EE] relative overflow-hidden select-none"
    >
      {/* Decorative Flying Birds Outline */}
      <FlyingBirds className="hidden lg:block absolute top-12 right-16 opacity-35 text-[#0B2A3D]" />

      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl text-center">
        {/* Sub-header category tagline */}
        <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-[#C85A24] font-montserrat block mb-3">
          WHY WE EXIST
        </span>

        {/* Main Title */}
        <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-normal leading-tight font-serif max-w-4xl mx-auto mb-4 text-[#0B2A3D]">
          Why do so many dream trips never{" "}
          <span className="relative inline-block font-script font-normal text-[1.12em] text-[#0B2A3D]">
            happen?
            <TitleUnderline />
          </span>
        </h2>

        {/* Short, reduced intro copy */}
        <p className="text-[#0B2A3D]/75 text-sm sm:text-base lg:text-lg font-normal leading-relaxed max-w-2xl mx-auto mb-12 font-sans">
          Most bucket list trips get postponed when schedules clash and life gets in the way. Finding the right travel companions shouldn&apos;t be this hard.
        </p>

        {/* Side-by-Side Comparison Container (Exact Original Layout) */}
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch text-left">
            {/* ==================== LEFT CARD: THE OLD WAY (col-span-5) ==================== */}
            <div className="lg:col-span-5 bg-[#F3ECE1] p-6 sm:p-7 lg:p-8 rounded-[32px] flex flex-col justify-between relative shadow-none h-full border border-[#E3DACB]/80">
              <div className="flex flex-col h-full justify-between">
                {/* Header Badge Pill */}
                <div className="flex justify-center mb-4">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DFD6C7] text-[#5C5248] text-[11px] font-extrabold uppercase tracking-wider font-sans">
                    <X size={13} className="text-[#5C5248] stroke-[3]" />
                    <span>THE OLD WAY</span>
                  </div>
                </div>

                {/* Chat Container with Left Annotations Margin */}
                <div className="relative pl-0 sm:pl-20 pr-0 pt-1 pb-1 flex-1 flex flex-col justify-between">
                  {/* Left Handwritten Callout Annotations */}
                  <div className="hidden sm:block pointer-events-none">
                    {/* Callout 1: Excitement */}
                    <div className="absolute -left-2 top-28 text-right">
                      <span className="text-sm sm:text-base text-[#4A3E3D] font-bold whitespace-nowrap block font-script">
                        Excitement
                      </span>
                      <svg
                        className="w-7 h-3.5 text-[#5A4E4C] transform -rotate-12 ml-auto mt-0.5"
                        viewBox="0 0 30 15"
                        fill="none"
                      >
                        <path
                          d="M 2 2 Q 15 12 28 8 M 22 4 L 28 8 L 24 14"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>

                    {/* Callout 2: Plans change */}
                    <div className="absolute -left-2 top-60 text-right">
                      <span className="text-sm sm:text-base text-[#4A3E3D] font-bold whitespace-nowrap block font-script">
                        Plans change
                      </span>
                      <svg
                        className="w-7 h-3.5 text-[#5A4E4C] transform -rotate-12 ml-auto mt-0.5"
                        viewBox="0 0 30 15"
                        fill="none"
                      >
                        <path
                          d="M 2 2 Q 15 12 28 8 M 22 4 L 28 8 L 24 14"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>

                    {/* Callout 3: The trip never happens */}
                    <div className="absolute -left-4 bottom-24 text-right">
                      <span className="text-sm sm:text-base text-[#4A3E3D] font-bold leading-tight block text-right max-w-[100px] font-script">
                        The trip <br /> never happens
                      </span>
                      <svg
                        className="w-7 h-3.5 text-[#5A4E4C] transform -rotate-12 ml-auto mt-0.5"
                        viewBox="0 0 30 15"
                        fill="none"
                      >
                        <path
                          d="M 2 2 Q 15 12 28 8 M 22 4 L 28 8 L 24 14"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* WhatsApp Style Chat Phone Frame */}
                  <div className="bg-[#EEE7DC] rounded-3xl p-4 sm:p-6 border border-[#E3DACB] flex-1 flex flex-col justify-between space-y-4 shadow-none font-sans">
                    {/* Chat Header */}
                    <div className="flex items-center justify-between pb-3 border-b border-black/10">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full overflow-hidden border border-slate-300">
                          <img
                            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=120"
                            alt="Bali Trip Group"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-extrabold text-[#0B2A3D] text-xs sm:text-sm flex items-center gap-1 font-sans">
                            Bali Trip? 🌴
                          </div>
                          <div className="text-[10px] text-slate-500 font-medium font-sans">
                            8 members
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-slate-500">
                        <Video size={16} />
                        <Phone size={15} />
                        <MoreVertical size={16} />
                      </div>
                    </div>

                    {/* Messages Container spanning full inner height */}
                    <div className="flex-1 flex flex-col justify-between space-y-4 pt-1 pb-1 font-sans">
                      {/* Chat Message 1: Rohit */}
                      <div className="space-y-1">
                        <div className="bg-white p-3 rounded-2xl rounded-tl-sm max-w-[92%] shadow-sm border border-slate-100 text-xs text-slate-800 space-y-1 font-sans">
                          <span className="font-bold text-emerald-700 block text-[11px] font-sans">
                            Rohit
                          </span>
                          <p className="font-medium text-slate-800 font-sans">
                            Guys, shall we do Bali in August? 😍
                          </p>
                          <div className="flex items-center justify-between pt-1 font-sans">
                            <div className="inline-flex items-center gap-1 text-[10px] bg-slate-50 px-2 py-0.5 rounded-full border border-slate-200 shadow-sm">
                              <span>❤️ 🔥 🙌 4</span>
                            </div>
                            <span className="text-[9px] text-slate-400 font-sans">
                              10:30 AM
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Chat Message 2: Neha & Aman */}
                      <div className="space-y-2.5 font-sans">
                        <div className="bg-white p-2.5 rounded-2xl rounded-tl-sm max-w-[78%] shadow-sm border border-slate-100 text-xs font-sans">
                          <span className="font-bold text-rose-600 block text-[10px] font-sans">
                            Neha
                          </span>
                          <p className="text-slate-800 font-medium font-sans">
                            I&apos;m in! 🙌{" "}
                            <span className="text-[9px] text-slate-400 float-right mt-1 ml-2 font-sans">
                              10:31 AM
                            </span>
                          </p>
                        </div>

                        <div className="bg-[#D8F3C9] p-2.5 rounded-2xl rounded-tr-sm max-w-[88%] ml-auto text-xs border border-emerald-200/60 shadow-sm font-sans">
                          <span className="font-bold text-emerald-800 block text-[10px] font-sans">
                            Aman
                          </span>
                          <p className="text-slate-800 font-medium font-sans">
                            Sorry guys, can&apos;t get leave 🙁{" "}
                            <span className="text-[9px] text-slate-600 float-right mt-1 ml-2 font-sans">
                              10:32 AM ✓
                            </span>
                          </p>
                        </div>
                      </div>

                      {/* Chat Message 3: Priya & Silence */}
                      <div className="space-y-2.5 font-sans">
                        <div className="bg-white p-2.5 rounded-2xl rounded-tl-sm max-w-[78%] shadow-sm border border-slate-100 text-xs font-sans">
                          <span className="font-bold text-purple-600 block text-[10px] font-sans">
                            Priya
                          </span>
                          <p className="text-slate-800 font-medium font-sans">
                            Maybe next year?{" "}
                            <span className="text-[9px] text-slate-400 float-right mt-1 ml-2 font-sans">
                              10:33 AM
                            </span>
                          </p>
                        </div>

                        {/* Dead Chat Fade out */}
                        <div className="bg-white p-2.5 rounded-2xl rounded-tl-sm text-xs text-slate-500 border border-slate-100 flex items-center justify-between font-sans">
                          <div className="flex items-center gap-2 font-sans">
                            <span className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-[10px] text-slate-400 font-bold border border-slate-200 font-sans">
                              ...
                            </span>
                            <span className="italic text-slate-400 font-sans">
                              No replies...
                            </span>
                          </div>
                          <span className="text-[9px] text-slate-400 font-sans">
                            10:45 AM
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Arrow Pill (Floating Desktop Only) */}
            <div className="hidden lg:flex absolute left-[41.6%] top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
              <div className="w-10 h-10 rounded-full bg-white shadow-md border border-slate-200/80 flex items-center justify-center text-[#0B2A3D]">
                <ArrowRight size={18} className="stroke-[2.5]" />
              </div>
            </div>

            {/* ==================== RIGHT CARD: THE KOKALACHI WAY (col-span-7) ==================== */}
            <div className="lg:col-span-7 bg-[#F3ECE1] p-6 sm:p-7 lg:p-8 rounded-[32px] flex flex-col justify-between relative shadow-none h-full border border-[#E3DACB]/80">
              <div className="flex flex-col h-full justify-between">
                {/* Header Badge Pill */}
                <div className="flex justify-center mb-4">
                  <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-[#C85A24] text-white shadow-sm font-sans font-bold text-xs sm:text-sm">
                    <Heart size={14} className="fill-white stroke-none" />
                    <span className="tracking-wide font-sans">
                      The Kokalachi Way
                    </span>
                  </div>
                </div>

                {/* Main Large Group Selfie Photo */}
                <div className="relative h-52 sm:h-64 lg:h-56 rounded-2xl overflow-hidden shadow-sm mb-3.5 group">
                  <img
                    src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&q=85&w=1200"
                    alt="Happy group of travellers selfie"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Cursive Handwritten Overlay Text */}
                  <div className="absolute top-4 right-5 text-white text-right font-medium drop-shadow-md leading-tight">
                    <span className="text-xl sm:text-2xl block font-bold font-script">
                      Real people. <br />
                      Real connections.
                    </span>
                    <span className="text-sm font-normal text-white/90 font-sans">
                      ♡ ✨
                    </span>
                  </div>
                </div>

                {/* 3 Grid Photo Collage Row */}
                <div className="grid grid-cols-3 gap-3 sm:gap-3.5 mb-4">
                  {/* Left: Train Window */}
                  <div className="h-28 sm:h-36 lg:h-36 rounded-2xl overflow-hidden shadow-sm">
                    <img
                      src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=85&w=600"
                      alt="Train view travellers"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Middle: Dinner */}
                  <div className="h-28 sm:h-36 lg:h-36 rounded-2xl overflow-hidden shadow-sm">
                    <img
                      src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=85&w=600"
                      alt="Outdoor group dinner"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Right: Sunset */}
                  <div className="h-28 sm:h-36 lg:h-36 rounded-2xl overflow-hidden shadow-sm">
                    <img
                      src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=85&w=600"
                      alt="Sunset mountain view travellers"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* 4 Pillars Bottom Bar */}
                <div className="bg-[#EAE2D3] rounded-2xl p-4 sm:p-5 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 items-center text-[#2C221E] font-sans">
                  {/* Pillar 1 */}
                  <div className="flex items-center gap-2.5">
                    <Users className="w-5 h-5 text-[#C85A24] shrink-0 stroke-[1.8]" />
                    <span className="text-[11px] sm:text-xs font-semibold leading-tight text-[#2C221E] font-sans">
                      Handpicked <br /> Travel Companions
                    </span>
                  </div>

                  {/* Pillar 2 */}
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-5 h-5 text-[#C85A24] shrink-0 stroke-[1.8]" />
                    <span className="text-[11px] sm:text-xs font-semibold leading-tight text-[#2C221E] font-sans">
                      Trusted <br /> &amp; Safe
                    </span>
                  </div>

                  {/* Pillar 3 */}
                  <div className="flex items-center gap-2.5">
                    <BookOpen className="w-5 h-5 text-[#C85A24] shrink-0 stroke-[1.8]" />
                    <span className="text-[11px] sm:text-xs font-semibold leading-tight text-[#2C221E] font-sans">
                      Thoughtfully <br /> Planned
                    </span>
                  </div>

                  {/* Pillar 4 */}
                  <div className="flex items-center gap-2.5">
                    <Heart className="w-5 h-5 text-[#C85A24] shrink-0 stroke-[1.8]" />
                    <span className="text-[11px] sm:text-xs font-semibold leading-tight text-[#2C221E] font-sans">
                      Connections <br /> That Last
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM EMPHASIS CONCLUSION */}
        <div className="max-w-3xl mx-auto mt-14 sm:mt-16 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-[#0B2A3D] font-serif">
            So, we decided to build a better way to do it.
          </h3>
          <p className="text-base sm:text-lg text-slate-700 mt-2 leading-relaxed font-sans">
            At Kokalachi, we bring together people who share a love for travel —
            so you can stop waiting and start exploring.
          </p>
        </div>
      </div>
    </section>
  );
}
