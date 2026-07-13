"use client";

import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "James Anderson",
    role: "Adventure Traveler",
    location: "New York, USA",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    content: "Booking with Tourex was the best decision I've ever made. The Maldives trip was absolutely perfect — every detail was taken care of. I'll definitely be back for more adventures!",
    rating: 5,
    trip: "Maldives Island Tour",
  },
  {
    id: 2,
    name: "Sofia Martinez",
    role: "Honeymoon Traveler",
    location: "London, UK",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    content: "Our honeymoon in Santorini was a dream come true. The team was so attentive and made sure everything was perfect. The accommodations were stunning and the service was world-class.",
    rating: 5,
    trip: "Santorini Getaway",
  },
  {
    id: 3,
    name: "David Chen",
    role: "Photographer",
    location: "Sydney, Australia",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
    content: "As a travel photographer, I need destinations that are visually stunning. Tourex delivered beyond my expectations. The Venice tour gave me some of the best shots of my career!",
    rating: 5,
    trip: "Venice Canal Tour",
  },
  {
    id: 4,
    name: "Emma Thompson",
    role: "Solo Explorer",
    location: "Toronto, Canada",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    content: "Traveling solo can be daunting, but the Tourex team made me feel safe and supported every step of the way. The Amalfi Coast was absolutely breathtaking!",
    rating: 5,
    trip: "Amalfi Coast Adventure",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold uppercase tracking-widest text-sm mb-3 block">
            Client Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            See What Our Clients Say
          </h2>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto relative">
          {/* Quote Icon */}
          <div className="absolute -top-8 left-8 text-primary/10">
            <Quote size={120} fill="currentColor" />
          </div>

          <div className="relative bg-gray-50 rounded-3xl p-10 md:p-14 shadow-sm border border-gray-100">
            {/* Stars */}
            <div className="flex items-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
              ))}
              <span className="text-gray-500 text-sm ml-2">({t.trip})</span>
            </div>

            {/* Content */}
            <p className="text-gray-700 text-xl md:text-2xl leading-relaxed italic mb-8 font-medium">
              "{t.content}"
            </p>

            {/* Author */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-16 h-16 rounded-full object-cover ring-4 ring-primary/20"
                />
                <div>
                  <h4 className="font-extrabold text-gray-900 text-lg">{t.name}</h4>
                  <p className="text-primary font-medium text-sm">{t.role}</p>
                  <p className="text-gray-400 text-xs">{t.location}</p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-3">
                <button onClick={prev} className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm">
                  <ChevronLeft size={20} />
                </button>
                <span className="text-sm text-gray-400 font-medium">{current + 1} / {testimonials.length}</span>
                <button onClick={next} className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-hover transition-colors shadow-md">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${i === current ? "w-8 bg-primary" : "w-2 bg-gray-300"}`}
              />
            ))}
          </div>
        </div>

        {/* Mini Cards Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto">
          {testimonials.map((tm, i) => (
            <button
              key={tm.id}
              onClick={() => setCurrent(i)}
              className={`flex items-center gap-3 p-4 rounded-2xl border transition-all text-left ${
                i === current ? "border-primary bg-primary/5 shadow-md" : "border-gray-100 bg-white hover:border-gray-200 hover:shadow-sm"
              }`}
            >
              <img src={tm.image} alt={tm.name} className="w-10 h-10 rounded-full object-cover shrink-0" />
              <div className="overflow-hidden">
                <div className={`font-bold text-sm truncate ${i === current ? "text-primary" : "text-gray-900"}`}>{tm.name}</div>
                <div className="text-gray-400 text-xs truncate">{tm.role}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
