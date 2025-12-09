import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Smartphone, Cpu } from 'lucide-react';

const differences = [
  {
    icon: Shield,
    title: "100% Local, 100% Private",
    description: "Your home shouldn't rely on the cloud. Everything runs locally inside your house—no external servers, no data leaving your home, and no internet required for your automations to work."
  },
  {
    icon: Smartphone,
    title: "One Platform, Not a Pile of Apps",
    description: "You shouldn't have to juggle multiple apps. With Homebear, all your devices are linked to a single, unified platform that brings everything together in one place."
  },
  {
    icon: Cpu,
    title: "Built on Recognized Technologies",
    description: "We rely exclusively on proven, future-proof standards such as Zigbee, Thread, Z-Wave, and Wi-Fi that ensure long-term compatibility and reliability."
  }
];

const Difference = () => {
  return (
    <section className="py-16 px-4 bg-[#2a3a2b]">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
            The <span className="text-[#8fb990]">homebear</span> difference
          </h2>
          <div className="w-16 h-1 bg-[#8fb990]"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {differences.map((item, index) => {
            const Icon = item.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative"
              >
                {/* Vertical accent line */}
                <div className="absolute left-0 top-0 w-0.5 h-0 bg-[#8fb990] group-hover:h-full transition-all duration-500"></div>
                
                <div className="pl-6">
                  {/* Icon */}
                  <div className="mb-4">
                    <Icon size={28} strokeWidth={1.5} className="text-[#8fb990]" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
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
