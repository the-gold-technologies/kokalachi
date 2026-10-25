"use client";

import React, { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import type { FaqCategory } from "@/data/faqs";
import { BlogRichText } from "@/components/blog/BlogRichText";

interface FaqAccordionProps {
  categories: FaqCategory[];
}

export function FaqAccordion({ categories }: FaqAccordionProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id);
  // Keyed as "categoryId-index" so several answers can be open at once
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  // Highlight the category tab for whichever section is currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveCategory(visible.target.id);
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );

    categories.forEach((category) => {
      const section = document.getElementById(category.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [categories]);

  const toggleItem = (key: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  return (
    <div className="site-container py-12 lg:py-16">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-14">
        {/* Category Tabs: horizontal scroller on mobile, sticky sidebar on desktop */}
        <nav
          aria-label="FAQ categories"
          className="lg:w-64 shrink-0 sticky top-20 lg:top-28 z-20 self-start w-full py-3 lg:py-0 bg-white/95 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none"
        >
          <p className="hidden lg:block text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#C85A24] font-montserrat mb-4 px-4">
            Browse by topic
          </p>
          <ul className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible [scrollbar-width:none]">
            {categories.map((category, idx) => (
              <li key={category.id} className="shrink-0">
                <a
                  href={`#${category.id}`}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-3 rounded-full lg:rounded-xl px-4 py-2 lg:py-3 text-sm font-semibold whitespace-nowrap transition-all ${
                    activeCategory === category.id
                      ? "bg-[#0E5A60] text-white shadow-md"
                      : "bg-[#FAF5EE] lg:bg-transparent text-[#0E5A60] hover:bg-[#FAF5EE] hover:text-[#C85A24]"
                  }`}
                >
                  <span
                    className={`hidden lg:inline font-montserrat text-xs font-bold ${
                      activeCategory === category.id ? "text-white/70" : "text-[#C85A24]"
                    }`}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  {category.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Question Sections */}
        <div className="flex-1 min-w-0 space-y-14">
          {categories.map((category, idx) => (
            <section key={category.id} id={category.id} className="scroll-mt-40 lg:scroll-mt-28">
              <div className="flex items-baseline gap-3 mb-6">
                <span className="font-montserrat text-sm font-extrabold text-[#C85A24]">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0E5A60]">
                  {category.title}
                </h2>
              </div>

              <div className="space-y-3">
                {category.items.map((item, itemIdx) => {
                  const key = `${category.id}-${itemIdx}`;
                  const isOpen = openItems.has(key);

                  return (
                    <div
                      key={key}
                      className={`rounded-2xl border transition-all duration-300 ${
                        isOpen
                          ? "bg-[#FAF5EE] border-amber-900/10 shadow-sm"
                          : "bg-white border-slate-100 hover:border-[#0E5A60]/20"
                      }`}
                    >
                      <h3>
                        <button
                          type="button"
                          id={`${key}-question`}
                          aria-expanded={isOpen}
                          aria-controls={`${key}-answer`}
                          onClick={() => toggleItem(key)}
                          className="w-full flex items-center justify-between gap-4 text-left px-5 sm:px-6 py-4 sm:py-5 cursor-pointer"
                        >
                          <span className="font-bold text-[15px] sm:text-base text-[#0E5A60]">
                            {item.question}
                          </span>
                          <span
                            className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                              isOpen
                                ? "bg-[#D96C2C] text-white rotate-45"
                                : "bg-[#0E5A60]/5 text-[#0E5A60]"
                            }`}
                          >
                            <Plus size={16} className="stroke-[2.5]" />
                          </span>
                        </button>
                      </h3>
                      <div
                        id={`${key}-answer`}
                        role="region"
                        aria-labelledby={`${key}-question`}
                        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="px-5 sm:px-6 pb-5 text-slate-600 text-[14px] sm:text-[15px] leading-relaxed">
                            <BlogRichText text={item.answer} />
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
