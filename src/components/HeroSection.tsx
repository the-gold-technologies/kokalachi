"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] w-full flex items-center justify-start pt-24 pb-16 overflow-hidden bg-[#F7F3EC] select-none"
    >
      {/* Background Image & Soft Left Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&fit=crop&q=85&w=2000"
          alt="Group of friends standing on mountain watching the golden sunset"
          className="w-full h-full object-cover object-right sm:object-center"
        />

        {/* Soft Left Color Shading Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F7F3EC] via-[#F7F3EC]/95 sm:via-[#F7F3EC]/80 to-transparent w-full lg:w-[68%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F7F3EC] via-transparent to-transparent sm:hidden" />
      </div>

      {/* Hero Content Container */}
      <div className="container mx-auto px-6 md:px-12 lg:px-16 z-10 relative">
        <div className="max-w-4xl text-left space-y-6">
          {/* Category Tagline */}
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#0E5A60] block font-montserrat">
            CURATED GROUP JOURNEYS
          </span>

          {/* Main Headline — Guaranteed 2 Lines */}
          <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-normal text-[#0B2A3D] leading-[1.12] tracking-tight font-serif max-w-4xl">
            <span className="inline-block sm:whitespace-nowrap">
              Don&apos;t just discover new places.
            </span>{" "}
            <br />
            <span className="font-semibold text-[#0B2A3D] inline-block sm:whitespace-nowrap pt-1">
              Discover your people.
            </span>
          </h1>

          {/* Subtitle Paragraph */}
          <p className="text-[#0B2A3D]/85 text-sm sm:text-base lg:text-lg font-normal leading-relaxed max-w-[560px]">
            Travel is better when shared. Join curated group journeys designed
            for people who love exploring the world — and making meaningful
            connections along the way.
          </p>

          {/* Action Buttons — Rounded Pill Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
            <a
              href="#upcoming-journeys"
              className="px-8 py-3.5 sm:py-4 bg-[#0B2A3D] hover:bg-[#061C29] text-white font-medium text-sm sm:text-base rounded-full shadow-md hover:shadow-lg transition-all text-center flex items-center justify-center gap-2.5 cursor-pointer hover:scale-105"
            >
              <span>Explore Upcoming Trips</span>
              <ArrowRight size={16} />
            </a>
            <a
              href="#how-it-works"
              className="px-7 py-3.5 sm:py-4 bg-white/80 hover:bg-white text-[#0B2A3D] font-medium text-sm rounded-full border border-[#0B2A3D]/40 transition-all flex items-center justify-center gap-2 group shadow-sm text-center cursor-pointer hover:scale-105"
            >
              <span>How It Works</span>
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
