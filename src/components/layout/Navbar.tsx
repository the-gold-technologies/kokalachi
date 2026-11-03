"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { scrollToTopIfHome } from "@/lib/scrollToTop";
import { usePathname } from "next/navigation";
import { ChevronDown, Contact, Menu, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import type { TripCardData } from "@/data/trips";
import type { BlogPost } from "@/data/blogs";
import type { TopBarConfig } from "@/types/cms";
import { buildNavData, isCurrent, trimmedLogo, whatsappHref, type MenuKey, type NavLabels } from "./nav/navData";
import type { TripsMenu } from "@/data/tripPages";
import { NavPanel, PANEL_BG } from "./nav/NavPanels";
import { MobileMenu } from "./nav/MobileMenu";
import { TopBar } from "./nav/TopBar";

// Journeys · Trips · Blogs · Community · About Us, where the first three open a menu on hover
// (or click / Enter). A value line above says what we sell; WhatsApp and Contact Us sit on the right.

const LIGHT_HERO_PAGES: string[] = [];

interface NavbarProps {
  trips: TripCardData[];
  latestPost?: BlogPost;
  navLabels?: NavLabels; // menu link names from CMS → Navigation → Menu Links, by id
  tripsMenu?: TripsMenu | null; // the Trips dropdown (CMS → Trips Pages); null if unavailable
  logos: { dark?: string | null; light?: string | null }; // from CMS → SEO → Global
  whatsapp?: string | null; // CMS → SEO → Global → social links (number or wa.me link)
  phone?: string | null;
  topBar?: TopBarConfig | null; // CMS → SEO → Global → Top bar
}

export function Navbar({ trips, latestPost, navLabels, tripsMenu, logos, whatsapp, phone, topBar }: NavbarProps) {
  const pathname = usePathname();
  const data = useMemo(
    () => buildNavData(trips, latestPost, topBar, tripsMenu, navLabels),
    [trips, latestPost, topBar, tripsMenu, navLabels],
  );
  const wa = whatsappHref(whatsapp);
  const tel = phone ? `tel:${phone.replace(/[^+\d]/g, "")}` : null;

  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  // Sliding highlight behind the hovered/open menu label
  const [pill, setPill] = useState({ left: 0, width: 0, visible: false });

  const headerRef = useRef<HTMLElement>(null);
  const triggers = useRef<Partial<Record<MenuKey, HTMLElement | null>>>({});
  // The menu item of the section you're on; the hidden pill waits there, so on hover it glides
  // out from the current section instead of from the edge
  const currentItem = useRef<HTMLElement | null>(null);

  // Close everything after a navigation (also covers the browser back button)
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpenMenu(null);
    setMobileOpen(false);
    setPill((p) => ({ ...p, visible: false }));
  }

  const movePillTo = (el: HTMLElement | null | undefined) => {
    if (el) setPill({ left: el.offsetLeft, width: el.offsetWidth, visible: true });
  };

  // Hide the hover pill, parked on the current section (it shows there as the active pill)
  const hidePill = useCallback(() => {
    const el = currentItem.current;
    setPill((p) => (el ? { left: el.offsetLeft, width: el.offsetWidth, visible: false } : { ...p, visible: false }));
  }, []);

  const closeMenu = useCallback(() => {
    setOpenMenu(null);
    hidePill();
  }, [hidePill]);

  // Hover intent: a short delay before opening (so passing the mouse over doesn't flash a menu)
  // and a grace period before closing (so the mouse can travel from the label down to the panel).
  const openTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const clearTimers = () => {
    if (openTimer.current) clearTimeout(openTimer.current);
    if (closeTimer.current) clearTimeout(closeTimer.current);
    openTimer.current = closeTimer.current = null;
  };
  useEffect(() => clearTimers, []);

  const hoverOpen = (key: MenuKey, el: HTMLElement) => {
    clearTimers();
    movePillTo(el);
    // Already browsing the menus: switch at once. Otherwise wait a moment.
    if (openMenu) setOpenMenu(key);
    else openTimer.current = setTimeout(() => setOpenMenu(key), 140);
  };
  const scheduleClose = () => {
    clearTimers();
    closeTimer.current = setTimeout(closeMenu, 260);
  };
  const keepOpen = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = null;
  };

  // Click still works for keyboard and touch. A mouse click never closes a menu the hover just opened.
  const lastPointer = useRef<string>("");
  const clickMenu = (key: MenuKey, el: HTMLElement) => {
    clearTimers();
    movePillTo(el);
    if (openMenu === key && lastPointer.current !== "mouse") closeMenu();
    else setOpenMenu(key);
  };

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // While a menu is open: Esc closes it (focus back on its label), a click outside closes it
  useEffect(() => {
    if (!openMenu) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      triggers.current[openMenu]?.focus();
      closeMenu();
    };
    const onPointer = (e: PointerEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) closeMenu();
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [openMenu, closeMenu]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  // Pages whose hero is light, so the see-through navbar needs dark text there. None right now:
  // every page (About included) opens on a dark photo banner.
  const onLightHero = LIGHT_HERO_PAGES.includes(pathname);
  const isSolid = isScrolled || openMenu !== null;
  const darkText = isSolid || onLightHero;
  const darkLogo = trimmedLogo(logos.dark);
  const lightLogo = trimmedLogo(logos.light);

  return (
    <>
      {/* Dim the page while a menu is open; clicking it closes the menu */}
      <div
        aria-hidden
        className={`fixed inset-0 z-40 hidden lg:block bg-[#0B2A3D]/30 backdrop-blur-[2px] transition-opacity duration-300 ${
          openMenu ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      <header
        ref={headerRef}
        className={`fixed inset-x-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled ? "top-4" : "top-0 pb-2"
        }`}
      >
        {/* Soft shade behind the see-through navbar so white text reads on bright photos */}
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-x-0 top-0 -z-10 h-[150%] bg-gradient-to-b from-[#0B2A3D]/55 via-[#0B2A3D]/20 to-transparent transition-opacity duration-500 ${
            isScrolled || onLightHero ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Top bar: rotating facts + live trip info (CMS → SEO → Global → Top bar). Folds away once scrolled. */}
        {/* Hidden on phones: the small screen keeps just the logo, WhatsApp and the menu */}
        {data.showTopBar && (
          <div
            className={`hidden md:grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${
              isScrolled ? "grid-rows-[0fr] opacity-0" : "grid-rows-[1fr] opacity-100"
            }`}
          >
            <div className="overflow-hidden">
              <TopBar facts={data.facts} ticker={data.ticker} light={onLightHero} hidden={isScrolled} />
            </div>
          </div>
        )}

        {/* Same gutter as every section; the pill reaches a little past it so the logo & CTA line up with page content */}
        <div className={`site-container ${isScrolled ? "" : "pt-1"}`}>
          <div
            className={`flex items-center justify-between rounded-full border -mx-3 px-3 md:-mx-5 md:px-5 py-2.5 transition-all duration-500 ease-in-out ${
              isSolid
                ? "bg-white/95 backdrop-blur-md shadow-[0_15px_40px_rgba(28,43,56,0.12)] border-gray-100/80"
                : "bg-transparent border-transparent"
            }`}
          >
            <Link href="/" onClick={scrollToTopIfHome} className="flex items-center gap-3 shrink-0" aria-label="Kokalachi home">
              {/* Both logos sit in one slot and crossfade, so swapping light ↔ dark (on scroll or when a
                  menu opens) never changes the width and the menu never shifts. The dark logo sets the
                  slot's width; the light one is laid over it, left-aligned. 24.4px tall = the visible size
                  of the live site's light logo (28px image with its transparent padding trimmed off). */}
              {(darkLogo || lightLogo) && (
                <span className="relative block h-[24.4px]">
                  <img
                    src={(darkLogo || lightLogo)!}
                    alt="Kokalachi"
                    className={`h-[24.4px] w-auto object-contain transition-opacity duration-300 ${
                      darkText || !lightLogo ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  {darkLogo && lightLogo && (
                    <img
                      src={lightLogo}
                      alt=""
                      aria-hidden
                      className={`absolute inset-0 h-full w-full object-contain object-left transition-opacity duration-300 ${
                        darkText ? "opacity-0" : "opacity-100"
                      }`}
                    />
                  )}
                </span>
              )}
            </Link>

            {/* Desktop menus: click to open */}
            <nav
              aria-label="Main"
              className="hidden lg:flex relative items-center"
              onMouseLeave={() => {
                if (openMenu) {
                  movePillTo(triggers.current[openMenu]);
                  scheduleClose();
                } else {
                  clearTimers();
                  hidePill();
                }
              }}
            >
              <span
                aria-hidden
                className={`absolute top-1/2 -translate-y-1/2 h-9 rounded-full transition-all duration-300 ease-out ${
                  darkText ? "bg-[#0E5A60]/[0.07]" : "bg-white/15"
                } ${pill.visible ? "opacity-100" : "opacity-0"}`}
                style={{ left: pill.left, width: pill.width }}
              />
              {data.items.map((item) => {
                const current = isCurrent(item, pathname);
                // The section you're on gets the same soft pill as hover. While the sliding hover pill
                // is showing, it takes over, so two pills never show at once.
                const currentBg =
                  current && !pill.visible ? (darkText ? "bg-[#0E5A60]/[0.07] text-[#0E5A60]" : "bg-white/15 text-white") : "";
                const textClass = (active: boolean) =>
                  active
                    ? darkText
                      ? "text-[#D96C2C]"
                      : "text-white"
                    : darkText
                      ? "text-[#0B2A3D] hover:text-[#0E5A60]"
                      : "text-white/90 hover:text-white";
                const base =
                  "relative z-10 flex items-center gap-1.5 px-4 xl:px-5 h-10 rounded-full text-[14.5px] font-medium transition-colors duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[#D96C2C]/60";

                if (item.kind === "link") {
                  return (
                    <Link
                      key={item.href}
                      ref={(el) => {
                        if (current) currentItem.current = el;
                        else if (currentItem.current === el) currentItem.current = null;
                      }}
                      href={item.href}
                      aria-current={current ? "page" : undefined}
                      onMouseEnter={(e) => {
                        // Hovering a plain link while a menu is open closes the menu
                        clearTimers();
                        setOpenMenu(null);
                        movePillTo(e.currentTarget);
                      }}
                      onFocus={(e) => movePillTo(e.currentTarget)}
                      className={`${base} ${textClass(false)} ${currentBg}`}
                    >
                      {item.label}
                    </Link>
                  );
                }

                const { key } = item;
                const isOpen = openMenu === key;
                return (
                  // A link to the section's main page (/journeys, /trips, /blogs): a mouse opens the menu
                  // on hover and goes to the page on click; on touch the first tap opens the menu and
                  // the second goes to the page; on a keyboard Enter goes to the page, ↓ or Space opens it.
                  <Link
                    key={key}
                    href={item.href}
                    ref={(el) => {
                      triggers.current[key] = el;
                      if (current) currentItem.current = el;
                      else if (currentItem.current === el) currentItem.current = null;
                    }}
                    aria-expanded={isOpen}
                    aria-controls="nav-panel"
                    aria-haspopup="true"
                    aria-current={current ? "page" : undefined}
                    onPointerDown={(e) => {
                      lastPointer.current = e.pointerType;
                    }}
                    onKeyDown={(e) => {
                      lastPointer.current = "";
                      if (e.key === "ArrowDown" || e.key === " ") {
                        e.preventDefault();
                        clearTimers();
                        movePillTo(e.currentTarget);
                        setOpenMenu(key);
                      }
                    }}
                    onClick={(e) => {
                      const touch = lastPointer.current === "touch" || lastPointer.current === "pen";
                      if (touch && !isOpen) {
                        e.preventDefault();
                        clickMenu(key, e.currentTarget);
                      } else {
                        closeMenu();
                      }
                    }}
                    onMouseEnter={(e) => hoverOpen(key, e.currentTarget)}
                    onFocus={(e) => movePillTo(e.currentTarget)}
                    className={`${base} ${textClass(isOpen)} ${isOpen ? "" : currentBg}`}
                  >
                    {item.label}
                    <ChevronDown
                      size={15}
                      strokeWidth={2.25}
                      className={`opacity-70 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Desktop actions: chat (easy first step) + Contact Us */}
            <div className="hidden lg:flex items-center gap-2.5 shrink-0">
              {(wa || tel) && (
                <a
                  href={wa ?? tel ?? undefined}
                  target={wa ? "_blank" : undefined}
                  rel={wa ? "noopener noreferrer" : undefined}
                  aria-label={wa ? "Chat with us on WhatsApp" : "Call us"}
                  title={wa ? "Chat with us on WhatsApp" : "Call us"}
                  className={`grid place-items-center h-11 w-10 transition-all hover:scale-110 ${
                    darkText ? "text-[#0E5A60] hover:text-[#25D366]" : "text-white hover:text-[#25D366]"
                  }`}
                >
                  {wa ? <FaWhatsapp size={32} /> : <Phone size={26} />}
                </a>
              )}
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[#D96C2C] hover:bg-[#b8571e] text-white text-[13.5px] font-semibold pl-5 pr-4 py-2.5 shadow-[0_6px_16px_rgba(217,108,44,0.32)] hover:shadow-[0_8px_22px_rgba(217,108,44,0.42)] transition-all"
              >
                {data.contactLabel}
                <Contact className="w-[18px] h-[18px] transition-transform duration-300 group-hover:scale-110" />
              </Link>
            </div>

            {/* Mobile actions: chat stays one tap away, outside the drawer */}
            <div className="flex lg:hidden items-center gap-1.5">
              {wa && (
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with us on WhatsApp"
                  className={`grid place-items-center h-10 w-10 rounded-full transition-colors ${
                    darkText ? "text-[#0E5A60] hover:bg-[#0E5A60]/[0.06]" : "text-white hover:bg-white/10"
                  }`}
                >
                  <FaWhatsapp size={24} />
                </a>
              )}
              <button
                id="mobile-menu-toggle"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                aria-expanded={mobileOpen}
                className={`grid place-items-center h-10 w-10 rounded-full transition-colors ${
                  darkText ? "text-[#0E5A60] hover:bg-[#0E5A60]/[0.06]" : "text-white hover:bg-white/10"
                }`}
              >
                <Menu size={24} />
              </button>
            </div>
          </div>

          {/* The open menu: one panel whose content cross-fades when you switch menus */}
          {openMenu && (
            // pt-3 instead of a margin: the gap under the pill counts as part of the panel for hover
            <div
              id="nav-panel"
              onMouseEnter={keepOpen}
              onMouseLeave={scheduleClose}
              className="hidden lg:block -mx-3 md:-mx-5 pt-3 nav-panel-in"
            >
              <div
                className="rounded-[28px] border border-white shadow-[0_30px_70px_rgba(11,42,61,0.25)] p-7 xl:p-8 max-h-[calc(100vh-120px)] overflow-y-auto"
                style={{ backgroundColor: PANEL_BG }}
              >
                <div key={openMenu} className="nav-content-in">
                  <NavPanel menu={openMenu} data={data} whatsapp={wa} close={closeMenu} />
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      <MobileMenu
        open={mobileOpen}
        onClose={closeMobile}
        data={data}
        logo={darkLogo}
        pathname={pathname}
        whatsapp={wa}
        phone={phone}
      />
    </>
  );
}
