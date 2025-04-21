import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { MapPin, Phone, Mail, Facebook, Clock, Shield, FileText } from 'lucide-react';
import Logo from '../common/Logo';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);

  // For typewriter effect with appropriate translation
  const getTooltipText = () => {
    if (t('language') === 'en') return "Follow us on Facebook";
    if (t('language') === 'hu') return "Kövessen minket a Facebookon";
    return "Urmărește-ne pe Facebook";
  };

  const tooltipText = getTooltipText();
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);

  // Get working hours based on language
  const getWorkingHours = () => {
    if (t('language') === 'en') return "Monday - Friday\n08:00-17:00";
    if (t('language') === 'hu') return "Hétfő - Péntek\n08:00-17:00";
    return "Luni - Vineri\n08:00-17:00";
  };

  // Typewriter effect for the tooltip
  useEffect(() => {
    if (isHovered && textIndex < tooltipText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + tooltipText[textIndex]);
        setTextIndex(prev => prev + 1);
      }, 50); // Speed of typing
      
      return () => clearTimeout(timer);
    } else if (!isHovered) {
      setDisplayedText("");
      setTextIndex(0);
    }
  }, [isHovered, textIndex, tooltipText]);

  return (
    <footer className="relative text-gray-200 z-20">
      <div className="container py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mx-auto max-w-4xl">
          {/* Column 1: Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.links.title')}</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="mr-2 text-primary-500">›</span>
                  {t('navigation.home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="mr-2 text-primary-500">›</span>
                  {t('navigation.about')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="mr-2 text-primary-500">›</span>
                  {t('navigation.services')}
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="mr-2 text-primary-500">›</span>
                  {t('navigation.projects')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <span className="mr-2 text-primary-500">›</span>
                  {t('navigation.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.links.title')}</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <Shield size={16} className="mr-2 text-primary-500" />
                  {t('footer.links.privacy')}
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <FileText size={16} className="mr-2 text-primary-500" />
                  {t('footer.links.terms')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contact.title')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0 text-primary-500" />
                <span className="text-gray-400">{t('footer.contact.address')}</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0 text-primary-500" />
                <a href="tel:+40731021379" className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.contact.phone')}
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0 text-primary-500" />
                <a href="mailto:contact@aps-ms.ro" className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.contact.email')}
                </a>
              </li>
              <li className="flex items-start">
                <Clock size={20} className="mr-2 mt-1 flex-shrink-0 text-primary-500" />
                <span className="text-gray-400 whitespace-pre-line">{getWorkingHours()}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright - Centered */}
      <div className="border-t border-gray-800">
        <div className="container py-6 flex justify-center items-center">
          <p className="text-gray-500 text-sm">
            {t('footer.copyright')}
          </p>
        </div>
      </div>

      {/* Enhanced Facebook Icon - Fixed Position */}
      <div className="fixed left-12 bottom-12 z-50">
        <div className="relative" 
             onMouseEnter={() => setIsHovered(true)} 
             onMouseLeave={() => setIsHovered(false)}>
          
          {/* Tooltip with typewriter effect */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white px-4 py-2 rounded-full shadow-lg text-sm font-medium whitespace-nowrap"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
              >
                {displayedText}
                <span className="inline-block w-0.5 h-4 ml-0.5 bg-white animate-blink"></span>
                <div className="absolute w-3 h-3 bg-primary-600 transform rotate-45 -bottom-1 left-1/2 -translate-x-1/2"></div>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Facebook Icon with animations */}
          <motion.a
            href="https://www.facebook.com/FirmaDePazaMures?ref=embed_page"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center rounded-full bg-primary-600 text-white w-14 h-14 shadow-lg facebook-icon"
            style={{ boxShadow: '0 4px 14px rgba(57, 73, 171, 0.5)' }}
            whileHover={{ 
              scale: 1.15,
              boxShadow: '0 8px 30px rgba(57, 73, 171, 0.7)' 
            }}
            animate={{ 
              scale: isHovered ? 1.15 : [1, 1.05, 1],
              boxShadow: isHovered 
                ? '0 8px 30px rgba(57, 73, 171, 0.7)'
                : ['0 4px 14px rgba(57, 73, 171, 0.3)', '0 4px 14px rgba(57, 73, 171, 0.6)', '0 4px 14px rgba(57, 73, 171, 0.3)']
            }}
            transition={{ 
              scale: { 
                duration: isHovered ? 0.2 : 2,
                repeat: isHovered ? 0 : Infinity,
                ease: "easeInOut" 
              },
              boxShadow: { 
                duration: isHovered ? 0.2 : 2,
                repeat: isHovered ? 0 : Infinity,
                ease: "easeInOut" 
              }
            }}
            aria-label="Facebook"
          >
            <Facebook size={28} className="facebook-icon" />
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;