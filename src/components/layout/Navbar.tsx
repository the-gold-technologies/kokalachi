"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Phone, ShoppingCart, User, Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
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
    { name: "Home", href: "#", hasDropdown: true },
    { name: "Features", href: "#", hasDropdown: true },
    { name: "Pages", href: "#", hasDropdown: true },
    { name: "Blogs", href: "#", hasDropdown: true },
    { name: "Contact", href: "#", hasDropdown: false },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/90 shadow-md py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 text-white">
            <div className="flex items-center gap-2.5">
              {/* Circular Kokalachi Image Logo */}
              <div className="w-11 h-11 shrink-0 rounded-full overflow-hidden border border-[#b3d8d6]/30 shadow-md">
                <img
                  src="/logo.png"
                  alt="Kokalachi Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xl font-extrabold tracking-widest text-white leading-none">
                  KOKALACHI
                </span>
                <span className="text-[7.5px] uppercase tracking-[0.16em] text-[#b3d8d6] mt-1 font-bold">
                  Journeys Become Friendships
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center gap-1 font-medium transition-colors hover:text-primary text-white`}
              >
                {link.name}
                {link.hasDropdown && <ChevronDown size={14} />}
              </Link>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Call Us */}
            <div className="flex items-center gap-3 text-white">
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                <Phone size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-300">Call Us:</span>
                <span className="text-sm font-bold">+123 5959 66</span>
              </div>
            </div>

            {/* Cart */}
            <div className="relative text-white cursor-pointer">
              <ShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-secondary text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </div>

            {/* Login */}
            <button className="flex items-center gap-2 border border-white/30 text-white rounded-full px-6 py-2 font-medium hover:bg-white/10 transition-colors">
              <User size={16} />
              Login
            </button>

            <div className="w-px h-6 bg-white/20"></div>

            {/* Hamburger Menu (desktop) */}
            <button className="text-white">
              <Menu size={28} />
            </button>
          </div>

          {/* Mobile Right Actions */}
          <div className="flex lg:hidden items-center gap-4">
            {/* Cart (mobile) */}
            <div className="relative text-white cursor-pointer">
              <ShoppingCart size={22} />
              <span className="absolute -top-2 -right-2 bg-secondary text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </div>

            {/* Hamburger toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(true)}
              className="text-white p-1"
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
          className={`absolute top-0 right-0 h-full w-[80%] max-w-sm bg-[#0d0d1a] shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
            <Link
              href="/"
              className="flex items-center gap-2 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="w-8 h-8 shrink-0 rounded-full overflow-hidden border border-[#b3d8d6]/30">
                <img
                  src="/logo.png"
                  alt="Kokalachi Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-lg font-bold tracking-wider">
                Kokalachi
              </span>
            </Link>
            <button
              id="mobile-menu-close"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/70 hover:text-white transition-colors p-1"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-col px-6 py-6 gap-1 flex-1 overflow-y-auto">
            {navLinks.map((link, idx) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between py-3.5 px-4 rounded-xl font-medium text-base transition-all ${
                  link.name === "Home"
                    ? "text-white bg-purple-700/30 border border-purple-500/30"
                    : "text-white/80 hover:text-white hover:bg-white/5"
                }`}
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {link.name}
                {link.hasDropdown && (
                  <ChevronDown size={16} className="text-white/50" />
                )}
              </Link>
            ))}
          </nav>

          {/* Drawer Footer */}
          <div className="px-6 py-6 border-t border-white/10 flex flex-col gap-4">
            {/* Call Us */}
            <div className="flex items-center gap-3 text-white">
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-white/5">
                <Phone size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-400">Call Us:</span>
                <span className="text-sm font-bold">+123 5959 66</span>
              </div>
            </div>

            {/* Login Button */}
            <button className="w-full flex items-center justify-center gap-2 border border-white/30 text-white rounded-full px-6 py-3 font-medium hover:bg-white/10 transition-colors">
              <User size={16} />
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
