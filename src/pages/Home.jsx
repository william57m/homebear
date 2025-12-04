import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import SmartScenarios from '@/components/SmartScenarios';
import Difference from '@/components/Difference';
import Contact from '@/components/Contact';

const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Small delay to ensure DOM is ready
      }
    }
  }, [hash]);

  return (
    <>
      <Hero />
      <Services />
      <SmartScenarios />
      <Difference />
      <Contact />
    </>
  );
};

export default Home;