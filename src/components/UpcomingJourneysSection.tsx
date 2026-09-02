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
import { tripCards, TripCardData } from "@/data/trips";

function TripCardItem({ card }: { card: TripCardData }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!card.images || card.images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % card.images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [card.images]);

  return (
    <Link
      href={`/journeys/${card.slug}`}
      className="bg-white rounded-[2rem] px-2 pt-2 pb-4 shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col border border-slate-100 relative cursor-pointer font-sans transform hover:-translate-y-2 h-full"
    >
      {/* Image Section */}
      <div className="relative h-56 w-full overflow-hidden rounded-3xl mb-3 bg-slate-100">
        {card.images && card.images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${card.tourPackage.title} - Image ${idx + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out group-hover:scale-110 ${idx === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
          />
        ))}
        {/* Pagination Dots */}
        {card.images && card.images.length > 1 && (
          <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-1.5 pointer-events-none">
            {card.images.map((_, idx) => (
              <span
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentImageIndex
                  ? "bg-white w-4 opacity-100"
                  : "bg-white/60 w-1.5 opacity-60"
                  }`}
              />
            ))}
          </div>
        )}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/40 via-transparent to-black/10 opacity-60 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />
        <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-[#0E5A60] flex items-center gap-1.5 shadow-sm">
          <MapPin size={14} className="text-[#C85A24]" /> {card.destination}
        </div>
        {card.tourPackage.spotsLeft && (
          <div className="absolute top-4 right-4 z-20 bg-[#D96C2C] px-3 py-1.5 rounded-full text-xs font-semibold text-white shadow-sm flex items-center gap-1">
            <Flame size={12} className="fill-white" /> {card.tourPackage.spotsLeft} Spots
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow px-3">
        <h3 className="text-base sm:text-lg font-bold text-[#0E5A60] font-serif leading-tight mb-2 group-hover:text-[#0E5A60] transition-colors line-clamp-2">
          {card.tourPackage.title}
        </h3>

        {/* Key Stats Grid */}
        <div className="grid grid-cols-2 gap-y-1.5 gap-x-2 mb-3">
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <Clock size={15} className="text-[#0E5A60] opacity-80" />
            <span className="font-medium text-[#0E5A60]">{card.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <Calendar size={16} className="text-[#0E5A60] opacity-80" />
            <span className="font-medium text-[#0E5A60] text-[13px]">{card.dates}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-600 col-span-2">
            <Users size={16} className="text-[#0E5A60] opacity-80" />
            <span className="font-medium text-[#0E5A60] text-[13px]">{card.groupSize}</span>
          </div>
        </div>

        {/* Footer: Price & CTA */}
        <div className="mt-auto pt-3 border-t border-slate-100 flex items-end justify-between">
          <div>
            <p className="text-xs text-slate-400 font-bold tracking-wider uppercase mb-1">
              Starting From
            </p>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black text-[#0E5A60]">
                {card.price}
              </span>
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-[#0E5A60] text-white flex items-center justify-center group-hover:bg-[#C85A24] transition-colors shadow-md">
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

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
        <div className="flex items-center justify-between mb-8 gap-4">
          <div className="flex items-center justify-start overflow-x-auto gap-2.5 sm:gap-3 pb-2 scrollbar-hide font-sans w-full px-4">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 whitespace-nowrap cursor-pointer font-sans shrink-0 ${isActive
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
                      className={`stroke-[2] ${isActive ? "text-white" : "text-[#0E5A60]/70"
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
              className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-[#0E5A60] hover:bg-[#0E5A60] hover:text-white transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={scrollRight}
              className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-[#0E5A60] hover:bg-[#0E5A60] hover:text-white transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
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
          <button className="bg-[#0E5A60] hover:bg-[#061C29] text-white px-8 py-4 rounded-full font-medium text-base shadow-md hover:shadow-xl transition-all inline-flex items-center gap-2.5 cursor-pointer hover:scale-105 font-sans">
            <span>See All Upcoming Journeys</span>
            <ArrowRight size={18} className="stroke-[2]" />
          </button>
        </div>
      </div>
    </section>
  );
}
