"use client";

import React from "react";
import { TitleUnderline } from "@/components/ui/TitleUnderline";
import { FlyingBirds } from "@/components/ui/FlyingBirds";
import { Sparkles, Users, Heart, MapPin } from "lucide-react";
import { HandDrawnHeart } from "@/components/ui/HandDrawnHeart";

export function AboutHeroSection() {
  return (
    <section
      id="about-hero"
      className="relative pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 bg-[#FAF5EE] overflow-hidden select-none border-b border-amber-900/10"
    >
      {/* Ambient Soft Glows */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-[#C85A24]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#0E5A60]/10 rounded-full blur-3xl pointer-events-none" />
      <FlyingBirds className="hidden lg:block absolute top-16 right-20 opacity-35 text-[#0B2A3D]" />

      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Headline & Narrative */}
          <div className="lg:col-span-7 space-y-5 text-left">
            {/* Category Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C85A24]/10 border border-[#C85A24]/20 text-[#C85A24]">
              <Sparkles size={14} className="shrink-0" />
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] font-montserrat">
                ABOUT KOKALACHI
              </span>
            </div>

            {/* Main Editorial Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-normal text-[#0B2A3D] leading-[1.18] font-serif">
              We bring together the travellers who were always{" "}
              <span className="relative inline-block font-semibold text-[#0B2A3D]">
                meant to meet.
                <TitleUnderline />
              </span>
            </h1>

            {/* Handwritten Subtitle */}
            <p className="text-[#C85A24] font-script text-lg sm:text-xl lg:text-2xl font-bold pt-0.5">
              Where like-minded travellers find each other — and the world,
              together.
            </p>

            {/* Narrative Hero Paragraphs (Directly on page without card container) */}
            <div className="space-y-4 text-[#0B2A3D]/85 text-base sm:text-lg leading-relaxed font-sans pt-1">
              <p>
                <strong className="text-[#0B2A3D] font-semibold">
                  Kokalachi exists for a simple reason:
                </strong>{" "}
                travelling is one of the best things you can do — but only when
                you&apos;re doing it with the right people.
              </p>
              <p>
                We bring together people who love travelling but don&apos;t
                always have the right people to travel with. Through curated
                group journeys, we help you discover the world alongside
                like-minded travellers — people who become as much a part of
                the trip as the destination itself.
              </p>

              {/* Highlighted Quote Box */}
              <div className="relative bg-white/70 backdrop-blur-xs p-4 sm:p-5 rounded-2xl border-l-4 border-[#C85A24] text-[#C85A24] font-serif font-bold italic text-base sm:text-lg shadow-xs mt-4">
                &quot;Because the places you go matter. But who you go with is
                what you remember.&quot;
              </div>
            </div>

            {/* Micro Feature Badges */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <div className="inline-flex items-center gap-2 bg-white/80 border border-amber-900/10 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium text-[#0B2A3D] shadow-xs">
                <Users size={15} className="text-[#C85A24]" />
                <span>Small-Group Trips</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white/80 border border-amber-900/10 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium text-[#0B2A3D] shadow-xs">
                <Heart size={15} className="text-[#C85A24]" />
                <span>Like-Minded Solos</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white/80 border border-amber-900/10 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium text-[#0B2A3D] shadow-xs">
                <MapPin size={15} className="text-[#0E5A60]" />
                <span>Curated Destinations</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Photo Card Stack */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end pt-4 lg:pt-0">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Main Photo Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white h-[460px] sm:h-[500px] lg:h-[520px] group">
                <img
                  src="/about_hero_main.jpg"
                  alt="Travellers celebrating together on a journey"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A3D]/85 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-xs uppercase tracking-widest text-[#F7D3CB] font-extrabold mb-1 font-montserrat">
                    KOKALACHI TRIBE
                  </span>
                  <p className="text-base sm:text-lg font-serif font-semibold">
                    Connections made for a lifetime.
                  </p>
                </div>
              </div>

              {/* Tilted Floating Polaroid Card */}
              <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-white p-3 pb-4 rounded-2xl shadow-xl border border-amber-900/10 -rotate-6 w-44 sm:w-52 z-20 select-none">
                <div className="w-full h-28 sm:h-32 rounded-xl overflow-hidden mb-1.5">
                  <img
                    src="/about_hero_polaroid.jpg"
                    alt="Friends standing together on a peak"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-script text-xs sm:text-sm text-[#0B2A3D] font-bold text-center">
                  ✨ Travel together, belong anywhere ♡
                </p>
              </div>

              {/* Floating Decorative Heart Accent */}
              <div className="absolute -top-4 -right-3 text-[#C85A24] pointer-events-none select-none z-20">
                <HandDrawnHeart
                  size={40}
                  color="#C85A24"
                  className="rotate-12 drop-shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
