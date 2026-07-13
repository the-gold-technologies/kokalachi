"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";

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
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              {/* Circular Kokalachi Vector Logo */}
              <div className="w-11 h-11 shrink-0 bg-[#F5EBDD] rounded-full p-1.5 flex items-center justify-center border border-[#b3d8d6]/30 shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  className="w-full h-full"
                >
                  <circle cx="50" cy="50" r="48" fill="#F5EBDD" />
                  <circle cx="50" cy="35" r="16" fill="#D97745" opacity="0.8" />
                  <path d="M 10,75 L 40,42 L 65,68 L 90,75 Z" fill="#3E7C7A" />
                  <path d="M 30,75 L 60,35 L 75,55 L 90,75 Z" fill="#326462" opacity="0.9" />
                  <path d="M 50,75 Q 45,60 50,50 L 52,50 Q 48,60 53,75 Z" fill="#F5EBDD" />
                  <circle cx="36" cy="62" r="3.5" fill="#1F355E" />
                  <rect x="33.5" y="65.5" width="5" height="7" rx="1" fill="#1F355E" />
                  <rect x="31" y="65" width="2.5" height="5" rx="0.5" fill="#D97745" />
                  <circle cx="50" cy="58" r="3.5" fill="#1F355E" />
                  <rect x="47.5" y="61.5" width="5" height="8" rx="1" fill="#1F355E" />
                  <rect x="45" y="61" width="2.5" height="6" rx="0.5" fill="#D97745" />
                  <circle cx="64" cy="62" r="3.5" fill="#1F355E" />
                  <rect x="61.5" y="65.5" width="5" height="7" rx="1" fill="#1F355E" />
                  <rect x="64.5" y="65" width="2.5" height="5" rx="0.5" fill="#D97745" />
                </svg>
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

            {/* Social Icons Row (Using inline SVGs for full portability) */}
            <div className="flex items-center gap-3.5 mt-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#3E7C7A] transition-all text-white"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#3E7C7A] transition-all text-white"
                aria-label="Twitter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#3E7C7A] transition-all text-white"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#3E7C7A] transition-all text-white"
                aria-label="Pinterest"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M12.017 0c-6.627 0-12 5.373-12 12 0 5.077 3.153 9.422 7.6 11.127-.107-.947-.2-2.399.04-3.431.218-.938 1.4-5.928 1.4-5.928s-.358-.716-.358-1.777c0-1.664.965-2.906 2.164-2.906 1.02 0 1.512.766 1.512 1.684 0 1.026-.653 2.56-.99 3.982-.281 1.189.6 2.158 1.77 2.158 2.124 0 3.756-2.241 3.756-5.479 0-2.864-2.057-4.869-5.002-4.869-3.409 0-5.409 2.562-5.409 5.199 0 1.031.395 2.138.89 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.27 1.042-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.374 12-12 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#3E7C7A] transition-all text-white"
                aria-label="YouTube"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/><polygon points="10 15 15 12 10 9 10 15"/></svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="3"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          </button>

        </div>
      </div>
    </footer>
  );
}
