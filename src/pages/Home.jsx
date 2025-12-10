import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import SmartScenarios from '@/components/SmartScenarios';
import Difference from '@/components/Difference';
import Contact from '@/components/Contact';
import { Helmet } from 'react-helmet';

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
      <Helmet>
        <title>homebear - Smart Home Solutions</title>
        <meta name="description" content="Discover innovative smart home solutions with homebear. Enhance your living space with our cutting-edge technology and services." />
      </Helmet>

      <Hero />
      <SmartScenarios />
      <Services />
      <Difference />
      <Contact />
    </>
  );
};

export default Home;