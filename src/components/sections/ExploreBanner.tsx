import React from "react";
import { Button } from "../ui/Button";
import { ArrowRight } from "lucide-react";

export function ExploreBanner() {
  return (
    <section className="relative h-[615px] md:h-[615px] w-full flex flex-col items-center justify-center overflow-hidden select-none">
      {/* Background Image - Surfer Riding Huge Wave */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80&w=1600')",
        }}
      />

      {/* Top Gradient Overlay to blend with the section above (#F8F5EE) */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#F8F5EE] to-transparent z-10 pointer-events-none" />

      {/* Soft overlay to maintain the bright turquoise water color */}
      <div className="absolute inset-0 bg-black/15 z-0" />

      {/* Centered Content */}
      <div className="container mx-auto px-4 flex flex-col items-center text-center z-10 relative">
        <span
          className="text-white text-2xl md:text-3xl mb-4 block"
          style={{ fontFamily: "var(--font-playball)" }}
        >
          Next Adventure Destination
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 max-w-3xl leading-tight">
          Popular Travel Destinations <br />
          Available Worldwide
        </h2>

        <Button
          variant="primary"
          className="rounded-lg px-8 py-3 bg-[#F5EBDD] hover:bg-[#e6d6c4] text-[#1F355E] font-bold text-xs md:text-sm uppercase tracking-wider flex items-center shadow-lg transition-all duration-300 border border-[#e6d6c4]"
        >
          BOOK YOUR TRIP NOW <ArrowRight size={16} className="ml-2" />
        </Button>
      </div>

      {/* Large Bottom Stroke Outline Text: EXPLORE THE WORLD (Redesigned with a unique 3D Terra Cotta shadow) */}
      <div className="absolute bottom-7 left-0 right-0 overflow-hidden pointer-events-none select-none z-10 flex justify-center">
        <h1
          className="text-[44px] sm:text-[68px] md:text-[96px] lg:text-[110px] font-black tracking-widest whitespace-nowrap leading-none text-center"
          style={{
            WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.85)",
            color: "transparent",
            textShadow: "3px 3px 0px rgba(217, 119, 69, 0.4)",
          }}
        >
          EXPLORE THE WORLD
        </h1>
      </div>
    </section>
  );
}
