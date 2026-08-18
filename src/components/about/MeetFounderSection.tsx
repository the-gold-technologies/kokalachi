"use client";

import React from "react";

export function MeetFounderSection() {
  return (
    <section
      id="meet-the-founder"
      className="py-14 sm:py-16 lg:py-20 bg-white relative overflow-hidden select-none"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-[#C85A24] font-montserrat block">
            MEET THE FOUNDER
          </span>

          <h2 className="text-3xl sm:text-5xl font-normal text-[#0B2A3D] leading-tight font-serif">
            The People Behind Every Journey
          </h2>

          <p className="text-[#0B2A3D]/70 text-base font-sans italic">
            Built by passionate travellers who live for meaningful human
            connection.
          </p>
        </div>

        {/* Founder Card Showcase */}
        <div className="max-w-5xl mx-auto bg-[#FAF5EE] rounded-3xl border border-amber-900/10 p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Founder Image */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-2xl overflow-hidden shadow-xl border-4 border-white transform -rotate-2">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=85&w=600"
                alt="Kokalachi Founder"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                <span className="text-white text-sm font-bold font-serif">
                  Founder &amp; Chief Curator
                </span>
              </div>
            </div>

            <div className="hidden sm:block absolute -bottom-4 -left-2 bg-white px-4 py-2 rounded-xl shadow-md border border-amber-900/10 text-xs font-bold text-[#C85A24] font-script rotate-6">
              ✨ Driven by passion &amp; purpose
            </div>
          </div>

          {/* Founder Narrative */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#0B2A3D]">
              Curating memories, one group at a time.
            </h3>
            <p className="text-[#0B2A3D]/85 text-base leading-relaxed font-sans">
              &quot;I created Kokalachi after watching so many amazing people
              put off their travel dreams simply because they didn&apos;t have
              a group to go with. We started with a small circle of solo
              wanderers and grew into a tight-knit community of explorers.&quot;
            </p>
            <p className="text-[#0B2A3D]/85 text-base leading-relaxed font-sans">
              Our team personally vets every itinerary, hosts pre-trip icebreakers,
              and handpicks captains who make sure every single traveller feels
              safe, valued, and genuinely included.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0B2A3D] text-white flex items-center justify-center font-bold text-sm">
                K
              </div>
              <div>
                <h4 className="font-bold text-[#0B2A3D] text-sm">
                  Kokalachi Curation Team
                </h4>
                <span className="text-xs text-slate-500">
                  Delhi &amp; Worldwide Operations
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
