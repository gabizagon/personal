import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Flame, Camera, Lock, Wrench, GitMerge, Network, PhoneCall, MonitorSmartphone, CheckCircle, AlertTriangle, Monitor, Zap, Shield } from 'lucide-react';
import ShieldClockIcon from '../components/icons/ShieldClockIcon';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ServicesPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.focus();
    }
  }, []);

  // Get icons based on service type
  const getServiceIcon = (index: number) => {
    const icons = [
      <ShieldClockIcon className="service-icon" />,
      <Lock className="service-icon" />,
      <Shield className="service-icon" />,
      <Flame className="service-icon" />,
      <Monitor className="service-icon" />,
      <Wrench className="service-icon" />,
      <GitMerge className="service-icon" />,
      <Network className="service-icon" />,
      <PhoneCall className="service-icon" />,
      <Camera className="service-icon" />
    ];
    
    return icons[index] || <Shield className="service-icon" />;
  };

  return (
    <>
      <Helmet>
        <title>{t('services.title')} | APS-MS</title>
        <meta name="description" content={t('services.subtitle')} />
      </Helmet>

      <div className="pt-32 pb-20">
        <div className="relative z-10 mb-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 
                ref={titleRef}
                className="text-4xl md:text-5xl font-bold mb-6 text-white"
                tabIndex={-1}
              >
                {t('services.title')}
              </h1>
              <div className="w-24 h-1 bg-primary-500 mx-auto mb-8" />
              <p className="text-lg text-gray-300">
                {t('services.subtitle')}
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {(t('services.services', { returnObjects: true }) as Array<{ title: string; content: string }>).map((service, index) => {
              const isEven = index % 2 === 0;
              const gradientClass = isEven
                ? "bg-gradient-to-br from-primary-900/40 to-primary-900/80 hover:from-primary-900/30 hover:to-primary-900/70"
                : "bg-gradient-to-tr from-primary-900/40 to-primary-900/80 hover:from-primary-900/30 hover:to-primary-900/70";
              
              return (
                <div
                  key={index}
                  className={`rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${gradientClass} backdrop-blur-sm border border-primary-700/30 overflow-hidden`}
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center mr-4 bg-primary-800/50 text-primary-300 hover:scale-110 transition-transform duration-200 flex-shrink-0"
                      >
                        {getServiceIcon(index)}
                      </div>
                      <div className="flex items-center">
                        <h3 className="text-xl font-bold text-[#4f83cc] leading-tight">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="mt-4 text-gray-200">
                      <p className="leading-relaxed">{service.content}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="container mt-20">
          <div className="bg-primary-800/50 backdrop-blur-md rounded-2xl p-8 md:p-12 lg:p-16 relative overflow-hidden border border-primary-700/50 max-w-5xl mx-auto">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-400 rounded-full opacity-20 transform translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-500 rounded-full opacity-20 transform -translate-x-1/3 translate-y-1/3"></div>
            
            <div className="max-w-3xl mx-auto text-center relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {t('services.cta.title')}
              </h2>
              
              <p className="text-lg text-primary-100 mb-8">
                {t('services.cta.description')}
              </p>
              
              <motion.div>
                <Link 
                  to="/contact" 
                  className="btn btn-primary inline-flex items-center justify-center px-6 py-3 text-base font-medium transition-all duration-300 rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('services.cta.button')}
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;