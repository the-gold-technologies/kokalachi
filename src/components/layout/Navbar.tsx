"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
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
  Image,
  Compass,
} from "lucide-react";

interface DropdownItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const dropdownData: Record<string, DropdownItem[]> = {
  Features: [
    {
      title: "Destinations",
      desc: "Browse our 8 trending worldwide travel spots.",
      icon: <MapPin className="w-4 h-4 text-[#3E7C7A]" />,
    },
    {
      title: "Reviews",
      desc: "Read experiences from our global community.",
      icon: <Star className="w-4 h-4 text-[#D97745]" />,
    },
    {
      title: "Articles",
      desc: "Weekly travel tips, hacks, and advisories.",
      icon: <FileText className="w-4 h-4 text-[#3E7C7A]" />,
    },
  ],
  Pages: [
    {
      title: "About Us",
      desc: "Learn about our mission and visual story.",
      icon: <Info className="w-4 h-4 text-[#D97745]" />,
    },
    {
      title: "Services",
      desc: "Tailored tour planning and booking options.",
      icon: <Briefcase className="w-4 h-4 text-[#3E7C7A]" />,
    },
    {
      title: "Our Guides",
      desc: "Meet our certified adventure and safety experts.",
      icon: <Users className="w-4 h-4 text-[#3E7C7A]" />,
    },
    {
      title: "FAQs",
      desc: "Find budget guides and answers to questions.",
      icon: <HelpCircle className="w-4 h-4 text-[#D97745]" />,
    },
  ],
  Blogs: [
    {
      title: "Travel Advisories",
      desc: "Up-to-date entry rules and safety guides.",
      icon: <AlertTriangle className="w-4 h-4 text-[#3E7C7A]" />,
    },
    {
      title: "Scenic Photos",
      desc: "Visual gallery from our latest traveler tracks.",
      icon: <Image className="w-4 h-4 text-[#D97745]" />,
    },
    {
      title: "Cultural Guides",
      desc: "Deep dive into local traditions and foods.",
      icon: <Compass className="w-4 h-4 text-[#3E7C7A]" />,
    },
  ],
};

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobileDropdown, setExpandedMobileDropdown] = useState<
    string | null
  >(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
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
    { name: "Home", href: "#", hasDropdown: false },
    { name: "Features", href: "#", hasDropdown: true },
    { name: "Pages", href: "#", hasDropdown: true },
    { name: "Blogs", href: "#", hasDropdown: true },
    { name: "Contact", href: "#", hasDropdown: false },
  ];

  return (
    <>
      <header
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out ${
          isScrolled
            ? "top-4 w-[95%] max-w-[1220px] bg-white/95 backdrop-blur-md shadow-[0_15px_40px_rgba(28,43,56,0.12)] border border-gray-100/80 rounded-full py-2.5 px-5 md:px-5"
            : "top-0 w-full max-w-full bg-transparent py-6 px-4 lg:px-[80px]"
        }`}
      >
        <div className="mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex items-center gap-2.5">
              {/* Circular Kokalachi Image Logo */}
              <div className="w-11 h-11 shrink-0 rounded-full overflow-hidden border border-[#b3d8d6]/30 shadow-md">
                <img
                  src="/logo.png"
                  alt="Kokalachi Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="hidden sm:flex flex-col text-left">
                <span
                  className={`text-xl font-semibold tracking-[0.2em] leading-none flex items-center transition-colors duration-500 font-montserrat ${isScrolled ? "text-[#1C2B38]" : "text-white"}`}
                >
                  KOKAL
                  <span className="relative inline-block tracking-normal mr-1">
                    A
                    <svg
                      className="absolute left-1/2 -translate-x-1/2 top-[35%] w-[130%] h-1.5 text-[#D97745]"
                      viewBox="0 0 20 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.5 5C5.5 2 14.5 2 18.5 5"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  CHI
                </span>
                <div className="flex items-center gap-2 mt-1 hidden lg:flex">
                  <span
                    className={`text-[8px] uppercase tracking-[0.1em] font-bold transition-colors duration-500 ${isScrolled ? "text-[#6B7C85]" : "text-[#b3d8d6]"}`}
                  >
                    Journeys Become Friendships
                  </span>
                </div>
              </div>
            </div>
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
                  className={`flex items-center gap-1 font-medium
                     text-sm uppercase tracking-wider transition-colors duration-500 ${
                       isScrolled
                         ? "text-[#1C2B38] hover:text-[#3E7C7A]"
                         : "text-white hover:text-[#b3d8d6]"
                     }`}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown size={13} className="opacity-80" />
                  )}
                </Link>

                {/* Enhanced Premium Dropdown Menu Layout with Hover Bridge */}
                {link.hasDropdown && activeDropdown === link.name && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-3.5 z-50">
                    <div className="bg-white text-[#1C2B38] rounded-2xl shadow-[0_15px_50px_rgba(28,43,56,0.18)] p-5 border border-gray-100 w-[460px] grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-3 duration-200">
                      {dropdownData[link.name]?.map((item) => (
                        <Link
                          key={item.title}
                          href="#"
                          className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-[#F8F5EE] transition-all group/item"
                        >
                          <div className="w-9 h-9 shrink-0 rounded-lg bg-[#3E7C7A]/10 group-hover/item:bg-white flex items-center justify-center transition-colors">
                            {item.icon}
                          </div>
                          <div className="flex flex-col text-left">
                            <span className="font-bold text-[#1C2B38] text-xs leading-tight group-hover/item:text-[#3E7C7A] transition-colors mb-0.5">
                              {item.title}
                            </span>
                            <span className="text-[10px] text-[#6B7C85] leading-normal font-semibold">
                              {item.desc}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Right Actions (Morphed beautifully into the pill layout) */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              className={`flex items-center justify-center gap-2 font-bold text-xs uppercase tracking-wider rounded-full px-6 py-2.5 transition-all duration-500 ${
                isScrolled
                  ? "hover:bg-[#326462] bg-[#3e7c7a] text-white shadow-md"
                  : "border border-white/30 text-white hover:bg-white/10"
              }`}
            >
              <User size={14} />
              Login
            </button>
          </div>

          {/* Mobile Right Actions */}
          <div className="flex lg:hidden items-center gap-4">
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(true)}
              className={`p-1 transition-colors duration-500 ${isScrolled ? "text-[#1C2B38]" : "text-white"}`}
              aria-label="Open menu"
            >
              <Menu size={28} />
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
                    link.name === "Home"
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
                  <div className="flex flex-col pl-6 pr-4 py-1.5 gap-1.5 border-l-2 border-[#3E7C7A]/20 ml-4 mt-1 transition-all duration-300">
                    {dropdownData[link.name]?.map((item) => (
                      <Link
                        key={item.title}
                        href="#"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-2 py-2.5 px-3 text-sm font-bold text-[#6B7C85] hover:text-[#3E7C7A] hover:bg-[#3E7C7A]/5 rounded-lg transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#3E7C7A]"></span>
                        <span>{item.title}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Drawer Footer */}
          <div className="px-6 py-6 border-t border-gray-200 flex flex-col gap-4">
            {/* Login Button */}
            <button className="w-full flex items-center justify-center gap-2 border border-[#3E7C7A]/30 text-[#3E7C7A] hover:bg-[#3E7C7A]/5 rounded-full px-6 py-3 font-bold transition-colors">
              <User size={16} />
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
