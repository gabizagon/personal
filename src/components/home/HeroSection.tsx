import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Camera, Lock, Bell, Phone, GitMerge, Users } from 'lucide-react';
import { Typed } from 'react-typed';

// Service icon types
interface ServiceIcon {
  icon: React.ElementType;
  name: string;
  color: string;
  position: { x: string; y: string; rotate: number };
}

const HeroSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const [isGlobeLoaded, setIsGlobeLoaded] = useState(false);
  const [typedLoaded, setTypedLoaded] = useState(false);
  const typedRef = useRef<HTMLSpanElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Get the typed strings based on the current language
  const getTypedStrings = () => {
    const currentLang = i18n.language;
    if (currentLang === 'en') {
      return ['Secure.', 'Monitor.', 'Control.'];
    } else if (currentLang === 'hu') {
      return ['Biztonság.', 'Felügyelet.', 'Irányítás.'];
    } else {
      return ['Securitate.', 'Monitorizare.', 'Control.'];
    }
  };

  // Get service names based on current language
  const getServiceNames = () => {
    const currentLang = i18n.language;
    if (currentLang === 'en') {
      return {
        alarm: 'Fire alarm systems',
        theft: 'Anti-theft solutions',
        cctv: 'CCTV video surveillance',
        access: 'Access control systems',
        voip: 'VoIP communication services',
        barriers: 'Auto barrier & gate automation',
        personnel: 'Human security personnel'
      };
    } else if (currentLang === 'hu') {
      return {
        alarm: 'Tűzjelző rendszerek',
        theft: 'Lopásgátló megoldások',
        cctv: 'CCTV videómegfigyelés',
        access: 'Beléptetőrendszerek',
        voip: 'VoIP kommunikációs szolgáltatások',
        barriers: 'Sorompó és kapuautomatizálás',
        personnel: 'Személyi biztonsági szolgálat'
      };
    } else {
      return {
        alarm: 'Sisteme de alarmă incendiu',
        theft: 'Soluții anti-efracție',
        cctv: 'Supraveghere video CCTV',
        access: 'Sisteme de control acces',
        voip: 'Servicii comunicații VoIP',
        barriers: 'Bariere auto & automatizări porți',
        personnel: 'Personal securitate umană'
      };
    }
  };

  // Define service icons with positions around the globe
  const serviceNames = getServiceNames();
  const serviceIcons: ServiceIcon[] = [
    { 
      icon: Bell, 
      name: serviceNames.alarm, 
      color: '#e74c3c',
      position: { x: '20%', y: '25%', rotate: -15 }
    },
    { 
      icon: Shield, 
      name: serviceNames.theft, 
      color: '#3498db',
      position: { x: '25%', y: '75%', rotate: 20 }
    },
    { 
      icon: Camera, 
      name: serviceNames.cctv, 
      color: '#2ecc71',
      position: { x: '80%', y: '20%', rotate: 15 }
    },
    { 
      icon: Lock, 
      name: serviceNames.access, 
      color: '#f39c12',
      position: { x: '75%', y: '70%', rotate: -10 }
    },
    { 
      icon: Phone, 
      name: serviceNames.voip, 
      color: '#9b59b6',
      position: { x: '35%', y: '15%', rotate: 5 }
    },
    { 
      icon: GitMerge, 
      name: serviceNames.barriers, 
      color: '#1abc9c',
      position: { x: '15%', y: '55%', rotate: -5 }
    },
    { 
      icon: Users, 
      name: serviceNames.personnel, 
      color: '#e67e22',
      position: { x: '65%', y: '85%', rotate: 0 }
    },
  ];

  useEffect(() => {
    // Simulate globe loading
    const timer = setTimeout(() => {
      setIsGlobeLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Initialize Typed component after the component is mounted or language changes
  useEffect(() => {
    if (typedRef.current) {
      // Clean up the previous Typed instance if it exists
      setTypedLoaded(false);
      
      // Create a new Typed instance with the correct language strings
      const typed = new Typed(typedRef.current, {
        strings: getTypedStrings(),
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|',
      });
      
      setTypedLoaded(true);
      
      // Clean up the Typed instance on component unmount
      return () => {
        typed.destroy();
      };
    }
  }, [i18n.language]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center py-20 overflow-hidden will-change-transform">
      <div className="container relative z-20">
        {/* Side-by-side layout: Text on left, Globe on right */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left side content - Text content with improved typography */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            {/* Typewriter text is now above the main title */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mb-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-wide text-primary-300">
                <span ref={typedRef} className="inline-block min-h-[50px]"></span>
              </h2>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              {t('home.hero.title')}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-white/90 mb-10"
            >
              {t('home.hero.subtitle')}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/contact" className="btn btn-primary text-white">
                {t('home.hero.cta')}
              </Link>
              <Link to="/services" className="btn btn-secondary">
                {t('buttons.learnMore')}
              </Link>
            </motion.div>
          </div>
          
          {/* Right side - Modern tech Globe with enhanced rotation and animations */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] will-change-transform"
            >
              {/* Enhanced Glowing Halo around the globe */}
              <motion.div 
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: "0 0 60px 10px rgba(57, 173, 255, 0.4)"
                }}
              />
              
              {/* 3D Globe with faster rotation - more tech-focused design */}
              <div className="relative w-full h-full will-change-transform overflow-hidden rounded-full">
                {/* Core globe with digital effect - Enhanced with silver-blue gradient */}
                <motion.div 
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-700/70 via-blue-500/50 to-primary-900/80"
                  animate={{ 
                    boxShadow: [
                      "0 0 40px 10px rgba(67, 143, 230, 0.4)", 
                      "0 0 80px 20px rgba(67, 143, 230, 0.5)", 
                      "0 0 40px 10px rgba(67, 143, 230, 0.4)"
                    ]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                />
                
                {/* Digital circuit pattern overlay - Enhanced with brighter lines */}
                <div className="absolute inset-0 rounded-full overflow-hidden opacity-25">
                  <motion.div
                    animate={{
                      opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    <svg width="100%" height="100%" viewBox="0 0 200 200">
                      <pattern id="circuitPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M0,20 L40,20 M20,0 L20,40 M10,10 L30,30 M30,10 L10,30" stroke="#a1c4fd" strokeWidth="0.7" fill="none" />
                        <circle cx="20" cy="20" r="2" fill="#a1c4fd" />
                        <circle cx="0" cy="20" r="2" fill="#a1c4fd" />
                        <circle cx="40" cy="20" r="2" fill="#a1c4fd" />
                        <circle cx="20" cy="0" r="2" fill="#a1c4fd" />
                        <circle cx="20" cy="40" r="2" fill="#a1c4fd" />
                      </pattern>
                      <circle cx="100" cy="100" r="100" fill="url(#circuitPattern)" />
                    </svg>
                  </motion.div>
                </div>
                
                {/* Hexagon grid overlay - Enhanced with pulsing effect */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <motion.div 
                    className="absolute inset-0 opacity-15"
                    animate={{ opacity: [0.15, 0.3, 0.15] }}
                    transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
                  >
                    <svg width="100%" height="100%" viewBox="0 0 100 100">
                      <pattern id="hexGrid" width="10" height="17.32" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
                        <path d="M5,0 L10,8.66 L5,17.32 L0,8.66Z" fill="none" stroke="#91cbff" strokeWidth="0.5" />
                      </pattern>
                      <circle cx="50" cy="50" r="50" fill="url(#hexGrid)" />
                    </svg>
                  </motion.div>
                </div>
                
                {/* Longitude/latitude grid lines - More defined with pulsing */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <motion.div 
                    className="absolute inset-0"
                    animate={{ opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 6, repeat: Infinity }}
                  >
                    {Array.from({ length: 12 }).map((_, i) => (
                      <motion.div 
                        key={`h-line-${i}`} 
                        className="absolute w-full h-[0.7px] bg-blue-300" 
                        style={{ top: `${i * 8.33}%` }}
                        animate={{ opacity: [0.4, 0.8, 0.4] }}
                        transition={{ 
                          duration: 4, 
                          delay: i * 0.2, 
                          repeat: Infinity,
                          repeatType: "reverse" 
                        }}
                      />
                    ))}
                    {Array.from({ length: 12 }).map((_, i) => (
                      <motion.div 
                        key={`v-line-${i}`} 
                        className="absolute h-full w-[0.7px] bg-blue-300" 
                        style={{ left: `${i * 8.33}%` }}
                        animate={{ opacity: [0.4, 0.8, 0.4] }}
                        transition={{ 
                          duration: 4, 
                          delay: i * 0.2 + 2, 
                          repeat: Infinity,
                          repeatType: "reverse" 
                        }}
                      />
                    ))}
                  </motion.div>
                </div>
                
                {/* Data visualization dots on the globe surface - Enhanced size and animation */}
                <motion.div 
                  className="absolute inset-0 rounded-full will-change-transform"
                  animate={{ rotateX: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
                >
                  {isGlobeLoaded && (
                    <div className="absolute inset-0 overflow-hidden rounded-full" style={{ transformStyle: 'preserve-3d', perspective: 1000 }}>
                      {Array.from({ length: 40 }).map((_, i) => (
                        <motion.div
                          key={`dot-${i}`}
                          className="absolute rounded-full"
                          initial={{ opacity: 0 }}
                          animate={{ 
                            opacity: [0.3, 0.9, 0.3],
                            width: [(1 + Math.random() * 1), (1.5 + Math.random() * 1.5), (1 + Math.random() * 1)],
                            height: [(1 + Math.random() * 1), (1.5 + Math.random() * 1.5), (1 + Math.random() * 1)]
                          }}
                          transition={{ 
                            duration: 2 + Math.random() * 3, 
                            delay: i * 0.05, 
                            repeat: Infinity,
                            repeatType: "reverse"
                          }}
                          style={{
                            top: `${10 + Math.random() * 80}%`,
                            left: `${10 + Math.random() * 80}%`,
                            background: `rgba(${144 + Math.random() * 100}, ${206 + Math.random() * 49}, ${255}, ${0.7 + Math.random() * 0.3})`,
                            boxShadow: '0 0 3px 1px rgba(147, 197, 253, 0.5)',
                            filter: 'blur(0.3px)',
                            willChange: 'transform, opacity'
                          }}
                        />
                      ))}
                    </div>
                  )}
                </motion.div>
                
                {/* Tech-inspired orbital rings - Enhanced with smoother animation and glow */}
                <motion.div 
                  className="absolute inset-0 rounded-full border-2 border-blue-400/40 will-change-transform"
                  style={{ 
                    boxShadow: '0 0 15px 2px rgba(96, 165, 250, 0.2) inset, 0 0 5px 1px rgba(96, 165, 250, 0.3)',
                    transformStyle: 'preserve-3d', 
                    perspective: 1000 
                  }}
                  animate={{ rotateX: 360, rotateY: 180, rotateZ: -90 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
                
                <motion.div 
                  className="absolute inset-8 rounded-full border border-blue-300/30 will-change-transform"
                  style={{ 
                    boxShadow: '0 0 10px 1px rgba(147, 197, 253, 0.25) inset', 
                    transformStyle: 'preserve-3d', 
                    perspective: 1000 
                  }}
                  animate={{ rotateX: 360, rotateZ: 45 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  {/* Add small nodes on this ring with enhanced glow */}
                  {Array.from({ length: 8 }).map((_, i) => (
                    <motion.div
                      key={`node-${i}`}
                      className="absolute w-2 h-2 bg-blue-300 rounded-full"
                      style={{ 
                        transform: `rotate(${i * 45}deg) translateX(calc(50% - 1px))`,
                        transformOrigin: 'center',
                        boxShadow: '0 0 8px 2px rgba(147, 197, 253, 0.6)',
                        willChange: 'transform, opacity'
                      }}
                      animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0.8, 1, 0.8]
                      }}
                      transition={{ 
                        duration: 3,
                        delay: i * 0.4,
                        repeat: Infinity,
                        repeatType: "reverse"  
                      }}
                    />
                  ))}
                </motion.div>
                
                <motion.div 
                  className="absolute inset-16 rounded-full border border-blue-400/25 will-change-transform"
                  style={{ 
                    boxShadow: '0 0 8px 1px rgba(96, 165, 250, 0.2) inset',
                    transformStyle: 'preserve-3d', 
                    perspective: 1000 
                  }}
                  animate={{ rotateX: 360, rotateY: -180 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Contained Electrical Cross Pattern */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  {/* Vertical Line (North-South) */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[2px] bg-gradient-to-b from-blue-400/0 via-blue-400/80 to-blue-400/0 will-change-transform"
                    style={{ 
                      height: '98%',
                      boxShadow: '0 0 8px 2px rgba(56, 189, 248, 0.6)',
                      filter: 'blur(0.5px)'
                    }}
                    animate={{ 
                      opacity: [0.7, 1, 0.7],
                      height: ['95%', '98%', '95%'],
                      boxShadow: [
                        '0 0 5px 1px rgba(56, 189, 248, 0.4)',
                        '0 0 10px 2px rgba(56, 189, 248, 0.8)',
                        '0 0 5px 1px rgba(56, 189, 248, 0.4)'
                      ]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Horizontal Line (East-West) */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-blue-400/0 via-blue-400/80 to-blue-400/0 will-change-transform"
                    style={{ 
                      width: '98%',
                      boxShadow: '0 0 8px 2px rgba(56, 189, 248, 0.6)',
                      filter: 'blur(0.5px)'
                    }}
                    animate={{ 
                      opacity: [0.7, 1, 0.7],
                      width: ['95%', '98%', '95%'],
                      boxShadow: [
                        '0 0 5px 1px rgba(56, 189, 248, 0.4)',
                        '0 0 10px 2px rgba(56, 189, 248, 0.8)',
                        '0 0 5px 1px rgba(56, 189, 248, 0.4)'
                      ]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Pulsing electrical nodes along the cross lines - contained within the circle */}
                  {/* Vertical (North-South) nodes */}
                  {Array.from({ length: 6 }).map((_, i) => {
                    const distanceFromCenter = i < 3 
                      ? 0.15 + (i * 0.15)  // North side - 15%, 30%, 45% from center
                      : 0.15 + ((i-3) * 0.15);  // South side - 15%, 30%, 45% from center
                    
                    const position = i < 3 
                      ? { top: `${50 - (distanceFromCenter * 100)}%`, left: '50%' }  // North side
                      : { top: `${50 + (distanceFromCenter * 100)}%`, left: '50%' };  // South side
                    
                    return (
                      <motion.div
                        key={`v-node-${i}`}
                        className="absolute w-1.5 h-1.5 bg-blue-300 rounded-full transform -translate-x-1/2 -translate-y-1/2 will-change-transform"
                        style={{
                          ...position,
                          boxShadow: '0 0 6px 2px rgba(56, 189, 248, 0.6)',
                        }}
                        animate={{
                          opacity: [0, 1, 0],
                          scale: [0.8, 1.2, 0.8],
                          boxShadow: [
                            '0 0 3px 1px rgba(56, 189, 248, 0.3)',
                            '0 0 8px 3px rgba(56, 189, 248, 0.8)',
                            '0 0 3px 1px rgba(56, 189, 248, 0.3)'
                          ]
                        }}
                        transition={{
                          duration: 1.5,
                          delay: i * 0.15,
                          repeat: Infinity,
                          repeatType: "loop"
                        }}
                      />
                    );
                  })}
                  
                  {/* Horizontal (East-West) nodes */}
                  {Array.from({ length: 6 }).map((_, i) => {
                    const distanceFromCenter = i < 3 
                      ? 0.15 + (i * 0.15)  // West side - 15%, 30%, 45% from center
                      : 0.15 + ((i-3) * 0.15);  // East side - 15%, 30%, 45% from center
                    
                    const position = i < 3 
                      ? { left: `${50 - (distanceFromCenter * 100)}%`, top: '50%' }  // West side
                      : { left: `${50 + (distanceFromCenter * 100)}%`, top: '50%' };  // East side
                    
                    return (
                      <motion.div
                        key={`h-node-${i}`}
                        className="absolute w-1.5 h-1.5 bg-blue-300 rounded-full transform -translate-x-1/2 -translate-y-1/2 will-change-transform"
                        style={{
                          ...position,
                          boxShadow: '0 0 6px 2px rgba(56, 189, 248, 0.6)',
                        }}
                        animate={{
                          opacity: [0, 1, 0],
                          scale: [0.8, 1.2, 0.8],
                          boxShadow: [
                            '0 0 3px 1px rgba(56, 189, 248, 0.3)',
                            '0 0 8px 3px rgba(56, 189, 248, 0.8)',
                            '0 0 3px 1px rgba(56, 189, 248, 0.3)'
                          ]
                        }}
                        transition={{
                          duration: 1.5,
                          delay: i * 0.15,
                          repeat: Infinity,
                          repeatType: "loop"
                        }}
                      />
                    );
                  })}
                  
                  {/* Electrical current pulse animation along the cross - contained */}
                  {Array.from({ length: 4 }).map((_, i) => {
                    // Directional properties based on which arm of the cross
                    const isVertical = i < 2;
                    const isPositiveDirection = i % 2 === 0;
                    
                    // Calculate positioning and animation properties
                    const position = isVertical
                      ? { 
                          width: '2px',
                          height: '35%',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          top: isPositiveDirection ? '15%' : null,
                          bottom: !isPositiveDirection ? '15%' : null,
                          background: 'linear-gradient(to bottom, rgba(59, 130, 246, 0), rgba(59, 130, 246, 0.9), rgba(59, 130, 246, 0))'
                        }
                      : { 
                          height: '2px',
                          width: '35%',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          left: isPositiveDirection ? '15%' : null,
                          right: !isPositiveDirection ? '15%' : null,
                          background: 'linear-gradient(to right, rgba(59, 130, 246, 0), rgba(59, 130, 246, 0.9), rgba(59, 130, 246, 0))'
                        };
                        
                    // Animation properties - contained within the bounds
                    const animate = isVertical
                      ? {
                          y: isPositiveDirection 
                            ? ['0%', '80%'] // North - don't go all the way
                            : ['0%', '-80%'], // South - don't go all the way
                          opacity: [0, 1, 0]
                        }
                      : {
                          x: isPositiveDirection 
                            ? ['0%', '80%'] // West - don't go all the way
                            : ['0%', '-80%'], // East - don't go all the way
                          opacity: [0, 1, 0]
                        };
                        
                    return (
                      <motion.div
                        key={`pulse-${i}`}
                        className="absolute will-change-transform"
                        style={{ 
                          ...position,
                          boxShadow: '0 0 6px 1px rgba(56, 189, 248, 0.5)',
                          filter: 'blur(0.5px)'
                        }}
                        animate={animate}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatDelay: 0.2,
                          ease: "easeInOut"
                        }}
                      />
                    );
                  })}
                  
                  {/* Central energy core at cross intersection */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-400 rounded-full will-change-transform"
                    style={{
                      boxShadow: '0 0 15px 5px rgba(56, 189, 248, 0.7)',
                    }}
                    animate={{
                      scale: [1, 1.3, 1],
                      boxShadow: [
                        '0 0 8px 2px rgba(56, 189, 248, 0.5)',
                        '0 0 15px 5px rgba(56, 189, 248, 0.8)',
                        '0 0 8px 2px rgba(56, 189, 248, 0.5)'
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </div>
              
              {/* Service Icons around the globe - Modified to only show dim lights on hover */}
              <AnimatePresence>
                {serviceIcons.map((service, index) => {
                  const IconComponent = service.icon;
                  const isHovered = hoveredIcon === service.name;
                  
                  return (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 1 + (index * 0.1),
                        type: "spring"
                      }}
                      className="absolute cursor-pointer will-change-transform"
                      style={{ 
                        left: service.position.x, 
                        top: service.position.y
                      }}
                      onMouseEnter={() => setHoveredIcon(service.name)}
                      onMouseLeave={() => setHoveredIcon(null)}
                    >
                      <motion.div
                        className="relative"
                        whileHover={{ scale: 1.2 }}
                        animate={{ 
                          rotate: service.position.rotate,
                          y: [0, -5, 0],
                          // Only show box shadow when hovering
                          boxShadow: isHovered 
                            ? `0 0 30px 10px ${service.color}60` 
                            : 'none'
                        }}
                        transition={{
                          y: { 
                            duration: 2 + index * 0.5, 
                            repeat: Infinity, 
                            repeatType: "reverse",
                            ease: "easeInOut"
                          },
                          boxShadow: { duration: 0.3 }
                        }}
                      >
                        <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center ${
                          isHovered ? 'bg-primary-700/80' : 'bg-primary-800/70'
                        } backdrop-blur-sm transition-colors duration-300`}>
                          <motion.div
                            animate={{ 
                              scale: [1, 1.15, 1],
                              rotate: [0, 10, 0, -10, 0]
                            }}
                            transition={{ 
                              scale: { 
                                duration: 3, 
                                repeat: Infinity, 
                                repeatType: "reverse" 
                              },
                              rotate: { 
                                duration: 5, 
                                repeat: Infinity, 
                                repeatType: "reverse",
                                ease: "easeInOut" 
                              }
                            }}
                          >
                            <IconComponent 
                              size={24} 
                              color={service.color} 
                              className="relative z-10" 
                              style={{ 
                                filter: isHovered 
                                  ? `drop-shadow(0 0 5px ${service.color})` 
                                  : 'none',
                                transition: 'filter 0.3s ease'
                              }}
                            />
                          </motion.div>
                        </div>
                        
                        {/* Connection line to globe - Only visible when hovering */}
                        <AnimatePresence>
                          {isHovered && (
                            <motion.div
                              className="absolute top-1/2 left-1/2 h-1"
                              style={{ 
                                width: '100px',
                                height: '2px',
                                transformOrigin: '0 0',
                                transform: `rotate(${service.position.rotate}deg)`,
                                background: `linear-gradient(90deg, transparent, ${service.color}70, transparent)`,
                                boxShadow: `0 0 5px 1px ${service.color}40`
                              }}
                              initial={{ opacity: 0, scaleX: 0 }}
                              animate={{ 
                                opacity: 1,
                                scaleX: 1
                              }}
                              exit={{
                                opacity: 0,
                                scaleX: 0
                              }}
                              transition={{ 
                                duration: 0.3
                              }}
                            />
                          )}
                        </AnimatePresence>
                        
                        {/* Enhanced tooltip with glow effect */}
                        <AnimatePresence>
                          {isHovered && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              transition={{ duration: 0.2 }}
                              className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 whitespace-nowrap bg-primary-800/90 text-white text-sm py-2 px-3 rounded-lg z-50"
                              style={{ 
                                boxShadow: `0 0 15px 5px rgba(${service.color}30), inset 0 0 8px 0px rgba(${service.color}20)` 
                              }}
                            >
                              {service.name}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-white/50 flex justify-center items-start p-1">
          <motion.div 
            className="w-1 h-2 bg-white rounded-full"
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;