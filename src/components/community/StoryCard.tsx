import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin, Quote } from "lucide-react";
import { storyHref, type StoryEntry } from "@/data/community";

// One traveller's letter as a postcard: the trip photo with its date, their line in handwriting,
// a short summary and who wrote it. The whole card opens their full letter on the trip's page.

const initials = (name: string) =>
  name
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

// The date chip: "October 2026" → "Oct 2026"; anything else (e.g. "2026") is shown as it is
function shortDate(travelledOn: string): string {
  return travelledOn.trim().replace(/^([A-Za-z]{3})[A-Za-z]+(?=\s+\d{4}$)/, "$1");
}

export function StoryCard({ entry }: { entry: StoryEntry }) {
  const { trip, story } = entry;
  const date = shortDate(trip.travelledOn);
  const names = story.authors.map((a) => a.name.split(" ")[0]).join(" & ");

  return (
    <Link
      href={storyHref(trip, story)}
      className="group flex flex-col h-full overflow-hidden rounded-[26px] bg-[#FFFDF9] border border-amber-900/10 shadow-[0_6px_20px_rgba(11,42,61,0.06)] hover:shadow-[0_18px_40px_rgba(11,42,61,0.14)] hover:-translate-y-1 transition-all duration-300"
    >
      {/* Trip photo, with when they travelled and where */}
      <div className="relative h-40 overflow-hidden bg-slate-200">
        <img
          src={trip.coverImage}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A3D]/75 via-transparent to-transparent" />
        {/* When they travelled: a solid chip, readable on any photo */}
        {date && (
          <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-semibold text-[#0E5A60] shadow-[0_2px_8px_rgba(0,0,0,0.18)] backdrop-blur-sm">
            <CalendarDays size={12} className="text-[#D96C2C]" />
            {date}
          </span>
        )}
        <p className="absolute left-4 bottom-3 flex items-center gap-1.5 text-white text-xs font-semibold">
          <MapPin size={13} className="text-[#F3B748]" />
          {trip.destination}
          <span className="opacity-60">·</span>
          <span className="font-normal opacity-90">{trip.tripType}</span>
        </p>
      </div>

      {/* Their words */}
      <div className="flex flex-col flex-1 p-6">
        <Quote size={22} className="text-[#D96C2C] fill-[#D96C2C] mb-2" />
        <p className="font-script text-[26px] leading-[1.1] text-[#0E5A60] line-clamp-3">{story.pullQuote}</p>
        <p className="mt-3 text-sm text-slate-600 leading-relaxed line-clamp-3">{story.summary}</p>

        <div className="mt-auto pt-5">
          <div className="flex items-center justify-between gap-3 pt-4 border-t border-dashed border-amber-900/15">
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="flex -space-x-2 shrink-0">
                {story.authors.slice(0, 2).map((a) => (
                  <span
                    key={a.name}
                    className="grid place-items-center h-8 w-8 rounded-full bg-[#0E5A60] text-white text-[11px] font-serif border-2 border-[#FFFDF9]"
                  >
                    {initials(a.name)}
                  </span>
                ))}
              </span>
              <span className="min-w-0">
                <span className="block text-[13px] font-semibold text-[#0B2A3D] truncate">{names}</span>
                <span className="block text-[11px] text-slate-500 truncate">{story.travelledAs}</span>
              </span>
            </div>
            <span className="shrink-0 inline-flex items-center gap-1 text-xs font-bold text-[#D96C2C] group-hover:gap-2 transition-all">
              Read more <ArrowRight size={14} />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
