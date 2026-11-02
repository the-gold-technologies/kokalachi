import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, History, MapPin } from "lucide-react";
import type { Departure, TripCardData } from "@/data/trips";
import { formatDeparture, formatShortDate, getNextDeparture } from "@/lib/departures";

// Card for a trip that has already run: the dates it ran on, and its next batch if there is one
export function PastTripCard({ card, departures }: { card: TripCardData; departures: Departure[] }) {
  const next = getNextDeparture(card.tourPackage);
  const shown = departures.slice(0, 2);
  const hidden = departures.length - shown.length;

  return (
    <Link
      href={`/journeys/${card.slug}`}
      className="bg-white rounded-3xl p-2 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col border border-slate-100 font-sans h-full"
    >
      <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl mb-3 bg-slate-100">
        <img
          src={card.images[0] ?? card.tourPackage.image}
          alt={card.tourPackage.title}
          className="absolute inset-0 w-full h-full object-cover saturate-[0.8] group-hover:saturate-100 group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full text-[10px] font-semibold text-slate-700 shadow-sm flex items-center gap-1">
          <MapPin size={12} className="text-[#C85A24]" /> {card.destination}
        </div>
        <div className="absolute top-3 right-3 bg-[#0E5A60]/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[10px] font-semibold text-white shadow-sm flex items-center gap-1">
          <CheckCircle2 size={11} /> Completed
        </div>
      </div>

      <div className="px-2 pb-2 flex flex-col flex-1">
        <h3 className="text-base sm:text-lg font-bold text-[#0E5A60] font-serif leading-tight mb-1 line-clamp-2">
          {card.tourPackage.title}
        </h3>

        <div className="flex flex-col gap-1.5 my-2.5">
          <div className="flex items-center gap-1 text-[11px]">
            <Clock size={13} className="text-[#0E5A60] opacity-80 shrink-0" />
            <span className="font-medium text-[#0E5A60]">{card.duration}</span>
          </div>
          <div className="flex items-center gap-1.5 flex-wrap" title={departures.map(formatDeparture).join("\n")}>
            <History size={13} className="text-[#0E5A60] opacity-80 shrink-0" />
            <span className="text-[11px] text-slate-500">Ran on</span>
            {shown.map((d) => (
              <span
                key={d.id}
                className="px-1.5 py-0.5 text-[10px] rounded-md font-semibold whitespace-nowrap bg-slate-100 border border-slate-200 text-slate-600"
              >
                {formatDeparture(d)}
              </span>
            ))}
            {hidden > 0 && (
              <span className="px-1.5 py-0.5 text-[10px] rounded-md font-semibold bg-slate-100 border border-slate-200 text-slate-500">
                +{hidden} more
              </span>
            )}
          </div>
        </div>

        <div className="mt-auto pt-2 border-t border-slate-100 flex items-end justify-between gap-2">
          <div>
            <p className="text-[9px] font-bold tracking-wider uppercase mb-0.5 text-slate-400">Next batch</p>
            <p className={`text-sm font-bold leading-none ${next ? "text-[#D96C2C]" : "text-slate-500"}`}>
              {next ? formatShortDate(next.startDate) : card.tourPackage.nextDeparture || "Dates soon"}
            </p>
          </div>
          <div className="flex items-center gap-1 rounded-full bg-[#0E5A60] text-white px-4 py-2 group-hover:bg-[#0B2A3D] transition-all shadow-sm">
            <span className="text-[11px] font-bold uppercase tracking-wider">{next ? "Book again" : "View trip"}</span>
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform stroke-[2.5]" />
          </div>
        </div>
      </div>
    </Link>
  );
}
