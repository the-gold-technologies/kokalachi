"use client";

import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import type { StoryEntry } from "@/data/community";
import { StoryCard } from "./StoryCard";

// Every traveller letter as a card, filterable by destination, 12 at a time with "Show more".
// Built to stay tidy with hundreds of stories.

const PAGE_SIZE = 12;

export function StoryBrowser({ entries, eyebrow }: { entries: StoryEntry[]; eyebrow: string }) {
  const [destination, setDestination] = useState<string | null>(null);
  const [visible, setVisible] = useState(PAGE_SIZE);

  // Destinations with how many letters each, most first
  const destinations = useMemo(() => {
    const counts = new Map<string, number>();
    for (const { trip } of entries) counts.set(trip.destination, (counts.get(trip.destination) ?? 0) + 1);
    return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  }, [entries]);

  const filtered = destination ? entries.filter((e) => e.trip.destination === destination) : entries;
  const shown = filtered.slice(0, visible);
  const remaining = filtered.length - shown.length;

  const pick = (value: string | null) => {
    setDestination(value);
    setVisible(PAGE_SIZE);
  };

  const chip = (active: boolean) =>
    `inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-semibold border transition-colors ${
      active
        ? "bg-[#0E5A60] border-[#0E5A60] text-white shadow-sm"
        : "bg-white border-[#0E5A60]/15 text-[#0E5A60] hover:border-[#0E5A60]/40"
    }`;

  return (
    <section className="relative py-14 sm:py-20">
      <div className="site-container relative z-10">
        {/* Heading on the left, destination filters on the right */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8 sm:mb-10">
          <div className="shrink-0">
            <p className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-[#C85A24] font-montserrat mb-3">
              {eyebrow}
            </p>
            <h2 className="heading-section font-serif text-[#0E5A60]">
              {entries.length} {entries.length === 1 ? "story" : "stories"} from{" "}
              <span className="font-script font-normal text-[1.15em] text-[#D96C2C]">
                {destinations.length} {destinations.length === 1 ? "place" : "places"}
              </span>
            </h2>
          </div>

          {destinations.length > 1 && (
            <div
              className="flex flex-wrap lg:justify-end gap-2 lg:max-w-[60%]"
              role="group"
              aria-label="Filter stories by destination"
            >
              <button type="button" onClick={() => pick(null)} aria-pressed={!destination} className={chip(!destination)}>
                All stories <span className="opacity-60 font-normal">{entries.length}</span>
              </button>
              {destinations.map(([name, count]) => (
                <button
                  key={name}
                  type="button"
                  onClick={() => pick(name)}
                  aria-pressed={destination === name}
                  className={chip(destination === name)}
                >
                  {name} <span className="opacity-60 font-normal">{count}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {shown.map((entry) => (
            <StoryCard key={`${entry.trip.slug}-${entry.story.id}`} entry={entry} />
          ))}
        </div>

        {remaining > 0 && (
          <div className="mt-10 flex flex-col items-center gap-2">
            <button
              type="button"
              onClick={() => setVisible((v) => v + PAGE_SIZE)}
              className="inline-flex items-center gap-2 rounded-full bg-white hover:bg-[#0E5A60] hover:text-white text-[#0E5A60] border border-[#0E5A60]/20 px-7 py-3 text-sm font-bold uppercase tracking-wider shadow-sm transition-colors"
            >
              Show more stories <ChevronDown size={16} />
            </button>
            <p className="text-xs text-slate-500">
              Showing {shown.length} of {filtered.length}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
