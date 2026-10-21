"use client";

import React, { useEffect, useState } from "react";

// Thin orange bar across the top of the screen that fills as you read
export function ReadingProgress({ targetId }: { targetId: string }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const el = document.getElementById(targetId);
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const read = Math.min(Math.max(-rect.top / (total > 0 ? total : 1), 0), 1);
      setProgress(read);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [targetId]);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-[55] bg-transparent pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-[#D96C2C] to-[#C85A24] rounded-r-full transition-[width] duration-150"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}
