"use client";

import React, { useState } from "react";
import {
  Search,
  MapPin,
  Calendar,
  User,
  Send,
  Building2,
  Utensils,
  Home,
  TrendingUp,
  Car,
} from "lucide-react";
import { Button } from "../ui/Button";

export function SearchBar() {
  const [activeTab, setActiveTab] = useState("tour");

  const tabs = [
    { id: "tour", label: "Tour", icon: Send },
    { id: "hotel", label: "Hotel", icon: Building2 },
    { id: "restaurant", label: "Restaurant", icon: Utensils },
    { id: "rental", label: "Rental", icon: Home },
    { id: "activity", label: "Activity", icon: TrendingUp },
    { id: "car-rental", label: "Car Rental", icon: Car },
  ];

  return (
    <div className="bg-white rounded-xl shadow-xl w-full max-w-6xl overflow-hidden px-2 pt-2 pb-6">
      {/* Tabs — horizontally scrollable on mobile */}
      <div className="relative">
        <div className="flex border-b border-gray-100 overflow-x-auto mx-4 mb-6 pt-2 scrollbar-hide">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-4 px-3 md:px-6 flex items-center gap-1.5 text-xs md:text-sm font-semibold transition-colors relative whitespace-nowrap flex-shrink-0 ${
                  isActive
                    ? "text-primary"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                <Icon size={14} />
                <span>{tab.label}</span>
                {isActive && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary" />
                )}
              </button>
            );
          })}
        </div>
        {/* Right fade hint for mobile */}
        <div className="absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-white to-transparent pointer-events-none md:hidden" />
      </div>

      {/* Form */}
      <div className="px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
          {/* Destinations */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">
              Destinations:
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Where are you going ..."
                className="w-full pl-4 pr-10 py-3 bg-gray-50/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm text-gray-700"
              />
              <MapPin
                size={16}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
            </div>
          </div>

          {/* Check In */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">
              Check In:
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="10/07/2026"
                className="w-full pl-4 pr-10 py-3 bg-gray-50/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm text-gray-700"
              />
              <Calendar
                size={16}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
            </div>
          </div>

          {/* Check Out */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">
              Check Out:
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="10/07/2026"
                className="w-full pl-4 pr-10 py-3 bg-gray-50/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm text-gray-700"
              />
              <Calendar
                size={16}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
            </div>
          </div>

          {/* Guest + Search */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Guest:</label>
            <div className="flex flex-col md:flex-row gap-2 items-stretch md:items-center">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="+ Add Guests"
                  className="w-full pl-4 pr-10 py-3 bg-gray-50/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm text-gray-700"
                />
                <User
                  size={16}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
              </div>
              <Button
                variant="secondary"
                className="w-full md:w-auto rounded-lg px-6 py-3 !hover:bg-[#326462] !bg-[#3e7c7a] text-white font-medium flex items-center justify-center gap-2 shrink-0"
              >
                Search <Search size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
