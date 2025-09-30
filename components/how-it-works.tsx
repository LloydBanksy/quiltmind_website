"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { CalendarClock, MessageCircle, FileCheck, BarChart } from "lucide-react"

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const steps = [
    {
      icon: <CalendarClock className="w-12 h-12 text-blue-400" />,
      title: "Strategic Deep Dive",
      subtitle: "60 min Kick-off",
      description: "We align on your goals, target audience, and unique narrative voice.",
    },
    {
      icon: <MessageCircle className="w-12 h-12 text-blue-500" />,
      title: "Effortless Insight Extraction",
      subtitle: "Weekly 30 min",
      description: "We capture your expertise and perspective through brief, structured interviews.",
    },
    {
      icon: <FileCheck className="w-12 h-12 text-blue-600" />,
      title: "Expert Content Creation & Approval",
      subtitle: "Minimal Review Time",
      description: "Our team crafts compelling, platform-optimized posts. You simply review and approve.",
    },
    {
      icon: <BarChart className="w-12 h-12 text-blue-500" />,
      title: "Strategic Distribution & Growth",
      subtitle: "Ongoing Management",
      description:
        "We manage posting schedules, engagement strategy, and track performance to maximize reach and impact.",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 px-4 bg-black bg-opacity-60">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            Your Influence, Amplified. Your Time, Respected.
          </span>
        </h2>

        <div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          style={{
            transform: isInView ? "none" : "translateY(50px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          }}
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
              style={{
                transitionDelay: `${index * 0.1 + 0.2}s`,
              }}
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold mb-1">{step.title}</h3>
              <p className="text-blue-400 text-sm mb-3">{step.subtitle}</p>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
