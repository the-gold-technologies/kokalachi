"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { scrollToTopIfHome } from "@/lib/scrollToTop";
import { ArrowRight, ChevronDown, Contact, Phone, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { DestinationRow, LinkIcon, MonthCalendarTile, TicketCard } from "./NavPanels";
import { isCurrent, type MenuKey, type MenuLink, type NavData } from "./navData";

const DRAWER_BG = "#F8F5EE";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  data: NavData;
  logo?: string | null;
  pathname: string;
  whatsapp: string | null;
  phone?: string | null;
}

function Row({ link, active, onClose }: { link: MenuLink; active: boolean; onClose: () => void }) {
  return (
    <Link
      href={link.href}
      onClick={onClose}
      aria-current={active ? "page" : undefined}
      className={`flex items-center gap-3 rounded-2xl px-3 py-2.5 transition-colors ${
        active ? "bg-white shadow-sm" : "active:bg-white/70"
      }`}
    >
      <span className="grid place-items-center h-9 w-9 shrink-0 rounded-xl bg-[#0E5A60]/[0.08] text-[#0E5A60]">
        <LinkIcon id={link.id} className="w-4 h-4" />
      </span>
      <span className="flex-1 min-w-0">
        <span className="flex items-center gap-2">
          <span className={`text-[14.5px] font-semibold ${active ? "text-[#D96C2C]" : "text-[#0B2A3D]"}`}>
            {link.title}
          </span>
          {link.meta && (
            <span className="text-[10px] font-semibold text-[#0E5A60] bg-[#0E5A60]/[0.08] rounded-full px-2 py-0.5 whitespace-nowrap">
              {link.meta}
            </span>
          )}
        </span>
        <span className="block text-[12px] text-slate-500 leading-snug">{link.desc}</span>
      </span>
    </Link>
  );
}

function SeeAll({ href, children, onClose }: { href: string; children: React.ReactNode; onClose: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClose}
      className="mx-3 mt-2 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#0E5A60]"
    >
      {children} <ArrowRight className="w-3.5 h-3.5" />
    </Link>
  );
}

