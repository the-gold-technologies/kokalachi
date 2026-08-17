"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { BrandLogo } from "./BrandLogo";

export function NavbarV2() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Concise 4 essential nav links
  const navLinks = [
    { name: "Why We Exist", href: "#why-we-exist" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Upcoming Circles", href: "#upcoming-circles" },
    { name: "FAQs", href: "#faqs" },
  ];

  return (
    <>
      <header
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-in-out ${
          isScrolled
            ? "top-3 w-[92%] max-w-5xl bg-[#F7F3EC]/95 backdrop-blur-md shadow-lg border border-[#0B2A3D]/10 rounded-full py-2.5 px-6 text-[#0B2A3D]"
            : "top-0 w-full bg-[#F7F3EC]/80 backdrop-blur-md border-b border-[#0B2A3D]/10 py-3.5 px-6 lg:px-12 text-[#0B2A3D]"
        }`}
      >
        <div className="mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <BrandLogo variant="dark" size="sm" showTagline={false} />

          {/* Desktop Concise Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-wider font-bold text-[#0B2A3D]/80 hover:text-[#0E5A60] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#upcoming-circles"
              className="flex items-center gap-1.5 font-bold text-xs uppercase tracking-wider rounded-full px-5 py-2 bg-[#0B2A3D] hover:bg-[#0E5A60] text-white shadow-sm transition-all hover:scale-105"
            >
              <span>Join Circle</span>
              <ArrowRight size={13} />
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-1.5 text-[#0B2A3D] hover:text-[#0E5A60] transition-colors"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-300 md:hidden ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        <div
          className={`absolute top-0 right-0 h-full w-[80%] max-w-xs bg-[#F7F3EC] text-[#0B2A3D] shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
            <BrandLogo variant="dark" size="sm" showTagline={false} />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-500 hover:text-[#0B2A3D] p-1"
            >
              <X size={22} />
            </button>
          </div>

          {/* Nav List */}
          <nav className="flex flex-col px-6 py-6 gap-2 flex-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 px-4 rounded-xl font-bold text-sm text-[#0B2A3D] hover:bg-[#0E5A60]/10 hover:text-[#0E5A60] transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Drawer CTA */}
          <div className="p-6 border-t border-slate-200">
            <a
              href="#upcoming-circles"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 font-bold text-xs uppercase tracking-wider rounded-full py-3 bg-[#0B2A3D] hover:bg-[#0E5A60] text-white shadow-md transition-all"
            >
              <span>Join Circle</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
