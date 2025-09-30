"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Award, Target, Briefcase, Network, TrendingUp, Users } from "lucide-react"

export default function Benefits() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const benefits = [
    {
      icon: <Award className="w-10 h-10 text-blue-400" />,
      title: "Elevate Your Authority",
      description: "Become the recognized thought leader in your space.",
    },
    {
      icon: <Target className="w-10 h-10 text-blue-500" />,
      title: "Generate Qualified Leads",
      description: "Attract inbound interest from ideal clients, partners, and investors.",
    },
    {
      icon: <Briefcase className="w-10 h-10 text-blue-600" />,
      title: "Unlock Premium Opportunities",
      description: "Secure high-profile speaking gigs, media features, and board positions.",
    },
    {
      icon: <Network className="w-10 h-10 text-blue-400" />,
      title: "Build High-Value Networks",
      description: "Connect directly with key decision-makers and industry influencers.",
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-blue-500" />,
      title: "Boost Investor Confidence",
      description: "Demonstrate leadership and vision consistently to stakeholders.",
    },
    {
      icon: <Users className="w-10 h-10 text-blue-600" />,
      title: "Attract Top Talent",
      description: "Showcase your company culture and vision to potential hires.",
    },
  ]

  return (
    <section id="benefits" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-80 z-0"></div>

      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            Go Beyond Followers. Generate Real Business Outcomes.
          </span>
        </h2>

        <div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          style={{
            transform: isInView ? "none" : "translateY(50px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          }}
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
              style={{
                transitionDelay: `${index * 0.1 + 0.2}s`,
              }}
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
