"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Check } from "lucide-react"

export default function ServiceFocus() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const executiveFeatures = [
    "Personalized Strategy & Audience Definition",
    "Content Ideation & Narrative Development",
    "Expert Copywriting & Content Production",
    "Platform-Specific Optimization",
    "Strategic Posting Schedule & Distribution",
    "Performance Analytics & Reporting",
    "Minimal Executive Time Commitment (Avg. 30 minutes/week)",
    "Custom Visual Content Creation & Design",
  ]

  const quiltSchoolFeatures = [
    "Team-Wide LinkedIn Training & Best Practices",
    "Gamified Engagement Contest with Leaderboards",
    "Custom Company Brand Guidelines & Templates",
    "Weekly Progress Tracking & Analytics",
    "Employee Recognition & Rewards System",
    "Dedicated Program Manager & Support",
    "4-Week Intensive Program Structure",
    "Post-Program Resources & Continued Support",
  ]

  return (
    <section id="service-focus" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-80 z-0"></div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Our Services
            </span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Executive Service Column */}
            <div
              ref={ref}
              className="bg-gray-900 p-8 rounded-xl border border-gray-800 shadow-xl"
              style={{
                transform: isInView ? "none" : "translateY(50px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
              }}
            >
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2 text-blue-400">For Executives</h3>
                <h4 className="text-2xl font-bold mb-4 text-white">
                  Our Executive Done-For-You Service
                </h4>
                <h5 className="text-xl font-semibold mb-4 text-blue-300">
                  Quiltmind Executive Presence Accelerator
                </h5>
                <p className="text-gray-300 mb-6">
                  A comprehensive, white-glove service designed for busy executives. We manage every aspect of building and
                  maintaining your powerful personal brand on LinkedIn and X.
                </p>
              </div>

              <h6 className="text-lg font-bold mb-4 text-center">Includes:</h6>
              <div className="space-y-3">
                {executiveFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3"
                    style={{
                      transitionDelay: `${index * 0.1 + 0.2}s`,
                    }}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <Check className="h-5 w-5 text-blue-500" />
                    </div>
                    <p className="text-gray-300">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quilt School Column */}
            <div
              className="bg-gray-900 p-8 rounded-xl border border-gray-800 shadow-xl"
              style={{
                transform: isInView ? "none" : "translateY(50px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
              }}
            >
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2 text-green-400">For Teams</h3>
                <h4 className="text-2xl font-bold mb-4 text-white">
                  Training & Empowerment
                </h4>
                <h5 className="text-xl font-semibold mb-4 text-green-300">
                  Quilt School: LinkedIn Bootcamp & Contest
                </h5>
                <p className="text-gray-300 mb-6">
                  A dynamic, 4-week program designed to transform your employees into powerful brand advocates. 
                  Through gamified training and friendly competition, your team builds authentic LinkedIn presence 
                  while amplifying your company's reach and influence.
                </p>
              </div>

              <h6 className="text-lg font-bold mb-4 text-center">Includes:</h6>
              <div className="space-y-3">
                {quiltSchoolFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3"
                    style={{
                      transitionDelay: `${index * 0.1 + 0.4}s`,
                    }}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="text-gray-300">{feature}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <a
                  href="/bootcamp"
                  className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg shadow-green-700/50"
                >
                  Learn More About Quilt School
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
