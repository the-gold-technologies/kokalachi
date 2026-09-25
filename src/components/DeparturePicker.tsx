"use client";

import React, { useState } from "react";
import { Departure, TourPackage } from "@/data/trips";
import {
  formatDayDate,
  getAvailability,
  getDeparturePrice,
  getDepartureOriginalPrice,
  groupByMonth,
  isSoldOut,
} from "@/lib/departures";

const toneStyles = {
  available: { dot: "bg-emerald-500", text: "text-emerald-700" },
  limited: { dot: "bg-amber-500", text: "text-amber-700" },
  soldout: { dot: "bg-slate-400", text: "text-slate-500" },
};

// Batch selector for the booking box: month tabs (when dates span several
// months), then one row per departure with dates, price and seat status.
export function DeparturePicker({
  tour,
  departures,
  selectedId,
  onSelect,
}: {
  tour: TourPackage;
  departures: Departure[];
  selectedId?: string;
  onSelect: (id: string) => void;
}) {
  const months = groupByMonth(departures);
  const selectedMonth = months.find((m) => m.departures.some((d) => d.id === selectedId))?.month;
  const [activeMonth, setActiveMonth] = useState<string | undefined>(selectedMonth);
  const current = months.find((m) => m.month === activeMonth) ?? months[0];

  if (!current) {
    return <p className="text-[13px] text-slate-500">New dates are coming soon.</p>;
  }

  return (
    <div>
      {months.length > 1 && (
        <div className="flex gap-1.5 mb-2.5 overflow-x-auto [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
          {months.map((m) => {
            const isActive = m.month === current.month;
            return (
              <button
                key={m.month}
                type="button"
                onClick={() => setActiveMonth(m.month)}
                className={`shrink-0 px-3 py-1.5 rounded-full text-[12px] font-bold border transition-colors ${
                  isActive
                    ? "bg-[#0E5A60] border-[#0E5A60] text-white"
                    : "bg-white border-slate-200 text-slate-600 hover:border-[#0E5A60]/50"
                }`}
              >
                {m.month.split(" ")[0].slice(0, 3)}
              </button>
            );
          })}
        </div>
      )}

      <div className="flex flex-col gap-2">
        {current.departures.map((d) => {
          const soldOut = isSoldOut(d);
          const isSelected = d.id === selectedId;
          const price = getDeparturePrice(tour, d);
          const originalPrice = getDepartureOriginalPrice(tour, d);
          const availability = getAvailability(d);
          const tone = toneStyles[availability.tone];

          return (
            <button
              key={d.id}
              type="button"
              disabled={soldOut}
              onClick={() => onSelect(d.id)}
              aria-pressed={isSelected}
              className={`w-full text-left px-3.5 py-2.5 rounded-xl border transition-all ${
                isSelected
                  ? "border-[#0E5A60]/30 bg-[#0E5A60]/[0.04]"
                  : "border-slate-200 bg-white hover:border-[#0E5A60]/50"
              } disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:border-slate-200`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className={`text-[13px] font-bold text-[#0E5A60] ${soldOut ? "line-through" : ""}`}>
                    {formatDayDate(d.startDate)} <span className="text-slate-400 font-medium">→</span> {formatDayDate(d.endDate)}
                  </p>
                  {d.note && <p className="text-[11px] text-slate-500 mt-0.5">{d.note}</p>}
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`flex items-center gap-1 text-[11px] font-semibold ${tone.text}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${tone.dot}`} />
                      {availability.label}
                    </span>
                    {d.label && (
                      <span className="px-1.5 py-0.5 rounded bg-[#D96C2C]/10 text-[#C85A24] text-[10px] font-bold uppercase tracking-wide">
                        {d.label}
                      </span>
                    )}
                  </div>
                </div>
                <div className="text-right shrink-0">
                  {price != null ? (
                    <>
                      <p className="text-[13px] font-black text-slate-800">₹{price.toLocaleString("en-IN")}</p>
                      {originalPrice != null && originalPrice > price && (
                        <p className="text-[11px] text-slate-400 line-through">₹{originalPrice.toLocaleString("en-IN")}</p>
                      )}
                    </>
                  ) : (
                    <p className="text-[11px] font-semibold text-slate-500">Price TBA</p>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
