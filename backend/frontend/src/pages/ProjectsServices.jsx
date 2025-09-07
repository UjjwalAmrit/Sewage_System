"use client"

import { useState, useEffect } from "react"
import { FaWater, FaIndustry, FaRecycle } from "react-icons/fa"
import ProjectCard from "../components/ProjectCard"
import { getProjectsServices } from "../services/api"

const ProjectsServices = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("services")

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

 const getServiceImage = (id) => {
  let src = "/STP.jpg"
  if (id === 2) src = "/ETP.jpg"
  if (id === 3) src = "/ATP.jpg"

  return (
    <div className="w-full h-40">
      <img src={src} alt="Service" className="w-full h-full object-cover rounded-t-lg" />
    </div>
  )
}



  return (
    <div className="min-h-screen">
      {/* Hero Section */}
   <section
  className="relative bg-cover bg-center py-20"
  style={{ backgroundImage: "url('/projects.jpg')" }}
>
  <div className="absolute inset-0 bg-black bg-opacity-40"></div> {/* overlay */}
  
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
        Projects & Services
      </h1>
      <p className="text-xl md:text-2xl text-white drop-shadow-lg">
        Comprehensive wastewater treatment solutions and successful project implementations
      </p>
    </div>
  </div>
</section>




      {/* Tab Navigation */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab("services")}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  activeTab === "services" ? "bg-blue-600 text-white" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Our Services
              </button>
              <button
                onClick={() => setActiveTab("projects")}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  activeTab === "projects" ? "bg-blue-600 text-white" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Completed Projects
              </button>
            </div>
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
              {data?.services?.map((service) => (
                <div key={service.id} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
                  <div key={service.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
  {getServiceImage(service.id)}

  <div className="p-8">
    <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{service.title}</h3>
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
  </div>
</div>


                  <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{service.title}</h3>
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
