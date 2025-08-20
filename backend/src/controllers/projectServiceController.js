const getProjectsServices = async (req, res) => {
  try {
    const projectsServices = {
      services: [
        {
          id: 1,
          title: "STP Design & Installation",
          description: "Complete sewage treatment plant solutions for residential and commercial complexes",
          features: ["Biological treatment", "Sludge management", "Automated controls", "Remote monitoring"],
        },
        {
          id: 2,
          title: "ETP Solutions",
          description: "Industrial effluent treatment for textile, pharmaceutical, and chemical industries",
          features: ["Chemical treatment", "Physical separation", "Biological degradation", "Zero liquid discharge"],
        },
        {
          id: 3,
          title: "ATP Systems",
          description: "Advanced treatment for water recycling and reuse applications",
          features: ["Membrane filtration", "UV disinfection", "Reverse osmosis", "Water quality monitoring"],
        },
      ],
      projects: [
        {
          id: 1,
          name: "Textile Industry ETP",
          location: "Mumbai, India",
          capacity: "500 KLD",
          status: "Completed",
        },
        {
          id: 2,
          name: "Residential Complex STP",
          location: "Bangalore, India",
          capacity: "200 KLD",
          status: "Ongoing",
        },
        {
          id: 3,
          name: "Pharmaceutical ETP",
          location: "Hyderabad, India",
          capacity: "1000 KLD",
          status: "Completed",
        },
      ],
    }

    res.json({
      success: true,
      data: projectsServices,
    })
  } catch (error) {
    console.error("Projects/Services content error:", error)
    res.status(500).json({
      success: false,
      message: "Server error",
    })
  }
}

module.exports = {
  getProjectsServices,
}
