import React from "react";
import { Calendar } from "lucide-react";
import { TripCardData } from "@/data/trips";
import {
  formatDeparture,
  formatShortDate,
  getCardDatesFallback,
  getCardDepartures,
} from "@/lib/departures";

// Upcoming batch dates on a trip card: a single date shows its full range,
// several dates show as start-date chips ("17 Oct", "13 Nov") plus "+N more".
export function DepartureChips({
  card,
  max = 3,
  compact = false,
}: {
  card: TripCardData;
  max?: number;
  compact?: boolean;
}) {
  const departures = getCardDepartures(card);
  const iconSize = compact ? 13 : 15;

  if (departures.length === 0) {
    return (
      <div className="flex items-center gap-1.5 text-xs">
        <Calendar size={iconSize} className="text-[#0E5A60] opacity-80 shrink-0" />
        <span className="font-medium text-[#0E5A60]">{getCardDatesFallback(card)}</span>
      </div>
    );
  }

  const shown = departures.slice(0, max);
  const hidden = departures.length - shown.length;
  const chip = `${compact ? "px-1.5 py-0.5 text-[10px]" : "px-2 py-0.5 text-[11px]"} rounded-md font-semibold whitespace-nowrap`;

  return (
    <div
      className="flex items-center gap-1.5 flex-wrap"
      title={departures.map(formatDeparture).join("\n")}
    >
      <Calendar size={iconSize} className="text-[#0E5A60] opacity-80 shrink-0" />
      {shown.map((d) => (
        <span key={d.id} className={`${chip} bg-[#0E5A60]/[0.07] border border-[#0E5A60]/15 text-[#0E5A60]`}>
          {departures.length === 1 ? formatDeparture(d) : formatShortDate(d.startDate)}
        </span>
      ))}
      {hidden > 0 && (
        <span className={`${chip} bg-[#D96C2C]/10 border border-[#D96C2C]/20 text-[#C85A24]`}>
          +{hidden} more
        </span>
      )}
    </div>
  );
}
