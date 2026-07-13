import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";

export function Discover() {
  return (
    <section className="relative py-28 md:py-36 bg-white overflow-hidden mt-24 md:mt-36">
      {/* Background Watermark (Kokalachi A Travel Agency) centered behind the content */}
      <div className="absolute top-[12%] md:top-[15%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center opacity-[0.06] pointer-events-none select-none z-0 w-full">
        <div className="relative font-bold text-gray-900 tracking-tight text-5xl sm:text-6xl md:text-[80px] font-sans">
          Kokalachi
          {/* Plane icon flying above the 'ia' */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="absolute -top-3 md:-top-5 right-[18%] w-8 h-8 md:w-12 md:h-12 transform rotate-[45deg]"
          >
            <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
          </svg>
        </div>
        <div className="text-[10px] md:text-xs font-bold text-gray-900 tracking-[0.4em] uppercase mt-1 md:mt-2">
          A Travel Agency
        </div>
      </div>

      <div className="container mx-auto px-4 relative min-h-[450px] flex items-center justify-center">
        
        {/* Center Content */}
        <div className="text-center max-w-2xl mx-auto z-20">
          <span
            className="text-[#3E7C7A] text-2xl md:text-3xl mb-4 block"
            style={{ fontFamily: "var(--font-playball)" }}
          >
            Most Popular Tour
          </span>
          <h2 className="text-3xl md:text-[44px] font-extrabold text-gray-900 mb-6 leading-tight">
            Let&apos;s Discover The World <br />
            With Our Excellent Eyes
          </h2>
          <p className="text-gray-500 mb-8 leading-relaxed text-sm md:text-base max-w-xl mx-auto">
            Whether You&apos;re Looking For A Romantic Getaway, Family-Friendly<br className="hidden md:inline" />
            Solo Journey To Explore The World, A Travel Agency Can Provide<br className="hidden md:inline" />
            Tailored Itinerary That Exceeds Your Expectations.
          </p>
          <Button
            variant="primary"
            className="rounded-lg px-8 py-3 bg-[#F5EBDD] hover:bg-[#e6d6c4] text-[#1F355E] font-bold text-xs md:text-sm uppercase tracking-wider inline-flex items-center transition-all duration-300 shadow-sm border border-[#e6d6c4]"
          >
            TAKE A TOUR <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>

        {/* Left Floating Images (Desktop only to match design layout) */}
        {/* Top Left - Landscape */}
        <div className="absolute top-[4%] left-[2%] lg:left-[5%] w-[22%] max-w-[260px] hidden md:block z-10">
          <img
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=600"
            alt="Dubai City Beach"
            className="w-full h-auto object-cover rounded-2xl shadow-lg aspect-[4/3]"
          />
        </div>
        {/* Bottom Left - Inward Square */}
        <div className="absolute bottom-[2%] left-[10%] lg:left-[14%] w-[15%] max-w-[160px] hidden md:block z-10">
          <img
            src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=400"
            alt="Aerial Beach"
            className="w-full h-auto object-cover rounded-2xl shadow-lg aspect-square"
          />
        </div>

        {/* Right Floating Images (Desktop only to match design layout) */}
        {/* Top Right - Landscape */}
        <div className="absolute top-[4%] right-[2%] lg:right-[5%] w-[22%] max-w-[260px] hidden md:block z-10">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=600"
            alt="Beach Relaxing"
            className="w-full h-auto object-cover rounded-2xl shadow-lg aspect-[4/3]"
          />
        </div>
        {/* Bottom Right - Inward Square */}
        <div className="absolute bottom-[2%] right-[10%] lg:right-[14%] w-[15%] max-w-[160px] hidden md:block z-10">
          <img
            src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&q=80&w=400"
            alt="Beach Coastline"
            className="w-full h-auto object-cover rounded-2xl shadow-lg aspect-square"
          />
        </div>

      </div>
    </section>
  );
}
