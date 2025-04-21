import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = t('home.testimonials.items', { returnObjects: true }) as Array<{
    content: string;
    author: string;
    position: string;
  }>;

  // Get company names based on current language
  const getCompanyName = (index: number): string => {
    if (index === 0) {
      return "Aquaserv";
    } else if (index === 1) {
      return "Maurer Imobiliare";
    } else if (index === 2) {
      return "DAW Bența";
    }
    return "";
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Translate button labels based on language
  const getPrevButtonLabel = () => {
    if (i18n.language === 'en') return "Previous testimonial";
    if (i18n.language === 'hu') return "Előző vélemény";
    return "Mărturia anterioară";
  };

  const getNextButtonLabel = () => {
    if (i18n.language === 'en') return "Next testimonial";
    if (i18n.language === 'hu') return "Következő vélemény";
    return "Mărturia următoare";
  };

  const getDotLabel = (index: number) => {
    if (i18n.language === 'en') return `Go to testimonial ${index + 1}`;
    if (i18n.language === 'hu') return `Ugrás a ${index + 1}. véleményhez`;
    return `Mergi la mărturia ${index + 1}`;
  };

  return (
    <section className="section text-white relative pt-0 mt-0 z-10">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="section-title text-white">{t('home.testimonials.title')}</h2>
          <p className="text-primary-200 max-w-3xl mx-auto">{t('home.testimonials.subtitle')}</p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute -top-10 left-0 opacity-20">
            <Quote size={80} className="text-primary-300" />
          </div>

          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center p-4 md:p-8"
          >
            <p className="text-xl md:text-2xl mb-8 text-primary-100 italic relative z-10">
              "{testimonials[activeIndex].content}"
            </p>
            <div className="mb-6">
              <p className="text-xl md:text-2xl text-primary-100 italic">
                {getCompanyName(activeIndex)}
              </p>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center space-x-4 mt-8">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-primary-700 hover:bg-primary-600 text-white transition-colors"
              aria-label={getPrevButtonLabel()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full ${
                    index === activeIndex ? 'bg-white' : 'bg-primary-400'
                  }`}
                  aria-label={getDotLabel(index)}
                />
              ))}
            </div>
            
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-primary-700 hover:bg-primary-600 text-white transition-colors"
              aria-label={getNextButtonLabel()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;