"use client";

import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";

export function FinalCtaSection() {
  return (
    <section className="py-16 sm:py-20 bg-[#FAF5EE] relative overflow-hidden select-none">
      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-5xl">
        {/* Final High-Impact Booking CTA Box */}
        <div className="bg-[#0B212D] p-10 sm:p-14 lg:p-16 rounded-[36px] text-white shadow-2xl relative overflow-hidden text-center flex flex-col items-center border border-white/10">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/15 text-[#38BDF8] text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] mb-8 shadow-xs">
            <Sparkles size={14} className="text-[#D96C2C]" />
            <span>YOUR CIRCLE IS FORMING NOW</span>
          </div>

          {/* Headline */}
          <h3 className="text-3xl sm:text-5xl lg:text-[54px] font-black text-white leading-[1.12] tracking-tight mb-5 max-w-3xl">
            Somewhere, someone else is <br />
            looking <br />
            <span className="text-[#6C8E7E]">
              for exactly the trip you are.
            </span>
          </h3>

          {/* Quote Subtitle */}
          <p className="text-slate-300 text-lg sm:text-xl font-sans italic font-normal mb-8">
            &quot;Maybe this is how you meet.&quot;
          </p>

          {/* CTA Button */}
          <a
            href="#upcoming-journeys"
            className="px-8 py-4 sm:px-9 sm:py-4.5 bg-[#0A4E53] hover:bg-[#083e42] text-white font-bold text-xs uppercase tracking-[0.2em] rounded-2xl shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-3 border border-teal-400/30 cursor-pointer"
          >
            <span>EXPLORE UPCOMING TRIPS</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
