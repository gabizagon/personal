import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem } from './carousel';

interface Project {
  id: number;
  name: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: 'Aquaserv',
    image: 'https://8fpa87ovv8.ufs.sh/f/m4AOA69vaiTFU6B1ZoDV9PQ6vIL3mHrslc8OZEG0uBtJUKnS'
  },
  {
    id: 2,
    name: 'Vrancart',
    image: 'https://8fpa87ovv8.ufs.sh/f/m4AOA69vaiTFTJEHyDctzpG1QVfvEAY2wTqoR4a6hB9XcUOI'
  },
  {
    id: 3,
    name: 'Original Meldorfer',
    image: 'https://8fpa87ovv8.ufs.sh/f/m4AOA69vaiTFDYyeCA2hGy2d48mWYXAg0RxNrsSVUBlowFHI'
  },
  {
    id: 4,
    name: 'Aunde C&S Automotive',
    image: 'https://8fpa87ovv8.ufs.sh/f/m4AOA69vaiTFxvLGOCjPuFxrpSEQ9Zt8JKCWU71kA5zoGP3v'
  },
  {
    id: 5,
    name: 'Socot',
    image: 'https://8fpa87ovv8.ufs.sh/f/m4AOA69vaiTFNzCt3mZGM85OapjvLHAqBr2V4EbuRQJU0fxX'
  },
  {
    id: 6,
    name: 'Spitalul oncologic Medex',
    image: 'https://8fpa87ovv8.ufs.sh/f/m4AOA69vaiTFXspxVRDZE09Q6qez8UNcvDBKjoPVGlWfAhyb'
  },
  {
    id: 7,
    name: 'DAW Bența',
    image: 'https://8fpa87ovv8.ufs.sh/f/m4AOA69vaiTFdVXrWuTRwkOQBFHVf0ltmuh8pevAWnz7s1yR'
  },
  {
    id: 8,
    name: 'Herlitz Romania',
    image: 'https://8fpa87ovv8.ufs.sh/f/m4AOA69vaiTFBqQxbed13ukoCVdsWZzShTAqbRewvmtIxMPO'
  },
  {
    id: 9,
    name: 'Azomureș',
    image: 'https://8fpa87ovv8.ufs.sh/f/m4AOA69vaiTFJJqWBv77EuNRbVpW8o5OIla1CrQzDX9cynhK'
  },
  {
    id: 10,
    name: 'Centrul de evenimente RAB',
    image: 'https://8fpa87ovv8.ufs.sh/f/m4AOA69vaiTF9Jss4v3gp3EdR5vrYMPQbsODtjc8uwTWJ0hZ'
  }
];

// Group projects into pairs to create frames
const projectGroups = [];
for (let i = 0; i < projects.length; i += 2) {
  if (i + 1 < projects.length) {
    projectGroups.push(projects.slice(i, i + 2));
  }
}

const ProjectsCarousel: React.FC = () => {
  const [activeGroup, setActiveGroup] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isLoading, setIsLoading] = useState<{[key: number]: boolean}>({});
  const carouselRef = useRef<HTMLDivElement>(null);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setActiveGroup((current) => 
          current === projectGroups.length - 1 ? 0 : current + 1
        );
      }, 4500);
      
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  // Handler for image load state
  const handleImageLoad = (id: number) => {
    setIsLoading(prev => ({...prev, [id]: false}));
  };

  // Initialize loading state for all images
  useEffect(() => {
    const loadingState: {[key: number]: boolean} = {};
    projects.forEach(project => {
      loadingState[project.id] = true;
    });
    setIsLoading(loadingState);
  }, []);

  const handlePrev = () => {
    setActiveGroup((current) => (current === 0 ? projectGroups.length - 1 : current - 1));
  };

  const handleNext = () => {
    setActiveGroup((current) => (current === projectGroups.length - 1 ? 0 : current + 1));
  };

  return (
    <div className="relative w-full overflow-hidden pt-12 pb-16">
      {/* Main Carousel */}
      <div 
        className="relative container"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Navigation Arrows */}
        <div className="absolute inset-0 flex items-center justify-between px-4 z-20 pointer-events-none">
          <button 
            className="p-3 rounded-full bg-primary-900/70 backdrop-blur-sm text-white hover:bg-primary-800/90 transition-all shadow-lg border border-primary-700/30 hover:shadow-[0_0_15px_rgba(66,99,235,0.4)] pointer-events-auto"
            onClick={handlePrev}
            aria-label="Previous project group"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            className="p-3 rounded-full bg-primary-900/70 backdrop-blur-sm text-white hover:bg-primary-800/90 transition-all shadow-lg border border-primary-700/30 hover:shadow-[0_0_15px_rgba(66,99,235,0.4)] pointer-events-auto"
            onClick={handleNext}
            aria-label="Next project group"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Carousel */}
        <Carousel ref={carouselRef} className="w-full">
          <CarouselContent
            style={{ transform: `translateX(-${activeGroup * 100}%)` }}
            className="py-4"
          >
            {projectGroups.map((group, groupIndex) => (
              <CarouselItem key={`group-${groupIndex}`} className="flex flex-col md:flex-row justify-center gap-4 px-4">
                {group.map((project) => (
                  <motion.div 
                    key={project.id}
                    className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-2xl group cursor-pointer border border-primary-800/40 mb-4 md:mb-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {/* Shimmer loading effect */}
                    {isLoading[project.id] && (
                      <div className="absolute inset-0 bg-primary-900/30">
                        <div className="h-full w-full bg-gradient-to-r from-primary-900/0 via-primary-800/20 to-primary-900/0 animate-shimmer" />
                      </div>
                    )}
                    
                    {/* Image */}
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onLoad={() => handleImageLoad(project.id)}
                      style={{ opacity: isLoading[project.id] ? 0 : 1 }}
                    />
                    
                    {/* Fixed gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-950/95 via-primary-900/40 to-transparent" />
                    
                    {/* Hover overlay - Glassmorphism effect */}
                    <div className="absolute inset-0 bg-primary-900/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Project name */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                      <h3 className="text-2xl md:text-3xl font-bold tracking-wider">{project.name}</h3>
                    </div>
                    
                    {/* Hover effect - cyber blue border glow */}
                    <div className="absolute inset-0 border-2 border-transparent rounded-xl group-hover:border-primary-400/70 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(66,99,235,0.6)] pointer-events-none" />
                  </motion.div>
                ))}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        
        {/* Progress dots navigation - exactly 5 dots for the 5 groups of 2 images */}
        <div className="flex justify-center space-x-2 mt-10">
          {projectGroups.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeGroup === index 
                  ? 'bg-primary-400 w-8 shadow-[0_0_10px_rgba(66,99,235,0.7)]' 
                  : 'bg-primary-700/50 hover:bg-primary-600/70'
              }`}
              onClick={() => setActiveGroup(index)}
              aria-label={`Go to project group ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsCarousel;