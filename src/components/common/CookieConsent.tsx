import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const CookieConsent: React.FC = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already consented
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      // Show the banner after a slight delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 p-4 md:p-6"
        >
          <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="mb-4 md:mb-0 pr-8">
              <p className="text-gray-800">{t('cookie.message')}</p>
              <a
                href="/privacy"
                className="text-primary-600 hover:underline text-sm mt-1 inline-block"
              >
                {t('cookie.learnMore')}
              </a>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={handleAccept}
                className="btn btn-primary px-4 py-2"
              >
                {t('cookie.accept')}
              </button>
              <button
                onClick={handleDecline}
                className="btn btn-secondary px-4 py-2"
              >
                {t('cookie.decline')}
              </button>
              <button
                onClick={handleClose}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close"
              >
                <X size={24} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;