import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Script from "next/script"

export default function AnalysisPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-28 pb-8 px-4">
        <div className="container mx-auto max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-white">Free LinkedIn</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 block mt-2">
                  Profile Analysis
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                What does your LinkedIn profile say about you?
              </p>

              <div className="space-y-4 text-lg text-gray-300">
                <p>
                  Get a professional audit of your LinkedIn presence with actionable recommendations to enhance your executive influence and thought leadership.
                </p>

                <p>
                  Schedule your free analysis to see how others perceive your profile and learn how to amplify your professional impact.
                </p>
              </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden">
                <div className="grid lg:grid-cols-2">
              {/* Left Panel - Service Details */}
              <div className="bg-gray-800 p-8 lg:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center mb-6">
                    <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                      quiltmind
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Book your LinkedIn audit consultation
                  </h3>
                  
                  <div className="flex items-center text-gray-300 mb-6">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm">30 min</span>
                  </div>
                  
                      <p className="text-gray-300 mb-6">
                        Schedule a 30-minute consultation where we&apos;ll review your LinkedIn profile, analyze your current
                        content strategy, and identify specific opportunities to enhance your executive presence and thought
                        leadership. We&apos;ll show you how other executives in your industry have achieved measurable results
                        and provide actionable recommendations tailored to your goals.
                      </p>
                  
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mb-6">
                    <p className="text-sm text-blue-200 font-medium">
                      <strong>Important:</strong> QuiltMind works exclusively with B2B executives at companies generating $1M+ in annual revenue.
                    </p>
                  </div>
                </div>
                
                <div className="text-xs text-gray-500">
                  <a href="#" className="text-blue-400 hover:underline">Cookie settings</a>
                </div>
              </div>
              
              {/* Right Panel - Calendly Integration */}
              <div className="bg-gray-900 p-0 relative">
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded transform -rotate-90 origin-center">
                    Calendly
                  </div>
                </div>
                
                {/* Calendly Inline Widget */}
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/dov-quiltmind/linkedin-audit"
            data-hide-cookie-banner="true"
            data-hide-landing-page-details="true"
            style={{ minWidth: '320px', height: '850px' }}
          />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Calendly Script */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
    </main>
  )
}
