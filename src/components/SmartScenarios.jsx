import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { scenarios } from '@/data/scenariosData';

const SmartScenarios = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % scenarios.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % scenarios.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + scenarios.length) % scenarios.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const currentScenario = scenarios[currentIndex];
  const Icon = currentScenario.icon;

  return (
    <section id="smart-scenarios" className="py-20 bg-[#f8f6f3]">
      <div className="container mx-auto max-w-full px-4 md:px-8 lg:px-16 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#2a3a2b] mb-4">
            Smart Scenarios That <span className="text-[#456146]">Adapt to Your Life</span>
          </h2>
          <p className="text-lg text-[#5a5a5a] max-w-2xl mx-auto">
            Experience true automation where your home anticipates your needs before you even ask.
          </p>
        </motion.div>
      </div>

      <div 
        className="relative w-full"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Slideshow Container */}
        <div className="relative bg-white overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Section */}
                <motion.div 
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="relative h-64 md:h-full min-h-[500px] overflow-hidden"
                >
                  <img 
                    src={currentScenario.image} 
                    alt={currentScenario.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/40 to-transparent"></div>
                  
                  {/* Icon overlay on image */}
                  <div className="absolute top-8 left-8">
                    <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center text-[#456146] shadow-lg">
                      <Icon size={32} strokeWidth={2} />
                    </div>
                  </div>
                </motion.div>

                {/* Content Section */}
                <div className="p-8 md:p-16 lg:p-20 flex flex-col justify-center bg-white">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2a3a2b] mb-6">
                      {currentScenario.title}
                    </h3>
                    <p className="text-[#5a5a5a] leading-relaxed text-lg md:text-xl mb-8">
                      {currentScenario.description}
                    </p>
                    
                    {/* Details List */}
                    <div className="space-y-4">
                      {currentScenario.details.map((detail, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-6 h-6 bg-[#456146]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check size={16} className="text-[#456146]" strokeWidth={3} />
                          </div>
                          <span className="text-[#2a3a2b] text-base md:text-lg">{detail}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-6 md:left-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/95 hover:bg-[#456146] rounded-full shadow-xl flex items-center justify-center text-[#456146] hover:text-white transition-all hover:scale-110 z-10"
            aria-label="Previous scenario"
          >
            <ChevronLeft size={28} strokeWidth={2.5} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-6 md:right-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/95 hover:bg-[#456146] rounded-full shadow-xl flex items-center justify-center text-[#456146] hover:text-white transition-all hover:scale-110 z-10"
            aria-label="Next scenario"
          >
            <ChevronRight size={28} strokeWidth={2.5} />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-10">
          {scenarios.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex 
                  ? 'w-10 h-3.5 bg-[#456146] shadow-md' 
                  : 'w-3.5 h-3.5 bg-[#456146]/25 hover:bg-[#456146]/50'
              }`}
              aria-label={`Go to scenario ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Bottom Text */}
      <div className="container mx-auto max-w-3xl px-4 md:px-8 mt-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-lg md:text-xl text-[#5a5a5a] leading-relaxed"
        >
          These scenarios are just the beginning. Every routine, habit, and preference in your home can be automated and tailored to you, creating comfort, safety, and convenience that feels natural.
        </motion.p>
      </div>
    </section>
  );
};

export default SmartScenarios;