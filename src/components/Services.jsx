import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '@/components/ServiceCard';
import { servicesData } from '@/data/servicesData';

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#2a3a2b] mb-4">
            Our <span className="text-[#456146]">Services</span>
          </h2>
          <p className="text-lg text-[#5a5a5a] max-w-2xl mx-auto">
            Discover our comprehensive range of smart home solutions designed to enhance your lifestyle while reducing energy consumption.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;