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
    <footer className=" text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div data-aos="fade-up" data-aos-delay="0">
           <div className="w-fit scale-125  ml-5 mb-5  transform group-hover:rotate-6 transition-transform duration-300">
             <img src={`${
                '/logo.png'
            }`} alt="Nergiz Khalida" className="w-20 place-self-start" />
            </div>
            <p className="text-gray-400 leading-relaxed">
              Complete interior design services with full attention to every detail.
              From concept to completion, we bring your vision to life beautifully.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-lg font-semibold mb-6 text-gray-500">Contact Info</h3>
            <div className="space-y-4">
              <a
                href={contact?.email ? `mailto:${contact.email}` : '#'}
                className="flex items-start space-x-3 text-gray-400 hover:text-gray-500 transition-colors group"
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
                className="flex items-start space-x-3 text-gray-400 hover:text-gray-500 transition-colors group"
              >
                <Phone className="w-5 h-5 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="break-all">{contact?.phone || '+964 750 391 3540'}</span>
              </a>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-lg font-semibold mb-6 text-gray-500">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/nergiz.khalid?igsh=eHFiaWk4bXdieGdn"
                className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-all duration-300 hover:scale-110 hover:rotate-6"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/share/17RzMLCaMT/"
                className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-all duration-300 hover:scale-110 hover:rotate-6"
              >
                <Facebook className="w-5 h-5" />
              </a>
              
            </div>
          </div>
        </div>

{/* Footer Bottom */}
        <div className="mt-12 pt-6 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Nergiz Khalida. all rights reserved.</p>
          <p className="mt-2">
            Powered by{" "}
            <a 
              href="https://wa.me/96407701411893"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:underline"
            >
              Al-Code
            </a>
          </p>
        </div>
      
      </div>
    </footer>
  );
}
