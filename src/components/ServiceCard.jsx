import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service, index }) => {
  const Icon = service.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="h-full"
    >
      <Link 
        to={`/services/${service.id}`}
        className="group block h-full bg-gradient-to-br from-[#f8f6f3] to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#456146]/10 flex flex-col"
      >
        <div className="w-16 h-16 bg-[#456146] rounded-2xl flex items-center justify-center mb-6 transform transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110">
          <Icon className="text-white" size={32} />
        </div>
        
        <h3 className="text-2xl font-bold text-[#2a3a2b] mb-3">{service.title}</h3>
        <p className="text-[#5a5a5a] mb-6 leading-relaxed flex-grow">{service.shortDescription}</p>
        
        <div className="space-y-4 mt-auto">
          <div className="space-y-2">
            {service.features.slice(0, 3).map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-5 h-5 bg-[#456146]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="text-[#456146]" size={14} />
                </div>
                <span className="text-sm text-[#5a5a5a]">{feature}</span>
              </div>
            ))}
          </div>
          
          <div className="pt-4 flex items-center text-[#456146] font-medium group">
            Learn more 
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;