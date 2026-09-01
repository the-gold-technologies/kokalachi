"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  MapPin,
  Calendar,
  Users,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  X,
  ChevronDown,
  Clock,
  Compass,
  Coffee,
  Heart,
  Mountain,
  Bed,
  Minus,
  Plus,
  Tag
} from "lucide-react";
import { tripCards, TourPackage } from "@/data/trips";
import { TripCardItem } from "@/components/TripCardItem";

function BookingWidget({ tour }: { tour: TourPackage }) {
  const [guests, setGuests] = useState(1);
  const [roomType, setRoomType] = useState<"double" | "private">("double");

  // Determine base prices
  const basePrice = typeof tour.price === "number" ? tour.price : 49999;
  const originalPrice = tour.originalPrice || basePrice + 4000;

  const doublePrice = basePrice;
  const privatePrice = basePrice + 13000; // E.g., 62,999

  const selectedPrice = roomType === "double" ? doublePrice : privatePrice;
  const roomName = roomType === "double" ? "Double Sharing Room" : "Private Room";

  // Calculations
  const roomTotal = selectedPrice * guests;
  const gst = roomTotal * 0.05;
  const tcs = roomTotal * 0.02;
  const gatewayFee = roomTotal * 0.03;
  const finalTotal = roomTotal + gst + tcs + gatewayFee;

  return (
    <div className="flex flex-col flex-1 min-h-0 h-full justify-between gap-2 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      {/* Room Type Selection */}
      <div className="flex flex-col gap-1.5 flex-shrink-0">
        <h4 className="text-sm font-bold text-[#0E5A60] flex items-center gap-1.5 mb-1">
          <Bed size={15} className="text-[#0E5A60]" /> Room Type
        </h4>
        <div className="space-y-2">
          {/* Double Room Option */}
          <label className={`flex items-center justify-between p-3 rounded-xl cursor-pointer border-[2px] transition-all ${roomType === "double" ? "border-[#D96C2C] bg-[#D96C2C]/10" : "border-slate-100 bg-white hover:border-slate-200"
            }`}>
            <div className="flex items-center gap-2.5">
              <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${roomType === "double" ? "border-[#D96C2C]" : "border-slate-300"
                }`}>
                {roomType === "double" && <div className="w-2 h-2 rounded-full bg-[#D96C2C]" />}
              </div>
              <span className="font-bold text-sm text-[#0E5A60]">Double Sharing</span>
            </div>
            <div className="text-right flex items-center gap-2">
              <span className="text-[11px] text-slate-400 line-through">₹{originalPrice.toLocaleString()}</span>
              <span className="font-bold text-sm text-[#0E5A60]">₹{doublePrice.toLocaleString()}</span>
            </div>
            <input type="radio" className="hidden" checked={roomType === "double"} onChange={() => setRoomType("double")} />
          </label>

          {/* Private Room Option */}
          <label className={`flex items-center justify-between p-3 rounded-xl cursor-pointer border-[2px] transition-all ${roomType === "private" ? "border-[#D96C2C] bg-[#D96C2C]/10" : "border-slate-100 bg-white hover:border-slate-200"
            }`}>
            <div className="flex items-center gap-2.5">
              <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${roomType === "private" ? "border-[#D96C2C]" : "border-slate-300"
                }`}>
                {roomType === "private" && <div className="w-2 h-2 rounded-full bg-[#D96C2C]" />}
              </div>
              <span className="font-bold text-sm text-[#0E5A60]">Private Room</span>
            </div>
            <div className="text-right">
              <span className="font-bold text-sm text-[#0E5A60]">₹{privatePrice.toLocaleString()}</span>
            </div>
            <input type="radio" className="hidden" checked={roomType === "private"} onChange={() => setRoomType("private")} />
          </label>
        </div>
      </div>

      {/* Guests Counter */}
      <div className="flex items-center justify-between py-2 flex-shrink-0">
        <h4 className="text-sm font-bold text-[#0E5A60] flex items-center gap-1.5">
          <Users size={15} className="text-[#0E5A60]" /> Guests
        </h4>
        <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-full px-2 py-1">
          <button
            type="button"
            onClick={() => setGuests(Math.max(1, guests - 1))}
            className="w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-sm border border-slate-100 hover:bg-slate-100 text-slate-600 transition-colors"
          >
            <Minus size={12} />
          </button>
          <span className="font-bold text-sm text-[#0E5A60] w-3 text-center">{guests}</span>
          <button
            type="button"
            onClick={() => setGuests(Math.min(10, guests + 1))}
            className="w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-sm border border-slate-100 hover:bg-slate-100 text-slate-600 transition-colors"
          >
            <Plus size={12} />
          </button>
        </div>
      </div>

      {/* Calculation Breakdown Box */}
      <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 flex flex-col flex-1 justify-between min-h-[220px]">
        <div>
          <div className="mb-3">
            <div className="flex items-center justify-between">
              <span className="text-[13px] font-medium text-slate-600">{roomName} {guests} x ₹{selectedPrice.toLocaleString()}</span>
              <span className="font-bold text-[13px] text-[#0E5A60]">₹{roomTotal.toLocaleString()}</span>
            </div>
            {roomType === "double" && (
              <p className="text-[10px] text-[#D96C2C] font-medium flex items-center gap-1 mt-0.5">
                <Tag size={10} />
                Save ₹{((originalPrice - basePrice) * guests).toLocaleString()} total (Regular ₹{originalPrice.toLocaleString()}/person)
              </p>
            )}
          </div>

          {/* Taxes & Fees */}
          <div className="space-y-1.5">
            <h5 className="text-[9px] font-bold uppercase tracking-widest text-slate-500 mb-1.5">Taxes & Fees</h5>
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-500 font-medium">GST 5%</span>
              <span className="font-medium text-slate-700">₹{gst.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-500 font-medium">TCS 2%</span>
              <span className="font-medium text-slate-700">₹{tcs.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-500 font-medium">Gateway 3%</span>
              <span className="font-medium text-slate-700">₹{gatewayFee.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
            </div>
          </div>
        </div>

        {/* Total Price & CTA */}
        <div className="pt-4 border-t border-slate-200 mt-3 flex-shrink-0">
          <div className="flex items-center justify-between mb-4">
            <span className="font-bold text-base text-[#0E5A60]">Total</span>
            <span className="font-black text-xl text-[#0E5A60]">₹{finalTotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
          </div>

          <button className="w-full py-3 bg-[#0E5A60] hover:bg-[#0E5A60] text-white font-bold text-[13px] rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group">
            <span>Book Now</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function JourneyPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = React.use(params);
  const trip = tripCards.find((t) => t.slug === resolvedParams.id);

  const [guests, setGuests] = useState(1);
  const [enquirySent, setEnquirySent] = useState(false);
  const [activeDetailTab, setActiveDetailTab] = useState<"inclusions" | "essentials" | "faq">("inclusions");
  const [scrolled, setScrolled] = useState(false);
  const [isOverviewExpanded, setIsOverviewExpanded] = useState(false);
  const [expandedDays, setExpandedDays] = useState<number[]>([0]);

  const toggleDay = (idx: number) => {
    setExpandedDays(prev =>
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!trip) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAF4EC]">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#0E5A60] mb-4">
            Journey not found
          </h1>
          <Link
            href="/"
            className="text-[#0E5A60] hover:underline font-medium inline-flex items-center gap-2"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const tour = trip.tourPackage;

  const handleEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setEnquirySent(true);
    setTimeout(() => {
      setEnquirySent(false);
    }, 3500);
  };

  const otherTrips = tripCards.filter(t => t.id !== trip.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 selection:bg-[#0E5A60]/20">

      {/* Hero Section */}
      <div className="relative h-[70vh] min-h-[400px] w-full">
        <img
          src={(tour.gallery && tour.gallery.length > 0) ? tour.gallery[0] : tour.image}
          alt={tour.title}
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A3D] via-[#0B2A3D]/30 to-black/30" />

        <div className="absolute inset-0 flex items-end pb-10 sm:pb-20">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="max-w-6xl animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="bg-[#0E5A60] text-white text-xs font-medium px-4 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                  {tour.category}
                </span>
                {tour.spotsLeft && (
                  <span className="bg-[#D96C2C] text-white text-xs font-medium px-4 py-1.5 rounded-full shadow-sm flex items-center gap-1">
                    <Sparkles size={12} /> {tour.spotsLeft} Spots Remaining
                  </span>
                )}
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold font-serif text-white leading-[1.1] mb-2">
                {tour.title}
              </h1>
              {tour.subtitle && (
                <h2 className="text-md sm:text-lg lg:text-xl font-sans text-white/95 font-normal tracking-wide mb-6 max-w-4xl leading-relaxed italic">
                  {tour.subtitle}
                </h2>
              )}

              <div className="flex flex-wrap items-center gap-6 text-sm sm:text-base font-medium text-slate-200">
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-teal-400" />
                  <span>{tour.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} className="text-teal-400" />
                  <span>{tour.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-teal-400" />
                  <span>Next: {tour.nextDeparture || "Upcoming"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 md:px-8 max-w-7xl py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8">

          {/* Left Column: Flowing Content */}
          <div className="lg:col-span-8 space-y-12">

            {/* Tour Snapshot Section */}
            <section className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-serif text-[#0E5A60] leading-tight">
                Tour Snapshot
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100">
                    <Calendar size={18} className="text-[#0E5A60]" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Departure</span>
                    <span className="text-[13px] font-bold text-[#0E5A60]">{tour.nextDeparture || "Upcoming"}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100">
                    <Clock size={18} className="text-[#0E5A60]" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Duration</span>
                    <span className="text-[13px] font-bold text-[#0E5A60]">{tour.duration}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100">
                    <MapPin size={18} className="text-[#0E5A60]" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Destination</span>
                    <span className="text-[13px] font-bold text-[#0E5A60]">{tour.location}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100">
                    <Compass size={18} className="text-[#0E5A60]" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Trip Type</span>
                    <span className="text-[13px] font-bold text-[#0E5A60]">{tour.category}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100">
                    <Users size={18} className="text-[#0E5A60]" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Group Size</span>
                    <span className="text-[13px] font-bold text-[#0E5A60]">{tour.tag || "Intimate Group"}</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Overview Section */}
            <section className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-serif text-[#0E5A60] leading-tight">
                Overview
              </h3>

              <div className="prose prose-base text-slate-600 font-sans max-w-none leading-relaxed">
                <div className={`relative overflow-hidden transition-all duration-500 ${isOverviewExpanded ? "max-h-[2000px]" : "max-h-[350px]"}`}>
                  {tour.overview ? (
                    <div className="space-y-3">
                      {tour.overview.map((para, idx) => {
                        const isBullet = para.trim().startsWith("•") || para.trim().startsWith("-");
                        const content = para.replace(/^[•-]\s*/, "");

                        if (isBullet) {
                          return (
                            <div key={idx} className="flex items-start gap-3 text-[14px] pl-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-slate-800 shrink-0 mt-2" />
                              <span className="leading-relaxed text-slate-700">{content}</span>
                            </div>
                          );
                        }
                        return (
                          <p key={idx} className={idx === 0 ? "text-[15px] font-medium text-slate-800 leading-relaxed mb-4" : "text-[14px] text-slate-700"}>
                            {para}
                          </p>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="text-[15px] font-medium text-slate-800 leading-relaxed">
                      {tour.hook}
                    </p>
                  )}

                  {/* Highlights Grid */}
                  {tour.highlights && tour.highlights.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 pb-2 mt-4 border-t border-slate-100">
                      {tour.highlights.map((highlight, idx) => {
                        // Map string icon names to Lucide components
                        const IconMap: Record<string, React.ElementType> = {
                          Users, ShieldCheck, Compass, Heart, CheckCircle2
                        };
                        const Icon = IconMap[highlight.icon] || CheckCircle2;

                        return (
                          <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-[#F7F3EC] border border-[#F0E8D9] hover:shadow-sm transition-shadow">
                            <div className={`w-10 h-10 rounded-full text-white flex items-center justify-center shrink-0 ${idx % 2 === 0 ? 'bg-[#0E5A60]' : 'bg-[#D96C2C]'}`}>
                              <Icon size={18} />
                            </div>
                            <div>
                              <h4 className="text-[13px] font-bold text-[#0E5A60] mb-0.5">{highlight.title}</h4>
                              <p className="text-[12px] text-slate-600">{highlight.description}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Gradient Fade for collapsed state */}
                  {!isOverviewExpanded && (
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                  )}
                </div>

                <button
                  onClick={() => setIsOverviewExpanded(!isOverviewExpanded)}
                  className="text-[#D96C2C] font-bold text-[14px] mt-4 flex items-center gap-1 hover:text-[#C85A24] transition-colors"
                >
                  {isOverviewExpanded ? "Read less" : "Read more"}
                  <svg className={`w-4 h-4 transition-transform duration-300 ${isOverviewExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </section>

            {/* Itinerary Section (Visual Timeline) */}
            <section className="space-y-6 relative">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C85A24] mb-1">The Arc</h2>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#0E5A60] leading-tight">
                Day-by-Day Journey
              </h3>

              <div className="space-y-6 ml-2 sm:ml-4">
                {tour.itinerary ? (
                  tour.itinerary.map((day, idx) => {
                    const isExpanded = expandedDays.includes(idx);

                    return (
                      <div key={idx} className="relative group">
                        {/* Timeline Node - "DAY 01" Badge */}
                        <div className={`absolute left-0 top-3 w-10 h-10 rounded-full bg-white border-[2px] flex flex-col items-center justify-center z-10 shadow-sm transition-colors duration-300 ${isExpanded ? 'border-[#0E5A60]' : 'border-[#D96C2C]'}`}>
                          <span className={`text-[7px] font-bold uppercase tracking-widest leading-none mt-0.5 ${isExpanded ? 'text-[#0E5A60]' : 'text-[#D96C2C]'}`}>Day</span>
                          <span className={`text-[12px] font-black leading-none mb-0.5 ${isExpanded ? 'text-[#0E5A60]' : 'text-[#D96C2C]'}`}>{String(idx + 1).padStart(2, '0')}</span>
                        </div>

                        {/* Segment line (only for non-last items) */}
                        {idx !== tour.itinerary!.length - 1 && (
                          <div className="absolute left-[19px] top-[52px] -bottom-[36px] w-[2px] bg-[#0E5A60]/20 z-0" />
                        )}

                        {/* Accordion Header Card */}
                        <div className="pl-14 sm:pl-16">
                          <div
                            onClick={() => toggleDay(idx)}
                            className={`bg-white rounded-2xl border ${isExpanded ? 'border-[#0E5A60]/30 shadow-md' : 'border-slate-100 shadow-sm'} p-2 sm:p-2.5 flex items-center justify-between cursor-pointer hover:border-[#0E5A60]/50 hover:shadow-md transition-all duration-300`}
                          >
                            <div className="flex items-center gap-3 sm:gap-4">
                              {/* Small Thumbnail Image */}
                              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden shrink-0 border border-slate-100 relative">
                                <img src={tour.image} alt={day.title} className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: `center ${idx * 25}%` }} />
                              </div>

                              <div>
                                <div className="flex items-center gap-1.5 mb-0.5">
                                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{day.day}</span>
                                  <span className="w-1 h-1 rounded-full bg-slate-300" />
                                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{trip.destination}</span>
                                </div>
                                <h4 className="font-semibold text-[13px] sm:text-[15px] text-[#0E5A60] leading-tight group-hover:text-[#0E5A60] transition-colors">
                                  {day.title}
                                </h4>
                              </div>
                            </div>

                            {/* Chevron Down Button */}
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 mr-2 transition-colors duration-300 ${isExpanded ? 'bg-[#0E5A60]/10 text-[#0E5A60]' : 'bg-slate-50 text-slate-400 group-hover:bg-[#0E5A60]/10 group-hover:text-[#0E5A60]'}`}>
                              <ChevronDown size={16} className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                            </div>
                          </div>

                          {/* Accordion Content */}
                          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[1000px] opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0'}`}>
                            <div className="bg-[#FAF4EC] p-4 sm:p-5 rounded-2xl border border-[#F0E8D9] space-y-3 shadow-inner">
                              <div>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">The Journey</p>
                                <p className="text-slate-700 leading-relaxed text-[13px]">
                                  {day.journey}
                                </p>
                              </div>
                              <div className="pt-3 border-t border-[#E8DCC8]">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-[#D96C2C] mb-1.5">Community Moment</p>
                                <p className="text-slate-600 leading-relaxed italic text-[12px]">
                                  {day.community}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })
                ) : (
                  <p className="text-slate-500 italic">Detailed itinerary coming soon.</p>
                )}
              </div>
            </section>

            {/* The Logistics (Tabs) - CRO Focused: Hiding dense info until requested */}
            <section className="space-y-6 pt-6 border-t border-slate-100">
              <div>
                <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C85A24] mb-1">The Details</h2>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#0E5A60] leading-tight">
                  Need to Know
                </h3>
              </div>

              <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
                <div className="flex border-b border-slate-200 bg-[#F7F3EC] overflow-x-auto scrollbar-hide">
                  {[
                    { id: "inclusions", label: "Inclusions & Exclusions" },
                    { id: "essentials", label: "Trip Essentials" },
                    { id: "faq", label: "FAQs" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveDetailTab(tab.id as any)}
                      className={`flex-1 py-4 px-5 font-bold text-[13px] whitespace-nowrap transition-colors border-b-[3px] ${activeDetailTab === tab.id
                        ? "border-[#0E5A60] text-[#0E5A60] bg-white"
                        : "border-transparent text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                        }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <div className="p-5 sm:p-8 min-h-[300px]">
                  {activeDetailTab === "inclusions" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-base font-bold text-[#0E5A60] mb-4 flex items-center gap-2">
                          <CheckCircle2 size={18} className="text-[#0E5A60]" /> What's Included
                        </h4>
                        <ul className="space-y-3">
                          {tour.inclusions ? tour.inclusions.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-slate-600 text-[14px]">
                              <span className="w-1 h-1 rounded-full bg-[#0E5A60] shrink-0 mt-2" />
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          )) : <p className="text-slate-500 text-[14px]">Listed inclusions will appear here.</p>}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-[#0E5A60] mb-4 flex items-center gap-2">
                          <X size={18} className="text-red-500" /> What's Not Included
                        </h4>
                        <ul className="space-y-3">
                          {tour.exclusions ? tour.exclusions.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-slate-600 text-[14px]">
                              <span className="w-1 h-1 rounded-full bg-red-400 shrink-0 mt-2" />
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          )) : <p className="text-slate-500 text-[14px]">Standard exclusions apply.</p>}
                        </ul>
                      </div>
                    </div>
                  )}

                  {activeDetailTab === "essentials" && (
                    <div className="space-y-8">
                      {tour.meals && (
                        <div>
                          <h4 className="text-base font-bold text-[#0E5A60] mb-3">Meals</h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {tour.meals.map((meal, idx) => (
                              <li key={idx} className="p-3 bg-slate-50 rounded-xl text-slate-600 text-[13px] leading-relaxed border border-slate-100">
                                {meal}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {tour.whatToPack && (
                        <div>
                          <h4 className="text-base font-bold text-[#0E5A60] mb-3">What To Pack</h4>
                          <ul className="list-disc pl-5 space-y-1.5 text-slate-600 text-[14px]">
                            {tour.whatToPack.map((item, idx) => (
                              <li key={idx} className="leading-relaxed pl-1">{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {tour.weather && (
                        <div>
                          <h4 className="text-base font-bold text-[#0E5A60] mb-3">Weather & Climate</h4>
                          <div className="bg-[#FAF4EC] p-5 rounded-2xl border border-[#F0E8D9]">
                            <ul className="space-y-2 text-slate-700 text-[14px]">
                              {tour.weather.map((w, idx) => (
                                <li key={idx} className="leading-relaxed flex items-start gap-2">
                                  <span className="text-[#C85A24] mt-0.5">☀️</span> {w}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {activeDetailTab === "faq" && (
                    <div className="space-y-5">
                      {tour.faqs ? (
                        tour.faqs.map((faq, idx) => (
                          <div key={idx} className="border-b border-slate-100 pb-5 last:border-0 last:pb-0">
                            <h4 className="font-bold text-base text-[#0E5A60] mb-2">{faq.question}</h4>
                            <p className="text-slate-600 text-[14px] leading-relaxed">{faq.answer}</p>
                          </div>
                        ))
                      ) : (
                        <p className="text-slate-500">No FAQs available yet.</p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Sticky Booking Widget */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 bg-white p-4 rounded-[32px] border border-slate-200 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] flex flex-col max-h-[calc(100vh-100px)] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">

              {/* Top Summary Info */}
              <div className="bg-slate-50 px-3 py-3 rounded-2xl mb-4 flex items-center justify-between border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm border border-slate-100">
                    <Calendar size={14} className="text-[#0E5A60]" />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">Dates</p>
                    <p className="text-sm font-bold text-[#0E5A60]">{tour.nextDeparture || "Upcoming"}</p>
                  </div>
                </div>

                <div className="h-8 w-[1px] bg-slate-200"></div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm border border-slate-100">
                    <Clock size={14} className="text-[#0E5A60]" />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">Duration</p>
                    <p className="text-sm font-bold text-[#0E5A60]">{tour.duration}</p>
                  </div>
                </div>
              </div>

              {/* Booking Form State & Logic */}
              <BookingWidget tour={tour} />

            </div>
          </div>

        </div>
      </div>

      {/* Explore More Journeys Section */}
      <div className="py-16 lg:py-24 mt-12 border-t border-[#0E5A60]/10">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="mb-10 lg:mb-14">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-[#0E5A60]">
              Explore Other Journeys
            </h2>
            <p className="text-slate-600 mt-3 text-lg font-sans">
              Find your next adventure with these handcrafted experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {otherTrips.map(card => (
              <div key={card.id} className="h-full">
                <TripCardItem card={card} />
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
