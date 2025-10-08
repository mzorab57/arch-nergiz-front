import { Mail, MapPin, Phone, Instagram, Facebook, Linkedin } from 'lucide-react';
import { useEffect } from 'react';
import useContactsStore from '../store/contacts';

export default function Footer() {
  const { items, fetchAll } = useContactsStore();
  useEffect(() => {
    if (!items || items.length === 0) fetchAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const contact = items && items.length > 0 ? items[0] : null;

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div data-aos="fade-up" data-aos-delay="0">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">NK</span>
              </div>
              <span className="text-xl font-bold">Nergiz Khalida</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Complete interior design services with full attention to every detail.
              From concept to completion, we bring your vision to life beautifully.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-lg font-semibold mb-6 text-amber-500">Contact Info</h3>
            <div className="space-y-4">
              <a
                href={contact?.email ? `mailto:${contact.email}` : '#'}
                className="flex items-start space-x-3 text-gray-400 hover:text-amber-500 transition-colors group"
              >
                <Mail className="w-5 h-5 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="break-all">{contact?.email || 'nergiz.designer@gmail.com'}</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>{contact?.address || 'Erbil, Andaziyaran - Villa 60'}</span>
              </div>
              <a
                href={contact?.phone ? `tel:${contact.phone}` : '#'}
                className="flex items-start space-x-3 text-gray-400 hover:text-amber-500 transition-colors group"
              >
                <Phone className="w-5 h-5 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="break-all">{contact?.phone || '+964 750 123 4567'}</span>
              </a>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-lg font-semibold mb-6 text-amber-500">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-all duration-300 hover:scale-110 hover:rotate-6"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-all duration-300 hover:scale-110 hover:rotate-6"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-all duration-300 hover:scale-110 hover:rotate-6"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Nergiz Khalida Interior Design. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
