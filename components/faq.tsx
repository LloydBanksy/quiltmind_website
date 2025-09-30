"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const faqs = [
    {
      question: "How do you ensure authenticity?",
      answer:
        "Our process starts with you. We interview you to capture your unique voice, experiences, and perspectives. All content is based on your insights and requires your final approval before posting. It's your expertise, professionally packaged and amplified.",
    },
    {
      question: "What's the time commitment for me?",
      answer:
        "Minimal. Expect an initial strategy session (approx. 60 mins) and then brief weekly check-ins/interviews (approx. 30-45 mins) to gather insights. We handle everything else. Your total active time is typically under 2 hours per month.",
    },
    {
      question: "How do you measure success (ROI)?",
      answer:
        "We track leading indicators (impressions, engagement, follower quality, profile views) and, more importantly, the lagging indicators you care about: qualified leads, inbound opportunities (speaking, media, partnerships), high-value connections made, and conversion rates from these activities. Success is defined by your business goals.",
    },
    {
      question: "Who is this service for?",
      answer:
        "Our Executive Presence Accelerator is designed specifically for C-suite executives, founders, VPs, and senior leaders at companies generating $1M+ in annual revenue who understand the strategic value of a strong personal brand on LinkedIn and X but lack the time or internal resources to execute effectively.",
    },
  ]

  return (
    <section id="faq" className="py-20 px-4 bg-black bg-opacity-60">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            Frequently Asked Questions
          </span>
        </h2>

        <div
          ref={ref}
          className="max-w-3xl mx-auto"
          style={{
            transform: isInView ? "none" : "translateY(50px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-800">
                <AccordionTrigger className="text-left text-lg font-medium py-4 hover:text-blue-400 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
