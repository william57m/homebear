import React from 'react';
import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="text-[#456146]" size={32} />
              <span className="text-[#456146] font-semibold text-lg">Smart Living, Naturally</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[#2a3a2b] mb-6 leading-tight">
              Welcome to<br />
              <span className="text-[#456146]">homebear</span>
            </h1>
            <p className="text-xl text-[#5a5a5a] mb-8 leading-relaxed">
              Transform your living space into an intelligent, comfortable haven with our cutting-edge home automation solutions. Experience the perfect blend of technology and nature.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToContact}
                className="bg-[#456146] text-white px-8 py-4 rounded-full hover:bg-[#567557] transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg"
              >
                Get Started
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('services');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="border-2 border-[#456146] text-[#456146] px-8 py-4 rounded-full hover:bg-[#456146] hover:text-white transition-all duration-300 transform hover:scale-105 font-semibold"
              >
                Learn More
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                className="w-full h-[500px] object-cover" 
                alt="Modern smart home living room with natural lighting" src="https://images.unsplash.com/photo-1610123172705-a57f116cd4d9" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#456146]/20 to-transparent"></div>
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-[200px]"
            >
              <div className="text-3xl font-bold text-[#456146] mb-1">500+</div>
              <div className="text-sm text-[#5a5a5a]">Happy Homes Automated</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;