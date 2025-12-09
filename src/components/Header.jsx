import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '@/images/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (sectionId) => {
    setIsMobileMenuOpen(false);
    
    if (location.pathname === '/') {
      // If we are already on home, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we are on a detail page, navigate to home with hash
      // The Home component needs to handle the scrolling upon mount/update
      navigate(`/#${sectionId}`);
    }
  };

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  // Determine if we should use transparent header (only on home page when not scrolled)
  const isTransparent = location.pathname === '/' && !isScrolled;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        !isTransparent ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={handleLogoClick}
          >
            <img 
              src={logo}
              alt="homebear logo" 
              className={`w-10 h-10 object-contain transition-all duration-300 ${
                !isTransparent ? '' : 'brightness-0 invert'
              }`}
            />
            <span className={`text-2xl pt-3 font-bold font-sofia-pro transition-colors duration-300 ${
              !isTransparent ? 'text-[#283431]' : 'text-white'
            }`}>homebear</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleNavigation('hero')}
              className={`transition-colors font-medium ${
                !isTransparent ? 'text-homebear-dark hover:text-homebear-green-brand' : 'text-white hover:text-homebear-beige'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation('services')}
              className={`transition-colors font-medium ${
                !isTransparent ? 'text-homebear-dark hover:text-homebear-green-brand' : 'text-white hover:text-homebear-beige'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => handleNavigation('smart-scenarios')}
              className={`transition-colors font-medium ${
                !isTransparent ? 'text-homebear-dark hover:text-homebear-green-brand' : 'text-white hover:text-homebear-beige'
              }`}
            >
              Scenarios
            </button>
            <button
              onClick={() => handleNavigation('contact')}
              className="bg-homebear-green-brand text-white px-6 py-2 rounded-full hover:bg-homebear-green-light transition-all duration-300 transform hover:scale-105 font-medium"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors ${
              !isTransparent ? 'text-homebear-dark hover:text-homebear-green-brand' : 'text-white hover:text-homebear-beige'
            }`}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4"
          >
            <div className="flex flex-col gap-4">
              <button
                onClick={() => handleNavigation('hero')}
                className="text-homebear-dark hover:text-homebear-green-brand transition-colors font-medium text-left"
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation('services')}
                className="text-homebear-dark hover:text-homebear-green-brand transition-colors font-medium text-left"
              >
                Services
              </button>
              <button
                onClick={() => handleNavigation('smart-scenarios')}
                className="text-homebear-dark hover:text-homebear-green-brand transition-colors font-medium text-left"
              >
                Smart Scenarios
              </button>
              <button
                onClick={() => handleNavigation('contact')}
                className="bg-homebear-green-brand text-white px-6 py-2 rounded-full hover:bg-homebear-green-light transition-all duration-300 font-medium"
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;