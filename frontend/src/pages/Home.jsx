"use client"

import { useState, useEffect } from "react"
import { FaWater, FaIndustry, FaRecycle, FaCheckCircle, FaArrowRight } from "react-icons/fa"
import { getHomeContent } from "../services/api"

const Home = () => {
  const [homeData, setHomeData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const data = await getHomeContent()
        setHomeData(data)
      } catch (error) {
        console.error("Error fetching home data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchHomeData()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-purple-600"></div>
      </div>
    )
  }

  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case "water":
        return <FaWater className="text-5xl text-purple-500 drop-shadow-md" />
      case "factory":
        return <FaIndustry className="text-5xl text-purple-400 drop-shadow-md" />
      case "recycle":
        return <FaRecycle className="text-5xl text-purple-600 drop-shadow-md" />
      default:
        return <FaWater className="text-5xl text-purple-500 drop-shadow-md" />
    }
  }

  return (
    <div className="min-h-screen font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
              {homeData?.hero?.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100 font-medium">{homeData?.hero?.subtitle}</p>
            <p className="text-lg mb-10 max-w-3xl mx-auto text-purple-50 leading-relaxed">
              {homeData?.hero?.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/projects-services"
                className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center justify-center shadow-md hover:shadow-lg"
              >
                Our Services <FaArrowRight className="ml-2" />
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors shadow-md hover:shadow-lg"
              >
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive wastewater treatment solutions for residential, commercial, and industrial applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homeData?.services?.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
              >
                <div className="flex justify-center mb-6">{getServiceIcon(service.icon)}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Advanced Technologies</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cutting-edge treatment technologies for optimal performance and efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {homeData?.technologies?.map((tech, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-gray-50 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <FaCheckCircle className="text-purple-500 text-2xl flex-shrink-0" />
                <span className="text-gray-900 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-purple-100">
            Contact us today for a free consultation and custom solution design
          </p>
          <a
            href="/contact"
            className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center shadow-md hover:shadow-lg"
          >
            Contact Us Now <FaArrowRight className="ml-2" />
          </a>
        </div>
      </section>
    </div>
  )
}

export default Home
