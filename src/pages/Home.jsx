import { Link } from 'react-router-dom';
import { ArrowRight, Palette, Lightbulb, Award, Users } from 'lucide-react';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import OurPhilosophy from '../components/OurPhilosophy';
import StartProject from '../components/StartProject';
import Project from '../components/Project';

import AboutNergiz from '../components/AboutNergiz';
import ServicesTitle from '../components/ServicesTitle';
import KineticScrollGallery from '../components/KineticScrollGallery';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
     <Hero />
     <AboutNergiz />
     <KineticScrollGallery />
     {/* <WhyChooseUs /> */}
    <ServicesTitle />
     {/* <OurPhilosophy /> */}

     {/* <Project /> */}
     <StartProject />
    </div>
  );
}
