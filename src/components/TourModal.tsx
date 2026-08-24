"use client";

import React, { useState } from "react";
import {
  X,
  MapPin,
  Calendar,
  Users,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export interface TourPackage {
  id: number;
  title: string;
  location: string;
  duration: string;
  rating: number;
  price: number;
  originalPrice?: number | null;
  image: string;
  category: string;
  tag?: string | null;
  tagColor?: string | null;
  spotsLeft?: number;
  nextDeparture?: string;
  hook?: string;
}

interface TourModalProps {
  tour: TourPackage | null;
  isOpen: boolean;
  onClose: () => void;
}

export function TourModal({ tour, isOpen, onClose }: TourModalProps) {
  const [guests, setGuests] = useState(1);
  const [enquirySent, setEnquirySent] = useState(false);
  const [activeTab, setActiveTab] = useState<"overview" | "itinerary" | "inclusions">("overview");

  if (!isOpen || !tour) return null;

  const handleEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setEnquirySent(true);
    setTimeout(() => {
      setEnquirySent(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto select-none">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#0B2A3D]/80 backdrop-blur-md transition-opacity animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden z-10 my-auto animate-in zoom-in-95 duration-200 border border-slate-100 flex flex-col max-h-[90vh]">
        {/* Header Bar */}
        <div className="relative h-64 sm:h-72 w-full shrink-0">
          <img
            src={tour.image}
            alt={tour.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A3D] via-[#0B2A3D]/40 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all z-20"
          >
            <X size={20} />
          </button>

          {/* Tag & Category */}
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="bg-[#0E5A60] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {tour.category} Circle
            </span>
            {tour.spotsLeft && (
              <span className="bg-[#D96C2C] text-white text-xs font-bold px-3 py-1 rounded-full">
                🔥 {tour.spotsLeft} Spots Remaining
              </span>
            )}
          </div>

          {/* Title & Metadata Overlay */}
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex items-center gap-2 text-xs font-semibold text-teal-300 mb-1">
              <MapPin size={14} />
              <span>{tour.location}</span>
              <span>•</span>
              <Calendar size={14} />
              <span>Next Departure: {tour.nextDeparture || "Sep 15, 2026"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-white leading-tight">
              {tour.title}
            </h2>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-100 px-6 bg-[#F7F3EC] shrink-0">
          {[
            { id: "overview", label: "Circle Overview" },
            { id: "itinerary", label: "Day-by-Day Journey" },
            { id: "inclusions", label: "What's Included" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as "overview" | "itinerary" | "inclusions")}
              className={`py-3.5 px-4 font-bold text-xs sm:text-sm transition-colors border-b-2 ${
                activeTab === tab.id
                  ? "border-[#0E5A60] text-[#0E5A60]"
                  : "border-transparent text-slate-500 hover:text-slate-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content Column */}
          <div className="lg:col-span-2 space-y-6 text-left">
            {activeTab === "overview" && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-[#0B2A3D] mb-2">
                    About this Curated Circle
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {tour.hook ||
                      "Join a handpicked group of 10-12 solo travellers for an unforgettable journey. Experience local culture, offbeat hidden spots, and deep connections with fellow travellers who share your passion."}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-[#F7F3EC] border border-slate-200/80">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#0E5A60] text-white flex items-center justify-center shrink-0">
                      <Users size={18} />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 font-medium block">Circle Size</span>
                      <span className="text-sm font-bold text-[#0B2A3D]">Max 12 Travellers</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#D96C2C] text-white flex items-center justify-center shrink-0">
                      <ShieldCheck size={18} />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 font-medium block">Pre-Trip Intro</span>
                      <span className="text-sm font-bold text-[#0B2A3D]">Dedicated Community</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-[#0B2A3D] text-sm">Highlights</h4>
                  <ul className="space-y-2 text-xs text-slate-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-[#0E5A60]" />
                      <span>Dedicated Kokalachi Trip Host throughout the journey</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-[#0E5A60]" />
                      <span>Pre-departure community chat room to meet your circle</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-[#0E5A60]" />
                      <span>Zero planning stress — stay, local transport & select meals covered</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "itinerary" && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[#0B2A3D]">Day-by-Day Journey Arc</h3>
                <div className="space-y-3 relative pl-6 border-l-2 border-[#0E5A60]/30">
                  <div className="relative">
                    <span className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-[#0E5A60] ring-4 ring-white" />
                    <h4 className="font-bold text-sm text-[#0B2A3D]">Day 1: Arrival & Circle Kickoff</h4>
                    <p className="text-xs text-slate-500 mt-1">Welcome dinner, group introductions, and briefing with your Kokalachi Trip Host.</p>
                  </div>
                  <div className="relative pt-3">
                    <span className="absolute -left-[31px] top-3.5 w-4 h-4 rounded-full bg-[#0E5A60] ring-4 ring-white" />
                    <h4 className="font-bold text-sm text-[#0B2A3D]">Day 2-4: Guided Exploration & Hidden Gems</h4>
                    <p className="text-xs text-slate-500 mt-1">Immersive local walks, cultural tastings, and outdoor adventures with your circle.</p>
                  </div>
                  <div className="relative pt-3">
                    <span className="absolute -left-[31px] top-3.5 w-4 h-4 rounded-full bg-[#D96C2C] ring-4 ring-white" />
                    <h4 className="font-bold text-sm text-[#0B2A3D]">Final Day: Farewell Memories & Circle Bond</h4>
                    <p className="text-xs text-slate-500 mt-1">Celebratory breakfast, contact exchange, and departure as lifelong friends.</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "inclusions" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                <div className="p-3 bg-[#F7F3EC] rounded-xl border border-slate-200/80 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#0E5A60] shrink-0" />
                  <span>Boutique Hotel Stay (Twin Sharing)</span>
                </div>
                <div className="p-3 bg-[#F7F3EC] rounded-xl border border-slate-200/80 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#0E5A60] shrink-0" />
                  <span>Daily Breakfast & Welcome Dinners</span>
                </div>
                <div className="p-3 bg-[#F7F3EC] rounded-xl border border-slate-200/80 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#0E5A60] shrink-0" />
                  <span>All Private Local Transfers</span>
                </div>
                <div className="p-3 bg-[#F7F3EC] rounded-xl border border-slate-200/80 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#0E5A60] shrink-0" />
                  <span>Verified English Trip Host</span>
                </div>
              </div>
            )}
          </div>

          {/* Right Action / Enquiry Form Box */}
          <div className="bg-[#F7F3EC] p-5 rounded-2xl border border-slate-200/80 flex flex-col justify-between text-left">
            <div>
              <div className="flex items-baseline justify-between mb-4 pb-3 border-b border-slate-200">
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Starting From</span>
                  <span className="text-2xl font-extrabold text-[#0B2A3D]">${tour.price}</span>
                  <span className="text-xs text-slate-500"> / person</span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-[#0E5A60] font-bold bg-[#0E5A60]/10 px-2 py-0.5 rounded">
                    Vetted Group
                  </span>
                </div>
              </div>

              {enquirySent ? (
                <div className="p-6 bg-[#0E5A60] text-white rounded-2xl text-center animate-in zoom-in-95">
                  <Sparkles className="w-10 h-10 mx-auto mb-2 text-[#D96C2C]" />
                  <h4 className="font-bold text-base">You&apos;re Interested!</h4>
                  <p className="text-xs text-teal-100 mt-1">
                    Our trip host will reach out shortly to introduce your circle!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleEnquiry} className="space-y-3">
                  <div>
                    <label className="text-xs font-bold text-[#0B2A3D] block mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Mercer"
                      className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0E5A60] outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-[#0B2A3D] block mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@example.com"
                      className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0E5A60] outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-[#0B2A3D] block mb-1">
                      Number of Travellers
                    </label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0E5A60] outline-none"
                    >
                      <option value={1}>1 Solo Explorer</option>
                      <option value={2}>2 Friends / Pair</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#0B2A3D] hover:bg-[#061C29] text-white font-medium text-sm rounded-full shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 mt-4 cursor-pointer"
                  >
                    <span>Request To Join Circle</span>
                    <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>

            <p className="text-[10px] text-slate-400 text-center mt-4">
              🔒 No payment required now. Meet your host & review circle details first.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
