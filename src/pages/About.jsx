import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Heart, Users, Target, ChevronRight, Zap, Brain } from 'lucide-react';
import { Helmet } from 'react-helmet';
import CatcherButton from '@/components/ui/catcher-button';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const values = [
    {
      icon: Shield,
      title: 'Privacy First',
      description:
        'Your data stays in your home. We believe privacy is a fundamental right, not a luxury.',
    },
    {
      icon: Heart,
      title: 'Simplicity',
      description:
        'Technology should make life easier, not more complicated. We focus on intuitive, seamless experiences.',
    },
    {
      icon: Users,
      title: 'Local Support',
      description:
        'Vancouver-based team providing personalized service and support when you need it.',
    },
    {
      icon: Target,
      title: 'Long-Term Thinking',
      description:
        'We use proven standards that will stand the test of time, protecting your investment.',
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToContact = () => {
    navigate('/#contact');
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <>
      <Helmet>
        <title>About Us | homebear</title>
        <meta
          name="description"
          content="Learn about homebear's mission to bring truly private, local, and intuitive smart home automation to Vancouver homes."
        />
      </Helmet>

      <div className="pt-20 min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-homebear-dark via-homebear-green-brand to-homebear-green-light py-24 md:py-40 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                About <span className="text-homebear-beige">homebear</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                We believe your smart home should be private, local, and instinctive working for
                you, not against you.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-white via-homebear-beige/30 to-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-homebear-dark mb-4">
                Our <span className="text-homebear-green-brand">Mission</span>
              </h2>
              <p className="text-lg text-homebear-gray max-w-2xl mx-auto">
                Building truly private and intelligent home automation
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <div className="space-y-8">
                <div className="flex gap-4 items-start">
                  <ChevronRight
                    className="text-homebear-green-brand flex-shrink-0 mt-1"
                    size={24}
                    strokeWidth={2.5}
                  />
                  <p className="text-homebear-gray text-lg leading-relaxed">
                    At homebear, we're on a mission to bring{' '}
                    <span className="font-semibold text-homebear-dark">
                      truly private and intelligent home automation
                    </span>{' '}
                    to Vancouver. We believe that your home should work for you, not for big tech
                    companies collecting your data.
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <ChevronRight
                    className="text-homebear-green-brand flex-shrink-0 mt-1"
                    size={24}
                    strokeWidth={2.5}
                  />
                  <p className="text-homebear-gray text-lg leading-relaxed">
                    Too often, smart home technology feels overwhelming, invasive, or unreliable. We
                    take a different approach:{' '}
                    <span className="font-semibold text-homebear-dark">
                      everything runs locally in your home
                    </span>
                    , with no cloud dependency, no subscriptions, and no data leaving your walls.
                    Your home, your data, your control.
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <ChevronRight
                    className="text-homebear-green-brand flex-shrink-0 mt-1"
                    size={24}
                    strokeWidth={2.5}
                  />
                  <p className="text-homebear-gray text-lg leading-relaxed">
                    We're passionate about creating{' '}
                    <span className="font-semibold text-homebear-dark">
                      automation that feels instinctive{' '}
                    </span>
                    like it was always meant to be there. From the moment you wake up to when you
                    drift off to sleep, your home adapts to you seamlessly, making life simpler and
                    more comfortable.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why homebear Section - Feature Box */}
        <section className="py-20 md:py-28 bg-homebear-dark relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-96 h-96 bg-homebear-green-brand rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-homebear-green-light rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 max-w-6xl relative z-10 pl-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">
                Why <span className="text-homebear-green-pale">homebear</span>?
              </h2>
            </motion.div>

            {/* Intro paragraph with logo */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center mb-16 max-w-6xl">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex-1"
              >
                <p className="text-white/90 text-lg leading-relaxed">
                  The bear is an iconic symbol of British Columbia and the Pacific Northwest. Here
                  in Vancouver, bears are part of our natural landscape, they represent the
                  intelligence and adaptability of our local wildlife. But there's a deeper reason
                  we chose the bear:{' '}
                  <span className="font-semibold text-homebear-green-pale">
                    bears are nature's champions of energy efficiency
                  </span>
                  . Through hibernation, they've mastered the art of conserving energy reducing
                  their metabolism by up to 75% and surviving months without food or water.
                </p>
              </motion.div>

              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex-shrink-0"
              >
                <div className="relative w-40 h-40 md:w-42 md:h-42">
                  {/* Glow effect behind logo */}
                  <div className="absolute inset-0 bg-homebear-green-pale/20 rounded-full blur-3xl scale-110"></div>

                  {/* Logo */}
                  <img
                    src="/src/images/logo.png"
                    alt="homebear logo"
                    className="relative w-full h-full object-contain drop-shadow-2xl brightness-0 invert"
                  />
                </div>
              </motion.div>
            </div>

            {/* Key points - 3 column grid with vertical accent lines */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="group relative"
              >
                {/* Vertical accent line */}
                <div className="absolute left-0 top-0 w-0.5 h-0 bg-homebear-green-pale group-hover:h-full transition-all duration-500"></div>

                <div className="pl-6">
                  {/* Icon and Title - horizontal on mobile, vertical on desktop */}
                  <div className="flex md:block items-center md:items-start gap-3 md:gap-0 mb-3">
                    <Zap
                      size={28}
                      strokeWidth={1.5}
                      className="text-homebear-green-pale flex-shrink-0 md:mb-4"
                    />
                    <h3 className="text-xl font-semibold text-white leading-snug md:mb-3">
                      Energy Efficiency
                    </h3>
                  </div>

                  {/* Content */}
                  <p className="text-gray-400 leading-relaxed">
                    This remarkable ability to optimize energy use mirrors what we do with your
                    home: intelligent automation that reduces waste while maintaining perfect
                    comfort.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="group relative"
              >
                {/* Vertical accent line */}
                <div className="absolute left-0 top-0 w-0.5 h-0 bg-homebear-green-pale group-hover:h-full transition-all duration-500"></div>

                <div className="pl-6">
                  {/* Icon and Title - horizontal on mobile, vertical on desktop */}
                  <div className="flex md:block items-center md:items-start gap-3 md:gap-0 mb-3">
                    <Brain
                      size={28}
                      strokeWidth={1.5}
                      className="text-homebear-green-pale flex-shrink-0 md:mb-4"
                    />
                    <h3 className="text-xl font-semibold text-white leading-snug md:mb-3">
                      Intelligence & Instinct
                    </h3>
                  </div>

                  {/* Content */}
                  <p className="text-gray-400 leading-relaxed">
                    Bears are highly intelligent and instinctive. They learn patterns, adapt to
                    their environment, and make smart decisions just like your{' '}
                    <span className="font-semibold text-homebear-green-pale">homebear</span> system.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="group relative"
              >
                {/* Vertical accent line */}
                <div className="absolute left-0 top-0 w-0.5 h-0 bg-homebear-green-pale group-hover:h-full transition-all duration-500"></div>

                <div className="pl-6">
                  {/* Icon and Title - horizontal on mobile, vertical on desktop */}
                  <div className="flex md:block items-center md:items-start gap-3 md:gap-0 mb-3">
                    <Shield
                      size={28}
                      strokeWidth={1.5}
                      className="text-homebear-green-pale flex-shrink-0 md:mb-4"
                    />
                    <h3 className="text-xl font-semibold text-white leading-snug md:mb-3">
                      Strength & Protection
                    </h3>
                  </div>

                  {/* Content */}
                  <p className="text-gray-400 leading-relaxed">
                    Bears represent strength and protection. Your{' '}
                    <span className="font-semibold text-homebear-green-pale">homebear</span>{' '}
                    protects your privacy through local technology that keeps your data safe.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-white via-homebear-beige/30 to-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-homebear-dark mb-4">
                Our <span className="text-homebear-green-brand">Values</span>
              </h2>
              <p className="text-lg text-homebear-gray max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="pl-6">
                      {/* Icon and Title - horizontal on mobile, vertical on desktop */}
                      <div className="flex md:block items-center md:items-start gap-3 md:gap-0 mb-3">
                        <Icon
                          size={28}
                          strokeWidth={1.5}
                          className="text-homebear-green-brand flex-shrink-0 md:mb-4"
                        />
                        <h3 className="text-lg font-semibold text-homebear-dark leading-snug md:mb-2">
                          {value.title}
                        </h3>
                      </div>

                      {/* Content */}
                      <p className="text-homebear-gray text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

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
                Ready to Experience the Difference?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Let's create a smart home that truly works for you, private, local, and perfectly
                tailored to your lifestyle.
              </p>
              <CatcherButton onClick={scrollToContact}>Get Started Today</CatcherButton>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
