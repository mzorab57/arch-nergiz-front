import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Briefcase, Image, Users, Mail } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/services', label: 'Services', icon: Briefcase },
    { to: '/portfolio', label: 'Portfolio', icon: Image },
    { to: '/about', label: 'About', icon: Users },
    { to: '/contact', label: 'Contact', icon: Mail },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} to="/" className="flex items-center space-x-2 group">
            <div className=" scale-125  flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
             <img src={`${
              scrolled ? '/logoBlack.png' : '/logo.png'
            }`} alt="Nergiz Khalida" className="w-16" />
            </div>
           
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map(({ to, label, icon: Icon }) => (
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                key={to}
                to={to}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 group ${
                  location.pathname === to
                    ? scrolled
                      ? 'bg-amber-600 text-white'
                      : 'bg-white text-amber-600'
                    : scrolled
                    ? 'text-gray-700 hover:bg-gray-100'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>{label}</span>
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white shadow-lg">
          {navLinks.map(({ to, label, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              className={`flex items-center space-x-3 px-6 py-4 transition-colors duration-300 ${
                location.pathname === to
                  ? 'bg-amber-50 text-amber-600 border-l-4 border-amber-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
