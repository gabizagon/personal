import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { InteractiveRomaniaMap } from '../ui/interactive-romania-map';

const MapSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="section relative overflow-hidden z-10 py-16 mt-0 pt-0">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            {t('map.title')}
          </h2>
          <p className="text-lg text-primary-300 font-medium">
            {t('map.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-xl overflow-hidden shadow-xl backdrop-blur-sm border border-primary-700/30"
        >
          <InteractiveRomaniaMap />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-gray-300">
            {t('contact.location.address')}
          </p>
          <p className="text-gray-400 mt-2">
            <a 
              href="https://maps.google.com/?q=Strada+Bradului+200,+Sâncraiu+de+Mureș,+Mureș,+România" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-300 hover:text-primary-200 transition-colors"
            >
              {t('contact.location.mapLink')}
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MapSection;