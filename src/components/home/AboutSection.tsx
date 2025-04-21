import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const AboutSection: React.FC = () => {
  const { t, i18n } = useTranslation();

  // Array of features for different languages
  const getFeatures = () => {
    if (i18n.language === 'en') {
      return ['Extensive experience', 'Professional team', 'Guaranteed quality', 'Comprehensive services'];
    } else if (i18n.language === 'hu') {
      return ['Kiterjedt tapasztalat', 'Professzionális csapat', 'Garantált minőség', 'Átfogó szolgáltatások'];
    } else {
      return ['Experiență vastă', 'Echipă de profesioniști', 'Calitate garantată', 'Servicii complete'];
    }
  };

  const features = getFeatures();
  const stats = t('home.about.stats', { returnObjects: true }) as Array<{ value: string; label: string }>;

  return (
    <section className="section relative overflow-hidden pt-0 mt-0 z-10">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              {t('home.about.title')}
            </h2>
            <p className="text-lg text-primary-300 font-medium mb-6">
              {i18n.language === 'en' ? 'With over 10 years of experience in the security field' :
               i18n.language === 'hu' ? 'Több mint 10 éves biztonsági tapasztalattal' :
               'Cu peste 10 ani de experiență în domeniul securității'}
            </p>
            <p className="text-gray-300 mb-8">
              {t('home.about.description')}
            </p>

            <div className="space-y-4 mb-8">
              {features.map(
                (item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="text-primary-300 mr-2 mt-1 flex-shrink-0" size={18} />
                    <p className="text-gray-300">{item}</p>
                  </div>
                )
              )}
            </div>

            <Link to="/about" className="btn btn-primary">
              {t('buttons.learnMore')}
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {/* About images with uniform 1:1 aspect ratio and symmetrical arrangement */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="rounded-lg overflow-hidden shadow-lg transform-gpu border border-primary-700/20 aspect-square"
              >
                <img
                  src="https://8fpa87ovv8.ufs.sh/f/m4AOA69vaiTFRMFNESo8hVY53PpfNSrangBjuGFMeH7KQAEw"
                  alt="Security Equipment"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-lg overflow-hidden shadow-lg transform-gpu border border-primary-700/20 aspect-square"
              >
                <img
                  src="https://8fpa87ovv8.ufs.sh/f/m4AOA69vaiTFhcDrPwtP0I8RxmfGQKD3VeEj7FvbBCYXd96l"
                  alt="Security Solution"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            </div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="rounded-lg overflow-hidden shadow-lg transform-gpu border border-primary-700/20 aspect-square"
              >
                <img
                  src="https://8fpa87ovv8.ufs.sh/f/m4AOA69vaiTFduSjmpRwkOQBFHVf0ltmuh8pevAWnz7s1yR9"
                  alt="Security System"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="rounded-lg overflow-hidden shadow-lg transform-gpu border border-primary-700/20 aspect-square"
              >
                <img
                  src="https://aps-ms.ro/wp-content/uploads/2020/10/Masina-interventie-Aps-JPG.jpg"
                  alt="APS Intervention Vehicle"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 my-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="stat-card text-center transform-gpu bg-primary-900/40 rounded-lg p-6 shadow-lg backdrop-blur-sm border border-primary-700/20 transition-all duration-300 ease-out hover:-translate-y-[10px] hover:shadow-xl hover:scale-[1.02]"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl lg:text-5xl font-bold text-primary-300 mb-2">{stat.value}</div>
                <p className="text-gray-300">{stat.label}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;