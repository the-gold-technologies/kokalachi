"use client";

import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { createBooking } from "@/actions/booking";
import { submitContactEnquiry } from "@/actions/contact";
import { 
  Calendar,
  Users,
  CheckCircle2,
  ArrowRight,
  X,
  ChevronDown,
  ChevronRight,
  Minus,
  Plus,
  Sparkles,
  MapPin,
  Clock,
  Compass,
  Heart,
  ShieldCheck,
  BookOpen,
  Route,
  PackageCheck,
  Backpack,
  MessagesSquare,
  UserLock
} from "lucide-react";
import type { TourPackage, Departure, TripCardData } from "@/data/trips";
import {
  formatDeparture,
  formatStartingOriginalPrice,
  formatStartingPrice,
  getDeparturePrice,
  getNextDeparture,
  getNextDepartureLabel,
  getSpotsLeft,
  getUpcomingDepartures,
  hasFullDetails,
  isSoldOut,
} from "@/lib/departures";
import { DeparturePicker } from "@/components/DeparturePicker";
import { JourneySectionNav, type SectionNavItem } from "@/components/journeys/JourneySectionNav";
import { TripQuickActions } from "@/components/journeys/TripQuickActions";
import { MetaPixel } from "@/components/analytics/MetaPixel";
import { META_PIXEL_ID } from "@/lib/tracking";
import { imageSrcSet, sizedImage } from "@/lib/images";