export function MobileMenu({ open, onClose, data, logo, pathname, whatsapp, phone }: MobileMenuProps) {
  // Open the accordion of the section you're in (Journeys if none)
  const currentMenu = data.items.find((i) => i.kind === "menu" && isCurrent(i, pathname));
  const [expanded, setExpanded] = useState<MenuKey | null>(
    currentMenu?.kind === "menu" ? currentMenu.key : "journeys",
  );
  const closeRef = useRef<HTMLButtonElement>(null);

  // Lock page scroll, close on Esc, and move focus into the drawer while it's open
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const isActive = (href: string) => href === pathname;
  const tel = phone ? `tel:${phone.replace(/[^+\d]/g, "")}` : null;

  const menuBody: Record<MenuKey, React.ReactNode> = {
    journeys: (
      <>
        <div className="grid grid-cols-2 gap-x-1">
          {data.destinations.map((d) => (
            <DestinationRow key={d.id} dest={d} onNavigate={onClose} />
          ))}
        </div>
        <SeeAll href="/journeys" onClose={onClose}>Explore all journeys</SeeAll>
      </>
    ),
    trips: (
      <>
        {data.tripPages.map((t) => (
          <Row key={t.id} link={t} active={isActive(t.href)} onClose={onClose} />
        ))}
        {data.months.length > 0 && (
          <>
            <p className="px-3 pt-3 pb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#D96C2C]">
              Pick a month
            </p>
            <div className="grid grid-cols-3 gap-2 px-3">
              {data.months.map((m) => (
                <MonthCalendarTile key={m.value} month={m} onNavigate={onClose} />
              ))}
            </div>
          </>
        )}
        <SeeAll href="/trips" onClose={onClose}>See all trips</SeeAll>
      </>
    ),
    blogs: (
      <>
        {data.latestPost && (
          <Row
            link={{
              id: "journal",
              title: data.latestPost.title,
              desc: "Our newest story",
              href: `/blogs/${data.latestPost.slug}`,
              meta: "New",
            }}
            active={isActive(`/blogs/${data.latestPost.slug}`)}
            onClose={onClose}
          />
        )}
        {data.blogLinks.map((b) => (
          <Row key={b.id} link={b} active={isActive(b.href)} onClose={onClose} />
        ))}
      </>
    ),
  };

  const headingClass = "font-serif text-[20px] font-semibold text-[#0B2A3D]";
  const dot = <span className="h-1.5 w-1.5 rounded-full bg-[#D96C2C]" aria-hidden />;

  return (
    <div
      inert={!open}
      className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-300 ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="absolute inset-0 bg-[#0B2A3D]/60 backdrop-blur-sm" onClick={onClose} />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={`absolute top-0 right-0 h-full w-[90%] max-w-[420px] shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ backgroundColor: DRAWER_BG }}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#E9E1D3]">
          <Link
            href="/"
            onClick={(e) => {
              scrollToTopIfHome(e);
              onClose();
            }}
            aria-label="Kokalachi home"
          >
            {logo ? (
              <img src={logo} alt="Kokalachi" className="h-6 w-auto object-contain" />
            ) : (
              <span className="font-serif text-xl font-semibold text-[#0B2A3D]">Kokalachi</span>
            )}
          </Link>
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Close menu"
            className="grid place-items-center h-10 w-10 rounded-full text-[#0B2A3D] hover:bg-black/5 transition-colors"
          >
            <X size={22} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto overscroll-contain pb-4">

          {data.leavingSoon.length > 0 && (
            <div className="pt-4">
              <p className="px-5 pb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#D96C2C]">
                Leaving soon
              </p>
              <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-px-5 px-5 pb-2 [scrollbar-width:none]">
                {data.leavingSoon.map((t) => (
                  <div key={t.card.slug} className="snap-start shrink-0 w-[310px]">
                    <TicketCard trip={t} onNavigate={onClose} notchColor={DRAWER_BG} />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="px-3 pt-3">
            {data.items.map((item) => {
              const current = isCurrent(item, pathname);
              if (item.kind === "link") {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    aria-current={current ? "page" : undefined}
                    className="flex items-center justify-between px-2 py-4 border-b border-[#E9E1D3]"
                  >
                    <span className={`flex items-center gap-2 ${headingClass}`}>
                      {item.label}
                      {current && dot}
                    </span>
                    <ArrowRight size={18} className="text-[#0E5A60]" />
                  </Link>
                );
              }
              const isOpen = expanded === item.key;
              return (
                <div key={item.key} className="border-b border-[#E9E1D3]">
                  <button
                    onClick={() => setExpanded(isOpen ? null : item.key)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between px-2 py-4 text-left"
                  >
                    <span className={`flex items-center gap-2 ${headingClass}`}>
                      {item.label}
                      {current && dot}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-[#0E5A60] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pb-4 flex flex-col gap-0.5">{menuBody[item.key]}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Two ways to reach us, side by side: Contact Us, and WhatsApp (or a call if no WhatsApp is set) */}
        <div className="px-5 py-4 border-t border-[#E9E1D3] grid grid-flow-col auto-cols-fr gap-2.5 bg-white/60">
          <Link
            href="/contact"
            onClick={onClose}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D96C2C] hover:bg-[#b8571e] text-white text-[13.5px] font-semibold py-3 shadow-md transition-colors"
          >
            {data.contactLabel} <Contact className="w-4 h-4" />
          </Link>
          {whatsapp ? (
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#0E5A60]/20 bg-white text-[#0B2A3D] text-[13.5px] font-semibold py-3"
            >
              <FaWhatsapp className="w-4 h-4 text-[#25D366]" /> WhatsApp
            </a>
          ) : (
            tel && (
              <a
                href={tel}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#0E5A60]/20 bg-white text-[#0B2A3D] text-[13.5px] font-semibold py-3"
              >
                <Phone className="w-4 h-4 text-[#0E5A60]" /> Call us
              </a>
            )
          )}
        </div>
      </div>
    </div>
  );
}
