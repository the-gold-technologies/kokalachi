"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function loginAdmin(formData: FormData) {
  const password = formData.get("password") as string
  // If not configured in .env, fallback to a default (strongly recommend setting in .env!)
  const actualPassword = process.env.ADMIN_PASSWORD || "kokalachi123" 
  
  if (password === actualPassword) {
    const cookieStore = await cookies()
    // Set cookie for 7 days
    cookieStore.set("admin_session", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    })
    
    return { success: true }
  }
  
  return { success: false, error: "Invalid password" }
}

export async function logoutAdmin() {
  const cookieStore = await cookies()
  cookieStore.delete("admin_session")
  redirect("/admin/login")
}
