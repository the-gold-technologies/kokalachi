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

interface DropdownItem {
  title: string;
  tag?: string;
  desc: string;
  image: string;
  href?: string;
}

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
    {
      title: "Kashmir & Ladakh",
      tag: "Mountains",
      desc: "Glacial valleys, houseboats & serene passes.",
      image:
        "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&q=80&w=300",
      href: "/journeys",
    },
    {
      title: "Meghalaya & Spiti",
      tag: "Wilderness",
      desc: "Misty waterfalls, rugged peaks & raw nature.",
      image:
        "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=300",
      href: "/journeys",
    },
    {
      title: "Kerala & South",
      tag: "Tropical",
      desc: "Lush tea hills, serene lagoons & coastlines.",
      image:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=300",
      href: "/journeys",
    },
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
                    <ChevronDown size={16} className="opacity-90" strokeWidth={2} />
                  )}
                </Link>

                {/* Enhanced Premium Dropdown Menu Layout with Hover Bridge */}
                {link.hasDropdown && activeDropdown === link.name && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-3.5 z-50">
                    <div className="bg-white/98 backdrop-blur-2xl text-slate-800 rounded-[28px] border border-white/80 shadow-[0_25px_60px_rgba(0,0,0,0.22)] p-4 sm:p-5 w-[620px] grid grid-cols-2 gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
                      {dropdownData[link.name]?.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href || "#"}
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-center gap-3.5 p-2.5 rounded-2xl hover:bg-[#FAF6F0] border border-transparent hover:border-amber-900/10 transition-all duration-300 group/item text-left"
                        >
                          {/* Rich Visual Image Thumbnail */}
                          <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl overflow-hidden shrink-0 shadow-sm relative bg-slate-100">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity" />
                          </div>

                          {/* Content */}
                          <div className="flex flex-col min-w-0 flex-1">
                            {item.tag && (
                              <span className="text-[9.5px] font-bold uppercase tracking-wider text-[#D96C2C] bg-[#D96C2C]/10 px-2 py-0.5 rounded-full inline-block mb-1 w-fit">
                                {item.tag}
                              </span>
                            )}
                            <span className="font-bold text-xs sm:text-[13px] text-[#0E5A60] group-hover/item:text-[#D96C2C] leading-snug transition-colors line-clamp-1">
                              {item.title}
                            </span>
                            <span className="text-[11px] text-slate-500 leading-snug line-clamp-2 mt-0.5">
                              {item.desc}
                            </span>
                          </div>
                        </Link>
                      ))}

                      {/* Dropdown Footer CTA Strip */}
                      <div className="col-span-2 pt-3 mt-1 border-t border-slate-100 flex items-center justify-between px-2 text-xs font-medium text-slate-500">
                        <span>
                          {link.name === "Destinations"
                            ? "Handcrafted slow-travel destinations across India"
                            : link.name === "Tours"
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
