"use client"

import { useState } from "react"
import { Calendar, Mail, Phone, Users } from "lucide-react"
import type { Booking, Enquiry } from "@prisma/client"

export function AdminClient({ bookings, enquiries }: { bookings: Booking[], enquiries: Enquiry[] }) {
  const [activeTab, setActiveTab] = useState<"bookings" | "enquiries">("bookings")

  return (
    <>
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveTab("bookings")}
          className={`px-6 py-2.5 rounded-full font-bold text-sm transition-colors ${
            activeTab === "bookings" 
              ? "bg-[#0E5A60] text-white shadow-md" 
              : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
          }`}
        >
          Booking Leads ({bookings.length})
        </button>
        <button
          onClick={() => setActiveTab("enquiries")}
          className={`px-6 py-2.5 rounded-full font-bold text-sm transition-colors ${
            activeTab === "enquiries" 
              ? "bg-[#0E5A60] text-white shadow-md" 
              : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
          }`}
        >
          General Enquiries ({enquiries.length})
        </button>
      </div>

      {activeTab === "bookings" ? (
        bookings.length === 0 ? (
          <div className="bg-white p-12 text-center rounded-2xl border border-slate-200 shadow-sm">
            <p className="text-slate-500">No bookings found yet.</p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#FAF4EC] border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-4 font-bold text-[#0E5A60]">Client Details</th>
                    <th className="px-6 py-4 font-bold text-[#0E5A60]">Trip Selected</th>
                    <th className="px-6 py-4 font-bold text-[#0E5A60]">Group Size</th>
                    <th className="px-6 py-4 font-bold text-[#0E5A60]">Total Quote</th>
                    <th className="px-6 py-4 font-bold text-[#0E5A60]">Date Received</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {bookings.map((booking: Booking) => (
                    <tr key={booking.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-bold text-slate-800">{booking.name}</div>
                        <div className="flex items-center gap-1.5 text-slate-500 mt-1 text-xs">
                          <Mail size={12} /> {booking.email}
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-500 mt-0.5 text-xs">
                          <Phone size={12} /> {booking.phone}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-medium text-[#0E5A60]">{booking.tripName}</div>
                        {booking.departureDate && (
                          <div className="flex items-center gap-1.5 text-xs font-bold text-[#D96C2C] mt-1">
                            <Calendar size={12} /> {booking.departureDate}
                          </div>
                        )}
                        {booking.specialRequests && (
                          <div className="mt-1.5 p-2 bg-[#F7F3EC] rounded text-xs text-slate-600 border border-[#F0E8D9]">
                            <strong>Notes:</strong> {booking.specialRequests}
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1.5 text-slate-700">
                          <Users size={14} className="text-[#0E5A60]" />
                          <span>{booking.guests} Guest{booking.guests > 1 ? 's' : ''}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-bold text-slate-800">
                          {booking.totalAmount > 0 ? `₹${booking.totalAmount.toLocaleString()}` : "Price TBA"}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-slate-500">
                        <div className="flex items-center gap-1.5">
                          <Calendar size={14} />
                          {new Date(booking.createdAt).toLocaleDateString('en-IN', {
                            day: 'numeric', month: 'short', year: 'numeric'
                          })}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )
      ) : (
        enquiries.length === 0 ? (
          <div className="bg-white p-12 text-center rounded-2xl border border-slate-200 shadow-sm">
            <p className="text-slate-500">No enquiries found yet.</p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#FAF4EC] border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-4 font-bold text-[#0E5A60]">Client Details</th>
                    <th className="px-6 py-4 font-bold text-[#0E5A60]">Interest</th>
                    <th className="px-6 py-4 font-bold text-[#0E5A60]">Message</th>
                    <th className="px-6 py-4 font-bold text-[#0E5A60]">Source</th>
                    <th className="px-6 py-4 font-bold text-[#0E5A60]">Date Received</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {enquiries.map((enquiry: Enquiry) => (
                    <tr key={enquiry.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 align-top">
                        <div className="font-bold text-slate-800">{enquiry.name}</div>
                        <div className="flex items-center gap-1.5 text-slate-500 mt-1 text-xs">
                          <Mail size={12} /> {enquiry.email}
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-500 mt-0.5 text-xs">
                          <Phone size={12} /> {enquiry.phone}
                        </div>
                      </td>
                      <td className="px-6 py-4 align-top">
                        {enquiry.journey ? (
                          <div className="font-medium text-[#0E5A60] mb-1">{enquiry.journey}</div>
                        ) : (
                          <span className="text-slate-400 italic">General Enquiry</span>
                        )}
                        {enquiry.travelDate && (
                          <div className="flex items-center gap-1.5 text-xs text-slate-600 mt-1">
                            <Calendar size={12} /> {enquiry.travelDate}
                          </div>
                        )}
                        {enquiry.groupSize && (
                          <div className="flex items-center gap-1.5 text-xs text-slate-600 mt-0.5">
                            <Users size={12} /> {enquiry.groupSize}
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 align-top">
                        <div className="text-slate-700 italic max-w-sm line-clamp-3" title={enquiry.message}>
                          "{enquiry.message}"
                        </div>
                      </td>
                      <td className="px-6 py-4 align-top text-slate-600 capitalize">
                        {enquiry.hearAboutUs || <span className="text-slate-400">—</span>}
                      </td>
                      <td className="px-6 py-4 align-top text-slate-500">
                        <div className="flex items-center gap-1.5">
                          <Calendar size={14} />
                          {new Date(enquiry.createdAt).toLocaleDateString('en-IN', {
                            day: 'numeric', month: 'short', year: 'numeric'
                          })}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )
      )}
    </>
  )
}
