"use client";

import React from "react";
import { TitleUnderline } from "@/components/ui/TitleUnderline";
import { FlyingBirds } from "@/components/ui/FlyingBirds";
import { HandwrittenSticker } from "@/components/ui/HandwrittenSticker";

export function AboutHeroSection() {
  return (
    <section
      id="about-hero"
      className="relative py-12 sm:py-16 bg-[#FAF5EE] overflow-hidden select-none border-b border-amber-900/10"
    >
      {/* Ambient Glow & Decorative Birds */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-[#C85A24]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#0E5A60]/10 rounded-full blur-3xl pointer-events-none" />
      <FlyingBirds className="hidden lg:block absolute top-12 right-20 opacity-40 text-[#0B2A3D]" />

      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Category Tagline */}
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-[#C85A24] font-montserrat inline-block">
            ABOUT KOKALACHI
          </span>

          {/* Main Editorial Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-normal text-[#0B2A3D] leading-tight font-serif">
            We bring together the travellers who were always{" "}
            <span className="relative inline-block font-semibold text-[#0B2A3D]">
              meant to meet.
              <TitleUnderline />
            </span>
          </h1>

          {/* Handwritten Subtitle */}
          <p className="text-[#C85A24] font-script text-xl sm:text-2xl lg:text-3xl font-bold pt-1">
            Where like-minded travellers find each other — and the world,
            together.
          </p>

          {/* Narrative Hero Box */}
          <div className="bg-white/80 backdrop-blur-md p-6 sm:p-10 rounded-3xl border border-amber-900/10 shadow-sm text-left mt-8 space-y-4 text-[#0B2A3D]/85 text-base sm:text-lg leading-relaxed font-sans relative">
            <HandwrittenSticker
              type="pack-bags"
              className="hidden sm:block absolute -right-6 -top-6 text-[#C85A24] rotate-6 text-sm"
            />

            <p>
              <strong className="text-[#0B2A3D] font-semibold">
                Kokalachi exists for a simple reason:
              </strong>{" "}
              travelling is one of the best things you can do — but only when
              you&apos;re doing it with the right people.
            </p>
            <p>
              We bring together people who love travelling but don&apos;t
              always have the right people to travel with. Through curated
              group journeys, we help you discover the world alongside
              like-minded travellers — people who become as much a part of
              the trip as the destination itself.
            </p>
            <p className="text-[#C85A24] font-serif font-bold italic text-lg sm:text-xl border-l-4 border-[#C85A24] pl-4 py-1 mt-4">
              &quot;Because the places you go matter. But who you go with is
              what you remember.&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
