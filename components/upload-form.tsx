"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function UploadForm() {
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!file) return

    setUploading(true)
    setError(null)

    try {
      const formData = new FormData()
      formData.append("file", file)

      const response = await fetch("/api/upload-video", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Upload failed")
      }

      const blob = await response.json()
      setUploadedUrl(blob.url)

      // Copy URL to clipboard
      await navigator.clipboard.writeText(blob.url)
      alert("Video uploaded successfully! URL copied to clipboard.")
    } catch (err) {
      setError("Upload failed. Please try again.")
      console.error(err)
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="p-6 bg-gray-900 rounded-lg border border-gray-800">
      <h2 className="text-xl font-bold mb-4">Upload Video to Blob Storage</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Select video file:</label>
          <input
            type="file"
            accept="video/mp4,video/webm"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"
            required
          />
        </div>

        <Button type="submit" disabled={!file || uploading} className="w-full">
          {uploading ? "Uploading..." : "Upload Video"}
        </Button>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        {uploadedUrl && (
          <div className="mt-4">
            <p className="text-sm font-medium mb-2">Video URL (copied to clipboard):</p>
            <div className="p-2 bg-gray-800 rounded text-xs break-all">{uploadedUrl}</div>
          </div>
        )}
      </form>
    </div>
  )
}
