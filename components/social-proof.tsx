"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import ClientKPIs from "./client-kpis"

export default function SocialProof() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const wins = [
    {
      achievement:
        "QuiltMind's value goes far beyond LinkedIn posts. The weekly process sharpens how we articulate our business and feels like having an executive coach who drives clarity and focus. For anyone thinking AI can do this, it doesn't even come close.",
      client: "Cory Bricker, President, CassPay (Ticker: CASS)",
    },
    {
      achievement:
        "Within two months, advertisers were calling my network referencing my LinkedIn posts. Consistent weekly posts to my 25,000 followers, done in my voice, with zero hassle. Best ROI on my time, hands down.",
      client: "Jordan Harbinger, Host of the Jordan Harbinger Show (Top Apple/Spotify Podcast)",
    },
    {
      achievement:
        "The leads were some of the most valuable I've ever seen. More importantly, the program unlocked my own network. I was amazed how many people cared about what we're building. It's the ultimate business hack, a true cheat code for connecting with the right people.",
      client: "Rhon Daguro, CEO, authID (Ticker: AUID)",
    },
  ]

  return (
    <section id="social-proof" className="py-20 px-4 bg-black bg-opacity-60">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            Don't Just Take Our Word For It. See the Data.
          </span>
        </h2>

        {/* KPI Data Visualization */}
        <ClientKPIs />

        <div
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateY(50px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          }}
        >
          {/* Client Wins */}
          <div className="grid md:grid-cols-3 gap-8 mb-16 mt-16">
            {wins.map((win, index) => (
              <Card
                key={index}
                className="bg-gray-900 border-gray-800 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                style={{
                  transitionDelay: `${index * 0.1 + 0.4}s`,
                }}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white">"{win.achievement}"</h3>
                  <p className="text-blue-400">- {win.client}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Testimonial */}
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-2xl italic text-gray-300 mb-4">
              "One year in, I had done 1.1 million impressions, 10,000 engagements, and 1,600 new followers (starting
              with under 300). It's become my most effective way to spread the word about Simply Thick, dysphagia
              awareness, and IDDSI."
            </blockquote>
            <cite className="text-blue-400 font-medium">- John Holahan, President, SimplyThick</cite>
          </div>
        </div>
      </div>
    </section>
  )
}
