import React from "react";
import Link from "next/link";
import { ArrowRight, Check, Compass, Users, Plane, Quote } from "lucide-react";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { FlyingBirds } from "@/components/ui/FlyingBirds";
import type { TripCardData } from "@/data/trips";
import type { StoryEntry } from "@/data/community";
import type { HowItWorksContent } from "@/types/cms";
import { formatShortDate, formatStartingPrice, getNextDeparture } from "@/lib/departures";

interface HowItWorksSectionProps {
  content: HowItWorksContent;
  trips: TripCardData[];   // a couple of bookable trips for the step 1 preview
  story?: StoryEntry;      // a real traveller story for the step 3 preview
}

const FALLBACK_TRAVEL_PHOTO =
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=85&w=800";

export function HowItWorksSection({ content, trips, story }: HowItWorksSectionProps) {
  // Step copy comes from the CMS; the icon, checklist and live preview belong to each position
  const visuals = [
    {
      icon: Compass,
      points: ["Small groups, fixed departure dates", "Full itinerary before you book"],
      preview: <TripsPreview trips={trips} content={content} />,
    },
    {
      icon: Users,
      points: ["Say hello before departure", "Ask questions & share plans"],
      preview: <ChatPreview content={content} />,
    },
    {
      icon: Plane,
      points: ["Trip host with you throughout", "Come home with new friends"],
      preview: <TravelPreview story={story} />,
    },
  ];
  const steps = content.steps.slice(0, visuals.length).map((step, i) => ({
    ...visuals[i],
    title: step.title,
    text: step.description,
  }));

  return (
    <section
      id="how-it-works"
      className="py-12 sm:py-14 lg:py-16 bg-[#FFFFFF] relative overflow-hidden select-none"
    >
      <FlyingBirds className="hidden lg:block absolute top-12 left-14 opacity-30 text-[#0E5A60]" />

      {/* Ambient Brand Color Glows */}
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-[#D96C2C]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#0E5A60]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">
        <SectionIntro
          kicker={content.tag}
          before={content.headline}
          accent={content.scriptAccent}
          after={content.headlineSuffix}
          subtitle={content.description}
        />

        {/* Steps, joined by a dotted path on desktop */}
        <div className="relative">
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-7 left-[16.6%] right-[16.6%] border-t-2 border-dashed border-[#D96C2C]/40"
          />
        <ol className="relative grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <li key={step.title} className="relative flex flex-col">
                {/* Step marker */}
                <div className="flex flex-col items-center mb-5">
                  <span className="relative z-10 w-14 h-14 rounded-full bg-[#0E5A60] text-white flex items-center justify-center shadow-lg ring-8 ring-white">
                    <Icon size={22} />
                  </span>
                  <span className="mt-3 text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#C85A24] font-montserrat">
                    Step {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Step card */}
                <div className="flex-1 flex flex-col bg-[#FAF6F0] rounded-[28px] border border-amber-900/10 p-4 sm:p-5 shadow-sm hover:shadow-xl transition-shadow duration-500">
                  <div className="h-60 rounded-2xl overflow-hidden bg-white border border-amber-900/10 shadow-sm">
                    {step.preview}
                  </div>

                  <div className="px-1 pt-5 pb-1 flex-1 flex flex-col">
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0E5A60] leading-snug mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">{step.text}</p>
                    <ul className="mt-auto space-y-2">
                      {step.points.map((point) => (
                        <li key={point} className="flex items-center gap-2.5 text-sm text-[#0E5A60] font-medium">
                          <span className="w-5 h-5 rounded-full bg-[#FDF0EC] text-[#D96C2C] flex items-center justify-center shrink-0">
                            <Check size={12} strokeWidth={3} />
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
        </div>

        {/* Next step */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Link
            href={content.ctaPrimaryUrl}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0E5A60] hover:bg-[#0B2A3D] text-white font-medium text-sm transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
          >
            <span>{content.ctaPrimaryText}</span>
            <ArrowRight size={16} />
          </Link>
          <Link href={content.ctaSecondaryUrl} className="text-sm font-semibold text-[#0E5A60]/80 hover:text-[#D96C2C] transition-colors">
            {content.ctaSecondaryText}
          </Link>
        </div>
      </div>
    </section>
  );
}

// Step 1: real upcoming trips, the way they appear on the journeys page
function TripsPreview({ trips, content }: { trips: TripCardData[]; content: HowItWorksContent }) {
  return (
    <div className="h-full p-4 flex flex-col">
      <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-slate-400 mb-3">{content.step1UpcomingTitle}</p>
      <div className="space-y-2.5 flex-1">
        {trips.map((trip) => {
          const next = getNextDeparture(trip.tourPackage);
          return (
            <div key={trip.slug} className="flex items-center gap-3 rounded-xl border border-slate-100 bg-[#FDFBF7] p-2">
              <img
                src={trip.images[0].replace("w=800", "w=160")}
                alt={trip.destination}
                loading="lazy"
                className="w-12 h-12 rounded-lg object-cover shrink-0"
              />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-[#0E5A60] truncate">{trip.destination}</p>
                <p className="text-[11px] text-slate-500 truncate">
                  {trip.duration}
                  {next && ` · ${formatShortDate(next.startDate)}`}
                </p>
              </div>
              <p className="text-sm font-bold text-[#D96C2C] shrink-0">{formatStartingPrice(trip.tourPackage)}</p>
            </div>
          );
        })}
      </div>
      <div className="mt-3 rounded-full bg-[#D96C2C] text-white text-xs font-bold text-center py-2.5">{content.step1BookButtonText}</div>
    </div>
  );
}

// Step 2: what the pre-trip group looks like (illustrative)
function ChatPreview({ content }: { content: HowItWorksContent }) {
  return (
    <div className="h-full flex flex-col bg-[#EFEAE2]">
      <div className="bg-[#0E5A60] text-white px-4 py-3 flex items-center gap-3">
        <div className="flex -space-x-2">
          {["P", "A", "R"].map((letter, i) => (
            <span
              key={letter}
              className={`w-7 h-7 rounded-full border-2 border-[#0E5A60] text-[10px] font-bold flex items-center justify-center ${
                ["bg-[#D96C2C]", "bg-[#6F8F84]", "bg-[#E5B588] text-[#0B2A3D]"][i]
              }`}
            >
              {letter}
            </span>
          ))}
        </div>
        <div className="min-w-0">
          <p className="text-xs font-bold truncate">{content.step2GroupTitle}</p>
          <p className="text-[10px] text-white/70">{content.step2GroupSubtitle}</p>
        </div>
      </div>
      <div className="flex-1 p-3.5 space-y-2 text-xs flex flex-col justify-center">
        <div className="bg-white rounded-2xl rounded-tl-sm px-3 py-2 max-w-[85%] shadow-xs">
          <p className="text-[10px] font-bold text-[#D96C2C]">{content.step2Message1Author}</p>
          <p className="text-slate-700">{content.step2Message1Text}</p>
        </div>
        <div className="bg-white rounded-2xl rounded-tl-sm px-3 py-2 max-w-[85%] shadow-xs">
          <p className="text-[10px] font-bold text-[#0E5A60]">{content.step2Message2Author}</p>
          <p className="text-slate-700">{content.step2Message2Text}</p>
        </div>
        <div className="bg-[#DCF8C6] rounded-2xl rounded-tr-sm px-3 py-2 max-w-[85%] self-end shadow-xs">
          <p className="text-slate-700">{content.step2Message3Text}</p>
        </div>
      </div>
    </div>
  );
}

// Step 3: a real trip photo and a line from a real traveller
function TravelPreview({ story }: { story?: StoryEntry }) {
  return (
    <div className="relative h-full">
      <img
        src={story?.trip.coverImage ?? FALLBACK_TRAVEL_PHOTO}
        alt={story ? `${story.trip.destination} trip` : "Friends travelling together"}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A3D]/90 via-[#0B2A3D]/20 to-transparent" />
      {story && (
        <div className="absolute inset-x-0 bottom-0 p-4 text-white">
          <Quote size={18} className="text-[#D96C2C] fill-[#D96C2C] mb-1.5" />
          <p className="font-serif italic text-sm leading-snug line-clamp-2">{story.story.pullQuote}</p>
          <p className="text-[11px] text-white/75 mt-1.5">
            — {story.story.authors.map((a) => a.name.split(" ")[0]).join(" & ")}, {story.trip.destination}
          </p>
        </div>
      )}
    </div>
  );
}
