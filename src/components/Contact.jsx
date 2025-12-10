import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Shield, Smartphone, Cpu, HelpCircle, ArrowRight } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import PrimaryButton from '@/components/ui/primary-button';
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
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-homebear-beige overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-homebear-dark mb-4">
            Get in <span className="text-homebear-green-brand">Touch</span>
          </h2>
          <p className="text-lg text-homebear-gray max-w-2xl mx-auto">
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
              <h3 className="text-2xl font-bold text-homebear-dark mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-homebear-dark mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-2xl border border-homebear-green-brand/20 focus:border-homebear-green-brand focus:ring-2 focus:ring-homebear-green-brand/20 outline-none transition-all"
                    placeholder="Grizz Lee"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-homebear-dark mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-2xl border border-homebear-green-brand/20 focus:border-homebear-green-brand focus:ring-2 focus:ring-homebear-green-brand/20 outline-none transition-all"
                    placeholder="grizzlee@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-homebear-dark mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-2xl border border-homebear-green-brand/20 focus:border-homebear-green-brand focus:ring-2 focus:ring-homebear-green-brand/20 outline-none transition-all"
                    placeholder="+1 (604) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-homebear-dark mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 rounded-2xl border border-homebear-green-brand/20 focus:border-homebear-green-brand focus:ring-2 focus:ring-homebear-green-brand/20 outline-none transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <PrimaryButton fullWidth type="submit">
                  Send Message
                </PrimaryButton>
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
              <h3 className="text-2xl font-bold text-homebear-dark mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-homebear-green-brand/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-homebear-green-brand" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-homebear-dark mb-1">Phone</div>
                    <a href={`tel:${contactInfo.phone}`} className="text-homebear-green-brand hover:text-homebear-green-light transition-colors hover:underline">{contactInfo.phone}</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-homebear-green-brand/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-homebear-green-brand" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-homebear-dark mb-1">Email</div>
                    <a href={`mailto:${contactInfo.email}`} className="text-homebear-green-brand hover:text-homebear-green-light transition-colors hover:underline">{contactInfo.email}</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-homebear-green-brand/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-homebear-green-brand" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-homebear-dark mb-1">Address</div>
                    <div className="text-homebear-gray">
                      {contactInfo.address.street}<br />
                      {contactInfo.address.city}, {contactInfo.address.state} {contactInfo.address.zip}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-homebear-dark rounded-2xl p-8 text-white shadow-xl flex-1">
              <h3 className="text-2xl font-bold mb-4">Why choose homebear?</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Shield size={28} className="text-homebear-green-pale" />
                  <div className="flex-1">
                    <div className="font-semibold">100% Local, 100% Private</div>
                    <div className="text-sm text-gray-400">Everything runs locally—no cloud, no data leaving your home.</div>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Smartphone size={28} className="text-homebear-green-pale"/>
                  <div className="flex-1">
                    <div className="font-semibold">One Platform, Not a Pile of Apps</div>
                    <div className="text-sm text-gray-400">All your devices unified in a single, seamless interface.</div>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Cpu size={28} className="text-homebear-green-pale"/>
                  <div className="flex-1">
                    <div className="font-semibold">Built on Long-Lasting Technologies</div>
                    <div className="text-sm text-gray-400">Future-proof standards like Zigbee, Thread, Z-Wave, and Wi-Fi.</div>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-br from-homebear-beige to-white rounded-2xl p-8 md:p-12 shadow-xl border border-homebear-green-brand/10 text-center group hover:shadow-2xl transition-all duration-300">
            <div className="max-w-3xl mx-auto">
              <div className="w-16 h-16 bg-homebear-green-brand rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110">
                <HelpCircle className="text-white" size={32} />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-homebear-dark mb-4">
                Have Questions?
              </h3>
              <p className="text-lg text-homebear-gray mb-8 leading-relaxed">
                Find answers to common questions about our services, pricing, installation process, privacy, and more in our comprehensive FAQ section.
              </p>
              <Link
                to="/faq"
              >
                <PrimaryButton bold padding="large">
                  Visit our FAQ page
                  <ArrowRight size={20} />
                </PrimaryButton>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;