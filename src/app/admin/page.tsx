import { getBookings } from "@/actions/booking"
import { getEnquiries } from "@/actions/contact"
import { logoutAdmin } from "@/actions/auth"
import { LogOut } from "lucide-react"
import { AdminClient } from "./AdminClient"

export const dynamic = "force-dynamic"

export default async function AdminDashboard() {
  const [{ bookings, success: bookingsSuccess }, { enquiries, success: enquiriesSuccess }] = await Promise.all([
    getBookings(),
    getEnquiries()
  ])

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-serif font-bold text-[#0E5A60]">Admin Dashboard</h1>
          <form action={logoutAdmin}>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-slate-600 hover:text-red-600 hover:bg-red-50 hover:border-red-100 transition-colors text-sm font-medium shadow-sm">
              <LogOut size={16} /> Logout
            </button>
          </form>
        </div>

        {!bookingsSuccess || !enquiriesSuccess ? (
          <div className="bg-red-50 text-red-600 p-4 rounded-xl border border-red-100">
            Failed to load dashboard data. Please check database connection.
          </div>
        ) : (
          <AdminClient bookings={bookings || []} enquiries={enquiries || []} />
        )}
      </div>
    </div>
  )
}
