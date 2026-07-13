"use client";

import React, { useState, useEffect } from "react";
import { Button } from "../ui/Button";
import { SearchBar } from "./SearchBar";
import { ArrowRight, ArrowLeft } from "lucide-react";

const bgImages = [
  "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80",
];

export function Hero() {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const nextBg = () => {
    setCurrentBg((prev) => (prev + 1) % bgImages.length);
  };

  const prevBg = () => {
    setCurrentBg((prev) => (prev - 1 + bgImages.length) % bgImages.length);
  };

  return (
    <section className="relative h-[85vh] min-h-[700px] w-full flex flex-col items-center justify-center pt-20 mb-28">
      {/* Background Image Slider (Smooth Fade) */}
      <div className="absolute inset-0 -z-10 overflow-hidden bg-black">
        {bgImages.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
              idx === currentBg ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url('${img}')` }}
          />
        ))}
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>

        {/* Decorative Squiggly Lines (Simplified CSS representation) */}
        <svg
          className="absolute bottom-10 left-10 w-96 h-96 text-white/20 pointer-events-none z-10"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,100 C50,150 150,50 200,100"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M0,120 C50,170 150,70 200,120"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <svg
          className="absolute bottom-0 right-0 w-96 h-96 text-white/20 pointer-events-none z-10"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,200 C50,100 150,150 200,50"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M0,220 C50,120 150,170 200,70"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Carousel Arrows */}
      <div className="hidden md:block absolute left-8 md:left-24 lg:left-40 top-1/2 transform -translate-y-1/2 z-20">
        <button
          onClick={prevBg}
          className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-lg hover:bg-gray-100 transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
      </div>
      <div className="hidden md:block absolute right-8 md:right-24 lg:right-40 top-1/2 transform -translate-y-1/2 z-20">
        <button
          onClick={nextBg}
          className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-lg hover:bg-gray-100 transition-colors"
        >
          <ArrowRight size={20} />
        </button>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center mt-10">
        <span className="text-white text-sm md:text-base font-medium tracking-widest mb-4">
          * This Offer Valid Till 22 August
        </span>
        <h1 className="text-6xl md:text-[80px] font-bold text-white mb-6 leading-none tracking-tight">
          Maldives island
        </h1>
        {/* Subtle white underline decoration */}
        <div className="w-64 h-1 bg-white/50 mb-6"></div>

        <p className="text-white/90 text-sm md:text-lg max-w-2xl mb-8">
          When An Unknown Printer Took Ar Galley Offer Type Area{" "}
          <br className="hidden md:block" />
          Year Anddey Make Specimen Book
        </p>
        <div className="flex flex-col md:flex-row items-center gap-2 mb-10 text-white text-xl">
          <span>Booking Start From</span>
          <span className="text-4xl font-bold ml-2">$299</span>
          <span className="text-lg">/night</span>
        </div>
        <Button
          variant="primary"
          size="lg"
          className="px-8 text-sm font-bold uppercase rounded-lg bg-[#3E7C7A] hover:bg-[#326462]"
        >
          TAKE A TOUR <ArrowRight size={18} className="ml-2" />
        </Button>
      </div>

      {/* Floating Search Bar Container */}
      <div className="absolute -bottom-28 left-0 w-full px-4 flex justify-center z-20">
        <SearchBar />
      </div>
    </section>
  );
}
