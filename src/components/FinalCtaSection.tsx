"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { TitleUnderline } from "@/components/ui/TitleUnderline";
import { FlyingBirds } from "@/components/ui/FlyingBirds";

import { HandwrittenSticker } from "@/components/ui/HandwrittenSticker";

export function FinalCtaSection() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden select-none border-t border-amber-900/10">
      <div className="absolute inset-0 z-0">
        <img
          src="/cta_friends_bg.jpg"
          alt="Group of friends sharing moments on a mountain peak at sunset"
          className="w-full h-full object-cover object-center"
        />
        {/* Soft Warm Gradient Overlay for High Editorial Aesthetics & Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF5EE]/95 via-[#FAF5EE]/88 to-[#FAF5EE]/95 opacity-50" />
      </div>
      {/* Decorative Flying Birds Outline (Top Right Variation) */}
      <FlyingBirds className="hidden lg:block absolute top-12 right-16 opacity-35 text-[#0B2A3D]" />

      {/* Decorative Ambient Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-80 bg-[#C85A24]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-4xl text-center">
        {/* Sub-header Category Tagline */}
        <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-[#C85A24] font-montserrat block mb-4">
          YOUR NEXT CHAPTER
        </span>

        {/* Main Editorial Heading in Brand Serif Font */}
        <div className="relative max-w-3xl mx-auto mb-6">
          {/* Left Handwritten Margin Accent */}
          <div className="hidden xl:flex items-center gap-1.5 absolute -right-40 -bottom-16 text-[#0B2A3D] font-script text-base sm:text-lg font-bold -rotate-6 pointer-events-none select-none drop-shadow-[0_1px_3px_rgba(255,255,255,0.9)]">
            <span>✨ say yes to new adventures</span>
          </div>

          {/* Right Handwritten Margin Accent */}
          <div className="hidden xl:flex items-center gap-1.5 absolute -right-54 top-2 text-[#0B2A3D] font-script text-base sm:text-lg font-bold rotate-4 pointer-events-none select-none drop-shadow-[0_1px_3px_rgba(255,255,255,0.9)]">
            <span>♡ your story starts here</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-normal text-[#0B2A3D] leading-[1.2] font-serif">
            Somewhere, someone else is looking for{" "}
            <span className="font-semibold text-[#0B2A3D]">
              exactly the trip you are.
            </span>
          </h2>
        </div>

        {/* Subtitle with Handwritten Highlight */}
        <p className="text-[#0B2A3D]/80 text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-xl mx-auto mb-8 font-sans italic">
          &quot;Maybe this is how you{" "}
          <span className="relative inline-block font-script font-normal text-[1.12em] text-[#0B2A3D] not-italic">
            meet
            <TitleUnderline />
          </span>
          .&quot;
        </p>

        {/* Signature Brand CTA Button (Deep Navy Rounded Pill) */}
        <div className="flex justify-center">
          <a
            href="#upcoming-journeys"
            className="bg-[#0B2A3D] hover:bg-[#061C29] text-white px-9 py-4 rounded-full font-medium text-base shadow-md hover:shadow-2xl transition-all inline-flex items-center gap-3 cursor-pointer hover:scale-105"
          >
            <span>Explore Upcoming Trips</span>
            <ArrowRight size={18} className="stroke-[2.2]" />
          </a>
        </div>

        <HandwrittenSticker
          type="pack-bags"
          className=" absolute -left-28 bottom-0 text-[#4A3E3E] -rotate-6"
        />
      </div>
    </section>
  );
}
