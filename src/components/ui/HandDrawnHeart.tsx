"use client";

import React from "react";

interface HandDrawnHeartProps {
  className?: string;
  size?: number;
  color?: string;
}

export function HandDrawnHeart({
  className = "",
  size = 36,
  color = "#C85A24",
}: HandDrawnHeartProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block select-none pointer-events-none ${className}`}
    >
      {/* Hand-drawn heart outline with crossed bottom tip */}
      <path
        d="M 22 41 C 17 33 6 23 8 14 C 10 6 19 6 23 12 C 27 6 36 6 38 14 C 40 22 30 31 24 39 L 21 44 L 19 41"
        stroke={color}
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 3 Sparkling Rays / Bursts radiating top-right */}
      <line
        x1="37"
        y1="10"
        x2="43"
        y2="4"
        stroke={color}
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <line
        x1="43"
        y1="16"
        x2="50"
        y2="13"
        stroke={color}
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <line
        x1="44"
        y1="24"
        x2="50"
        y2="26"
        stroke={color}
        strokeWidth="2.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
