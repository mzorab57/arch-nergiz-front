import { Heart, Target, Eye, Award, Users, Sparkles } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';

export default function About() {
  return (
    <div className="min-h-screen">
      <section className="relative py-[27rem] bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1909791/pexels-photo-1909791.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-40"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="fade-down" data-aos-duration="1000">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              About Us
            </h1>
          </div>
          <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            <p className="text-xl sm:text-2xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
              Passion for design, commitment to excellence
            </p>
          </div>
        </div>
      </section>

{/* about */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right" data-aos-duration="1000">
              <AnimatedText
                text="Who We Are"
                className="text-4xl sm:text-5xl font-bold text-gray-100 mb-6"
              />
              <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                At Nergiz Khalida, we provide complete interior design services with full attention
                to every detail. From concept to completion, we cover all types of design projects –
                whether residential, commercial, or custom spaces.
              </p>
              <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                Our team ensures that every stage, from planning and material selection to execution
                and finishing, is carried out with creativity, precision, and care.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                We believe that great design is not only about aesthetics, but also about functionality
                and harmony. With a passion for innovation and detail, we bring your vision to life –
                beautifully and completely.
              </p>
            </div>

            <div data-aos="fade-left" data-aos-duration="1000" className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-64 rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Design process"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="h-48 rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Interior design"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="h-48 rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Luxury design"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="h-64 rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src="https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Modern interior"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* ouur cor value */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedText
              text="Our Core Values"
              className="text-4xl sm:text-5xl font-bold text-gray-100 mb-4"
            />
            <p data-aos="fade-up" data-aos-delay="200" className="text-xl text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Passion',
                description: 'We pour our heart and soul into every project, treating each space as if it were our own',
                color: 'from-red-600 to-pink-600'
              },
              {
                icon: Target,
                title: 'Precision',
                description: 'Meticulous attention to detail ensures flawless execution from start to finish',
                color: 'from-blue-600 to-cyan-600'
              },
              {
                icon: Sparkles,
                title: 'Innovation',
                description: 'We embrace creativity and stay ahead of design trends to deliver unique solutions',
                color: 'from-amber-600 to-yellow-600'
              }
            ].map((value, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className={`group  hover:bg-gradient-to-br ${value.color}/50 border border-gray-400 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-100 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* our mision */}
      <section className="py-24 bg-black/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedText
              text="Our Mission & Vision"
              className="text-4xl sm:text-5xl font-bold text-gray-100 mb-4"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div data-aos="fade-right" data-aos-duration="1000" className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 text-white shadow-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                To transform spaces into extraordinary environments that inspire, comfort, and reflect
                the unique personality of each client. We are committed to delivering exceptional
                design solutions that exceed expectations through creativity, craftsmanship, and
                unwavering dedication to quality.
              </p>
            </div>

            <div data-aos="fade-left" data-aos-duration="1000" className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-3xl p-10 text-white shadow-2xl">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
              <p className="text-amber-50 text-lg leading-relaxed">
                To be recognized as the leading interior design firm that sets the standard for
                innovation, quality, and client satisfaction. We envision a future where every space
                we touch becomes a masterpiece that stands the test of time and continues to bring
                joy to those who experience it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black/90 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 data-aos="fade-up" className="text-4xl sm:text-5xl font-bold mb-6">
              Why Choose Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Proven Excellence',
                description: 'Years of experience delivering outstanding results'
              },
              {
                icon: Users,
                title: 'Client-Focused',
                description: 'Your satisfaction is our top priority in every project'
              },
              {
                icon: Sparkles,
                title: 'Complete Service',
                description: 'End-to-end solutions from concept to completion'
              }
            ].map((reason, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <reason.icon className="w-12 h-12 text-amber-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                <p className="text-gray-400 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="zoom-in" data-aos-duration="1000">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-100 mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-400 mb-10">
              Let's collaborate to create something beautiful together
            </p>
            <a
              href="/contact"
              className="inline-block px-10 py-5 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-full font-semibold hover:from-amber-700 hover:to-amber-800 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 text-lg"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
