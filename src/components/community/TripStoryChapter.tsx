"use client";

import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BedDouble,
  Bus,
  CalendarDays,
  Camera,
  CarFront,
  ChevronDown,
  Headset,
  HeartHandshake,
  Mail,
  MapPin,
  Mountain,
  PartyPopper,
  Play,
  Quote,
  Sparkles,
  Stamp,
  Ticket,
  UserCheck,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { CommunityTrip, HighlightIcon, TravellerStory } from "@/data/community";
import { MediaLightbox } from "./MediaLightbox";

// Photo wall shows this many tiles; the last one opens the rest in the viewer
const MAX_TILES = 8;

// Varied tile shapes + tilts so the wall reads like a scrapbook, not a grid
const TILE_SHAPES = ["aspect-[4/5]", "aspect-[4/3]", "aspect-square", "aspect-[3/4]", "aspect-[5/4]"];
const TILE_TILTS = ["sm:-rotate-1", "sm:rotate-1", "sm:rotate-[1.5deg]", "sm:-rotate-[1.5deg]"];
const TAPE_COLORS = ["bg-[#FFF4E5] text-[#8C5E3C]", "bg-[#D4EBE6] text-[#1E5D53]", "bg-[#FDE8BD] text-[#7A5012]"];

interface TripStoryChapterProps {
  trip: CommunityTrip;
  number: number;
}

