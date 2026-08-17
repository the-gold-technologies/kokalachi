"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Clock, ArrowRight, ChevronUp } from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-[#060014] text-white pt-24 pb-12 overflow-hidden select-none">
      
      {/* Main Grid Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          
          {/* Column 1 - Brand Info */}
          <div className="flex flex-col gap-6 text-left">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <div className="w-11 h-11 shrink-0 rounded-full overflow-hidden border border-[#b3d8d6]/30 shadow-md">
                <img
                  src="/logo.png"
                  alt="Kokalachi Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col text-left">
                <span
                  className="text-xl font-semibold tracking-[0.2em] text-white flex items-center leading-none font-montserrat"
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
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[8px] uppercase tracking-[0.1em] text-white/80 font-bold">
                    Journeys Become Friendships
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mt-2">
              Pharetra Maecenas Felis Vestibulum Convallis Mollis Nullam Congue
              Sit.D Rivers Of Finland Quebec.
            </p>

            {/* Newsletter Input Field */}
            <div className="flex items-center bg-white rounded-xl p-1.5 w-full max-w-[340px] mt-2 shadow-inner">
              <input
                type="email"
                placeholder="Enter your mail"
                className="bg-transparent text-gray-800 placeholder-gray-400 px-3 py-2 w-full outline-none text-sm font-medium"
              />
              <button className="bg-[#3E7C7A] hover:bg-[#326462] text-white p-2.5 rounded-lg transition-colors flex items-center justify-center">
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Social Icons Row (Using imported icon components) */}
            <div className="flex items-center gap-3.5 mt-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#3E7C7A] transition-all text-white"
                aria-label="Facebook"
              >
                <FaFacebookF size={14} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#3E7C7A] transition-all text-white"
                aria-label="Twitter"
              >
                <FaTwitter size={14} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#3E7C7A] transition-all text-white"
                aria-label="Instagram"
              >
                <FaInstagram size={14} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#3E7C7A] transition-all text-white"
                aria-label="Pinterest"
              >
                <FaPinterestP size={14} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#3E7C7A] transition-all text-white"
                aria-label="YouTube"
              >
                <FaYoutube size={14} />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="text-left md:pl-4">
            <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
            <ul className="flex flex-col gap-4 text-gray-400 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Tour Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Information */}
          <div className="text-left">
            <h3 className="text-lg font-bold text-white mb-6">Information</h3>
            <ul className="flex flex-col gap-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#3E7C7A] shrink-0 mt-0.5" />
                <span>
                  58 Street Commercial Road <br />
                  Fratton, Australia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#3E7C7A] shrink-0" />
                <span>+123 888 9999</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-[#3E7C7A] shrink-0 mt-0.5" />
                <span>
                  Mon - Sat: 8 Am - 5 Pm, <br />
                  Sunday: <span className="text-[#3E7C7A] font-bold">CLOSED</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4 - Utility Pages */}
          <div className="text-left">
            <h3 className="text-lg font-bold text-white mb-6">Utility Pages</h3>
            <ul className="flex flex-col gap-4 text-gray-400 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Style Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Password Protected
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  404 Error
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Changelog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  License
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Separator Line */}
        <div className="border-t border-white/10 w-full pt-8 relative z-20 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-sm">
          
          {/* Left Skyline Vector Outline Watermark overlayed in the background */}
          <div className="absolute left-0 bottom-[-15px] w-[25%] opacity-15 pointer-events-none z-0 hidden md:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 160 50"
              fill="none"
              stroke="#3E7C7A"
              strokeWidth="0.8"
              className="w-full h-auto"
            >
              {/* Abstract City Skyline path */}
              <path d="M 0,50 L 5,50 L 5,30 L 12,30 L 12,20 L 15,10 L 18,20 L 18,30 L 25,30 L 25,45 L 30,45 L 30,15 L 38,15 L 38,5 L 40,5 L 40,15 L 46,15 L 46,45 L 55,45 L 55,25 L 68,25 L 68,50 L 78,50 L 78,35 L 82,20 L 86,35 L 86,45 L 94,45 L 94,10 L 98,10 L 98,45 L 110,45 L 110,30 L 122,30 L 122,50" />
            </svg>
          </div>

          {/* Right Skyline Vector Outline Watermark overlayed in the background */}
          <div className="absolute right-0 bottom-[-15px] w-[25%] opacity-15 pointer-events-none z-0 hidden md:block transform scale-x-[-1]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 160 50"
              fill="none"
              stroke="#3E7C7A"
              strokeWidth="0.8"
              className="w-full h-auto"
            >
              {/* Abstract City Skyline path */}
              <path d="M 0,50 L 5,50 L 5,30 L 12,30 L 12,20 L 15,10 L 18,20 L 18,30 L 25,30 L 25,45 L 30,45 L 30,15 L 38,15 L 38,5 L 40,5 L 40,15 L 46,15 L 46,45 L 55,45 L 55,25 L 68,25 L 68,50 L 78,50 L 78,35 L 82,20 L 86,35 L 86,45 L 94,45 L 94,10 L 98,10 L 98,45 L 110,45 L 110,30 L 122,30 L 122,50" />
            </svg>
          </div>

          {/* Copyright centered */}
          <p className="mx-auto z-10 text-gray-400">
            Copyright ©Kokalachi | All Right Reserved
          </p>

          {/* Scroll to top button aligned bottom-right */}
          <button
            onClick={scrollToTop}
            className="absolute right-0 bottom-6 w-10 h-10 rounded-full bg-[#3E7C7A] hover:bg-[#326462] text-white flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg z-25"
            aria-label="Scroll to top"
          >
            <ChevronUp size={18} />
          </button>

        </div>
      </div>
    </footer>
  );
}
