"use server"

import { sendContactEnquiry, ContactEnquiryData } from "@/lib/mailer"
import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function submitContactEnquiry(data: ContactEnquiryData) {
  try {
    const enquiry = await prisma.enquiry.create({
      data,
    })

    revalidatePath("/admin")

    // Fire and forget email
    sendContactEnquiry(data).catch((error) => {
      console.error("[contact] Enquiry email failed:", error)
    })

    return { success: true, enquiry }
  } catch (error) {
    console.error("[contact] Error creating enquiry:", error)
    return { success: false, error: "Failed to send enquiry" }
  }
}

export async function getEnquiries() {
  try {
    const enquiries = await prisma.enquiry.findMany({
      orderBy: {
        createdAt: "desc"
      }
    })
    return { success: true, enquiries }
  } catch (error) {
    console.error("Failed to get enquiries:", error)
    return { success: false, error: "Failed to get enquiries", enquiries: [] }
  }
}
