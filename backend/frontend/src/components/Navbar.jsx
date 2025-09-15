"use client"

import { useState, useEffect } from "react"
import { FaBars, FaTimes, FaWater } from "react-icons/fa"
import { Link } from "react-router-dom"


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  // Detect scroll for sticky effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 w-full z-50 transition-all duration-300 
        ${scrolled
          ? "bg-gradient-to-r from-purple-900/70 via-indigo-900/60 to-purple-800/70 backdrop-blur-lg border-b border-white/20 shadow-md"
          : "bg-transparent backdrop-blur-sm"} 
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <FaWater className="text-2xl text-purple-300 drop-shadow" />
            <span className="text-xl font-bold tracking-wide text-white">Aabhar</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {["Home", "About Us", "Projects & Services", "Contact Us"].map((item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="relative text-sm font-medium text-white/80 hover:text-purple-200 transition-colors group"
                >
                  {item}
                  {/* Underline animation */}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-purple-300 hover:text-white hover:bg-purple-700/40 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-purple-900/90 via-indigo-900/85 to-purple-800/90 backdrop-blur-lg border-t border-white/20">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {["Home", "About Us", "Projects & Services", "Contact Us"].map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="block px-3 py-2 rounded-md text-base font-medium text-white/80 hover:bg-purple-700/40 hover:text-purple-200 transition"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
