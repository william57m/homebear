import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react';
import { servicesData } from '@/data/servicesData';
import { Helmet } from 'react-helmet';

const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = servicesData.find(s => s.id === slug);

  useEffect(() => {
    if (!service) {
      navigate('/');
    }
    window.scrollTo(0, 0);
  }, [service, navigate]);

  if (!service) return null;

  const Icon = service.icon;

  return (
    <>
      <Helmet>
        <title>{service.title} | homebear Services</title>
        <meta name="description" content={service.shortDescription} />
      </Helmet>
      
      <div className="pt-20 min-h-screen bg-white">
        {/* Hero Section for Service */}
        <div className="bg-[#f8f6f3] py-16 md:py-24 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-1/3 h-full bg-[#456146]/5 skew-x-12 translate-x-12" />
           
           <div className="container mx-auto px-4 relative z-10">
             <Link to="/#services" className="inline-flex items-center gap-2 text-[#456146] hover:text-[#567557] mb-8 transition-colors group font-medium border-b-2 border-transparent pb-1">
               <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
               <span>Back to Services</span>
             </Link>
             
             <div className="flex flex-col md:flex-row items-center gap-12">
               <div className="flex-1">
                 <div className="w-16 h-16 bg-[#456146] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <Icon className="text-white" size={32} />
                 </div>
                 <h1 className="text-4xl md:text-6xl font-bold text-[#2a3a2b] mb-6">
                   {service.title}
                 </h1>
                 <p className="text-xl text-[#5a5a5a] leading-relaxed">
                   {service.shortDescription}
                 </p>
               </div>
               <div className="flex-1 w-full">
                 <div className="rounded-3xl overflow-hidden shadow-2xl">
                   <img alt={`${service.title} demonstration`} src="https://images.unsplash.com/photo-1634967389630-b6bbab0fab7e" />
                 </div>
               </div>
             </div>
           </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-12 gap-12">
            
            {/* Left Column: Description & Benefits */}
            <div className="md:col-span-8">
              <div className="prose prose-lg max-w-none text-[#5a5a5a]">
                <h2 className="text-3xl font-bold text-[#2a3a2b] mb-6">Overview</h2>
                <p className="mb-8 leading-relaxed text-lg">
                  {service.fullDescription}
                </p>
                
                <h2 className="text-3xl font-bold text-[#2a3a2b] mb-6">Key Benefits</h2>
                <div className="grid sm:grid-cols-2 gap-6 mb-12">
                  {service.benefits.map((benefit, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-[#f8f6f3] p-6 rounded-xl border border-[#456146]/10"
                    >
                      <CheckCircle2 className="text-[#456146] w-6 h-6 mb-3" />
                      <p className="text-[#2a3a2b] font-medium">{benefit}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Features & CTA */}
            <div className="md:col-span-4 space-y-8">
              <div className="bg-[#2a3a2b] text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-6">Features</h3>
                <ul className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#456146] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 size={14} />
                      </div>
                      <span className="text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#f8f6f3] p-8 rounded-2xl border-2 border-[#456146]/20 text-center">
                <h3 className="text-2xl font-bold text-[#2a3a2b] mb-4">Ready to upgrade?</h3>
                <p className="text-[#5a5a5a] mb-6">
                  Transform your home with homebear.
                </p>
                <Link 
                  to="/#contact"
                  className="inline-flex items-center justify-center w-full bg-[#456146] text-white px-8 py-3 rounded-full hover:bg-[#567557] transition-all font-bold shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  Get a Quote <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetail;