"use client";

import React from "react";
import {
  X,
  Heart,
  ArrowRight,
  Phone,
  Video,
  MoreVertical,
  Users,
  ShieldCheck,
  Compass,
  Sparkles,
} from "lucide-react";

export function Step2WhyWeExist() {
  return (
    <section
      id="why-we-exist"
      className="py-20 lg:py-28 bg-[#F7F3EC] relative overflow-hidden select-none"
    >
      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-6xl text-center">
        {/* Category Tagline */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D96C2C]/10 text-[#D96C2C] text-xs font-bold uppercase tracking-[0.25em] font-montserrat mb-3">
          <Sparkles size={14} className="text-[#D96C2C]" />
          <span>WHY WE EXIST</span>
        </div>

        {/* Main Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-normal text-[#0B2A3D] leading-[1.12] tracking-tight mb-6 font-serif max-w-4xl mx-auto">
          The hardest part of travelling isn&apos;t choosing where to go. <br />
          <span className="text-[#D96C2C] font-semibold">
            It&apos;s finding the right people to go with.
          </span>
        </h2>

        {/* Emotional Subtitle Paragraph */}
        <div className="text-slate-600 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto space-y-2 mb-4 leading-relaxed">
          <p>
            Most of us have a bucket list full of places we&apos;d love to
            explore. But plans get postponed.
          </p>
          <p>
            Leaves don&apos;t get approved. Schedules don&apos;t match. Life
            gets in the way.
          </p>
          <p className="italic text-[#0B2A3D] font-medium pt-1">
            &quot;Life is too short to let your dream trips sit quietly in a
            saved Instagram folder.&quot;
          </p>
          <p>
            We believe no one should ever have to miss out on seeing the world
            just because their friends are busy.
          </p>
        </div>

        {/* Bold Statement Line */}
        <h3 className="text-base sm:text-xl font-extrabold text-[#0B2A3D] mb-14">
          So we decided to build a better way to travel.
        </h3>

        {/* Comparison Grid: THE OLD WAY vs THE KOKALACHI WAY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
          {/* LEFT PANEL: ✕ THE OLD WAY (Chat Group Fades Away) */}
          <div className="lg:col-span-5 bg-[#EFEBE4] p-6 sm:p-8 rounded-3xl border border-slate-300/60 relative">
            {/* Header Badge */}
            <div className="flex items-center justify-between mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-300/80 text-slate-700 text-[11px] font-extrabold uppercase tracking-wider">
                <X size={13} className="text-slate-600" />
                <span>THE OLD WAY</span>
              </div>
              <span className="text-[11px] text-slate-400 font-serif italic">
                The group chat that fades away...
              </span>
            </div>

            {/* Realistic Chat UI Mockup */}
            <div className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden relative p-4 space-y-4">
              {/* Chat Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-teal-800 text-white font-bold flex items-center justify-center text-xs overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=100"
                      alt="Group Icon"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-xs flex items-center gap-1">
                      Bali Trip? 🌴
                    </h4>
                    <span className="text-[10px] text-slate-400">
                      8 members
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <Video size={16} />
                  <Phone size={15} />
                  <MoreVertical size={16} />
                </div>
              </div>

              {/* Message 1: Rohit (Excitement) */}
              <div className="space-y-1 relative">
                <div className="bg-slate-100 p-3 rounded-2xl rounded-tl-none max-w-[85%] text-xs text-slate-800 space-y-1">
                  <span className="font-bold text-emerald-700 block text-[11px]">
                    Rohit
                  </span>
                  <p>Guys, shall we do Bali in August? 😍</p>
                  <div className="flex items-center gap-1 mt-1 text-[10px] bg-white w-fit px-2 py-0.5 rounded-full shadow-2xl border border-slate-100">
                    <span>❤️ 🔥 🙌 4</span>
                  </div>
                </div>
                {/* Side Annotation */}
                <div className="hidden sm:block absolute -left-20 top-2 text-[10px] font-semibold text-slate-400 italic font-serif">
                  High excitement ↗
                </div>
              </div>

              {/* Message 2: Neha & Aman (Plans change) */}
              <div className="space-y-2 relative">
                <div className="bg-slate-100 p-2.5 rounded-2xl rounded-tl-none max-w-[75%] text-xs text-slate-800">
                  <span className="font-bold text-rose-600 block text-[10px]">
                    Neha
                  </span>
                  <p>I&apos;m in! 🙌</p>
                </div>

                <div className="bg-emerald-100 p-2.5 rounded-2xl rounded-tr-none max-w-[80%] ml-auto text-xs text-slate-800">
                  <span className="font-bold text-emerald-800 block text-[10px]">
                    Aman
                  </span>
                  <p>Sorry guys, can&apos;t get leave 🙁</p>
                </div>

                {/* Side Annotation */}
                <div className="hidden sm:block absolute -left-20 top-4 text-[10px] font-semibold text-slate-400 italic font-serif">
                  Plans change ↗
                </div>
              </div>

              {/* Message 3: Priya & Silence (The trip never happens) */}
              <div className="space-y-2 relative">
                <div className="bg-slate-100 p-2.5 rounded-2xl rounded-tl-none max-w-[75%] text-xs text-slate-800">
                  <span className="font-bold text-purple-600 block text-[10px]">
                    Priya
                  </span>
                  <p>Maybe next year?</p>
                </div>

                <div className="bg-slate-50 p-2 rounded-xl text-[11px] text-slate-400 italic border border-slate-100 flex items-center gap-2">
                  <span>... No replies...</span>
                  <span className="text-[9px] ml-auto">10:45 AM</span>
                </div>

                {/* Side Annotation */}
                <div className="hidden sm:block absolute -left-24 bottom-2 text-[10px] font-semibold text-slate-400 italic font-serif">
                  Trip put on hold ↗
                </div>
              </div>
            </div>
          </div>

          {/* Center Arrow Indicator */}
          <div className="hidden lg:col-span-2 lg:flex justify-center items-center">
            <div className="w-12 h-12 rounded-full bg-white shadow-md border border-slate-200 flex items-center justify-center text-[#0B2A3D]">
              <ArrowRight size={20} />
            </div>
          </div>

          {/* RIGHT PANEL: 🧡 THE KOKALACHI WAY (Real People, Real Connections) */}
          <div className="lg:col-span-5 bg-[#FBF7F0] p-6 sm:p-8 rounded-3xl border border-[#D96C2C]/30 relative shadow-xl">
            {/* Header Badge */}
            <div className="flex items-center justify-between mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D96C2C] text-white text-[11px] font-extrabold uppercase tracking-wider">
                <Heart size={13} className="fill-white" />
                <span>THE KOKALACHI WAY</span>
              </div>
              <span className="text-[11px] text-[#D96C2C] font-serif italic font-bold">
                Strangers ➔ Lifelong Friends
              </span>
            </div>

            {/* Main Top Photo */}
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-md mb-4 group">
              <img
                src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&q=80&w=800"
                alt="Real travellers selfie"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A3D]/60 via-transparent to-transparent" />

              {/* Cursive Annotation */}
              <div className="absolute top-3 right-4 text-white text-xs sm:text-sm font-serif italic tracking-wide drop-shadow-md">
                Real people. <br /> Real connections. ♡
              </div>
            </div>

            {/* Bottom 3 Photo Collage */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="aspect-square rounded-xl overflow-hidden shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&q=80&w=400"
                  alt="Train view travellers"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=400"
                  alt="Outdoor dining together"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=400"
                  alt="Sunset mountain view"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* 4 Value Pills */}
            <div className="grid grid-cols-2 gap-2 text-left pt-2 border-t border-slate-200/60 text-xs font-semibold text-[#0B2A3D]">
              <div className="flex items-center gap-2 p-2 rounded-xl bg-white/80 border border-slate-100">
                <Users size={15} className="text-[#D96C2C]" />
                <span className="text-[11px] leading-tight">
                  Handpicked Companions
                </span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-white/80 border border-slate-100">
                <ShieldCheck size={15} className="text-[#0E5A60]" />
                <span className="text-[11px] leading-tight">
                  Trusted & Safe
                </span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-white/80 border border-slate-100">
                <Compass size={15} className="text-[#0E5A60]" />
                <span className="text-[11px] leading-tight">
                  Thoughtfully Planned
                </span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-white/80 border border-slate-100">
                <Heart size={15} className="text-[#D96C2C]" />
                <span className="text-[11px] leading-tight">
                  Connections That Last
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Heartfelt Quote Banner */}
        <div className="mt-16 bg-[#0B2A3D] rounded-3xl p-8 sm:p-10 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 text-left border border-white/10">
          <div className="max-w-2xl">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#D96C2C] block mb-1">
              Kokalachi Community Manifesto
            </span>
            <p className="text-base sm:text-lg font-serif italic text-slate-200 leading-snug">
              &quot;You don&apos;t need a huge group of friends to travel the
              world. You just need the right circle — people who show up, share
              the adventure, and stay friends long after the trip is over.&quot;
            </p>
          </div>
          <a
            href="#upcoming-circles"
            className="shrink-0 px-7 py-3.5 bg-[#0E5A60] hover:bg-[#0a464b] text-white font-bold text-xs uppercase tracking-wider rounded-2xl shadow-lg transition-all flex items-center gap-2"
          >
            <span>Find Your Circle</span>
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
