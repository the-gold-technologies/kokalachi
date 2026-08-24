"use client";

import React, { useState } from "react";
import { TitleUnderline } from "@/components/ui/TitleUnderline";
import { FlyingBirds } from "@/components/ui/FlyingBirds";
import {
  Calendar,
  Users,
  Clock,
  ArrowRight,
  MapPin,
  Star,
  User,
  Heart,
  Globe,
  Coffee,
  Waves,
  Train,
} from "lucide-react";
import { TourModal, TourPackage } from "./TourModal";

interface TripCardData {
  id: number;
  destination: string;
  locationTag: string;
  duration: string;
  groupSize: string;
  dates: string;
  price: string;
  vibeTags: string[];
  categories: string[];
  image: string;
  tourPackage: TourPackage;
}

const tripCards: TripCardData[] = [
  {
    id: 1,
    destination: "Coastal Vietnam",
    locationTag: "Hanoi & Ha Long Bay",
    duration: "7 Days / 6 Nights",
    groupSize: "10–12 Travellers",
    dates: "14–20 Nov 2026",
    price: "₹48,500",
    vibeTags: ["Slow Travel", "Adventure", "Foodie"],
    categories: ["Trending", "FirstTimers", "SlowTravel"],
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=85&w=800",
    tourPackage: {
      id: 1,
      title: "Coastal Vietnam Circle",
      location: "Vietnam",
      duration: "7 Days / 6 Nights",
      rating: 5,
      price: 48500,
      originalPrice: 55000,
      image:
        "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=85&w=800",
      category: "Foodie",
      tag: "10–12 Travellers",
      tagColor: "bg-[#EE5A2B]",
      spotsLeft: 4,
      nextDeparture: "14–20 Nov 2026",
      hook: "Explore Hanoi's glowing night markets, taste secret family Pho recipes, and cruise Ha Long Bay with food lovers.",
    },
  },
  {
    id: 2,
    destination: "Tropical Sri Lanka",
    locationTag: "Mirissa & Ella Valleys",
    duration: "6 Days / 5 Nights",
    groupSize: "8–10 Travellers",
    dates: "02–07 Dec 2026",
    price: "₹42,000",
    vibeTags: ["Beach Escape", "Surfing", "Culture"],
    categories: ["Trending", "BeachEscape", "SlowTravel"],
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=85&w=800",
    tourPackage: {
      id: 2,
      title: "Tropical Sri Lanka Circle",
      location: "Sri Lanka",
      duration: "6 Days / 5 Nights",
      rating: 5,
      price: 42000,
      originalPrice: 49000,
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=85&w=800",
      category: "Coastal",
      tag: "8–10 Travellers",
      tagColor: "bg-[#388E3C]",
      spotsLeft: 5,
      nextDeparture: "02–07 Dec 2026",
      hook: "Slow down on tropical beaches, surf sunset waves, and share authentic Sri Lankan seafood feasts with fellow travellers.",
    },
  },
  {
    id: 3,
    destination: "Northern Lights Iceland",
    locationTag: "Reykjavik & Golden Circle",
    duration: "8 Days / 7 Nights",
    groupSize: "10–12 Travellers",
    dates: "12–19 Jan 2027",
    price: "₹85,000",
    vibeTags: ["Adventure", "Hot Springs", "Scenic"],
    categories: ["Trending", "Adventure", "ScenicJourney"],
    image:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&q=85&w=800",
    tourPackage: {
      id: 3,
      title: "Northern Lights Iceland Circle",
      location: "Iceland",
      duration: "8 Days / 7 Nights",
      rating: 5,
      price: 85000,
      originalPrice: 98000,
      image:
        "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&q=85&w=800",
      category: "Adventure",
      tag: "10–12 Travellers",
      tagColor: "bg-[#7B1FA2]",
      spotsLeft: 3,
      nextDeparture: "12–19 Jan 2027",
      hook: "Dip in geothermal hot springs, chase green auroras in snowy valleys, and lodge in remote Scandinavian cabins.",
    },
  },
  {
    id: 4,
    destination: "Kyoto & Mt. Fuji, Japan",
    locationTag: "Kyoto & Tokyo Canopy",
    duration: "7 Days / 6 Nights",
    groupSize: "8–10 Travellers",
    dates: "25 Mar – 31 Mar 2027",
    price: "₹92,000",
    vibeTags: ["Women Only", "Culture", "Mindful"],
    categories: ["WomenOnly", "ScenicJourney"],
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=85&w=800",
    tourPackage: {
      id: 4,
      title: "The Sakura Edition — Japan",
      location: "Japan",
      duration: "7 Days / 6 Nights",
      rating: 5,
      price: 92000,
      originalPrice: 105000,
      image:
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=85&w=800",
      category: "Women Only",
      tag: "8–10 Travellers",
      tagColor: "bg-[#D81B60]",
      spotsLeft: 4,
      nextDeparture: "25 Mar – 31 Mar 2027",
      hook: "Walk under Kyoto's blooming cherry blossom canopies, experience traditional tea ceremonies, and bond with an all-women group.",
    },
  },
];

