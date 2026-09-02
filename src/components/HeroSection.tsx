"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  MapPin,
  Calendar as CalendarIcon,
  Users,
  Search,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Check,
} from "lucide-react";

export function HeroSection() {
  const router = useRouter();

  // Search filter states
  const [destination, setDestination] = useState("");
  const [selectedDates, setSelectedDates] = useState("Select dates");
  const [selectedTravellers, setSelectedTravellers] = useState("1 Traveller");

  // Dropdown toggles
  const [isDestOpen, setIsDestOpen] = useState(false);
  const [isDatesOpen, setIsDatesOpen] = useState(false);
  const [isTravellersOpen, setIsTravellersOpen] = useState(false);

  // Interactive Calendar state
  const [calMonth, setCalMonth] = useState(8); // September (0-indexed)
  const [calYear, setCalYear] = useState(2026);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(e.target as Node)
      ) {
        setIsDestOpen(false);
        setIsDatesOpen(false);
        setIsTravellersOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const popularDestinations = [
    "Himachal Pradesh",
    "Uttarakhand",
    "Ladakh",
    "Kerala",
    "Rajasthan",
    "Kashmir",
    "Meghalaya",
    "Spiti Valley",
  ];

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const quickDatePresets = [
    "Flexible Dates",
    "Next 30 Days",
    "Upcoming Weekends",
    "Autumn 2026",
  ];

  const travellerOptions = [
    { label: "1 Traveller", desc: "Solo explorer joining a group" },
    { label: "2 Travellers", desc: "Travelling with a friend / partner" },
    { label: "3+ Travellers", desc: "Small group of friends" },
  ];

  // Calendar helpers
  const getDaysInMonth = (year: number, month: number) =>
    new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year: number, month: number) =>
    new Date(year, month, 1).getDay();

  const handlePrevMonth = () => {
    if (calMonth === 0) {
      setCalMonth(11);
      setCalYear(calYear - 1);
    } else {
      setCalMonth(calMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (calMonth === 11) {
      setCalMonth(0);
      setCalYear(calYear + 1);
    } else {
      setCalMonth(calMonth + 1);
    }
  };

  const handleDateSelect = (day: number) => {
    setSelectedDay(day);
    const formatted = `${monthNames[calMonth].slice(0, 3)} ${day}, ${calYear}`;
    setSelectedDates(formatted);
    setIsDatesOpen(false);
  };

  const handlePresetSelect = (preset: string) => {
    setSelectedDay(null);
    setSelectedDates(preset);
    setIsDatesOpen(false);
  };

  const handleSearch = () => {
    const section = document.getElementById("upcoming-journeys");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/journeys");
    }
  };

  const handleTagClick = (dest: string) => {
    setDestination(dest);
    const section = document.getElementById("upcoming-journeys");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-start pt-28 pb-24 lg:pt-40 lg:pb-16 select-none"
    >
      {/* Background Image Container with Overflow Hidden */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/hero_bg.png"
          alt="Friends enjoying sunrise and mountains together"
          className="w-full h-full object-cover object-center"
        />

        {/* Soft Left-Side Backdrop Blur with Feathered Fade */}
        <div className="absolute inset-0 w-full lg:w-[45%] backdrop-blur-[1px] [-webkit-mask-image:linear-gradient(to_right,black_45%,transparent_100%)] [mask-image:linear-gradient(to_right,black_45%,transparent_100%)] bg-gradient-to-r from-black/35 via-black/15 to-transparent" />
      </div>

      {/* Hero Main Content Container */}
      <div className="container mx-auto px-6 md:px-12 lg:px-30 z-10 relative">
        <div className="max-w-[780px] text-left space-y-4 md:space-y-7 2xl:space-y-7">
          
          {/* Top Category Tagline */}
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/85 block font-montserrat">
            FOR MUSAFIRS WHO WERE ONLY EVER RESTING
          </span>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[64px] font-normal text-white leading-[1.12] tracking-tight font-serif">
            Find your circle. <br />
            Find your next{" "}
            <span className="italic font-serif text-[#F3B748]">
              journey.
            </span>
          </h1>

          {/* Subtitle Paragraph */}
          <div className="space-y-0.5 text-white/90 text-xs sm:text-sm md:text-base font-normal leading-relaxed font-sans max-w-xl">
            <p>Curated group trips for solo travellers.</p>
            <p>Real people. Real stories. Real connections.</p>
          </div>

          {/* Spacious Search & Booking Filter Card */}
          <div
            ref={searchContainerRef}
            className="bg-white rounded-2xl md:rounded-2xl p-2 shadow-[0_25px_60px_rgba(0,0,0,0.35)] border border-white/40 max-w-[880px] w-full flex flex-col md:flex-row items-stretch md:items-center relative z-30 font-sans"
          >
            {/* Field 1: Where to? (Generous Width for Full Text Visibility) */}
            <div className="relative flex-[1.35] min-w-[200px]">
              <div
                onClick={() => {
                  setIsDestOpen(!isDestOpen);
                  setIsDatesOpen(false);
                  setIsTravellersOpen(false);
                }}
                className="flex items-center gap-3 pl-1 py-2 hover:bg-slate-50/90 rounded-xl md:rounded-full transition-colors cursor-pointer text-left"
              >
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-slate-700" />
                </div>
                <div className="flex flex-col flex-1 min-w-0 pr-1">
                  <span className="text-[10.5px] font-bold text-slate-500 uppercase tracking-wider">
                    Where to?
                  </span>
                  <input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="Search destinations"
                    className="text-xs sm:text-sm font-semibold text-slate-800 placeholder:text-slate-400 placeholder:font-normal focus:outline-none bg-transparent w-full cursor-pointer"
                  />
                </div>
              </div>

              {/* Destination Dropdown — Clean, Fully Visible, No Ugly Scrollbar */}
              {isDestOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.25)] border border-slate-100 p-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="text-[10.5px] font-bold text-slate-400 uppercase tracking-wider px-2.5 py-1 mb-1">
                    Popular Destinations
                  </div>
                  <div className="grid grid-cols-1 gap-0.5">
                    {popularDestinations.map((dest) => (
                      <button
                        key={dest}
                        type="button"
                        onClick={() => {
                          setDestination(dest);
                          setIsDestOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 text-xs font-medium rounded-xl transition-colors text-left ${
                          destination === dest
                            ? "bg-[#0E5A60]/10 text-[#0E5A60] font-semibold"
                            : "text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span>{dest}</span>
                        </span>
                        {destination === dest && (
                          <Check className="w-3.5 h-3.5 text-[#0E5A60] shrink-0" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Vertical Divider */}
            <div className="hidden md:block w-px h-8 bg-slate-200 mx-0.5" />

            {/* Field 2: When? (Interactive Calendar Picker) */}
            <div className="relative flex-[1.15] min-w-[175px]">
              <div
                onClick={() => {
                  setIsDatesOpen(!isDatesOpen);
                  setIsDestOpen(false);
                  setIsTravellersOpen(false);
                }}
                className="flex items-center justify-between gap-2 px-3.5 py-2 hover:bg-slate-50/90 rounded-xl md:rounded-full transition-colors cursor-pointer text-left"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                    <CalendarIcon className="w-4 h-4 text-slate-700" />
                  </div>
                  <div className="flex flex-col min-w-0 pr-1">
                    <span className="text-[10.5px] font-bold text-slate-500 uppercase tracking-wider">
                      When?
                    </span>
                    <span
                      className={`text-xs sm:text-sm font-normal truncate ${
                        selectedDates === "Select dates"
                          ? "text-slate-400 font-normal"
                          : "text-slate-800"
                      }`}
                    >
                      {selectedDates}
                    </span>
                  </div>
                </div>
                <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
              </div>

              {/* Interactive Calendar Popover — Beautiful, Full View, No Scrollbar */}
              {isDatesOpen && (
                <div className="absolute top-full left-0 md:-left-10 mt-2 w-[310px] bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.25)] border border-slate-100 p-3.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  
                  {/* Quick Preset Buttons */}
                  <div className="flex flex-wrap gap-1 mb-3 pb-2.5 border-b border-slate-100">
                    {quickDatePresets.map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => handlePresetSelect(preset)}
                        className={`text-[11px] font-medium px-2.5 py-1 rounded-full transition-colors ${
                          selectedDates === preset
                            ? "bg-[#0E5A60] text-white"
                            : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                        }`}
                      >
                        {preset}
                      </button>
                    ))}
                  </div>

                  {/* Month Navigation */}
                  <div className="flex items-center justify-between mb-2.5 px-1">
                    <span className="text-xs font-bold text-slate-800">
                      {monthNames[calMonth]} {calYear}
                    </span>
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={handlePrevMonth}
                        className="w-6 h-6 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-600 transition-colors"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={handleNextMonth}
                        className="w-6 h-6 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-600 transition-colors"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Day Names Header */}
                  <div className="grid grid-cols-7 gap-1 text-center mb-1">
                    {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                      <span
                        key={day}
                        className="text-[10px] font-semibold text-slate-400 py-0.5"
                      >
                        {day}
                      </span>
                    ))}
                  </div>

                  {/* Calendar Days Grid */}
                  <div className="grid grid-cols-7 gap-1 text-center">
                    {/* Empty padding days before the 1st */}
                    {Array.from({
                      length: getFirstDayOfMonth(calYear, calMonth),
                    }).map((_, i) => (
                      <div key={`empty-${i}`} className="w-8 h-8" />
                    ))}

                    {/* Days of Month */}
                    {Array.from({
                      length: getDaysInMonth(calYear, calMonth),
                    }).map((_, i) => {
                      const dayNum = i + 1;
                      const isSelected = selectedDay === dayNum;
                      return (
                        <button
                          key={`day-${dayNum}`}
                          type="button"
                          onClick={() => handleDateSelect(dayNum)}
                          className={`w-8 h-8 rounded-full text-xs font-medium flex items-center justify-center transition-all ${
                            isSelected
                              ? "bg-[#0E5A60] text-white font-bold shadow-sm scale-105"
                              : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                          }`}
                        >
                          {dayNum}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Vertical Divider */}
            <div className="hidden md:block w-px h-8 bg-slate-200 mx-0.5" />

            {/* Field 3: Travellers */}
            <div className="relative flex-[1.1] min-w-[165px]">
              <div
                onClick={() => {
                  setIsTravellersOpen(!isTravellersOpen);
                  setIsDestOpen(false);
                  setIsDatesOpen(false);
                }}
                className="flex items-center justify-between gap-2 px-3.5 py-2 hover:bg-slate-50/90 rounded-xl md:rounded-full transition-colors cursor-pointer text-left"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                    <Users className="w-4 h-4 text-slate-700" />
                  </div>
                  <div className="flex flex-col min-w-0 pr-1">
                    <span className="text-[10.5px] font-bold text-slate-500 uppercase tracking-wider">
                      Travellers
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 truncate">
                      {selectedTravellers}
                    </span>
                  </div>
                </div>
                <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
              </div>

              {/* Travellers Dropdown — Clean, Fully Visible */}
              {isTravellersOpen && (
                <div className="absolute top-full left-0 md:-left-8 mt-2 w-72 bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.25)] border border-slate-100 p-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="text-[10.5px] font-bold text-slate-400 uppercase tracking-wider px-2.5 py-1 mb-1">
                    Group Size
                  </div>
                  <div className="space-y-1">
                    {travellerOptions.map((opt) => (
                      <button
                        key={opt.label}
                        type="button"
                        onClick={() => {
                          setSelectedTravellers(opt.label);
                          setIsTravellersOpen(false);
                        }}
                        className={`w-full flex flex-col px-3 py-2 rounded-xl transition-colors text-left ${
                          selectedTravellers === opt.label
                            ? "bg-[#0E5A60]/10 text-[#0E5A60]"
                            : "text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        <div className="flex items-center justify-between w-full">
                          <span className="text-xs font-semibold">{opt.label}</span>
                          {selectedTravellers === opt.label && (
                            <Check className="w-3.5 h-3.5 text-[#0E5A60]" />
                          )}
                        </div>
                        <span className="text-[10px] text-slate-500">{opt.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
            </div>

            {/* Search CTA Button */}
            <button
              type="button"
              onClick={handleSearch}
              className="bg-[#153448] hover:bg-[#0B2A3D] text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl md:rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer shrink-0 font-sans mt-2 md:mt-0"
            >
              <Search className="w-4 h-4 text-white" />
              <span>SEARCH TRIPS</span>
            </button>
          </div>

          {/* Popular Searches Quick Tags */}
          <div className="flex flex-wrap items-center gap-2 pt-0.5 font-sans">
            <span className="text-xs sm:text-[13px] font-normal text-white/80 mr-1">
              Popular Searches:
            </span>
            {["Himachal Pradesh", "Uttarakhand", "Ladakh", "Kerala", "Rajasthan"].map(
              (tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => handleTagClick(tag)}
                  className="px-3.5 py-1.5 rounded-full text-xs font-medium text-white/90 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/50 backdrop-blur-md transition-all cursor-pointer hover:scale-105"
                >
                  {tag}
                </button>
              )
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
