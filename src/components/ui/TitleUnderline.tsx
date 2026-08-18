"use client";

import React from "react";

interface TitleUnderlineProps {
  className?: string;
}

export function TitleUnderline({ className = "" }: TitleUnderlineProps) {
  return (
    <svg
      className="absolute -bottom-2 left-0 w-full h-3 text-[#C85A24]"
      viewBox="0 0 100 20"
      fill="none"
      preserveAspectRatio="none"
    >
      <path
        d="M5 15 Q 50 5 95 15"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}
