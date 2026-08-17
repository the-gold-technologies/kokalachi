"use client";

import React from "react";
import { UserCheck, Compass, Briefcase, Heart, Sparkles } from "lucide-react";

export function WhoTravelsSection() {
  const personas = [
    {
      icon: <Compass className="w-6 h-6 text-[#0E5A60]" />,
      tag: "The Solo Explorer",
      title: "Loves travel, hates waiting for plans",
      desc: "You have a bucket list ready to go, but friends are busy with work or family. You want shared freedom without rigid tourist groups.",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-[#D96C2C]" />,
      title: "Working Professional",
      desc: "You have limited annual leave and zero time for complex planning. You need a hassle-free, vetted trip with genuine people.",
    },
    {
      icon: <Heart className="w-6 h-6 text-[#0E5A60]" />,
      title: "The Story Seeker",
      desc: "You care about slow travel, local dining, and quiet sunrise spots — not just ticking off crowded selfie locations.",
    },
    {
      icon: <UserCheck className="w-6 h-6 text-[#6F8F84]" />,
      title: "First-Time Group Traveller",
      desc: "You want the safety of a dedicated host and a small circle so you never feel lost or left out.",
    },
  ];

  return (
    <section id="who-travels" className="py-24 bg-[#F7F3EC] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-5xl text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E5A60]/10 text-[#0E5A60] text-xs font-bold uppercase tracking-wider mb-4">
          <Sparkles size={14} className="text-[#D96C2C]" />
          <span>Our Community</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B2A3D] leading-tight mb-4">
          Who travels with <span className="text-[#0E5A60]">Kokalachi?</span>
        </h2>
        <p className="text-slate-600 text-base md:text-lg max-w-xl mx-auto mb-16 italic font-light">
          &quot;For musafirs who were only ever resting, not stopping.&quot;
        </p>

        {/* Personas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {personas.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="p-3 rounded-2xl bg-[#F7F3EC] w-fit mb-4">
                  {item.icon}
                </div>
                <h3 className="font-extrabold text-xl text-[#0B2A3D] mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
