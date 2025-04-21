import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CTASection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 relative overflow-hidden mt-0 pt-0 z-10">
      <div className="container relative z-10">
        <div className="bg-primary-800/50 backdrop-blur-md rounded-2xl p-8 md:p-12 lg:p-16 relative overflow-hidden border border-primary-700/50">
          {/* Background decor elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-400 rounded-full opacity-20 transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-500 rounded-full opacity-20 transform -translate-x-1/3 translate-y-1/3"></div>
          
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              {t('home.cta.title')}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-primary-100 mb-8"
            >
              {t('home.cta.description')}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link 
                to="/contact" 
                className="btn bg-white text-primary-700 hover:bg-primary-50 px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {t('home.cta.button')}
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;