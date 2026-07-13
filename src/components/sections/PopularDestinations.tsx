"use client";

import React, { useState } from "react";
import {
  Star,
  MapPin,
  Clock,
  Send,
  Building2,
  Utensils,
  Home,
  TrendingUp,
  Car,
} from "lucide-react";

// Package details matching the screenshot data.
// All 8 packages are categorized under 'tour' so they display in the default 'Tour' tab view.
const packages = [
  {
    id: 1,
    title: "Two Hour Walking Tour Of Manhattan",
    location: "Veins City, Italy",
    duration: "7 Days",
    rating: 5,
    price: 320,
    originalPrice: null,
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=600",
    category: "tour",
    tag: "New",
    tagColor: "bg-[#00c853]",
  },
  {
    id: 2,
    title: "When You Visit The Eternal Dubai City",
    location: "Dubai, Emirates",
    duration: "2 Days",
    rating: 5,
    price: 149,
    originalPrice: 299,
    image:
      "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?auto=format&fit=crop&q=80&w=600",
    category: "tour",
    tag: "% Offer",
    tagColor: "bg-[#00c853]",
  },
  {
    id: 3,
    title: "The Pulau Seribu, Jakarta Indonesia",
    location: "51 Dekor Land, Thailand",
    duration: "5 Days",
    rating: 5,
    price: 349,
    originalPrice: null,
    image:
      "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&q=80&w=600",
    category: "tour",
    tag: "New",
    tagColor: "bg-[#00c853]",
  },
  {
    id: 4,
    title: "American Parks Trail End Rapid City Express",
    location: "New York, USA",
    duration: "3 Days",
    rating: 4,
    price: 255,
    originalPrice: 280,
    image:
      "https://images.unsplash.com/photo-1528072164453-f4e8ef0d475a?auto=format&fit=crop&q=80&w=600",
    category: "tour",
    tag: "Featured",
    tagColor: "bg-[#F97316]",
  },
  {
    id: 5,
    title: "Southwestern Switzerland Akam City",
    location: "Switzerland City",
    duration: "3 Days",
    rating: 4,
    price: 255,
    originalPrice: 280,
    image:
      "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?auto=format&fit=crop&q=80&w=600",
    category: "tour",
    tag: null,
    tagColor: null,
  },
  {
    id: 6,
    title: "Modern Stefano La Piazze Wergeland",
    location: "East Norway",
    duration: "5 Days",
    rating: 4,
    price: 255,
    originalPrice: 280,
    image:
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80&w=600",
    category: "tour",
    tag: "Featured",
    tagColor: "bg-[#F97316]",
  },
  {
    id: 7,
    title: "Vatican Museums, Sistine Chapel Skip The Line",
    location: "Rome City",
    duration: "7 Days",
    rating: 5,
    price: 142,
    originalPrice: 280,
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=600",
    category: "tour",
    tag: null,
    tagColor: null,
  },
  {
    id: 8,
    title: "Win Cities On Opposite Sides Of The",
    location: "Sydney, Australia",
    duration: "4 Days",
    rating: 5,
    price: 110,
    originalPrice: 240,
    image:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=600",
    category: "tour",
    tag: null,
    tagColor: null,
  },
];

