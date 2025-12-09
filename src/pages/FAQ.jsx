import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { faqs } from '@/data/faqData';
import CatcherButton from '@/components/ui/catcher-button';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border-b border-homebear-green-brand/10 last:border-b-0"
    >
      <button
        onClick={onClick}
        className="w-full py-6 flex items-start justify-between gap-4 text-left hover:text-homebear-green-brand transition-colors group"
      >
        <span className="font-semibold text-homebear-dark group-hover:text-homebear-green-brand transition-colors flex-1">
          {question}
        </span>
        <ChevronDown
          className={`flex-shrink-0 text-homebear-green-brand transition-transform duration-300 ${
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
        <p className="pb-6 text-homebear-gray leading-relaxed whitespace-pre-line">
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
        <div className="bg-gradient-to-b from-homebear-beige to-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-homebear-dark mb-6">
                Frequently Asked <span className="text-homebear-green-brand">Questions</span>
              </h1>
              <p className="text-xl text-homebear-gray leading-relaxed">
                Everything you need to know about homebear smart home automation. Can't find your answer? Feel free to contact us.
              </p>
            </motion.div>
          </div>
        </div>

        {/* FAQ Content */}
        <div className="container mx-auto px-4 pb-16 md:pb-24 max-w-4xl">
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="mb-12 last:mb-0"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-homebear-dark mb-6">
                {category.category}
              </h2>
              <div className="bg-white rounded-2xl shadow-lg border border-homebear-green-brand/10 overflow-hidden">
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
        <div className="bg-gradient-to-br from-homebear-green-brand to-homebear-green-light py-16 md:py-20">
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
              <CatcherButton
                onClick={() => {
                  window.location.href = '/#contact';
                }}
              >
                Contact Us
              </CatcherButton>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
