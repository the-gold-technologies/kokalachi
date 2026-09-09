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

export function TripCardItem({ card }: { card: TripCardData }) {
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
      className="bg-white rounded-[2rem] px-2 pt-2 pb-4 shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col border border-slate-100 relative cursor-pointer font-sans transform hover:-translate-y-2 h-full"
    >
      {/* Image Section */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden rounded-3xl mb-3 bg-slate-100">
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
          <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-1.5 pointer-events-none">
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
        <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-[#0E5A60] flex items-center gap-1.5 shadow-sm">
          <MapPin size={14} className="text-[#C85A24]" /> {card.destination}
        </div>
        {card.tourPackage.spotsLeft && (
          <div className="absolute top-4 right-4 z-20 bg-[#0E5A60]/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-white shadow-sm flex items-center gap-1">
            <Flame size={12} className="fill-[#D96C2C] text-[#D96C2C]" /> {card.tourPackage.spotsLeft} Spots
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow px-3">
        <h3 className="text-base sm:text-lg font-bold text-[#0E5A60] font-serif leading-tight mb-2 group-hover:text-[#0E5A60] transition-colors line-clamp-2">
          {card.tourPackage.title}
        </h3>

        {/* Key Stats */}
        <div className="flex flex-col gap-2 mb-4 mt-1">
          <div className="flex items-center flex-wrap gap-x-4 gap-y-2">
            <div className="flex items-center gap-1.5 text-xs text-slate-600">
              <Clock size={15} className="text-[#0E5A60] opacity-80 shrink-0" />
              <span className="font-medium text-[#0E5A60]">{card.duration}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-600">
              <Calendar size={15} className="text-[#0E5A60] opacity-80 shrink-0" />
              <span className="font-medium text-[#0E5A60]">{card.dates}</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-600">
            <Users size={15} className="text-[#0E5A60] opacity-80 shrink-0" />
            <span className="font-medium text-[#0E5A60] truncate">{card.groupSize}</span>
          </div>
        </div>

        {/* Footer: Price & CTA */}
        <div className="mt-auto pt-4 border-t border-slate-100 flex items-end justify-between">
          <div>
            <p className="text-[10px] text-slate-400 font-bold tracking-wider uppercase mb-1">
              Starting From
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-black text-[#D96C2C] leading-none">
                ₹{((card.tourPackage.price as number) || 49999).toLocaleString()}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-[#D96C2C] text-white px-5 py-2.5 group-hover:bg-[#C85A24] transition-all shadow-md hover:shadow-lg">
            <span className="text-xs font-bold uppercase tracking-wider">Book</span>
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform stroke-[2.5]"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
