import React from "react";

// The brand tagline drawn as a little route: each word is a stop, joined by a short dashed trail
// ending in a dot, and the last word handwritten. "Connect.Travel.Belong" → CONNECT ┄• TRAVEL ┄• Belong.
// Words are split at . · • , or |; text with no separators is shown as it is.

interface TaglineRouteProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  wordClassName?: string; // the capital words (colour / size)
  trailClassName?: string; // the dashed trail (colour)
  lastClassName?: string; // the handwritten last word (colour / size)
  animate?: boolean; // draw the trails in on load (the hero); off where it's out of view (footer)
}

export function TaglineRoute({
  text,
  className = "",
  style,
  wordClassName = "text-[11px] sm:text-xs text-white/85",
  trailClassName = "text-[#F6B48A]/80",
  lastClassName = "text-[18px] sm:text-[19px] text-[#F3B748] [text-shadow:0_1px_8px_rgba(0,0,0,0.35)]",
  animate = false,
}: TaglineRouteProps) {
  const stops = text
    .split(/[.·•,|]+/)
    .map((w) => w.trim())
    .filter(Boolean);

  if (stops.length < 2) {
    return (
      <span style={style} className={`block font-montserrat font-semibold uppercase tracking-[0.16em] ${wordClassName} ${className}`}>
        {text}
      </span>
    );
  }

  return (
    <p aria-label={stops.join(", ")} style={style} className={`flex flex-wrap items-center gap-x-1.5 gap-y-1 h-4 font-montserrat ${className}`}>
      {stops.map((word, i) => {
        const last = i === stops.length - 1;
        return (
          <span key={`${word}-${i}`} aria-hidden className="flex items-center gap-1.5">
            {i > 0 && (
              <svg viewBox="0 0 34 8" fill="none" className={`w-5 sm:w-6 h-1.5 overflow-visible ${trailClassName}`}>
                <path
                  d="M1 5 Q 17 0.5 33 4"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeDasharray="2.5 3.5"
                  className={animate ? "tagline-trail" : undefined}
                  style={animate ? { animationDelay: `${0.45 + i * 0.3}s` } : undefined}
                />
                <circle cx="33" cy="4" r="1.6" fill="currentColor" />
              </svg>
            )}
            {last ? (
              <span className={`font-caveat normal-case leading-none -translate-y-px ${lastClassName}`}>
                {word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()}
              </span>
            ) : (
              <span className={`font-semibold uppercase tracking-[0.16em] ${wordClassName}`}>{word}</span>
            )}
          </span>
        );
      })}
    </p>
  );
}
