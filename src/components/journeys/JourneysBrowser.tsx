"use client";

import React, { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { TripCardData } from "@/data/trips";
import type { JourneysSections } from "@/types/cms";
import type { HeadingTag } from "@/lib/content";
import { CompactTripCardItem } from "@/components/CompactTripCardItem";
import { TitleUnderline } from "@/components/ui/TitleUnderline";
import { Heart, MapPin, Plane } from "lucide-react";
import { filterTripsByVibe, isHeartVibe, vibeIcon } from "@/lib/vibes";
import { filterTripsByRegion, isRegionFilter, REGION_FILTERS, type RegionFilter } from "@/lib/regions";

const REGION_ICONS = { domestic: MapPin, international: Plane } as const;

// Opens the page pre-filtered when linked as /journeys?category=Adventure (e.g. from the navbar)
// or /journeys?region=international
function FiltersFromUrl({
  onCategory,
  onRegion,
}: {
  onCategory: (id: string) => void;
  onRegion: (region: RegionFilter) => void;
}) {
  const params = useSearchParams();
  const category = params.get("category");
  const region = params.get("region");
  useEffect(() => {
    if (category) onCategory(category);
  }, [category, onCategory]);
  useEffect(() => {
    if (isRegionFilter(region)) onRegion(region);
  }, [region, onRegion]);
  return null;
}

interface JourneysBrowserProps {
  trips: TripCardData[];
  sections: JourneysSections;
  headingTag?: HeadingTag; // hero headline tag from CMS SEO
}

export function JourneysBrowser({ trips, sections, headingTag: Heading = "h1" }: JourneysBrowserProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeRegion, setActiveRegion] = useState<RegionFilter>("all");
  const hero = sections.JourneysHeroSection;
  const filter = sections.JourneysFilterSection;

  const categories = filter.categories.map((v) => ({ ...v, icon: vibeIcon(v.id), isHeart: isHeartVibe(v.id) }));

  // Region first, then the vibe (so "Trending" is the top trips of that region)
  const visibleFor = (region: RegionFilter) => filterTripsByVibe(filterTripsByRegion(trips, region), activeCategory);
  const filteredCards = visibleFor(activeRegion);

  return (
    <div className="min-h-screen font-sans text-slate-800  pb-20">
      <Suspense fallback={null}>
        <FiltersFromUrl onCategory={setActiveCategory} onRegion={setActiveRegion} />
      </Suspense>
      
      {/* Hero Section (Matching Detailed Page) */}
      <div className="relative h-[60vh] min-h-[400px] w-full">
        <img
          src={hero.bannerImage}
          alt="All Journeys"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Same overlay as /blogs: dark only behind the text, plus a soft band so the navbar stays readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A3D]/90 via-[#0B2A3D]/25 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/25 to-transparent" />

        <div className="absolute inset-0 flex items-end pb-10 sm:pb-12">
          <div className="site-container">
            <div className="max-w-6xl animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="bg-[#D96C2C] text-white text-xs font-medium px-4 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                  {hero.tagline}
                </span>
              </div>
              <Heading className="heading-hero font-semibold font-serif text-white mb-2">
                {hero.title}{" "}
                <span className="relative inline-block font-script font-normal text-[1.12em] text-white">
                  {hero.scriptAccent}
                  <TitleUnderline />
                </span>
              </Heading>
              <p className="text-white/85 text-sm sm:text-base lg:text-lg mt-4 max-w-2xl font-sans leading-relaxed">
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
            {/* Domestic / International, with how many trips each would show alongside the chosen vibe */}
            <div
              role="radiogroup"
              aria-label="Domestic or international"
              className="mb-6 flex items-center gap-1.5 overflow-x-auto scrollbar-hide p-1.5 rounded-full bg-white border border-slate-100 shadow-sm w-fit max-w-full"
            >
              {REGION_FILTERS.map((r) => {
                const active = activeRegion === r.id;
                const Icon = r.id === "all" ? null : REGION_ICONS[r.id];
                return (
                  <button
                    key={r.id}
                    type="button"
                    role="radio"
                    aria-checked={active}
                    onClick={() => setActiveRegion(r.id)}
                    className={`shrink-0 inline-flex items-center gap-2 rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold font-sans whitespace-nowrap transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0E5A60]/40 ${
                      active ? "bg-[#0E5A60] text-white shadow-md" : "text-slate-600 hover:bg-slate-50 hover:text-[#0E5A60]"
                    }`}
                  >
                    {Icon && <Icon size={15} className={active ? "text-[#FFD9BF]" : "text-[#D96C2C]"} />}
                    {r.label}
                    <span
                      className={`min-w-5 rounded-full px-1.5 py-px text-[11px] font-bold ${
                        active ? "bg-white/15 text-white" : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {visibleFor(r.id).length}
                    </span>
                  </button>
                );
              })}
            </div>

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
