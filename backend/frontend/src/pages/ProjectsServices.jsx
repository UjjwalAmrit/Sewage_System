"use client"

import { useState, useEffect } from "react"
import ProjectCard from "../components/ProjectCard"
import { getProjectsServices } from "../services/api"

const ProjectsServices = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("services")

  // For see more toggles
  const [expanded, setExpanded] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getProjectsServices()
        setData(result)
      } catch (error) {
        console.error("Error fetching projects/services data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  // Merge old + new services
  const services = [
    // New service 1
    {
      id: 101,
      title: "High-Efficiency Aeration System",
      image: "/aeration.jpg", // save as aeration.jpg
      description:
        "Compact aeration engineered for powerful airflow with drastic energy savings. Reliable, quiet, and maintenance-free for demanding industries.",
      features: [
        "Unmatched performance: up to 80,000 RPM",
        "Over 50% energy savings",
        "17,000+ hours of continuous operation",
      ],
      more: `
Model: A24 4kW 40kPa HP → 300 m³/h | 4kW | 71 dB | 11.2 kg
Model: A24 4kW 30kPa HF → 420 m³/h | 4kW | 72 dB | 11.8 kg
Model: A24 7.5kW 40kPa HP → 690 m³/h | 7.5kW | 74 dB | 14.8 kg
Model: A24 7.5kW 30kPa HP → 810 m³/h | 7.5kW | 74 dB | 14.8 kg
      `,
    },
    // New service 2
    {
      id: 102,
      title: "Aerofix Bioreactor Technology",
      image: "/aerofix.jpg", // save as aerofix.jpg
      description:
        "Next-gen fixed-film media for superior wastewater treatment. Retrofit-ready with >95% BOD removal efficiency.",
      features: [
        "Plug-and-play installation",
        "Supports aerobic + anaerobic microbes",
        "Reduced sludge output",
        "Durable (15+ years lifespan)",
      ],
      more: `
Material: Braided polymer fibers | Lifespan: 15+ years
Surface area: High-density fiber structure
BOD Removal: >95% | Nitrogen Removal: >90% | Phosphorus Removal: >80%
Applications: STPs, ETPs, rivers, lakes, industrial sites
      `,
    },
    // New service 3
    {
      id: 103,
      title: "Advanced STP Solutions",
      image: "/stp-advanced.jpg", // save as stp-advanced.jpg
      description:
        "Compact, efficient, and eco-friendly sewage treatment system delivering odor-free, reusable water at reduced costs.",
      features: [
        "Removes up to 98% contaminants",
        "40% lower energy use",
        "Plug & Play modular installation",
        "Low maintenance automation",
        "Eco-friendly reusable water",
      ],
    },
    // Existing services (STP, ETP, ATP)
    {
      id: 1,
      title: "Sewage Treatment Plant (STP)",
      image: "/STP.jpg",
      description:
        "Reliable sewage treatment plants delivering clean, eco-friendly discharge water for communities and industries.",
      features: ["Up to 95% contaminant removal", "Compact design", "Automated operation"],
    },
    {
      id: 2,
      title: "Effluent Treatment Plant (ETP)",
      image: "/ETP.jpg",
      description:
        "Custom effluent treatment plants designed for industrial wastewater management and regulatory compliance.",
      features: ["Handles complex effluents", "Reduces chemical load", "Cost-effective operations"],
    },
    {
      id: 3,
      title: "Advanced Treatment Process (ATP)",
      image: "/ATP.jpg",
      description:
        "Cutting-edge advanced treatment processes for industries requiring ultra-pure water and high compliance.",
      features: ["High purification levels", "Meets strict standards", "Energy-efficient designs"],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-20"
        style={{ backgroundImage: "url('/projects.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
            Projects & Services
          </h1>
          <p className="text-xl md:text-2xl text-white drop-shadow-lg">
            Comprehensive wastewater treatment solutions and successful project implementations
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab("services")}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === "services"
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Our Services
            </button>
            <button
              onClick={() => setActiveTab("projects")}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === "projects"
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Completed Projects
            </button>
          </div>
        </div>
      </section>

      {/* Services Tab */}
      {activeTab === "services" && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Complete wastewater treatment solutions tailored to your specific needs
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                >
                  <div className="w-full h-40">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 text-center">{service.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, index) => (
                          <li key={index} className="text-gray-600 text-sm flex items-center">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {service.more && (
                      <div className="mt-4">
                        <button
                          onClick={() =>
                            setExpanded((prev) => ({ ...prev, [service.id]: !prev[service.id] }))
                          }
                          className="text-blue-600 hover:underline text-sm"
                        >
                          {expanded[service.id] ? "See Less" : "See More"}
                        </button>
                        {expanded[service.id] && (
                          <pre className="mt-2 text-xs text-gray-700 whitespace-pre-wrap bg-gray-100 p-2 rounded">
                            {service.more}
                          </pre>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Projects Tab */}
      {activeTab === "projects" && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Completed Projects</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Successful implementations across various industries and scales
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data?.projects?.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default ProjectsServices
