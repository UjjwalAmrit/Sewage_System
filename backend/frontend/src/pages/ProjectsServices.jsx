"use client"

import { useState } from "react"

const Products = () => {
  const [expanded, setExpanded] = useState({})

  const products = [
    {
      id: 101,
      title: "High-Efficiency Aeration System",
      image: "/images/aeration.jpg",
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
    {
      id: 102,
      title: "Screw Press",
      image: "/images/aerofix.jpg",
      description:
        "Next-gen fixed-film media for superior wastewater treatment. Retrofit-ready with >95% BOD removal efficiency.",
      features: [
        "Plug-and-play installation",
        "Supports aerobic & anaerobic microbes",
        "Reduced sludge output",
        "15+ years lifespan",
      ],
      more: `
Material: Braided polymer fibers
BOD Removal: >95%
Nitrogen Removal: >90%
Phosphorus Removal: >80%
Applications: STPs, ETPs, rivers, lakes, industrial wastewater
      `,
    },
    {
      id: 103,
      title: "Advanced STP Solutions",
      image: "/images/stp-advanced.jpg",
      description:
        "Compact, efficient, and eco-friendly sewage treatment systems delivering odor-free, reusable water.",
      features: [
        "Up to 98% contaminant removal",
        "40% lower energy consumption",
        "Modular Plug & Play setup",
        "Low maintenance automation",
      ],
      more: `
Technology: Advanced biological treatment
Capacity Range: 10 KLD – 10 MLD
Automation: Fully automated PLC based
Reuse: Gardening, flushing, industrial reuse
      `,
    },
    {
      id: 1,
      title: "Sewage Treatment Plant (STP)",
      image: "/images/STP.jpg",
      description:
        "Reliable sewage treatment plants delivering clean, eco-friendly discharge water for communities and industries.",
      features: [
        "Up to 95% contaminant removal",
        "Compact footprint",
        "Fully automated operation",
      ],
      more: `
Process: MBBR / SBR / ASP
Compliance: CPCB norms
Applications: Residential, commercial, municipal
      `,
    },
    {
      id: 2,
      title: "Effluent Treatment Plant (ETP)",
      image: "/images/ETP.jpg",
      description:
        "Customized effluent treatment plants for industrial wastewater and regulatory compliance.",
      features: [
        "Handles complex industrial effluents",
        "Reduced chemical usage",
        "Cost-efficient operations",
      ],
      more: `
Industries: Pharma, textile, food, chemicals
Treatment: Physico-chemical + biological
Discharge: ZLD / compliant discharge
      `,
    },
    {
      id: 3,
      title: "Integrated Fixed Film Activated Sludge Media ",
      image: "/images/ETP.jpg",
      description:
        "IFAS (Integrated Fixed Film Activated Sludge) is an advanced biological treatment technology that combines attached growth and suspended growth processes within a single reactor. The media remains fixed inside the tank, allowing stable biofilm formation along with suspended biomass.",
      features: [
        "Media Type: String Type – Fixed",

        "Material: High-grade textile fabric",

        "Specific Surface Area: 3200 m²/m³",

        "Installation: SS 304 cage structure",

        "Long service life with no media loss",

        "Can effectively replace conventional MBBR media",

        "This configuration enables simultaneous nitrification and denitrification, supporting biological nitrogen and phosphorus removal with high process stability.",
      ],
      more: `
      Performance Results in STP Plants:

      BOD reduced to <10 mg/L

      COD reduced to <50 mg/L

      Ammonia reduced to <1 mg/L

      Improved nitrogen removal efficiency

      Reduced sludge generation

      Lower aeration energy compared to MBBR

      This makes IFAS ideal for STP upgradation, retrofitting, CPCB compliance, space-constrained projects, and performance enhancement without additional civil work. 
      `,
    },
    {
      id: 4,
      title: "Membrane Bioreactor (MBR)",
      image: "/images/bioreactor.jpeg",
      description:
        "MBR (Membrane Bioreactor) is an advanced wastewater treatment technology that integrates biological treatment with membrane filtration. It replaces conventional secondary clarifiers and tertiary filtration systems, delivering superior effluent quality suitable for reuse applications.",
      features: [
       "Combines activated sludge process with membrane filtration",

        "Produces crystal-clear, pathogen-free treated water",

        "Compact footprint – ideal for space-restricted sites",

        "Eliminates the need for secondary clarifiers and sand filters",

        "Consistent outlet quality regardless of load variation",
      ],
      more: `
    Typical Outlet Parameters:

    BOD: <5 mg/L

    COD: <30 mg/L

    TSS: <2 mg/L

    Turbidity: <1 NTU

    Applications:

    STP plants for residential, commercial & industrial projects

    Treated water reuse for flushing, gardening & cooling

    CPCB / stringent discharge compliance projects
      `,
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-20"
        style={{ backgroundImage: "url('/images/projects.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Products
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Innovative wastewater treatment technologies engineered for performance,
            sustainability, and long-term reliability
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-52 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-center mb-3">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-center mb-4">
                    {product.description}
                  </p>

                  <h4 className="font-medium mb-2">Key Features</h4>
                  <ul className="space-y-1 mb-3">
                    {product.features.map((feature, index) => (
                      <li
                        key={index}
                        className="text-sm text-gray-600 flex items-center"
                      >
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() =>
                      setExpanded((prev) => ({
                        ...prev,
                        [product.id]: !prev[product.id],
                      }))
                    }
                    className="text-blue-600 text-sm hover:underline"
                  >
                    {expanded[product.id] ? "See Less" : "See More"}
                  </button>

                  {expanded[product.id] && (
                    <pre className="mt-2 text-xs bg-gray-100 p-2 rounded whitespace-pre-wrap">
                      {product.more}
                    </pre>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Electro-Induction Reactor Section — unchanged */}
      {/* (left exactly as you had it) */}
    </div>
  )
}

export default Products
