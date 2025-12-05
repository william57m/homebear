import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { companyInfo, contactInfo } from '@/data/contactData';
import logo from '@/images/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#2a3a2b] text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src={logo}
                alt={`${companyInfo.name} logo`}
                className="w-10 h-10 object-contain brightness-0 invert"
              />
              <span className="text-2xl font-bold font-sofia-pro pt-4">{companyInfo.name}</span>
            </div>
            <p className="text-gray-400 mb-4">
              {companyInfo.tagline}
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-[#456146]/20 hover:bg-[#456146] rounded-full flex items-center justify-center transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-[#456146]/20 hover:bg-[#456146] rounded-full flex items-center justify-center transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <span className="text-lg font-semibold mb-4 block text-[#456146]">Services</span>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/#services" className="hover:text-white transition-colors">Climate Control</a></li>
              <li><a href="/#services" className="hover:text-white transition-colors">Smart Lighting</a></li>
              <li><a href="/#services" className="hover:text-white transition-colors">Security Systems</a></li>
              <li><a href="/#services" className="hover:text-white transition-colors">Automated Blinds</a></li>
              <li><a href="/#services" className="hover:text-white transition-colors">Multi-Room Audio</a></li>
              <li><a href="/#services" className="hover:text-white transition-colors">Custom Dashboard</a></li>
            </ul>
          </div>

          <div>
            <span className="text-lg font-semibold mb-4 block text-[#456146]">Company</span>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <span className="text-lg font-semibold mb-4 block text-[#456146]">Contact</span>
            <ul className="space-y-2 text-gray-400">
              <li>{contactInfo.address.street}</li>
              <li>{contactInfo.address.city}, {contactInfo.address.state} {contactInfo.address.zip}</li>
              <li className="pt-2">
                <a href={`tel:${contactInfo.phone}`} className="hover:text-white transition-colors">
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            {companyInfo.copyright}
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;