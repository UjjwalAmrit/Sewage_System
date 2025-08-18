import { FaWater, FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-purple-900/70 via-purple-800/60 to-purple-900/70 backdrop-blur-xl text-white shadow-lg border-t border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <FaWater className="text-2xl text-purple-300 drop-shadow-md" />
              <span className="text-xl font-bold tracking-wide">WastewaterSolutions</span>
            </div>
            <p className="text-gray-200 mb-4 leading-relaxed">
              Leading provider of advanced wastewater treatment solutions including STP, ETP, and ATP systems. We ensure
              environmental compliance and operational efficiency for all our clients.
            </p>
            <div className="flex space-x-4">
              <FaFacebook className="text-xl text-purple-300 hover:text-purple-200 cursor-pointer transition-colors" />
              <FaTwitter className="text-xl text-purple-300 hover:text-purple-200 cursor-pointer transition-colors" />
              <FaLinkedin className="text-xl text-purple-300 hover:text-purple-200 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-200">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/projects-services" className="text-gray-300 hover:text-white transition-colors">
                  Projects & Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-purple-200">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <FaPhone className="text-purple-300" />
                <span className="text-gray-200">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-purple-300" />
                <span className="text-gray-200">info@wastewatersolutions.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <FaMapMarkerAlt className="text-purple-300 mt-1" />
                <span className="text-gray-200">
                  123 Industrial Area,
                  <br />
                  Mumbai, Maharashtra 400001
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <p className="text-gray-300 text-sm">
            © 2024 WastewaterSolutions. All rights reserved. | Designed for sustainable water management.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
