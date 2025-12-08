import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Smartphone, Zap, CheckCircle2 } from 'lucide-react';
import heroImage from '@/images/hero.png';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    { icon: Shield, title: "100% Local & Private" },
    { icon: Smartphone, title: "One Unified Platform" },
    { icon: Zap, title: "Future-Proof Tech" },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 px-4">
      {/* Full Background Image with Darker Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage}
          alt="Modern smart home with homebear automation" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2a3a2b]/90 via-[#2a3a2b]/40 to-transparent"></div>
      </div>

      {/* Centered Content */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Smart Home Automation,
            <br />
            <span className="text-[#f8f6f3]">Naturally Intelligent</span>
          </motion.h1>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto"
          >
            The bear is one of nature's best examples of energy efficiency, and homebear brings that same instinctive, fully local intelligence to your home with private, secure automation tailored to Vancouver living.
          </motion.p>

          {/* Feature Badges Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="text-center"
                >
                  <Icon className="w-12 h-12 text-white mx-auto mb-4" strokeWidth={1.5} />
                  <h3 className="font-bold text-white text-sm">{feature.title}</h3>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Single Prominent CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <button
              onClick={scrollToContact}
              className="bg-white text-[#456146] px-12 py-5 rounded-full hover:bg-[#f8f6f3] transition-all duration-300 transform hover:scale-105 font-bold shadow-2xl inline-flex items-center gap-2"
            >
              Get your free consultation
            </button>
            
            {/* Secondary Link */}
            <div className="mt-6">
              <button
                onClick={() => {
                  const element = document.getElementById('services');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-white/90 hover:text-white font-medium transition-colors underline underline-offset-4"
              >
                Explore our services
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;