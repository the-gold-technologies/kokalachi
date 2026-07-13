import React from "react";
import { Button } from "../ui/Button";
import { ArrowRight } from "lucide-react";

export function ExploreBanner() {
  return (
    <section className="relative h-[600px] w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80')",
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/70" />

      {/* Very Large Background Text */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
        <h1 className="text-[80px] md:text-[160px] font-black text-white/10 tracking-widest whitespace-nowrap leading-none text-center select-none">
          EXPLORE WORLD
        </h1>
      </div>

      <div className="container mx-auto px-4 flex flex-col items-center text-center z-10 relative">
        <span className="inline-block bg-white/20 backdrop-blur-sm text-white font-semibold uppercase tracking-widest text-sm px-6 py-2 rounded-full mb-6 border border-white/30">
          Top Popular Destinations
        </span>
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 max-w-3xl leading-tight">
          Popular Travel Destinations<br/>Available Worldwide
        </h2>
        <p className="text-white/80 max-w-2xl mb-10 text-lg leading-relaxed">
          Find your perfect escape from our curated collection of the world's most breathtaking destinations. Adventure awaits.
        </p>
        
        <Button variant="white" className="rounded-full px-10 py-4 text-primary font-bold text-lg hover:scale-105 transition-transform shadow-xl">
          Explore The World <ArrowRight size={20} className="ml-2" />
        </Button>
      </div>
    </section>
  );
}
