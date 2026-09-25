"use client";

import { useEffect, useState } from "react";

// Cycles through a card's images. Each card gets a random start delay and a
// slightly random interval so cards on the same page slide out of sync.
export function useImageSlideshow(imageCount: number): number {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (imageCount <= 1) return;

    const initialDelay = Math.random() * 3000; // 0–3s
    const intervalTime = 3000 + Math.random() * 2000; // 3–5s
    let intervalId: ReturnType<typeof setInterval> | undefined;

    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % imageCount);
      }, intervalTime);
    }, initialDelay);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [imageCount]);

  return currentIndex;
}
