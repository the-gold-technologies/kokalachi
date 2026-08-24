"use client";

import React from "react";
import { Users, Heart, ShieldCheck, Globe, Award } from "lucide-react";

export function WhatWeBelieveSection() {
  const pillars = [
    {
      title: "Curated Travel groups, real connection.",
      desc: "We keep our journeys in alignment with the interest of the Travellers. Random groups make it easy for people to disappear into the crowd; curated groups make it easy to actually know the people you're travelling with.",
      image: "/about_belief_curated_groups.jpg",
      tapeLabel: "✨ real connections",
      rotation: "-rotate-1",
      colSpan: "col-span-1",
    },
    {
      title: "The people matter as much as the place.",
      desc: "A great destination and the wrong group can still make for a forgettable trip. We curate for compatibility first, because that's what makes a journey unforgettable.",
      image: "/about_belief_people_matter.jpg",
      tapeLabel: "♡ shared energy",
      rotation: "rotate-1",
      colSpan: "col-span-1",
    },
    {
      title: "Trust is earned before the trip starts.",
      desc: "From verified travellers to pre-trip introductions, we believe the first hello shouldn't happen at the airport — comfort and trust are built long before departure.",
      image: "/about_belief_trust_earned.jpg",
      tapeLabel: "🔒 earned trust",
      rotation: "-rotate-2",
      colSpan: "col-span-1",
    },
    {
      title: "Respect is non-negotiable.",
      desc: "For fellow travellers, for hosts, for local communities. Every Kokalachi journey is built on the expectation that everyone shows up with kindness.",
      image: "/about_belief_respect.jpg",
      tapeLabel: "📌 kindness first",
      rotation: "rotate-2",
      colSpan: "col-span-1",
    },
    {
      title: "We won't compromise your experience to fill a seat.",
      desc: "We'll always choose the right group over a full one. Quality, intimate group dynamics and genuine human warmth will always come before numbers. That's a promise, not a slogan.",
      image: "/about_belief_quality.jpg",
      tapeLabel: "★ quality over quantity",
      rotation: "-rotate-1",
      colSpan: "md:col-span-2 lg:col-span-2",
    },
  ];

  return (
    <section
      id="what-we-believe"
      className="py-10 sm:py-12 lg:py-14 bg-[#FAF5EE] relative overflow-hidden select-none border-t border-b border-amber-900/10"
    >
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-96 bg-[#C85A24]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 lg:mb-24 space-y-3">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-[#C85A24] font-montserrat block">
            WHAT WE BELIEVE (MISSION)
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0B2A3D] leading-tight font-serif">
            The Kokalachi Way
          </h2>

          <p className="text-[#0B2A3D]/80 text-base sm:text-lg font-sans">
            Everything we design — every itinerary, every group, every detail —
            comes back to a handful of things we simply won&apos;t compromise
            on.
          </p>
        </div>

        {/* 5 Pillars Grid: Taped Handwritten Paper Memo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-8 gap-y-12 sm:gap-y-14 lg:gap-y-16 max-w-6xl mx-auto">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className={`relative group filter drop-shadow-lg hover:drop-shadow-xl transition-all duration-500 transform ${pillar.rotation} hover:rotate-0 hover:-translate-y-1.5 ${pillar.colSpan}`}
            >
              {/* Top Masking Tape Strip with Handwritten Emotion Label */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4.5 py-1 min-w-[120px] bg-[#E3D4BF]/95 backdrop-blur-xs border-x border-amber-900/25 shadow-xs transform -rotate-1 z-30 flex items-center justify-center pointer-events-none">
                <span className="font-script text-xs sm:text-sm text-[#5C3D24] font-bold tracking-wide whitespace-nowrap">
                  {pillar.tapeLabel}
                </span>
              </div>

              {/* Taped Paper Note Card Container */}
              <div className="bg-[#FFFDF9] text-[#0B2A3D] p-7 sm:p-8 pt-9 pb-9 min-h-[310px] sm:min-h-[340px] rounded-2xl border border-amber-900/20 shadow-md relative overflow-hidden flex flex-col justify-between h-full">
                {/* Background Travel Image */}
                <img
                  src={"/paper-bg.jpg"}
                  alt={pillar.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-45 sm:opacity-50 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                />

                {/* Requested Soft Cream Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#FAF5EE]/40 via-[#FAF5EE]/50 to-[#FAF5EE]/85 opacity-40 pointer-events-none" />

                {/* Card Paragraph Content */}
                <div className="relative z-10 space-y-4">
                  {/* Handwritten Title with Underline & Heart */}
                  <div className="text-center pb-1">
                    <div className="inline-block border-b-2 border-[#0B2A3D] pb-1">
                      <h3 className="font-script text-2xl sm:text-3xl  text-[#0B2A3D] font-bold flex items-center justify-center gap-2 leading-[1.3]">
                        <span>{pillar.title}</span>
                        <span className="text-2xl text-[#EF4444]">♡</span>
                      </h3>
                    </div>
                  </div>

                  {/* Handwritten Paragraph Copy - Increased Font Size by ~4px */}
                  <p className="font-script text-xl sm:text-2xl lg:text-[23px] text-[#0B2A3D] leading-[1.3] font-bold text-center sm:text-left drop-shadow-2xs">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
