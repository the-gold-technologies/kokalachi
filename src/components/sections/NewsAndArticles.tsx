import React from "react";
import { Calendar, Clock } from "lucide-react";

export function NewsAndArticles() {
  return (
    <section className="relative py-24 bg-[#F9F9FB] overflow-hidden select-none">
      
      {/* Background Graphic Watermarks - Left & Right World Map Silhouette (from User image) */}
      <div className="absolute top-[10%] left-[-4%] w-[25%] max-w-[300px] pointer-events-none opacity-40 z-0 select-none">
        <img
          src="/map-bg.png"
          alt="World Map Silhouette"
          className="w-full h-auto object-contain mix-blend-multiply"
        />
      </div>
      <div className="absolute bottom-[5%] right-[-4%] w-[25%] max-w-[300px] pointer-events-none opacity-40 z-0 select-none transform scale-x-[-1]">
        <img
          src="/map-bg.png"
          alt="World Map Silhouette"
          className="w-full h-auto object-contain mix-blend-multiply"
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl">
          <span
            className="text-[#3E7C7A] text-2xl md:text-3xl mb-3 block"
            style={{ fontFamily: "var(--font-playball)" }}
          >
            Blog And Article
          </span>
          <h2 className="text-3xl md:text-[40px] font-extrabold text-gray-900 mb-6 leading-tight">
            Latest News & Articles
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            Are You Tired Of The Typical Tourist Destinations And Looking <br className="hidden md:inline" />
            To Step Out Of Your Comfort Zonetravel
          </p>
        </div>

        {/* Article Section Layout (Using lg:items-stretch to match heights) */}
        <div className="flex flex-col lg:flex-row lg:items-stretch gap-8 w-full max-w-5xl mb-12">
          
          {/* Left Column - Large Featured Card */}
          <div className="w-full lg:w-1/2 flex">
            <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 group cursor-pointer flex flex-col justify-between w-full h-full">
              <div>
                <div className="relative w-full aspect-[4/2.4] rounded-2xl overflow-hidden mb-5">
                  <img
                    src="https://images.unsplash.com/photo-1540206395-68808572332f?auto=format&fit=crop&q=80&w=600"
                    alt="Spiritual Sojourn"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 rounded-2xl"
                  />
                  {/* Category Tag Overlayed on Bottom Left of Image */}
                  <div className="absolute bottom-4 left-4 bg-[#3E7C7A] text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-md shadow-md z-10">
                    Travel River
                  </div>
                </div>

                <h3 className="font-extrabold text-xl md:text-2xl text-gray-900 mb-4 text-left leading-snug group-hover:text-[#3E7C7A] transition-colors">
                  Spiritual Sojourn: Pilgrimagee Tours For Soul Seekers
                </h3>
              </div>

              {/* Metadata */}
              <div className="flex items-center gap-6 text-xs text-gray-400 mt-4 border-t border-gray-50 pt-4">
                <div className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-gray-400" />
                  <span>26th Sep, 2024</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock size={14} className="text-gray-400" />
                  <span>5 Mins Read</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column - Two Horizontal Stacked Cards (Using flex-1 to fill height) */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between gap-6">
            
            {/* Card 1 */}
            <div className="flex-1 bg-white rounded-3xl p-5 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 group cursor-pointer flex flex-col sm:flex-row gap-5 items-center">
              <div className="w-full sm:w-[190px] h-[135px] rounded-2xl overflow-hidden shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=400"
                  alt="Wine Country Escapes"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 rounded-2xl"
                />
              </div>
              <div className="flex flex-col justify-between py-1 min-w-0 h-full w-full">
                <div>
                  <div className="flex justify-start mb-2">
                    <span className="bg-[#3E7C7A] text-white text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-md">
                      Hiking
                    </span>
                  </div>
                  <h3 className="font-extrabold text-[17px] text-gray-900 leading-snug text-left group-hover:text-[#3E7C7A] transition-colors">
                    Wine Country Escapes: Vineyard Tours For Connoisseurs
                  </h3>
                </div>

                <div className="flex items-center gap-4 text-[11px] text-gray-400 mt-3 sm:mt-0">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-gray-400" />
                    <span>26th Sep, 2024</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock size={13} className="text-gray-400" />
                    <span>5 Mins Read</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex-1 bg-white rounded-3xl p-5 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 group cursor-pointer flex flex-col sm:flex-row gap-5 items-center">
              <div className="w-full sm:w-[190px] h-[135px] rounded-2xl overflow-hidden shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=400"
                  alt="Thrills & Chills"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 rounded-2xl"
                />
              </div>
              <div className="flex flex-col justify-between py-1 min-w-0 h-full w-full">
                <div>
                  <div className="flex justify-start mb-2">
                    <span className="bg-[#3E7C7A] text-white text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-md">
                      Adventure
                    </span>
                  </div>
                  <h3 className="font-extrabold text-[17px] text-gray-900 leading-snug text-left group-hover:text-[#3E7C7A] transition-colors">
                    Thrills & Chills: Extreme Sports Tours For Adrenaline
                  </h3>
                </div>

                <div className="flex items-center gap-4 text-[11px] text-gray-400 mt-3 sm:mt-0">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-gray-400" />
                    <span>26th Sep, 2024</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock size={13} className="text-gray-400" />
                    <span>5 Mins Read</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Footer Link */}
        <div className="text-center text-xs md:text-sm font-semibold text-gray-500 mt-4">
          Want To See Our Recent News & Updates.{" "}
          <a
            href="#"
            className="text-[#3E7C7A] hover:underline"
          >
            Click Here To View More
          </a>
        </div>

      </div>
    </section>
  );
}
