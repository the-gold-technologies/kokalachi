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
} from "lucide-react";

interface DropdownItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
  href?: string;
}

const dropdownData: Record<string, DropdownItem[]> = {
  Features: [
    {
      title: "Destinations",
      desc: "Browse our 8 trending worldwide travel spots.",
      icon: <MapPin className="w-4 h-4 text-[#3E7C7A]" />,
      href: "/#upcoming-journeys",
    },
    {
      title: "Reviews",
      desc: "Read experiences from our global community.",
      icon: <Star className="w-4 h-4 text-[#D97745]" />,
      href: "/#moments",
    },
    {
      title: "Articles",
      desc: "Weekly travel tips, hacks, and advisories.",
      icon: <FileText className="w-4 h-4 text-[#3E7C7A]" />,
      href: "/about#why-we-started",
    },
  ],
  Pages: [
    {
      title: "About Us",
      desc: "Learn about our mission and visual story.",
      icon: <Info className="w-4 h-4 text-[#D97745]" />,
      href: "/about",
    },
    {
      title: "Services",
      desc: "Tailored tour planning and booking options.",
      icon: <Briefcase className="w-4 h-4 text-[#3E7C7A]" />,
      href: "/#how-it-works",
    },
    {
      title: "Our Guides",
      desc: "Meet our certified adventure and safety experts.",
      icon: <Users className="w-4 h-4 text-[#3E7C7A]" />,
      href: "/about#meet-the-founder",
    },
    {
      title: "FAQs",
      desc: "Find budget guides and answers to questions.",
      icon: <HelpCircle className="w-4 h-4 text-[#D97745]" />,
      href: "/#good-company",
    },
  ],
  Blogs: [
    {
      title: "Travel Advisories",
      desc: "Up-to-date entry rules and safety guides.",
      icon: <AlertTriangle className="w-4 h-4 text-[#3E7C7A]" />,
      href: "/about#what-we-believe",
    },
    {
      title: "Scenic Photos",
      desc: "Visual gallery from our latest traveler tracks.",
      icon: <ImageIcon className="w-4 h-4 text-[#D97745]" />,
      href: "/#moments",
    },
    {
      title: "Cultural Guides",
      desc: "Deep dive into local traditions and foods.",
      icon: <Compass className="w-4 h-4 text-[#3E7C7A]" />,
      href: "/about#join-the-tribe",
    },
  ],
};

export function Navbar() {
  const pathname = usePathname();
  const isAboutPage = pathname === "/about";
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
    { name: "About Us", href: "/about", hasDropdown: false },
    { name: "Features", href: "#", hasDropdown: true },
    { name: "Pages", href: "#", hasDropdown: true },
    { name: "Blogs", href: "#", hasDropdown: true },
  ];

  return (
    <>
      <header
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out ${
          isScrolled
            ? "top-4 w-[95%] max-w-[1220px] bg-white/95 backdrop-blur-md shadow-[0_15px_40px_rgba(28,43,56,0.12)] border border-gray-100/80 rounded-full py-2.5 px-5 md:px-6"
            : "top-0 w-full max-w-full bg-transparent py-6"
        }`}
      >
        <div
          className={`mx-auto flex items-center justify-between ${
            isScrolled ? "w-full" : "container px-6 md:px-12 lg:px-16"
          }`}
        >
          {/* Main Logo Image */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Kokalachi Logo"
              className={`h-10 ${isScrolled ? " sm:h-[60px] -ml-2.5" : " sm:h-[65px] -ml-5"}  w-auto object-contain hover:scale-105 transition-transform`}
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
                  className="flex items-center gap-1 font-semibold text-xs uppercase tracking-widest text-[#0B2A3D] hover:text-[#C85A24] transition-colors duration-300 font-montserrat"
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown size={13} className="opacity-75" />
                  )}
                </Link>

                {/* Enhanced Premium Dropdown Menu Layout with Hover Bridge */}
                {link.hasDropdown && activeDropdown === link.name && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-3.5 z-50">
                    <div className="bg-[#FFFDF9] text-[#0B2A3D] rounded-2xl shadow-[0_15px_50px_rgba(28,43,56,0.15)] p-5 border border-amber-900/10 w-[460px] grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-3 duration-200">
                      {dropdownData[link.name]?.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href || "#"}
                          className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-[#FAF5EE] transition-all group/item"
                        >
                          <div className="w-9 h-9 shrink-0 rounded-lg bg-[#C85A24]/10 group-hover/item:bg-white flex items-center justify-center transition-colors">
                            {item.icon}
                          </div>
                          <div className="flex flex-col text-left">
                            <span className="font-bold text-[#0B2A3D] text-xs leading-tight group-hover/item:text-[#C85A24] transition-colors mb-0.5">
                              {item.title}
                            </span>
                            <span className="text-[10px] text-[#0B2A3D]/70 leading-normal font-medium">
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

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 font-bold text-xs uppercase tracking-wider rounded-full px-6 py-2.5 bg-[#0B2A3D] hover:bg-[#061C29] text-white shadow-md hover:shadow-lg hover:scale-105 transition-all cursor-pointer font-sans"
            >
              <span>Contact Us</span>
            </a>
          </div>

          {/* Mobile Right Actions */}
          <div className="flex lg:hidden items-center gap-4">
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(true)}
              className="p-1 text-[#0B2A3D] hover:text-[#C85A24] transition-colors"
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
                  <div className="flex flex-col pl-6 pr-4 py-1.5 gap-1.5 border-l-2 border-[#3E7C7A]/20 ml-4 mt-1 transition-all duration-300">
                    {dropdownData[link.name]?.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href || "#"}
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
