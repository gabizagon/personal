import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProjectsCarousel from '../components/ui/projects-carousel';

const ProjectsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('projects.title')} | APS-MS</title>
        <meta name="description" content={t('projects.subtitle')} />
      </Helmet>

      <motion.div
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">{t('projects.title')}</h1>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-300">
              {t('projects.subtitle')}
            </p>
          </motion.div>
        </div>

        {/* Projects Carousel Section */}
        <ProjectsCarousel />

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
                {t('projects.cta.title')}
              </h2>
              
              <p className="text-lg text-primary-100 mb-8">
                {t('projects.cta.description')}
              </p>
              
              <motion.div>
                <Link 
                  to="/contact" 
                  className="btn btn-primary inline-flex items-center justify-center px-6 py-3 text-base font-medium transition-all duration-300 rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('projects.cta.button')}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectsPage;