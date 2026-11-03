import React from "react";
import { TitleUnderline } from "@/components/ui/TitleUnderline";
import type { AboutHeroContent } from "@/types/cms";
import type { HeadingTag } from "@/lib/content";

// Same banner as the other pages (Journeys, Community, FAQs, Contact): a darkened photo, an orange
// tag, a white serif headline with a handwritten accent, and a short line below. Text from
// CMS → About → Hero (the CTA buttons and polaroid fields there aren't shown in this layout).
export function AboutHeroSection({
  content,
  headingTag: Heading = "h1",
}: {
  content: AboutHeroContent;
  headingTag?: HeadingTag;
}) {
  return (
    <section id="about-hero" className="relative h-[60vh] min-h-[420px] w-full">
      <img
        src={content.backgroundImage}
        alt="Friends sharing a sunrise over the mountains"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A3D] via-[#0B2A3D]/30 to-black/30" />

      <div className="absolute inset-0 flex items-end pb-10 sm:pb-12">
        <div className="site-container">
          <div className="max-w-6xl animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="bg-[#D96C2C] text-white text-xs font-medium px-4 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                {content.tagline}
              </span>
            </div>
            <Heading className="heading-hero font-semibold font-serif text-white mb-5 max-w-4xl">
              {/* A new line after each sentence: "Built on Friendships." / "Made for Meaningful Journeys." */}
              <span className="whitespace-pre-line">{content.headline.trim().replace(/\.\s+/g, ".\n")}</span>{" "}
              <span className="relative inline-block font-script font-normal text-[1.12em] text-white mr-1">
                {content.scriptAccent}
                <TitleUnderline />
              </span>
              {content.headlineSuffix && <>{" "}{content.headlineSuffix}</>}
            </Heading>
            {content.handwrittenSubtitle && (
              <p className="text-white/85 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl">
                {content.handwrittenSubtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
