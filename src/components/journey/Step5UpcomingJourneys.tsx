"use client";

import React, { useState } from "react";
import {
  MapPin,
  Calendar,
  Heart,
  Compass,
  Mountain,
  Palmtree,
  Sparkles,
  Ticket,
  ArrowRight,
} from "lucide-react";
import { TourModal, TourPackage } from "./TourModal";

const packages: TourPackage[] = [
  {
    id: 1,
    title: "Manhattan Sunset Walking Circle",
    location: "New York, USA",
    duration: "4 Days",
    rating: 5,
    price: 320,
    originalPrice: 380,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=600",
    category: "Mountain",
    tag: "4 Spots Left",
    tagColor: "bg-[#D96C2C]",
    spotsLeft: 4,
    nextDeparture: "Oct 12, 2026",
    hook: "Walk the historic skyline trails and hidden speakeasies with 8 fellow culture lovers.",
  },
  {
    id: 2,
    title: "Eternal Dubai Desert & Marina Escape",
    location: "Dubai, UAE",
    duration: "5 Days",
    rating: 5,
    price: 349,
    originalPrice: 450,
    image: "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?auto=format&fit=crop&q=80&w=600",
    category: "Coastal",
    tag: "6 Spots Left",
    tagColor: "bg-[#0E5A60]",
    spotsLeft: 6,
    nextDeparture: "Nov 02, 2026",
    hook: "Dune bashing, private yacht sunsets, and starry desert dinners with an intimate circle.",
  },
  {
    id: 3,
    title: "Pulau Seribu Island Hopping Circle",
    location: "Jakarta, Indonesia",
    duration: "6 Days",
    rating: 5,
    price: 299,
    originalPrice: 350,
    image: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&q=80&w=600",
    category: "Coastal",
    tag: "3 Spots Left",
    tagColor: "bg-[#D96C2C]",
    spotsLeft: 3,
    nextDeparture: "Sep 28, 2026",
    hook: "Turquoise waters, pristine coral snorkeling, and beach campfire stories with solo explorers.",
  },
  {
    id: 4,
    title: "Himalayan Ridge & Valley Trail",
    location: "Manali, India",
    duration: "7 Days",
    rating: 5,
    price: 275,
    originalPrice: 320,
    image: "https://images.unsplash.com/photo-1528072164453-f4e8ef0d475a?auto=format&fit=crop&q=80&w=600",
    category: "Mountain",
    tag: "Featured Circle",
    tagColor: "bg-[#0E5A60]",
    spotsLeft: 5,
    nextDeparture: "Oct 20, 2026",
    hook: "Summit panoramic peaks and unwind around wood-fire stoves in handpicked mountain stays.",
  },
];

export function Step5UpcomingJourneys() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedTour, setSelectedTour] = useState<TourPackage | null>(null);
  const [wishlist, setWishlist] = useState<number[]>([]);

  const tabs = [
    { id: "All", label: "All Circles", icon: Sparkles },
    { id: "Mountain", label: "Mountain Circles", icon: Mountain },
    { id: "Coastal", label: "Coastal Escapes", icon: Palmtree },
    { id: "Festival", label: "Festival Circles", icon: Ticket },
    { id: "Offbeat", label: "Offbeat Circles", icon: Compass },
  ];

  const toggleWishlist = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredPackages =
    activeTab === "All"
      ? packages
      : packages.filter((pkg) => pkg.category === activeTab);

  return (
    <section id="upcoming-circles" className="py-24 bg-white relative overflow-hidden select-none">
      <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-10 max-w-3xl">
          <span
            className="text-[#0E5A60] text-2xl md:text-3xl mb-2 block"
            style={{ fontFamily: "var(--font-playball)" }}
          >
            Find Your Kind of Journey
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B2A3D] leading-tight">
            Upcoming <span className="text-[#0E5A60]">Curated Circles</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-3">
            Small groups of 8-12 solo travellers leaving soon. Pick your circle and connect with fellow explorers before departure.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex border-b border-slate-200 overflow-x-auto w-full justify-start md:justify-center mb-12 scrollbar-hide pt-2 gap-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-4 px-4 sm:px-6 flex items-center gap-2 text-xs sm:text-sm font-bold transition-all relative whitespace-nowrap flex-shrink-0 ${
                  isActive
                    ? "text-[#0E5A60]"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
                {isActive && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0E5A60]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Tour Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {filteredPackages.map((dest) => {
            const isWishlisted = wishlist.includes(dest.id);
            return (
              <div
                key={dest.id}
                onClick={() => setSelectedTour(dest)}
                className="bg-[#F7F3EC] rounded-3xl overflow-hidden border border-slate-200/80 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col cursor-pointer text-left relative"
              >
                {/* Card Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    src={dest.image}
                    alt={dest.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Spots Left / Tag */}
                  {dest.tag && (
                    <div
                      className={`absolute top-4 left-0 px-3 py-1.5 text-[10px] font-extrabold text-white uppercase tracking-wider ${dest.tagColor}`}
                      style={{
                        clipPath: "polygon(0 0, 100% 0, 90% 50%, 100% 100%, 0 100%)",
                      }}
                    >
                      {dest.tag}
                    </div>
                  )}

                  {/* Heart Bookmark */}
                  <button
                    onClick={(e) => toggleWishlist(dest.id, e)}
                    className="absolute top-4 right-4 w-9 h-9 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-md hover:bg-white transition-all"
                  >
                    <Heart
                      size={16}
                      className={
                        isWishlisted
                          ? "text-red-500 fill-red-500"
                          : "text-slate-400 hover:text-red-500"
                      }
                    />
                  </button>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-500 font-semibold mb-2">
                      <div className="flex items-center gap-1">
                        <MapPin size={13} className="text-[#0E5A60]" />
                        <span>{dest.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={13} className="text-[#D96C2C]" />
                        <span>{dest.nextDeparture}</span>
                      </div>
                    </div>

                    <h3 className="font-extrabold text-base text-[#0B2A3D] leading-snug mb-2 group-hover:text-[#0E5A60] transition-colors line-clamp-2 min-h-[44px]">
                      {dest.title}
                    </h3>

                    <p className="text-slate-500 text-xs line-clamp-2 leading-relaxed mb-4">
                      {dest.hook}
                    </p>
                  </div>

                  {/* Card Footer Price & Action */}
                  <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between mt-auto">
                    <div>
                      <span className="text-[10px] text-slate-400 block font-medium">Starts from</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-lg font-extrabold text-[#0B2A3D]">${dest.price}</span>
                        <span className="text-[10px] text-slate-500">/ person</span>
                      </div>
                    </div>

                    <span className="px-3 py-1.5 rounded-xl bg-white text-[#0E5A60] font-bold text-xs group-hover:bg-[#0E5A60] group-hover:text-white transition-colors flex items-center gap-1 shadow-sm">
                      View Circle <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tour Quick View Modal */}
      <TourModal
        tour={selectedTour}
        isOpen={!!selectedTour}
        onClose={() => setSelectedTour(null)}
      />
    </section>
  );
}
