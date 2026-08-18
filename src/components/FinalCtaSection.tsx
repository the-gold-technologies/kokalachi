"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export function FinalCtaSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#FAF5EE] relative overflow-hidden select-none">
      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-4xl text-center">
        {/* Main Heading in Brand Serif Font */}
        <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-normal text-[#0B2A3D] leading-[1.14] font-serif mb-5 max-w-3xl mx-auto">
          Somewhere, someone else is looking for{" "}
          <span className="font-semibold text-[#0B2A3D]">
            exactly the trip you are.
          </span>
        </h2>

        {/* Subtitle Description */}
        <p className="text-[#0B2A3D]/75 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto mb-10 font-sans italic">
          &quot;Maybe this is how you meet.&quot;
        </p>

        {/* Signature Brand CTA Button (Deep Navy Rounded Pill) */}
        <div className="flex justify-center">
          <a
            href="#upcoming-journeys"
            className="bg-[#0B2A3D] hover:bg-[#061C29] text-white px-8 py-4 rounded-full font-medium text-base sm:text-lg shadow-md hover:shadow-xl transition-all inline-flex items-center gap-2.5 cursor-pointer hover:scale-105"
          >
            <span>Explore Upcoming Trips</span>
            <ArrowRight size={18} className="stroke-[2.2]" />
          </a>
        </div>
      </div>
    </section>
  );
}
