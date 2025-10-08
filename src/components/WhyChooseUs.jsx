import React from 'react'
import AnimatedText from './AnimatedText'
import { Palette, Lightbulb, Award, Users } from 'lucide-react';

const WhyChooseUs = () => {
  return (
      <section className="py-24 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedText
              text="Why Choose Nergiz Khalida"
              className="text-4xl sm:text-5xl font-bold text-gray-100 mb-4"
            />
            <p data-aos="fade-up" data-aos-delay="200" className="text-xl text-gray-400 max-w-2xl mx-auto">
              We combine creativity, precision, and passion to deliver exceptional interior design solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Palette,
                title: 'Creative Design',
                description: 'Innovative concepts that reflect your unique style and personality',
                delay: 0
              },
              {
                icon: Lightbulb,
                title: 'Smart Solutions',
                description: 'Functional spaces that balance aesthetics with practicality',
                delay: 100
              },
              {
                icon: Award,
                title: 'Quality Excellence',
                description: 'Premium materials and meticulous attention to every detail',
                delay: 200
              },
              {
                icon: Users,
                title: 'Full Service',
                description: 'Complete support from planning to final execution',
                delay: 300
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={feature.delay}
                className="group p-8  bg-white/5  rounded-2xl hover:shadow-2xl transition-all duration-300 border border-gray-800 hover:border-amber-200 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-100 mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default WhyChooseUs