export function PopularDestinations() {
  const [activeTab, setActiveTab] = useState("tour");

  const tabs = [
    { id: "tour", label: "Tour", icon: Send },
    { id: "hotel", label: "Hotel", icon: Building2 },
    { id: "restaurant", label: "Restaurant", icon: Utensils },
    { id: "rental", label: "Rental", icon: Home },
    { id: "activity", label: "Activity", icon: TrendingUp },
    { id: "car-rental", label: "Car Rental", icon: Car },
  ];

  // Filters packages based on active category.
  // Other tabs can show a filtered subset or related items for interactive consistency.
  const filteredPackages =
    activeTab === "tour"
      ? packages
      : packages.filter((pkg) => pkg.id % 2 === 0); // show a neat demo subset for other tabs

  return (
    <section className="relative py-24 bg-[#F9F9FB] overflow-hidden select-none">
      {/* Background Graphic Illustration - Top Right (Pyramids Sketch from User image) */}
      <div className="absolute top-0 right-0 lg:right-3 w-[320px] h-[270px] pointer-events-none opacity-40 z-0 hidden md:block select-none">
        <img
          src="/pyramid-bg.png"
          alt="Pyramids Graphic"
          className="w-full h-full object-contain mix-blend-multiply"
        />
      </div>

      {/* Background Graphic Illustration - Bottom Left (Mountains & Balloon Sketch from User image) */}
      <div className="absolute bottom-6 left-0 lg:left-6 w-[320px] h-[270px] pointer-events-none opacity-40 z-0 hidden md:block select-none">
        <img
          src="/balloon-bg.png"
          alt="Balloon Graphic"
          className="w-full h-full object-contain mix-blend-multiply"
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-10">
          <span
            className="text-[#3E7C7A] text-2xl md:text-3xl mb-3 block"
            style={{ fontFamily: "var(--font-playball)" }}
          >
            Most Popular Tour Packages
          </span>
          <h2 className="text-3xl md:text-[40px] font-extrabold text-gray-900 leading-tight">
            Something Amazing Waiting For you
          </h2>
        </div>

        {/* Tab Filters (Structured like SearchBar tabs) */}
        <div className="flex border-b border-gray-100 overflow-x-auto w-full max-w-2xl justify-start md:justify-center mb-12 scrollbar-hide pt-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-4 px-5 flex items-center gap-1.5 text-xs md:text-sm font-semibold transition-colors relative whitespace-nowrap flex-shrink-0 ${
                  isActive
                    ? "text-[#3E7C7A]"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                <Icon size={14} />
                <span>{tab.label}</span>
                {isActive && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#3E7C7A]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {filteredPackages.map((dest) => (
            <div
              key={dest.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group flex flex-col text-left"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Ribbon Tag with diagonal chevron cutout, flush on the left */}
                {dest.tag && (
                  <div
                    className={`absolute top-4 left-0 px-4 py-1.5 text-[10px] font-bold text-white uppercase tracking-wider ${dest.tagColor}`}
                    style={{
                      clipPath:
                        "polygon(0 0, 100% 0, 88% 50%, 100% 100%, 0 100%)",
                    }}
                  >
                    {dest.tag}
                  </div>
                )}
                {/* Heart Button */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer shadow-sm hover:bg-white transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-500 hover:text-red-500 hover:fill-red-500 transition-colors"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 pt-3.5 pb-0 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-base text-gray-900 leading-snug mb-3 group-hover:text-[#3E7C7A] transition-colors line-clamp-2 min-h-[44px]">
                    {dest.title}
                  </h3>

                  <div className="flex flex-col gap-1.5 text-xs text-gray-500 font-medium mb-4">
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-gray-400" />
                      <span>{dest.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock size={14} className="text-gray-400" />
                      <span>{dest.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pricing & Reviews Bar (Flush to left & bottom borders of card) */}
              <div className="flex items-center justify-between mt-auto pl-5 pr-5 h-14 relative">
                {/* Purple Price Tag (Flat-left, slanted/rounded-right shape, flush left/bottom matching reference) */}
                <div className="absolute bottom-0 left-0 top-0 bg-[#3E7C7A] text-white pl-5 pr-7 flex flex-col justify-center rounded-tr-[24px] z-10 leading-none">
                  {dest.originalPrice && (
                    <span className="text-[9px] opacity-75 line-through mb-0.5">
                      ${dest.originalPrice}
                    </span>
                  )}
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-base md:text-lg font-black">
                      ${dest.price}
                    </span>
                    <span className="text-[9px] opacity-80">/Person</span>
                  </div>
                </div>

                {/* Rating Stars & Reviews text (single star icon matching reference) */}
                <div className="ml-auto flex items-center gap-1 text-[11px] font-bold text-gray-800 z-20">
                  <Star size={12} className="text-orange-500 fill-orange-500" />
                  <span className="text-gray-400 font-normal">
                    ({dest.rating} Reviews)
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
