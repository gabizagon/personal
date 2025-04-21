import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Shield, Award, Clock, Users, Target, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhyChooseUsSection: React.FC = () => {
  const { t, i18n } = useTranslation();

  // Get the content based on the current language
  const getTitleText = () => {
    switch (i18n.language) {
      case 'en': return 'What is Alpha Partner Security?';
      case 'hu': return 'Mit jelent az Alpha Partner Security?';
      default: return 'Ce reprezintă Alpha Partner Security?';
    }
  };

  const getSubtitleText = () => {
    switch (i18n.language) {
      case 'en': return 'Professional security solutions tailored to your specific needs';
      case 'hu': return 'Az Ön igényeire szabott professzionális biztonsági megoldások';
      default: return 'Soluții profesionale de securitate adaptate nevoilor dumneavoastră specifice';
    }
  };

  const getWhyChooseUsText = () => {
    switch (i18n.language) {
      case 'en': 
        return 'APS-MS emphasizes quality, combined with an innovative and customer-oriented approach to security service provision. We use smart technologies and offer high security standards with a complete partnership where client discretion and confidentiality are supreme values.';
      case 'hu': 
        return 'Az APS-MS a minőséget helyezi előtérbe, innovatív és ügyfélközpontú szemlélettel a biztonsági szolgáltatások nyújtása terén. Intelligens technológiákat alkalmazunk és magas biztonsági standardokat kínálunk olyan teljes körű partnerségben, ahol az ügyfelek diszkréciója és titoktartása a legfontosabb értékek.';
      default: 
        return 'APS-MS pune accentul pe calitate, combinat cu o abordare inovatoare și orientată către client în ceea ce privește furnizarea de servicii de securitate. Folosim tehnologii smart și oferim standarde înalte de securitate cu un parteneriat complet în care discreția și confidențialitatea clienților sunt valorile supreme.';
    }
  };

  // Customizing feature items based on language
  const getFeatureItems = () => {
    if (i18n.language === 'en') {
      return [
        { icon: Star, text: 'Performance - Ensuring a high level of security and intervention services' },
        { icon: Target, text: 'Integrity - The key to excellent relationships developed with our clients' },
        { icon: Shield, text: 'Honesty - A complete partnership where discretion and confidentiality are supreme' }
      ];
    } else if (i18n.language === 'hu') {
      return [
        { icon: Star, text: 'Teljesítmény - Magas szintű biztonsági és beavatkozási szolgáltatások biztosítása' },
        { icon: Target, text: 'Integritás - Az ügyfeleinkkel kialakított kiváló kapcsolatok kulcsa' },
        { icon: Shield, text: 'Becsületesség - Teljes körű partnerség, ahol a diszkréció és a titoktartás a legfontosabb' }
      ];
    } else {
      return [
        { icon: Star, text: 'Performanță - Asigurarea unui nivel ridicat al prestației de pază și intervenție' },
        { icon: Target, text: 'Integritate - Cheia excelentelor relații dezvoltate cu clienții noștri' },
        { icon: Shield, text: 'Onestitate - Un parteneriat complet în care discreția și confidențialitatea sunt supreme' }
      ];
    }
  };

  const getExperienceItems = () => {
    if (i18n.language === 'en') {
      return [
        { text: 'Activity in the Security and Protection field - 6 years', value: '90%' },
        { text: 'Portfolio of satisfied clients', value: '95%' },
        { text: 'Variety of services offered', value: '85%' },
        { text: 'Coverage and promptness in interventions', value: '98%' },
        { text: 'Professionally certified employees', value: '100%' }
      ];
    } else if (i18n.language === 'hu') {
      return [
        { text: 'Biztonsági és védelmi területen folytatott tevékenység - 6 év', value: '90%' },
        { text: 'Elégedett ügyfelek portfóliója', value: '95%' },
        { text: 'Kínált szolgáltatások változatossága', value: '85%' },
        { text: 'Lefedettség és gyorsaság a beavatkozásokban', value: '98%' },
        { text: 'Szakmailag igazolt alkalmazottak', value: '100%' }
      ];
    } else {
      return [
        { text: 'Activitate în domeniul Pază și Protecție - 6 ani', value: '90%' },
        { text: 'Portofoliu cu clienți mulțumiți', value: '95%' },
        { text: 'Varietatea serviciilor oferite', value: '85%' },
        { text: 'Acoperire și promptitudine în intervenții', value: '98%' },
        { text: 'Angajați atestați din punct de vedere profesional', value: '100%' }
      ];
    }
  };

  // Partners with translation-aware names
  const partners = [
    { 
      name: 'Aquaserv', 
      logo: 'https://aps-ms.ro/wp-content/uploads/2020/02/Aquaserv.png', 
      width: 120 
    },
    { 
      name: 'Azomures', 
      logo: 'https://aps-ms.ro/wp-content/uploads/2020/02/Azomures.png', 
      width: 140 
    },
    { 
      name: 'Daw Benta', 
      logo: 'https://aps-ms.ro/wp-content/uploads/2020/02/DAW.png', 
      width: 100 
    },
    { 
      name: 'Bertis', 
      logo: 'https://aps-ms.ro/wp-content/uploads/2020/02/Herlitz.png', 
      width: 130 
    },
    { 
      name: 'Maurer Imobiliare', 
      logo: 'https://aps-ms.ro/wp-content/uploads/2020/02/Maurer.png', 
      width: 150 
    },
    { 
      name: 'Socot', 
      logo: 'https://aps-ms.ro/wp-content/uploads/2020/02/Socot.png', 
      width: 120 
    },
  ];

  const features = [
    {
      title: i18n.language === 'en' ? 'Why choose us' : (i18n.language === 'hu' ? 'Miért válasszon minket' : 'De ce să ne alegeți'),
      icon: Shield,
      iconColor: '#3949ab',
      description: getWhyChooseUsText(),
      items: []
    },
    {
      title: i18n.language === 'en' ? 'What we offer' : (i18n.language === 'hu' ? 'Mit kínálunk' : 'Ce oferim'),
      icon: Award,
      iconColor: '#43a047',
      description: i18n.language === 'en' 
        ? 'Complete security services tailored to your needs:' 
        : (i18n.language === 'hu' 
          ? 'Az Ön igényeire szabott teljes körű biztonsági szolgáltatások:' 
          : 'Servicii complete de securitate adaptate nevoilor dumneavoastră:'),
      items: getFeatureItems()
    },
    {
      title: i18n.language === 'en' ? 'Our experience' : (i18n.language === 'hu' ? 'Tapasztalatunk' : 'Experiența noastră'),
      icon: Clock,
      iconColor: '#e53935',
      description: i18n.language === 'en' 
        ? 'We have proven results and extensive experience in the security sector:' 
        : (i18n.language === 'hu' 
          ? 'Bizonyított eredményekkel és széleskörű tapasztalattal rendelkezünk a biztonsági szektorban:' 
          : 'Avem rezultate dovedite și experiență vastă în sectorul de securitate:'),
      items: getExperienceItems()
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const learnMoreText = i18n.language === 'en' ? 'Learn more' : (i18n.language === 'hu' ? 'Tudjon meg többet' : 'Află mai multe');
  const ourPartnersText = i18n.language === 'en' ? 'Our partners' : (i18n.language === 'hu' ? 'Partnereink' : 'Partenerii noștri');
  const collaborateText = i18n.language === 'en' 
    ? 'We collaborate with top organizations across various industries' 
    : (i18n.language === 'hu' 
      ? 'Együttműködünk a különböző iparágak vezető szervezeteivel' 
      : 'Colaborăm cu organizațiile de top din diverse industrii');

  return (
    <section className="section py-16 relative z-10">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{getTitleText()}</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-gray-300">{getSubtitleText()}</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-primary-900/30 backdrop-blur-sm rounded-lg shadow-lg border border-primary-700/30 p-6 flex flex-col h-full transition-all duration-300 hover:shadow-xl transform-gpu will-change-transform"
            >
              <div className="flex items-center mb-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                  style={{ backgroundColor: `${feature.iconColor}30` }}
                >
                  <feature.icon size={24} color={feature.iconColor} />
                </div>
                <h3 className="text-xl font-bold text-white">{feature.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-6">{feature.description}</p>
              
              {feature.items.length > 0 && (
                <div className="space-y-4 mt-auto">
                  {feature.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex">
                      {item.icon && (
                        <div className="mr-3 text-primary-400">
                          <item.icon size={18} />
                        </div>
                      )}
                      <div className="flex-1">
                        <p className="text-gray-300 text-sm mb-1">{item.text}</p>
                        {item.value && (
                          <div className="w-full bg-primary-900/50 rounded-full h-2.5 mt-1">
                            <motion.div 
                              className="h-2.5 rounded-full bg-gradient-to-r from-primary-600 to-primary-400"
                              initial={{ width: 0 }}
                              whileInView={{ width: item.value }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.2 + itemIndex * 0.1 }}
                            ></motion.div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {index === 0 && (
                <div className="mt-6 pt-4 border-t border-primary-700/30">
                  <Link
                    to="/about"
                    className="inline-flex items-center text-primary-300 hover:text-primary-200 font-medium transition-colors"
                  >
                    {learnMoreText}
                    <svg className="ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                  </Link>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Partners section */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-white mb-4">{ourPartnersText}</h3>
            <p className="text-gray-300">{collaborateText}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-8 items-center"
          >
            {partners.map((partner, index) => {
              // Color variants for each partner
              const getColorVariant = (partnerName) => {
                const colorVariants = {
                  'Aquaserv': {
                    bgColor: '#F0F8FF',
                    shadowColor: 'rgba(56, 189, 248, 0.3)',
                    borderHoverColor: 'rgba(56, 189, 248, 0.5)',
                    glowColor: 'rgba(56, 189, 248, 0.8)'
                  },
                  'Azomures': {
                    bgColor: '#F0F8FF',
                    shadowColor: 'rgba(59, 130, 246, 0.3)',
                    borderHoverColor: 'rgba(59, 130, 246, 0.5)',
                    glowColor: 'rgba(59, 130, 246, 0.8)'
                  },
                  'Daw Benta': {
                    bgColor: '#F0F8FF',
                    shadowColor: 'rgba(236, 72, 153, 0.3)',
                    borderHoverColor: 'rgba(236, 72, 153, 0.5)',
                    glowColor: 'rgba(236, 72, 153, 0.8)'
                  },
                  'Bertis': {
                    bgColor: '#F0F8FF',
                    shadowColor: 'rgba(139, 92, 246, 0.3)',
                    borderHoverColor: 'rgba(139, 92, 246, 0.5)',
                    glowColor: 'rgba(139, 92, 246, 0.8)'
                  },
                  'Maurer Imobiliare': {
                    bgColor: '#F0F8FF',
                    shadowColor: 'rgba(34, 197, 94, 0.3)',
                    borderHoverColor: 'rgba(34, 197, 94, 0.5)',
                    glowColor: 'rgba(34, 197, 94, 0.8)'
                  },
                  'Socot': {
                    bgColor: '#F0F8FF',
                    shadowColor: 'rgba(234, 179, 8, 0.3)',
                    borderHoverColor: 'rgba(234, 179, 8, 0.5)',
                    glowColor: 'rgba(234, 179, 8, 0.8)'
                  }
                };
                
                return colorVariants[partnerName] || colorVariants['Azomures'];
              };
              
              const colorVariant = getColorVariant(partner.name);
              
              // All partners now have actual logos with improved background colors
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="backdrop-blur-sm p-4 rounded-lg border border-primary-700/20 transition-all group"
                  style={{ 
                    backgroundColor: colorVariant.bgColor, 
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                    transition: 'all 0.2s ease-out'
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -15,
                    boxShadow: `0 15px 30px -5px ${colorVariant.glowColor}`,
                    borderColor: colorVariant.borderHoverColor,
                    transition: { duration: 0.2, ease: "easeOut" }
                  }}
                  animate={{ 
                    boxShadow: ['0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', 
                                `0 8px 15px -3px ${colorVariant.shadowColor}`, 
                                '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)']
                  }}
                  transition={{
                    boxShadow: {
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 2,
                    }
                  }}
                >
                  <div className="h-12 flex items-center justify-center overflow-hidden">
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} logo`} 
                      className="h-10 w-auto object-contain filter contrast-110 transition-all duration-200 transform group-hover:filter-none group-hover:brightness-110"
                      style={{ maxWidth: `${partner.width}px` }}
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://via.placeholder.com/${partner.width}x50/3949ab/ffffff?text=${partner.name}`;
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;