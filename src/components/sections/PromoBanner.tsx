"use client";

import React, { useState } from "react";
import { Play, X } from "lucide-react";
import { Button } from "../ui/Button";

export function PromoBanner() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="py-10 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row items-stretch">
          
          {/* Left Image Side */}
          <div className="relative w-full md:w-1/2 h-[320px] md:h-[440px]">
            <img 
              src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80" 
              alt="Beach house" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <button 
                onClick={() => setShowVideo(true)}
                className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-primary shadow-2xl hover:scale-110 transition-transform group"
              >
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center group-hover:bg-primary-hover transition-colors">
                  <Play fill="white" size={24} className="ml-1 text-white" />
                </div>
              </button>
            </div>
            {/* Overlay text */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
              <p className="text-white font-bold text-xl">Watch Our Story</p>
              <p className="text-white/70 text-sm">See how we create unforgettable journeys</p>
            </div>
          </div>

          {/* Right Content Side */}
          <div className="w-full md:w-1/2 bg-[#0b1b3d] flex flex-col justify-center items-start text-left p-10 md:p-16 relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/5"></div>
            <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-white/5"></div>

            <span className="text-blue-400 font-semibold uppercase tracking-widest text-sm mb-4 z-10">
              Summer Sale
            </span>
            <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight z-10">
              Enjoy Summer Deals
            </h3>
            <div className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6 z-10">
              Up to 50%<br/>Discount!
            </div>
            <p className="text-blue-200 mb-8 max-w-md z-10 leading-relaxed">
              Book your summer vacation now and get amazing discounts on selected destinations worldwide. Limited time offer!
            </p>
            <div className="flex gap-4 flex-wrap z-10">
              <Button variant="primary" className="rounded-full px-8 py-3 bg-primary hover:bg-primary-hover">
                Book Now
              </Button>
              <Button variant="outline" className="rounded-full px-8 py-3 border-white/30 text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-10 z-10 border-t border-white/10 pt-8 w-full">
              <div>
                <div className="text-3xl font-black text-white">500+</div>
                <div className="text-blue-300 text-sm">Destinations</div>
              </div>
              <div>
                <div className="text-3xl font-black text-white">12K+</div>
                <div className="text-blue-300 text-sm">Happy Travelers</div>
              </div>
              <div>
                <div className="text-3xl font-black text-white">98%</div>
                <div className="text-blue-300 text-sm">Satisfaction</div>
              </div>
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
