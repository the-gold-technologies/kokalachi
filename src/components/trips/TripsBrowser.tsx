"use client";

import React, { Suspense, useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { ArrowRight, CalendarDays, CalendarSearch, MapPin, Search, X } from "lucide-react";
import type { TripCardData } from "@/data/trips";
import type { HeadingTag } from "@/lib/content";
import { TRIP_PAGES, type TripPageKey } from "@/data/tripPages";
import { formatDate } from "@/lib/departures";
import { CompactTripCardItem } from "@/components/CompactTripCardItem";
import { PastTripCard } from "@/components/trips/PastTripCard";
import { TripsHero, TripsTabs } from "@/components/trips/TripsHeader";
import {
  NO_FILTERS,
  destinationOptions,
  filterTrips,
  hasActiveFilters,
  monthOptions,
  type TripFilters,
} from "@/lib/tripFilters";

const toQuery = (f: TripFilters) => {
  const params = new URLSearchParams();
  if (f.q) params.set("q", f.q);
  if (f.destination) params.set("destination", f.destination);
  if (f.month) params.set("month", f.month);
  if (f.date) params.set("date", f.date);
  if (f.from) params.set("from", f.from);
  if (f.to) params.set("to", f.to);
  if (f.weekend) params.set("weekend", "1");
  return params.toString();
};

// Filters set by the home page search, shown as removable chips (they have no dropdown here)
function searchChips(f: TripFilters): { label: string; clear: Partial<TripFilters> }[] {
  const chips: { label: string; clear: Partial<TripFilters> }[] = [];
  if (f.q) chips.push({ label: `“${f.q}”`, clear: { q: "" } });
  if (f.from || f.to) {
    const label =
      f.from && f.to
        ? `Departing ${formatDate(f.from)} – ${formatDate(f.to)}`
        : f.from
          ? `Departing from ${formatDate(f.from)}`
          : `Departing by ${formatDate(f.to)}`;
    chips.push({ label, clear: { from: "", to: "" } });
  }
  if (f.weekend) chips.push({ label: "Weekend departures", clear: { weekend: false } });
  return chips;
}

// Reads the filters from the URL (e.g. /trips/upcoming?destination=Kashmir&month=2026-11).
// Kept in its own Suspense boundary so the trip list itself is still rendered on the server.
function FiltersFromUrl({ onLoad }: { onLoad: (f: TripFilters) => void }) {
  const query = useSearchParams().toString();
  useEffect(() => {
    const params = new URLSearchParams(query);
    onLoad({
      destination: params.get("destination") ?? "",
      month: params.get("month") ?? "",
      date: params.get("date") ?? "",
      q: params.get("q") ?? "",
      from: params.get("from") ?? "",
      to: params.get("to") ?? "",
      weekend: params.get("weekend") === "1",
    });
  }, [query, onLoad]);
  return null;
}

const fieldClass =
  "w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-3 py-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0E5A60]/20 focus:border-[#0E5A60] transition-all";

interface TripsBrowserProps {
  trips: TripCardData[];
  pageKey: Exclude<TripPageKey, "custom">;
  heroImage: string;
  headingTag?: HeadingTag;
  intro?: React.ReactNode; // extra block above the trip list (e.g. the solo travellers notes)
}

export function TripsBrowser({ trips, pageKey, heroImage, headingTag, intro }: TripsBrowserProps) {
  const page = TRIP_PAGES[pageKey];
  const list = page.list ?? "all";
  const pathname = usePathname();
  // draft: what's picked in the filter bar; filters: what the list shows (applied on Search)
  const [draft, setDraft] = useState<TripFilters>(NO_FILTERS);
  const [filters, setFilters] = useState<TripFilters>(NO_FILTERS);
  const loadFilters = useCallback((f: TripFilters) => {
    setDraft(f);
    setFilters(f);
  }, []);

  const destinations = useMemo(() => destinationOptions(trips, list), [trips, list]);
  const months = useMemo(() => monthOptions(trips, list), [trips, list]);
  const rows = filterTrips(trips, list, filters);
  const total = rows.length;
  const query = toQuery(filters);

  const editDraft = (patch: Partial<TripFilters>) => setDraft((d) => ({ ...d, ...patch }));

  const applyFilters = (next: TripFilters) => {
    loadFilters(next);
    const q = toQuery(next);
    window.history.replaceState(null, "", q ? `${pathname}?${q}` : pathname);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    applyFilters(draft);
  };

  return (
    <div className="min-h-screen font-sans text-slate-800 pb-20">
      <Suspense fallback={null}>
        <FiltersFromUrl onLoad={loadFilters} />
      </Suspense>

      <TripsHero page={page} image={heroImage} headingTag={headingTag} />

      {/* Filters: destination, month and date */}
      <div className="site-container relative z-10 -mt-8">
        <form onSubmit={handleSearch} className="bg-white rounded-[2rem] p-4 sm:p-5 shadow-xl border border-slate-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto] gap-3 sm:gap-4 items-end">
            <label className="flex flex-col gap-1.5">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#D96C2C] px-1">Destination</span>
              <span className="relative">
                <MapPin size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#0E5A60]/70 pointer-events-none" />
                <select
                  value={draft.destination}
                  onChange={(e) => editDraft({ destination: e.target.value })}
                  className={`${fieldClass} appearance-none cursor-pointer`}
                >
                  <option value="">All destinations</option>
                  {destinations.map((name) => (
                    <option key={name} value={name}>
                      {name}
                    </option>
                  ))}
                </select>
              </span>
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#D96C2C] px-1">Month</span>
              <span className="relative">
                <CalendarDays size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#0E5A60]/70 pointer-events-none" />
                <select
                  value={draft.month}
                  onChange={(e) => editDraft({ month: e.target.value })}
                  className={`${fieldClass} appearance-none cursor-pointer`}
                >
                  <option value="">Any month</option>
                  {months.map((m) => (
                    <option key={m.value} value={m.value}>
                      {m.label}
                    </option>
                  ))}
                </select>
              </span>
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#D96C2C] px-1">Date</span>
              <span className="relative">
                <CalendarSearch size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#0E5A60]/70 pointer-events-none" />
                <input
                  type="date"
                  value={draft.date}
                  onChange={(e) => editDraft({ date: e.target.value })}
                  className={`${fieldClass} cursor-pointer`}
                  aria-label="Travelling on this date"
                />
              </span>
            </label>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-xl bg-[#D96C2C] hover:bg-[#C85A24] text-white px-7 py-3 text-sm font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <Search size={16} className="stroke-[2.5]" /> Search
            </button>
          </div>

          {searchChips(filters).length > 0 && (
            <div className="mt-3 flex flex-wrap items-center gap-2 px-1">
              <span className="text-xs text-slate-500">Your search:</span>
              {searchChips(filters).map((chip) => (
                <button
                  key={chip.label}
                  type="button"
                  onClick={() => applyFilters({ ...filters, ...chip.clear })}
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#0E5A60]/[0.07] border border-[#0E5A60]/15 px-3 py-1 text-xs font-semibold text-[#0E5A60] hover:bg-[#0E5A60]/15 transition-colors cursor-pointer"
                  aria-label={`Remove ${chip.label}`}
                >
                  {chip.label} <X size={12} />
                </button>
              ))}
            </div>
          )}

          <div className="mt-3 flex items-center justify-between gap-3 px-1 text-xs text-slate-500">
            <span>
              {total} {total === 1 ? "trip" : "trips"}
              {hasActiveFilters(filters) ? " match your filters" : ""}
            </span>
            {hasActiveFilters(filters) && (
              <button
                type="button"
                onClick={() => applyFilters(NO_FILTERS)}
                className="flex items-center gap-1 font-bold text-[#0E5A60] hover:text-[#D96C2C] transition-colors cursor-pointer"
              >
                <X size={14} /> Clear filters
              </button>
            )}
          </div>
        </form>
      </div>

      {intro}

      <section className="site-container pt-10">
        {/* Section heading on the left, the trips tabs on the right */}
        <div className="mb-6 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 border-b border-slate-100 pb-5">
          <div className="shrink-0">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0E5A60]">{page.listTitle}</h2>
            <p className="text-sm text-slate-500 mt-1">{page.listSubtitle}</p>
          </div>
          <div className="min-w-0">
            <TripsTabs active={pageKey} query={query} />
          </div>
        </div>

        {total > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rows.map(({ card, departures, past }) => (
              <div key={card.id} className="h-full">
                {past ? <PastTripCard card={card} departures={departures} /> : <CompactTripCardItem card={card} />}
              </div>
            ))}
          </div>
        )}

        {total === 0 && (
          <div className="py-16 text-center font-sans">
            <p className="text-slate-500">
              {filters.q
                ? `We don't have a trip matching “${filters.q}” on these dates yet.`
                : hasActiveFilters(filters)
                  ? "No trips match these filters yet."
                  : "No trips here yet. Check back soon!"}
            </p>
            {hasActiveFilters(filters) && (
              <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => applyFilters(NO_FILTERS)}
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#0E5A60] text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-[#0B2A3D] transition-colors cursor-pointer"
                >
                  <X size={14} /> Clear filters
                </button>
                {/* Somewhere we don't go yet? A private trip can be planned there */}
                <Link
                  href={TRIP_PAGES.custom.path}
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#D96C2C] text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-[#C85A24] transition-colors"
                >
                  Plan a custom group trip <ArrowRight size={14} />
                </Link>
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  );
}
