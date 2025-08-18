const getHomeContent = async (req, res) => {
  try {
    const homeContent = {
      hero: {
        title: "Advanced Wastewater Treatment Solutions",
        subtitle: "Leading provider of STP, ETP, and ATP systems for sustainable water management",
        description:
          "We specialize in designing, manufacturing, and installing state-of-the-art wastewater treatment plants that ensure environmental compliance and operational efficiency.",
      },
      services: [
        {
          title: "Sewage Treatment Plants (STP)",
          description: "Complete biological treatment systems for domestic wastewater",
          icon: "water",
        },
        {
          title: "Effluent Treatment Plants (ETP)",
          description: "Industrial wastewater treatment for various industries",
          icon: "factory",
        },
        {
          title: "Advanced Treatment Plants (ATP)",
          description: "Tertiary treatment for water reuse and recycling",
          icon: "recycle",
        },
      ],
      technologies: [
        "Aerofix BioReactor Technology",
        "DiscFlow Optimizer System",
        "Eco Haven Solutions",
        "Advanced Biological Treatment",
      ],
    }

    res.json({
      success: true,
      data: homeContent,
    })
  } catch (error) {
    console.error("Home content error:", error)
    res.status(500).json({
      success: false,
      message: "Server error",
    })
  }
}

module.exports = {
  getHomeContent,
}
