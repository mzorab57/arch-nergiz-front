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
    <div className="">
      <section className="relative hidden lg:block py-[30rem]  overflow-hidden ">
        <div   className="absolute aspect-auto lg:aspect-[5/4] inset-0 bg-[url('/images/aboutabg.JPG')] bg-cover bg-center  opacity-40"></div>
      </section>
      <section className="relative overflow-hidden ">
        <div className=" aspect-square lg:hidden lg:aspect-[5.5/3] inset-0 bg-[url('/images/aboutabg.JPG')] bg-cover bg-center  opacity-40"></div>
      </section>
       <div className="h-14 w-full bg-gradient-to-t from-[#121212] via-[#0e0e0e] to-transparent -translate-y-8"></div>
  
      <section className="py-24  font-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between gap-16 items-start px-6">
            

            {/* Right side - Contact Info */}
            <div data-aos="fade-left" data-aos-duration="1000" >
              <div className="text-left">
                <h1 className="text-6xl  font-light text-white mb-8 tracking-wider">
                  CONTACTS
                </h1>
                
                <div className="space-y-6 text-left">
                  <div>
                    <p className="text-gray-400 text-lg mb-2">07503913540 - order a project</p>
                    <p className="text-white text-lg">nergiz.designer@gmail.com</p>
                  </div>
                  
                  <div className="mt-8">
                    <p className="text-gray-400 text-lg mb-2">Erbil, Andaziyaran<br />
                          Villa 60</p>
                    <p className="text-white text-lg">+96407503913540</p>
                  </div>
                  
                  <div className="mt-12">
                    <p className="text-gray-400 text-sm mb-4">Meetings by prior arrangement</p>
                    <p className="text-gray-400 text-sm">Opening hours: Mon-Fri from 10:00 to 19:00</p>
                  </div>
                </div>
                
                <div className="mt-16">
                  <button className="bg-transparent border border-white text-white px-8 py-2 text-lg font-light hover:bg-white hover:text-black transition-all duration-300">
                    SEND A REQUEST
                  </button>
                </div>
              </div>

            </div>
            <div data-aos="zoom-in" data-aos-delay="200" className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 max-w-3xl w-full  mx-auto border border-white/10">
              <div className="aspect-video bg-gray-700 rounded-2xl overflow-hidden brightness-50">
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
