"use client"

import { useState } from "react"
import { useSpring, animated } from "@react-spring/web"
import ConsultationModal from "./consultation-modal"

export default function Hero() {
  const [hovered, setHovered] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const buttonSpring = useSpring({
    scale: hovered ? 1.1 : 1,
    config: { tension: 300, friction: 10 },
  })

  return (
    <>
      <section
        id="hero"
        className="relative min-h-screen pt-24 md:pt-28 lg:pt-0 flex flex-col items-center justify-center px-4 overflow-hidden bg-black"
      >
        {/* Background gradient circles */}
        <div className="absolute top-20 -left-20 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 -right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-40 w-72 h-72 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        <div className="container mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-8 items-center z-10">
          <div className="space-y-8 text-center lg:text-left lg:order-1 bg-black/20 p-6 rounded-lg backdrop-blur-sm">
            <h1 className="text-4xl md:text-6xl font-normal leading-tight">
              <span className="block text-white bg-black/30 px-2 py-1 rounded">We make CEOs famous</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 bg-black/30 px-2 py-1 rounded mt-2 inline-block font-semibold">
                on LinkedIn.
              </span>
            </h1>
            <p className="text-xl text-white max-w-lg mx-auto lg:mx-0 bg-black/30 p-4 rounded">
              Being the top voice in your niche gets you a seat at the table and we keep you top of mind.
            </p>

            {/* Desktop button */}
            <div className="hidden lg:block">
              <animated.a
                href="/analysis"
                style={buttonSpring}
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 rounded-full text-xl font-bold transition-all shadow-lg shadow-blue-700/50"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                Book Your Discovery Call
              </animated.a>
            </div>
          </div>

          <div className="h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center lg:order-2 my-8 lg:my-0">
            <div className="relative w-full max-w-xs md:max-w-sm lg:max-w-md aspect-square rounded-2xl overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                src="https://mcgqlbvnvurslv4u.public.blob.vercel-storage.com/blue-animation-ORJe1gYisEUYHL4l2gDEft20nlFe2S.mp4"
              >
                <span className="text-gray-900 bg-white p-2 rounded">Your browser does not support the video tag.</span>
              </video>

              {/* Gradient overlay for mobile */}
              <div className="absolute inset-0 pointer-events-none lg:hidden">
                <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-black to-transparent"></div>
                <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-black to-transparent"></div>
                <div className="absolute inset-y-0 right-0 w-4 bg-gradient-to-l from-black to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile button */}
        <div className="mt-4 mb-8 lg:mb-16 z-10 lg:hidden">
          <animated.a
            href="/analysis"
            style={buttonSpring}
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-4 md:px-8 md:py-6 rounded-full text-lg md:text-xl font-bold transition-all shadow-lg shadow-blue-700/50"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            Book Your Discovery Call
          </animated.a>
        </div>

        {/* Bouncing arrow - desktop only */}
        <div className="absolute bottom-6 left-0 right-0 hidden lg:flex justify-center">
          <div className="animate-bounce bg-white bg-opacity-10 p-2 w-10 h-10 ring-1 ring-white ring-opacity-20 rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>

      <ConsultationModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  )
}
