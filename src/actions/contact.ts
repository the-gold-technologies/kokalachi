"use server"

import { cmsPost } from "@/lib/cms"
import { getClientIp } from "@/lib/client-ip"

export interface ContactEnquiryData {
  name: string
  email: string
  phone: string
  journey?: string
  travelDate?: string
  groupSize?: string
  message: string
  hearAboutUs?: string
}

export async function submitContactEnquiry(data: ContactEnquiryData) {
  try {
    // Saved in the CMS (Submissions → Enquiries), which also emails the admin
    const enquiry = await cmsPost("/enquiries", data, await getClientIp())
    return { success: true, enquiry }
  } catch (error) {
    console.error("[contact] Error creating enquiry:", error)
    return { success: false, error: "Failed to send enquiry" }
  }
}
