"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { CheckCircle2, MapPin, PhoneCall, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { requestCallBack } from "@/actions/callback";
import { whatsappHref } from "@/components/layout/nav/navData";

const CALL_TIMES = ["Anytime", "Morning", "Afternoon", "Evening"] as const;
type CallTime = (typeof CALL_TIMES)[number];

// Two ways to talk before booking, under the booking widget's main button: a call-back request
// (name + number only) and a WhatsApp chat that opens with this trip's name and link typed in.
export function TripQuickActions({
  tripId,
  tripTitle,
  destination,
  tripSlug,
  whatsapp,
}: {
  tripId: string; // same id the booking form sends
  tripTitle: string;
  destination: string; // e.g. "Udaipur", shown on the call-back form
  tripSlug: string;
  whatsapp?: string | null; // CMS WhatsApp number or link
}) {
  const [open, setOpen] = useState(false);

  // Plain text: the trip and its link. Batch and travellers are picked in the booking form,
  // so they aren't known here.
  const message = `Hi Kokalachi! I'm looking at ${tripTitle} and have a few questions.\nhttps://kokalachi.com/journeys/${tripSlug}`;
  const wa = whatsappHref(whatsapp, message);

  return (
    <div className="pt-1 flex-shrink-0">
      <div className="flex items-center gap-3 text-[11px] font-medium text-slate-400 mb-2.5">
        <span className="h-px flex-1 bg-slate-200" />
        Have questions first?
        <span className="h-px flex-1 bg-slate-200" />
      </div>
      <div className={`grid gap-2 ${wa ? "grid-cols-2" : "grid-cols-1"}`}>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex items-center justify-center gap-1.5 rounded-full border border-[#0E5A60]/20 bg-white py-2.5 text-[13px] font-semibold text-[#0E5A60] hover:bg-[#0E5A60]/5 hover:border-[#0E5A60]/40 transition-colors cursor-pointer"
        >
          <PhoneCall size={15} /> Call me back
        </button>
        {wa && (
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 py-2.5 text-[13px] font-semibold text-[#128C4B] hover:bg-[#25D366]/20 transition-colors"
          >
            <FaWhatsapp size={16} /> Ask on WhatsApp
          </a>
        )}
      </div>

      {/* Only opens on a click, so document is always there */}
      {open &&
        createPortal(
          <CallBackModal
            tripId={tripId}
            tripTitle={tripTitle}
            tripSlug={tripSlug}
            destination={destination}
            whatsappLink={wa}
            onClose={() => setOpen(false)}
          />,
          document.body
        )}
    </div>
  );
}

function CallBackModal({
  tripId,
  tripTitle,
  tripSlug,
  destination,
  whatsappLink,
  onClose,
}: {
  tripId: string;
  tripTitle: string;
  tripSlug: string;
  destination: string;
  whatsappLink: string | null;
  onClose: () => void;
}) {
  const [time, setTime] = useState<CallTime>("Anytime");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "failed">("idle");
  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const mobile = String(form.get("mobile") ?? "").replace(/\D/g, "");
    setFirstName(name.split(" ")[0]);
    setStatus("sending");
    // Its own CMS submission type, like bookings and enquiries (see actions/callback)
    const result = await requestCallBack({
      name,
      phone: `+91${mobile}`,
      bestTime: time,
      tripId,
      tripName: tripTitle,
      tripUrl: `https://kokalachi.com/journeys/${tripSlug}`,
    });
    setStatus(result.success ? "sent" : "failed");
  };

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-[#0B2A3D]/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="callback-title"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md overflow-hidden rounded-[28px] bg-white shadow-2xl animate-in fade-in zoom-in-95 duration-300"
      >
        {/* Cream header with the trip, so they know what we'll call about */}
        <div className="relative bg-[#FAF5EE] border-b border-[#ECE4D6] px-6 pt-6 pb-5">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center text-slate-500 hover:bg-white hover:text-slate-800 transition-colors cursor-pointer"
          >
            <X size={16} />
          </button>
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-11 h-11 rounded-full bg-[#D96C2C]/10 flex items-center justify-center">
              <PhoneCall size={20} className="text-[#D96C2C]" />
            </div>
            {/* Which trip the call is about */}
            <span className="inline-flex items-center gap-1 rounded-full bg-white border border-[#ECE4D6] px-2.5 py-1 text-[12px] font-semibold text-[#0E5A60]">
              <MapPin size={12} className="text-[#D96C2C]" /> {destination}
            </span>
          </div>
          <h3 id="callback-title" className="font-serif text-[22px] font-semibold text-[#0E5A60] leading-tight">
            Let&apos;s talk it through
          </h3>
          <p className="text-[13px] text-slate-600 mt-1 pr-8">
            Leave your number and someone from our team will call to answer your questions.
          </p>
        </div>

        {status === "sent" ? (
          <div className="px-6 py-10 text-center">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#0E5A60]/10 text-[#0E5A60] flex items-center justify-center mb-4">
              <CheckCircle2 size={28} />
            </div>
            <p className="font-serif text-xl font-semibold text-[#0E5A60] mb-1">Thanks{firstName ? `, ${firstName}` : ""}!</p>
            <p className="text-sm text-slate-600">
              We&apos;ll call you {time === "Anytime" ? "soon" : `in the ${time.toLowerCase()}`}. Keep your phone handy.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-6 text-sm font-bold text-[#D96C2C] hover:text-[#C85A24] cursor-pointer"
            >
              Back to the trip
            </button>
          </div>
        ) : (
          <form onSubmit={submit} className="px-6 py-5 space-y-4">
            <div>
              <label htmlFor="cb-name" className="block text-[12px] font-bold text-slate-600 mb-1.5">
                Your name
              </label>
              <input
                id="cb-name"
                name="name"
                required
                autoComplete="name"
                placeholder="e.g. Priya Sharma"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-[14px] focus:outline-none focus:border-[#0E5A60] focus:ring-1 focus:ring-[#0E5A60] transition-colors"
              />
            </div>

            <div>
              <label htmlFor="cb-mobile" className="block text-[12px] font-bold text-slate-600 mb-1.5">
                Mobile number
              </label>
              <div className="flex items-stretch rounded-xl border border-slate-200 focus-within:border-[#0E5A60] focus-within:ring-1 focus-within:ring-[#0E5A60] transition-colors overflow-hidden">
                <span className="flex items-center px-3.5 bg-slate-50 border-r border-slate-200 text-[14px] font-semibold text-slate-600">
                  +91
                </span>
                <input
                  id="cb-mobile"
                  name="mobile"
                  type="tel"
                  inputMode="numeric"
                  required
                  autoComplete="tel-national"
                  pattern="[6-9][0-9]{9}"
                  maxLength={10}
                  title="A 10-digit Indian mobile number"
                  placeholder="98765 43210"
                  className="flex-1 min-w-0 px-3.5 py-2.5 text-[14px] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <p className="text-[12px] font-bold text-slate-600 mb-2">Best time to call</p>
              <div className="flex flex-wrap gap-2">
                {CALL_TIMES.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTime(t)}
                    aria-pressed={time === t}
                    className={`rounded-full px-3.5 py-1.5 text-[12.5px] font-semibold border transition-colors cursor-pointer ${
                      time === t
                        ? "bg-[#0E5A60] border-[#0E5A60] text-white"
                        : "bg-white border-slate-200 text-slate-600 hover:border-[#0E5A60]/40 hover:text-[#0E5A60]"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {status === "failed" && (
              <p className="text-[13px] text-red-600 bg-red-50 rounded-xl px-3.5 py-2.5">
                We couldn&apos;t send that just now.{" "}
                {whatsappLink ? (
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="font-bold underline">
                    Message us on WhatsApp instead
                  </a>
                ) : (
                  "Please try again in a moment."
                )}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-3 rounded-full bg-[#D96C2C] hover:bg-[#C85A24] disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-bold text-[14px] shadow-md shadow-[#D96C2C]/20 transition-colors cursor-pointer"
            >
              {status === "sending" ? "Sending…" : "Call me back"}
            </button>
            <p className="text-center text-[11.5px] text-slate-400">No spam. We only call about this trip.</p>
          </form>
        )}
      </div>
    </div>
  );
}
