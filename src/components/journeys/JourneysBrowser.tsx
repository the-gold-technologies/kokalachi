"use client";

import React, { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { TripCardData } from "@/data/trips";
import type { JourneysSections } from "@/types/cms";
import { CompactTripCardItem } from "@/components/CompactTripCardItem";
import { TitleUnderline } from "@/components/ui/TitleUnderline";
import { Heart } from "lucide-react";
import { filterTripsByVibe, isHeartVibe, vibeIcon } from "@/lib/vibes";

// Opens the page pre-filtered when linked as /journeys?category=Adventure (e.g. from the navbar)
function CategoryFromUrl({ onCategory }: { onCategory: (id: string) => void }) {
  const category = useSearchParams().get("category");
  useEffect(() => {
    if (category) onCategory(category);
  }, [category, onCategory]);
  return null;
}

interface JourneysBrowserProps {
  trips: TripCardData[];
  sections: JourneysSections;
}

export function JourneysBrowser({ trips, sections }: JourneysBrowserProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const hero = sections.JourneysHeroSection;
  const filter = sections.JourneysFilterSection;

  const categories = filter.categories.map((v) => ({ ...v, icon: vibeIcon(v.id), isHeart: isHeartVibe(v.id) }));

  const filteredCards = filterTripsByVibe(trips, activeCategory);

  return (
    <div className="min-h-screen font-sans text-slate-800  pb-20">
      <Suspense fallback={null}>
        <CategoryFromUrl onCategory={setActiveCategory} />
      </Suspense>
      
      {/* Hero Section (Matching Detailed Page) */}
      <div className="relative h-[60vh] min-h-[400px] w-full">
        <img
          src={hero.bannerImage}
          alt="All Journeys"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A3D] via-[#0B2A3D]/30 to-black/30" />

        <div className="absolute inset-0 flex items-end pb-10 sm:pb-12">
          <div className="site-container">
            <div className="max-w-6xl animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="bg-[#D96C2C] text-white text-xs font-medium px-4 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                  {hero.tagline}
                </span>
              </div>
              <h1 className="heading-hero font-semibold font-serif text-white mb-2">
                {hero.title}{" "}
                <span className="relative inline-block font-script font-normal text-[1.12em] text-white">
                  {hero.scriptAccent}
                  <TitleUnderline />
                </span>
              </h1>
              <p className="text-slate-200 text-base md:text-lg font-normal mt-4 max-w-2xl font-sans leading-relaxed">
                {hero.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area with Sticky Sidebar */}
      <div className="site-container py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">

          {/* Left Sidebar (Sticky Filters) */}
          <div className="w-full lg:w-[280px] shrink-0 lg:sticky lg:top-24">
            <div className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-sm">
              <h3 className="text-lg font-bold text-[#0E5A60] font-serif mb-6 border-b border-slate-100 pb-4">
                {filter.sidebarTitle}
              </h3>
              <div className="flex flex-row lg:flex-col gap-2.5 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-hide">
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  const isActive = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`px-4 lg:px-5 py-2.5 lg:py-3.5 rounded-full lg:rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-start gap-3 whitespace-nowrap cursor-pointer font-sans shrink-0 w-full ${
                        isActive
                          ? "bg-[#0E5A60] text-white shadow-md lg:scale-[1.02]"
                          : "bg-slate-50 border border-slate-200/80 text-slate-700 hover:bg-slate-100 hover:border-slate-300"
                      }`}
                    >
                      {cat.isHeart ? (
                        <Heart
                          size={18}
                          className={
                            isActive
                              ? "text-[#EF4444] fill-[#EF4444]"
                              : "text-[#EF4444] fill-[#EF4444]"
                          }
                        />
                      ) : (
                        <Icon
                          size={18}
                          className={`stroke-[2.5] ${
                            isActive ? "text-white" : "text-[#0E5A60]/70"
                          }`}
                        />
                      )}
                      <span>{cat.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Area (3-Column Grid) */}
          <div className="w-full flex-grow">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredCards.map((card) => (
                <div key={card.id} className="h-full">
                  <CompactTripCardItem card={card} />
                </div>
              ))}
            </div>
            
            {filteredCards.length === 0 && (
              <div className="py-20 text-center text-slate-500 font-sans">
                {filter.emptyStateText}
              </div>
            )}
          </div>

        </div>
      </div>

    </div>
  );
}
