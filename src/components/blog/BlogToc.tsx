"use client";

import React, { useEffect, useState } from "react";
import { BlogSection } from "@/data/blogs";

// Sticky "chapter" list beside the article; highlights the section being read
export function BlogToc({ sections }: { sections: BlogSection[] }) {
  const [activeId, setActiveId] = useState(sections[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav aria-label="In this story">
      <p className="font-script text-2xl text-[#C85A24] mb-4 -rotate-2">your trip, chapter by chapter</p>
      <ol className="relative border-l-2 border-dashed border-[#0E5A60]/15 space-y-1">
        {sections.map((section) => {
          const active = section.id === activeId;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`relative flex items-baseline gap-2.5 pl-4 py-1.5 text-[13px] leading-snug transition-colors ${
                  active ? "text-[#0E5A60] font-semibold" : "text-slate-500 hover:text-[#0E5A60]"
                }`}
              >
                <span
                  className={`absolute -left-[5px] top-[13px] w-2 h-2 rounded-full transition-all ${
                    active ? "bg-[#D96C2C] scale-125" : "bg-[#0E5A60]/20"
                  }`}
                />
                <span className={`font-script text-lg leading-none w-5 shrink-0 ${active ? "text-[#D96C2C]" : "text-slate-400"}`}>
                  {section.number ?? "✦"}
                </span>
                <span>{section.kicker ?? section.title}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
