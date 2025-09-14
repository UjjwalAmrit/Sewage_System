"use client"

import { useState, useEffect } from "react"
import { FaUsers, FaAward, FaCog, FaLeaf } from "react-icons/fa"
import { getAboutContent } from "../services/api"

const AboutUs = () => {
  const [aboutData, setAboutData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const result = await getAboutContent()
        setAboutData(result?.data || result)
      } catch (error) {
        console.error("Error fetching about data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchAboutData()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-700 to-blue-500">
        <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-white border-opacity-70"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen font-sans text-gray-900">
      {/* Hero Section */}
      <section
        className="relative text-white py-24 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('./about-us.jpg')" }} // ✅ path fixed
      >
        {/* Dark overlay so text is visible */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 drop-shadow-lg">
            About Us
          </h1>
          <p className="text-xl md:text-2xl font-light">
            {aboutData?.company?.name}
          </p>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Established in {aboutData?.company?.established},{" "}
              <span className="font-semibold text-blue-700">{aboutData?.company?.name}</span>{" "}
              has been at the forefront of wastewater treatment innovation. We have consistently
              delivered cutting-edge solutions that meet the evolving needs of our clients while
              protecting the environment.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <div className="p-6 rounded-xl bg-blue-50 shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
                <div className="text-3xl font-bold text-blue-700">
                  {aboutData?.team?.engineers}
                </div>
                <p className="text-gray-600">Engineers</p>
              </div>
              <div className="p-6 rounded-xl bg-blue-50 shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
                <div className="text-3xl font-bold text-blue-700">
                  {aboutData?.team?.technicians}
                </div>
                <p className="text-gray-600">Technicians</p>
              </div>
              <div className="p-6 rounded-xl bg-blue-50 shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
                <div className="text-3xl font-bold text-blue-700">
                  {aboutData?.team?.supportStaff}
                </div>
                <p className="text-gray-600">Support Staff</p>
              </div>
            </div>
          </div>

          {/* Facility Image Section */}
          <div className="relative group">
            <img
              src="./water-treatment.jpg" // ✅ path fixed
              alt="Water Treatment Facility"
              className="w-full h-80 object-cover rounded-2xl shadow-xl transform group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 rounded-2xl bg-blue-900/20 group-hover:bg-blue-900/30 transition"></div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white p-10 rounded-xl shadow-lg border-l-4 border-green-500 hover:shadow-2xl transition transform hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <FaLeaf className="text-3xl text-green-500 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">{aboutData?.company?.mission}</p>
          </div>
          <div className="bg-white p-10 rounded-xl shadow-lg border-l-4 border-blue-500 hover:shadow-2xl transition transform hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <FaAward className="text-3xl text-blue-500 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">{aboutData?.company?.vision}</p>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-6">Our Expertise</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Decades of experience and continuous innovation in wastewater treatment solutions
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aboutData?.expertise?.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <div className="flex justify-center mb-4">
                  {index === 0 && <FaUsers className="text-4xl text-blue-600" />}
                  {index === 1 && <FaCog className="text-4xl text-green-600" />}
                  {index === 2 && <FaAward className="text-4xl text-yellow-500" />}
                  {index === 3 && <FaLeaf className="text-4xl text-teal-500" />}
                  {index === 4 && <FaUsers className="text-4xl text-orange-500" />}
                </div>
                <p className="text-gray-800 font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
