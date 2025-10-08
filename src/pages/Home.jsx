import { Link } from 'react-router-dom';
import { ArrowRight, Palette, Lightbulb, Award, Users } from 'lucide-react';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import OurPhilosophy from '../components/OurPhilosophy';
import StartProject from '../components/StartProject';
import Project from '../components/Project';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
     <Hero />

     <WhyChooseUs />

     <OurPhilosophy />

     <Project />
     <StartProject />
    </div>
  );
}
