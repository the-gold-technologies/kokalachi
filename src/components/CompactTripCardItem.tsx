"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Calendar,
  Users,
  Clock,
  ArrowRight,
  MapPin,
  Flame,
} from "lucide-react";
import { TripCardData } from "@/data/trips";

export function CompactTripCardItem({ card }: { card: TripCardData }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!card.images || card.images.length <= 1) return;
    
    let intervalId: NodeJS.Timeout;
    // Add a random initial delay (0-2000ms) so cards don't slide at the exact same time
    const initialDelay = Math.random() * 2000;
    // Slightly randomize the interval (3000ms - 4500ms) to keep them out of sync
    const intervalTime = 3000 + Math.random() * 1500;

    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % card.images.length);
      }, intervalTime);
    }, initialDelay);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [card.images]);

  return (
    <Link
      href={`/journeys/${card.slug}`}
      className="bg-white rounded-3xl p-2 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col border border-slate-100 relative cursor-pointer font-sans h-full"
    >
      {/* Image Section */}
      <div className="relative h-40 w-full overflow-hidden rounded-2xl mb-2 bg-slate-100">
        {card.images &&
          card.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${card.tourPackage.title} - Image ${idx + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105 ${
                idx === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            />
          ))}
        {/* Pagination Dots */}
        {card.images && card.images.length > 1 && (
          <div className="absolute bottom-3 left-0 right-0 z-20 flex justify-center gap-1.5 pointer-events-none">
            {card.images.map((_, idx) => (
              <span
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentImageIndex
                    ? "bg-white w-4 opacity-100"
                    : "bg-white/60 w-1.5 opacity-60"
                }`}
              />
            ))}
          </div>
        )}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/40 via-transparent to-black/10 opacity-60 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />
        <div className="absolute top-3 left-3 z-20 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full text-[10px] font-semibold text-slate-700 shadow-sm flex items-center gap-1">
          <MapPin size={12} className="text-[#C85A24]" /> {card.destination}
        </div>
        {card.tourPackage.spotsLeft && (
          <div className="absolute top-3 right-3 z-20 bg-[#0E5A60]/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[10px] font-semibold text-white shadow-sm flex items-center gap-1">
            <Flame size={10} className="fill-[#D96C2C] text-[#D96C2C]" /> {card.tourPackage.spotsLeft} Spots
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="px-2 pb-2">
        <h3 className="text-md font-bold text-[#0E5A60] font-serif leading-tight mb-2 group-hover:text-[#0E5A60] transition-colors line-clamp-2">
          {card.tourPackage.title}
        </h3>

        {/* Key Stats */}
        <div className="flex flex-col gap-1.5 mb-3">
          <div className="flex items-center flex-wrap gap-x-3 gap-y-1.5">
            <div className="flex items-center gap-1 text-[11px] text-slate-600">
              <Clock size={13} className="text-[#0E5A60] opacity-80 shrink-0" />
              <span className="font-medium text-[#0E5A60]">{card.duration}</span>
            </div>
            <div className="flex items-center gap-1 text-[11px] text-slate-600">
              <Calendar size={13} className="text-[#0E5A60] opacity-80 shrink-0" />
              <span className="font-medium text-[#0E5A60]">{card.dates}</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-slate-600">
            <Users size={13} className="text-[#0E5A60] opacity-80 shrink-0" />
            <span className="font-medium text-[#0E5A60] truncate">{card.groupSize}</span>
          </div>
        </div>

        {/* Footer: Price & CTA */}
        <div className="mt-auto pt-2 border-t border-slate-100 flex items-end justify-between">
          <div>
            <p className="text-[9px] text-slate-400 font-bold tracking-wider uppercase mb-0.5">
              Starting From
            </p>
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg font-bold text-[#D96C2C] leading-none">
                {card.price === "TBA" ? "₹49,999" : card.price}
              </span>
              <span className="text-[10px] text-slate-400 line-through font-semibold">
                {card.price === "TBA" ? "₹55,000" : `₹${card.tourPackage.originalPrice?.toLocaleString() || "55,000"}`}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1 rounded-full bg-[#D96C2C] text-white px-4 py-2 group-hover:bg-[#C85A24] transition-all shadow-sm hover:shadow-md">
            <span className="text-[11px] font-bold uppercase tracking-wider">Book</span>
            <ArrowRight
              size={13}
              className="group-hover:translate-x-1 transition-transform stroke-[2.5]"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
