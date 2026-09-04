"use client";

import React from "react";
import Image from "next/image";
import { Users, Compass, Play, ArrowRight } from "lucide-react";
import { TitleUnderline } from "@/components/ui/TitleUnderline";
import { HandDrawnHeart } from "@/components/ui/HandDrawnHeart";

// Custom SVG for mountains since Lucide's mountain might look different
const MountainsIcon = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
  </svg>
);

export function AboutHeroSection() {
  return (
    <section
      id="about-hero"
      className="relative min-h-[100vh] w-full flex items-center justify-start pt-28 pb-24 lg:pt-40 lg:pb-16 bg-cover bg-center bg-no-repeat overflow-hidden select-none"
      style={{ backgroundImage: "url('/aboutherobg.png')" }}
    >
      {/* Soft Left-Side White Gradient Overlay for better text readability */}
      <div className="absolute inset-0 w-full lg:w-[55%] backdrop-blur-[2px] [-webkit-mask-image:linear-gradient(to_right,black_50%,transparent_100%)] [mask-image:linear-gradient(to_right,black_50%,transparent_100%)] bg-gradient-to-r from-white/90 via-white/60 to-transparent pointer-events-none z-0" />

      <div className="container mx-auto px-6 md:px-12 lg:px-30 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Narrative */}
          <div className="lg:col-span-6 space-y-5 text-left">
            <div className="space-y-3">
              {/* Category Tagline Badge */}
              <div className="flex flex-col items-start gap-1">
                <span className="text-[#C85A24] text-xs sm:text-sm font-extrabold uppercase tracking-[0.15em] font-montserrat">
                  ABOUT KOKALACHI
                </span>
              </div>

              {/* Main Editorial Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-medium text-[#0A2640] leading-[1.15] font-serif tracking-tight">
                Built on Friendships.<br />
                Made for{" "}
                <span className="relative inline-block font-script font-medium text-[1.22em] text-[#0A2640]">
                  Meaningful
                  <div className="absolute -bottom-1 left-0 w-full">
                     <TitleUnderline />
                  </div>
                </span>{" "}
                Journeys.
              </h1>

              {/* Handwritten Subtitle */}
              <p className="text-[#1F3E5A] font-script text-xl sm:text-2xl lg:text-3xl pt-1 pb-2">
                Same Roads. New People. Greater Stories.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-5 pt-6 relative">
              <button className="bg-[#0E5A60] hover:bg-[#0B2A3D] text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer shrink-0 font-sans mt-2 md:mt-0">
                Our Story <ArrowRight size={18} />
              </button>
              
              <button className="flex items-center gap-3 text-[#0A2640] font-medium hover:text-[#D35400] transition-colors group">
                <div className="w-10 h-10 rounded-full border border-[#0A2640] group-hover:border-[#D35400] flex items-center justify-center transition-colors">
                  <Play size={18} />
                </div>
                <span className="text-sm">Watch Our Journey</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Photo Card Stack */}
          <div className="lg:col-span-6 relative h-[450px] hidden lg:block w-full scale-95 origin-center">
            
            {/* Dashed line connecting card 1 and card 3 (Two distinct hops) */}
            <svg className="absolute top-[50px] left-[150px] w-[180px] h-[80px] text-[#2c3e50] opacity-60 z-0" viewBox="0 0 180 80" style={{ fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeDasharray: "5 7", strokeLinecap: "round" }}>
              <path d="M 0,50 Q 40,0 90,40 Q 140,0 180,60" />
            </svg>

            <div className="absolute top-12 -left-7 -rotate-[10deg] bg-white p-2.5 pb-4 rounded-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-[210px] z-10 transition-transform duration-500 hover:z-40 hover:scale-105">
              <div className="relative aspect-[5/4] w-full overflow-hidden rounded-sm border border-slate-100">
                <Image src="/hero_friends_mountain_peak.jpg" fill className="object-cover" alt="New Places" />
              </div>
              <p className="font-script text-[1.4rem] leading-none text-center mt-3 text-slate-700 tracking-wide">New Places</p>
            </div>
            
            {/* Right Polaroid (Bigger Stories) */}
            <div className="absolute top-14 left-74 rotate-[10deg] bg-white p-2.5 pb-4 rounded-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-[220px] z-20 transition-transform duration-500 hover:z-40 hover:scale-105">
              <div className="relative aspect-[5/4] w-full overflow-hidden rounded-sm border border-slate-100">
                <Image src="/about_hero_polaroid.jpg" fill className="object-cover" alt="Bigger Stories" />
              </div>
              <p className="font-script text-[1.4rem] leading-none text-center mt-3 text-slate-700 tracking-wide">Bigger Stories</p>
            </div>

            {/* Middle Polaroid (Real Connections) */}
            <div className="absolute top-36 left-28 -rotate-[4deg] bg-white p-3 pb-6 rounded-md shadow-[0_20px_50px_rgb(0,0,0,0.2)] w-[260px] z-30 transition-transform duration-500 hover:scale-105">
              <div className="relative aspect-[5/4] w-full overflow-hidden rounded-sm border border-slate-100">
                <Image src="/hero_group_sunset_bg.jpg" fill className="object-cover" alt="Real Connections" />
              </div>
              <p className="font-script text-[1.7rem] leading-none text-center mt-4 text-slate-700 tracking-wide">Real Connections</p>
            </div>

            {/* Dashed line to heart */}
            <svg className="absolute top-[210px] right-[100px] w-[70px] h-[50px] text-[#2c3e50] opacity-60 z-0" viewBox="0 0 70 90" style={{ fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeDasharray: "5 7", strokeLinecap: "round" }}>
              <path d="M 0,0 Q 40,20 20,90" />
            </svg>

            {/* Doodles & Text on the right */}
            <div className="absolute top-1 right-[-50px] -rotate-3 flex flex-col items-center z-40">
              <p className="font-script text-[1.6rem] text-slate-700 leading-[1.15] text-center">More<br/>Than Just<br/>Destinations</p>
              <div className="mt-3 text-[#1F3E5A] relative">
                <HandDrawnHeart size={34} color="currentColor" className="opacity-90" />
                {/* SVG accents around the heart matching the image (3 strokes on right) */}
                <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 pointer-events-none text-[#1F3E5A]" viewBox="0 0 64 64" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round">
                   <path d="M 46,24 L 52,20 M 48,32 L 56,32 M 46,40 L 52,44" />
                </svg>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

