import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Helmet } from 'react-helmet';

const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        question: "What is homebear and what services do you offer?",
        answer: "homebear specializes in smart home automation solutions that run 100% locally in your home. We offer comprehensive services including lighting automation, climate control, security systems, energy monitoring, and custom automation scenarios. Everything is managed through a single, unified platform without relying on external cloud services."
      },
      {
        question: "How is homebear different from other smart home companies?",
        answer: "homebear stands out in three key ways: (1) 100% local operation - no cloud dependency, ensuring privacy and reliability; (2) One unified platform instead of multiple apps; (3) Built on proven, future-proof technologies like Zigbee, Thread, Z-Wave, and Wi-Fi that ensure long-term compatibility."
      },
      {
        question: "Do I need an internet connection for my smart home to work?",
        answer: "No! This is one of homebear's key advantages. Your automations run entirely locally within your home network. Internet is only needed for remote access when you're away from home or for initial setup and updates. Your lights, thermostats, and automations will continue working even if your internet goes down."
      }
    ]
  },
  {
    category: "Installation & Setup",
    questions: [
      {
        question: "How long does installation take?",
        answer: "Installation time varies based on the scope of your project. A basic lighting setup for a single room can be completed in a few hours, while a comprehensive whole-home automation system typically takes 1-3 days. We'll provide a detailed timeline during your consultation."
      },
      {
        question: "Do you work with existing smart devices I already own?",
        answer: "Yes! We work with a wide range of smart devices and protocols including Zigbee, Z-Wave, Thread, Wi-Fi, and many proprietary systems. During consultation, we'll assess your existing devices and integrate them into your unified homebear system whenever possible."
      },
      {
        question: "Will installation damage my walls or require major renovations?",
        answer: "Most installations are non-invasive. We primarily use wireless protocols that don't require running new wires through walls. For lighting and switches, we work with your existing electrical infrastructure. Any necessary modifications are discussed and approved before work begins."
      }
    ]
  },
  {
    category: "Privacy & Security",
    questions: [
      {
        question: "How secure is my data with homebear?",
        answer: "Your data stays in your home - literally. Unlike cloud-based systems, homebear operates 100% locally. Your home automation data never leaves your network, so there's no risk of external servers being hacked or your information being sold to third parties."
      },
      {
        question: "Can homebear access my home remotely?",
        answer: "We only access your system with your explicit permission for support or updates. You maintain full control over remote access settings. If you choose to enable remote access for yourself, we use secure encrypted connections."
      },
      {
        question: "What happens to my smart home if homebear goes out of business?",
        answer: "Your system continues working! Because everything runs locally on open-source technology (Home Assistant), you're never dependent on homebear's servers or services. The system is fully owned and controlled by you."
      }
    ]
  },
  {
    category: "Costs & Pricing",
    questions: [
      {
        question: "How much does a homebear smart home system cost?",
        answer: "Costs vary widely based on your home size and desired features. A starter system for a single room can begin around $500-1000, while comprehensive whole-home automation typically ranges from $3,000-10,000+. We offer free consultations to provide accurate estimates based on your specific needs."
      },
      {
        question: "Are there monthly fees or subscriptions?",
        answer: "No monthly fees! Unlike cloud-based systems, homebear doesn't require ongoing subscriptions. You pay for the hardware, installation, and setup, then your system is yours to use without recurring charges. Optional support packages are available but never required."
      },
      {
        question: "Do you offer financing options?",
        answer: "Yes, we work with financing partners to offer flexible payment plans for larger installations. Contact us to discuss options that fit your budget."
      }
    ]
  },
  {
    category: "Technical Details",
    questions: [
      {
        question: "What technologies and protocols do you use?",
        answer: "We build on Home Assistant, the world's leading open-source home automation platform. We support Zigbee, Thread, Z-Wave, Wi-Fi, Bluetooth, and many proprietary protocols. This ensures compatibility with thousands of devices and future-proofs your investment."
      },
      {
        question: "Can I control my smart home when I'm away?",
        answer: "Yes! We can set up secure remote access so you can control and monitor your home from anywhere. This is optional and fully under your control - the system works perfectly well as a local-only setup if you prefer."
      },
      {
        question: "What if I want to add more devices later?",
        answer: "Your homebear system is designed to grow with your needs. You can easily add new devices at any time. We're available to help with expansion, or if you're tech-savvy, you can add compatible devices yourself."
      },
      {
        question: "Do you provide training on how to use the system?",
        answer: "Absolutely! Every installation includes comprehensive training on how to use your new smart home system. We ensure you're comfortable with daily operations, and we provide documentation and ongoing support."
      }
    ]
  },
  {
    category: "Service Area",
    questions: [
      {
        question: "What areas do you serve?",
        answer: "We primarily serve Vancouver and the surrounding areas in British Columbia. Contact us to confirm if we service your specific location - we're always expanding our service area."
      },
      {
        question: "Do you offer virtual consultations?",
        answer: "Yes! We offer virtual consultations for initial discussions and planning. For installation quotes, we typically prefer an in-person visit to assess your space accurately, but we're flexible based on your needs."
      }
    ]
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border-b border-[#456146]/10 last:border-b-0"
    >
      <button
        onClick={onClick}
        className="w-full py-6 flex items-start justify-between gap-4 text-left hover:text-[#456146] transition-colors group"
      >
        <span className="font-semibold text-[#2a3a2b] group-hover:text-[#456146] transition-colors flex-1">
          {question}
        </span>
        <ChevronDown
          className={`flex-shrink-0 text-[#456146] transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          size={20}
        />
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-[#5a5a5a] leading-relaxed">
          {answer}
        </p>
      </motion.div>
    </motion.div>
  );
};

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleItem = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <>
      <Helmet>
        <title>FAQ - Frequently Asked Questions | homebear</title>
        <meta name="description" content="Find answers to common questions about homebear's smart home automation services, pricing, installation, privacy, and more." />
      </Helmet>

      <div className="pt-20 min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-[#f8f6f3] to-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-[#2a3a2b] mb-6">
                Frequently Asked <span className="text-[#456146]">Questions</span>
              </h1>
              <p className="text-xl text-[#5a5a5a] leading-relaxed">
                Everything you need to know about homebear smart home automation. Can't find your answer? Feel free to contact us.
              </p>
            </motion.div>
          </div>
        </div>

        {/* FAQ Content */}
        <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="mb-12 last:mb-0"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[#2a3a2b] mb-6">
                {category.category}
              </h2>
              <div className="bg-white rounded-2xl shadow-lg border border-[#456146]/10 overflow-hidden">
                <div className="p-4 md:p-6">
                  {category.questions.map((item, questionIndex) => (
                    <FAQItem
                      key={questionIndex}
                      question={item.question}
                      answer={item.answer}
                      isOpen={openItems[`${categoryIndex}-${questionIndex}`]}
                      onClick={() => toggleItem(categoryIndex, questionIndex)}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-[#456146] to-[#567557] py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Still have questions?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                We're here to help! Get in touch with our team for personalized answers and a free consultation.
              </p>
              <button
                onClick={() => {
                  window.location.href = '/#contact';
                }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#456146] rounded-full hover:bg-white/90 transition-all duration-300 transform hover:scale-105 font-bold text-lg shadow-xl"
              >
                Contact Us
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
