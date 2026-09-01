"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { TitleUnderline } from "@/components/ui/TitleUnderline";
import { FlyingBirds } from "@/components/ui/FlyingBirds";
import {
  Calendar,
  Users,
  Clock,
  ArrowRight,
  MapPin,
  Flame,
  Compass,
  Heart,
  Mountain,
  Coffee,
  Palmtree,
  Train,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { tripCards } from "@/data/trips";
import { TripCardItem } from "@/components/TripCardItem";

export function UpcomingJourneysSection() {
  const [activeCategory, setActiveCategory] = useState("Trending");
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -340, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 340, behavior: "smooth" });
    }
  };

  const categories = [
    { id: "Trending", label: "Trending", icon: Flame, isHeart: false },
    { id: "FirstTimers", label: "First Timers", icon: Compass, isHeart: false },
    { id: "WomenOnly", label: "Women Only", icon: Heart, isHeart: true },
    { id: "Adventure", label: "Adventure", icon: Mountain, isHeart: false },
    { id: "SlowTravel", label: "Slow Travel", icon: Coffee, isHeart: false },
    { id: "BeachEscape", label: "Beach Escape", icon: Palmtree, isHeart: false },
  ];

  const filteredCards =
    activeCategory === "Trending"
      ? tripCards.slice(0, 6)
      : tripCards
          .filter((card) => card.categories.includes(activeCategory))
          .slice(0, 6);

  return (
    <section
      id="upcoming-journeys"
      className="py-12 sm:py-14 lg:py-16 bg-white relative overflow-hidden select-none"
    >
      <FlyingBirds className="hidden lg:block absolute top-14 right-12 opacity-35 text-[#0E5A60]" />

      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl text-center">
        <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-[#C85A24] font-montserrat block mb-3">
          UPCOMING JOURNEYS
        </span>

        <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-normal leading-tight font-serif max-w-4xl mx-auto mb-4 text-[#0E5A60]">
          Where will your next{" "}
          <span className="relative inline-block font-script font-normal text-[1.12em] text-[#0E5A60]">
            journey
            <TitleUnderline />
          </span>{" "}
          begin?
        </h2>

        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
          Every Kokalachi journey is curated end-to-end — the destination, the
          pace, and the people. Pick the one that&apos;s calling you.
        </p>

        {/* Filter Pills Row with Unified Icon Styling & Navigation */}
        <div className="flex items-center justify-between mb-12 gap-4">
          <div className="flex items-center justify-start overflow-x-auto gap-2.5 sm:gap-3 pb-2 scrollbar-hide font-sans w-full px-4">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 whitespace-nowrap cursor-pointer font-sans shrink-0 ${
                    isActive
                      ? "bg-[#0E5A60] text-white shadow-md scale-105"
                      : "bg-white border border-slate-200/80 text-slate-700 hover:bg-slate-50 hover:border-slate-300"
                  }`}
                >
                  {cat.isHeart ? (
                    <Heart
                      size={15}
                      className={
                        isActive
                          ? "text-[#EF4444] fill-[#EF4444]"
                          : "text-[#EF4444] fill-[#EF4444]"
                      }
                    />
                  ) : (
                    <Icon
                      size={15}
                      className={`stroke-[2] ${
                        isActive ? "text-white" : "text-[#0E5A60]/70"
                      }`}
                    />
                  )}
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <div className="hidden lg:flex items-center gap-2 shrink-0 pb-2">
            <button 
              onClick={scrollLeft} 
              className="w-10 h-10 rounded-full bg-[#0E5A60] shadow-md flex items-center justify-center text-white hover:bg-[#C85A24] hover:-translate-x-0.5 transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} className="stroke-[2.5]" />
            </button>
            <button 
              onClick={scrollRight} 
              className="w-10 h-10 rounded-full bg-[#0E5A60] shadow-md flex items-center justify-center text-white hover:bg-[#C85A24] hover:translate-x-0.5 transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} className="stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div> {/* Close container here for full width slider */}

      {/* Horizontal Slider Layout */}
      <div 
        ref={sliderRef}
        className="w-full overflow-x-auto snap-x snap-mandatory pt-2 pb-12 pl-4 md:pl-8 xl:pl-[calc((100vw-1280px)/2+32px)] scroll-pl-4 md:scroll-pl-8 xl:scroll-pl-[calc((100vw-1280px)/2+32px)] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] text-left"
      >        <div className="flex gap-4 lg:gap-6 w-max pr-4 md:pr-8 xl:pr-[calc((100vw-1280px)/2+32px)] h-full">
          {filteredCards.map((card) => (
            <div key={card.id} className="w-[80vw] sm:w-[300px] md:w-[340px] shrink-0 snap-start h-auto">
              <TripCardItem card={card} />
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl text-center">
        {/* Section-end CTA Button */}
        <div className="mt-6 font-sans">
          <Link href="/journeys">
            <button className="bg-[#0E5A60] hover:bg-[#061C29] text-white px-8 py-4 rounded-full font-medium text-base shadow-md hover:shadow-xl transition-all inline-flex items-center gap-2.5 cursor-pointer hover:scale-105 font-sans">
              <span>See All Upcoming Journeys</span>
              <ArrowRight size={18} className="stroke-[2]" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
