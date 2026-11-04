"use client";

import type { ElementType } from "react";
import { ArrowRight } from "lucide-react";

export interface SectionNavItem {
  key: string;
  label: string;
  icon: ElementType;
  targetId: string; // the section this link scrolls to
  onSelect?: () => void; // e.g. open the matching "Need to Know" tab
}

// Quick-jump links for a trip page: a light row of section names, no box, that scrolls to the
// section on tap (clear of the fixed navbar). Sideways-scrolling on narrow screens.
export function JourneySectionNav({ items, bookHref = "#book" }: { items: SectionNavItem[]; bookHref?: string }) {
  const go = (item: SectionNavItem) => {
    item.onSelect?.();
    // Wait a frame so a tab switch has rendered before measuring
    requestAnimationFrame(() => {
      const el = document.getElementById(item.targetId);
      if (!el) return;
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 110, behavior: "smooth" });
    });
  };

  return (
    <nav aria-label="Trip sections" className="flex items-center gap-3 -mt-4 mb-7">
      <div className="flex-1 min-w-0 flex items-center gap-x-6 sm:gap-x-8 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.key}
              type="button"
              onClick={() => go(item)}
              className="group shrink-0 inline-flex items-center gap-1.5 py-1 text-[13.5px] font-medium text-slate-500 hover:text-[#0E5A60] whitespace-nowrap transition-colors cursor-pointer"
            >
              <Icon size={15} strokeWidth={2} className="text-[#D96C2C]/70 group-hover:text-[#D96C2C] transition-colors" />
              {/* Orange underline draws in on hover */}
              <span className="pb-0.5 bg-[linear-gradient(#D96C2C,#D96C2C)] bg-no-repeat bg-left-bottom bg-[length:0%_1.5px] group-hover:bg-[length:100%_1.5px] transition-[background-size] duration-300">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* On desktop the booking widget sits beside the content; below lg give a shortcut to it */}
      <a
        href={bookHref}
        className="lg:hidden shrink-0 inline-flex items-center gap-1 rounded-full bg-[#D96C2C] hover:bg-[#C85A24] text-white text-xs font-bold pl-3.5 pr-3 py-1.5 shadow-sm transition-colors"
      >
        Book <ArrowRight size={14} />
      </a>
    </nav>
  );
}
