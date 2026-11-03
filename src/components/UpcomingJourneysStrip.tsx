"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import type { TripCardData } from "@/data/trips";
import { TripCardItem } from "@/components/TripCardItem";
import { TitleUnderline } from "@/components/ui/TitleUnderline";
import { isUpcomingTrip } from "@/lib/tripFilters";
import { UPCOMING_TRIPS_PATH } from "@/data/tripPages";
import type { StripPage, UpcomingJourneysStripContent } from "@/types/cms";

// A short "upcoming journeys" strip: a left-aligned heading in the site's style, then a slider
// of trip cards. Separate from the home page's full Upcoming Journeys section on purpose.
// Each page adds it itself: as its last section (just above the footer), or with `inline`
// just before the page's closing CTA (About, Community). Home has its own full section instead.
// Text and the pages it shows on come from CMS → Static Pages → Shared Sections.
export function UpcomingJourneysStrip({
  trips: allTrips,
  content,
  page,
  excludeSlug,
  inline = false,
}: {
  trips: TripCardData[];
  content: UpcomingJourneysStripContent | null; // null if the CMS doesn't have it
  page: StripPage; // this page, checked against the CMS "Show on" list
  excludeSlug?: string; // leave out the trip being viewed
  inline?: boolean;     // before a CTA (full section spacing) rather than as the page's last section
}) {
  const sliderRef = useRef<HTMLDivElement>(null);
  if (!content || !content.showOn.includes(page)) return null;
  // Same rule as /trips/upcoming: trips with dates ahead (or new ones awaiting dates), site order
  const trips = allTrips.filter((card) => isUpcomingTrip(card) && card.slug !== excludeSlug);
  if (trips.length === 0) return null;

  const scrollBy = (left: number) => sliderRef.current?.scrollBy({ left, behavior: "smooth" });

  return (
    <section
      aria-labelledby="upcoming-journeys-strip-heading"
      // As the last section, pages already end with ~80px of space, so the top padding stays small
      className={`${inline ? "pt-12 sm:pt-14 lg:pt-16" : "pt-6 sm:pt-8 lg:pt-12"} bg-white relative overflow-hidden select-none`}
    >
      <div className="site-container flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-8">
        <div className="max-w-2xl">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-[#C85A24] font-montserrat block mb-3">
            {content.tag}
          </span>
          <h2 id="upcoming-journeys-strip-heading" className="heading-section font-normal font-serif text-[#0E5A60]">
            {content.headline}{" "}
            {content.scriptAccent && (
              <span className="relative inline-block font-script font-normal text-[1.12em] text-[#0E5A60]">
                {content.scriptAccent}
                <TitleUnderline />
              </span>
            )}
          </h2>
          {content.description && (
            <p className="mt-4 text-[#0E5A60]/75 text-base sm:text-lg leading-relaxed">{content.description}</p>
          )}
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Link
            href={UPCOMING_TRIPS_PATH}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0E5A60] hover:text-[#D96C2C] transition-colors"
          >
            {content.viewAllText} <ArrowRight size={16} className="stroke-[2.5]" />
          </Link>
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={() => scrollBy(-340)}
              className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-[#0E5A60] hover:bg-[#0E5A60] hover:text-white transition-colors cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scrollBy(340)}
              className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-[#0E5A60] hover:bg-[#0E5A60] hover:text-white transition-colors cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Full-width slider, starting in line with the page content (same as the home section) */}
      <div
        ref={sliderRef}
        className={`w-full overflow-x-auto snap-x snap-mandatory pt-2 ${inline ? "pb-10 sm:pb-12" : "pb-14 sm:pb-16"} pl-5 md:pl-8 xl:pl-[calc((100vw-80rem)/2+2rem)] scroll-pl-5 md:scroll-pl-8 xl:scroll-pl-[calc((100vw-80rem)/2+2rem)] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']`}
      >
        <div className="flex gap-4 lg:gap-6 w-max pr-5 md:pr-8 xl:pr-[calc((100vw-80rem)/2+2rem)]">
          {trips.map((card) => (
            <div key={card.id} className="w-[80vw] sm:w-[300px] md:w-[340px] shrink-0 snap-start">
              <TripCardItem card={card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
