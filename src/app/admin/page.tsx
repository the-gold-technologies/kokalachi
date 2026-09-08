import { getBookings } from "@/actions/booking"
import { logoutAdmin } from "@/actions/auth"
import { Calendar, Mail, MapPin, Phone, Users, LogOut } from "lucide-react"

export const dynamic = "force-dynamic"

export default async function AdminDashboard() {
  const { bookings, success } = await getBookings()

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-serif font-bold text-[#0E5A60]">Admin Dashboard - Bookings</h1>
          <form action={logoutAdmin}>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-slate-600 hover:text-red-600 hover:bg-red-50 hover:border-red-100 transition-colors text-sm font-medium shadow-sm">
              <LogOut size={16} /> Logout
            </button>
          </form>
        </div>

        {!success || !bookings ? (
          <div className="bg-red-50 text-red-600 p-4 rounded-xl border border-red-100">
            Failed to load bookings. Please check database connection.
          </div>
        ) : bookings.length === 0 ? (
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
                  {bookings.map((booking) => (
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
                          ₹{booking.totalAmount.toLocaleString()}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-slate-500">
                        <div className="flex items-center gap-1.5">
                          <Calendar size={14} />
                          {booking.createdAt.toLocaleDateString('en-IN', {
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
        )}
      </div>
    </div>
  )
}
