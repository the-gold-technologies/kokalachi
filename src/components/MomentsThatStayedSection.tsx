import React from "react";
import Link from "next/link";
import {
  Heart,
  Plane,
  MessageCircle,
  Cake,
  MapPin,
  Camera,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import type { StoryEntry } from "@/data/community";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { FlyingBirds } from "@/components/ui/FlyingBirds";

interface MomentsThatStayedSectionProps {
  stories: StoryEntry[];
  countryCount: number;
}

// Cycles through the list, so the collage stays full even with only a few stories
const at = <T,>(list: T[], i: number): T => list[i % list.length];

// Each card opens that traveller's letter on /community (it unfolds on arrival)
const storyHref = ({ story }: StoryEntry) => `/community#story-${story.id}`;

// "Read more" cue on the quote card (the note under the subtitle covers the rest)
function ReadHint() {
  return (
    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#D96C2C] transition-all group-hover:gap-2">
      Read full letter
      <ArrowRight size={13} />
    </span>
  );
}

const authorNames = ({ story }: StoryEntry) => story.authors.map((a) => a.name.split(" ")[0]).join(" & ");

const initials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");

const timelineSteps = [
  { icon: <Plane size={20} className="stroke-[2]" />, color: "bg-[#6B7D56]", title: "Trip Ends", text: "We part ways with full hearts." },
  { icon: <MessageCircle size={20} className="stroke-[2]" />, color: "bg-[#C85A24]", title: "WhatsApp Still Active", text: "The conversations never stop." },
  { icon: <Cake size={20} className="stroke-[2]" />, color: "bg-[#6B7D56]", title: "Birthdays & Milestones", text: "We celebrate together, no matter the distance." },
  { icon: <MapPin size={20} className="stroke-[2]" />, color: "bg-[#C85A24]", title: "Another Trip Booked", text: "Because some bonds deserve more adventures." },
  { icon: <Camera size={20} className="stroke-[2]" />, color: "bg-[#6B7D56]", title: "Reunions & Meetups", text: "Different plans, same people." },
  { icon: <Heart size={20} className="fill-white stroke-none" />, color: "bg-[#EF4444]", title: "Friendships for Life", text: "From travel buddies to life buddies." },
];

export function MomentsThatStayedSection({ stories, countryCount }: MomentsThatStayedSectionProps) {
  if (stories.length === 0) return null;

  // Fill each slot of the collage from the community data
  const hero = at(stories, 0);
  const chat = at(stories, 1);
  const voice = at(stories, 2);
  const parchment = at(stories, 3);
  const polaroid = at(stories, 4);

  const heroImage = hero.trip.coverImage;

  // The polaroid photo comes from the same trip as its story, avoiding the hero photo
  const polaroidImage =
    polaroid.trip.media.find((m) => m.type === "image" && m.src !== heroImage)?.src ?? polaroid.trip.coverImage;

  const chatOpening = chat.story.paragraphs[0];
  const chatClosing = chat.story.paragraphs.length > 1 ? chat.story.paragraphs[chat.story.paragraphs.length - 1] : null;

  return (
    <section
      id="moments"
      className="py-12 sm:py-14 lg:py-16 bg-white relative overflow-hidden select-none"
    >
      {/* Soft Decorative Ambient Background */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-[#D96C2C]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#0E5A60]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Grid Pattern Overlay for Scrapbook Board feel */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#0E5A60 1px, transparent 1px)`,
          backgroundSize: `24px 24px`,
        }}
      />

      {/* Decorative Flying Birds (top left, alternating with the section above) */}
      <FlyingBirds className="hidden lg:block absolute top-12 left-16 opacity-35 text-[#0E5A60]" />

      <div className="site-container relative z-10 text-center">
        <SectionIntro
          kicker="MOMENTS THAT STAYED"
          before="In our travellers'"
          accent="own words."
          subtitle={
            <>
              Real reviews and photos from people who travelled with us
              {countryCount > 1 ? ` across ${countryCount} countries` : ""}. Tap any card to read the full letter.
            </>
          }
        />

        {/* SCRAPBOOK COLLAGE */}
        <div className="relative mb-12 text-left">
          {/* MAIN COLLAGE GRID CONTAINER */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start relative">
            {/* =========================================================
                FEATURED LEFT HERO: LEAD STORY PHOTO (7 COLS)
               ========================================================= */}
            <div className="md:col-span-7 relative z-20">
              {/* Main Cinematic Card */}
              <Link
                href={storyHref(hero)}
                className="block rounded-[35px] shadow-xl hover:shadow-2xl transition-all duration-500 relative group h-[340px] sm:h-[400px] bg-slate-900 border-4 border-white"
              >
                {/* Clipped frame so the hover zoom stays inside the rounded border (the tape can still overhang) */}
                <div className="absolute inset-0 overflow-hidden rounded-[31px]">
                  <img
                    src={heroImage}
                    alt={`${hero.trip.destination} — ${hero.trip.tripType}`}
                    className="w-full h-full object-cover opacity-90 group-hover:scale-[1.04] transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30" />
                </div>

                {/* Top Left Washi Tape Overlay */}
                <div className="absolute -top-3 left-28 z-30 px-3.5 py-1 bg-[#FFF4E5]/95 backdrop-blur-md text-[#8C5E3C] font-script text-xs font-bold rounded-sm border-y border-amber-900/20 shadow-md transform -rotate-3 select-none flex items-center gap-1">
                  <span>📌 Unfiltered Moments</span>
                </div>

                {/* Top Right Travel Stamp */}
                <div className="absolute top-4 right-5 text-white/50 font-mono text-[9px] uppercase tracking-widest border border-white/30 px-2 py-1 rounded-sm rotate-6 z-20">
                  {hero.trip.tripType} • {hero.trip.destination}
                </div>

                {/* Bottom Quote Banner */}
                <div className="absolute bottom-5 left-6 right-16 text-white z-20 space-y-1">
                  {/* Always one line; very narrow screens get an ellipsis */}
                  <p title={hero.story.pullQuote} className="text-sm sm:text-base lg:text-lg font-serif italic leading-snug drop-shadow-md truncate">
                    &quot;{hero.story.pullQuote}&quot;
                  </p>
                  <div className="text-xs text-amber-200 font-sans flex flex-wrap items-center gap-2 pt-1 font-medium">
                    <span>— {authorNames(hero)}, {hero.trip.destination}</span>
                    <span className="text-[#D96C2C]">•</span>
                    <span>{hero.trip.travelledOn}</span>
                  </div>
                </div>

                {/* Corner arrow that opens into "Read full letter" on hover */}
                <span className="absolute bottom-5 right-5 z-20 flex items-center gap-0 group-hover:gap-1.5 h-9 px-2.5 group-hover:pl-3.5 rounded-full bg-white text-[#0E5A60] group-hover:bg-[#D96C2C] group-hover:text-white shadow-lg transition-all duration-500">
                  <span className="max-w-0 group-hover:max-w-[90px] overflow-hidden whitespace-nowrap text-[11px] font-bold transition-all duration-500">
                    Read letter
                  </span>
                  <ArrowUpRight size={16} className="shrink-0 group-hover:rotate-45 transition-transform duration-500" />
                </span>
              </Link>

              {/* OVERLAPPING ROW BELOW HERO (WhatsApp Chat + Traveller Note) */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 mt-6 items-start">
                {/* WhatsApp Chat Group Card (7 Cols inside left hero column) */}
                <Link href={storyHref(chat)} className="group sm:col-span-7 bg-white rounded-3xl border border-slate-200/90 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all overflow-hidden flex flex-col transform sm:-rotate-1">
                  {/* WhatsApp Header */}
                  <div className="bg-[#075E54] text-white p-3.5 px-4 flex items-center justify-between">
                    <div className="flex items-center gap-3 truncate">
                      <div className="w-9 h-9 rounded-full overflow-hidden border border-white/40 shrink-0">
                        <img
                          src={chat.trip.coverImage.replace("w=1200", "w=100")}
                          alt={`${chat.trip.destination} group chat`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="truncate">
                        <div className="text-xs font-bold truncate">
                          Kokalachi {chat.trip.destination} Fam ✨
                        </div>
                        <div className="text-[10px] text-emerald-200 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span>{chat.trip.travelledOn} trip</span>
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full font-mono">
                      Chat
                    </span>
                  </div>

                  {/* Chat Message Bubbles, in the traveller's own words */}
                  <div className="p-4 bg-[#E5DDD5] space-y-3 flex-1 flex flex-col justify-center">
                    <div className="bg-white p-3 rounded-2xl rounded-tl-xs shadow-xs text-xs text-slate-800 space-y-1 max-w-[90%]">
                      <div className="text-[10px] font-bold text-[#D96C2C]">{chat.story.authors[0].name}</div>
                      <p className="leading-relaxed line-clamp-3">{chatOpening}</p>
                    </div>
                    {chatClosing && (
                      <div className="bg-[#DCF8C6] p-3 rounded-2xl rounded-tr-xs shadow-xs text-xs text-slate-800 space-y-1 self-end max-w-[90%]">
                        <p className="leading-relaxed line-clamp-3">{chatClosing}</p>
                      </div>
                    )}
                  </div>
                </Link>

                {/* Traveller Note Card (5 Cols inside left hero column) */}
                <Link href={storyHref(voice)} className="group sm:col-span-5 bg-[#FAF4EB] p-4 sm:p-5 rounded-3xl border border-amber-900/10 shadow-md flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all transform sm:rotate-2">
                  <div className="bg-white px-3 py-2 rounded-full border border-amber-900/10 flex items-center gap-2 shadow-2xs mb-3">
                    <div className="w-7 h-7 rounded-full bg-[#0E5A60] text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                      {initials(voice.story.authors[0].name)}
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-semibold text-[#0E5A60] truncate">{voice.story.authors[0].name}</div>
                      <div className="text-[9px] text-slate-500 truncate">{voice.story.travelledAs}</div>
                    </div>
                  </div>

                  <p className="text-[#0E5A60] text-xs font-serif italic leading-relaxed mb-3">
                    &quot;{voice.story.pullQuote}&quot;
                  </p>

                  <div className="flex items-center gap-2 pt-2 border-t border-amber-900/10">
                    <img
                      src={voice.trip.coverImage.replace("w=1200", "w=100")}
                      alt={voice.trip.destination}
                      className="w-6 h-6 rounded-full object-cover border border-white shadow-2xs"
                    />
                    <div className="text-[10px] text-slate-700 font-medium truncate">
                      {voice.trip.destination} • {voice.trip.travelledOn}
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* =========================================================
                FEATURED RIGHT SIDE: SCRAPBOOK STACK & POLAROIDS (5 COLS)
               ========================================================= */}
            <div className="md:col-span-5 space-y-8 relative z-10">
              {/* TOP RIGHT: QUOTE PARCHMENT CARD */}
              <Link href={storyHref(parchment)} className="group block bg-[#FFFDF9] p-6 sm:p-8 rounded-[30px] border border-amber-900/15 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all relative transform md:-rotate-1">
                {/* Decorative Top Stamp */}
                <div className="absolute top-4 right-5 text-[#D96C2C]/30 text-2xl font-serif leading-none">
                  “
                </div>

                <p className="text-[#0E5A60] text-base sm:text-lg font-serif italic leading-relaxed mb-5">
                  &quot;{parchment.story.summary}&quot;
                </p>

                <div className="flex items-end justify-between pt-4 border-t border-amber-900/10">
                  <div className="text-xs text-[#0E5A60]/80 font-sans">
                    <div className="font-semibold text-[#0E5A60]">
                      — {authorNames(parchment)}
                    </div>
                    <div className="text-[#0E5A60] font-bold text-[11px]">
                      {parchment.trip.destination} • {parchment.trip.travelledOn}
                    </div>
                  </div>

                  <ReadHint />
                </div>
              </Link>

              {/* BOTTOM RIGHT: AUTHENTIC TILTED POLAROID PHOTO NOTE CARD */}
              <Link href={storyHref(polaroid)} className="group block p-4 pb-5 bg-[#FFFDF9] rounded-2xl border border-amber-900/15 shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-500 relative bg-paper-texture">
                {/* Washi Tape Strip at Center Top */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 z-30 px-3 py-0.5 bg-[#FDE8BD]/95 text-[#7A5012] font-script text-[11px] font-bold rounded-sm border-y border-amber-900/20 shadow-md transform -rotate-1 select-none flex items-center gap-1">
                  <span><span className="text-[#EF4444]">♡</span> Memory Lane</span>
                </div>

                <div className="overflow-hidden rounded-xl h-64 lg:h-[19rem] mb-3 border border-amber-900/10">
                  <img
                    src={polaroidImage}
                    alt={polaroid.trip.destination}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="text-[10px] font-sans text-slate-500 pt-2 border-t border-amber-900/10 flex items-center justify-between">
                  <span>— {polaroid.trip.destination} {polaroid.trip.tripType} • {polaroid.trip.travelledOn}</span>
                  <span className="text-[#EF4444] font-script text-xs">
                    memories ♡
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM CONNECTED TIMELINE: "The Journey Continues..." (Clean without box or border line) */}
        <div className="relative text-left max-w-7xl mx-auto my-12 pt-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 relative z-10">
            {/* Left Title */}
            <div className="flex-shrink-0 text-center lg:text-left min-w-[210px] lg:pr-4">
              <h3 className="text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#1E293B] leading-[1.12] font-script">
                The Journey <br />
                Continues...{" "}
                <span className="text-[#EF4444] font-sans text-2xl sm:text-3xl inline-block ml-1">
                  ♡
                </span>
              </h3>
            </div>

            {/* Right 6-Step Horizontal Timeline */}
            <div className="flex-grow w-full relative">
              {/* Connecting Wavy Dotted Path */}
              <svg
                className="hidden lg:block absolute top-[10px] left-[4%] right-[4%] w-[92%] h-10 pointer-events-none z-0"
                viewBox="0 0 1000 50"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,25 C80,45 120,5 166,25 C233,45 270,5 333,25 C400,45 430,5 500,25 C570,45 600,5 666,25 C733,45 770,5 833,25 C900,45 940,5 1000,25"
                  stroke="#7A8F68"
                  strokeWidth="2"
                  strokeDasharray="5 5"
                  opacity="0.7"
                />
              </svg>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 relative z-10 items-start">
                {timelineSteps.map((step) => (
                  <div key={step.title} className="flex flex-col items-center text-center group px-1">
                    <div className={`w-11 h-11 sm:w-13 sm:h-13 rounded-full ${step.color} text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform mb-2.5`}>
                      {step.icon}
                    </div>
                    <h4 className="font-semibold text-[#0E5A60] text-[12px] sm:text-[13px] mb-0.5 leading-snug">
                      {step.title}
                    </h4>
                    <p className="text-[10px] sm:text-[11px] text-slate-600 leading-normal font-normal">
                      {step.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
