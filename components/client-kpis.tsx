"use client"

import { useRef, useState, useEffect } from "react"
import { useInView } from "framer-motion"
import { TrendingUp } from "lucide-react"

interface KPIData {
  metric: string
  before: number
  after: number
  increase: string
}

const kpiData: KPIData[] = [
  {
    metric: "Impressions",
    before: 20771,
    after: 317733,
    increase: "1,429%",
  },
  {
    metric: "Engagements",
    before: 265,
    after: 3795,
    increase: "1,332%",
  },
  {
    metric: "New Followers",
    before: 365,
    after: 3105,
    increase: "751%",
  },
]

function AnimatedNumber({ value, duration = 2000 }: { value: number; duration?: number }) {
  const [displayValue, setDisplayValue] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    const startValue = 0
    const endValue = value

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutQuart)

      setDisplayValue(currentValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, value, duration])

  return <span ref={ref}>{displayValue.toLocaleString()}</span>
}

function KPICard({ data, index }: { data: KPIData; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const maxValue = Math.max(data.before, data.after)
  const beforeHeight = Math.max((data.before / maxValue) * 100, 8) // Minimum 8% height for visibility
  const afterHeight = (data.after / maxValue) * 100

  return (
    <div
      ref={ref}
      className="bg-gray-900 p-4 sm:p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 min-h-[200px] sm:h-[340px] flex flex-col"
    >
      {/* Header - fixed position from top */}
      <div className="mb-6">
        <h3 className="text-lg sm:text-xl font-bold text-center">{data.metric}</h3>
      </div>

      {/* Chart Container - fills remaining space */}
      <div className="flex-1 flex flex-col justify-between">
        {/* Desktop Layout */}
        <div className="hidden sm:flex items-end justify-center gap-12 lg:gap-16 w-full relative flex-1">
          {/* Before Bar */}
          <div className="flex flex-col items-center h-full justify-end relative">
            <div className="relative w-12 lg:w-16 bg-gray-800 rounded-t-lg overflow-hidden h-40 lg:h-48">
              <div
                className="absolute bottom-0 w-full bg-gray-600 rounded-t-lg transition-all duration-1000 ease-out border-2 border-gray-500"
                style={{
                  height: isInView ? `${beforeHeight}%` : "0%",
                  transitionDelay: `${index * 0.2 + 0.5}s`,
                }}
              />
            </div>
            {/* Number positioned just above the gray bar */}
            <div
              className="absolute text-xs lg:text-sm text-gray-400 text-center font-medium transition-all duration-500"
              style={{
                bottom: `calc(${beforeHeight}% + 8px)`, // Position just above the gray bar
                opacity: isInView ? 1 : 0,
                transitionDelay: `${index * 0.2 + 0.8}s`,
              }}
            >
              <AnimatedNumber value={data.before} duration={1500} />
            </div>
          </div>

          {/* After Bar */}
          <div className="flex flex-col items-center h-full justify-end relative">
            <div className="relative w-12 lg:w-16 bg-gray-800 rounded-t-lg overflow-hidden h-40 lg:h-48">
              <div
                className="absolute bottom-0 w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg transition-all duration-1000 ease-out border-2 border-blue-500"
                style={{
                  height: isInView ? `${afterHeight}%` : "0%",
                  transitionDelay: `${index * 0.2 + 0.7}s`,
                }}
              />
            </div>
            {/* Number positioned just above the blue bar */}
            <div
              className="absolute text-xs lg:text-sm text-white text-center font-medium transition-all duration-500 whitespace-nowrap"
              style={{
                top: "4px", // Moved down to be closer to the blue bar
                left: "50%",
                transform: "translateX(-50%)",
                opacity: isInView ? 1 : 0,
                transitionDelay: `${index * 0.2 + 0.9}s`,
              }}
            >
              <AnimatedNumber value={data.after} duration={1500} />
            </div>
          </div>

          {/* Growth Arrow - positioned at mid-point of blue bar */}
          <div
            className="absolute flex items-center gap-1 text-green-400 font-bold transform transition-all duration-500 bg-gray-900/80 backdrop-blur-sm px-3 py-1 rounded-full border border-green-400/20"
            style={{
              opacity: isInView ? 1 : 0,
              transform: `translateX(-50%) ${isInView ? "scale(1)" : "scale(0.5)"}`,
              transitionDelay: `${index * 0.2 + 1}s`,
              bottom: `${afterHeight / 3}%`, // Moved down from mid-point to lower third of blue bar
              left: "50%",
            }}
          >
            <TrendingUp className="w-4 h-4 lg:w-5 lg:h-5" />
            <span className="text-sm lg:text-lg">{data.increase}</span>
          </div>
        </div>

        {/* Bottom labels - fixed at bottom */}
        <div className="hidden sm:flex justify-center gap-12 lg:gap-16 mt-4">
          <div className="text-xs text-gray-400 text-center w-12 lg:w-16">Prior 3 Months</div>
          <div className="text-xs text-gray-300 text-center w-12 lg:w-16">Last 3 Months</div>
        </div>

        {/* Mobile Layout - Always visible */}
        <div className="block sm:hidden space-y-4 w-full">
          <div className="text-center mb-4">
            <div className="text-sm text-gray-400">Prior 3 Months</div>
            <div className="text-2xl font-bold text-gray-300">{data.before.toLocaleString()}</div>
          </div>
          
          <div className="text-center mb-4">
            <div className="flex items-center justify-center gap-2 text-green-400 font-bold bg-gray-800 px-4 py-2 rounded-full mx-auto w-fit">
              <TrendingUp className="w-4 h-4" />
              <span className="text-lg">{data.increase}</span>
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-sm text-gray-400">Last 3 Months</div>
            <div className="text-2xl font-bold text-white">{data.after.toLocaleString()}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ClientKPIs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className="py-8 sm:py-12 bg-black">
      <div className="container mx-auto px-4">
        {/* Header section */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-4">
            <span className="text-blue-200 text-sm font-medium">Real client: 3-month pilot</span>
          </div>
        </div>
        
        {/* Mobile-first animated layout with bar charts */}
        <div ref={ref} className="block md:hidden space-y-6">
          {kpiData.map((data, index) => {
            const maxValue = Math.max(data.before, data.after)
            const beforeHeight = Math.max((data.before / maxValue) * 100, 8)
            const afterHeight = (data.after / maxValue) * 100
            
            return (
              <div 
                key={data.metric} 
                className="bg-gray-900 p-6 rounded-xl border border-gray-800"
                style={{
                  transform: isInView ? "none" : "translateY(30px)",
                  opacity: isInView ? 1 : 0,
                  transition: `all 0.6s ease-out ${index * 0.2}s`,
                }}
              >
                <h3 className="text-xl font-bold text-center text-white mb-6">{data.metric}</h3>
                
                {/* Bar Chart Section */}
                <div className="flex items-end justify-center gap-8 mb-6 h-32">
                  {/* Before Bar */}
                  <div className="flex flex-col items-center">
                    <div className="text-xs text-gray-400 mb-2">Prior</div>
                    <div className="relative w-12 bg-gray-800 rounded-t-lg overflow-hidden h-24">
                      <div
                        className="absolute bottom-0 w-full bg-gray-600 rounded-t-lg transition-all duration-1000 ease-out"
                        style={{
                          height: isInView ? `${beforeHeight}%` : "0%",
                          transitionDelay: `${index * 0.2 + 0.3}s`,
                        }}
                      />
                    </div>
                    <div className="text-xs text-gray-400 mt-2 text-center">
                      <AnimatedNumber value={data.before} duration={1500} />
                    </div>
                  </div>

                  {/* After Bar */}
                  <div className="flex flex-col items-center">
                    <div className="text-xs text-gray-400 mb-2">Last 3 Months</div>
                    <div className="relative w-12 bg-gray-800 rounded-t-lg overflow-hidden h-24">
                      <div
                        className="absolute bottom-0 w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg transition-all duration-1000 ease-out"
                        style={{
                          height: isInView ? `${afterHeight}%` : "0%",
                          transitionDelay: `${index * 0.2 + 0.5}s`,
                        }}
                      />
                    </div>
                    <div className="text-xs text-white mt-2 text-center">
                      <AnimatedNumber value={data.after} duration={1500} />
                    </div>
                  </div>
                </div>
                
                {/* Growth Indicator */}
                <div className="text-center">
                  <div 
                    className="flex items-center justify-center gap-2 text-green-400 font-bold bg-gray-800 px-4 py-2 rounded-full mx-auto w-fit"
                    style={{
                      transform: isInView ? "scale(1)" : "scale(0.8)",
                      transition: `all 0.4s ease-out ${index * 0.2 + 0.7}s`,
                    }}
                  >
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-lg">{data.increase}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Desktop layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-4 sm:gap-8">
          {kpiData.map((data, index) => (
            <KPICard key={data.metric} data={data} index={index} />
          ))}
        </div>

        {/* Footnotes */}
        <div 
          className="text-xs text-gray-500 text-center space-y-1 px-4 mt-8"
          style={{
            transform: isInView ? "none" : "translateY(20px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.6s ease-out 0.8s",
          }}
        >
          <p>* Baseline is 12 week period before quiltmind</p>
          <p>** Compared to 12 weeks into quiltmind campaign</p>
        </div>
      </div>
    </section>
  )
}
