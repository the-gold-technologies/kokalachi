"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { TickerItem } from "./navData";

// The slim bar above the navbar. Left: a rotating line about who we are. Right: a rotating chip
// with live trip info (next departure, offers, last seats). Each message glides up out of view as
// the next one rises in. Hovering the bar pauses both.

function useRotation(count: number, ms: number, paused: boolean) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (paused || count < 2) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % count), ms);
    return () => clearInterval(timer);
  }, [count, ms, paused]);
  return count ? index % count : 0;
}

// Where each message sits: the current one in place, the one before it above, the rest below
function slot(i: number, active: number, count: number) {
  if (i === active) return "translate-y-0 opacity-100 blur-0";
  if (i === (active - 1 + count) % count) return "-translate-y-full opacity-0 blur-[2px] pointer-events-none";
  return "translate-y-full opacity-0 blur-[2px] pointer-events-none";
}

const motion = "transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none";

export function TopBar({
  facts,
  ticker,
  light,
  hidden,
}: {
  facts: string[];
  ticker: TickerItem[];
  light: boolean; // light hero behind: teal text instead of white
  hidden: boolean; // folded away once scrolled: out of the tab order
}) {
  const [paused, setPaused] = useState(false);
  const fact = useRotation(facts.length, 5200, paused || hidden);
  const tick = useRotation(ticker.length, 4000, paused || hidden);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className="site-container"
    >
      {/* The divider sits on this inner row, so it spans the same width as the page content */}
      <div
        className={`flex items-center justify-center md:justify-between gap-4 py-1.5 text-[12px] border-b ${
          light ? "text-[#0E5A60] border-[#0E5A60]/10" : "text-white border-white/15"
        }`}
      >
      {/* Left: who we are */}
      <div className="hidden md:flex items-center gap-2 font-medium min-w-0">
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#D96C2C]" aria-hidden />
        <div className="grid overflow-hidden">
          {facts.map((f, i) => (
            <p
              key={f}
              aria-hidden={i !== fact}
              className={`[grid-area:1/1] whitespace-nowrap ${motion} ${slot(i, fact, facts.length)}`}
            >
              {f}
            </p>
          ))}
        </div>
      </div>

      {/* Right: live trip info */}
      {ticker.length > 0 ? (
        <div className="grid justify-items-center md:justify-items-end overflow-hidden min-w-0">
          {ticker.map((t, i) => (
            <Link
              key={t.id}
              href={t.href}
              aria-hidden={i !== tick}
              tabIndex={hidden || i !== tick ? -1 : undefined}
              className={`[grid-area:1/1] group inline-flex items-center gap-2 rounded-full pl-1 pr-2.5 py-0.5 max-w-full ${motion} ${slot(
                i,
                tick,
                ticker.length,
              )} ${
                light ? "bg-[#0E5A60]/[0.08] hover:bg-[#0E5A60]/15" : "bg-white/15 hover:bg-white/25 backdrop-blur-sm"
              }`}
            >
              <span className="rounded-full bg-[#D96C2C] text-white text-[10.5px] font-semibold px-2 py-0.5 shrink-0">
                {t.label}
              </span>
              <span className="font-medium truncate">{t.text}</span>
              <ArrowRight className="w-3.5 h-3.5 shrink-0 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          ))}
        </div>
      ) : (
        <span className="md:hidden">Small-group, solo-friendly trips</span>
      )}
      </div>
    </div>
  );
}
