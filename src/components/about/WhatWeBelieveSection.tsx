"use client";

import React from "react";
import Image from "next/image";
import { Users, Mountain, ShieldCheck, Heart, UserPlus } from "lucide-react";
import { TitleUnderline } from "@/components/ui/TitleUnderline";

export function WhatWeBelieveSection() {
  const pillars = [
    {
      title: "Curated travel groups,\nreal connection.",
      desc: "We keep our journeys in alignment with the interests of travellers. Curated groups make it easy to actually know the people you're travelling with.",
      icon: <Users size={22} strokeWidth={1.5} />,
      iconBg: "bg-[#E5F1F1]",
      iconColor: "text-[#0E5A60]",
    },
    {
      title: "The people matter\nas much as the place.",
      desc: "A great destination and the wrong group can still make for a forgettable trip. We curate for compatibility first, because that's what makes a journey unforgettable.",
      icon: <Mountain size={22} strokeWidth={1.5} />,
      iconBg: "bg-[#FDF1DB]",
      iconColor: "text-[#D35400]",
    },
    {
      title: "Trust is earned before\nthe trip starts.",
      desc: "From verified travellers to pre-trip introductions, we believe the first hello shouldn't happen at the airport — comfort and trust are built long before departure.",
      icon: <ShieldCheck size={22} strokeWidth={1.5} />,
      iconBg: "bg-[#E5F1F1]",
      iconColor: "text-[#0E5A60]",
    },
    {
      title: "Respect is\nnon-negotiable.",
      desc: "For fellow travellers, for hosts, for local communities. Every Kokalachi journey is built on the expectation that everyone shows up with kindness.",
      icon: <Heart size={22} strokeWidth={1.5} />,
      iconBg: "bg-[#FFEAE6]",
      iconColor: "text-[#D35400]",
    },
    {
      title: "We won't compromise\nyour experience to fill a seat.",
      desc: "We'll always choose the right group over a full one. That's a promise, not a slogan.",
      icon: <UserPlus size={22} strokeWidth={1.5} />,
      iconBg: "bg-[#FDF1DB]",
      iconColor: "text-[#D35400]",
    }
  ];

  return (
    <section id="what-we-believe" className="py-16 relative overflow-hidden select-none">
      <div className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-center">
          
          {/* Left Column: Content & Pillars */}
          <div className="text-left space-y-10 lg:pr-6 z-10 relative">
            
            {/* Title Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-[#D35400] text-[11px] font-black uppercase tracking-[0.15em] font-montserrat">
                  WHAT WE BELIEVE
                </span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-[40px]  font-medium text-[#0E5A60] leading-[1.15] font-serif tracking-tight">
                The Kokalachi {" "}
                <span className="relative inline-block font-script font-normal text-[1.3em] text-[#0E5A60]">
                 Way
                  <div className="absolute bottom-1 left-0 w-full">
                     <TitleUnderline />
                  </div>
                </span>
              </h2>
              
              <p className="text-[#4A5568] text-[15px] sm:text-[16px] leading-relaxed max-w-2xl">
                Everything we design every itinerary, every group, every detail comes back to a handful of things we simply won't compromise on.
              </p>
            </div>

            {/* Pillars List */}
            <div className="space-y-4">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="flex gap-5 items-start">
                  <div className={`w-[45px] h-[45px] shrink-0 rounded-full flex items-center justify-center shadow-sm ${pillar.iconBg} ${pillar.iconColor}`}>
                    {pillar.icon}
                  </div>
                  <div className="w-[1.5px] self-stretch bg-slate-200/80 my-1 rounded-full"></div>
                  <div className="space-y-1.5 pt-1 pl-1">
                    <h3 className="text-[16px] font-bold text-[#0E5A60] leading-snug  font-serif">
                      {pillar.title}
                    </h3>
                    {/* <p className="text-[#4A5568] text-[13.5px] leading-relaxed max-w-md">
                      {pillar.desc}
                    </p> */}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Footer Text */}
            <div className="flex items-center gap-4">
              <span className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.15em] font-montserrat">
                BETTER PEOPLE. BRIGHTER JOURNEYS.
              </span>
              <div className="h-[1px] flex-grow max-w-[150px] bg-slate-200"></div>
            </div>

          </div>

          {/* Right Column: Images with abstract shapes */}
          <div className="relative w-full h-[550px] lg:h-[600px] flex items-center justify-center mt-12 lg:mt-0">
          
            {/* Abstract Background Shapes */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-visible">
               {/* Teal circle top-right */}
               <div className="absolute top-10 -right-10 w-[300px] h-[300px] rounded-full bg-[#E5F1F1] mix-blend-multiply opacity-80" />
               {/* Orange circle bottom-left */}
               <div className="absolute bottom-10 -left-12 w-[220px] h-[220px] rounded-full bg-[#FDF1DB] mix-blend-multiply opacity-80" />
              
            </div>
            
            {/* Main Image */}
            <div className="relative z-10 w-[95%] h-[400px] lg:h-[450px] rounded-[24px] overflow-hidden shadow-xl border-4 border-white transform rotate-[1deg] mr-8 lg:mr-0">
              <Image src="/hero_group_sunset_bg.jpg" fill className="object-cover" alt="Group sitting together" />
            </div>

            {/* Bottom Right Polaroid */}
            <div className="absolute bottom-10 right-0 lg:-right-8 rotate-[8deg] bg-white p-2.5 pb-4 rounded-xl shadow-[0_15px_40px_rgb(0,0,0,0.15)] w-[210px] z-20">
              <div className="relative aspect-[5/4] w-full overflow-hidden rounded-lg border border-slate-100">
                <Image src="/about_belief_respect.jpg" fill className="object-cover object-center" alt="Wooden signpost" />
              </div>
              <p className="font-script text-[17px] text-center mt-3 text-[#0E5A60] leading-tight tracking-wide">
                Always a better way<br/>to travel
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
