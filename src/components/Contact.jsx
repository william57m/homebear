import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Shield, Smartphone, Cpu } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { contactInfo } from '@/data/contactData';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Store in localStorage for demonstration
    const submissions = JSON.parse(localStorage.getItem('homebear_contacts') || '[]');
    submissions.push({
      ...formData,
      timestamp: new Date().toISOString()
    });
    localStorage.setItem('homebear_contacts', JSON.stringify(submissions));

    toast({
      title: "Message Sent! 🌿",
      description: "Thank you for contacting homebear. We'll get back to you within 24 hours.",
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-white to-[#f8f6f3]">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#2a3a2b] mb-4">
            Get in <span className="text-[#456146]">Touch</span>
          </h2>
          <p className="text-lg text-[#5a5a5a] max-w-2xl mx-auto">
            Ready to transform your home? Let's discuss how we can create the perfect smart home solution for you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col h-full"
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl h-full">
              <h3 className="text-2xl font-bold text-[#2a3a2b] mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#2a3a2b] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-2xl border border-[#456146]/20 focus:border-[#456146] focus:ring-2 focus:ring-[#456146]/20 outline-none transition-all"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#2a3a2b] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-2xl border border-[#456146]/20 focus:border-[#456146] focus:ring-2 focus:ring-[#456146]/20 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#2a3a2b] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-2xl border border-[#456146]/20 focus:border-[#456146] focus:ring-2 focus:ring-[#456146]/20 outline-none transition-all"
                    placeholder="+1 (604) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#2a3a2b] mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 rounded-2xl border border-[#456146]/20 focus:border-[#456146] focus:ring-2 focus:ring-[#456146]/20 outline-none transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#456146] hover:bg-[#567557] text-white py-6 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105"
                >
                  <Send size={20} />
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl flex-1">
              <h3 className="text-2xl font-bold text-[#2a3a2b] mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#456146]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#456146]" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-[#2a3a2b] mb-1">Phone</div>
                    <a href={`tel:${contactInfo.phone}`} className="text-[#456146] hover:text-[#567557] transition-colors hover:underline">{contactInfo.phone}</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#456146]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#456146]" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-[#2a3a2b] mb-1">Email</div>
                    <a href={`mailto:${contactInfo.email}`} className="text-[#456146] hover:text-[#567557] transition-colors hover:underline">{contactInfo.email}</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#456146]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#456146]" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-[#2a3a2b] mb-1">Address</div>
                    <div className="text-[#5a5a5a]">
                      {contactInfo.address.street}<br />
                      {contactInfo.address.city}, {contactInfo.address.state} {contactInfo.address.zip}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#456146] to-[#567557] rounded-2xl p-8 text-white shadow-xl flex-1">
              <h3 className="text-2xl font-bold mb-4">Why Choose homebear?</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">100% Local, 100% Private</div>
                    <div className="text-sm text-white/90">Everything runs locally—no cloud, no data leaving your home.</div>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Smartphone size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">One Platform, Not a Pile of Apps</div>
                    <div className="text-sm text-white/90">All your devices unified in a single, seamless interface.</div>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Cpu size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">Built on Long-Lasting Technologies</div>
                    <div className="text-sm text-white/90">Future-proof standards like Zigbee, Thread, Z-Wave, and Wi-Fi.</div>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;