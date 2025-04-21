import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from '../common/LanguageSwitcher';
import Logo from '../common/Logo';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { path: '/', label: t('navigation.home') },
    { path: '/about', label: t('navigation.about') },
    { path: '/services', label: t('navigation.services') },
    { path: '/projects', label: t('navigation.projects') },
    { path: '/contact', label: t('navigation.contact') },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary-950/90 backdrop-blur-sm shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="z-10 flex items-center" onClick={closeMenu}>
          <div className="h-10 flex items-center">
            <img 
              src="https://8fpa87ovv8.ufs.sh/f/m4AOA69vaiTFsMPtmr6dsbeSJzjiQPc8tWNgrR4UpL7OBHFf" 
              alt="APS-MS Logo" 
              className="h-10 w-auto mr-2"
            />
            <span className="font-heading text-xl font-bold text-white">APS-MS</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-base font-medium transition-all duration-300 font-heading ${
                  isActive
                    ? 'text-primary-300 border-b-2 border-primary-400'
                    : 'text-white hover:text-primary-300'
                }`
              }
              end={link.path === '/'}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Language Switcher and Quote Button */}
        <div className="hidden lg:flex items-center space-x-4">
          <LanguageSwitcher />
          <Link
            to="/contact"
            className="btn btn-primary"
          >
            {t('buttons.getQuote')}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden z-10 text-white p-2"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 lg:hidden bg-primary-950/95 z-40 flex flex-col"
            >
              <div className="container flex-grow flex flex-col items-center justify-center py-20">
                <nav className="flex flex-col items-center space-y-6 w-full">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      className={({ isActive }) =>
                        `text-xl font-medium w-full text-center py-2 font-heading ${
                          isActive ? 'text-primary-300' : 'text-white'
                        }`
                      }
                      onClick={closeMenu}
                      end={link.path === '/'}
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </nav>
                <div className="mt-10 flex flex-col items-center space-y-6">
                  <LanguageSwitcher />
                  <Link
                    to="/contact"
                    className="btn btn-primary w-full text-center"
                    onClick={closeMenu}
                  >
                    {t('buttons.getQuote')}
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

export default Header