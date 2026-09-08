"use client"

import { useState } from "react"
import { loginAdmin } from "@/actions/auth"
import { useRouter } from "next/navigation"
import { Lock, ArrowRight } from "lucide-react"

export default function AdminLogin() {
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    const formData = new FormData(e.currentTarget)
    const result = await loginAdmin(formData)

    if (result.success) {
      router.push("/admin")
      router.refresh()
    } else {
      setError(result.error || "Failed to login")
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-lg border border-[#F0E8D9]">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[#0E5A60]/10 text-[#0E5A60] rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock size={32} />
          </div>
          <h1 className="text-2xl font-serif font-bold text-[#0E5A60]">Admin Portal</h1>
          <p className="text-slate-500 mt-2 text-sm">Please enter the master password to access the bookings dashboard.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="password" className="block text-sm font-bold text-slate-700 mb-1.5">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              required 
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0E5A60] focus:ring-1 focus:ring-[#0E5A60] transition-colors" 
              placeholder="Enter password..." 
            />
          </div>

          {error && (
            <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100">
              {error}
            </div>
          )}

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full py-3.5 bg-[#0E5A60] hover:bg-[#0A4348] disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-bold text-[15px] rounded-full shadow-md transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            {isSubmitting ? "Verifying..." : "Access Dashboard"}
            {!isSubmitting && <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />}
          </button>
        </form>
      </div>
    </div>
  )
}
