"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function createBooking(data: {
  name: string
  email: string
  phone: string
  guests: number
  tripId: string
  tripName: string
  totalAmount: number
  specialRequests?: string
}) {
  try {
    const booking = await prisma.booking.create({
      data,
    })
    
    // Revalidate the admin dashboard path so it shows the new booking
    revalidatePath("/admin")
    
    return { success: true, booking }
  } catch (error) {
    console.error("Failed to create booking:", error)
    return { success: false, error: "Failed to create booking" }
  }
}

export async function getBookings() {
  try {
    const bookings = await prisma.booking.findMany({
      orderBy: {
        createdAt: "desc"
      }
    })
    return { success: true, bookings }
  } catch (error) {
    console.error("Failed to get bookings:", error)
    return { success: false, error: "Failed to get bookings", bookings: [] }
  }
}
