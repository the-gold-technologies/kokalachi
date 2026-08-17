"use client";

import React from "react";
import {
  Clock,
  ArrowRight,
  Sparkles,
  Sprout,
  Briefcase,
  Coffee,
  Send,
} from "lucide-react";

export function Step9BehindKokalachi() {
  return (
    <section id="behind-kokalachi" className="py-20 lg:py-28 bg-[#FDFBF7] relative overflow-hidden select-none">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative z-10 max-w-7xl">
        
        {/* TOP OUTSIDE HEADER */}
        <div className="text-left space-y-2 mb-12">
          <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-[#0B2A3D] font-montserrat">
            BEHIND KOKALACHI
          </h2>
          <h3 className="text-2xl sm:text-4xl font-normal text-[#0B2A3D] font-serif">
            How We Curate Every Journey
          </h3>
          <p className="text-[#0B2A3D]/75 text-sm sm:text-base lg:text-lg">
            Finding the right people matters as much as choosing the right destination.
          </p>
        </div>

        {/* FROM THE JOURNAL INNER WARM CONTAINER */}
        <div className="bg-[#FFFBF5] p-6 sm:p-12 rounded-[40px] border border-slate-200/80 shadow-sm relative text-center">
          
          {/* Journal Tagline */}
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#D96C2C] font-montserrat">
              FROM THE JOURNAL
            </span>
          </div>
          <div className="text-[#D96C2C] text-xs mb-3">❖</div>

          {/* Journal Main Title */}
          <h3 className="text-3xl sm:text-5xl font-normal text-[#0B2A3D] leading-tight font-serif mb-4">
            Stories that inspire your next journey.
          </h3>

          {/* Journal Subtitle Paragraph */}
          <p className="text-[#0B2A3D]/75 text-xs sm:text-sm lg:text-base max-w-2xl mx-auto mb-12 leading-relaxed">
            Travel isn&apos;t just about destinations. It&apos;s about people, cultures, conversations and the memories we bring home. Explore stories, guides and reflections from the Kokalachi community.
          </p>

          {/* FEATURED STORY (Top Row) */}
          <div className="bg-white p-5 sm:p-6 rounded-[32px] border border-slate-200/80 shadow-sm hover:shadow-md transition-all text-left mb-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
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

              <h4 className="text-2xl sm:text-3xl font-semibold text-[#0B2A3D] font-serif leading-snug">
                Why the Best Journeys Begin with Strangers
              </h4>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Sometimes the people you&apos;ve never met become the people you never forget.
              </p>

              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                <Clock size={14} className="text-[#D96C2C]" />
                <span>8 min read</span>
              </div>

              <div className="pt-2">
                <a
                  href="#read-featured"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0B2A3D] underline underline-offset-4 hover:text-[#0E5A60] transition-colors"
                >
                  <span>Read Story</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>

          </div>

          {/* 3 SMALLER ARTICLES (Bottom Row) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-12">
            
            {/* ARTICLE 1 */}
            <div className="bg-white p-5 rounded-[28px] border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="rounded-2xl overflow-hidden h-44 relative mb-6 bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=85&w=600"
                    alt="Rice terraces green nature"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Floating Icon Badge */}
                  <div className="w-10 h-10 rounded-full bg-white text-[#0E5A60] shadow-md flex items-center justify-center absolute -bottom-4 left-4 border border-slate-100">
                    <Sprout size={20} className="text-[#0E5A60]" />
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <h4 className="text-lg sm:text-xl font-bold text-[#0B2A3D] font-serif">
                    The Art of Slow Travel
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    Less sightseeing. More seeing.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-medium pt-4 border-t border-slate-100 mt-4">
                <Clock size={13} className="text-[#D96C2C]" />
                <span>5 min read</span>
              </div>
            </div>

            {/* ARTICLE 2 */}
            <div className="bg-white p-5 rounded-[28px] border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="rounded-2xl overflow-hidden h-44 relative mb-6 bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=85&w=600"
                    alt="Backpack on dock"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Floating Icon Badge */}
                  <div className="w-10 h-10 rounded-full bg-white text-[#0E5A60] shadow-md flex items-center justify-center absolute -bottom-4 left-4 border border-slate-100">
                    <Briefcase size={18} className="text-[#D96C2C]" />
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <h4 className="text-lg sm:text-xl font-bold text-[#0B2A3D] font-serif">
                    Packing Light, Living More
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    What every traveller should carry... and leave behind.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-medium pt-4 border-t border-slate-100 mt-4">
                <Clock size={13} className="text-[#D96C2C]" />
                <span>4 min read</span>
              </div>
            </div>

            {/* ARTICLE 3 */}
            <div className="bg-white p-5 rounded-[28px] border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <div className="rounded-2xl overflow-hidden h-44 relative mb-6 bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=85&w=600"
                    alt="Cozy cafe board"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Floating Icon Badge */}
                  <div className="w-10 h-10 rounded-full bg-white text-[#0E5A60] shadow-md flex items-center justify-center absolute -bottom-4 left-4 border border-slate-100">
                    <Coffee size={18} className="text-[#0E5A60]" />
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <h4 className="text-lg sm:text-xl font-bold text-[#0B2A3D] font-serif">
                    The Hidden Cafés of Sri Lanka
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    The best conversations rarely happen inside tourist attractions.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-medium pt-4 border-t border-slate-100 mt-4">
                <Clock size={13} className="text-[#D96C2C]" />
                <span>6 min read</span>
              </div>
            </div>

          </div>

          {/* BOTTOM JOURNAL CTA WITH PAPER AIRPLANE */}
          <div className="relative pt-4">
            <svg
              className="w-48 h-8 text-[#D96C2C]/40 mx-auto mb-2"
              viewBox="0 0 200 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 30 Q100 5 190 30"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="4 4"
                fill="none"
              />
            </svg>

            <a
              href="#journal"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#0B2A3D] hover:bg-[#0E5A60] text-white font-bold text-xs sm:text-sm rounded-full shadow-md hover:shadow-lg transition-all"
            >
              <span>Explore the Journal</span>
              <Send size={14} className="text-[#D96C2C] -rotate-45" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
