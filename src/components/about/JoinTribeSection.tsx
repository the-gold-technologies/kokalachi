"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";

export function JoinTribeSection() {
  return (
    <section
      id="join-the-tribe"
      className="py-14 sm:py-20 relative overflow-hidden select-none border-t border-amber-900/10"
    >
      {/* Background Image & Warm Shading */}
      <div className="absolute inset-0 z-0">
        <img
          src="/about_join_tribe_bg.jpg"
          alt="Panoramic mountain sunrise with travellers"
          className="w-full h-full object-cover object-center"
        />
        {/* Soft Warm Gradient Overlay for High Contrast & High Visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF5EE]/75 via-[#FAF5EE]/45 to-[#FAF5EE]/75 pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-4xl text-center">
        {/* Category Tagline */}
        <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-[#C85A24] font-montserrat block mb-4 drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">
          JOIN THE TRIBE
        </span>

        {/* Main Title */}
        <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-normal text-[#0B2A3D] leading-tight font-serif mb-6 drop-shadow-[0_1px_3px_rgba(255,255,255,0.8)]">
          Your next journey is waiting.{" "}
          <span className="font-semibold text-[#0B2A3D]">
            So are your people.
          </span>
        </h2>

        {/* Paragraph Copy */}
        <p className="text-[#0B2A3D]/90 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-8 font-sans drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]">
          Somewhere out there is a group of travellers who are just as ready to
          explore, connect, and make memories as you are. All that&apos;s
          missing is you.
        </p>

        {/* Handwritten Accent Text with Whiter Shadow for High Visibility */}
        <p className="text-[#C85A24] font-script text-xl sm:text-2xl lg:text-3xl font-bold mb-10 drop-shadow-[0_2px_6px_rgba(255,255,255,0.95)] tracking-wide">
          ♡ This is more than a trip. It&apos;s how you find your tribe — one
          journey at a time.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/#upcoming-journeys"
            className="bg-[#0B2A3D] hover:bg-[#061C29] text-white px-8 py-4 rounded-full font-medium text-base shadow-md hover:shadow-xl transition-all inline-flex items-center gap-3 cursor-pointer hover:scale-105"
          >
            <span>Explore Upcoming Trips</span>
            <ArrowRight size={18} />
          </Link>
          <Link
            href="/#upcoming-journeys"
            className="bg-white/90 hover:bg-white text-[#0B2A3D] px-8 py-4 rounded-full font-medium text-base border border-[#0B2A3D]/30 shadow-xs hover:shadow-md transition-all inline-flex items-center gap-3 cursor-pointer hover:scale-105"
          >
            <Compass size={18} className="text-[#C85A24]" />
            <span>Find your Next Journey</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
