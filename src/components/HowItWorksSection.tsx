"use client";

import React from "react";
import { Compass, Users, Camera, Check } from "lucide-react";
import { TitleUnderline } from "@/components/ui/TitleUnderline";
import { FlyingBirds } from "@/components/ui/FlyingBirds";

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="py-12 sm:py-14 lg:py-16 bg-[#FFFFFF] relative overflow-hidden select-none"
    >
      {/* Decorative Flying Birds Outline (Top Left Variation) */}
      <FlyingBirds className="hidden lg:block absolute top-12 left-14 opacity-30 text-[#0E5A60]" />

      {/* Ambient Brand Color Glows */}
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-[#D96C2C]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#0E5A60]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10 max-w-6xl text-center">
        {/* Section Header */}
        <div className="space-y-3 mb-10 max-w-2xl mx-auto">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-[#C85A24] font-montserrat block mb-3">
            HOW IT WORKS
          </span>

          <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-normal text-[#0E5A60] leading-tight font-serif">
            Three steps to your next <br />
            <span className="relative inline-block font-script font-normal text-[1.12em] text-[#0E5A60]">
              unforgettable
              <TitleUnderline />
            </span>{" "}
            journey.
          </h2>

          <p className="text-[#0E5A60]/75 text-sm sm:text-base lg:text-lg font-normal leading-relaxed max-w-xl mx-auto">
            Joining Kokalachi is simple. We take care of the planning, so you
            can focus on the experience.
          </p>
        </div>

        {/* 3 Steps Circle Layout Grid with Handwritten SVG Connecting Path */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-14 text-center items-start">
          {/* Handwritten Curved SVG Flight Path Connecting Circles (Desktop Only) */}
          <svg
            className="hidden md:block absolute top-[125px] left-0 w-full h-[140px] pointer-events-none z-0 overflow-visible"
            viewBox="0 0 1000 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Loop-de-Loop Accent Arc between Step 1 & Step 2 */}
            <path
              d="M 240 30 C 290 -15, 340 -15, 320 25 C 295 65, 370 60, 420 30"
              stroke="#D96C2C"
              strokeWidth="2.5"
              strokeDasharray="6 5"
              strokeLinecap="round"
              opacity="0.8"
            />

            {/* Loop-de-Loop Accent Arc between Step 2 & Step 3 */}
            <path
              d="M 580 30 C 630 -15, 680 -15, 660 25 C 635 65, 710 60, 760 30"
              stroke="#D96C2C"
              strokeWidth="2.5"
              strokeDasharray="6 5"
              strokeLinecap="round"
              opacity="0.8"
            />

            {/* Handwritten Arrowhead near Step 3 */}
            <path
              d="M 748 22 L 762 31 L 748 39"
              stroke="#D96C2C"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.85"
            />

            {/* Handwritten Heart doodle resting on the curve between Step 2 & 3 */}
            <g transform="translate(650, 5) rotate(12)">
              <path
                d="M 12 4 C 12 1, 8 -2, 4 3 C 0 -2, -4 1, -4 4 C -4 10, 4 16, 4 16 C 4 16, 12 10, 12 4 Z"
                fill="#D96C2C"
                opacity="0.9"
              />
            </g>

            {/* Micro Sparkle Stars around Heart */}
            <path
              d="M 680 -5 L 682 0 L 687 2 L 682 4 L 680 9 L 678 4 L 673 2 L 678 0 Z"
              fill="#D96C2C"
              opacity="0.7"
            />

            {/* Styled Airplane Flying along the first loop */}
            <g transform="translate(355, 12) rotate(22)">
              <path
                d="M 0 0 L 16 7 L 5 9 L 3 16 L 0 11 L -7 13 Z"
                fill="#D96C2C"
                opacity="0.95"
              />
            </g>
          </svg>

          {/* STEP 01 */}
          <div className="flex flex-col items-center relative z-10 group">
            {/* BOTTOM LEFT HANDWRITTEN TRAVEL DOODLE (Attached to Step 01) */}
            <div className="hidden lg:flex flex-col items-center absolute bottom-[30%] -left-20 xl:-left-36 transform -rotate-12 pointer-events-none z-30 opacity-70 hover:opacity-100 transition-opacity">
              <span className="text-lg xl:text-xl text-[#D96C2C] font-bold leading-tight max-w-[160px] text-center font-script">
                Choose your vibe &amp; destination! 🌴✨
              </span>
              <svg
                className="w-12 h-8 text-[#D96C2C]/90 mt-1 transform rotate-45"
                viewBox="0 0 60 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 10 35 Q 35 30 45 10 M 36 16 L 45 10 L 48 20"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="3 3"
                />
              </svg>
            </div>

            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-white shadow-xl bg-slate-100 transition-transform duration-300 group-hover:scale-[1.02]">
              {/* Top-Left Number Pill */}
              <div className="absolute top-4 left-4 w-11 h-11 rounded-full bg-[#D96C2C] text-white font-extrabold text-base flex items-center justify-center border-2 border-white shadow-md z-20">
                01
              </div>

              {/* Circle Photo — Woman browsing phone UI */}
              <img
                src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=85&w=800"
                alt="Woman holding phone browsing upcoming journeys"
                className="w-full h-full object-cover object-center"
              />

              {/* Phone App UI Overlay Representation */}
              <div className="absolute inset-0 bg-black/10 flex items-center justify-center p-6">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-2xl border border-white/40 w-44 text-left space-y-2 transform -rotate-3 scale-95">
                  <div className="text-[10px] font-extrabold text-[#0E5A60] uppercase tracking-wider">
                    Upcoming Journeys
                  </div>
                  <div className="space-y-1.5">
                    <div className="bg-[#F7F3EC] p-1.5 rounded-lg flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md bg-[#0E5A60] text-white text-[9px] font-bold flex items-center justify-center">
                        BALI
                      </div>
                      <div className="text-[9px] font-bold text-[#0E5A60]">
                        Island Escape
                      </div>
                    </div>
                    <div className="bg-[#F7F3EC] p-1.5 rounded-lg flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md bg-[#D96C2C] text-white text-[9px] font-bold flex items-center justify-center">
                        JAPAN
                      </div>
                      <div className="text-[9px] font-bold text-[#0E5A60]">
                        Autumn Trail
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Overlapping Icon Badge */}
            <div className="w-14 h-14 rounded-full bg-[#F7F3EC] text-[#0E5A60] flex items-center justify-center border-2 border-white shadow-md z-20 -mt-7 mb-5 group-hover:bg-[#0E5A60] group-hover:text-white transition-colors">
              <Compass size={24} />
            </div>

            {/* Title & Description */}
            <h3 className="text-xl sm:text-2xl font-bold text-[#0E5A60] mb-2 font-serif">
              Discover a Journey
            </h3>
            <p className="text-[#0E5A60]/75 text-sm leading-relaxed max-w-xs mx-auto font-normal">
              Browse upcoming journeys and choose the one that excites you the
              most.
            </p>
          </div>

          {/* STEP 02 */}
          <div className="flex flex-col items-center relative z-10 group">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-white shadow-xl bg-slate-900 transition-transform duration-300 group-hover:scale-[1.02]">
              {/* Top-Left Number Pill */}
              <div className="absolute top-4 left-4 w-11 h-11 rounded-full bg-[#D96C2C] text-white font-extrabold text-base flex items-center justify-center border-2 border-white shadow-md z-20">
                02
              </div>

              {/* Background Image — Hands holding phone */}
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=85&w=800"
                alt="Person checking group chat"
                className="w-full h-full object-cover object-center opacity-40"
              />

              {/* Realistic WhatsApp Style Pre-Trip Chat UI Mockup */}
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="bg-[#0B141A] text-white rounded-2xl p-3 shadow-2xl border border-white/20 w-52 text-left space-y-2 font-sans">
                  {/* Chat Header */}
                  <div className="flex items-center gap-2 border-b border-white/10 pb-1.5">
                    <div className="w-6 h-6 rounded-full bg-teal-600 text-[10px] font-bold flex items-center justify-center text-white">
                      🌴
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-100">
                        Sri Lanka Escape 🌴
                      </div>
                      <div className="text-[8px] text-emerald-400 font-medium">
                        12 members active
                      </div>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="space-y-1.5 text-[9px] leading-tight">
                    <div className="bg-[#202C33] p-1.5 rounded-lg rounded-tl-none max-w-[85%]">
                      <div className="text-[#D96C2C] font-bold text-[8px]">
                        Ananya
                      </div>
                      <div className="text-slate-200">
                        Hi everyone! Can&apos;t wait for this trip! 🖐️
                      </div>
                    </div>
                    <div className="bg-[#202C33] p-1.5 rounded-lg rounded-tl-none max-w-[85%]">
                      <div className="text-teal-400 font-bold text-[8px]">
                        Rohit
                      </div>
                      <div className="text-slate-200">
                        Hey! I love photography too! 📷
                      </div>
                    </div>
                    <div className="bg-[#005C4B] p-1.5 rounded-lg rounded-tr-none ml-auto max-w-[85%] text-right">
                      <div className="text-emerald-100">
                        This group already feels amazing! 🔥
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Overlapping Icon Badge */}
            <div className="w-14 h-14 rounded-full bg-[#F7F3EC] text-[#0E5A60] flex items-center justify-center border-2 border-white shadow-md z-20 -mt-7 mb-5 group-hover:bg-[#0E5A60] group-hover:text-white transition-colors">
              <Users size={24} />
            </div>

            {/* Title & Description */}
            <h3 className="text-xl sm:text-2xl font-bold text-[#0E5A60] mb-2 font-serif">
              Meet Your Circle
            </h3>
            <p className="text-[#0E5A60]/75 text-sm leading-relaxed max-w-xs mx-auto font-normal">
              Join a thoughtfully curated group of travellers who are just as
              excited about the journey as you are.
            </p>
          </div>

          {/* STEP 03 */}
          <div className="flex flex-col items-center relative z-10 group">
            {/* UPPER RIGHT HANDWRITTEN TRAVEL DOODLE (Attached to Step 03) */}
            <div className="hidden lg:flex flex-col items-center absolute -top-12 -right-20 xl:-right-28 transform rotate-12 pointer-events-none z-30 opacity-70 hover:opacity-100 transition-opacity">
              <span className="text-lg xl:text-xl text-[#0E5A60] font-bold leading-tight max-w-[170px] text-center font-script">
                &ldquo;Strangers into lifelong friends&rdquo; 📸♡
              </span>
              <svg
                className="w-12 h-8 text-[#0E5A60]/90 mt-1 transform -rotate-12"
                viewBox="0 0 60 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 50 5 Q 25 10 15 30 M 12 20 L 15 30 L 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="3 3"
                />
              </svg>
            </div>

            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-white shadow-xl bg-slate-100 transition-transform duration-300 group-hover:scale-[1.02]">
              {/* Top-Left Number Pill */}
              <div className="absolute top-4 left-4 w-11 h-11 rounded-full bg-[#D96C2C] text-white font-extrabold text-base flex items-center justify-center border-2 border-white shadow-md z-20">
                03
              </div>

              {/* Circle Photo — Friends laughing on beach sunset */}
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=85&w=800"
                alt="Friends laughing and enjoying sunset together"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Bottom Overlapping Icon Badge */}
            <div className="w-14 h-14 rounded-full bg-[#F7F3EC] text-[#0E5A60] flex items-center justify-center border-2 border-white shadow-md z-20 -mt-7 mb-5 group-hover:bg-[#0E5A60] group-hover:text-white transition-colors">
              <Camera size={24} />
            </div>

            {/* Title & Description */}
            <h3 className="text-xl sm:text-2xl font-bold text-[#0E5A60] mb-2 font-serif">
              Travel Together
            </h3>
            <p className="text-[#0E5A60]/75 text-sm leading-relaxed max-w-xs mx-auto font-normal">
              Explore incredible destinations, share unforgettable moments, and
              return home with memories and friendships that last.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
