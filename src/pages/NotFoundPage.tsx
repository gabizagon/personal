import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | APS-MS</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        className="min-h-screen flex items-center justify-center px-4 py-24"
      >
        <div className="text-center max-w-lg">
          <h1 className="text-9xl font-bold text-gray-200">404</h1>
          <h2 className="text-4xl font-bold mt-8 mb-4">Page Not Found</h2>
          <p className="text-lg text-gray-600 mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link
            to="/"
            className="btn btn-primary inline-flex items-center"
          >
            <Home className="mr-2" size={20} />
            {t('navigation.home')}
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default NotFoundPage;