"use server"

import { cmsPost } from "@/lib/cms"
import { getClientIp } from "@/lib/client-ip"

export async function createBooking(data: {
  name: string
  email: string
  phone: string
  guests: number
  tripId: string
  tripName: string
  departureId?: string
  departureDate?: string
  totalAmount: number
  specialRequests?: string
}) {
  try {
    // Saved in the CMS (Submissions → Bookings), which also emails the admin and the traveller
    const booking = await cmsPost("/bookings", data, await getClientIp())
    return { success: true, booking }
  } catch (error) {
    console.error("Failed to create booking:", error)
    return { success: false, error: "Failed to create booking" }
  }
}
