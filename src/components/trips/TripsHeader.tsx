import React from "react";
import Link from "next/link";
import { TitleUnderline } from "@/components/ui/TitleUnderline";
import type { HeadingTag } from "@/lib/content";
import { TRIP_PAGES, TRIP_PAGE_ORDER, type TripPageConfig, type TripPageKey } from "@/data/tripPages";

// Hero for the /trips pages, same look as /journeys
export function TripsHero({
  page,
  image,
  headingTag: Heading = "h1",
}: {
  page: TripPageConfig;
  image: string;
  headingTag?: HeadingTag;
}) {
  return (
    // Same height as the other page heroes (/journeys, /blogs, /faqs)
    <div className="relative h-[60vh] min-h-[420px] w-full">
      {/* Photo subjects sit on the right, leaving the left side clear for the text */}
      <img src={image} alt={page.label} className="absolute inset-0 w-full h-full object-cover object-[center_55%]" />
      {/* Same overlay as /blogs: dark only behind the text, plus a soft band so the navbar stays readable */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A3D]/90 via-[#0B2A3D]/25 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/25 to-transparent" />

      <div className="absolute inset-0 flex items-end pb-14 sm:pb-16">
        <div className="site-container">
          <div className="max-w-6xl animate-in fade-in slide-in-from-bottom-8 duration-700">
            <span className="inline-block bg-[#D96C2C] text-white text-xs font-medium px-4 py-1.5 rounded-full uppercase tracking-widest shadow-sm mb-4">
              {page.tagline}
            </span>
            <Heading className="heading-hero font-semibold font-serif text-white mb-2">
              {page.title}{" "}
              <span className="relative inline-block font-script font-normal text-[1.12em] text-white">
                {page.scriptAccent}
                <TitleUnderline />
              </span>
            </Heading>
            <p className="text-white/85 text-sm sm:text-base lg:text-lg mt-4 max-w-3xl font-sans leading-relaxed">
              {page.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Links between the /trips sub-pages. Listing tabs keep the current filters (query).
export function TripsTabs({ active, query = "" }: { active: TripPageKey; query?: string }) {
  return (
    <nav aria-label="Trips" className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
      {TRIP_PAGE_ORDER.map((key) => {
        const page = TRIP_PAGES[key];
        const isActive = key === active;
        const href = page.list && query ? `${page.path}?${query}` : page.path;
        return (
          <Link
            key={key}
            href={href}
            // Switching tabs keeps the scroll position, so the list stays in view.
            // Other links to these pages (navbar, footer) still open them at the top.
            scroll={false}
            aria-current={isActive ? "page" : undefined}
            className={`shrink-0 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
              isActive
                ? "bg-[#0E5A60] text-white shadow-md"
                : "bg-white border border-slate-200 text-slate-700 hover:border-[#0E5A60]/40 hover:text-[#0E5A60]"
            }`}
          >
            {page.label}
          </Link>
        );
      })}
    </nav>
  );
}
