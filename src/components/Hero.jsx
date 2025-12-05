import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import heroImage from '@/images/hero.png';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 px-4 min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage}
          alt="Modern smart home" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/70 to-white/70"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Zap className="text-[#456146]" size={32} />
              <span className="text-[#456146] font-semibold text-lg">Smart Home Automation, Inspired by the Bear</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold text-[#456146] mb-6 leading-tight">
              Welcome to<br />
              <span className="text-[#283431]">homebear</span>
            </h1>
            <p className="text-xl text-[#5a5a5a] mb-8 leading-relaxed max-w-xl">
              The bear is one of nature's best examples of energy efficiency and adaptation. Homebear brings that same instinctive intelligence to your home with personalized, fully local home-automation services that make your life at home smoother, safer, and more efficient.
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
                className="border-2 border-[#456146] text-[#456146] bg-white/50 backdrop-blur-sm px-8 py-4 rounded-full hover:bg-[#456146] hover:text-white transition-all duration-300 transform hover:scale-105 font-semibold"
              >
                Learn More
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:block"
          >
            <div className="relative">
              {/* Main feature highlight */}
              <div className="bg-gradient-to-br from-white/60 to-white/40 backdrop-blur-md rounded-3xl p-8 border border-white/60 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#456146] rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-[#456146]">100% Local & Private</h3>
                      <p className="text-sm text-[#5a5a5a] leading-relaxed">Your data stays in your home. No cloud, no subscriptions, complete control.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#456146] rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-[#456146]">One Platform</h3>
                      <p className="text-sm text-[#5a5a5a] leading-relaxed">Control everything from a single app. Simple, elegant, powerful.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#456146] rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-[#456146]">Built to Last</h3>
                      <p className="text-sm text-[#5a5a5a] leading-relaxed">Open-source technologies that won't become obsolete.</p>
                    </div>
                  </div>
                </div>

                {/* Location badge */}
                <div className="mt-6 pt-6 border-t border-[#456146]/10">
                  <div className="flex items-center gap-2 text-sm text-[#5a5a5a]">
                    <svg className="w-4 h-4 text-[#456146]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>Serving Vancouver and surrounding areas</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;