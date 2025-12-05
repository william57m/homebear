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
    <section className="py-20 px-4 bg-[#2a3a2b]">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            The <span className="text-[#8fb990]">homebear</span> difference
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            What sets us apart from the rest
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {differences.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#456146]/10 hover:border-[#456146]/30">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#456146] to-[#567557] rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-md">
                    <Icon size={32} strokeWidth={2} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#2a3a2b] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-[#5a5a5a] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Difference;
