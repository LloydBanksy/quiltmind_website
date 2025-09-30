import UploadForm from "@/components/upload-form"

export default function UploadPage() {
  return (
    <div className="min-h-screen bg-black py-12 px-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-center">Admin Video Upload</h1>
        <UploadForm />
      </div>
    </div>
  )
}
