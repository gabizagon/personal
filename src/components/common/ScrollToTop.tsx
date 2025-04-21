import React from 'react';
import { ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';

const ScrollToTop: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      whileHover={{ scale: 1.1 }}
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 bg-primary-600 text-white rounded-full p-3 shadow-lg z-30 focus:outline-none focus:ring-2 focus:ring-primary-400"
      aria-label="Scroll to top"
    >
      <ChevronUp size={24} />
    </motion.button>
  );
};

export default ScrollToTop;