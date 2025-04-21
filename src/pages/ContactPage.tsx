import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import ContactForm from '../components/ui/ContactForm';

const ContactPage: React.FC = () => {
  const { t } = useTranslation();
  const pageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (pageRef.current) {
      pageRef.current.focus();
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>{t('contact.title')} | APS-MS</title>
        <meta name="description" content={t('meta.description')} />
      </Helmet>

      <motion.div
        ref={pageRef}
        tabIndex={-1}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-28 pb-16"
      >
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">{t('contact.title')}</h1>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-300">
              {t('contact.subtitle')}
            </p>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-20"
          >
            <ContactForm />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default ContactPage;