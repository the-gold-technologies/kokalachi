"use client";

import React from "react";
import { Users, Heart, ShieldCheck, Globe, Award } from "lucide-react";

export function WhatWeBelieveSection() {
  const pillars = [
    {
      title: "Curated Travel groups, real connection.",
      desc: "We keep our journeys in alignment with the interest of the Travellers. Random groups make it easy for people to disappear into the crowd; curated groups make it easy to actually know the people you're travelling with.",
      icon: <Users size={24} />,
      bgColor: "bg-[#FFF2EF]",
      iconColor: "text-[#C85A24]",
      colSpan: "col-span-1",
    },
    {
      title: "The people matter as much as the place.",
      desc: "A great destination and the wrong group can still make for a forgettable trip. We curate for compatibility first, because that's what makes a journey unforgettable.",
      icon: <Heart size={24} />,
      bgColor: "bg-[#F0F5FA]",
      iconColor: "text-[#2B6CB0]",
      colSpan: "col-span-1",
    },
    {
      title: "Trust is earned before the trip starts.",
      desc: "From verified travellers to pre-trip introductions, we believe the first hello shouldn't happen at the airport — comfort and trust are built long before departure.",
      icon: <ShieldCheck size={24} />,
      bgColor: "bg-[#F1F7F3]",
      iconColor: "text-[#2F7D4E]",
      colSpan: "col-span-1",
    },
    {
      title: "Respect is non-negotiable.",
      desc: "For fellow travellers, for hosts, for local communities. Every Kokalachi journey is built on the expectation that everyone shows up with kindness.",
      icon: <Globe size={24} />,
      bgColor: "bg-[#FAF5EB]",
      iconColor: "text-[#C88A2B]",
      colSpan: "col-span-1",
    },
    {
      title: "We won't compromise your experience to fill a seat.",
      desc: "We'll always choose the right group over a full one. That's a promise, not a slogan.",
      icon: <Award size={24} />,
      bgColor: "bg-[#F6F2FA]",
      iconColor: "text-[#7E42B6]",
      colSpan: "md:col-span-2 lg:col-span-2",
    },
  ];

  return (
    <section
      id="what-we-believe"
      className="py-14 sm:py-16 lg:py-20 bg-[#FAF5EE] relative overflow-hidden select-none border-t border-b border-amber-900/10"
    >
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-96 bg-[#C85A24]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-[#C85A24] font-montserrat block">
            WHAT WE BELIEVE (MISSION)
          </span>

          <h2 className="text-3xl sm:text-5xl font-normal text-[#0B2A3D] leading-tight font-serif">
            The Kokalachi Way
          </h2>

          <p className="text-[#0B2A3D]/80 text-base sm:text-lg font-sans">
            Everything we design — every itinerary, every group, every
            detail — comes back to a handful of things we simply won&apos;t
            compromise on.
          </p>
        </div>

        {/* 5 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className={`bg-white p-7 rounded-3xl border border-amber-900/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group ${pillar.colSpan}`}
            >
              <div className="space-y-4">
                <div
                  className={`w-12 h-12 rounded-2xl ${pillar.bgColor} ${pillar.iconColor} flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold font-serif text-[#0B2A3D]">
                  {pillar.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
