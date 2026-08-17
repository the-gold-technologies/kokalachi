"use client";

import React from "react";
import Link from "next/link";

interface BrandLogoProps {
  variant?: "light" | "dark";
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
}

export function BrandLogo({
  variant = "light",
  showTagline = true,
  size = "md",
}: BrandLogoProps) {
  const isDarkText = variant === "dark";
  const textColor = isDarkText ? "text-[#0B2A3D]" : "text-white";
  const taglineColor = isDarkText ? "text-[#0E5A60]" : "text-teal-200";

  const sizeClasses = {
    sm: "text-lg tracking-[0.18em]",
    md: "text-xl sm:text-2xl tracking-[0.22em]",
    lg: "text-3xl sm:text-4xl tracking-[0.25em]",
  };

  const tagSizeClasses = {
    sm: "text-[7px] tracking-[0.14em]",
    md: "text-[9px] tracking-[0.18em]",
    lg: "text-[11px] tracking-[0.22em]",
  };

  return (
    <Link href="/" className="inline-flex flex-col items-center group select-none">
      {/* Text Brand Logo with Custom 'O' and 'A' */}
      <div className={`font-bold font-montserrat flex items-center ${textColor} ${sizeClasses[size]}`}>
        <span>K</span>
        
        {/* Custom 'O' with Mountain Path Icon */}
        <span className="relative inline-flex items-center justify-center mx-0.5 w-[1.1em] h-[1.1em] rounded-full border-2 border-[#0E5A60] bg-[#0B2A3D] overflow-hidden shadow-sm group-hover:scale-105 transition-transform">
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
            {/* Background Sky */}
            <rect width="100" height="100" fill="#F7F3EC" opacity="0.2" />
            {/* Horizon Sun / Pin */}
            <circle cx="50" cy="38" r="8" fill="#D96C2C" />
            <polygon points="50,46 45,38 55,38" fill="#D96C2C" />
            {/* Mountain Layers */}
            <path d="M10,75 L35,45 L60,75 Z" fill="#6F8F84" opacity="0.8" />
            <path d="M40,80 L65,50 L90,80 Z" fill="#0E5A60" />
            {/* Winding Path */}
            <path d="M48,50 C48,60 54,65 46,75 C40,83 50,90 50,100" stroke="#F7F3EC" strokeWidth="6" strokeLinecap="round" fill="none" />
          </svg>
        </span>

        <span>K</span>
        <span>A</span>
        <span>L</span>

        {/* Custom 'A' with Orange Arc Stroke */}
        <span className="relative inline-block tracking-normal mr-0.5">
          A
          <svg
            className="absolute left-1/2 -translate-x-1/2 top-[32%] w-[130%] h-2 text-[#D96C2C]"
            viewBox="0 0 24 8"
            fill="none"
          >
            <path
              d="M2 6C7 2 17 2 22 6"
              stroke="currentColor"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
          </svg>
        </span>

        <span>C</span>
        <span>H</span>
        <span>I</span>
      </div>

      {/* Sub Tagline with Divider Lines */}
      {showTagline && (
        <div className="flex items-center gap-2 mt-1 w-full justify-center">
          <span className={`h-[1px] flex-1 bg-[#D96C2C]/40`} />
          <span className={`font-semibold uppercase ${taglineColor} ${tagSizeClasses[size]}`}>
            TRAVEL. CONNECT. BELONG
          </span>
          <span className={`h-[1px] flex-1 bg-[#D96C2C]/40`} />
        </div>
      )}
    </Link>
  );
}
