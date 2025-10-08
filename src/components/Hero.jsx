import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight} from 'lucide-react';

const Hero = () => {
  return (
   <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-800">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-40"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div data-aos="fade-down" data-aos-duration="1000">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              Nergiz Khalida
            </h1>
          </div>

          <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            <p className="text-xl sm:text-2xl lg:text-3xl text-amber-400 mb-8 font-light">
              Interior Design Excellence
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            <p className="text-sm  sm:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Complete interior design services with full attention to every detail.
              From concept to completion, we bring your vision to life beautifully and professionally.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000" className="flex  gap-4 justify-center">
            <Link
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              to="/portfolio"
              className="group whitespace-nowrap px-4 lg:px-8 lg:py-3 py-2 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-full font-semibold hover:from-amber-700 hover:to-amber-800 transition-all duration-300 flex items-center justify-center space-x-2 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <span className='text-sm sm:text-lg lg:text-xl'>View Our Work</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              to="/contact"
              className="px-4 lg:px-8 whitespace-nowrap text-sm sm:text-lg lg:text-xl lg:py-3 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border-2 border-white/30 hover:border-white/50 hover:scale-105"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div> */}
      </section>
  )
}

export default Hero