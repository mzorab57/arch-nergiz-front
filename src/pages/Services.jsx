import { Home, Building2, Sofa, Palette, Ruler, Sparkles } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';
import { useEffect } from 'react';
import useServicesStore from '../store/services';

export default function Services() {
  const { items: services, loading, error, fetchAll } = useServicesStore();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://nergizkhalid.com/api-nergiz';

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  const getImageSrc = (img) => {
    if (!img) return '/images/color.png';
    if (img.startsWith('http')) return img;
    return `${API_BASE_URL}/${img}`;
  };

  return (
    <div className="min-h-screen">
      <section className="relative py-[27rem] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/color.png')] bg-cover bg-center opacity-50"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="fade-down" data-aos-duration="1000">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              Our Services
            </h1>
          </div>
          <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            <p className="text-xl sm:text-2xl text-amber-300 max-w-3xl mx-auto leading-relaxed">
              Complete interior design solutions <br/>tailored to your needs
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedText
              text="What We Offer"
              className="text-4xl sm:text-5xl font-bold text-gray-100 mb-4"
            />
            <p data-aos="fade-up" data-aos-delay="200" className="text-xl text-gray-400 max-w-2xl mx-auto">
              From concept to completion, we cover all types of design projects with creativity, precision, and care
            </p>
            {loading && (
              <p className="mt-4 text-gray-400">Loading services...</p>
            )}
            {error && (
              <p className="mt-4 text-red-400">{error}</p>
            )}
          </div>

          {!loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <div
                  key={service.id || idx}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                  className="group bg-white/5 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-700 hover:border-amber-200 hover:-translate-y-2"
                >
                  {/* Image */}
                  <img
                    src={getImageSrc(service.image)}
                    alt={service.name}
                    className="w-full h-32 object-cover rounded-xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg"
                  />

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-100 mb-4">
                    {service.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Optional features if available */}
                  {Array.isArray(service.features) && service.features.length > 0 && (
                    <div className="space-y-2">
                      {service.features.map((feature, featureIdx) => (
                        <div
                          key={featureIdx}
                          className="flex items-center space-x-2 text-gray-400"
                        >
                          <div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 data-aos="fade-up" className="text-4xl sm:text-5xl font-bold text-gray-100 mb-6">
              Our Process
            </h2>
            <p data-aos="fade-up" data-aos-delay="100" className="text-xl text-gray-400 max-w-2xl mx-auto">
              A streamlined approach to bring your vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'Understanding your vision, needs, and budget through detailed discussions'
              },
              {
                step: '02',
                title: 'Design & Planning',
                description: 'Creating concepts, mood boards, and detailed plans tailored to your space'
              },
              {
                step: '03',
                title: 'Material Selection',
                description: 'Choosing premium materials, colors, and finishes that match your style'
              },
              {
                step: '04',
                title: 'Execution',
                description: 'Bringing the design to life with precision and quality craftsmanship'
              }
            ].map((process, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className="relative"
              >
                <div className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="text-6xl font-bold text-amber-200 mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-100 mb-3">
                    {process.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {process.description}
                  </p>
                </div>
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="zoom-in" data-aos-duration="1000">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Let's discuss how we can transform your space into something extraordinary
            </p>
            <a
              href="/contact"
              className="inline-block px-10 py-5 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-full font-semibold hover:from-amber-700 hover:to-amber-800 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 text-lg"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
