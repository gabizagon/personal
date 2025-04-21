import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Shield, Camera, Settings, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Marquee } from '../ui/marquee'; 

interface ServicesSectionProps {
  showCarousel?: boolean;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ showCarousel = true }) => {
  const { t } = useTranslation();

  // Services for home page carousel only
  const services = [
    {
      icon: Shield,
      title: t('home.services.items.0.title'),
      description: t('home.services.items.0.description'),
      link: '/services#personal-security',
    },
    {
      icon: Camera,
      title: t('home.services.items.1.title'),
      description: t('home.services.items.1.description'),
      link: '/services#security-systems',
    },
    {
      icon: Settings,
      title: t('home.services.items.2.title'),
      description: t('home.services.items.2.description'),
      link: '/services#maintenance',
    },
    {
      icon: Lock,
      title: t('home.services.items.3.title'),
      description: t('home.services.items.3.description'),
      link: '/services#access-control',
    }
  ];

  if (!showCarousel) {
    return null;
  }

  return (
    <section className="section pt-0 mt-0 relative z-10">
      <div className="container pt-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="section-title text-white">{t('home.services.title')}</h2>
          <p className="section-subtitle text-gray-300">{t('home.services.subtitle')}</p>
        </motion.div>

        <Marquee 
          pauseOnHover={true} 
          speed={60} 
          className="mb-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={`service-card-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-primary-900/30 backdrop-blur-sm rounded-lg shadow-lg border border-primary-700/30 p-6 flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-2 transform-gpu will-change-transform mx-4"
              style={{ minHeight: '320px', width: '300px' }}
            >
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-primary-700/60 text-primary-300 transition-all duration-300 hover:scale-110 group">
                <service.icon 
                  size={32} 
                  className="transition-all duration-300 group-hover:scale-120 group-hover:filter drop-shadow-lg"
                />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-300 mb-4 flex-grow">{service.description}</p>
              <div className="mt-auto pt-4">
                <Link
                  to={service.link}
                  className="inline-flex items-center text-primary-300 hover:text-primary-200 hover:scale-110 font-medium transition-all duration-300 transform-gpu"
                >
                  {t('buttons.learnMore')}
                  <svg className="ml-1 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </Marquee>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link to="/services" className="btn btn-primary">
            {t('buttons.learnMore')}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;