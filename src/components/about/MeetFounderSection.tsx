"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

export function MeetFounderSection() {
  return (
    <section
      id="meet-the-founder"
      className="py-16 bg-white relative overflow-hidden select-none"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Founder Photo Card with Abstract Geometric Accent Shapes */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Background Abstract Geometric Accent Blobs in Kokalachi Theme Colors */}
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-[#C85A24]/20 pointer-events-none" />
            <div className="absolute top-10 -left-10 w-16 h-16 rounded-full bg-[#0E5A60]/15 pointer-events-none" />
            <div className="absolute -bottom-6 -left-4 w-28 h-28 rounded-full bg-[#E3D4BF]/60 pointer-events-none" />

            {/* Founder Image Container */}
            <div className="relative w-full max-w-sm sm:max-w-md h-[440px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl bg-slate-100 z-10 border border-amber-900/10 group">
              <img
                src="/about_meet_founder.jpg"
                alt="Kokalachi Founders"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />

              {/* Bottom Floating Glass Badge Overlay */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/60 shadow-lg flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#C85A24] font-montserrat block">
                    CO-FOUNDERS
                  </span>
                  <h4 className="text-base font-bold text-[#0E5A60] font-serif">
                    Rachit &amp; Hitesh
                  </h4>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#C85A24] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 space-y-5 text-left">
            {/* Category Tag */}
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#D35400] font-montserrat block">
              MEET THE FOUNDERS
            </span>

            {/* Bold Headline matching website typography */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0E5A60] leading-tight font-serif">
              Some ideas take decades to find their moment.
            </h2>

            <div className="space-y-3 text-[#0E5A60]/85 text-base sm:text-md font-sans leading-relaxed">
              <p className="text-xl font-medium">
                Kokalachi is one of them.
              </p>
              <p>
                We&apos;ve been friends for over 35 years through countless conversations, road trips, family holidays, and adventures along the way. And somewhere in all of it, we noticed the same thing, again and again: the destination was rarely what stayed with us. It was always the people we shared it with.
              </p>
              <p>
                Hitesh has spent 28 years in the travel industry, designing holidays and helping thousands of travellers explore the world. Rachit has spent his own years chasing curiosity hiking mountains, riding scenic highways, chasing adventure sports, and finding the hidden stays most travellers never discover.
              </p>
              <p>
                Between the two of us, one thing became clear travel isn&apos;t just about seeing new places. It&apos;s about finding the people who make those places unforgettable.
              </p>
              <p>
                That&apos;s why we built Kokalachi. Not as another travel company but as a community where meaningful journeys begin with meaningful people.
              </p>
              <p className="font-medium text-[#C85A24]">
                We hope you&apos;ll join us on one.
              </p>
            </div>

            {/* Handwritten Footer Line */}
            <div className="">
              <p className="font-script text-xl sm:text-2xl lg:text-[26px] text-[#0E5A60] font-bold flex flex-wrap items-center gap-2 whitespace-nowrap">
                <span>Rachit Ahuja &amp; Hitesh Kalra</span>
                <span className="text-[#C85A24] font-normal mx-1">—</span>
                <span className="text-[#C85A24]">
                  Co-Founders, Kokalachi ♡
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
