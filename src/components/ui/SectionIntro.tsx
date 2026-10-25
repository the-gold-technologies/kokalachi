import React from "react";
import { TitleUnderline } from "@/components/ui/TitleUnderline";

interface SectionIntroProps {
  kicker: string;          // small orange label, e.g. "HOW IT WORKS"
  before: string;          // heading text before the handwritten word
  accent: string;          // the one handwritten (script) word or phrase
  after?: string;          // heading text after it
  subtitle?: React.ReactNode;
  className?: string;
}

// Shared section heading for the homepage: label, serif headline with one script accent, one-line subtitle
export function SectionIntro({ kicker, before, accent, after, subtitle, className = "" }: SectionIntroProps) {
  return (
    <div className={`max-w-3xl mx-auto text-center mb-12 sm:mb-14 ${className}`}>
      <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-[#C85A24] font-montserrat block mb-3">
        {kicker}
      </span>
      <h2 className="heading-section font-normal text-[#0E5A60] font-serif">
        {before}{" "}
        <span className="relative inline-block font-script font-normal text-[1.12em] text-[#0E5A60]">
          {accent}
          <TitleUnderline />
        </span>
        {after && <> {after}</>}
      </h2>
      {subtitle && (
        <p className="mt-5 text-[#0E5A60]/75 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
