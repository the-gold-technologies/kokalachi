"use client";

import React, { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const destinations = [
  {
    id: 1,
    name: "Paris",
    tours: "05 Tours",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 2,
    name: "Australia",
    tours: "08 Tours",
    image:
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 3,
    name: "New York",
    tours: "06 Tours",
    image:
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 4,
    name: "Spain City",
    tours: "07 Tours",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 5,
    name: "Switzerland",
    tours: "12 Tours",
    image:
      "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 6,
    name: "Rome",
    tours: "09 Tours",
    image:
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 7,
    name: "Tokyo",
    tours: "15 Tours",
    image:
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=400",
  },
];

export function AvailableDestinations() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 280; // Width of card + gap
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative py-20 bg-[#F9F9FB] overflow-hidden select-none">
      {/* Background Graphic Watermark - Bottom Left Eiffel Tower (from User image) */}
      <div className="absolute -bottom-10 left-[2%] w-[16%] max-w-[200px] h-[340px] pointer-events-none opacity-70 z-0 select-none">
        <img
          src="/eiffel-bg.png"
          alt="Eiffel Tower Watermark"
          className="w-full h-full object-contain mix-blend-multiply"
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center">
        {/* Header (Text Only) */}
        <div className="w-full max-w-5xl mb-12 text-center flex flex-col items-center">
          <span
            className="text-[#3E7C7A] text-2xl md:text-3xl mb-3 block"
            style={{ fontFamily: "var(--font-playball)" }}
          >
            Next Adventure Destination
          </span>
          <h2 className="text-3xl md:text-[40px] font-extrabold text-gray-900 mb-4 leading-tight">
            Popular Travel Destinations <br />
            Available Worldwide
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-xl">
            Are You Tired Of The Typical Tourist Destinations And Looking{" "}
            <br className="hidden md:inline" />
            To Step Out Of Your Comfort Zonetravel
          </p>
        </div>

        {/* Destination Card Slider */}
        <div className="w-full max-w-5xl relative overflow-hidden py-4">
          {/* Custom style block to hide Webkit and Firefox scrollbars */}
          <style>{`
            .no-scrollbar::-webkit-scrollbar {
              display: none;
            }
            .no-scrollbar {
              -ms-overflow-style: none;  /* IE and Edge */
              scrollbar-width: none;  /* Firefox */
            }
          `}</style>

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 w-full scroll-smooth pb-2 snap-x snap-mandatory no-scrollbar"
          >
            {destinations.map((dest) => (
              <div
                key={dest.id}
                className="w-[245px] flex-shrink-0 snap-start bg-white rounded-3xl p-4 border border-gray-100 hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col items-center shadow-sm"
              >
                <div className="relative w-full aspect-[4/4.2] rounded-2xl overflow-hidden mb-5">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-2xl"
                  />

                  {/* Terra Cotta Accent Tours Count Badge Overlayed */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-[#D97745] text-white font-bold text-[10px] uppercase tracking-wider px-4 py-1.5 rounded-md shadow-md whitespace-nowrap z-10">
                    {dest.tours}
                  </div>
                </div>

                {/* Destination Title */}
                <h3 className="font-extrabold text-lg text-gray-900 mb-1 group-hover:text-[#3E7C7A] transition-colors pb-1">
                  {dest.name}
                </h3>
              </div>
            ))}
          </div>

          {/* Slider Arrow Controls positioned at bottom-right of the image grid */}
          <div className="flex items-center justify-end gap-3 mt-6 pr-2">
            <button
              onClick={() => handleScroll("left")}
              className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:bg-[#3E7C7A] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
              aria-label="Scroll left"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:bg-[#3E7C7A] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
              aria-label="Scroll right"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
