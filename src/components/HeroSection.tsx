"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";
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
import { TitleUnderline } from "@/components/ui/TitleUnderline";
import type { HeroContent } from "@/types/cms";
import type { TripCardData } from "@/data/trips";
import { datesFromSelection, destinationSuggestions, searchTarget } from "@/lib/tripSearch";
import type { HeadingTag } from "@/lib/content";

// Today in India as "YYYY-MM-DD" (trip dates are Indian dates)
const todayIST = () => new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Kolkata" }).format(new Date());

export function HeroSection({
  content,
  trips,
  headingTag: Heading = "h1",
}: {
  content: HeroContent;
  trips: TripCardData[]; // for the search: where it leads, and which destinations to suggest
  headingTag?: HeadingTag;
}) {
  const router = useRouter();

  // Search filter states
  const [destination, setDestination] = useState("");
  const [selectedDates, setSelectedDates] = useState("Select dates");
  const [selectedTravellers, setSelectedTravellers] = useState("1 Traveller");

  // Dropdown toggles
  const [isDestOpen, setIsDestOpen] = useState(false);
  const [isDatesOpen, setIsDatesOpen] = useState(false);
  const [isTravellersOpen, setIsTravellersOpen] = useState(false);

  // Interactive Calendar state: opens on the current month; pickedDate is the chosen day ("YYYY-MM-DD")
  const [calMonth, setCalMonth] = useState(() => Number(todayIST().slice(5, 7)) - 1); // 0-indexed
  const [calYear, setCalYear] = useState(() => Number(todayIST().slice(0, 4)));
  const [pickedDate, setPickedDate] = useState<string | null>(null);

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

  const { popularDestinations, quickDatePresets } = content;
  // CMS destinations that have trips, plus trip destinations the list doesn't cover
  const suggestions = useMemo(() => destinationSuggestions(trips, popularDestinations), [trips, popularDestinations]);

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

  const travellerOptions = content.travellerOptions;

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

  const isoForDay = (day: number) =>
    `${calYear}-${String(calMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

  const handleDateSelect = (day: number) => {
    setPickedDate(isoForDay(day));
    const formatted = `${monthNames[calMonth].slice(0, 3)} ${day}, ${calYear}`;
    setSelectedDates(formatted);
    setIsDatesOpen(false);
  };

  const handlePresetSelect = (preset: string) => {
    setPickedDate(null);
    setSelectedDates(preset);
    setIsDatesOpen(false);
  };

  // One matching trip opens that trip; otherwise /trips/upcoming opens with the filters applied
  // (see lib/tripSearch). Travellers doesn't narrow anything: every trip takes solo travellers and groups.
  const handleSearch = (query = destination) => {
    const dates = datesFromSelection(selectedDates === "Select dates" ? "" : selectedDates, pickedDate ?? undefined);
    router.push(searchTarget(trips, query, dates));
  };

  // Popular searches search straight away (keeping any dates already chosen)
  const handleTagClick = (dest: string) => {
    setDestination(dest);
    handleSearch(dest);
  };

  return (
    <section
      id="hero"
      // z-20 lifts the hero (and its search dropdowns) above the next section, whose content sits
      // at z-10; it stays below the navbar (z-50) and the mobile menu (z-60)
      className="relative z-20 min-h-screen w-full flex items-center justify-start pt-28 pb-24 lg:pt-40 lg:pb-16 select-none"
    >
      {/* Background Image Container with Overflow Hidden */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={content.backgroundImage}
          alt="Friends enjoying sunrise and mountains together"
          className="w-full h-full object-cover object-center"
        />

        {/* Soft Left-Side Backdrop Blur with Feathered Fade */}
        <div className="absolute inset-0 w-full lg:w-[45%] backdrop-blur-[1px] [-webkit-mask-image:linear-gradient(to_right,black_45%,transparent_100%)] [mask-image:linear-gradient(to_right,black_45%,transparent_100%)] bg-gradient-to-r from-black/35 via-black/15 to-transparent" />
      </div>

      {/* Hero Main Content Container */}
      <div className="site-container z-10 relative">
        <div className="max-w-[780px] text-left space-y-4 md:space-y-7 2xl:space-y-7">
          {/* Tagline as a little route: each word is a stop, joined by a dashed trail that draws in.
              "Connect.Travel.Belong" in the CMS → Connect ┄ Travel ┄ belong (last word handwritten). */}
          {(() => {
            const stops = content.tagline.split(/[.·•,|]+/).map((w) => w.trim()).filter(Boolean);
            if (stops.length < 2) {
              return (
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/85 block font-montserrat">
                  {content.tagline}
                </span>
              );
            }
            return (
              <p aria-label={stops.join(", ")} className="flex flex-wrap items-center gap-x-1.5 gap-y-1 font-montserrat">
                {stops.map((word, i) => {
                  const last = i === stops.length - 1;
                  return (
                    <span key={`${word}-${i}`} aria-hidden className="flex items-center gap-1.5">
                      {i > 0 && (
                        <svg
                          viewBox="0 0 34 8"
                          fill="none"
                          className="w-5 sm:w-6 h-1.5 text-[#F6B48A]/80 overflow-visible"
                        >
                          <path
                            d="M1 5 Q 17 0.5 33 4"
                            stroke="currentColor"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                            strokeDasharray="2.5 3.5"
                            className="tagline-trail"
                            style={{ animationDelay: `${0.25 + i * 0.35}s` }}
                          />
                          <circle cx="33" cy="4" r="1.6" fill="currentColor" />
                        </svg>
                      )}
                      {last ? (
                        <span className="font-caveat normal-case text-[18px] sm:text-[22px] leading-none text-[#F3B748] -translate-y-px [text-shadow:0_1px_8px_rgba(0,0,0,0.35)]">
                          {word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()}
                        </span>
                      ) : (
                        <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-white/85">{word}</span>
                      )}
                    </span>
                  );
                })}
              </p>
            );
          })()}

          {/* Main Headline */}
          <Heading className="heading-hero font-normal text-white tracking-tight font-serif">
            <span className="whitespace-pre-line">
              {content.headline.split(".").join("\n")}
            </span>{" "}
            <span className="relative inline-block font-script font-normal text-[1.3em] text-[#F3B748]">
              {content.scriptAccent}
              <div className="absolute bottom-1 left-0 w-full">
                <TitleUnderline />
              </div>
            </span>
          </Heading>

          {/* Subtitle Paragraph */}
          <div className="space-y-0.5 text-white/90 text-xs sm:text-sm md:text-base font-normal leading-relaxed font-sans max-w-xl">
            <p>{content.subtitle1}</p>
            <p>{content.subtitle2}</p>
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
                    {content.destPlaceholder}
                  </span>
                  <input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleSearch();
                      }
                    }}
                    placeholder={content.searchPlaceholder}
                    className="text-xs sm:text-sm font-semibold text-slate-800 placeholder:text-slate-400 placeholder:font-normal focus:outline-none bg-transparent w-full cursor-pointer"
                  />
                </div>
              </div>

              {/* Destination Dropdown — Clean, Fully Visible, No Ugly Scrollbar */}
              {isDestOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.25)] border border-slate-100 p-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="text-[10.5px] font-bold text-slate-400 uppercase tracking-wider px-2.5 py-1 mb-1">
                    {content.popularDestinationsTitle}
                  </div>
                  <div className="grid grid-cols-1 gap-0.5">
                    {suggestions.map((dest) => (
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
                className="flex items-center justify-between gap-2 pl-1 pr-3 md:px-3.5 py-2 hover:bg-slate-50/90 rounded-xl md:rounded-full transition-colors cursor-pointer text-left"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                    <CalendarIcon className="w-4 h-4 text-slate-700" />
                  </div>
                  <div className="flex flex-col min-w-0 pr-1">
                    <span className="text-[10.5px] font-bold text-slate-500 uppercase tracking-wider">
                      {content.whenLabel}
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
                      const isSelected = pickedDate === isoForDay(dayNum);
                      const isPast = isoForDay(dayNum) < todayIST();
                      return (
                        <button
                          key={`day-${dayNum}`}
                          type="button"
                          disabled={isPast}
                          onClick={() => handleDateSelect(dayNum)}
                          className={`w-8 h-8 rounded-full text-xs font-medium flex items-center justify-center transition-all ${
                            isSelected
                              ? "bg-[#0E5A60] text-white font-bold shadow-sm scale-105"
                              : isPast
                                ? "text-slate-300 cursor-not-allowed"
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
                className="flex items-center justify-between gap-2 pl-1 pr-3 md:px-3.5 py-2 hover:bg-slate-50/90 rounded-xl md:rounded-full transition-colors cursor-pointer text-left"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                    <Users className="w-4 h-4 text-slate-700" />
                  </div>
                  <div className="flex flex-col min-w-0 pr-1">
                    <span className="text-[10.5px] font-bold text-slate-500 uppercase tracking-wider">
                      {content.travellersLabel}
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
                    {content.groupSizeTitle}
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
                          <span className="text-xs font-semibold">
                            {opt.label}
                          </span>
                          {selectedTravellers === opt.label && (
                            <Check className="w-3.5 h-3.5 text-[#0E5A60]" />
                          )}
                        </div>
                        <span className="text-[10px] text-slate-500">
                          {opt.desc}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Search CTA Button */}
            <button
              type="button"
              onClick={() => handleSearch()}
              className="bg-[#0E5A60] hover:bg-[#0B2A3D] text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl md:rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer shrink-0 font-sans mt-2 md:mt-0"
            >
              <Search className="w-4 h-4 text-white" />
              <span>{content.searchButtonText}</span>
            </button>
          </div>

          {/* Popular searches: plain text links; a hand-drawn underline sketches in on hover */}
          <div className="flex flex-wrap items-center gap-x-1 gap-y-2 pt-0.5 font-sans">
            <span className="leading-none text-xs sm:text-[13px] font-thin text-white/70 mr-2">
              {content.popularSearchesLabel}
            </span>
            {suggestions.slice(0, 5).map((tag, i) => (
              <React.Fragment key={tag}>
                {i > 0 && <span aria-hidden className="h-1 w-1 rounded-full bg-[#F6B48A]/70 mx-1.5" />}
                <button
                  type="button"
                  onClick={() => handleTagClick(tag)}
                  className="group relative leading-none text-[13px] sm:text-sm font-normal text-white/80 hover:text-white transition-colors cursor-pointer outline-none focus-visible:text-white"
                >
                  {tag}
                  <svg
                    aria-hidden
                    viewBox="0 0 100 10"
                    fill="none"
                    preserveAspectRatio="none"
                    className="pointer-events-none absolute left-0 top-full mt-0.5 h-2 w-full text-[#F6B48A]"
                  >
                    <path
                      d="M2 6 Q 25 2 50 5.5 T 98 4"
                      pathLength={1}
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      className="[stroke-dasharray:1_2] [stroke-dashoffset:1] opacity-0 group-hover:opacity-100 group-hover:[stroke-dashoffset:0] group-focus-visible:opacity-100 group-focus-visible:[stroke-dashoffset:0] transition-[stroke-dashoffset,opacity] duration-500 ease-out motion-reduce:transition-none"
                    />
                  </svg>
                </button>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
