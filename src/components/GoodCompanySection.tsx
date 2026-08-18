"use client";

import React from "react";
import { TitleUnderline } from "@/components/ui/TitleUnderline";
import {
  Users,
  MessageCircle,
  ShieldCheck,
  Heart,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export function GoodCompanySection() {
  return (
    <section
      id="good-company"
      className="py-20 lg:py-28 bg-[#ffffff] relative overflow-hidden select-none"
    >
      {/* Background Soft Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[#D96C2C]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#0E5A60]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Flying Birds SVG Outline */}
      <div className="hidden lg:block absolute top-12 right-16 opacity-30 pointer-events-none">
        <svg
          className="w-24 h-12 text-[#0B2A3D]"
          viewBox="0 0 100 50"
          fill="none"
        >
          <path
            d="M10 25 Q 20 15 30 25 Q 40 15 50 25"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M60 15 Q 67 8 75 15 Q 82 8 90 15"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative z-10 max-w-7xl text-center">
        {/* SECTION HEADER BADGE */}
        <div className="inline-block mb-3">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-[#D96C2C] font-montserrat">
            TRAVEL WITH CONFIDENCE
          </span>
        </div>

        {/* MAIN HEADING */}
        <div className="mb-4 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-normal text-[#0B2A3D] leading-tight font-serif">
            You&apos;re in{" "}
            <span className="relative inline-block font-script font-normal text-[1.12em] text-[#0B2A3D]">
              good
              <TitleUnderline />
            </span>{" "}
            company.
          </h2>
        </div>

        {/* SUBTITLE DESCRIPTION */}
        <p className="text-[#0B2A3D]/80 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mb-16 leading-relaxed font-sans">
          Every Kokalachi journey is thoughtfully curated so you can focus on
          the experience, not the uncertainty.{" "}
          <br className="hidden sm:inline" />
          Whether it&apos;s your first group trip or your tenth, we work hard to
          ensure you feel welcomed, comfortable and supported from the moment
          you join.
        </p>

        {/* 4 TORN-PAPER MOODBOARD CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-16 text-left">
          {/* ================= CARD 1: Small, Curated Groups ================= */}
          <div className="bg-[#FAF6F0] rounded-[28px] border border-amber-900/15 shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col justify-between group relative transform lg:-rotate-1 hover:rotate-0">
            {/* Top Photo with Botanical Leaf Overlay */}
            <div className="h-44 sm:h-48 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=85&w=800"
                alt="Friends laughing around campfire on beach"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />

              {/* Top Left Botanical Leaf Line Doodle */}
              <div className="absolute top-3.5 left-3.5 opacity-80 pointer-events-none">
                <svg
                  className="w-9 h-9 text-white"
                  viewBox="0 0 50 50"
                  fill="none"
                >
                  <path
                    d="M10 40 C 20 20 30 15 40 10 M25 25 C 20 18 15 20 12 25 M30 20 C 35 15 40 18 42 22 M20 32 C 15 28 10 32 10 36"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Top Right Hashtag Tag */}
              <div className="absolute top-3.5 right-3.5 text-white/90 font-mono text-[10px] tracking-wider uppercase bg-black/30 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                #curatedgroups
              </div>

              {/* ORGANIC TORN PAPER DECKLE EDGE MASK SVG */}
              <div className="absolute -bottom-1 left-0 right-0 w-full z-10 pointer-events-none">
                <svg
                  className="w-full h-9 text-[#FAF6F0] block"
                  viewBox="0 0 500 50"
                  preserveAspectRatio="none"
                  fill="currentColor"
                >
                  <path d="M0,20 Q25,5 50,22 T100,10 T150,30 T200,8 T250,25 T300,12 T350,28 T400,6 T450,24 T500,15 L500,50 L0,50 Z" />
                </svg>
              </div>
            </div>

            {/* Bottom Textured Paper Content Block */}
            <div className="p-5 pt-1.5 space-y-3 flex-1 flex flex-col justify-between relative bg-[#FAF6F0]">
              {/* Color Swatch Dots & Stipple Ink Dots */}
              <div className="flex items-center justify-between border-b border-amber-900/10 pb-2.5">
                <div className="w-9 h-9 rounded-full bg-[#FDF0EC] text-[#D96C2C] flex items-center justify-center shadow-2xs">
                  <Users size={18} className="stroke-[2]" />
                </div>

                {/* 3 Color Palette Swatches */}
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#D96C2C]/80 inline-block shadow-2xs" />
                  <span className="w-3 h-3 rounded-full bg-[#0E5A60]/80 inline-block shadow-2xs" />
                  <span className="w-3 h-3 rounded-full bg-[#E5B588] inline-block shadow-2xs" />
                </div>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-lg sm:text-xl font-bold font-serif text-[#0B2A3D] leading-snug">
                  Small, Curated Groups
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
                  We keep our groups intentionally small, making it easier to
                  connect, feel included and truly enjoy the journey.
                </p>
              </div>

              {/* Handwritten Typewriter Footer Hashtag */}
              <div className="pt-2.5 border-t border-amber-900/10 text-right">
                <span className="font-mono text-[11px] text-slate-500 tracking-wider">
                  #intimatevibes
                </span>
              </div>
            </div>
          </div>

          {/* ================= CARD 2: Meet Before You Travel ================= */}
          <div className="bg-[#FAF6F0] rounded-[28px] border border-amber-900/15 shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col justify-between group relative transform lg:rotate-1 hover:rotate-0">
            {/* Top Photo with Leaf Outline */}
            <div className="h-44 sm:h-48 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&q=85&w=800"
                alt="Travellers exploring historic streets together"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />

              {/* Top Left Botanical Leaf Line Doodle */}
              <div className="absolute top-3.5 left-3.5 opacity-80 pointer-events-none">
                <svg
                  className="w-9 h-9 text-white"
                  viewBox="0 0 50 50"
                  fill="none"
                >
                  <path
                    d="M10 20 Q 25 10 40 25 Q 25 40 10 20 Z M20 23 L 30 23"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Top Right Hashtag Tag */}
              <div className="absolute top-3.5 right-3.5 text-white/90 font-mono text-[10px] tracking-wider uppercase bg-black/30 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                #meetfirst
              </div>

              {/* ORGANIC TORN PAPER DECKLE EDGE MASK SVG */}
              <div className="absolute -bottom-1 left-0 right-0 w-full z-10 pointer-events-none">
                <svg
                  className="w-full h-9 text-[#FAF6F0] block"
                  viewBox="0 0 500 50"
                  preserveAspectRatio="none"
                  fill="currentColor"
                >
                  <path d="M0,15 Q30,28 60,10 T120,25 T180,8 T240,30 T300,14 T360,26 T420,10 T480,22 T500,8 L500,50 L0,50 Z" />
                </svg>
              </div>
            </div>

            {/* Bottom Textured Paper Content Block */}
            <div className="p-5 pt-1.5 space-y-3 flex-1 flex flex-col justify-between relative bg-[#FAF6F0]">
              {/* Color Swatch Dots & Icon Badge */}
              <div className="flex items-center justify-between border-b border-amber-900/10 pb-2.5">
                <div className="w-9 h-9 rounded-full bg-[#EBF3F0] text-[#0E5A60] flex items-center justify-center shadow-2xs">
                  <MessageCircle size={18} className="stroke-[2]" />
                </div>

                {/* 3 Color Palette Swatches */}
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#0E5A60]/80 inline-block shadow-2xs" />
                  <span className="w-3 h-3 rounded-full bg-[#A3C4BC] inline-block shadow-2xs" />
                  <span className="w-3 h-3 rounded-full bg-[#E5B588] inline-block shadow-2xs" />
                </div>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-lg sm:text-xl font-bold font-serif text-[#0B2A3D] leading-snug">
                  Meet Before You Travel
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
                  Get introduced to fellow travellers before departure through a
                  dedicated pre-trip community.
                </p>
                <p className="font-script text-[#0E5A60] text-xs sm:text-sm pt-0.5">
                  &quot;The first hello shouldn&apos;t happen at the
                  airport.&quot;
                </p>
              </div>

              {/* Handwritten Typewriter Footer Hashtag */}
              <div className="pt-2.5 border-t border-amber-900/10 text-right">
                <span className="font-mono text-[11px] text-slate-500 tracking-wider">
                  #pretripcommunity
                </span>
              </div>
            </div>
          </div>

          {/* ================= CARD 3: Safety Comes First ================= */}
          <div className="bg-[#FAF6F0] rounded-[28px] border border-amber-900/15 shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col justify-between group relative transform lg:-rotate-1 hover:rotate-0">
            {/* Top Photo with Leaf Outline */}
            <div className="h-44 sm:h-48 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&fit=crop&q=85&w=800"
                alt="Serene mountain landscape view"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />

              {/* Top Left Botanical Leaf Line Doodle */}
              <div className="absolute top-3.5 left-3.5 opacity-80 pointer-events-none">
                <svg
                  className="w-9 h-9 text-white"
                  viewBox="0 0 50 50"
                  fill="none"
                >
                  <path
                    d="M15 40 Q 25 15 40 10 M25 25 Q 35 25 38 30 M20 30 Q 12 30 10 35"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Top Right Hashtag Tag */}
              <div className="absolute top-3.5 right-3.5 text-white/90 font-mono text-[10px] tracking-wider uppercase bg-black/30 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                #safetyfirst
              </div>

              {/* ORGANIC TORN PAPER DECKLE EDGE MASK SVG */}
              <div className="absolute -bottom-1 left-0 right-0 w-full z-10 pointer-events-none">
                <svg
                  className="w-full h-9 text-[#FAF6F0] block"
                  viewBox="0 0 500 50"
                  preserveAspectRatio="none"
                  fill="currentColor"
                >
                  <path d="M0,25 Q35,8 70,24 T140,12 T210,28 T280,10 T350,22 T420,8 T490,26 T500,16 L500,50 L0,50 Z" />
                </svg>
              </div>
            </div>

            {/* Bottom Textured Paper Content Block */}
            <div className="p-5 pt-1.5 space-y-3 flex-1 flex flex-col justify-between relative bg-[#FAF6F0]">
              {/* Color Swatch Dots & Icon Badge */}
              <div className="flex items-center justify-between border-b border-amber-900/10 pb-2.5">
                <div className="w-9 h-9 rounded-full bg-[#EEF4F8] text-[#0B2A3D] flex items-center justify-center shadow-2xs">
                  <ShieldCheck size={18} className="stroke-[2]" />
                </div>

                {/* 3 Color Palette Swatches */}
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#0B2A3D]/80 inline-block shadow-2xs" />
                  <span className="w-3 h-3 rounded-full bg-[#8EAB9B] inline-block shadow-2xs" />
                  <span className="w-3 h-3 rounded-full bg-[#E5B588] inline-block shadow-2xs" />
                </div>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-lg sm:text-xl font-bold font-serif text-[#0B2A3D] leading-snug">
                  Safety Comes First
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
                  From trusted travel partners to clear community guidelines and
                  responsive support, your comfort is always our priority.
                </p>
              </div>

              {/* Handwritten Typewriter Footer Hashtag */}
              <div className="pt-2.5 border-t border-amber-900/10 text-right">
                <span className="font-mono text-[11px] text-slate-500 tracking-wider">
                  #247support
                </span>
              </div>
            </div>
          </div>

          {/* ================= CARD 4: A Community Built on Respect ================= */}
          <div className="bg-[#FAF6F0] rounded-[28px] border border-amber-900/15 shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col justify-between group relative transform lg:rotate-1 hover:rotate-0">
            {/* Top Photo with Leaf Outline */}
            <div className="h-44 sm:h-48 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=85&w=800"
                alt="Group of friends gathering with warm smiles"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />

              {/* Top Left Botanical Leaf Line Doodle */}
              <div className="absolute top-3.5 left-3.5 opacity-80 pointer-events-none">
                <svg
                  className="w-9 h-9 text-white"
                  viewBox="0 0 50 50"
                  fill="none"
                >
                  <path
                    d="M10 35 C 25 15 35 10 42 8 M20 22 C 15 15 25 15 28 20 M28 28 C 35 24 38 32 32 34"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Top Right Hashtag Tag */}
              <div className="absolute top-3.5 right-3.5 text-white/90 font-mono text-[10px] tracking-wider uppercase bg-black/30 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                #respect
              </div>

              {/* ORGANIC TORN PAPER DECKLE EDGE MASK SVG */}
              <div className="absolute -bottom-1 left-0 right-0 w-full z-10 pointer-events-none">
                <svg
                  className="w-full h-9 text-[#FAF6F0] block"
                  viewBox="0 0 500 50"
                  preserveAspectRatio="none"
                  fill="currentColor"
                >
                  <path d="M0,18 Q20,30 50,12 T110,26 T170,10 T230,28 T290,12 T350,24 T410,8 T470,22 T500,10 L500,50 L0,50 Z" />
                </svg>
              </div>
            </div>

            {/* Bottom Textured Paper Content Block */}
            <div className="p-5 pt-1.5 space-y-3 flex-1 flex flex-col justify-between relative bg-[#FAF6F0]">
              {/* Color Swatch Dots & Icon Badge */}
              <div className="flex items-center justify-between border-b border-amber-900/10 pb-2.5">
                <div className="w-9 h-9 rounded-full bg-[#FDF0EC] text-[#D96C2C] flex items-center justify-center shadow-2xs">
                  <Heart size={18} className="stroke-[2]" />
                </div>

                {/* 3 Color Palette Swatches */}
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#D96C2C]/80 inline-block shadow-2xs" />
                  <span className="w-3 h-3 rounded-full bg-[#D68C45] inline-block shadow-2xs" />
                  <span className="w-3 h-3 rounded-full bg-[#E5B588] inline-block shadow-2xs" />
                </div>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-lg sm:text-xl font-bold font-serif text-[#0B2A3D] leading-snug">
                  Built on Respect
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
                  Every traveller is expected to treat fellow travellers, local
                  communities and shared experiences with kindness and respect.
                </p>
              </div>

              {/* Handwritten Typewriter Footer Hashtag */}
              <div className="pt-2.5 border-t border-amber-900/10 text-right">
                <span className="font-mono text-[11px] text-slate-500 tracking-wider">
                  #kindnessfirst
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM OUR PROMISE STRIP BANNER */}
        <div className="bg-[#FAF4EB] rounded-[32px] border border-amber-900/10 p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center justify-start gap-6 sm:gap-8 text-left max-w-6xl mx-auto mb-10">
          <div className="flex items-center gap-4 sm:gap-6 shrink-0 pr-0 md:pr-8 border-b md:border-b-0 md:border-r border-dashed border-[#D96C2C]/30 pb-4 md:pb-0 w-full md:w-auto">
            {/* High-Precision Orange Radiating Heart with Tapered Supporting Swoosh Icon */}
            <svg
              className="w-14 h-14 text-[#D96C2C] shrink-0"
              viewBox="0 0 64 64"
              fill="none"
            >
              {/* 5 Rounded Radiating Rays */}
              <path
                d="M32 6V12"
                stroke="currentColor"
                strokeWidth="3.6"
                strokeLinecap="round"
              />
              <path
                d="M18 12L22 16"
                stroke="currentColor"
                strokeWidth="3.6"
                strokeLinecap="round"
              />
              <path
                d="M46 12L42 16"
                stroke="currentColor"
                strokeWidth="3.6"
                strokeLinecap="round"
              />
              <path
                d="M11 25H16"
                stroke="currentColor"
                strokeWidth="3.6"
                strokeLinecap="round"
              />
              <path
                d="M53 25H48"
                stroke="currentColor"
                strokeWidth="3.6"
                strokeLinecap="round"
              />

              {/* Heart Outline */}
              <path
                d="M32 23 C27.5 16, 19.5 16, 19.5 24.5 C19.5 32.5, 32 42.5, 32 42.5 C32 42.5, 44.5 32.5, 44.5 24.5 C44.5 16, 36.5 16, 32 23 Z"
                stroke="currentColor"
                strokeWidth="3.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Supporting Tapered Curved Swoosh Arc */}
              <path
                d="M 14 52 C 22 55, 33 51, 48 37 C 40 47, 28 50, 14 52 Z"
                fill="currentColor"
              />
            </svg>
            <h4 className="text-xl sm:text-2xl font-serif text-[#0B2A3D] font-bold leading-tight">
              Our <br /> Promise
            </h4>
          </div>

          <div className="flex-1 space-y-1.5">
            <p className="text-lg sm:text-xl lg:text-[22px] font-serif font-bold text-[#0B2A3D] leading-snug">
              We&apos;ll never compromise your safety, comfort or experience
              just to fill a trip.
            </p>
            <div className="font-script text-[#D96C2C] text-xl sm:text-2xl lg:text-[28px] font-normal flex items-center gap-3 flex-wrap leading-relaxed">
              <span>
                That&apos;s a promise we intend to keep on every journey.
              </span>

              {/* Hand-drawn Ink Line & Tilted Heart Doodle SVG */}
              <svg
                className="h-6 w-32 text-[#0B2A3D] inline-block shrink-0 ml-1"
                viewBox="0 0 120 24"
                fill="none"
              >
                <path
                  d="M 4 14 Q 50 11 88 13"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M 102 11 C 99.5 6.5, 94 7, 94 11.5 C 94 16, 102 20.5, 102 20.5 C 102 20.5, 110 16, 110 11.5 C 110 7, 104.5 6.5, 102 11 Z"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* BOTTOM CTA BUTTON */}
        <div>
          <a
            href="#faqs"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0B2A3D] text-white hover:bg-[#0E5A60] font-medium text-sm transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
          >
            <span>Learn More About Trust &amp; Safety</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
