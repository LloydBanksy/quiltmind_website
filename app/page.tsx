import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import ProblemSection from "@/components/problem-section"
import SolutionSection from "@/components/solution-section"
import HowItWorks from "@/components/how-it-works"
import Benefits from "@/components/benefits"
import SocialProof from "@/components/social-proof"
import ServiceFocus from "@/components/service-focus"
import FounderSection from "@/components/founder-section"
import CallToAction from "@/components/call-to-action"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden">
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <Benefits />
      <SocialProof />
      <ServiceFocus />
      <FounderSection />
      <CallToAction />
      <FAQ />
      <Footer />
    </main>
  )
}
