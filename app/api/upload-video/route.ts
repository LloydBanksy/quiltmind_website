import { put } from "@vercel/blob"
import { NextResponse } from "next/server"

export async function POST(request: Request): Promise<NextResponse> {
  const form = await request.formData()
  const file = form.get("file") as File

  if (!file) {
    return NextResponse.json({ error: "No file found in request" }, { status: 400 })
  }

  // Upload to Vercel Blob
  const blob = await put(`videos/${file.name}`, file, {
    access: "public",
  })

  // Return the URL for the uploaded file
  return NextResponse.json(blob)
}
