import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const OurPhilosophy = () => {
  return (
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1909791/pexels-photo-1909791.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right" data-aos-duration="1000">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Our Philosophy
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                At Nergiz Khalida, we believe that great design is not only about aesthetics,
                but also about functionality and harmony.
              </p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                With a passion for innovation and detail, we ensure that every stage—from planning
                and material selection to execution and finishing—is carried out with creativity,
                precision, and care.
              </p>
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                to="/about"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-amber-600 hover:bg-amber-700 rounded-full font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div data-aos="fade-left" data-aos-duration="1000" className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 rounded-2xl bg-gradient-to-br from-amber-600/20 to-amber-800/20 backdrop-blur-sm border border-amber-500/20 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Interior design"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="h-64 rounded-2xl bg-gradient-to-br from-amber-600/20 to-amber-800/20 backdrop-blur-sm border border-amber-500/20 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Interior design"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="h-64 rounded-2xl bg-gradient-to-br from-amber-600/20 to-amber-800/20 backdrop-blur-sm border border-amber-500/20 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Interior design"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="h-48 rounded-2xl bg-gradient-to-br from-amber-600/20 to-amber-800/20 backdrop-blur-sm border border-amber-500/20 overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Interior design"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default OurPhilosophy