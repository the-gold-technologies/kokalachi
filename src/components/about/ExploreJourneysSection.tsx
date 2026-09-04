"use client";

import React from "react";
import { tripCards } from "@/data/trips";
import { TripCardItem } from "@/components/TripCardItem";
import { TitleUnderline } from "@/components/ui/TitleUnderline";

export function ExploreJourneysSection() {
  const featuredTrips = tripCards.slice(0, 3);

  return (
    <section className="py-16 bg-white relative">
      <div className="container mx-auto px-4 md:px-0 max-w-7xl">
        <div className="mb-10 lg:mb-14 text-left">
          <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#D35400] font-montserrat block mb-3">
            UPCOMING TRIPS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px]  font-serif font-semibold text-[#0E5A60]">
            Explore Our {" "}
            <span className="relative inline-block font-script font-normal text-[1.3em] text-[#0E5A60]">
              Journeys.
              <div className="absolute bottom-1 left-0 w-full">
                 <TitleUnderline />
              </div>
            </span>
          </h2>
          <p className="text-slate-600 mt-3 text-lg font-sans max-w-2xl ">
            Find your next adventure with these handcrafted experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredTrips.map((card) => (
            <div key={card.id} className="h-full">
              <TripCardItem card={card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
