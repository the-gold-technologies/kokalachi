import React from "react";
import Link from "next/link";
import { Compass, Sparkles, Users } from "lucide-react";
import { TitleUnderline } from "@/components/ui/TitleUnderline";
import type { HeadingTag } from "@/lib/content";
import type { TripsPage, TripsTab } from "@/data/tripPages";

// Hero for the /trips pages, same look as /journeys. Text and photo from CMS → Trips Pages.
export function TripsHero({ page, headingTag: Heading = "h1" }: { page: TripsPage; headingTag?: HeadingTag }) {
  return (
    // Same height as the other page heroes (/journeys, /blogs, /faqs)
    <div className="relative h-[60vh] min-h-[420px] w-full">
      {/* Photo subjects sit on the right, leaving the left side clear for the text */}
      <img
        src={page.heroImage}
        alt={page.tabLabel}
        className="absolute inset-0 w-full h-full object-cover object-[center_55%]"
      />
      {/* Same overlay as /blogs: dark only behind the text, plus a soft band so the navbar stays readable */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A3D]/90 via-[#0B2A3D]/25 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/25 to-transparent" />

      <div className="absolute inset-0 flex items-end pb-14 sm:pb-16">
        <div className="site-container">
          <div className="max-w-6xl animate-in fade-in slide-in-from-bottom-8 duration-700">
            {page.tagline && (
              <span className="inline-block bg-[#D96C2C] text-white text-xs font-medium px-4 py-1.5 rounded-full uppercase tracking-widest shadow-sm mb-4">
                {page.tagline}
              </span>
            )}
            <Heading className="heading-hero font-semibold font-serif text-white mb-2">
              {page.headline}{" "}
              {page.scriptAccent && (
                <span className="relative inline-block font-script font-normal text-[1.12em] text-white">
                  {page.scriptAccent}
                  <TitleUnderline />
                </span>
              )}
            </Heading>
            {page.description && (
              <p className="text-white/85 text-sm sm:text-base lg:text-lg mt-4 max-w-3xl font-sans leading-relaxed">
                {page.description}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Links between the /trips pages, in the CMS tab order. Listing tabs keep the current filters (query).
export function TripsTabs({ pages, active, query = "" }: { pages: TripsTab[]; active: string; query?: string }) {
  return (
    <nav aria-label="Trips" className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
      {pages.map((page) => {
        const isActive = page.slug === active;
        const href = page.layout === "list" && query ? `${page.path}?${query}` : page.path;
        return (
          <Link
            key={page.slug}
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
            {page.tabLabel}
          </Link>
        );
      })}
    </nav>
  );
}

// Icons for the note cards, in order (repeating if there are more notes)
const NOTE_ICONS = [Users, Sparkles, Compass];

// Note cards between the filters and the trip list (e.g. on Solo Travellers)
export function TripsNotes({ notes }: { notes: TripsPage["notes"] }) {
  if (notes.length === 0) return null;
  return (
    <div className="site-container pt-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {notes.map((note, i) => {
          const Icon = NOTE_ICONS[i % NOTE_ICONS.length];
          return (
          <div key={i} className="flex gap-4 bg-[#FAF6F0] rounded-2xl p-5 border border-[#0E5A60]/10">
            <div className="w-11 h-11 rounded-2xl bg-[#0E5A60]/10 text-[#0E5A60] flex items-center justify-center shrink-0">
              <Icon size={20} />
            </div>
            <div>
              <p className="font-bold text-[#0E5A60]">{note.title}</p>
              <p className="text-sm text-slate-500 mt-1 leading-relaxed">{note.text}</p>
            </div>
          </div>
          );
        })}
      </div>
    </div>
  );
}
