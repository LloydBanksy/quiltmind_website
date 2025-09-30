"use client"

import { useState, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import ConsultationModal from "./consultation-modal"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false)
    setServicesDropdownOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  const handleServiceClick = (href?: string) => {
    if (href) {
      window.location.href = href
    } else {
      scrollToSection("service-focus")
    }
    setServicesDropdownOpen(false)
    setIsOpen(false)
  }

  const navItems = [
    { name: "Process", section: "how-it-works" },
    { name: "Benefits", section: "benefits" },
    { name: "Results", section: "social-proof" },
    { name: "About", section: "founder" },
    { name: "FAQ", section: "faq" },
  ]

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "bg-black/90 backdrop-blur-md py-3 shadow-lg shadow-blue-900/10" : "bg-transparent py-5",
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center pl-4">
              <a href="/" className="text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 hover:opacity-80 transition-opacity">
                quiltmind
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-8 justify-center mx-auto">
              {navItems.map((item) => (
                <button
                  key={item.section}
                  onClick={() => scrollToSection(item.section)}
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                >
                  {item.name}
                </button>
              ))}
              
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm flex items-center gap-1"
                >
                  Services
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {servicesDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-gray-900 border border-gray-700 rounded-lg shadow-lg z-50">
                    <div className="py-2">
                      <button
                        onClick={() => handleServiceClick()}
                        className="w-full text-left px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-blue-400 transition-colors text-sm"
                      >
                        Quiltmind Executive
                      </button>
                      <button
                        onClick={() => handleServiceClick("/quiltschool")}
                        className="w-full text-left px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-blue-400 transition-colors text-sm flex items-center justify-between"
                      >
                        <span>Quiltschool</span>
                        <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                          NEW
                        </span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <a
              href="/analysis"
              className="hidden lg:block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-all mr-4"
            >
              Book Call
            </a>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden mt-4 py-4 bg-black/95 backdrop-blur-md rounded-lg shadow-lg">
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <button
                    key={item.section}
                    onClick={() => scrollToSection(item.section)}
                    className="text-gray-300 hover:text-blue-400 transition-colors px-4 py-2 text-left"
                  >
                    {item.name}
                  </button>
                ))}
                
                {/* Mobile Services */}
                <div className="px-4 py-2">
                  <div className="text-gray-300 text-sm font-medium mb-2">Services</div>
                  <div className="ml-4 space-y-2">
                    <button
                      onClick={() => handleServiceClick()}
                      className="block text-gray-300 hover:text-blue-400 transition-colors text-sm"
                    >
                      Quiltmind Executive
                    </button>
                    <button
                      onClick={() => handleServiceClick("/quiltschool")}
                      className="block text-gray-300 hover:text-blue-400 transition-colors text-sm flex items-center gap-2"
                    >
                      <span>Quiltschool</span>
                      <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                        NEW
                      </span>
                    </button>
                  </div>
                </div>
                
                <a
                  href="/analysis"
                  onClick={() => setIsOpen(false)}
                  className="bg-blue-500 hover:bg-blue-600 text-white mx-4 py-2 rounded-full text-sm font-medium transition-all block text-center"
                >
                  Book Discovery Call
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      <ConsultationModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  )
}
