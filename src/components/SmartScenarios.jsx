import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { scenarios } from '@/data/scenariosData';

const SmartScenarios = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Preload all scenario images
  useEffect(() => {
    scenarios.forEach((scenario) => {
      const img = new Image();
      img.src = scenario.image;
    });
  }, []);

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
    <section id="smart-scenarios" className="py-20 bg-homebear-beige">
      <div className="container mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-homebear-dark mb-4">
            Smart Scenarios That <span className="text-homebear-green-brand">Adapt to Your Life</span>
          </h2>
          <p className="text-lg text-homebear-gray max-w-2xl mx-auto">
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
              transition={{ duration: 0.6 }}
            >
              <div className="grid md:grid-cols-2 gap-0 min-h-[800px] md:min-h-[600px]">
                {/* Image Section */}
                <motion.div 
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="relative h-80 md:h-auto overflow-hidden"
                >
                  <img 
                    src={currentScenario.image} 
                    alt={currentScenario.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/40 to-transparent"></div>
                </motion.div>

                {/* Content Section */}
                <div className="p-8 md:p-16 lg:p-20 flex flex-col justify-center bg-white">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      {/* Icon next to title */}
                      <div className="w-14 h-14 md:w-16 md:h-16 bg-homebear-green-brand/10 rounded-2xl flex items-center justify-center text-homebear-green-brand flex-shrink-0">
                        <Icon size={32} strokeWidth={2} />
                      </div>
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-homebear-dark">
                        {currentScenario.title}
                      </h3>
                    </div>
                    <p className="text-homebear-gray leading-relaxed text-lg md:text-xl mb-8">
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
                          <div className="w-6 h-6 bg-homebear-green-brand/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check size={16} className="text-homebear-green-brand" strokeWidth={3} />
                          </div>
                          <span className="text-homebear-dark text-base md:text-lg">{detail}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows - Desktop Only */}
          <button
            onClick={goToPrevious}
            className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/95 hover:bg-homebear-green-brand rounded-full shadow-xl items-center justify-center text-homebear-green-brand hover:text-white transition-all hover:scale-110 z-10"
            aria-label="Previous scenario"
          >
            <ChevronLeft size={28} strokeWidth={2.5} />
          </button>
          <button
            onClick={goToNext}
            className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/95 hover:bg-homebear-green-brand rounded-full shadow-xl items-center justify-center text-homebear-green-brand hover:text-white transition-all hover:scale-110 z-10"
            aria-label="Next scenario"
          >
            <ChevronRight size={28} strokeWidth={2.5} />
          </button>
        </div>

        {/* Dots Indicator with Mobile Navigation */}
        <div className="flex justify-center items-center gap-4 mt-10">
          {/* Previous Button - Mobile Only */}
          <button
            onClick={goToPrevious}
            className="md:hidden w-10 h-10 bg-white hover:bg-homebear-green-brand rounded-full shadow-lg flex items-center justify-center text-homebear-green-brand hover:text-white transition-all"
            aria-label="Previous scenario"
          >
            <ChevronLeft size={20} strokeWidth={2.5} />
          </button>

          {/* Dots */}
          <div className="flex gap-3">
            {scenarios.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex 
                    ? 'w-10 h-3.5 bg-homebear-green-brand shadow-md' 
                    : 'w-3.5 h-3.5 bg-homebear-green-brand/25 hover:bg-homebear-green-brand/50'
                }`}
                aria-label={`Go to scenario ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button - Mobile Only */}
          <button
            onClick={goToNext}
            className="md:hidden w-10 h-10 bg-white hover:bg-homebear-green-brand rounded-full shadow-lg flex items-center justify-center text-homebear-green-brand hover:text-white transition-all"
            aria-label="Next scenario"
          >
            <ChevronRight size={20} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SmartScenarios;