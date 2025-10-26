import { Heart, Target, Eye, Award, Users, Sparkles } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';
import AboutNergiz from '../components/AboutNergiz';

export default function About() {
  return (
    <div>
      <section className="relative hidden lg:block py-[30rem]  overflow-hidden ">
        <div   className="absolute aspect-auto lg:aspect-[5/4] inset-0 bg-[url('/images/aboutabg.JPG')] bg-cover bg-center  opacity-40"></div>
      </section>
      <section className="relative overflow-hidden ">
        <div className=" aspect-square lg:hidden lg:aspect-[5.5/3] inset-0 bg-[url('/images/aboutabg.JPG')] bg-cover bg-center  opacity-40"></div>
      </section>

{/* about */}
      <AboutNergiz />

{/* ouur cor value */}
      <section className="py-24 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedText
              text="Our Core Values"
              className="text-4xl  sm:text-5xl font-light text-gray-100 mb-4"
            />
            <p data-aos="fade-up" data-aos-delay="200" className="text-xl text-gray-400 max-w-2xl mx-auto font-light ">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Passion',
                description: 'We pour our heart and soul into every project, treating each space as if it were our own',
                color: '',
                colorIcon: ''
              },
              {
                icon: Target,
                title: 'Precision',
                description: 'Meticulous attention to detail ensures flawless execution from start to finish',
                color: '',
                colorIcon: ''
              },
              {
                icon: Sparkles,
                title: 'Innovation',
                description: 'We embrace creativity and stay ahead of design trends to deliver unique solutions',
                color: '',
                colorIcon: ''
              }
            ].map((value, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className={`group  bg-white/5 hover:bg-white/10 border border-gray-700 rounded p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${value.colorIcon} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  <value.icon className="w-8 h-8 text-white font-light" />
                </div>
                <h3 className="text-2xl  text-gray-100 mb-4 font-light">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed font-light">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* our mision */}
      <section className="py-24 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
          <div className="text-center font-light mb-16">
            <AnimatedText
              text="Our Mission & Vision"
              className="text-4xl sm:text-5xl  text-gray-100 mb-4 font-light"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 overflow-hidden">
            <div data-aos="fade-right" data-aos-duration="1000" className=" rounded px-1 text-center text-white ">
              <div className="w-16 h-16  rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white hidden lg:block" />
              </div>
              <h3 className="text-3xl font-light mb-6">Our Mission</h3>
              <p className="text-gray-300 text-lg leading-relaxed font-light">
                To transform spaces into extraordinary environments that inspire, comfort, and reflect
                the unique personality of each client. We are committed to delivering exceptional
                design solutions that exceed expectations through creativity, craftsmanship, and
                unwavering dedication to quality.
              </p>
            </div>

            <div data-aos="fade-left" data-aos-duration="1000" className=" rounded px-1 text-center text-white ">
              <div className="w-16 h-16  backdrop-blur-sm rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white hidden lg:block" />
              </div>
              <h3 className="text-3xl font-light mb-6">Our Vision</h3>
              <p className="text-amber-50 text-lg leading-relaxed font-light">
                To be recognized as the leading interior design firm that sets the standard for
                innovation, quality, and client satisfaction. We envision a future where every space
                we touch becomes a masterpiece that stands the test of time and continues to bring
                joy to those who experience it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24  text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 data-aos="fade-up" className="text-4xl sm:text-5xl font-light mb-6">
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
                <reason.icon className="w-12 h-12 text-gray-400 mb-4" />
                <h3 className="text-xl font-light mb-3">{reason.title}</h3>
                <p className="text-gray-400 leading-relaxed font-light">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

  
    </div>
  );
}