export function UpcomingJourneysSection() {
  const [activeCategory, setActiveCategory] = useState("Trending");
  const [selectedTour, setSelectedTour] = useState<TourPackage | null>(null);

  const categories = [
    { id: "Trending", label: "Trending", icon: Star },
    { id: "FirstTimers", label: "First Timers", icon: User },
    { id: "WomenOnly", label: "Women Only", icon: Heart },
    { id: "Adventure", label: "Adventure", icon: Globe },
    { id: "SlowTravel", label: "Slow Travel", icon: Coffee },
    { id: "BeachEscape", label: "Beach Escape", icon: Waves },
    { id: "ScenicJourney", label: "Scenic Journey", icon: Train },
  ];

  const filteredCards =
    activeCategory === "Trending"
      ? tripCards.slice(0, 3)
      : tripCards
          .filter((card) => card.categories.includes(activeCategory))
          .slice(0, 3);

  return (
    <section
      id="upcoming-journeys"
      className="py-20 lg:py-24 bg-white relative overflow-hidden select-none"
    >
      {/* Decorative Flying Birds Outline (Top Right) */}
      <FlyingBirds className="hidden lg:block absolute top-14 right-12 opacity-35 text-[#0B2A3D]" />

      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl text-center">
        {/* Sub-header tagline */}
        <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-[#C85A24] font-montserrat block mb-3">
          UPCOMING JOURNEYS
        </span>

        {/* Main Title */}
        <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-normal leading-tight font-serif max-w-4xl mx-auto mb-4 text-[#0B2A3D]">
          Where will your next{" "}
          <span className="relative inline-block font-script font-normal text-[1.12em] text-[#0B2A3D]">
            journey
            <TitleUnderline />
          </span>{" "}
          begin?
        </h2>

        {/* Subtitle Description */}
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
          Every Kokalachi journey is curated end-to-end — the destination, the
          pace, and the people. Pick the one that&apos;s calling you.
        </p>

        {/* Filter Pills Row */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto gap-2.5 sm:gap-3 mb-12 pb-2 scrollbar-hide font-sans">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 whitespace-nowrap cursor-pointer font-sans ${
                  isActive
                    ? "bg-[#0B2A3D] text-white shadow-md scale-105"
                    : "bg-white border border-slate-200/80 text-slate-700 hover:bg-slate-50"
                }`}
              >
                <Icon
                  size={14}
                  className={isActive ? "text-white" : "text-slate-500"}
                />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Trip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto text-left pt-2">
          {filteredCards.map((card) => (
            <div
              key={card.id}
              onClick={() => setSelectedTour(card.tourPackage)}
              className="bg-white rounded-3xl p-4 sm:p-5 shadow-[0_8px_25px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-300 group flex flex-col justify-between border border-slate-100/90 relative cursor-pointer font-sans"
            >
              <div>
                {/* Inner Image Box */}
                <div className="relative h-44 sm:h-48 w-full overflow-hidden rounded-2xl mb-3.5 bg-slate-100 font-sans">
                  <img
                    src={card.image}
                    alt={card.destination}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md text-white text-[11px] font-medium px-3 py-1 rounded-full flex items-center gap-1 font-sans">
                    <MapPin size={11} className="text-white" />
                    <span>{card.locationTag}</span>
                  </div>
                </div>

                {/* Destination Title (Matching Serif Font) */}
                <h3 className="text-xl sm:text-[22px] font-bold text-[#C85A24] font-serif leading-snug mb-3 group-hover:opacity-90 transition-opacity">
                  {card.destination}
                </h3>

                {/* Key Details Rows (Duration, Group Size, Dates) */}
                <div className="bg-[#FAF4EC] p-3.5 sm:p-4 rounded-2xl space-y-2.5 mb-4 border border-[#F5ECE0] font-sans">
                  <div className="flex items-center gap-2.5 font-sans">
                    <Clock
                      size={16}
                      className="text-[#C85A24] stroke-[1.8] flex-shrink-0"
                    />
                    <div className="flex items-baseline gap-1 text-xs font-sans">
                      <span className="font-medium text-[#64748B]">
                        Duration:
                      </span>
                      <span className="font-semibold text-[#0B2A3D] ml-0.5 font-sans">
                        {card.duration}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 font-sans">
                    <Users
                      size={16}
                      className="text-[#C85A24] stroke-[1.8] flex-shrink-0"
                    />
                    <div className="flex items-baseline gap-1 text-xs font-sans">
                      <span className="font-medium text-[#64748B]">
                        Group Size:
                      </span>
                      <span className="font-semibold text-[#0B2A3D] ml-0.5 font-sans">
                        {card.groupSize}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 font-sans">
                    <Calendar
                      size={16}
                      className="text-[#C85A24] stroke-[1.8] flex-shrink-0"
                    />
                    <div className="flex items-baseline gap-1 text-xs font-sans">
                      <span className="font-medium text-[#64748B]">Dates:</span>
                      <span className="font-semibold text-[#0B2A3D] ml-0.5 font-sans">
                        {card.dates}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Vibe Tags Pills */}
                <div className="flex items-center flex-wrap gap-1.5 mb-4 font-sans">
                  {card.vibeTags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-bold text-[#C85A24] bg-[#FAF0E6] px-3 py-1 rounded-full border border-[#F3DFD0] font-sans"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Starting From Price Display */}
                <div className="mb-4 border-t border-slate-100/80 pt-3 flex items-baseline justify-between font-sans">
                  <span className="text-xs text-slate-400 font-medium font-sans">
                    Starting From:
                  </span>
                  <div className="flex items-baseline gap-1 font-sans">
                    <span className="text-2xl font-black text-[#0B2A3D] font-sans">
                      {card.price}
                    </span>
                    <span className="text-xs text-slate-500 font-medium font-sans">
                      / person
                    </span>
                  </div>
                </div>
              </div>

              {/* View Journey CTA Button */}
              <button className="w-full bg-[#0B2A3D] hover:bg-[#061C29] text-white py-3.5 rounded-full font-medium text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer font-sans">
                <span>View Journey</span>
                <ArrowRight size={16} className="stroke-[2]" />
              </button>
            </div>
          ))}
        </div>

        {/* Section-end CTA Button */}
        <div className="mt-14 font-sans">
          <button className="bg-[#0B2A3D] hover:bg-[#061C29] text-white px-8 py-4 rounded-full font-medium text-base shadow-md hover:shadow-xl transition-all inline-flex items-center gap-2.5 cursor-pointer hover:scale-105 font-sans">
            <span>See All Upcoming Journeys</span>
            <ArrowRight size={18} className="stroke-[2]" />
          </button>
        </div>
      </div>

      {/* Quick View Modal */}
      <TourModal
        tour={selectedTour}
        isOpen={!!selectedTour}
        onClose={() => setSelectedTour(null)}
      />
    </section>
  );
}
