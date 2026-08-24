"use client";

import React, { useState, useEffect, useCallback } from "react";
import { TitleUnderline } from "@/components/ui/TitleUnderline";
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
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export function WhoTravelsSection() {
  const [cardsToShow, setCardsToShow] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const pillars = [
    {
      id: "women",
      title: "Women Explorers",
      bgColor: "bg-[#FFF2EF]",
      badgeBg: "bg-[#F7D3CB]",
      badgeColor: "text-[#D95338]",
      icon: <Heart size={20} className="fill-[#EF4444] text-[#EF4444] stroke-none" />,
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=85&w=600",
      desc: "Women-only journeys designed for connection, comfort and confidence. Travel, laugh, and create memories that last a lifetime.",
      age: "20s - 45s",
      attrIcon: <Heart size={12} className="fill-[#EF4444] text-[#EF4444] stroke-none" />,
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

  // Duplicate array for seamless infinite looping
  const extendedPillars = [...pillars, ...pillars, ...pillars];
  const startIndex = pillars.length; // Start in middle set

  const [activeOffset, setActiveOffset] = useState(startIndex);

  const handleNext = useCallback(() => {
    setIsTransitioning(true);
    setActiveOffset((prev) => prev + 1);
  }, []);

  const handlePrev = useCallback(() => {
    setIsTransitioning(true);
    setActiveOffset((prev) => prev - 1);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-play timer (slides every 4s)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused, activeOffset, handleNext]);

  // Reset offset position seamlessly when hitting boundary set
  const handleTransitionEnd = () => {
    if (activeOffset >= pillars.length * 2) {
      setIsTransitioning(false);
      setActiveOffset(activeOffset - pillars.length);
    } else if (activeOffset < pillars.length) {
      setIsTransitioning(false);
      setActiveOffset(activeOffset + pillars.length);
    }
  };

  return (
    <section
      id="who-travels"
      className="py-12 sm:py-14 lg:py-16 bg-[#FAF6F0] relative overflow-hidden select-none"
    >
      {/* Background Soft Glow Ambient Effects */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[#D96C2C]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#0E5A60]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 max-w-[1360px] text-center">
        {/* SUB-HEADER TAGLINE */}
        <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-[#C85A24] font-montserrat block mb-3">
          WHO TRAVELS WITH KOKALACHI?
        </span>

        {/* MAIN HEADING */}
        <div className="mb-4 max-w-4xl mx-auto relative">
          {/* Left Handwritten Margin Accent */}
          <div className="hidden xl:flex items-center gap-1.5 absolute -left-20 top-3 text-[#C85A24] font-script text-base sm:text-lg -rotate-6 pointer-events-none select-none">
            <span>✨ 70% first-time solos</span>
          </div>

          {/* Right Handwritten Margin Accent */}
          <div className="hidden xl:flex items-center gap-1.5 absolute -right-20 top-3 text-[#C85A24] font-script text-base sm:text-lg rotate-4 pointer-events-none select-none">
            <span>♡ wanderers &amp; dreamers</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-normal text-[#0B2A3D] leading-tight font-serif">
            Find Your{" "}
            <span className="relative inline-block font-script font-normal text-[1.12em] text-[#0B2A3D]">
              Kind
              <TitleUnderline />
            </span>{" "}
            of Journey
          </h2>
        </div>

        {/* SUBTITLE */}
        <p className="text-[#0B2A3D]/80 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto mb-12 leading-relaxed font-sans">
          Different people. Different stories. One thing in common – the love of
          meaningful travel and incredible people.
        </p>

        {/* 3-CARD INFINITE LOOP CAROUSEL SLIDER */}
        <div
          className="relative mb-14 text-left max-w-6xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Top Control Bar: Prev/Next Arrows */}
          <div className="flex items-center justify-end mb-5 px-2">
            {/* Prev / Next Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous card"
                className="w-10 h-10 rounded-full bg-white border border-slate-200 text-[#0B2A3D] flex items-center justify-center shadow-xs hover:bg-[#FAF4EB] hover:border-[#D96C2C]/50 hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next card"
                className="w-10 h-10 rounded-full bg-white border border-slate-200 text-[#0B2A3D] flex items-center justify-center shadow-xs hover:bg-[#FAF4EB] hover:border-[#D96C2C]/50 hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* SLIDER TRACK WRAPPER */}
          <div className="overflow-hidden -mx-3 px-1 py-3">
            <div
              className={`flex ${
                isTransitioning
                  ? "transition-transform duration-500 ease-out"
                  : ""
              }`}
              style={{
                transform: `translateX(-${activeOffset * (100 / cardsToShow)}%)`,
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedPillars.map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  className="w-full sm:w-1/2 lg:w-1/3 shrink-0 px-3 flex flex-col"
                >
                  <div
                    className={`${item.bgColor} rounded-3xl border border-amber-900/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group relative h-full`}
                  >
                    <div>
                      {/* Top Image Box */}
                      <div className="h-52 sm:h-56  relative">
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
                      <div className="p-5 sm:p-6 pt-9 space-y-3 text-center">
                        <h3 className="text-lg sm:text-xl font-bold font-serif text-[#0B2A3D] leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed font-sans min-h-[64px]">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Tags Strip */}
                    <div className="p-4 pt-0 flex items-center justify-between gap-1.5 border-t border-slate-200/50 mt-2">
                      <div className="bg-white/90 backdrop-blur-xs px-3 py-1.5 rounded-full text-xs font-semibold text-slate-700 border border-slate-200/70 flex items-center gap-1.5 shadow-2xs">
                        <Users size={12} className="text-slate-500 shrink-0" />
                        <span>{item.age}</span>
                      </div>
                      <div className="bg-white/90 backdrop-blur-xs px-3 py-1.5 rounded-full text-xs font-semibold text-slate-700 border border-slate-200/70 flex items-center gap-1.5 shadow-2xs truncate">
                        {item.attrIcon}
                        <span className="truncate">{item.attrText}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM BANNER STRIP 1: CONNECTING SPIRIT BAR */}
        <div className="bg-[#FAF4EB] rounded-3xl border border-amber-900/10 p-6 sm:p-7 shadow-xs flex flex-col xl:flex-row items-center justify-between gap-6 max-w-6xl mx-auto mb-6 relative overflow-hidden">
          {/* Left Side Signpost Graphic & Handwritten Text */}
          <div className="flex items-center gap-5 shrink-0 border-b xl:border-b-0 xl:border-r border-dashed border-[#D96C2C]/30 pb-4 xl:pb-0 pr-0 xl:pr-8 w-full xl:w-auto justify-center xl:justify-start relative z-10">
            {/* Wooden Signpost Vector Icon with Grass Plant Base */}
            <svg
              className="w-12 h-14 text-[#0B2A3D] shrink-0"
              viewBox="0 0 50 60"
              fill="none"
            >
              {/* Post Pole */}
              <path
                d="M25 6 V 52"
                stroke="currentColor"
                strokeWidth="2.8"
                strokeLinecap="round"
              />
              {/* Top Signboard Pointing Left */}
              <path
                d="M 12 12 L 36 12 L 40 17 L 36 22 L 12 22 Z"
                fill="#FAF4EB"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinejoin="round"
              />
              {/* Bottom Signboard Pointing Right */}
              <path
                d="M 14 27 L 38 27 L 42 32 L 38 37 L 14 37 Z"
                fill="#FAF4EB"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinejoin="round"
              />
              {/* Grass Leaf Doodles at Base */}
              <path
                d="M 15 52 C 12 42, 10 40, 6 44 M 35 52 C 38 42, 40 40, 44 44 M 20 52 C 18 45, 12 46, 10 50"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>

            <div className="text-left leading-tight space-y-0.5">
              <div className="font-script text-2xl sm:text-3xl font-normal text-[#0B2A3D] tracking-wide">
                Different journeys.
              </div>
              <div className="font-script text-[#D96C2C] text-2xl sm:text-3xl font-normal tracking-wide">
                Same Kokalachi spirit.
              </div>
            </div>
          </div>

          {/* Right Side Connected 4 Pillar Icons with Looping Dotted SVG Line */}
          <div className="flex-1 w-full overflow-x-auto scrollbar-hide py-2 relative">
            <div className="flex items-center justify-between min-w-[580px] px-6 relative z-10">
              {/* Loop-de-Loop Dotted Wave Connecting SVG Line */}
              <svg
                className="absolute top-1/2 left-0 right-0 -translate-y-1/2 w-full h-12 text-[#D96C2C]/30 pointer-events-none z-0"
                viewBox="0 0 600 40"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M 10 20 C 50 5, 80 35, 120 20 C 140 10, 150 0, 160 20 C 170 38, 185 20, 240 20 C 290 10, 310 30, 370 20 C 430 10, 470 30, 530 20 C 560 15, 580 25, 600 20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  strokeLinecap="round"
                />
              </svg>

              {/* Feature 1: Small Groups */}
              <div className="flex flex-col items-center gap-2 relative z-10 bg-[#FAF4EB] px-3 py-1">
                <div className="w-12 h-12 rounded-full bg-[#FFEFE6] text-[#D96C2C] flex items-center justify-center shadow-2xs border border-amber-900/10">
                  <Users size={22} className="stroke-[2]" />
                </div>
                <span className="text-xs sm:text-[13px] font-bold text-[#0B2A3D] whitespace-nowrap">
                  Small Groups
                </span>
              </div>

              {/* Feature 2: Real Connections */}
              <div className="flex flex-col items-center gap-2 relative z-10 bg-[#FAF4EB] px-3 py-1">
                <div className="w-12 h-12 rounded-full bg-[#FFF0ED] text-[#E05353] flex items-center justify-center shadow-2xs border border-red-900/10">
                  <Heart size={22} className="stroke-[2]" />
                </div>
                <span className="text-xs sm:text-[13px] font-bold text-[#0B2A3D] whitespace-nowrap">
                  Real Connections
                </span>
              </div>

              {/* Feature 3: Travel with Confidence */}
              <div className="flex flex-col items-center gap-2 relative z-10 bg-[#FAF4EB] px-3 py-1">
                <div className="w-12 h-12 rounded-full bg-[#EBF3F0] text-[#2F7D50] flex items-center justify-center shadow-2xs border border-teal-900/10">
                  <ShieldCheck size={22} className="stroke-[2]" />
                </div>
                <span className="text-xs sm:text-[13px] font-bold text-[#0B2A3D] whitespace-nowrap">
                  Travel with Confidence
                </span>
              </div>

              {/* Feature 4: Meaningful Experiences */}
              <div className="flex flex-col items-center gap-2 relative z-10 bg-[#FAF4EB] px-3 py-1">
                <div className="w-12 h-12 rounded-full bg-[#FAF3E6] text-[#C88A2B] flex items-center justify-center shadow-2xs border border-amber-900/10">
                  <Globe size={22} className="stroke-[2]" />
                </div>
                <span className="text-xs sm:text-[13px] font-bold text-[#0B2A3D] whitespace-nowrap">
                  Meaningful Experiences
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BANNER STRIP 2: WARM TOAST PILL BADGE */}
        <div className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-[#FAF4ED] border border-amber-900/10 text-slate-700 text-xs sm:text-sm font-medium shadow-2xs max-w-4xl mx-auto">
          {/* Radiating Heart Icon Outline */}
          <div className="relative flex items-center justify-center shrink-0">
            <svg
              className="w-5 h-5 text-[#D96C2C]"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 2V4 M4 6L6 8 M20 6L18 8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M12 8.5 C9.5 5, 5 5.5, 5 10 C5 14.5, 12 19, 12 19 C12 19, 19 14.5, 19 10 C19 5.5, 14.5 5, 12 8.5 Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <span>
            No matter which journey you choose, you&apos;ll always find one
            thing here –{" "}
            <strong className="text-[#0B2A3D] font-bold">
              good people and great memories.
            </strong>
          </span>

          <span className="text-[#D96C2C] font-script text-base font-bold ml-0.5 shrink-0">
            ♡
          </span>
        </div>
      </div>
    </section>
  );
}
