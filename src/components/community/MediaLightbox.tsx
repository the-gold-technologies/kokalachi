"use client";

import React, { useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { CommunityMedia } from "@/data/community";

interface MediaLightboxProps {
  media: CommunityMedia[];
  index: number | null;
  title: string;
  onClose: () => void;
  onChange: (index: number) => void;
}

export function MediaLightbox({ media, index, title, onClose, onChange }: MediaLightboxProps) {
  const isOpen = index !== null;
  const count = media.length;

  // Keyboard controls + lock the page behind the viewer
  useEffect(() => {
    if (index === null) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onChange((index + 1) % count);
      if (e.key === "ArrowLeft") onChange((index - 1 + count) % count);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [index, count, onClose, onChange]);

  if (!isOpen) return null;
  const item = media[index];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${title} photos`}
      className="fixed inset-0 z-[100] bg-[#061C29]/95 backdrop-blur-sm flex flex-col animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 sm:px-8 py-4 text-white" onClick={(e) => e.stopPropagation()}>
        <div className="min-w-0">
          <p className="font-serif text-lg sm:text-xl truncate">{title}</p>
          <p className="text-[11px] font-mono tracking-widest text-white/60">
            {index + 1} / {count}
          </p>
        </div>
        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X size={20} />
        </button>
      </div>

      {/* Stage */}
      <div className="relative flex-1 flex items-center justify-center px-4 sm:px-20 min-h-0">
        <div className="max-w-5xl w-full h-full flex flex-col items-center justify-center gap-4" onClick={(e) => e.stopPropagation()}>
          {item.type === "video" ? (
            <video
              key={item.src}
              src={item.src}
              poster={item.poster}
              controls
              autoPlay
              playsInline
              className="max-h-[72vh] max-w-full rounded-2xl shadow-2xl bg-black"
            />
          ) : (
            <img
              key={item.src}
              src={item.src}
              alt={item.alt}
              className="max-h-[72vh] max-w-full object-contain rounded-2xl shadow-2xl animate-in fade-in zoom-in-95 duration-300"
            />
          )}
          {item.caption && (
            <p className="font-script text-2xl sm:text-3xl text-white/90 text-center">{item.caption}</p>
          )}
        </div>

        {count > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onChange((index - 1 + count) % count);
              }}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-[#D96C2C] text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Previous"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onChange((index + 1) % count);
              }}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-[#D96C2C] text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Next"
            >
              <ChevronRight size={22} />
            </button>
          </>
        )}
      </div>

      {/* Thumbnail strip */}
      {count > 1 && (
        <div className="flex justify-center gap-2 px-4 py-4 overflow-x-auto" onClick={(e) => e.stopPropagation()}>
          {media.map((m, i) => (
            <button
              key={m.src + i}
              onClick={() => onChange(i)}
              className={`relative w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                i === index ? "border-[#D96C2C] scale-105" : "border-transparent opacity-50 hover:opacity-90"
              }`}
              aria-label={`Show ${i + 1}`}
            >
              <img src={m.type === "video" ? m.poster : m.src} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
