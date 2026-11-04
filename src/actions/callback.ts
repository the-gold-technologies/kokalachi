"use server"

import { cmsPost } from "@/lib/cms"
import { getClientIp } from "@/lib/client-ip"

export interface CallBackRequestData {
  name: string
  phone: string // "+91XXXXXXXXXX"
  bestTime: "Anytime" | "Morning" | "Afternoon" | "Evening"
  tripId: string
  tripName: string
  tripUrl: string
}

// "Call me back" on a trip page. Saved in the CMS (Submissions → Call-backs), which should
// also email the admin, the same way bookings and enquiries do.
export async function requestCallBack(data: CallBackRequestData) {
  try {
    const callBack = await cmsPost("/callbacks", data, await getClientIp())
    return { success: true, callBack }
  } catch (error) {
    console.error("[callback] Error creating call-back request:", error)
    return { success: false, error: "Failed to send call-back request" }
  }
}
