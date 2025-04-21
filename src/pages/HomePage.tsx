import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

// Components
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import AboutSection from '../components/home/AboutSection';
import CTASection from '../components/home/CTASection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import WhyChooseUsSection from '../components/home/WhyChooseUsSection';

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
        <meta property="og:title" content={t('meta.title')} />
        <meta property="og:description" content={t('meta.description')} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://aps-ms.ro/" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
        <ServicesSection showCarousel={true} />
        <AboutSection />
        <TestimonialsSection />
        <CTASection />
        <WhyChooseUsSection />
      </motion.div>
    </>
  );
};

export default HomePage;