import { useEffect, useState } from 'react';
import { Mail, MapPin, Send, CheckCircle, Phone } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';
import useContactsStore from '../store/contacts';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const { items, fetchAll } = useContactsStore();
  useEffect(() => {
    if (!items || items.length === 0) fetchAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const contact = items && items.length > 0 ? items[0] : null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen">
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/contact.png')] bg-cover bg-center opacity-50"></div>

        <div className="relative translate-y-1/3 h-full z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="fade-down" data-aos-duration="1000">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              Get In Touch
            </h1>
          </div>
          <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            <p className="text-xl sm:text-2xl text-amber-300 max-w-3xl mx-auto leading-relaxed">
              Let's discuss your project and bring your vision to life
            </p>
          </div>
        </div>
      </section>


      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
{/* left section */}
            <div data-aos="fade-right" data-aos-duration="1000">
              <AnimatedText
                text="Let's Start a Conversation"
                className="text-4xl sm:text-5xl font-bold text-gray-100 mb-8"
              />

              <p className="text-lg text-gray-400 mb-12 leading-relaxed">
                Whether you're looking to redesign your home, renovate a commercial space, or need
                expert design consultation, we're here to help. Reach out to us and let's create
                something beautiful together.
              </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-4 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-600 to-amber-700 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-100 mb-2">Email</h3>
                    <a
                      href={contact?.email ? `mailto:${contact.email}` : 'mailto:nergiz.designer@gmail.com'}
                      className="text-amber-600 hover:text-amber-700 transition-colors text-lg break-all"
                    >
                      {contact?.email || 'nergiz.designer@gmail.com'}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-600 to-amber-700 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-100 mb-2">Location</h3>
                    <p className="text-gray-600 text-lg">
                      {contact?.address || (
                        <div className='text-amber-600 hover:text-amber-700'>
                          Erbil, Andaziyaran<br />
                          Villa 60
                        </div>
                      )}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-600 to-amber-700 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-100 mb-2">Phone</h3>
                    <a
                      href={contact?.phone ? `tel:${contact.phone}` : 'tel:+9647501234567'}
                      className="text-amber-600 hover:text-amber-700 transition-colors text-lg break-all"
                    >
                      {contact?.phone || '+964 750 123 4567'}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-black rounded-2xl border border-gray-700">
                <h3 className="text-xl font-bold text-gray-100 mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-400">
                  <p className="flex justify-between">
                    <span className="font-semibold">Saturday - Thursday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-semibold">Friday:</span>
                    <span>Closed</span>
                  </p>
                </div>
              </div>
            </div>


{/* right */}
            <div data-aos="fade-left" data-aos-duration="1000">
              <div className="bg-white/5 rounded-3xl p-8 shadow-2xl border border-gray-700">
                <h2 className="text-3xl font-bold text-gray-100 mb-8">Send Us a Message</h2>

                {submitted ? (
                  <div className="py-16 text-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-100 mb-3">Thank You!</h3>
                    <p className="text-gray-400 text-lg">
                      We've received your message and will get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm  font-semibold text-gray-100 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 bg-white/5 py-3 border border-gray-700 rounded-xl focus:border-amber-600 focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm  font-semibold text-gray-100 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 bg-white/5 py-3 border border-gray-700 rounded-xl focus:border-amber-600 focus:outline-none transition-colors"
                        placeholder="nergiz.designer@gmail.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm  font-semibold text-gray-100 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 bg-white/5 py-3 border border-gray-700 rounded-xl focus:border-amber-600 focus:outline-none transition-colors"
                        placeholder="+964 750 123 4567"
                      />
                    </div>

                    <div>
                      <label htmlFor="projectType" className="block text-sm  font-semibold text-gray-100 mb-2">
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        required
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 text-white bg-white/5 py-3 border border-gray-700 rounded-xl focus:border-amber-600 focus:outline-none transition-colors"
                      >
                        <option value="">Select a project type</option>
                        <option value="residential">Residential Design</option>
                        <option value="commercial">Commercial Design</option>
                        <option value="renovation">Renovation</option>
                        <option value="consultation">Consultation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm  font-semibold text-gray-100 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 bg-white/5 py-3 border border-gray-700 rounded-xl focus:border-amber-600 focus:outline-none transition-colors resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-xl font-semibold hover:from-amber-700 hover:to-amber-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center space-x-2"
                    >
                      <span>Send Message</span>
                      <Send className="w-5 h-5" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

{/* bottom */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 data-aos="fade-up" className="text-4xl sm:text-5xl font-bold mb-6">
              Visit Our Studio
            </h2>
            <p data-aos="fade-up" data-aos-delay="100" className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Come see our portfolio in person and discuss your project over coffee
            </p>

            <div data-aos="zoom-in" data-aos-delay="200" className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 max-w-3xl mx-auto border border-white/10">
              <div className="aspect-video bg-gray-700 rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.289!2d44.009167!3d36.190833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDExJzI3LjAiTiA0NMKwMDAnMzMuMCJF!5e0!3m2!1sen!2siq!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Nergiz Khalida Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
