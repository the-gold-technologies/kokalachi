"use client";

import React from "react";
import { Sparkles, Star } from "lucide-react";
import { HandDrawnHeart } from "@/components/ui/HandDrawnHeart";

export function WhyWeStartedSection() {
  return (
    <section
      id="why-we-started"
      className="py-14 sm:py-16 lg:py-20 bg-white relative overflow-hidden select-none"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Visual Card / Quote (Increased height & 20px extra width) */}
          <div className="lg:col-span-5 relative flex flex-col">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-amber-900/10 group h-[480px] sm:h-[540px] lg:h-[560px] lg:w-[105%]">
              <img
                src="/why_we_started_vision.jpg"
                alt="Group of diverse friends laughing and sharing travel stories on a mountain ridge at sunset"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A3D]/90 via-black/20 to-transparent flex flex-col justify-end p-7 sm:p-8 text-white">
                <span className="text-xs uppercase tracking-widest text-[#F7D3CB] font-extrabold mb-2 font-montserrat">
                  THE SPARK &amp; VISION
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-semibold leading-snug">
                  No more waiting for the stars to align.
                </h3>
              </div>
            </div>

            {/* Floating Handwritten Callout */}
            <div className="hidden sm:flex items-center gap-2 absolute -bottom-4 -right-2 lg:-right-2 bg-[#FAF5EE] border border-amber-900/10 p-3.5 sm:p-4 rounded-2xl shadow-lg rotate-3 z-20">
              <Sparkles size={20} className="text-[#C85A24] shrink-0" />
              <span className="text-xs sm:text-sm font-bold text-[#0B2A3D] font-script">
                ✨ Turn &quot;someday&quot; into NOW!
              </span>
            </div>
          </div>

          {/* Right Column: Narrative Copy */}
          <div className="lg:col-span-7 text-left flex flex-col justify-between lg:pl-4">
            <div>
              {/* OUR ETHOS Navigation Link Tab Bar */}
              <div className="bg-[#FAF5EE] p-5 sm:p-6 rounded-2xl border border-amber-900/10 shadow-xs mb-6">
                <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#C85A24] font-montserrat block mb-3.5">
                  OUR ETHOS
                </span>
                <nav className="flex flex-wrap gap-x-6 gap-y-2.5 font-sans">
                  <a
                    href="#why-we-started"
                    className="flex items-center gap-2 text-[#C85A24] font-bold text-base sm:text-lg hover:translate-x-0.5 transition-all"
                  >
                    <span className="text-[#C85A24]">→</span> Why We Exist
                  </a>
                  <a
                    href="#what-we-believe"
                    className="text-[#0B2A3D]/80 font-medium text-base sm:text-lg hover:text-[#C85A24] hover:translate-x-0.5 transition-all"
                  >
                    The Difference
                  </a>
                  <a
                    href="#meet-the-founder"
                    className="text-[#0B2A3D]/80 font-medium text-base sm:text-lg hover:text-[#C85A24] hover:translate-x-0.5 transition-all"
                  >
                    Trust &amp; Safety
                  </a>
                  <a
                    href="#join-the-tribe"
                    className="text-[#0B2A3D]/80 font-medium text-base sm:text-lg hover:text-[#C85A24] hover:translate-x-0.5 transition-all"
                  >
                    Traveler Stories
                  </a>
                  <a
                    href="/#faq"
                    className="text-[#0B2A3D]/80 font-medium text-base sm:text-lg hover:text-[#C85A24] hover:translate-x-0.5 transition-all"
                  >
                    FAQs &amp; Help
                  </a>
                </nav>
              </div>

              {/* Reduced gap between Tagline and Main Title */}
              <div className="space-y-2 mb-6">
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-[#C85A24] font-montserrat block">
                  WHY WE STARTED (VISION)
                </span>

                <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-normal text-[#0B2A3D] leading-tight font-serif">
                  The problem we couldn&apos;t ignore.
                </h2>
              </div>

              {/* Matched Paragraph Font Size Across Page */}
              <div className="space-y-4 text-[#0B2A3D]/85 text-base sm:text-lg leading-relaxed font-sans pt-1">
                <p>
                  Most of us have a list of places we&apos;ve always wanted to
                  see. And most of us have watched that list sit untouched — not
                  because the desire faded, but because the plan fell apart.
                </p>
                <p>
                  Leaves don&apos;t get approved. Schedules don&apos;t align.
                  Friend groups drift, life gets busy, and somewhere along the
                  way, &quot;let&apos;s go next year&quot; quietly becomes
                  never.
                </p>
                <p>
                  We noticed the same pattern everywhere: people weren&apos;t
                  short on wanderlust. They were short on the right companions
                  to act on it.
                </p>
              </div>
            </div>

            {/* Increased gap above Handwritten Solution Box */}
            <div className="relative bg-[#FAF5EE] p-5 sm:p-6 rounded-2xl border border-amber-900/10 shadow-xs mt-8 sm:mt-9 group">
              {/* Handwritten Sparkle Stars & Heart Accents */}
              <div className="absolute -top-3 -left-2 text-[#C85A24] flex items-center gap-1 font-script text-xs pointer-events-none select-none">
                <span>✨</span>
                <Star size={14} className="text-[#C85A24] fill-[#C85A24]/30" />
              </div>

              <div className="absolute -bottom-3 -right-2 text-[#C85A24] pointer-events-none select-none">
                <HandDrawnHeart
                  size={26}
                  color="#C85A24"
                  className="rotate-12"
                />
              </div>

              <p className="font-script text-base sm:text-lg lg:text-xl font-bold text-[#0B2A3D] leading-relaxed tracking-normal">
                &quot;So we built{" "}
                <span className="text-[#C85A24] font-extrabold underline decoration-[#C85A24]/40 decoration-wavy decoration-2 underline-offset-4">
                  Kokalachi
                </span>{" "}
                — a way to put together people who share the same pull toward
                the world, so a trip doesn&apos;t need to wait for the stars to
                align. It just needs you to say yes. ♡&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
