"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Camera,
  Compass,
  Heart,
  History,
  Sparkles,
  User,
  Users,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { formatDeparture, getAvailability, getDeparturePrice } from "@/lib/departures";
import type { DestinationLink, LeavingSoon, MenuKey, MenuLink, MonthTile, NavData } from "./navData";

// The hover/click menus of the desktop navbar, plus pieces the mobile menu reuses.
// Colours: teal #0E5A60, navy #0B2A3D, orange #D96C2C, panel paper #FBF8F2.

export const PANEL_BG = "#FBF8F2";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#D96C2C] mb-3">{children}</p>;
}

// ── Boarding-pass card for a departure ────────────────────────────────────────
export function TicketCard({
  trip,
  onNavigate,
  notchColor = PANEL_BG,
}: {
  trip: LeavingSoon;
  onNavigate?: () => void;
  notchColor?: string;
}) {
  const { card, departure } = trip;
  const availability = getAvailability(departure);
  const price = getDeparturePrice(card.tourPackage, departure);

  return (
    <Link
      href={`/journeys/${card.slug}`}
      onClick={onNavigate}
      className="group relative flex items-stretch rounded-2xl bg-white border border-[#ECE4D6] shadow-[0_4px_14px_rgba(11,42,61,0.05)] hover:shadow-[0_14px_30px_rgba(11,42,61,0.13)] hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
    >
      <div className="relative w-[72px] shrink-0 overflow-hidden bg-slate-200">
        <img
          src={card.images[0]?.replace("w=800", "w=300")}
          alt=""
          className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>

      <div className="flex-1 min-w-0 px-3.5 py-3">
        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#D96C2C] truncate">
          {formatDeparture(departure)}
        </p>
        <p className="font-serif text-[17px] font-semibold text-[#0B2A3D] leading-tight truncate mt-0.5 group-hover:text-[#0E5A60] transition-colors">
          {card.destination}
        </p>
        <p className="text-[11.5px] text-slate-500 mt-1 truncate">
          {card.duration}
          <span className="mx-1.5 text-slate-300">•</span>
          <span className={availability.tone === "limited" ? "font-semibold text-[#C2410C]" : ""}>
            {availability.label}
          </span>
        </p>
      </div>

      {/* Perforated tear line with a notch cut at each end */}
      <div aria-hidden className="relative my-3 border-l-2 border-dashed border-[#E4DACA]">
        <span
          className="absolute -top-[19px] -left-[8px] h-3.5 w-3.5 rounded-full border border-[#ECE4D6]"
          style={{ backgroundColor: notchColor }}
        />
        <span
          className="absolute -bottom-[19px] -left-[8px] h-3.5 w-3.5 rounded-full border border-[#ECE4D6]"
          style={{ backgroundColor: notchColor }}
        />
      </div>

      <div className="w-[78px] shrink-0 flex flex-col items-center justify-center text-center px-2">
        <span className="text-[9.5px] uppercase tracking-[0.14em] text-slate-400">from</span>
        <span className="text-[13.5px] font-bold text-[#0E5A60] leading-tight">
          {price != null ? `₹${price.toLocaleString("en-IN")}` : "TBA"}
        </span>
        <ArrowRight className="w-3.5 h-3.5 text-[#D96C2C] mt-1 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
      </div>
    </Link>
  );
}

// ── Calendar-page tile for a month with departures ────────────────────────────
export function MonthCalendarTile({ month, onNavigate }: { month: MonthTile; onNavigate?: () => void }) {
  return (
    <Link
      href={month.href}
      onClick={onNavigate}
      className="group relative rounded-xl overflow-hidden border border-[#ECE4D6] bg-white text-center hover:-translate-y-0.5 hover:shadow-[0_10px_22px_rgba(11,42,61,0.12)] transition-all duration-300"
    >
      <div className="relative bg-[#0E5A60] group-hover:bg-[#D96C2C] text-white/90 text-[9px] font-bold tracking-[0.22em] py-1 transition-colors duration-300">
        {/* binder rings */}
        <span aria-hidden className="absolute left-3 top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-white/70" />
        <span aria-hidden className="absolute right-3 top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-white/70" />
        {month.year}
      </div>
      <div className="py-2.5">
        <div className="font-serif text-[22px] font-semibold text-[#0B2A3D] leading-none">{month.short}</div>
        <div className="text-[10.5px] text-slate-500 mt-1.5">
          {month.count} {month.count === 1 ? "departure" : "departures"}
        </div>
      </div>
    </Link>
  );
}

// Icon for a menu row, by its id (the mobile menu uses it too)
export function LinkIcon({ id, className }: { id: string; className?: string }) {
  switch (id) {
    case "upcoming":
      return <CalendarDays className={className} />;
    case "past":
      return <History className={className} />;
    case "solo":
      return <User className={className} />;
    case "custom":
      return <Users className={className} />;
    case "journal":
      return <BookOpen className={className} />;
    case "moments":
      return <Camera className={className} />;
    case "why":
      return <Sparkles className={className} />;
    default:
      return <Compass className={className} />;
  }
}

