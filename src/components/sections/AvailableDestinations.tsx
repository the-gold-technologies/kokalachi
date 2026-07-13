import React from "react";
import { SectionHeading } from "../ui/SectionHeading";

const destinations = [
  { id: 1, name: "Paris", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80" },
  { id: 2, name: "Australia", image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80" },
  { id: 3, name: "New York", image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80" },
  { id: 4, name: "Queen City", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80" },
];

export function AvailableDestinations() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8 text-center flex flex-col items-center">
        <SectionHeading 
          subtitle="Top Popular Destinations" 
          title="Popular Travel Destinations Available Worldwide" 
          className="mb-6"
        />
        <p className="text-gray-500 max-w-2xl mb-12">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-5xl">
          {destinations.map((dest) => (
            <div key={dest.id} className="flex flex-col items-center group cursor-pointer">
              <div className="relative">
                <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg p-2 bg-white group-hover:shadow-xl transition-all">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img 
                      src={dest.image} 
                      alt={dest.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                {/* Purple Badge Overlapping */}
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-primary text-white font-bold text-sm md:text-base px-6 py-2 rounded-full shadow-md whitespace-nowrap">
                  {dest.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
