import { list } from "@vercel/blob"

export async function getVideoUrl(filename: string): Promise<string | null> {
  try {
    // List blobs with the given prefix
    const { blobs } = await list({
      prefix: `videos/${filename}`,
    })

    // Return the URL of the first matching blob, if any
    if (blobs.length > 0) {
      return blobs[0].url
    }

    return null
  } catch (error) {
    console.error("Error fetching video URL:", error)
    return null
  }
}
