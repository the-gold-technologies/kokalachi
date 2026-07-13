"use client";

import React, { useState } from "react";
import { Play, X } from "lucide-react";
import { Button } from "../ui/Button";

export function PromoBanner() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section 
      className="py-12 px-4 md:px-8 select-none"
      style={{ background: "linear-gradient(to bottom, #ffffff 50%, #F9F9FB 50%)" }}
    >
      <div className="container mx-auto max-w-5xl">
        <div className="relative rounded-[28px] overflow-hidden shadow-lg flex flex-col md:flex-row items-stretch">
          
          {/* Left Image Side with Play Button */}
          <div className="relative w-full md:w-[55%] h-[240px] md:h-[280px] bg-gray-100">
            <img 
              src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800" 
              alt="Tropical Beach Shoreline" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
              <button 
                onClick={() => setShowVideo(true)}
                className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 text-[#D97745]"
              >
                <Play fill="currentColor" size={18} className="ml-0.5 text-[#D97745]" />
              </button>
            </div>
          </div>

          {/* Right Content Side (Kokalachi Dark Navy Background) */}
          <div className="w-full md:w-[45%] bg-[#1F355E] flex flex-col justify-center items-start text-left p-8 md:p-12 relative overflow-hidden">
            
            {/* Background Outline SVG - Sketched Palm Trees and Flying Bird Watermark (Bottom Right) */}
            <div className="absolute bottom-[-10px] right-[-10px] w-40 h-40 opacity-15 text-gray-300 pointer-events-none z-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="w-full h-full"
              >
                {/* Island Mound */}
                <path d="M 10,95 Q 50,88 90,95" />
                {/* Left Palm Tree */}
                <path d="M 60,90 Q 55,60 40,45" strokeWidth="1.2" />
                <path d="M 40,45 Q 25,48 18,54 M 40,45 Q 30,35 25,32 M 40,45 Q 45,30 52,28 M 40,45 Q 52,38 58,42" />
                {/* Right Palm Tree */}
                <path d="M 75,90 Q 75,65 65,50" strokeWidth="1.2" />
                <path d="M 65,50 Q 52,55 48,60 M 65,50 Q 55,40 50,38 M 65,50 Q 72,38 78,35 M 65,50 Q 75,45 80,50" />
                {/* Flying Birds */}
                <path d="M 20,20 Q 25,15 30,22 Q 35,15 40,20" strokeWidth="0.8" />
                <path d="M 45,15 Q 48,11 52,16 Q 56,11 60,15" strokeWidth="0.6" />
              </svg>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <span className="text-white/90 text-sm font-medium tracking-wide mb-2 block">
                Enjoy Summer Deals
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-6 leading-tight">
                Up to 40% Discount!
              </h3>
              <Button 
                variant="primary" 
                className="rounded-lg px-6 py-2.5 bg-[#D97745] hover:bg-[#c06538] text-white font-bold text-xs uppercase tracking-wider flex items-center shadow-md transition-all duration-300"
              >
                SEE DETAILS <span className="ml-2">→</span>
              </Button>
            </div>

          </div>

        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setShowVideo(false)}>
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors"
            >
              <X size={20} />
            </button>
            <div className="w-full h-full flex items-center justify-center text-white text-xl">
              🎬 Video Player Placeholder
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