export function TripStoryChapter({ trip, number }: TripStoryChapterProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const closeViewer = useCallback(() => setOpenIndex(null), []);

  const tiles = trip.media.slice(0, MAX_TILES);
  const hiddenCount = trip.media.length - tiles.length;
  const photoCount = trip.media.filter((m) => m.type === "image").length;
  const videoCount = trip.media.length - photoCount;

  return (
    <section id={trip.slug} className="relative py-14 sm:py-20 scroll-mt-28">
      <div className="site-container relative z-10">
        {/* Chapter header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 sm:mb-12">
          <div className="flex items-start gap-4 sm:gap-6">
            <span className="font-serif text-5xl sm:text-6xl lg:text-7xl text-[#D96C2C]/25 leading-none select-none">
              {String(number).padStart(2, "0")}
            </span>
            <div>
              <p className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.25em] text-[#C85A24] font-montserrat mb-2">
                {trip.tripType}
              </p>
              <h2 className="heading-section font-serif text-[#0E5A60] mb-3">
                {trip.destination}
              </h2>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs sm:text-sm text-slate-500">
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-[#D96C2C]" /> {trip.destination}, {trip.country}
                </span>
                <span className="flex items-center gap-1.5">
                  <CalendarDays size={14} className="text-[#D96C2C]" /> {trip.travelledOn}
                </span>
                <span className="flex items-center gap-1.5">
                  <Camera size={14} className="text-[#D96C2C]" />
                  {photoCount} {photoCount === 1 ? "photo" : "photos"}
                  {videoCount > 0 && ` · ${videoCount} ${videoCount === 1 ? "video" : "videos"}`}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-3">
            <p className="font-script text-2xl sm:text-3xl text-[#0E5A60] -rotate-2">{trip.tagline}</p>
            {trip.journeySlug && (
              <Link
                href={`/journeys/${trip.journeySlug}`}
                className="group inline-flex items-center gap-2 rounded-full border border-[#0E5A60]/20 bg-white hover:bg-[#0E5A60] hover:text-white text-[#0E5A60] px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
              >
                See the {trip.destination} journey
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
          </div>
        </div>

        {/* Photo & video wall */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 sm:gap-5 mb-14 sm:mb-16">
          {tiles.map((item, i) => {
            const isLastWithMore = hiddenCount > 0 && i === tiles.length - 1;
            const shape = i === 0 ? "aspect-[4/5]" : TILE_SHAPES[i % TILE_SHAPES.length];
            return (
              <button
                key={item.src + i}
                onClick={() => setOpenIndex(i)}
                className={`group relative block w-full mb-4 sm:mb-5 break-inside-avoid bg-white p-2 pb-3 rounded-xl shadow-md hover:shadow-2xl hover:rotate-0 hover:-translate-y-1 transition-all duration-500 text-left cursor-pointer ${TILE_TILTS[i % TILE_TILTS.length]}`}
                aria-label={`Open ${item.caption ?? item.alt}`}
              >
                {/* Washi tape on every third tile */}
                {i % 3 === 0 && (
                  <span
                    className={`absolute -top-2.5 left-1/2 -translate-x-1/2 z-20 px-3 py-0.5 font-script text-xs font-bold rounded-sm border-y border-amber-900/15 shadow-sm -rotate-3 whitespace-nowrap ${TAPE_COLORS[(i / 3) % TAPE_COLORS.length]}`}
                  >
                    {i === 0 ? `📌 ${trip.destination}` : "♡ memories"}
                  </span>
                )}

                <div className={`relative overflow-hidden rounded-lg bg-slate-100 ${shape}`}>
                  <img
                    src={item.type === "video" ? item.poster : item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {item.type === "video" && (
                    <>
                      <div className="absolute inset-0 bg-black/25" />
                      <span className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-white/90 text-[#D96C2C] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play size={22} className="fill-[#D96C2C] ml-1" />
                      </span>
                      <span className="absolute top-2.5 right-2.5 text-[10px] font-mono uppercase tracking-wider text-white bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-full">
                        Video
                      </span>
                    </>
                  )}

                  {isLastWithMore && (
                    <div className="absolute inset-0 bg-[#0B2A3D]/70 flex flex-col items-center justify-center text-white">
                      <span className="font-serif text-4xl">+{hiddenCount}</span>
                      <span className="text-[11px] uppercase tracking-widest font-bold">more moments</span>
                    </div>
                  )}
                </div>

                {item.caption && (
                  <p className="font-script text-base sm:text-lg text-slate-700 text-center leading-tight mt-2 px-1">
                    {item.caption}
                  </p>
                )}
              </button>
            );
          })}
        </div>

        {/* Traveller letters */}
        <div className="space-y-10 sm:space-y-12">
          <p className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-[#C85A24] font-montserrat flex items-center gap-3">
            <span className="h-px w-10 bg-[#C85A24]/40" />
            In their words
          </p>
          {trip.stories.map((story, i) => (
            <StoryLetter key={story.id} story={story} trip={trip} flipped={i % 2 === 1} />
          ))}
        </div>
      </div>

      <MediaLightbox
        media={trip.media}
        index={openIndex}
        title={`${trip.destination} · ${trip.travelledOn}`}
        onClose={closeViewer}
        onChange={setOpenIndex}
      />
    </section>
  );
}

const HIGHLIGHT_ICONS: Record<HighlightIcon, LucideIcon> = {
  guide: UserCheck,
  welcome: HeartHandshake,
  hotel: BedDouble,
  bus: Bus,
  visa: Stamp,
  transfer: CarFront,
  tours: Ticket,
  support: Headset,
  plan: Sparkles,
  place: Mountain,
  friends: PartyPopper,
};

// Letters start folded: summary + highlights first, the full text on demand
function StoryLetter({ story, trip, flipped }: { story: TravellerStory; trip: CommunityTrip; flipped: boolean }) {
  const [expanded, setExpanded] = useState(false);
  const firstName = story.authors[0].name.split(" ")[0];

  // Arriving from a homepage card (/community#story-<id>) opens that letter straight away
  useEffect(() => {
    const openIfLinked = () => {
      if (window.location.hash === `#story-${story.id}`) setExpanded(true);
    };
    openIfLinked();
    window.addEventListener("hashchange", openIfLinked);
    return () => window.removeEventListener("hashchange", openIfLinked);
  }, [story.id]);
  const wordCount = story.paragraphs.join(" ").split(/\s+/).length;
  const readMinutes = Math.max(1, Math.round(wordCount / 200));

  return (
    <article id={`story-${story.id}`} className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-[32px] overflow-hidden shadow-lg border border-amber-900/10 bg-[#FFFDF9]">
      {/* Quote panel over the trip photo */}
      <div className={`relative lg:col-span-5 min-h-[300px] p-7 sm:p-10 flex flex-col justify-between text-white ${flipped ? "lg:order-2" : ""}`}>
        <img src={trip.coverImage} alt="" className="absolute inset-0 w-full h-full object-cover" />
        {/* Shade only behind the quote (top) and names (bottom) so the photo shows through the middle */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B2A3D]/85 via-[#0B2A3D]/10 to-[#0B2A3D]/90" />
        <div className="absolute inset-0 bg-[#0E5A60]/10" />

        <div className="relative drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]">
          <Quote size={40} className="text-[#D96C2C] fill-[#D96C2C] mb-4" />
          <p className="font-script text-3xl sm:text-4xl leading-tight">{story.pullQuote}</p>
        </div>

        <div className="relative mt-24 space-y-3 drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]">
          {story.authors.map((author) => (
            <div key={author.name} className="flex items-center gap-3">
              <span className="w-11 h-11 rounded-full bg-[#D96C2C] text-white font-serif text-base flex items-center justify-center shrink-0 border-2 border-white/30">
                {initials(author.name)}
              </span>
              <div className="min-w-0">
                <p className="font-semibold text-sm sm:text-base leading-tight">{author.name}</p>
                {author.role && <p className="text-[11px] sm:text-xs text-white/70 leading-snug">{author.role}</p>}
              </div>
            </div>
          ))}
          <p className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest bg-white/15 backdrop-blur-md border border-white/20 rounded-full px-3 py-1 mt-2">
            <Users size={12} /> {story.travelledAs} · {trip.destination}
          </p>
        </div>
      </div>

      {/* At-a-glance summary, with the full letter one tap away */}
      <div className={`relative lg:col-span-7 p-7 sm:p-10 lg:p-12 ${flipped ? "lg:order-1" : ""}`}>
        <div className="hidden sm:block absolute -top-1 right-14 w-24 h-6 bg-[#FFF4E5] border-y border-amber-900/15 rotate-[4deg]" />

        <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-[#0E5A60] leading-tight mb-5">
          {story.title}
        </h3>

        {/* In short */}
        <div className="border-l-4 border-[#D96C2C] bg-[#FDF0EC]/60 rounded-r-2xl px-5 py-4 mb-7">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#C85A24] font-montserrat mb-1.5">
            In short
          </p>
          <p className="font-serif italic text-[17px] sm:text-lg text-[#0B2A3D] leading-relaxed">{story.summary}</p>
        </div>

        {/* What they loved */}
        <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-slate-400 font-montserrat mb-3">
          What they loved
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-7">
          {story.highlights.map((h) => {
            const Icon = HIGHLIGHT_ICONS[h.icon];
            return (
              <li key={h.label} className="flex items-center gap-3 bg-white rounded-2xl border border-amber-900/10 px-3.5 py-3 shadow-[0_2px_10px_rgba(11,42,61,0.04)]">
                <span className="w-10 h-10 rounded-xl bg-[#EBF3F0] text-[#0E5A60] flex items-center justify-center shrink-0">
                  <Icon size={19} />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-[#0E5A60] leading-tight">{h.label}</span>
                  <span className="block text-xs text-slate-500 leading-snug mt-0.5">{h.detail}</span>
                </span>
              </li>
            );
          })}
        </ul>

        {/* Full letter */}
        <button
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="group w-full flex items-center justify-between gap-3 rounded-2xl border border-dashed border-[#D96C2C]/40 hover:border-[#D96C2C] hover:bg-[#FDF0EC]/50 px-5 py-3.5 text-left transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D96C2C]/50"
        >
          <span className="flex items-center gap-2.5 text-sm font-bold text-[#D96C2C]">
            <Mail size={17} />
            {expanded ? "Fold the letter" : `Read ${firstName}’s full letter`}
          </span>
          <span className="flex items-center gap-2 text-[11px] text-slate-400 font-medium">
            {readMinutes} min read
            <ChevronDown size={16} className={`text-[#D96C2C] transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
          </span>
        </button>

        <div className={`grid transition-[grid-template-rows] duration-500 ease-out ${expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
          <div className="overflow-hidden">
            <div className="pt-6 space-y-4 text-slate-700 text-[15px] sm:text-base leading-relaxed">
              {story.paragraphs.map((p, i) => (
                <p key={i}>{withHighlights(p)}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Signature */}
        <div className="mt-8 pt-6 border-t border-dashed border-amber-900/20 flex flex-wrap items-end justify-between gap-3">
          <div>
            {story.signoff && <p className="text-xs uppercase tracking-widest text-slate-400 mb-1">{story.signoff}</p>}
            <p className="font-script text-2xl sm:text-3xl text-[#0E5A60] leading-tight">
              {story.authors.map((a) => a.name).join(" & ")}
            </p>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#D96C2C]/70 border border-[#D96C2C]/30 px-2.5 py-1 rounded-sm rotate-3">
            {trip.destination} · {trip.travelledOn}
          </span>
        </div>
      </div>
    </article>
  );
}

// Turns ==phrase== into a hand-drawn marker highlight
function withHighlights(text: string) {
  return text.split(/==(.+?)==/g).map((part, i) =>
    i % 2 === 1 ? (
      <mark key={i} className="bg-transparent text-[#0B2A3D] font-medium bg-[linear-gradient(transparent_60%,rgba(217,108,44,0.28)_60%)] px-0.5">
        {part}
      </mark>
    ) : (
      part
    ),
  );
}

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}
