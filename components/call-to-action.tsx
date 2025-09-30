"use client"

import { useState } from "react"
import { useSpring, animated } from "@react-spring/web"
import ConsultationModal from "./consultation-modal"

export default function CallToAction() {
  const [hovered, setHovered] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const buttonSpring = useSpring({
    scale: hovered ? 1.1 : 1,
    config: { tension: 300, friction: 10 },
  })

  return (
    <>
      <section id="cta" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-80 z-0"></div>

        <div className="absolute top-20 -left-20 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 -right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Ready to Transform Your Executive Influence into Tangible Results?
              </span>
            </h2>

            <p className="text-xl text-gray-300 mb-10">
              Stop letting valuable opportunities pass you by. Invest less than 30 minutes a week to build the authority
              and connections that drive real business growth. Schedule your complimentary discovery call today.
            </p>

            <div>
              <animated.a
                href="/analysis"
                style={buttonSpring}
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-4 md:px-8 md:py-6 rounded-full text-lg md:text-xl font-bold transition-all shadow-lg shadow-blue-700/50"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                Get a Free LinkedIn Audit
              </animated.a>
            </div>

            <p className="text-sm text-gray-400 mt-4">Let's discuss your goals and see if we're the right fit.</p>
          </div>
        </div>
      </section>

      <ConsultationModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  )
}
