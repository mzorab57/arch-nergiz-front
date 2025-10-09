import { useEffect, useMemo, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';
import usePortfolioStore from '../store/portfolio';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedModalImage, setSelectedModalImage] = useState(0);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://nergizkhalid.com/api-nergiz';
  const { items, loading, error, filter, setFilter, fetchAll } = usePortfolioStore();

  useEffect(() => {
    if (!items || items.length === 0) {
      fetchAll();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const categories = useMemo(() => {
    const base = ['All'];
    const cats = Array.from(new Set(items.map((p) => p.category_name).filter(Boolean)));
    return [...base, ...cats];
  }, [items]);

  const projects = useMemo(() => {
    // Map backend schema to UI shape
    return items.map((p) => {
      const primaryImage = Array.isArray(p.images) ? (p.images.find((img) => img.is_primary) || p.images[0]) : null;
      return {
        id: p.id,
        title: p.name,
        category: p.category_name || p.type || 'Unknown',
        image: primaryImage ? primaryImage.image : 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
        images: Array.isArray(p.images) ? p.images.map((img) => img.image) : [],
        description: p.description || '',
      };
    });
  }, [items]);

  const filteredProjects = useMemo(() => {
    if (!filter || filter.category === 'All') return projects;
    return projects.filter((project) => project.category === filter.category);
  }, [projects, filter]);

  return (
    <div className="min-h-screen">
      <section className="relative py-[27rem]  overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920')] h-screen bg-cover bg-center opacity-50"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="fade-down" data-aos-duration="1000">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              Our Portfolio
            </h1>
          </div>
          <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            <p className="text-xl sm:text-2xl text-amber-400 max-w-3xl mx-auto leading-relaxed">
              Explore our completed projects and see the quality of our work
            </p>
          </div>
        </div>
        
      </section>

      <section className="py-24 bg-black/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <AnimatedText
              text="Our Work"
              className="text-4xl sm:text-5xl font-bold text-gray-100 mb-8"
            />

            <div data-aos="fade-up" data-aos-delay="200" className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-6  py-3 rounded-full font-semibold transition-all duration-300 ${
                    (filter?.category ?? 'All') === category
                      ? 'bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {loading && (
              <p className="mt-6 text-gray-500" data-aos="fade-up">Loading portfolio...</p>
            )}
            {error && (
              <p className="mt-6 text-red-600" data-aos="fade-up">{error}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className="group relative border border-gray-500 overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() => { setSelectedProject(idx); setSelectedModalImage(0); }}
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-200">
                  <img
                    src={project.image && `${API_BASE_URL}/${project.image}`}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-amber-400 text-sm font-semibold mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-white text-2xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 text-sm">
                    {project.description}
                  </p>
                </div>

                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700">
                    {project.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => { setSelectedProject(null); setSelectedModalImage(0); }}
        >
          <button
            onClick={() => { setSelectedProject(null); setSelectedModalImage(0); }}
            className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Prev/Next controls */}
          <button
            onClick={(e) => { e.stopPropagation(); setSelectedModalImage((i) => i > 0 ? i - 1 : ((filteredProjects[selectedProject]?.images?.length || 1) - 1)); }}
            className="absolute left-4 md:left-8 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setSelectedModalImage((i) => ((i + 1) % (filteredProjects[selectedProject]?.images?.length || 1))); }}
            className="absolute right-4 md:right-8 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={
                (filteredProjects[selectedProject]?.images?.[selectedModalImage] && `${API_BASE_URL}/${filteredProjects[selectedProject]?.images?.[selectedModalImage]}`)
                || (filteredProjects[selectedProject]?.image && `${API_BASE_URL}/${filteredProjects[selectedProject]?.image}`)
              }
              alt={filteredProjects[selectedProject]?.title}
              className="w-full h-auto rounded-lg shadow-2xl"
            />

            {/* Thumbnails */}
            {filteredProjects[selectedProject]?.images?.length > 1 && (
              <div className="mt-4 flex items-center justify-center gap-3 flex-wrap">
                {filteredProjects[selectedProject].images.map((imgSrc, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedModalImage(i)}
                    className={`w-20 h-16 overflow-hidden rounded-md border ${i === selectedModalImage ? 'border-amber-500 ring-2 ring-amber-500' : 'border-white/20 hover:border-white/40'} transition-all`}
                    title={`Image ${i + 1}`}
                  >
                    <img
                      src={`${API_BASE_URL}/${imgSrc}`}
                      alt={`thumb-${i}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            <div className="text-center mt-6">
              <h3 className="text-white text-2xl font-bold mb-2">
                {filteredProjects[selectedProject]?.title}
              </h3>
              <p className="text-gray-300">
                {filteredProjects[selectedProject]?.description}
              </p>
            </div>
          </div>
        </div>
      )}

      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="zoom-in" data-aos-duration="1000">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-100 mb-6">
              Let's Create Something Beautiful Together
            </h2>
            <p className="text-xl text-gray-400 mb-10">
              Ready to start your own project? Get in touch with us today
            </p>
            <a
              href="/contact"
              className="inline-block px-10 py-5 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-full font-semibold hover:from-amber-700 hover:to-amber-800 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 text-lg"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
