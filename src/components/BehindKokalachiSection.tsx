"use client";

import React from "react";
import { TitleUnderline } from "@/components/ui/TitleUnderline";
import { FlyingBirds } from "@/components/ui/FlyingBirds";
import {
  Clock,
  ArrowRight,
  Sparkles,
  Sprout,
  Briefcase,
  Coffee,
  Send,
} from "lucide-react";

export function BehindKokalachiSection() {
  return (
    <section
      id="behind-kokalachi"
      className="py-16 sm:py-24 bg-[#FAF5EE] relative overflow-hidden select-none"
    >
      {/* Decorative Flying Birds Outline (Top Right Variation) */}
      <FlyingBirds className="hidden lg:block absolute top-10 right-14 opacity-35 text-[#0B2A3D]" />
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative z-10 max-w-6xl text-center">
        {/* FROM THE JOURNAL INNER CONTAINER */}
        <div className="bg-[#FAF5EE] relative text-center">
          {/* Journal Tagline */}
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-[#C85A24] font-montserrat block mb-3">
            FROM THE JOURNAL
          </span>

          {/* Journal Main Title */}
          <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-normal text-[#0B2A3D] leading-tight font-serif mb-4 max-w-4xl mx-auto">
            Stories that inspire your next{" "}
            <span className="relative inline-block font-script font-normal text-[1.12em] text-[#0B2A3D]">
              journey
              <TitleUnderline />
            </span>
          </h2>

          {/* Journal Subtitle Paragraph */}
          <p className="text-[#1E3327]/80 text-xs sm:text-sm lg:text-base max-w-2xl mx-auto mb-12 leading-relaxed font-sans">
            Travel isn&apos;t just about destinations. It&apos;s about people,
            cultures, conversations and the memories we bring home.
            <br />
            Explore stories, guides and reflections from the Kokalachi
            community.
          </p>

          {/* FEATURED STORY (Top Card Layout) */}
          <div className="bg-[#FFFDF9] p-5 sm:p-6 rounded-[32px] border border-amber-900/10 shadow-sm hover:shadow-md transition-all text-left mb-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Featured Photo (7 cols) */}
            <div className="lg:col-span-7 rounded-2xl overflow-hidden h-64 sm:h-80 shadow-sm relative group bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&fit=crop&q=85&w=800"
                alt="Four friends watching sunset on mountain cliff"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Featured Content (5 cols) */}
            <div className="lg:col-span-5 space-y-4 pr-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D96C2C] font-montserrat block">
                FEATURED STORY
              </span>

              <h3 className="text-2xl sm:text-3xl font-semibold text-[#1E3327] font-serif leading-snug">
                Why the Best Journeys Begin with Strangers
              </h3>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans">
                Sometimes the people you&apos;ve never met become the people you
                never forget.
              </p>

              <div className="flex items-center gap-2 text-xs text-[#D96C2C] font-medium pt-1">
                <Clock size={15} />
                <span>8 min read</span>
              </div>

              <div className="pt-2">
                <a
                  href="#read-featured"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#1E3327] border-b border-[#1E3327] pb-0.5 hover:text-[#D96C2C] hover:border-[#D96C2C] transition-colors"
                >
                  <span>Read Story</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </div>

          {/* 3 ARTICLES GRID (Bottom Row) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-12">
            {/* ARTICLE 1 */}
            <div className="bg-[#FFFDF9] p-5 rounded-[28px] border border-amber-900/10 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="rounded-2xl overflow-hidden h-44 relative mb-6 bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=85&w=600"
                    alt="Rice terraces green nature"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Floating Circle Icon Badge */}
                  <div className="w-10 h-10 rounded-full bg-white text-[#1E3327] shadow-md flex items-center justify-center absolute -bottom-4 left-4 border border-amber-900/10">
                    <Sprout size={20} className="text-[#1E3327]" />
                  </div>
                </div>

                <div className="space-y-1.5 pt-2">
                  <h4 className="text-lg sm:text-xl font-bold text-[#1E3327] font-serif">
                    The Art of Slow Travel
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                    Less sightseeing. More seeing.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-[#D96C2C] font-medium pt-4 border-t border-amber-900/10 mt-4">
                <Clock size={14} />
                <span>5 min read</span>
              </div>
            </div>

            {/* ARTICLE 2 */}
            <div className="bg-[#FFFDF9] p-5 rounded-[28px] border border-amber-900/10 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="rounded-2xl overflow-hidden h-44 relative mb-6 bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=85&w=600"
                    alt="Backpack on dock"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Floating Circle Icon Badge */}
                  <div className="w-10 h-10 rounded-full bg-white text-[#1E3327] shadow-md flex items-center justify-center absolute -bottom-4 left-4 border border-amber-900/10">
                    <Briefcase size={18} className="text-[#1E3327]" />
                  </div>
                </div>

                <div className="space-y-1.5 pt-2">
                  <h4 className="text-lg sm:text-xl font-bold text-[#1E3327] font-serif">
                    Packing Light, Living More
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                    What every traveller should carry... and leave behind.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-[#D96C2C] font-medium pt-4 border-t border-amber-900/10 mt-4">
                <Clock size={14} />
                <span>4 min read</span>
              </div>
            </div>

            {/* ARTICLE 3 */}
            <div className="bg-[#FFFDF9] p-5 rounded-[28px] border border-amber-900/10 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="rounded-2xl overflow-hidden h-44 relative mb-6 bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=85&w=600"
                    alt="Cozy cafe board"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Floating Circle Icon Badge */}
                  <div className="w-10 h-10 rounded-full bg-white text-[#1E3327] shadow-md flex items-center justify-center absolute -bottom-4 left-4 border border-amber-900/10">
                    <Coffee size={18} className="text-[#1E3327]" />
                  </div>
                </div>

                <div className="space-y-1.5 pt-2">
                  <h4 className="text-lg sm:text-xl font-bold text-[#1E3327] font-serif">
                    The Hidden Cafés of Sri Lanka
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                    The best conversations rarely happen inside tourist
                    attractions.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-[#D96C2C] font-medium pt-4 border-t border-amber-900/10 mt-4">
                <Clock size={14} />
                <span>6 min read</span>
              </div>
            </div>
          </div>

          {/* BOTTOM JOURNAL CTA WITH DASHED PATH & PAPER AIRPLANE */}
          <div className="relative flex items-center justify-center pt-2">
            {/* Curved Dashed Flight Path SVG */}
            <div className="relative flex items-center justify-center">
              <svg
                className="w-80 sm:w-[480px] h-12 text-[#D96C2C]/50 absolute pointer-events-none"
                viewBox="0 0 500 50"
                fill="none"
              >
                <path
                  d="M 20 25 C 100 45, 180 5, 250 25 C 320 45, 400 5, 480 25"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeDasharray="4 4"
                  strokeLinecap="round"
                />
              </svg>

              <a
                href="#journal"
                className="relative z-10 inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#0B2A3D] hover:bg-[#061C29] text-white font-medium text-xs sm:text-sm rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer hover:scale-105"
              >
                <span>Explore the Journal</span>
                <ArrowRight size={16} />
              </a>

              {/* Paper Plane Doodle Graphic on Right */}
              <div className="absolute right-2 sm:right-6 -top-2 text-[#D96C2C] transform rotate-12">
                <Send size={22} className="-rotate-45 stroke-[2]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
