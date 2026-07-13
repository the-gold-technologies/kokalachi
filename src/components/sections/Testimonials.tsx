"use client";

import React, { useState, useEffect } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Jacob Jones",
    role: "CEO, Traveller",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    content: "Morem Ipsum Dolor Siterey Amet Mean Earty Areaeey Consec Taetur Adipisrvice Ollwing Ipsum Dolor Consectetur.",
    rating: 4,
  },
  {
    id: 2,
    name: "Floyd Miles",
    role: "CEO, Traveller",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    content: "Morem Ipsum Dolor Siterey Amet Mean Earty Areaeey Consec Taetur Adipisrvice Ollwing Ipsum Dolor Consectetur.",
    rating: 4,
  },
  {
    id: 3,
    name: "Esther Howard",
    role: "CEO, Traveller",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    content: "Morem Ipsum Dolor Siterey Amet Mean Earty Areaeey Consec Taetur Adipisrvice Ollwing Ipsum Dolor Consectetur.",
    rating: 4,
  },
  {
    id: 4,
    name: "Bessie Cooper",
    role: "CEO, Traveller",
    image: "https://randomuser.me/api/portraits/women/40.jpg",
    content: "Morem Ipsum Dolor Siterey Amet Mean Earty Areaeey Consec Taetur Adipisrvice Ollwing Ipsum Dolor Consectetur.",
    rating: 4,
  },
  {
    id: 5,
    name: "Ronald Richards",
    role: "CEO, Traveller",
    image: "https://randomuser.me/api/portraits/men/35.jpg",
    content: "Morem Ipsum Dolor Siterey Amet Mean Earty Areaeey Consec Taetur Adipisrvice Ollwing Ipsum Dolor Consectetur.",
    rating: 4,
  },
  {
    id: 6,
    name: "Albert Flores",
    role: "CEO, Traveller",
    image: "https://randomuser.me/api/portraits/men/29.jpg",
    content: "Morem Ipsum Dolor Siterey Amet Mean Earty Areaeey Consec Taetur Adipisrvice Ollwing Ipsum Dolor Consectetur.",
    rating: 4,
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  // Responsive cards per page tracking
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Automatic slideshow scroll behavior (runs every 4 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const maxIndex = testimonials.length - cardsPerPage;
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [cardsPerPage]);

  const maxIndex = testimonials.length - cardsPerPage;
  const dotsCount = maxIndex + 1;

  return (
    <section className="py-24 bg-white overflow-hidden select-none">
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center">
        
        {/* Header Section matching reference mockup */}
        <div className="text-center mb-16 max-w-2xl">
          <span
            className="text-[#3E7C7A] text-2xl md:text-3xl mb-3 block"
            style={{ fontFamily: "var(--font-playball)" }}
          >
            Clients Feedback About Us
          </span>
          <h2 className="text-3xl md:text-[40px] font-extrabold text-gray-900 mb-6 leading-tight">
            See Those Lovely Words From Clients
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            Are You Tired Of The Typical Tourist Destinations And Looking <br className="hidden md:inline" />
            To Step Out Of Your Comfort Zonetravel
          </p>
        </div>

        {/* Carousel Viewport Container */}
        <div className="w-full max-w-5xl relative overflow-hidden py-4">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${activeIndex * (100 / cardsPerPage)}%)`,
            }}
          >
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
              >
                {/* Testimonial Card */}
                <div className="bg-white rounded-3xl p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between h-full shadow-sm">
                  
                  <div>
                    {/* Header: User Profile and Double Quote Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <img
                          src={t.image}
                          alt={t.name}
                          className="w-12 h-12 rounded-full object-cover border border-purple-100"
                        />
                        <div className="text-left">
                          <h4 className="font-extrabold text-gray-900 text-base leading-tight">
                            {t.name}
                          </h4>
                          <p className="text-gray-400 text-xs mt-0.5">
                            {t.role}
                          </p>
                        </div>
                      </div>
                      <Quote className="w-8 h-8 text-[#D97745]/20 transform rotate-180" />
                    </div>

                    {/* Feedback Content Text */}
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 text-left">
                      {t.content}
                    </p>
                  </div>

                  {/* Rating Stars (4 Filled Stars, 1 Empty Star matching crop) */}
                  <div className="flex items-center gap-0.5 mt-auto">
                    {[...Array(5)].map((_, index) => {
                      const isFilled = index < t.rating;
                      return (
                        <Star
                          key={index}
                          size={14}
                          className={
                            isFilled
                              ? "text-[#D97745] fill-[#D97745]"
                              : "text-gray-200 fill-none"
                          }
                        />
                      );
                    })}
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Slide Dots (Bottom pagination indicators) */}
        <div className="flex justify-center gap-2.5 mt-10">
          {[...Array(dotsCount)].map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === activeIndex ? "w-8 bg-[#D97745]" : "w-2.5 bg-[#3E7C7A]/30"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
