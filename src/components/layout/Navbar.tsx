"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, User, Menu, X } from "lucide-react";

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
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
          className="w-4 h-4 text-[#3E7C7A]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
      ),
    },
    {
      title: "Reviews",
      desc: "Read experiences from our global community.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
          className="w-4 h-4 text-[#D97745]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.625 9.75a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm0 0H8.25m4.125 0a3 3 0 11-6 0 3 3 0 016 0zm0 0H12ma2.25 2.25 0 00-2.25-2.25H12m10.125 9a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      title: "Articles",
      desc: "Weekly travel tips, hacks, and advisories.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
          className="w-4 h-4 text-[#3E7C7A]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
          />
        </svg>
      ),
    },
  ],
  Pages: [
    {
      title: "About Us",
      desc: "Learn about our mission and visual story.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
          className="w-4 h-4 text-[#D97745]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 11.25l.041-.02a.75.75 0 11.517 1.28l-.042.022a.75.75 0 01-.515-1.282zm0 5.25h1.5m-1.5-10.5h.008v.008h-.008V6zm9 6a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Services",
      desc: "Tailored tour planning and booking options.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
          className="w-4 h-4 text-[#3E7C7A]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      title: "Our Guides",
      desc: "Meet our certified adventure and safety experts.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
          className="w-4 h-4 text-[#3E7C7A]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      title: "FAQs",
      desc: "Find budget guides and answers to questions.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
          className="w-4 h-4 text-[#D97745]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
          />
        </svg>
      ),
    },
  ],
  Blogs: [
    {
      title: "Travel Advisories",
      desc: "Up-to-date entry rules and safety guides.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
          className="w-4 h-4 text-[#3E7C7A]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      ),
    },
    {
      title: "Scenic Photos",
      desc: "Visual gallery from our latest traveler tracks.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
          className="w-4 h-4 text-[#D97745]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
      ),
    },
    {
      title: "Cultural Guides",
      desc: "Deep dive into local traditions and foods.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
          className="w-4 h-4 text-[#3E7C7A]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3"
          />
        </svg>
      ),
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
            : "top-0 w-full max-w-full bg-transparent py-6 px-4 md:px-8"
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
