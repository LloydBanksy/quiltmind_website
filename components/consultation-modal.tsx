"use client"
import { useState, useEffect } from "react"
import type React from "react"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ConsultationModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [showWaitlist, setShowWaitlist] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    jobTitle: "",
    revenue: "",
    linkedinUrl: "",
    waitlistEmail: "",
    waitlistRole: "",
    waitlistNote: "",
  })

  const APPS_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbwNoSLneRJWruALhki_C6HsnC45fnx0RJS4l2ngZr2amiT6uZss88LK5gG7tiArkysl/exec"

  useEffect(() => {
    if (!isOpen) {
      setShowWaitlist(false)
      setShowSuccess(false)
      setIsSubmitting(false)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        companyName: "",
        jobTitle: "",
        revenue: "",
        linkedinUrl: "",
        waitlistEmail: "",
        waitlistRole: "",
        waitlistNote: "",
      })
    }
  }, [isOpen])

  const handleRevenueChange = (value: string) => {
    setFormData({ ...formData, revenue: value })
    if (value === "under-1m") {
      setFormData((prev) => ({
        ...prev,
        revenue: value,
        waitlistEmail: prev.email,
        waitlistRole: prev.companyName ? `${prev.jobTitle} at ${prev.companyName}` : prev.jobTitle,
      }))
      setShowWaitlist(true)
    } else {
      setShowWaitlist(false)
    }
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formElements = form.elements as HTMLFormControlsCollection

    // Sync React state to DOM input values
    Object.keys(formData).forEach((key) => {
      if (key === "type") return // Skip type field

      const input = formElements.namedItem(key) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      if (input && formData[key as keyof typeof formData]) {
        input.value = formData[key as keyof typeof formData]
      }
    })

    // Submit form to hidden iframe to avoid navigation
    const iframe = document.createElement("iframe")
    iframe.style.display = "none"
    iframe.name = "hidden-form-target"
    document.body.appendChild(iframe)

    form.target = "hidden-form-target"
    form.submit()

    setTimeout(() => {
      setIsSubmitting(false)
      const message = showWaitlist
        ? "Thank you! You have been added to our waitlist."
        : "Thank you! Your consultation request has been submitted successfully."
      setSuccessMessage(message)
      setShowSuccess(true)

      // Close modal after showing success
      setTimeout(() => {
        onClose()
      }, 2000)
    }, 3000)

    // Clean up iframe after submission
    setTimeout(() => {
      if (document.body.contains(iframe)) {
        document.body.removeChild(iframe)
      }
    }, 1000)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-gray-900 rounded-2xl shadow-2xl border border-gray-800 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {showSuccess && (
          <div className="absolute inset-0 bg-gray-900/95 backdrop-blur-sm rounded-2xl flex items-center justify-center z-10">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Success!</h3>
              <p className="text-gray-300">{successMessage}</p>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <div className="flex-1 pr-4">
            <h2 className="text-2xl font-bold text-white">
              {showWaitlist ? "Join Our Waitlist" : "Get a Free LinkedIn Audit"}
            </h2>
            {!showWaitlist && (
              <p className="text-gray-400 mt-2 text-sm">
                Complete the form below to schedule a 30-minute consultation where we'll discuss your LinkedIn
                objectives and show you how other executives in your industry have achieved measurable results through
                strategic thought leadership. QuiltMind works exclusively with B2B executives at companies generating
                $1M+ in annual revenue.
              </p>
            )}
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors flex-shrink-0">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {showWaitlist ? (
            // Waitlist Section
            <div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-2">Not quite ready for our executive service?</h3>
                <p className="text-gray-300">
                  We're developing an automated LinkedIn solution for smaller businesses and individual professionals
                  launching in 2025. Join our waitlist to be notified when it becomes available.
                </p>
              </div>

              <form action={APPS_SCRIPT_URL} method="POST" onSubmit={handleFormSubmit} className="space-y-4 max-w-2xl">
                <input type="hidden" name="type" value="waitlist" />

                <div>
                  <label htmlFor="waitlist-email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    id="waitlist-email"
                    name="waitlistEmail"
                    type="email"
                    required
                    value={formData.waitlistEmail}
                    onChange={(e) => setFormData({ ...formData, waitlistEmail: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="waitlist-role" className="block text-sm font-medium text-gray-300 mb-2">
                    Company/Role (optional)
                  </label>
                  <input
                    id="waitlist-role"
                    name="waitlistRole"
                    type="text"
                    value={formData.waitlistRole}
                    onChange={(e) => setFormData({ ...formData, waitlistRole: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Company name or your role"
                  />
                </div>

                <div>
                  <label htmlFor="waitlist-note" className="block text-sm font-medium text-gray-300 mb-2">
                    Brief note about your LinkedIn interests (optional)
                  </label>
                  <textarea
                    id="waitlist-note"
                    name="waitlistNote"
                    value={formData.waitlistNote}
                    onChange={(e) => setFormData({ ...formData, waitlistNote: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="What are you hoping to achieve with LinkedIn?"
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowWaitlist(false)}
                    className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-800"
                    disabled={isSubmitting}
                  >
                    Back to Form
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white disabled:opacity-50"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Joining..." : "Join Waitlist"}
                  </Button>
                </div>
              </form>
            </div>
          ) : (
            // Main Form
            <div>
              <form action={APPS_SCRIPT_URL} method="POST" onSubmit={handleFormSubmit} className="space-y-6">
                <input type="hidden" name="type" value="consultation" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-300 mb-2">
                      First Name *
                    </label>
                    <input
                      id="first-name"
                      name="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="John"
                    />
                  </div>

                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name *
                    </label>
                    <input
                      id="last-name"
                      name="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Company Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="john@company.com"
                    />
                    <p className="text-xs text-gray-400 mt-1">Company domain required for verification</p>
                  </div>

                  <div>
                    <label htmlFor="company-name" className="block text-sm font-medium text-gray-300 mb-2">
                      Company Name *
                    </label>
                    <input
                      id="company-name"
                      name="companyName"
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Acme Corporation"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="job-title" className="block text-sm font-medium text-gray-300 mb-2">
                      Job Title *
                    </label>
                    <input
                      id="job-title"
                      name="jobTitle"
                      type="text"
                      required
                      value={formData.jobTitle}
                      onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="CEO, VP of Sales, etc."
                    />
                  </div>

                  <div>
                    <label htmlFor="revenue" className="block text-sm font-medium text-gray-300 mb-2">
                      Annual Company Revenue *
                    </label>
                    <select
                      id="revenue"
                      name="revenue"
                      required
                      value={formData.revenue}
                      onChange={(e) => handleRevenueChange(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                        backgroundPosition: "right 0.75rem center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "1.5em 1.5em",
                        paddingRight: "2.5rem",
                      }}
                    >
                      <option value="">Select revenue range</option>
                      <option value="1m-5m">$1M - $5M</option>
                      <option value="5m-25m">$5M - $25M</option>
                      <option value="25m-100m">$25M - $100M</option>
                      <option value="100m+">$100M+</option>
                      <option value="under-1m">Under $1M</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="linkedin-url" className="block text-sm font-medium text-gray-300 mb-2">
                    LinkedIn Profile URL *
                  </label>
                  <input
                    id="linkedin-url"
                    name="linkedinUrl"
                    type="url"
                    required
                    value={formData.linkedinUrl}
                    onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={onClose}
                    className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
                    disabled={isSubmitting}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white disabled:opacity-50"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Scheduling..." : "Get a Free LinkedIn Audit"}
                  </Button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
