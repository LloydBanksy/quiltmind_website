"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Clock, Repeat, MessageSquare, Users } from "lucide-react"

export default function ProblemSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const challenges = [
    {
      icon: <Clock className="w-12 h-12 text-blue-400" />,
      title: "Time Scarcity",
      description: "Building a consistent online presence demands time you simply don't have as a busy executive.",
    },
    {
      icon: <Repeat className="w-12 h-12 text-blue-500" />,
      title: "Inconsistent Posting",
      description: "Sporadic content fails to build momentum and authority in your industry.",
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-blue-600" />,
      title: "Authenticity Concerns",
      description: "Maintaining your unique voice while delegating content creation requires expertise.",
    },
    {
      icon: <Users className="w-12 h-12 text-blue-500" />,
      title: "Missed Connections & Leads",
      description: "Without strategic presence, valuable opportunities and relationships slip away.",
    },
  ]

  return (
    <section id="problem" className="py-20 px-4 bg-gray-900 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white">
          You're Leading Your Business.
          <span
            className="text-blue-400 bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 block mt-2"
            style={{
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "#60A5FA", // fallback color
            }}
          >
            Is Your Voice Leading Your Industry?
          </span>
        </h2>

        <p className="text-xl text-white max-w-3xl mx-auto text-center mb-16">
          Building a powerful executive presence on LinkedIn and X demands time you don't have, consistency that's hard
          to maintain, and expertise you shouldn't need to master. Too many leaders miss critical opportunities because
          their digital footprint doesn't match their real-world impact.
        </p>

        <div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          style={{
            transform: isInView ? "none" : "translateY(50px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          }}
        >
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
              style={{
                transitionDelay: `${index * 0.1 + 0.2}s`,
              }}
            >
              <div className="mb-4">{challenge.icon}</div>
              <h3 className="text-xl font-bold mb-3">{challenge.title}</h3>
              <p className="text-gray-400">{challenge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
