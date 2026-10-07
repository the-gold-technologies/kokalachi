"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  User,
  Menu,
  X,
  MapPin,
  Star,
  FileText,
  Info,
  Briefcase,
  Users,
  HelpCircle,
  AlertTriangle,
  Image as ImageIcon,
  Compass,
  Phone,
  Mountain,
  ShieldCheck,
  Heart,
  ArrowRight,
} from "lucide-react";
import { tripCards, TripCardData } from "@/data/trips";
import { formatShortDate, getNextDeparture, hasFullDetails, isBookingOpen } from "@/lib/departures";

interface DropdownItem {
  title: string;
  tag?: string;
  desc: string;
  image: string;
  href?: string;
}

// Destinations menu: a few vibes to browse by, each opening /journeys pre-filtered
const destinationCategories = [
  { id: "Adventure", label: "Mountains & Treks" },
  { id: "SlowTravel", label: "Slow Travel" },
  { id: "BeachEscape", label: "Beaches & Islands" },
  { id: "FirstTimers", label: "First-Timer Friendly" },
  { id: "WomenOnly", label: "Women Only" },
]
  .map((cat) => {
    const trips = tripCards.filter((card) => card.categories.includes(cat.id));
    return {
      title: cat.label,
      desc: `${trips.length} ${trips.length === 1 ? "journey" : "journeys"}`,
      image: trips[0]?.images[0].replace("w=800", "w=300") ?? "",
      href: `/journeys?category=${cat.id}`,
    };
  })
  .filter((cat) => cat.image);

// Big photo cards: the next bookable trips with full itineraries (featured first)
const handpickedTrips = tripCards
  .filter((card) => isBookingOpen(card) && hasFullDetails(card.tourPackage))
  .slice(0, 3);

const tripBadge = (card: TripCardData) => {
  const next = getNextDeparture(card.tourPackage);
  return card.featured ? "New" : next ? `Departs ${formatShortDate(next.startDate)}` : "Coming Soon";
};

const dropdownData: Record<string, DropdownItem[]> = {
  Destinations: [
    {
      title: "All Journeys",
      tag: "Explore All",
      desc: "Browse our complete slow-travel collection.",
      image:
        "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&q=80&w=300",
      href: "/journeys",
    },
    ...destinationCategories,
  ],
  Tours: [
    {
      title: "Upcoming Departures",
      tag: "2026 Trips",
      desc: "Handcrafted dates & itineraries for travellers.",
      image:
        "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&q=80&w=300",
      href: "/#upcoming-journeys",
    },
    {
      title: "How Kokalachi Works",
      tag: "Zero Stress",
      desc: "Simple 3-step frictionless travel flow.",
      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=300",
      href: "/#how-it-works",
    },
    {
      title: "Zero-Awkwardness",
      tag: "Solo Friendly",
      desc: "Vetted, curated groups of like-minded travellers.",
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=300",
      href: "/about#what-we-believe",
    },
    {
      title: "Custom Group Trips",
      tag: "Private",
      desc: "Private handcrafted travel for your circle.",
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=300",
      href: "/contact",
    },
  ],
  Blogs: [
    {
      title: "Traveler Memoirs",
      tag: "Real Stories",
      desc: "Unfiltered reflections from past travellers.",
      image:
        "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=80&w=300",
      href: "/#moments",
    },
    {
      title: "Moments Captured",
      tag: "Photo Diary",
      desc: "Visual memories, polaroids & photo tracks.",
      image: "/about_hero_polaroid.jpg",
      href: "/#moments",
    },
    {
      title: "Why We Started",
      tag: "Our Vision",
      desc: "The story, values & beliefs behind our tribe.",
      image: "/about_why_started.jpg",
      href: "/about#why-we-started",
    },
    {
      title: "Packing & Route Guides",
      tag: "Travel Tips",
      desc: "Essential advice for mountain & slow trails.",
      image:
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=300",
      href: "/about#what-we-believe",
    },
  ],
};

