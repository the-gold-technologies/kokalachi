"use client";

import React from "react";
import {
  User,
  Briefcase,
  Mountain,
  Coffee,
  Camera,
  Heart,
  Clock,
  Sparkles,
  Users,
  ShieldCheck,
  Globe,
  Leaf,
  Compass,
  Star,
} from "lucide-react";

export function WhoTravelsSection() {
  const pillars = [
    {
      id: "women",
      title: "Women Explorers",
      bgColor: "bg-[#FFF2EF]",
      badgeBg: "bg-[#F7D3CB]",
      badgeColor: "text-[#D95338]",
      icon: <User size={20} className="stroke-[2.2]" />,
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=85&w=600",
      desc: "Women-only journeys designed for connection, comfort and confidence. Travel, laugh, and create memories that last a lifetime.",
      age: "20s - 45s",
      attrIcon: <Heart size={12} className="text-[#D95338]" />,
      attrText: "Supportive & Safe",
    },
    {
      id: "pro",
      title: "Working Professionals",
      bgColor: "bg-[#F0F5FA]",
      badgeBg: "bg-[#D2E2F0]",
      badgeColor: "text-[#2B6CB0]",
      icon: <Briefcase size={20} className="stroke-[2.2]" />,
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=85&w=600",
      desc: "Short escapes that fit your busy schedule and recharge you completely. Come back refreshed, inspired and ready to take on more.",
      age: "23s - 40s",
      attrIcon: <Clock size={12} className="text-[#2B6CB0]" />,
      attrText: "Weekend Getaways",
    },
    {
      id: "adventure",
      title: "Adventure Seekers",
      bgColor: "bg-[#F1F7F3]",
      badgeBg: "bg-[#D0E5D7]",
      badgeColor: "text-[#2F7D4E]",
      icon: <Mountain size={20} className="stroke-[2.2]" />,
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=85&w=600",
      desc: "For those who choose adventure over ordinary. Hikes, treks, offbeat paths and stories that stay with you forever.",
      age: "20s - 45s",
      attrIcon: <Mountain size={12} className="text-[#2F7D4E]" />,
      attrText: "Active & Adventurous",
    },
    {
      id: "slow",
      title: "Slow Travellers",
      bgColor: "bg-[#FAF5EB]",
      badgeBg: "bg-[#F3E3C8]",
      badgeColor: "text-[#C88A2B]",
      icon: <Coffee size={20} className="stroke-[2.2]" />,
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=85&w=600",
      desc: "Culture, cafés, conversations and experiences over ticking off attractions. Because the best memories aren't always on a checklist.",
      age: "20s - 55s",
      attrIcon: <Leaf size={12} className="text-[#C88A2B]" />,
      attrText: "Mindful & Immersive",
    },
    {
      id: "creators",
      title: "Creators & Storytellers",
      bgColor: "bg-[#F6F2FA]",
      badgeBg: "bg-[#E3D7F2]",
      badgeColor: "text-[#7E42B6]",
      icon: <Camera size={20} className="stroke-[2.2]" />,
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=85&w=600",
      desc: "For photography lovers, content creators and dreamers who find inspiration in every corner of the world we explore.",
      age: "20s - 40s",
      attrIcon: <Sparkles size={12} className="text-[#7E42B6]" />,
      attrText: "Inspire & Create",
    },
    {
      id: "community",
      title: "Community Journeys",
      bgColor: "bg-[#FAF3EB]",
      badgeBg: "bg-[#F3DCBE]",
      badgeColor: "text-[#D96C2C]",
      icon: <Users size={20} className="stroke-[2.2]" />,
      image:
        "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=85&w=600",
      desc: "Open to anyone who believes travel is better when shared. Different backgrounds, same heart – unforgettable journeys together.",
      age: "18+",
      attrIcon: <Star size={12} className="text-[#D96C2C]" />,
      attrText: "Open & Inclusive",
    },
  ];

  return (
    <section
      id="who-travels"
      className="py-20 lg:py-28 bg-white relative overflow-hidden select-none"
    >
      {/* Background Soft Glow Ambient Effects */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[#D96C2C]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#0E5A60]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 max-w-[1360px] text-center">
        
        {/* SUB-HEADER TAGLINE */}
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-[#D96C2C] font-montserrat">
            WHO TRAVELS WITH KOKALACHI?
          </span>
          <span className="text-[#D96C2C] font-sans text-sm inline-block">
            ♡
          </span>
        </div>

        {/* MAIN HEADING */}
        <div className="mb-4 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-normal text-[#0B2A3D] leading-tight font-serif">
            Find Your{" "}
            <span className="relative inline-block font-semibold text-[#0B2A3D]">
              Kind
              {/* Tapered Curved Underline Vector */}
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-[#D96C2C]"
                viewBox="0 0 100 20"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M5 15 Q 50 5 95 15"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            of Journey
          </h2>
        </div>

        {/* SUBTITLE */}
        <p className="text-[#0B2A3D]/80 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto mb-14 leading-relaxed font-sans">
          Different people. Different stories. One thing in common – the love of meaningful travel and incredible people.
        </p>

        {/* 6 PILLARS CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 items-stretch mb-12 text-left">
          {pillars.map((item) => (
            <div
              key={item.id}
              className={`${item.bgColor} rounded-3xl border border-amber-900/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group relative`}
            >
              <div>
                {/* Top Image Box */}
                <div className="h-44 sm:h-48 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/10" />

                  {/* Overlapping Floating Circle Icon Badge */}
                  <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-20">
                    <div
                      className={`w-11 h-11 rounded-full ${item.badgeBg} ${item.badgeColor} flex items-center justify-center shadow-md border-2 border-white`}
                    >
                      {item.icon}
                    </div>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-4 sm:p-5 pt-8 space-y-3 text-center">
                  <h3 className="text-base sm:text-lg font-bold font-serif text-[#0B2A3D] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed font-sans min-h-[72px]">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Bottom Tags Strip */}
              <div className="p-3 pt-0 flex items-center justify-between gap-1.5 border-t border-slate-200/50 mt-2">
                <div className="bg-white/90 backdrop-blur-xs px-2 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold text-slate-700 border border-slate-200/70 flex items-center gap-1 shadow-2xs">
                  <Users size={11} className="text-slate-500 shrink-0" />
                  <span>{item.age}</span>
                </div>
                <div className="bg-white/90 backdrop-blur-xs px-2 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold text-slate-700 border border-slate-200/70 flex items-center gap-1 shadow-2xs truncate">
                  {item.attrIcon}
                  <span className="truncate">{item.attrText}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM BANNER STRIP 1: CONNECTING SPIRIT BAR */}
        <div className="bg-[#FAF4EB] rounded-3xl border border-amber-900/10 p-5 sm:p-6 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6 max-w-6xl mx-auto mb-6">
          {/* Left Side Signpost Graphic & Handwritten Text */}
          <div className="flex items-center gap-4 shrink-0 border-b lg:border-b-0 lg:border-r border-dashed border-[#D96C2C]/30 pb-4 lg:pb-0 pr-0 lg:pr-8 w-full lg:w-auto justify-center lg:justify-start">
            {/* Wooden Signpost Vector Icon */}
            <svg
              className="w-10 h-10 text-[#0B2A3D] shrink-0"
              viewBox="0 0 48 48"
              fill="none"
            >
              {/* Post Pole */}
              <path
                d="M24 6 V 42"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
              {/* Top Signboard Pointing Left */}
              <path
                d="M 12 11 L 34 11 L 38 16 L 34 21 L 12 21 Z"
                fill="#FAF4EB"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
              {/* Bottom Signboard Pointing Right */}
              <path
                d="M 14 26 L 36 26 L 40 31 L 36 36 L 14 36 Z"
                fill="#FAF4EB"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
            </svg>

            <div className="text-left leading-tight">
              <div className="text-lg sm:text-xl font-serif font-bold text-[#0B2A3D]">
                Different journeys.
              </div>
              <div className="font-script text-[#D96C2C] text-2xl sm:text-3xl font-normal">
                Same Kokalachi spirit.
              </div>
            </div>
          </div>

          {/* Right Side Connected 4 Pillar Icons */}
          <div className="flex-1 w-full overflow-x-auto scrollbar-hide py-1">
            <div className="flex items-center justify-between min-w-[550px] px-4 relative">
              {/* Connecting Curved Dotted Line */}
              <div className="absolute top-1/2 left-10 right-10 -translate-y-1/2 border-t-2 border-dashed border-amber-900/20 z-0" />

              {/* Feature 1: Small Groups */}
              <div className="flex flex-col items-center gap-1.5 relative z-10 bg-[#FAF4EB] px-2">
                <div className="w-10 h-10 rounded-full bg-[#FDF0EC] text-[#D96C2C] flex items-center justify-center shadow-xs border border-amber-900/10">
                  <Users size={18} className="stroke-[2]" />
                </div>
                <span className="text-xs font-bold text-[#0B2A3D]">
                  Small Groups
                </span>
              </div>

              {/* Feature 2: Real Connections */}
              <div className="flex flex-col items-center gap-1.5 relative z-10 bg-[#FAF4EB] px-2">
                <div className="w-10 h-10 rounded-full bg-[#FDF0EC] text-[#D96C2C] flex items-center justify-center shadow-xs border border-amber-900/10">
                  <Heart size={18} className="stroke-[2]" />
                </div>
                <span className="text-xs font-bold text-[#0B2A3D]">
                  Real Connections
                </span>
              </div>

              {/* Feature 3: Travel with Confidence */}
              <div className="flex flex-col items-center gap-1.5 relative z-10 bg-[#FAF4EB] px-2">
                <div className="w-10 h-10 rounded-full bg-[#EBF3F0] text-[#0E5A60] flex items-center justify-center shadow-xs border border-teal-900/10">
                  <ShieldCheck size={18} className="stroke-[2]" />
                </div>
                <span className="text-xs font-bold text-[#0B2A3D]">
                  Travel with Confidence
                </span>
              </div>

              {/* Feature 4: Meaningful Experiences */}
              <div className="flex flex-col items-center gap-1.5 relative z-10 bg-[#FAF4EB] px-2">
                <div className="w-10 h-10 rounded-full bg-[#FAF5EE] text-[#D96C2C] flex items-center justify-center shadow-xs border border-amber-900/10">
                  <Globe size={18} className="stroke-[2]" />
                </div>
                <span className="text-xs font-bold text-[#0B2A3D]">
                  Meaningful Experiences
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BANNER STRIP 2: WARM TOAST PILL BADGE */}
        <div className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#FFF5EE] border border-orange-200/80 text-slate-700 text-xs sm:text-sm font-medium shadow-2xs max-w-3xl mx-auto">
          <span className="text-[#D96C2C] text-sm">✨</span>
          <span>
            No matter which journey you choose, you&apos;ll always find one thing here –{" "}
            <strong className="text-[#0B2A3D] font-bold">good people and great memories.</strong>
          </span>
          <span className="text-[#D96C2C] text-sm ml-1">♡</span>
        </div>

      </div>
    </section>
  );
}
