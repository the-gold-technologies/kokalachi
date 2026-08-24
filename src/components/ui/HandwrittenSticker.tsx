"use client";

import React from "react";

interface HandwrittenStickerProps {
  type?: "connection" | "pack-bags";
  className?: string;
}

export function HandwrittenSticker({
  type = "connection",
  className = "",
}: HandwrittenStickerProps) {
  if (type === "connection") {
    return (
      <div
        className={`flex flex-col items-center justify-center select-none ${className}`}
      >
        {/* Handwritten Teal Quote with leaf & sparkles */}
        <span className="font-script text-xl sm:text-2xl text-[#4A7C7A] font-normal rotate-[-3deg] flex items-center gap-1.5 tracking-wide">
          &ldquo;Memories &gt; Monuments&rdquo;{" "}
          <span className="text-base">🌿</span>{" "}
          <span className="text-amber-400">✨</span>
        </span>

        {/* Soft Pill Badge with Red Pin */}
        <div className="mt-1.5 bg-white/90 border border-amber-900/10 shadow-sm rounded-full px-3.5 py-1 text-xs italic font-serif text-[#0B2A3D]/80 -rotate-1 inline-flex items-center gap-1.5 backdrop-blur-sm">
          <span className="text-sm">📍</span>
          <span>Built for Connection</span>
        </div>

        {/* Hand-drawn Dashed Curved Arrow SVG pointing down */}
        <svg
          className="w-14 h-8 text-[#4A7C7A] mt-1 -rotate-6 opacity-80"
          viewBox="0 0 80 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 15 5 Q 35 35 65 25"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="4 3"
            strokeLinecap="round"
          />
          <path
            d="M 57 20 L 67 26 L 63 34"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>
    );
  }

  // Type: pack-bags
  return (
    <div
      className={`flex flex-col items-center justify-center select-none ${className}`}
    >
      {/* High-Contrast Handwritten Text with plane & heart */}
      <p className="font-script text-2xl sm:text-3xl text-[#0B2A3D] font-bold rotate-[-2deg] text-center leading-snug tracking-wide max-w-sm drop-shadow-[0_1px_3px_rgba(255,255,255,0.9)]">
        Pack your bags &amp; leave the details to us! ✈️{" "}
        <span className="text-[#EF4444]">♡</span>
      </p>

      {/* Hand-drawn Dashed Curved Arrow SVG pointing down */}
      <svg
        className="w-16 h-8 text-[#0B2A3D] mt-1 opacity-90 drop-shadow-[0_1px_3px_rgba(255,255,255,0.9)]"
        viewBox="0 0 80 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 10 5 Q 40 30 70 20"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeDasharray="4 3"
          strokeLinecap="round"
        />
        <path
          d="M 61 15 L 71 21 L 67 29"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  );
}