export function Navbar() {
  const pathname = usePathname();
  
  if (pathname?.startsWith("/admin")) {
    return null;
  }
  
  const isHomePage = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobileDropdown, setExpandedMobileDropdown] = useState<
    string | null
  >(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "About Us", href: "/about", hasDropdown: false },
    { name: "Destinations", href: "/journeys", hasDropdown: true },
    { name: "Tours", href: "/#upcoming-journeys", hasDropdown: true },
    { name: "Blogs", href: "/#moments", hasDropdown: true },
    { name: "Community", href: "/#good-company", hasDropdown: false },
  ];

  // We want the Navbar to always have the solid white pill background 
  // on non-home pages so it doesn't get lost on dark hero images.
  const isSolid = isScrolled || !isHomePage;

  return (
    <>
      <header
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out ${
          isSolid
            ? "top-4 w-[90%] max-w-[1300px] bg-white/95 backdrop-blur-md shadow-[0_15px_40px_rgba(28,43,56,0.12)] border border-gray-100/80 rounded-full py-3 pl-6 pr-3 "
            : "top-0 w-full max-w-full bg-transparent py-6"
        }`}
      >
        <div
          className={`mx-auto flex items-center justify-between ${
            isSolid ? "w-full" : "container mx-auto px-6 md:px-12 lg:px-30"
          }`}
        >
          {/* Main Logo Image */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src={isSolid ? "/logo-clean.png" : "/clean_logo_lighter.png"}
              alt="Kokalachi Logo"
              className={`w-auto object-contain hover:scale-105 transition-transform ${
                isSolid ? "h-6" : "h-7"
              }`}
            />
          </Link>

          {/* Desktop Nav with Hover Dropdowns */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative py-2"
                onMouseEnter={() =>
                  link.hasDropdown && setActiveDropdown(link.name)
                }
                onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 font-medium text-xs uppercase tracking-widest transition-colors duration-300 font-montserrat ${
                    isSolid
                      ? "text-[#0E5A60] hover:text-[#C85A24]"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown
                      size={16}
                      strokeWidth={2}
                      className={`opacity-90 transition-transform duration-300 ${
                        activeDropdown === link.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>

                {/* Enhanced Premium Dropdown Menu Layout with Hover Bridge */}
                {link.hasDropdown && activeDropdown === link.name && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-3.5 z-50">
                    {link.name === "Destinations" ? (
                      <div className="bg-white/98 backdrop-blur-2xl text-slate-800 rounded-[28px] border border-white/80 shadow-[0_25px_60px_rgba(0,0,0,0.22)] p-5 w-[760px] xl:w-[860px] animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="grid grid-cols-[230px_1fr] gap-5">
                          {/* Browse by vibe */}
                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#D96C2C] mb-3 px-2">
                              Browse by vibe
                            </p>
                            <div className="flex flex-col gap-1">
                              {destinationCategories.map((cat) => (
                                <Link
                                  key={cat.title}
                                  href={cat.href}
                                  onClick={() => setActiveDropdown(null)}
                                  className="flex items-center gap-3 p-2 rounded-xl hover:bg-[#FAF6F0] transition-colors group/cat"
                                >
                                  <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 bg-slate-100">
                                    <img
                                      src={cat.image}
                                      alt={cat.title}
                                      className="w-full h-full object-cover group-hover/cat:scale-110 transition-transform duration-500"
                                    />
                                  </div>
                                  <div className="flex flex-col min-w-0 flex-1">
                                    <span className="font-bold text-[13px] text-[#0E5A60] group-hover/cat:text-[#D96C2C] transition-colors leading-snug">
                                      {cat.title}
                                    </span>
                                    <span className="text-[11px] text-slate-500">{cat.desc}</span>
                                  </div>
                                  <ArrowRight className="w-3.5 h-3.5 text-[#D96C2C] opacity-0 -translate-x-1 group-hover/cat:opacity-100 group-hover/cat:translate-x-0 transition-all" />
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* Handpicked trips as photo cards */}
                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#D96C2C] mb-3">
                              Handpicked for you
                            </p>
                            <div className="grid grid-cols-2 grid-rows-2 gap-3 h-[300px]">
                              {handpickedTrips.map((card, i) => (
                                <Link
                                  key={card.slug}
                                  href={`/journeys/${card.slug}`}
                                  onClick={() => setActiveDropdown(null)}
                                  className={`relative rounded-2xl overflow-hidden group/trip bg-slate-200 ${i === 0 ? "row-span-2" : ""}`}
                                >
                                  <img
                                    src={card.images[0]}
                                    alt={card.destination}
                                    className="absolute inset-0 w-full h-full object-cover group-hover/trip:scale-110 transition-transform duration-700"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                                  <span className="absolute top-3 left-3 text-[9.5px] font-bold uppercase tracking-wider text-white bg-[#D96C2C] px-2.5 py-1 rounded-full shadow-sm">
                                    {tripBadge(card)}
                                  </span>
                                  <div className="absolute bottom-0 left-0 right-0 px-3.5 pb-3.5">
                                    <p className={`font-serif font-semibold text-white leading-tight ${i === 0 ? "text-2xl" : "text-lg"}`}>
                                      {card.destination}
                                    </p>
                                    <p className="text-[11px] text-white/80 mt-1 flex items-center gap-1">
                                      {card.duration}
                                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/trip:opacity-100 group-hover/trip:translate-x-0 transition-all" />
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between px-2 text-xs font-medium text-slate-500">
                          <span>Handcrafted slow-travel journeys across India &amp; beyond</span>
                          <Link
                            href={link.href}
                            onClick={() => setActiveDropdown(null)}
                            className="font-bold text-[#0E5A60] hover:text-[#D96C2C] flex items-center gap-1.5 transition-colors shrink-0"
                          >
                            <span>Explore all journeys</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    ) : (
                    <div className="bg-white/98 backdrop-blur-2xl text-slate-800 rounded-[28px] border border-white/80 shadow-[0_25px_60px_rgba(0,0,0,0.22)] p-5 w-[720px] animate-in fade-in slide-in-from-top-2 duration-200">
                      {/* Photo tiles: one tall, one wide, two small */}
                      <div className="grid grid-cols-3 grid-rows-2 gap-3 h-[320px]">
                      {dropdownData[link.name]?.map((item, i) => (
                        <Link
                          key={item.title}
                          href={item.href || "#"}
                          onClick={() => setActiveDropdown(null)}
                          className={`relative rounded-2xl overflow-hidden group/item bg-slate-200 text-left ${i === 0 ? "row-span-2" : i === 1 ? "col-span-2" : ""}`}
                        >
                          <img
                            src={item.image.replace("w=300", "w=800")}
                            alt={item.title}
                            className="absolute inset-0 w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                          {item.tag && (
                            <span className="absolute top-3 left-3 text-[9.5px] font-bold uppercase tracking-wider text-white bg-[#D96C2C] px-2.5 py-1 rounded-full shadow-sm">
                              {item.tag}
                            </span>
                          )}
                          <div className="absolute bottom-0 left-0 right-0 px-3.5 pb-3.5">
                            {/* One line each, so the text stays inside the dark fade at the bottom */}
                            <p className={`font-serif font-semibold text-white leading-tight flex items-center gap-1.5 ${i === 1 ? "text-xl" : "text-base"}`}>
                              <span className="truncate">{item.title}</span>
                              <ArrowRight className="w-4 h-4 shrink-0 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                            </p>
                            <p className="text-[11px] text-white/80 mt-1 leading-snug truncate">
                              {item.desc}
                            </p>
                          </div>
                        </Link>
                      ))}
                      </div>

                      {/* Dropdown Footer CTA Strip */}
                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between px-2 text-xs font-medium text-slate-500">
                        <span>
                          {link.name === "Tours"
                            ? "Curated solo-friendly group adventures & retreats"
                            : "Real memories & stories from the Kokalachi tribe"}
                        </span>
                        <Link
                          href={link.href}
                          onClick={() => setActiveDropdown(null)}
                          className="font-bold text-[#0E5A60] hover:text-[#D96C2C] flex items-center gap-1.5 transition-colors shrink-0"
                        >
                          <span>Explore all</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className={`flex items-center justify-center gap-2 font-medium text-xs uppercase tracking-widest rounded-full px-6 py-3 shadow-md hover:shadow-lg hover:scale-105 transition-all cursor-pointer font-sans ${
                isSolid
                  ? "bg-[#0E5A60] hover:bg-[#0B2A3D] text-white border border-transparent"
                  : "bg-[#0E5A60] hover:bg-[#0B2A3D] text-white border border-white/20"
              }`}
            >
              <span>Contact Us</span>
            </Link>
          </div>

          {/* Mobile Right Actions */}
          <div className="flex lg:hidden items-center gap-4">
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(true)}
              className={`p-1 transition-colors ${
                isSolid
                  ? "text-[#0E5A60] hover:text-[#C85A24]"
                  : "text-white hover:text-white/80"
              }`}
              aria-label="Open menu"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-[80%] max-w-sm bg-[#F8F5EE] shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
            <Link
              href="/"
              className="flex items-center gap-2 text-[#1C2B38]"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="w-8 h-8 shrink-0 rounded-full overflow-hidden border border-[#3E7C7A]/30">
                <img
                  src="/logo.png"
                  alt="Kokalachi Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-lg font-bold tracking-wider text-[#1C2B38]">
                Kokalachi
              </span>
            </Link>
            <button
              id="mobile-menu-close"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#6B7C85] hover:text-[#1C2B38] transition-colors p-1"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Nav Links Scroll Area */}
          <nav
            className="flex flex-col px-6 py-6 gap-1 flex-1 overflow-y-auto"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#3E7C7A transparent",
            }}
          >
            {navLinks.map((link, idx) => (
              <div key={link.name} className="flex flex-col">
                <Link
                  href={link.href}
                  onClick={(e) => {
                    if (link.hasDropdown) {
                      e.preventDefault();
                      setExpandedMobileDropdown(
                        expandedMobileDropdown === link.name ? null : link.name,
                      );
                    } else {
                      setMobileMenuOpen(false);
                    }
                  }}
                  className={`flex items-center justify-between py-3.5 px-4 rounded-xl font-bold text-base transition-all ${
                    link.name === "About Us"
                      ? "text-white bg-[#3E7C7A] border border-[#3E7C7A]/30"
                      : "text-[#1C2B38] hover:text-[#3E7C7A] hover:bg-[#3E7C7A]/5"
                  }`}
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        expandedMobileDropdown === link.name
                          ? "rotate-180 text-[#3E7C7A]"
                          : "text-[#6B7C85]"
                      }`}
                    />
                  )}
                </Link>

                {/* Mobile Dropdown Accordion List */}
                {link.hasDropdown && expandedMobileDropdown === link.name && (
                  <div className="flex flex-col pl-3 pr-2 py-2 gap-2 border-l-2 border-[#3E7C7A]/20 ml-4 mt-1 transition-all duration-300">
                    {dropdownData[link.name]?.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href || "#"}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-3 p-2 text-sm font-semibold text-slate-700 hover:text-[#0E5A60] hover:bg-white/70 rounded-xl transition-colors"
                      >
                        <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 shadow-xs bg-slate-100">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-xs font-bold text-[#0E5A60] truncate">{item.title}</span>
                          <span className="text-[10.5px] text-slate-500 truncate">{item.desc}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Drawer Footer */}
          <div className="px-6 py-6 border-t border-gray-200 flex flex-col gap-4">
            {/* Contact Us CTA Button */}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-[#0E5A60] text-white hover:bg-[#061C29] rounded-full px-6 py-3.5 font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer font-sans"
            >
              <Phone size={15} />
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
