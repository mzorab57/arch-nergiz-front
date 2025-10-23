import React from 'react'
import { Link } from 'react-router-dom'

const ServicesTitle = () => {
  const services = [
    "Architectural design",
    "Interior design",
    "Author's support",
    "Project management",
    "Individual design of furniture and interior elements",
    "Final decoration"
  ]

  return (
    <section className="relative  flex items-center justify-center py-20 bg-yellow-50">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Left side - Services List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative w-full " >
          <div>
            {/* Title */}
            <h1 className="absolute -top-16 left-0 w-full text-4xl md:text-7xl font-bold text-gray-800 mb-12 tracking-wide opacity-5">
              SERVICES 
            </h1>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 tracking-wide">
              SERVICES OFFERED
            </h1>
            
            {/* Services List */}
            <div className="space-y-4 mb-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="text-lg md:text-xl text-gray-700 font-light tracking-wide"
                >
                  {service}
                </div>
              ))}
            </div>

            {/* Visit Services Button */}
            <Link 
            onClick={()=> window.scrollTo({top: 0})}
              to="/services"
              className="bg-transparent border border-black text-black px-8 py-2 text-lg font-light hover:bg-black hover:text-white transition-all duration-300"
            >
              Visit Our Services
            </Link>
          </div>
          
          
        </div>
      </div>
    </section>
  )
}

export default ServicesTitle