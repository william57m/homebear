import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '@/components/ServiceCard';
import { servicesData } from '@/data/servicesData';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="relative overflow-hidden rounded-2xl p-6 md:p-8 bg-gradient-to-br from-[#f8f6f3] to-white border border-[#456146]/10 shadow-lg hover:shadow-2xl transition-all duration-300 group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#456146]/5 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#456146]/5 rounded-full translate-y-24 -translate-x-24"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-8 items-start md:text-left text-center">
              {/* Icon Section */}
              <div className="mx-auto md:mx-0">
                <div className="w-16 h-16 bg-[#456146] rounded-2xl flex items-center justify-center transition-transform group-hover:rotate-3 group-hover:scale-110">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-[#2a3a2b] mb-4">
                  And so much more...
                </h3>
                <p className="text-[#5a5a5a] leading-relaxed mb-4">
                  In addition to our popular services, our expertise spans a multitude of smart home solutions. Whether you need to manage safety (<span className="font-semibold text-[#456146]">water leak detection and automatic shut-off</span>), optimize convenience (<span className="font-semibold text-[#456146]">robot vacuum scheduling, garage door control, mailbox notifications, etc.</span>), or enhance your environment (<span className="font-semibold text-[#456146]">air quality and humidity monitoring</span>), the possibilities are unlimited. We work with any device and can integrate every automation imaginable into your personalized system.
                </p>
                <button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#456146] text-[#456146] bg-white/50 backdrop-blur-sm rounded-full hover:bg-[#456146] hover:text-white transition-all duration-300 transform hover:scale-105 font-semibold"
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>
                    Schedule a consultation to discuss your needs
                  </span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;