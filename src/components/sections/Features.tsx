import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";

export function Features() {
  return (
    <section className="relative py-24 bg-white overflow-hidden select-none">
      {/* Background Graphic - Faint World Map Silhouette on the left side (from User image) */}
      <div className="absolute top-[10%] left-[-4%] w-[38%] max-w-[450px] pointer-events-none opacity-40 z-0 select-none">
        <img
          src="/map-bg.png"
          alt="World Map Silhouette"
          className="w-full h-auto object-contain mix-blend-multiply"
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Column - Content & Features */}
          <div className="w-full lg:w-[46%] flex flex-col items-start text-left z-10">
            <span
              className="text-[#3E7C7A] text-2xl md:text-3xl mb-3 block"
              style={{ fontFamily: "var(--font-playball)" }}
            >
              Dream Your Next Trip
            </span>
            <h2 className="text-3xl md:text-[42px] font-extrabold text-gray-900 mb-6 leading-tight">
              Discover When Even <br />
              You Want To Go
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed text-sm md:text-base">
              Are You Tired Of The Typical Tourist Destinations And Looking To
              Step Out Of Your Comfort Zone? Adventure Travel May Be The Perfect
              Solution For You! Here Are Four.
            </p>

            {/* Feature List */}
            <div className="flex flex-col gap-8 w-full mb-10">
              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center text-[#3E7C7A]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-full h-full"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                    <path d="M2 12h20" />
                  </svg>
                </div>
                <div className="pt-1">
                  <h4 className="font-bold text-lg text-gray-900 mb-1">
                    Best Travel Agency
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                    Are you tired of the typical tourist destinatio and looking
                    step out of your comfort.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center text-[#3E7C7A]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-full h-full"
                  >
                    <path d="M6 20h12" />
                    <path d="M20 10V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4" />
                    <path d="M12 4v16" />
                    <rect x="2" y="10" width="20" height="10" rx="2" />
                    <path d="M12 13a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
                  </svg>
                </div>
                <div className="pt-1">
                  <h4 className="font-bold text-lg text-gray-900 mb-1">
                    Secure Journey With Us
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                    Are you tired of the typical tourist destinatio and looking
                    step out of your comfort.
                  </p>
                </div>
              </div>
            </div>

            <Button
              variant="primary"
              className="rounded-lg px-8 py-3.5 bg-[#3E7C7A] hover:bg-[#326462] text-white font-bold text-sm tracking-wider uppercase flex items-center shadow-md transition-all duration-300"
            >
              BOOK YOUR TRIP <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>

          {/* Right Column - Overlapping Images & Graphic Overlays */}
          <div className="w-full lg:w-[50%] flex items-center justify-end relative py-12 pr-16">
            {/* Background Graphic - Compass Outline aligned with the top-left of the large back image */}
            <div className="absolute top-10 left-[4%] w-24 h-24 sm:w-28 sm:h-28 opacity-45 pointer-events-none z-0">
              <img
                src="/compass-bg.png"
                alt="Compass Rose Graphic"
                className="w-full h-full object-contain mix-blend-multiply"
              />
            </div>

            {/* Background Graphic - Large Vertical "TRAVEL" Outline Text (Aligned with a clean gap next to the image) */}
            <div
              className="absolute -right-16 top-1/2 -translate-y-1/2 font-bold tracking-[0.08em] pointer-events-none opacity-35 z-0 select-none hidden sm:block font-sans"
              style={{
                fontSize: "clamp(60px, 7.5vw, 100px)",
                WebkitTextStroke: "1.5px #3E7C7A",
                color: "transparent",
                writingMode: "vertical-lr",
                transform: "rotate(180deg)",
              }}
            >
              TRAVEL
            </div>

            {/* Image Stack */}
            <div className="relative w-full max-w-[480px] flex justify-end">
              {/* Back Image (Large, Vertical Beach Boats) */}
              <div className="w-[80%] aspect-[3/4.2] rounded-[20px] overflow-hidden shadow-2xl z-10 border border-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=600"
                  alt="Beach shore with boats"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Front Image (Smaller Offset, Couple at Harbor - Centered Vertically relative to back image) */}
              <div className="absolute top-1/2 -translate-y-1/2 left-[-10px] sm:left-[-40px] w-[54%] aspect-[5/5.4] rounded-[28px] overflow-hidden shadow-2xl z-20 border-[6px] border-white bg-white">
                <img
                  src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=400"
                  alt="Couple looking at the sea"
                  className="w-full h-full object-cover rounded-[20px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
