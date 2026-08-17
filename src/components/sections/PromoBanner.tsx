"use client";

import React, { useState } from "react";
import { Play, X, ArrowRight } from "lucide-react";
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
                className="w-14 h-14 bg-[#3E7C7A] hover:bg-[#326462] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 text-white"
              >
                <Play fill="currentColor" size={18} className="ml-0.5 text-white" />
              </button>
            </div>
          </div>

          {/* Right Content Side (Kokalachi Dark Navy Background) */}
          <div className="w-full md:w-[45%] bg-[#1F355E] flex flex-col justify-center items-start text-left p-8 md:p-12 relative overflow-hidden">
            
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
                SEE DETAILS <ArrowRight size={14} className="ml-2" />
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
