"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"

export default function FounderSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="founder" className="py-20 px-4 bg-black bg-opacity-60">
      <div className="container mx-auto">
        <div
          ref={ref}
          className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-stretch"
          style={{
            transform: isInView ? "none" : "translateY(50px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          }}
        >
          <div className="relative group">
            {/* Persistent glow effect */}
            <div className="absolute inset-0 bg-blue-500/30 rounded-xl blur-xl"></div>
            <img
              src="/founder.jpg"
              alt="Dov Marmor, Quiltmind Founder & CEO"
              className="rounded-xl shadow-lg w-full h-full object-cover relative z-10"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Founded by a Leader Who Understands the ROI
              </span>
            </h2>

            <p className="text-gray-300 text-base mb-4">
              Dov has led four enterprise scale businesses, grown revenues to over $100M, and built products for some of the largest brands in the world like Uber, Turbotax, Quickbooks, and Wealthfront.
            </p>

            <p className="text-gray-300 text-base mb-4">
              He found the most effective strategy for growth was empowering his teams to be the face of their brands, specifically on platforms like LinkedIn.
            </p>

            <p className="text-gray-300 text-base">
              Along his journey, he realized that too many people do very little on social, despite being focused more than ever on growing their careers and businesses. Most people just don’t have the experience or comfort level to commit to the process.
            </p>
            <div className="mt-6">
              <a
                href="https://www.linkedin.com/in/dovmarmor/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="text-sm font-medium">Connect with Dov on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