// ── A text row: icon, title, one-line description, optional note ──────────────
function MenuRow({ link, onNavigate }: { link: MenuLink; onNavigate?: () => void }) {
  return (
    <Link
      href={link.href}
      onClick={onNavigate}
      className="group flex items-center gap-3.5 rounded-2xl px-3 py-2.5 -mx-3 hover:bg-white hover:shadow-[0_6px_18px_rgba(11,42,61,0.07)] transition-all duration-300"
    >
      <span className="grid place-items-center h-10 w-10 shrink-0 rounded-xl bg-[#0E5A60]/[0.07] text-[#0E5A60] group-hover:bg-[#D96C2C] group-hover:text-white transition-colors duration-300">
        <LinkIcon id={link.id} className="w-[18px] h-[18px]" />
      </span>
      <span className="flex-1 min-w-0">
        <span className="flex items-center gap-2">
          <span className="font-semibold text-[14.5px] text-[#0B2A3D] group-hover:text-[#0E5A60] transition-colors">
            {link.title}
          </span>
          {link.meta && (
            <span className="text-[10px] font-semibold text-[#0E5A60] bg-[#0E5A60]/[0.08] rounded-full px-2 py-0.5 whitespace-nowrap">
              {link.meta}
            </span>
          )}
        </span>
        <span className="block text-[12.5px] text-slate-500 leading-snug mt-0.5">{link.desc}</span>
      </span>
      <ArrowRight className="w-4 h-4 shrink-0 text-[#D96C2C] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
    </Link>
  );
}

function TextLink({ href, children, onNavigate }: { href: string; children: React.ReactNode; onNavigate: () => void }) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className="group inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#0E5A60] hover:text-[#D96C2C] transition-colors"
    >
      {children}
      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
    </Link>
  );
}

// Strip along the bottom of every panel: a handwritten note and the "see everything" button
function PanelFooter({
  note,
  href,
  cta,
  close,
}: {
  note: React.ReactNode;
  href: string;
  cta: string;
  close: () => void;
}) {
  return (
    <div className="mt-6 pt-4 border-t border-[#ECE4D6] flex items-center justify-between gap-6">
      <p className="font-caveat text-[22px] leading-none text-[#0E5A60]">{note}</p>
      <Link
        href={href}
        onClick={close}
        className="group shrink-0 inline-flex items-center gap-2 rounded-full bg-[#0B2A3D] hover:bg-[#0E5A60] text-white text-[13px] font-semibold pl-5 pr-4 py-2.5 transition-colors"
      >
        {cta}
        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
      </Link>
    </div>
  );
}

