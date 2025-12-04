import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Smartphone, Cpu } from 'lucide-react';

const differences = [
  {
    icon: Shield,
    title: "100% Local, 100% Private",
    description: "Your home shouldn't rely on the cloud. With Homebear, everything runs locally inside your house—no external servers, no data leaving your home, and no internet required for your automations to work. This means faster responses, greater reliability, and complete privacy."
  },
  {
    icon: Smartphone,
    title: "One Platform, Not a Pile of Apps",
    description: "You shouldn't have to juggle multiple apps just to turn off a light, check a door, or adjust the temperature. With Homebear, all your devices are linked to a single, unified platform that brings everything together in one place. One interface, one experience—simple, consistent, and seamless."
  },
  {
    icon: Cpu,
    title: "Built on Recognized and Long-Lasting Technologies",
    description: "We rely exclusively on proven, future-proof standards such as Zigbee, Thread, Z-Wave, and Wi-Fi—recognized and long-lasting technologies that ensure long-term compatibility, reliability, and stability. Your system will never become outdated as your home evolves and time goes on."
  }
];

const Difference = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#e8f5e9] via-[#f1f8e9] to-[#fff8e1]">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#2a3a2b] mb-4">
            The <span className="text-[#456146]">homebear</span> difference
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {differences.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="text-center"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-[#456146]/10 rounded-2xl flex items-center justify-center text-[#456146]">
                    <Icon size={40} strokeWidth={2} />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#2a3a2b] mb-4">
                  {item.title}
                </h3>
                <p className="text-[#5a5a5a] leading-relaxed text-base md:text-lg">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Difference;