function BookingWidget({
  tour,
  departures,
  selectedDeparture,
  onSelectDeparture,
  tripSlug,
  whatsapp,
}: {
  tour: TourPackage;
  departures: Departure[];
  selectedDeparture?: Departure;
  onSelectDeparture: (id: string) => void;
  tripSlug: string;
  whatsapp?: string | null;
}) {
  const [guestInput, setGuests] = useState(1);
  const [travelDate, setTravelDate] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [mounted, setMounted] = useState(false);
  // "group" joins a fixed batch; "private" asks for a custom trip on their own dates
  const [tripType, setTripType] = useState<"group" | "private">("group");
  const [privateDate, setPrivateDate] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  // Trips with departures must have one picked; older trips keep the free date input
  const hasDepartures = !!tour.departures;
  const isPrivate = tripType === "private";
  // A private trip isn't limited by a batch's seats
  const maxGuests = isPrivate ? 30 : Math.min(10, selectedDeparture?.spotsLeft ?? 10);
  // Keep the guest count within the seats left on the chosen date
  const guests = Math.max(1, Math.min(guestInput, maxGuests));

  // Trips whose price isn't announced yet take a free "reserve my spot" request instead
  const departurePrice = getDeparturePrice(tour, selectedDeparture);
  const priceKnown = departurePrice != null;
  const basePrice = departurePrice ?? 0;
  const bookableDepartures = departures.filter((d) => !isSoldOut(d));
  const startingPrice = priceKnown ? formatStartingPrice(tour) : undefined;
  const startingOriginalPrice = priceKnown ? formatStartingOriginalPrice(tour) : undefined;
  // Every batch full: a private trip is still possible
  const soldOut = hasDepartures && bookableDepartures.length === 0;
  const openBooking = (type: "group" | "private") => {
    setTripType(soldOut ? "private" : type);
    setIsModalOpen(true);
  };
  
  // Calculations — for GST-inclusive prices, split the GST back out of the costing
  const gstPerGuest = tour.gstAmount || 0;
  const roomTotal = (basePrice - (tour.gstIncluded ? gstPerGuest : 0)) * guests;
  const gst = gstPerGuest * guests;
  const tcs = tour.tcsPercent ? (roomTotal * (tour.tcsPercent / 100)) : 0;
  const finalTotal = roomTotal + gst + tcs;

  const handleBookingSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);

    if (isPrivate) {
      const requests = String(formData.get("specialRequests") ?? "").trim();
      const result = await submitContactEnquiry({
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
        journey: `Custom group trip: ${tour.title}`,
        travelDate: privateDate || undefined,
        groupSize: guests === 1 ? "Solo" : `${guests} people`,
        message: requests || "Private trip request from the trip page.",
      });
      if (result.success) {
        setSubmitSuccess(true);
        setTimeout(() => {
          setIsModalOpen(false);
          setSubmitSuccess(false);
        }, 3000);
      } else {
        alert("Something went wrong. Please try again.");
      }
      setIsSubmitting(false);
      return;
    }

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      specialRequests: (formData.get("specialRequests") as string) + (!hasDepartures && travelDate ? `\nPreferred date: ${travelDate}` : ""),
      departureId: selectedDeparture?.id,
      departureDate: selectedDeparture ? formatDeparture(selectedDeparture) : undefined,
      guests,
      tripId: tour.id.toString(),
      tripName: tour.title,
      totalAmount: finalTotal,
    };
    
    const result = await createBooking(data);
    if (result.success) {
      setSubmitSuccess(true);
      setTimeout(() => {
        setIsModalOpen(false);
        setSubmitSuccess(false);
      }, 3000);
    } else {
      alert("Something went wrong. Please try again.");
    }
    setIsSubmitting(false);
  };

  return (
    <>
      {/* Kept simple: dates, duration and group live in the snapshot; picking a batch, travellers
          and the price breakdown happen in the booking form */}
      <div className="flex flex-col gap-4">
        {startingPrice ? (
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#C85A24] mb-1">
              {tour.offerLabel || "Starting from"}
            </p>
            <p className="flex items-baseline flex-wrap gap-x-2">
              <span className="font-black text-[28px] leading-none text-[#0E5A60]">{startingPrice}</span>
              {startingOriginalPrice && (
                <span className="text-sm font-semibold text-slate-400 line-through">{startingOriginalPrice}</span>
              )}
              <span className="text-[13px] text-slate-500">/ person</span>
            </p>
          </div>
        ) : (
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#C85A24] mb-1">Price announced soon</p>
            <p className="text-[13px] text-slate-600 leading-relaxed">
              Reserve your spot now, no payment needed. You&apos;ll be the first to get the full itinerary and price.
            </p>
          </div>
        )}

        <button
          onClick={() => openBooking("group")}
          className="w-full py-3.5 cursor-pointer bg-[#D96C2C] hover:bg-[#C85A24] text-white font-bold text-[14px] rounded-full shadow-md shadow-[#D96C2C]/20 hover:shadow-lg hover:shadow-[#D96C2C]/30 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group"
        >
          <span>{soldOut ? "Plan a Private Trip" : priceKnown ? "Book Now" : "Reserve My Spot"}</span>
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform stroke-[2.5]" />
        </button>
        {soldOut ? (
          <p className="-mt-2 text-center text-[12px] text-slate-500">All batches are full. Travel on your own dates instead.</p>
        ) : (
          <button
            type="button"
            onClick={() => openBooking("private")}
            className="-mt-2 mx-auto inline-flex items-center gap-1 text-[12.5px] font-semibold text-[#0E5A60] hover:text-[#D96C2C] transition-colors cursor-pointer"
          >
            Or plan a custom trip, on your dates
          </button>
        )}

        {/* Call-back / WhatsApp for people with questions before booking */}
        <TripQuickActions
          tripId={tour.id.toString()}
          tripTitle={tour.title}
          destination={tour.location}
          tripSlug={tripSlug}
          whatsapp={whatsapp}
        />

        {/* What happens after "Book Now", so a first booking isn't a leap into the unknown.
            (Trips without a price show their own steps in the "Coming Soon" section.) */}
        {priceKnown && (
          <div className="rounded-2xl bg-[#FAF5EE] border border-[#ECE4D6] px-4 py-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#C85A24] mb-3">How booking works</p>
            <ol className="relative space-y-3">
              {/* Dashed route joining the steps */}
              <span aria-hidden className="absolute left-[11px] top-3 bottom-3 border-l-[1.5px] border-dashed border-[#D9CDB8]" />
              {[
                { title: "Send a booking request", note: "Pick your batch and travellers." },
                { title: "We confirm with you", note: "Our team reaches out to go over the details." },
                { title: "Pay to lock your spot", note: "Your seat is held once the payment is done." },
              ].map((step, i) => (
                <li key={step.title} className="relative flex gap-3">
                  <span className="relative z-10 w-6 h-6 shrink-0 rounded-full bg-white border border-[#D96C2C]/40 text-[11px] font-bold text-[#D96C2C] flex items-center justify-center">
                    {i + 1}
                  </span>
                  <div className="pt-0.5">
                    <p className="text-[13px] font-semibold text-[#0E5A60] leading-tight">{step.title}</p>
                    <p className="text-[12px] text-slate-500 leading-snug mt-0.5">{step.note}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>

      {/* Booking Form Modal */}
      {isModalOpen && mounted && createPortal(
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" style={{ zIndex: 99999 }}>
          <div className="bg-white rounded-3xl w-full max-w-lg md:max-w-4xl max-h-[calc(100dvh-2rem)] overflow-y-auto shadow-2xl animate-in fade-in zoom-in-95 duration-300">
            <div className="flex items-center justify-between gap-4 px-7 py-5 border-b border-slate-100">
              <div className="min-w-0">
                <h3 className="text-xl font-bold text-[#0E5A60]">{isPrivate ? "Plan a Custom Trip" : priceKnown ? "Book Your Journey" : "Reserve Your Spot"}</h3>
                <p className="text-sm text-slate-500 mt-0.5 truncate" title={tour.title}>{tour.title}</p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-colors"
              >
                <X size={16} />
              </button>
            </div>
            
            {submitSuccess ? (
              <div className="p-10 text-center flex flex-col items-center justify-center min-h-[300px]">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 size={32} />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-2">{isPrivate ? "Request Sent!" : priceKnown ? "Booking Request Sent!" : "Spot Reserved!"}</h4>
                <p className="text-slate-600">
                  {isPrivate
                    ? "We'll get back to you with a plan and a quote for your dates and group."
                    : priceKnown
                    ? "Our team will reach out to you shortly to confirm your booking and process the payment."
                    : "We'll share the full itinerary and price with you on WhatsApp and email as soon as they're ready."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="grid md:grid-cols-2">
                {/* Left: batch, travellers and what it comes to */}
                <div className="px-7 py-6 space-y-5 md:bg-[#FCFAF6] md:border-r border-slate-100">
                <div role="radiogroup" aria-label="How do you want to travel?" className="grid grid-cols-2 gap-1.5 p-1.5 rounded-2xl bg-white border border-[#ECE4D6]">
                  {([
                    { type: "group", icon: Users, title: "Group batch", note: soldOut ? "All batches full" : "Set dates, with others" },
                    { type: "private", icon: UserLock, title: "Custom trip", note: "Your dates, your people" },
                  ] as const).map((opt) => {
                    const active = tripType === opt.type;
                    const Icon = opt.icon;
                    return (
                      <button
                        key={opt.type}
                        type="button"
                        role="radio"
                        aria-checked={active}
                        disabled={opt.type === "group" && soldOut}
                        onClick={() => setTripType(opt.type)}
                        className={`flex items-start gap-2 rounded-xl px-3 py-2.5 text-left transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0E5A60]/40 disabled:cursor-not-allowed disabled:opacity-50 ${
                          active ? "bg-[#0E5A60] text-white shadow-sm" : "text-slate-600 hover:bg-[#FAF5EE]"
                        }`}
                      >
                        <Icon size={16} className={`mt-0.5 shrink-0 ${active ? "text-[#FFD9BF]" : "text-[#D96C2C]"}`} />
                        <span>
                          <span className="block text-[13px] font-bold leading-tight">{opt.title}</span>
                          <span className={`block text-[11px] mt-0.5 ${active ? "text-white/75" : "text-slate-400"}`}>{opt.note}</span>
                        </span>
                      </button>
                    );
                  })}
                </div>

                {isPrivate ? (
                  <div>
                    <label htmlFor="privateDate" className="text-sm font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                      <Calendar size={14} className="text-[#0E5A60]" /> Preferred start date
                    </label>
                    <input
                      type="date"
                      id="privateDate"
                      min={new Date().toISOString().split('T')[0]}
                      value={privateDate}
                      onChange={(e) => setPrivateDate(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-[#0E5A60] focus:ring-1 focus:ring-[#0E5A60] transition-colors"
                    />
                    <p className="text-[12px] text-slate-500 mt-1.5">Not sure yet? Leave it blank and we&apos;ll work it out together.</p>
                  </div>
                ) : hasDepartures ? (
                  <div>
                    <p className="text-sm font-bold text-slate-700 mb-2 flex items-center gap-1.5">
                      <Calendar size={14} className="text-[#0E5A60]" /> Pick your batch
                    </p>
                    <DeparturePicker
                      tour={tour}
                      departures={departures}
                      selectedId={selectedDeparture?.id}
                      onSelect={onSelectDeparture}
                    />
                  </div>
                ) : (
                  <div>
                    <label htmlFor="travelDate" className="text-sm font-bold text-slate-700 mb-1.5 flex items-center gap-1.5"><Calendar size={14} /> Preferred Travel Date</label>
                    <input
                      type="date"
                      id="travelDate"
                      min={new Date().toISOString().split('T')[0]}
                      value={travelDate}
                      onChange={(e) => setTravelDate(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0E5A60] focus:ring-1 focus:ring-[#0E5A60] transition-colors"
                    />
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <p className="text-sm font-bold text-slate-700 flex items-center gap-1.5">
                    <Users size={14} className="text-[#0E5A60]" /> Travellers
                  </p>
                  <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-full px-2 py-1">
                    <button
                      type="button"
                      aria-label="One less traveller"
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                      className="w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-sm border border-slate-100 hover:bg-slate-100 text-slate-600 transition-colors cursor-pointer"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="font-bold text-sm text-[#0E5A60] min-w-[2.25rem] text-center">{guests === 1 ? "Solo" : guests}</span>
                    <button
                      type="button"
                      aria-label="One more traveller"
                      onClick={() => setGuests(Math.min(maxGuests, guests + 1))}
                      className="w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-sm border border-slate-100 hover:bg-slate-100 text-slate-600 transition-colors cursor-pointer"
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                </div>

                {isPrivate ? (
                  <p className="bg-[#FAF5EE] rounded-2xl border border-[#ECE4D6] px-4 py-3 text-[13px] text-slate-600">
                    Custom trips are priced for your group and dates. We&apos;ll send you a quote, and there&apos;s nothing to pay now.
                  </p>
                ) : priceKnown ? (
                  <div className="bg-[#FAF5EE] rounded-2xl border border-[#ECE4D6] px-4 py-3 space-y-1.5 text-[13px]">
                    <div className="flex justify-between text-slate-600">
                      <span>Costing ({guests === 1 ? "solo" : `${guests} × ₹${(roomTotal / guests).toLocaleString()}`})</span>
                      <span className="font-semibold text-slate-700">₹{roomTotal.toLocaleString()}</span>
                    </div>
                    {/* Always shown, as on the old sidebar, even when it's ₹0 */}
                    <div className="flex justify-between text-slate-600">
                      <span>GST</span>
                      <span className="font-semibold text-slate-700">₹{gst.toLocaleString()}</span>
                    </div>
                    {tour.tcsPercent ? (
                      <div className="flex justify-between text-slate-600">
                        <span>TCS {tour.tcsPercent}%</span>
                        <span className="font-semibold text-slate-700">₹{tcs.toLocaleString()}</span>
                      </div>
                    ) : null}
                    <div className="flex justify-between items-baseline pt-2 mt-1 border-t border-[#E4DACA]">
                      <span className="font-bold text-[#0E5A60]">Total</span>
                      <span className="font-black text-lg text-[#0E5A60]">₹{finalTotal.toLocaleString()}</span>
                    </div>
                  </div>
                ) : (
                  <p className="bg-[#FAF5EE] rounded-2xl border border-[#ECE4D6] px-4 py-3 text-[13px] text-slate-600">
                    Price to be announced. Reserving is free and there&apos;s nothing to pay now.
                  </p>
                )}

                </div>

                {/* Right: their details */}
                <div className="px-7 py-6 space-y-4 flex flex-col border-t md:border-t-0 border-slate-100">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-1.5">Full Name</label>
                  <input type="text" id="name" name="name" required className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0E5A60] focus:ring-1 focus:ring-[#0E5A60] transition-colors" placeholder="John Doe" />
                </div>
                
                <div className="space-y-4">{/* One per row, so a long email fits */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-1.5">Email Address</label>
                    <input type="email" id="email" name="email" required className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0E5A60] focus:ring-1 focus:ring-[#0E5A60] transition-colors" placeholder="you@email.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-1.5">WhatsApp Number</label>
                    <input type="tel" id="phone" name="phone" required className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0E5A60] focus:ring-1 focus:ring-[#0E5A60] transition-colors" placeholder="+91 98765 43210" />
                  </div>
                </div>

                <div>
                  <label htmlFor="specialRequests" className="block text-sm font-bold text-slate-700 mb-1.5">Special Requests (Optional)</label>
                  <textarea id="specialRequests" name="specialRequests" rows={2} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0E5A60] focus:ring-1 focus:ring-[#0E5A60] transition-colors" placeholder="Any dietary requirements, medical conditions, or other requests..."></textarea>
                </div>

                <div className="pt-1 mt-auto">
                  <button 
                    type="submit" 
                    disabled={isSubmitting || (!isPrivate && hasDepartures && !selectedDeparture)}
                    className="w-full py-3 bg-[#0E5A60] hover:bg-[#0A4348] disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-bold text-[15px] rounded-full shadow-md transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? "Submitting..." : isPrivate ? "Request My Custom Trip" : priceKnown ? "Confirm Booking Request" : "Reserve My Spot"}
                  </button>
                </div>
                </div>
              </form>
            )}
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

interface JourneyDetailProps {
  trip: TripCardData;
  whatsapp?: string | null; // CMS → SEO → Global → social links (number or wa.me link)
}

export function JourneyDetail({ trip, whatsapp }: JourneyDetailProps) {
  const [guests, setGuests] = useState(1);
  const [enquirySent, setEnquirySent] = useState(false);
  const [activeDetailTab, setActiveDetailTab] = useState<"inclusions" | "essentials" | "faq">("inclusions");
  const [scrolled, setScrolled] = useState(false);
  const [isOverviewExpanded, setIsOverviewExpanded] = useState(false);
  const [expandedDay, setExpandedDay] = useState<number | null>(0);
  const dayRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [selectedDepartureId, setSelectedDepartureId] = useState<string | undefined>(
    () => getNextDeparture(trip.tourPackage)?.id
  );

  const toggleDay = (idx: number) => {
    const isOpening = expandedDay !== idx;
    setExpandedDay(prev => (prev === idx ? null : idx));

    if (isOpening) {
      setTimeout(() => {
        const targetElement = dayRefs.current[idx];
        if (targetElement) {
          const headerOffset = 100;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 60);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tour = trip.tourPackage;
  const departures = getUpcomingDepartures(tour);
  const selectedDeparture = departures.find((d) => d.id === selectedDepartureId && !isSoldOut(d));
  const spotsLeft = getSpotsLeft(tour);
  const nextDepartureLabel = getNextDepartureLabel(tour);
  const batchCount = departures.filter((d) => !isSoldOut(d)).length;
  const fullDetails = hasFullDetails(tour);
  const heroPhoto = tour.gallery && tour.gallery.length > 0 ? tour.gallery[0] : tour.image;

  // Quick-jump links: one per section; the "Need to Know" ones also switch that panel's tab
  const detailTab = (key: "inclusions" | "essentials" | "faq", label: string, icon: React.ElementType): SectionNavItem => ({
    key,
    label,
    icon,
    targetId: "trip-details",
    onSelect: () => setActiveDetailTab(key),
  });
  // (Only for trips with full details; a dates-only trip has a single section, nothing to jump between)
  const sectionNavItems: SectionNavItem[] = [
    { key: "overview", label: "Overview", icon: BookOpen, targetId: "trip-overview" },
    { key: "itinerary", label: "Day-by-Day Journey", icon: Route, targetId: "trip-itinerary" },
    detailTab("inclusions", "Inclusions & Exclusions", PackageCheck),
    ...(tour.whatToPack || tour.weather ? [detailTab("essentials", "Trip Essentials", Backpack)] : []),
    ...(tour.faqs ? [detailTab("faq", "FAQs", MessagesSquare)] : []),
  ];

  const handleEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setEnquirySent(true);
    setTimeout(() => {
      setEnquirySent(false);
    }, 3500);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 selection:bg-[#0E5A60]/20">
      {/* Meta Pixel on every trip page (see lib/tracking) */}
      <MetaPixel pixelId={META_PIXEL_ID} />

      {/* Hero Section: at least 70% of the screen, and taller when the title is long. The top padding
          keeps the content clear of the fixed navbar, so a long title never runs into it. */}
      <div className="relative min-h-[70vh] w-full flex items-end">
        {/* Full-screen, so ask for a photo that size (the CMS links are card-sized, w=800) */}
        <img
          src={sizedImage(heroPhoto, 2400)}
          srcSet={imageSrcSet(heroPhoto, [1200, 1800, 2400, 3200])}
          sizes="100vw"
          alt={tour.title}
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A3D] via-[#0B2A3D]/30 to-black/30" />

        <div className="relative z-10 w-full pt-32 md:pt-52 pb-10 sm:pb-16">
          <div className="site-container">
            <div className="max-w-6xl animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="bg-[#D96C2C] text-white text-xs font-medium px-4 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                  {tour.category}
                </span>
                {!!spotsLeft && (
                  <span className="bg-white/15 backdrop-blur-md border border-white/30 text-white text-xs font-medium px-4 py-1.5 rounded-full shadow-sm flex items-center gap-1">
                    <Sparkles size={12} /> {spotsLeft} Spots Remaining
                  </span>
                )}
              </div>
              <h1 className="text-[30px] leading-[1.15] sm:text-[38px] lg:text-[46px] font-semibold font-serif text-white mb-3 max-w-5xl">
                {tour.title}
              </h1>
              {tour.subtitle && (
                <h2 className="text-[15px] sm:text-base lg:text-lg font-sans text-white/95 font-normal tracking-wide mb-5 max-w-3xl leading-relaxed italic">
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
                  <span>Next batch: {nextDepartureLabel}</span>
                </div>
                {batchCount > 1 && (
                  <a
                    href="#book"
                    className="bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/30 text-white text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-full transition-colors"
                  >
                    {batchCount} batches · View dates
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="site-container py-12">
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
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Next Batch</span>
                    <span className="text-[13px] font-bold text-[#0E5A60]">{nextDepartureLabel}</span>
                    {batchCount > 1 && <span className="text-[11px] text-slate-500">{batchCount} batches available</span>}
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

            {fullDetails ? (
            <>
            <JourneySectionNav items={sectionNavItems} />

            {/* Overview Section */}
            <section id="trip-overview" className="space-y-4">
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
            <section id="trip-itinerary" className="space-y-6 relative">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C85A24] mb-1">The Arc</h2>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#0E5A60] leading-tight">
                Day-by-Day Journey
              </h3>

              <div className="space-y-6 ml-2 sm:ml-4">
                {tour.itinerary ? (
                  tour.itinerary.map((day, idx) => {
                    const isExpanded = expandedDay === idx;

                    return (
                      <div 
                        key={idx} 
                        ref={(el) => { dayRefs.current[idx] = el; }}
                        className="relative group scroll-mt-28"
                      >
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
                              className={`bg-white rounded-2xl border ${isExpanded ? 'border-[#0E5A60]/30 shadow-md h-56 sm:h-64 relative overflow-hidden' : 'border-slate-100 shadow-sm p-2 sm:p-2.5 flex items-center justify-between'} cursor-pointer hover:border-[#0E5A60]/50 hover:shadow-md transition-all duration-300 group/header`}
                            >
                              {/* CLOSED STATE */}
                              <div className={`flex items-center gap-3 sm:gap-4 w-full ${isExpanded ? 'opacity-0 hidden' : 'opacity-100'}`}>
                                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden shrink-0 border border-slate-100 relative">
                                  <img src={day.image || tour.image} alt={day.title} className="absolute inset-0 w-full h-full object-cover" />
                                </div>
                                <div className="flex-grow">
                                  <div className="flex items-center gap-1.5 mb-0.5">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{day.day}</span>
                                    <span className="w-1 h-1 rounded-full bg-slate-300" />
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{trip.destination}</span>
                                  </div>
                                  <h4 className="font-semibold text-[13px] sm:text-[15px] text-[#0E5A60] leading-tight group-hover/header:text-[#0E5A60] transition-colors">
                                    {day.title}
                                  </h4>
                                </div>
                                <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mr-2 bg-slate-50 text-slate-400 group-hover/header:bg-[#0E5A60]/10 group-hover/header:text-[#0E5A60] transition-colors duration-300">
                                  <ChevronDown size={16} className="transition-transform duration-300" />
                                </div>
                              </div>

                              {/* EXPANDED STATE (Large Header) */}
                              {isExpanded && (
                                <div className="absolute inset-0 w-full h-full flex flex-col justify-between p-4 sm:p-5 z-10 animate-in fade-in duration-500">
                                  <img
                                    src={sizedImage(day.image || tour.image, 1400)}
                                    srcSet={imageSrcSet(day.image || tour.image, [800, 1400])}
                                    sizes="(min-width: 1024px) 700px, 100vw"
                                    alt={day.title}
                                    className="absolute inset-0 w-full h-full object-cover z-0"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/10 z-0" />
                                  
                                  <div className="relative z-10 flex justify-end">
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors duration-300">
                                      <ChevronDown size={16} className="rotate-180 transition-transform duration-300" />
                                    </div>
                                  </div>

                                  <div className="relative z-10">
                                    <div className="flex items-center gap-1.5 mb-1.5">
                                      <span className="text-[10px] font-bold text-white/90 uppercase tracking-wider">{day.day}</span>
                                      <span className="w-1 h-1 rounded-full bg-white/50" />
                                      <span className="text-[10px] font-bold text-white/90 uppercase tracking-wider">{trip.destination}</span>
                                    </div>
                                    <h4 className="font-bold text-lg sm:text-xl text-white leading-tight shadow-sm">
                                      {day.title}
                                    </h4>
                                  </div>
                                </div>
                              )}
                            </div>

                          {/* Accordion Content */}
                          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[1000px] opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0'}`}>
                            <div className="bg-[#FAF4EC] p-4 sm:p-5 rounded-2xl border border-[#F0E8D9] space-y-3 shadow-inner">
                              <div>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">The Journey</p>
                                <p className="text-slate-700 leading-relaxed text-[13px]">
                                  {day.journey.split("→").map((step, i) => (
                                    <React.Fragment key={i}>
                                      {i > 0 && (
                                        <ChevronRight size={13} className="inline-block align-[-2px] mx-1 text-[#D96C2C] stroke-[2.5]" />
                                      )}
                                      {step.trim()}
                                    </React.Fragment>
                                  ))}
                                </p>
                              </div>
                              {day.community && (
                                <div className="pt-3 border-t border-[#E8DCC8]">
                                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#D96C2C] mb-1.5">Community Moment</p>
                                  <p className="text-slate-600 leading-relaxed italic text-[12px]">
                                    {day.community}
                                  </p>
                                </div>
                              )}
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
            <section id="trip-details" className="space-y-6 pt-6 border-t border-slate-100">
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
                      onClick={() => setActiveDetailTab(tab.id as "inclusions" | "essentials" | "faq")}
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
                          <CheckCircle2 size={18} className="text-[#0E5A60]" /> What&apos;s Included
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
                          <X size={18} className="text-red-500" /> What&apos;s Not Included
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
            </>
            ) : (
            /* Trips added with dates only: itinerary, inclusions and price still to come */
            <section className="bg-[#FAF4EC] rounded-3xl border border-[#F0E8D9] p-6 sm:p-8 space-y-5">
              <div>
                <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C85A24] mb-1">Coming Soon</h2>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#0E5A60] leading-tight">
                  Full Itinerary Dropping Soon
                </h3>
              </div>
              <p className="text-slate-700 text-[15px] leading-relaxed">
                The dates are locked in — we&apos;re finalising the day-by-day plan, stays and pricing for this journey.
                Reserve your spot now with no payment, and you&apos;ll be the first to get the full details.
              </p>
              <ul className="space-y-2.5">
                {[
                  "Pick your batch and reserve — no payment needed",
                  "We share the itinerary and price on WhatsApp and email",
                  "Confirm and pay only once you've seen everything",
                ].map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[14px] text-slate-700">
                    <span className="w-6 h-6 rounded-full bg-[#0E5A60] text-white text-[12px] font-bold flex items-center justify-center shrink-0">{idx + 1}</span>
                    <span className="pt-0.5">{step}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="inline-flex items-center gap-1.5 text-[#D96C2C] font-bold text-[14px] hover:text-[#C85A24] transition-colors">
                Have a question? Talk to us <ArrowRight size={15} />
              </Link>
            </section>
            )}
          </div>

          {/* Right Column: Sticky Booking Widget */}
          <div id="book" className="lg:col-span-4 scroll-mt-24">
            <div className="sticky top-24 bg-white p-5 rounded-[32px] border border-slate-200 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] flex flex-col max-h-[calc(100vh-100px)] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">

              {/* Booking Form State & Logic */}
              <BookingWidget
                tour={tour}
                departures={departures}
                selectedDeparture={selectedDeparture}
                onSelectDeparture={setSelectedDepartureId}
                tripSlug={trip.slug}
                whatsapp={whatsapp}
              />

            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