function HelpCard({ whatsapp, close }: { whatsapp: string | null; close: () => void }) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0E5A60] to-[#0B2A3D] text-white p-6 flex flex-col">
      <span aria-hidden className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/[0.06]" />
      <span aria-hidden className="absolute -right-4 bottom-16 h-20 w-20 rounded-full bg-[#D96C2C]/20" />
      <p className="font-caveat text-[28px] leading-none text-[#F6B48A]">Not sure yet?</p>
      <p className="mt-3 text-[13.5px] leading-relaxed text-white/80">
        Tell us your dates and what you&apos;re in the mood for. We&apos;ll suggest a trip that fits.
      </p>
      <div className="mt-auto pt-5">
        {whatsapp ? (
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-white text-[#0B2A3D] hover:bg-[#F6B48A] text-[13px] font-semibold px-4 py-2.5 transition-colors"
          >
            <FaWhatsapp className="w-4 h-4 text-[#25D366]" /> Chat on WhatsApp
          </a>
        ) : (
          <Link
            href="/contact"
            onClick={close}
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-white text-[#0B2A3D] hover:bg-[#F6B48A] text-[13px] font-semibold px-4 py-2.5 transition-colors"
          >
            Ask us anything <ArrowUpRight className="w-4 h-4" />
          </Link>
        )}
      </div>
    </div>
  );
}

// ── A destination: photo, name, duration (or trip count) and next date ───────
export function DestinationRow({ dest, onNavigate }: { dest: DestinationLink; onNavigate?: () => void }) {
  const dated = dest.meta?.startsWith("Next");
  return (
    <Link
      href={dest.href}
      onClick={onNavigate}
      className="group flex items-center gap-2 rounded-xl px-3 py-2 hover:bg-white hover:shadow-[0_6px_18px_rgba(11,42,61,0.07)] transition-all duration-300"
    >
      <span className="flex-1 min-w-0">
        <span className="block font-semibold text-[14px] leading-snug text-[#0B2A3D] group-hover:text-[#0E5A60] transition-colors">
          {dest.title}
        </span>
        <span className={`block text-[11.5px] truncate ${dated ? "text-[#0E5A60] font-medium" : "text-slate-400"}`}>
          {dest.meta}
        </span>
      </span>
      <ArrowRight className="w-3.5 h-3.5 shrink-0 text-[#D96C2C] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
    </Link>
  );
}

// ── Journeys: every destination + what's leaving soon ─────────────────────────
function JourneysPanel({ data, close }: { data: NavData; close: () => void }) {
  return (
    <>
      <div className="grid grid-cols-[1fr_350px] xl:grid-cols-[1fr_380px] gap-8 xl:gap-10">
        <div className="min-w-0">
          <Eyebrow>
            Our destinations{" "}
            <span className="ml-1 rounded-full bg-[#D96C2C]/10 px-1.5 py-px tracking-normal">
              {data.destinations.length}
            </span>
          </Eyebrow>
          {/* Name + next date only, three across, everything visible */}
          <div className="grid grid-cols-3 gap-x-2 gap-y-1 -ml-3 nav-stagger">
            {data.destinations.map((d) => (
              <DestinationRow key={d.id} dest={d} onNavigate={close} />
            ))}
          </div>
        </div>
        <div>
          <Eyebrow>Leaving soon</Eyebrow>
          {data.leavingSoon.length > 0 ? (
            <div className="flex flex-col gap-3 nav-stagger">
              {data.leavingSoon.map((t) => (
                <TicketCard key={t.card.slug} trip={t} onNavigate={close} />
              ))}
            </div>
          ) : (
            <p className="text-sm text-slate-500">New departures are on the way.</p>
          )}
        </div>
      </div>
      <PanelFooter
        close={close}
        href="/journeys"
        cta="Explore all journeys"
        note={
          <>
            Handcrafted slow-travel journeys across India &amp; beyond{" "}
            <Heart className="inline w-4 h-4 -mt-1 fill-[#D96C2C] text-[#D96C2C]" />
          </>
        }
      />
    </>
  );
}

// ── Trips: by date and by trip type ───────────────────────────────────────────
function TripsPanel({ data, whatsapp, close }: { data: NavData; whatsapp: string | null; close: () => void }) {
  return (
    <>
      <div className="grid grid-cols-[1.1fr_0.85fr_270px] gap-8 xl:gap-10">
        <div>
          <Eyebrow>Find your trip</Eyebrow>
          <div className="nav-stagger">
            {data.tripPages.map((t) => (
              <MenuRow key={t.id} link={t} onNavigate={close} />
            ))}
          </div>
        </div>
        <div>
          <Eyebrow>Pick a month</Eyebrow>
          {data.months.length > 0 ? (
            <div className="grid grid-cols-3 gap-2.5 nav-stagger">
              {data.months.map((m) => (
                <MonthCalendarTile key={m.value} month={m} onNavigate={close} />
              ))}
            </div>
          ) : (
            <p className="text-sm text-slate-500">New dates are on the way.</p>
          )}
          <div className="mt-4">
            <TextLink href="/trips/upcoming" onNavigate={close}>All upcoming dates</TextLink>
          </div>
        </div>
        <HelpCard whatsapp={whatsapp} close={close} />
      </div>
      <PanelFooter close={close} href="/trips" cta="See all trips" note="Every trip we run, upcoming & past" />
    </>
  );
}

// ── Blogs: newest post + the journal, photos and our story ────────────────────
function BlogsPanel({ data, close }: { data: NavData; close: () => void }) {
  const post = data.latestPost;
  return (
    <>
      <div className={`grid gap-8 ${post ? "grid-cols-[1.1fr_1fr]" : "grid-cols-1"}`}>
        {post && (
          <Link
            href={`/blogs/${post.slug}`}
            onClick={close}
            className="group relative min-h-[250px] rounded-3xl overflow-hidden bg-slate-200"
          >
            <img
              src={post.heroImage}
              alt={post.heroAlt || ""}
              className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A3D]/90 via-[#0B2A3D]/30 to-transparent" />
            <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-[0.16em] text-white bg-[#D96C2C] px-3 py-1 rounded-full">
              New story
            </span>
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="font-serif text-[24px] font-semibold text-white leading-tight line-clamp-3">
                {post.title}
              </p>
            </div>
          </Link>
        )}
        <div>
          <Eyebrow>Read &amp; explore</Eyebrow>
          <div className="nav-stagger">
            {data.blogLinks.map((b) => (
              <MenuRow key={b.id} link={b} onNavigate={close} />
            ))}
          </div>
        </div>
      </div>
      <PanelFooter
        close={close}
        href="/blogs"
        cta="Explore all"
        note="Guides, memories & stories from the Kokalachi tribe"
      />
    </>
  );
}

export function NavPanel({
  menu,
  data,
  whatsapp,
  close,
}: {
  menu: MenuKey;
  data: NavData;
  whatsapp: string | null;
  close: () => void;
}) {
  if (menu === "journeys") return <JourneysPanel data={data} close={close} />;
  if (menu === "trips") return <TripsPanel data={data} whatsapp={whatsapp} close={close} />;
  return <BlogsPanel data={data} close={close} />;
}
