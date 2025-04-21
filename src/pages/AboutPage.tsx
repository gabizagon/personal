import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Info, CheckCircle, Award, Shield, Clock, Target, Star, Zap, Lock, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('about.title')} | APS-MS</title>
        <meta name="description" content={t('about.subtitle')} />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="relative pt-24 pb-16"
      >
        {/* Hero Section */}
        <div className="relative z-10 mb-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold mb-6 text-white"
              >
                {t('about.title')}
              </motion.h1>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="w-24 h-1 bg-primary-500 mx-auto mb-8"
              />
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-lg text-gray-300"
              >
                {t('about.subtitle')}
              </motion.p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cine suntem section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="bg-primary-900/30 backdrop-blur-sm rounded-lg p-6 border border-primary-700/30 shadow-lg"
            >
              <div className="flex flex-col items-center mb-6">
                <motion.div 
                  className="w-16 h-16 rounded-full flex items-center justify-center text-primary-300 mb-5 transition-all duration-300"
                  style={{ backgroundColor: "#2A4B8C" }}
                  whileHover={{ 
                    y: -5, 
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <Info size={26} />
                  </motion.div>
                </motion.div>
                <h2 className="text-2xl font-bold text-white text-center">{t('about.whoWeAre.title')}</h2>
              </div>
              
              <div className="space-y-4 text-gray-300">
                {(t('about.whoWeAre.content', { returnObjects: true }) as string[]).map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
            
            {/* Principiile care ne definesc section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-primary-900/30 backdrop-blur-sm rounded-lg p-6 border border-primary-700/30 shadow-lg"
            >
              <div className="flex flex-col items-center mb-6">
                <motion.div 
                  className="w-16 h-16 rounded-full flex items-center justify-center text-primary-300 mb-5 transition-all duration-300"
                  style={{ backgroundColor: "#2A4B8C" }}
                  whileHover={{ 
                    y: -5, 
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <Shield size={26} />
                  </motion.div>
                </motion.div>
                <h2 className="text-2xl font-bold text-white text-center">{t('about.principles.title')}</h2>
              </div>
              
              <div className="space-y-6 text-gray-300">
                {(t('about.principles.items', { returnObjects: true }) as Array<{title: string, content: string}>).map((item, index) => (
                  <div key={index} className="p-4 rounded-lg bg-primary-800/50 border border-primary-700/40">
                    <div className="flex items-start">
                      <div className="w-10 h-10 flex-shrink-0 mr-3 rounded-full bg-blue-500/20 flex items-center justify-center transform transition-all duration-200 group-hover:scale-110">
                        {index === 0 && <Zap size={24} className="text-blue-400" />}
                        {index === 1 && <Shield size={24} className="text-purple-400" />}
                        {index === 2 && <Lock size={24} className="text-cyan-400" />}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                        <p>{item.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* Experiența care ne recomandă section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-primary-900/30 backdrop-blur-sm rounded-lg p-6 border border-primary-700/30 shadow-lg"
            >
              <div className="flex flex-col items-center mb-6">
                <motion.div 
                  className="w-16 h-16 rounded-full flex items-center justify-center text-primary-300 mb-5 transition-all duration-300"
                  style={{ backgroundColor: "#2A4B8C" }}
                  whileHover={{ 
                    y: -5, 
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <Award size={26} />
                  </motion.div>
                </motion.div>
                <h2 className="text-2xl font-bold text-white text-center">{t('about.experience.title')}</h2>
              </div>
              
              <div className="space-y-4 text-gray-300">
                {(t('about.experience.items', { returnObjects: true }) as string[]).map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-primary-700/30 text-primary-300 mr-3 flex-shrink-0 mt-0.5">
                      <CheckCircle size={16} />
                    </div>
                    <p>{item}</p>
                  </div>
                ))}
                
                {/* Experience indicators */}
                <div className="mt-8 pt-6 border-t border-primary-800/50">
                  <div className="space-y-4">
                    {(t('about.experience.stats', { returnObjects: true }) as Array<{label: string, value: string, percentage: string}>).map((stat, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1 text-sm">
                          <span>{stat.label}</span>
                          <span className="text-primary-300">{stat.value}</span>
                        </div>
                        <div className="w-full bg-primary-800/70 rounded-full h-2">
                          <motion.div 
                            className="bg-gradient-to-r from-primary-500 to-primary-400 h-2 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: stat.percentage }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Team section - could be expanded later */}
        <div className="container mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-8"
          >
            <h2 className="text-3xl font-bold text-white mb-4">{t('about.team.title')}</h2>
            <p className="text-gray-300">
              {t('about.team.subtitle')}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-primary-900/30 backdrop-blur-sm rounded-lg p-8 border border-primary-700/30 shadow-lg text-center max-w-2xl mx-auto"
          >
            <p className="text-gray-300 italic">
              "{t('about.team.quote')}"
            </p>
            <div className="mt-4">
              <p className="text-white font-semibold">Alpha Partner Security</p>
            </div>
          </motion.div>
        </div>
        
        {/* CTA section */}
        <div className="container mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-primary-800/50 backdrop-blur-md rounded-2xl p-8 md:p-12 lg:p-16 relative overflow-hidden border border-primary-700/50 max-w-5xl mx-auto"
          >
            {/* Background decor elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-400 rounded-full opacity-20 transform translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-500 rounded-full opacity-20 transform -translate-x-1/3 translate-y-1/3"></div>
            
            <div className="max-w-3xl mx-auto text-center relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {t('about.cta.title')}
              </h2>
              
              <p className="text-lg text-primary-100 mb-8">
                {t('about.cta.description')}
              </p>
              
              <Link 
                to="/contact" 
                className="btn btn-primary inline-flex items-center justify-center px-6 py-3 text-base font-medium transition-all duration-300 rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('about.cta.button')}
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default AboutPage;