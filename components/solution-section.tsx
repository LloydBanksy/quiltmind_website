"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"

export default function SolutionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="solution" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-80 z-0"></div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white">
            Built for Executives with Zero Time.
          </h2>

          <div
            ref={ref}
            className="grid md:grid-cols-2 gap-12 items-center"
            style={{
              transform: isInView ? "none" : "translateY(50px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
            }}
          >
            <div>
              <p className="text-xl text-gray-300 mb-8">
                Everything starts with a simple 30-minute interview. We prep the questions. You share your experience.
                Our team turns your insights into Linkedin-optimized posts that you quickly approve and publish.
              </p>
              <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 font-semibold">
                It&apos;s everything you want to say - just made effortless.
              </p>
            </div>

            <div className="mt-6 md:mt-0">
              <img
                src="/linkedin-analytics.webp"
                alt="Executive reviewing LinkedIn analytics dashboard"
                className="rounded-xl shadow-2xl shadow-blue-500/20 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
