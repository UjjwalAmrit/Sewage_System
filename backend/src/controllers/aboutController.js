const getAboutContent = async (req, res) => {
  try {
    const aboutContent = {
      company: {
        name: "Wastewater Solutions Ltd.",
        established: "2010",
        mission:
          "To provide innovative and sustainable wastewater treatment solutions that protect the environment and support industrial growth.",
        vision: "To be the leading provider of advanced wastewater treatment technologies globally.",
      },
      expertise: [
        "15+ years of industry experience",
        "500+ successful installations",
        "24/7 technical support",
        "ISO 9001:2015 certified",
        "Environmental compliance guaranteed",
      ],
      team: {
        engineers: 25,
        technicians: 40,
        supportStaff: 15,
      },
    }

    res.json({
      success: true,
      data: aboutContent,
    })
  } catch (error) {
    console.error("About content error:", error)
    res.status(500).json({
      success: false,
      message: "Server error",
    })
  }
}

module.exports = {
  getAboutContent,
}
