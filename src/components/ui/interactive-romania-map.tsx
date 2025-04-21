import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, ZoomIn, ZoomOut, Map } from "lucide-react";
import { cn } from "../../lib/utils";
import { useTranslation } from "react-i18next";

// Coordinates of Strada Bradului 200, Sâncraiu de Mureș, Mureș, România
const COMPANY_LOCATION = {
  lat: 46.568897,
  lng: 24.561103
};

// Major Romanian cities to connect to
const ROMANIAN_CITIES = [
  { 
    name: "București", 
    lat: 44.4268, 
    lng: 26.1025,
    info: "cityInfo"
  },
  { 
    name: "Cluj-Napoca", 
    lat: 46.7712, 
    lng: 23.6236,
    info: "cityInfo"
  },
  { 
    name: "Timișoara", 
    lat: 45.7489, 
    lng: 21.2087,
    info: "cityInfo"
  },
  { 
    name: "Iași", 
    lat: 47.1585, 
    lng: 27.6014,
    info: "cityInfo"
  },
  { 
    name: "Constanța", 
    lat: 44.1598, 
    lng: 28.6348,
    info: "cityInfo"
  },
  { 
    name: "Brașov", 
    lat: 45.6427, 
    lng: 25.5887,
    info: "cityInfo"
  },
  { 
    name: "Craiova", 
    lat: 44.3302, 
    lng: 23.7949,
    info: "cityInfo"
  },
  { 
    name: "Galați", 
    lat: 45.4353, 
    lng: 28.0080,
    info: "cityInfo"
  }
];

// Romania map boundaries - adjusted for better proportions
const ROMANIA_BOUNDS = {
  north: 48.2652,
  south: 43.6186,
  west: 20.2619,
  east: 29.7730
};

// Calculate coordinates within the SVG viewBox based on geographic coordinates
const geoToSvgCoords = (lat, lng, scale = 1, offsetX = 0, offsetY = 0) => {
  // Map geographic coordinates to SVG viewBox (800x500)
  const x = ((lng - ROMANIA_BOUNDS.west) / (ROMANIA_BOUNDS.east - ROMANIA_BOUNDS.west)) * 800;
  const y = 500 - ((lat - ROMANIA_BOUNDS.south) / (ROMANIA_BOUNDS.north - ROMANIA_BOUNDS.south)) * 500;
  
  // Apply zoom scaling and offset
  return { 
    x: (x * scale) + offsetX, 
    y: (y * scale) + offsetY 
  };
};

// Create connection path between two points
const createConnectionPath = (start, end) => {
  // Create a curved path
  const midX = (start.x + end.x) / 2;
  const midY = (start.y + end.y) / 2;
  
  // Add some curvature
  const curveOffset = Math.min(Math.abs(end.x - start.x), Math.abs(end.y - start.y)) * 0.3;
  const controlX = midX + (start.y < end.y ? -curveOffset : curveOffset);
  const controlY = midY + (start.x < end.x ? -curveOffset : curveOffset);
  
  return `M ${start.x} ${start.y} Q ${controlX} ${controlY} ${end.x} ${end.y}`;
};

interface TooltipProps {
  x: number;
  y: number;
  title: string;
  info: string;
}

const Tooltip: React.FC<TooltipProps> = ({ x, y, title, info }) => {
  return (
    <foreignObject
      x={x + 10}
      y={y - 40}
      width="180"
      height="100"
      style={{ overflow: "visible" }}
    >
      <div className="bg-primary-900/90 backdrop-blur-sm border border-primary-700/50 rounded-lg p-2 shadow-lg text-left">
        <p className="text-white font-medium text-sm">{title}</p>
        <p className="text-primary-200 text-xs mt-1">{info}</p>
      </div>
    </foreignObject>
  );
};

export function InteractiveRomaniaMap() {
  const { t, i18n } = useTranslation();
  
  // State for hover effects
  const [hoveredCity, setHoveredCity] = useState<number | null>(null);
  const [hoveredConnection, setHoveredConnection] = useState<number | null>(null);
  
  // State for zoom functionality
  const [zoomLevel, setZoomLevel] = useState(1);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  
  // State for fish animation
  const [fishDirection, setFishDirection] = useState(1);
  
  // Ref for the SVG element to handle wheel events
  const svgRef = useRef<SVGSVGElement>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  
  // Convert company location to SVG coordinates
  const companySvgCoords = geoToSvgCoords(
    COMPANY_LOCATION.lat, 
    COMPANY_LOCATION.lng,
    zoomLevel,
    panOffset.x,
    panOffset.y
  );
  
  // Handle mouse wheel for zooming
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      // Determine zoom direction
      const zoomDirection = e.deltaY > 0 ? -0.1 : 0.1;
      const newZoomLevel = Math.max(1, Math.min(3, zoomLevel + zoomDirection));
      
      // Only update if zoom level changed
      if (newZoomLevel !== zoomLevel) {
        // Calculate mouse position relative to SVG
        const svgRect = svgRef.current?.getBoundingClientRect();
        if (svgRect) {
          const mouseX = e.clientX - svgRect.left;
          const mouseY = e.clientY - svgRect.top;
          
          // Calculate new pan offset to zoom towards mouse position
          const scaleChange = newZoomLevel - zoomLevel;
          const newPanX = panOffset.x - (mouseX - 400) * scaleChange / zoomLevel;
          const newPanY = panOffset.y - (mouseY - 250) * scaleChange / zoomLevel;
          
          setZoomLevel(newZoomLevel);
          setPanOffset({ x: newPanX, y: newPanY });
        }
      }
    };
    
    const svgElement = svgRef.current;
    if (svgElement) {
      svgElement.addEventListener('wheel', handleWheel, { passive: false });
    }
    
    return () => {
      if (svgElement) {
        svgElement.removeEventListener('wheel', handleWheel);
      }
    };
  }, [zoomLevel, panOffset]);
  
  // Handle fish swimming effect
  useEffect(() => {
    const interval = setInterval(() => {
      setFishDirection(prev => prev * -1);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Handle mouse events for dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX, y: e.clientY });
    }
  };
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      const dx = (e.clientX - dragStart.x) * 2 / zoomLevel;
      const dy = (e.clientY - dragStart.y) * 2 / zoomLevel;
      
      setPanOffset({
        x: panOffset.x + dx,
        y: panOffset.y + dy
      });
      
      setDragStart({ x: e.clientX, y: e.clientY });
    }
  };
  
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  
  // Reset zoom and pan
  const resetView = () => {
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
  };
  
  // Zoom in centered on HQ
  const zoomIn = () => {
    const newZoomLevel = Math.min(3, zoomLevel + 0.25);
    if (newZoomLevel !== zoomLevel) {
      // Keep centered on HQ
      const hqX = ((COMPANY_LOCATION.lng - ROMANIA_BOUNDS.west) / (ROMANIA_BOUNDS.east - ROMANIA_BOUNDS.west)) * 800;
      const hqY = 500 - ((COMPANY_LOCATION.lat - ROMANIA_BOUNDS.south) / (ROMANIA_BOUNDS.north - ROMANIA_BOUNDS.south)) * 500;
      
      const newPanX = panOffset.x - (hqX - 400) * 0.25 / zoomLevel;
      const newPanY = panOffset.y - (hqY - 250) * 0.25 / zoomLevel;
      
      setZoomLevel(newZoomLevel);
      setPanOffset({ x: newPanX, y: newPanY });
    }
  };
  
  // Zoom out centered on HQ
  const zoomOut = () => {
    const newZoomLevel = Math.max(1, zoomLevel - 0.25);
    if (newZoomLevel !== zoomLevel) {
      // If we're going back to zoom level 1, reset pan offset
      if (newZoomLevel === 1) {
        setPanOffset({ x: 0, y: 0 });
      } else {
        // Keep centered on HQ
        const hqX = ((COMPANY_LOCATION.lng - ROMANIA_BOUNDS.west) / (ROMANIA_BOUNDS.east - ROMANIA_BOUNDS.west)) * 800;
        const hqY = 500 - ((COMPANY_LOCATION.lat - ROMANIA_BOUNDS.south) / (ROMANIA_BOUNDS.north - ROMANIA_BOUNDS.south)) * 500;
        
        const newPanX = panOffset.x + (hqX - 400) * 0.25 / zoomLevel;
        const newPanY = panOffset.y + (hqY - 250) * 0.25 / zoomLevel;
        
        setZoomLevel(newZoomLevel);
        setPanOffset({ x: newPanX, y: newPanY });
      }
    }
  };
  
  // Open location in Google Maps
  const openInGoogleMaps = () => {
    window.open(
      `https://maps.google.com/?q=Strada+Bradului+200,+Sâncraiu+de+Mureș,+Mureș,+România`,
      '_blank'
    );
  };
  
  // Enhanced fish-like path data for Romania - more pronounced fish shape
  const fishRomaniaPath = "M216,186 C212,193 210,199 211,210 C212,219 214,230 217,238 C220,248 228,258 235,265 C245,274 250,280 258,284 C270,290 282,294 295,296 C309,300 324,301 339,300 C354,298 368,293 380,287 C390,282 400,276 409,269 C419,263 429,257 440,252 C450,247 460,242 470,237 C480,242 490,247 501,252 C513,256 525,260 537,262 C548,265 559,266 570,267 C581,267 592,267 603,266 C615,264 626,260 637,255 C648,250 658,244 667,236 C675,229 683,221 689,212 C695,204 700,195 703,185 C705,175 706,165 706,155 C705,144 703,134 700,124 C697,115 692,106 686,98 C680,90 673,83 665,77 C657,71 649,66 640,62 C631,58 621,56 611,54 C601,53 590,53 580,54 C569,55 559,58 549,61 C539,65 528,68 518,72 C508,75 497,78 487,81 C475,83 463,85 451,85 C441,86 430,86 420,84 C410,83 399,81 389,78 C378,76 368,72 357,68 C347,65 336,61 326,57 C316,52 306,47 297,41 C287,35 277,29 267,22 C258,17 249,14 240,17 C230,20 222,26 216,34 C209,43 212,52 210,63 C209,73 211,83 213,93 C214,103 212,113 208,122 C224,145 219,167 216,186 Z";

  // Fish top fin - larger and more defined
  const fishTopFinPath = "M285,120 C305,90 325,70 345,55 Q365,45 380,70 C365,90 345,105 328,110 C315,115 299,119 285,120 Z";

  // Fish bottom fin - larger and more defined
  const fishBottomFinPath = "M430,310 C450,290 470,280 495,285 Q515,295 505,325 C490,335 475,335 460,330 C445,325 435,320 430,310 Z";

  // Fish tail - more distinct
  const fishTailPath = "M690,170 C710,120 740,110 770,140 Q780,180 750,220 C720,240 700,230 690,210 C685,195 680,180 690,170 Z";
  
  // Fish eye
  const fishEyePosition = { x: 240, y: 160 };
  
  // Get word for "National" in the current language
  const nationalWord = {
    ro: "Națională",
    en: "Nationwide",
    hu: "Országos"
  }[i18n.language] || "Națională";
  
  return (
    <div className="py-16 dark:bg-black bg-primary-950 w-full">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl dark:text-white text-primary-50">
          {t('map.title')}{" "}
          <span className="text-primary-300">
            {nationalWord.split("").map((letter, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {letter}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="text-sm md:text-lg dark:text-gray-300 text-primary-100 max-w-2xl mx-auto py-4">
          {t('map.subtitle')}
        </p>
      </div>
      
      {/* Romania Map SVG Container */}
      <div 
        ref={mapContainerRef}
        className="w-full aspect-[2/1] max-w-5xl mx-auto relative rounded-xl overflow-hidden"
        style={{ cursor: isDragging ? 'grabbing' : (zoomLevel > 1 ? 'grab' : 'default') }}
      >
        <svg 
          ref={svgRef}
          viewBox="0 0 800 500" 
          className="w-full h-full"
          style={{ filter: "drop-shadow(0px 0px 8px rgba(57, 73, 171, 0.3))" }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {/* Background with deep blue gradient */}
          <rect x="0" y="0" width="800" height="500" fill="#070e24" rx="12" ry="12" />
          
          {/* Background gradient for visual depth */}
          <defs>
            <radialGradient id="bgGradient" cx="50%" cy="50%" r="70%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="#101935" />
              <stop offset="100%" stopColor="#070e24" />
            </radialGradient>
            
            {/* Water pattern for fish background */}
            <pattern id="waterPattern" patternUnits="userSpaceOnUse" width="100" height="50" patternTransform="rotate(5)">
              <motion.path 
                d="M0,25 Q25,0 50,25 Q75,50 100,25" 
                fill="none" 
                stroke="#3949ab" 
                strokeWidth="1" 
                strokeOpacity="0.1"
                initial={{ y: 0 }}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              <motion.path 
                d="M0,25 Q25,50 50,25 Q75,0 100,25" 
                fill="none" 
                stroke="#3949ab" 
                strokeWidth="1" 
                strokeOpacity="0.1"
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 7, repeat: Infinity }}
              />
            </pattern>
            
            {/* Enhanced fish scales pattern */}
            <pattern id="fishScalesPattern" patternUnits="userSpaceOnUse" width="20" height="20" patternTransform="rotate(5)">
              <path d="M0,10 A10,10 0 0,1 20,10 A10,10 0 0,1 0,10 Z" fill="none" stroke="#4f5ecd" strokeWidth="0.5" strokeOpacity="0.2" />
              <path d="M10,0 A10,10 0 0,1 10,20 A10,10 0 0,1 10,0 Z" fill="none" stroke="#4f5ecd" strokeWidth="0.5" strokeOpacity="0.2" />
            </pattern>
            
            {/* Fish body gradient - more vibrant */}
            <linearGradient id="fishGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3949ab" stopOpacity="0.3" />
              <stop offset="40%" stopColor="#4f5ecd" stopOpacity="0.35" />
              <stop offset="60%" stopColor="#3949ab" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#4f5ecd" stopOpacity="0.3" />
            </linearGradient>
            
            {/* Fin gradient - more vibrant */}
            <linearGradient id="finGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4f5ecd" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#3949ab" stopOpacity="0.5" />
            </linearGradient>
            
            {/* Tail gradient - added for distinct tail */}
            <linearGradient id="tailGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3949ab" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#4f5ecd" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#3949ab" stopOpacity="0.4" />
            </linearGradient>
            
            {/* Modern line gradient */}
            <linearGradient id="connectionGradient" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#3949ab" stopOpacity="0" />
              <stop offset="50%" stopColor="#3949ab" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3949ab" stopOpacity="0" />
            </linearGradient>
            
            {/* Highlighted connection gradient */}
            <linearGradient id="highlightedConnectionGradient" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#4f83cc" stopOpacity="0" />
              <stop offset="50%" stopColor="#4f83cc" stopOpacity="1" />
              <stop offset="100%" stopColor="#4f83cc" stopOpacity="0" />
            </linearGradient>
            
            {/* Bubble filter */}
            <filter id="bubble" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
            </filter>
            
            {/* Glow filter for highlights */}
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            
            {/* Stronger glow for hover states */}
            <filter id="strongGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          
          <rect x="0" y="0" width="800" height="500" fill="url(#bgGradient)" rx="12" ry="12" />
          
          {/* Water background */}
          <rect x="0" y="0" width="800" height="500" fill="url(#waterPattern)" opacity="0.6" rx="12" ry="12" />
          
          {/* Subtle grid lines for orientation - very minimal */}
          <g opacity="0.15">
            {Array.from({ length: 10 }).map((_, i) => (
              <line 
                key={`h-line-${i}`}
                x1="0" 
                y1={i * 50} 
                x2="800" 
                y2={i * 50} 
                stroke="#3949ab" 
                strokeWidth="0.5" 
              />
            ))}
            {Array.from({ length: 16 }).map((_, i) => (
              <line 
                key={`v-line-${i}`}
                x1={i * 50} 
                y1="0" 
                x2={i * 50} 
                y2="500" 
                stroke="#3949ab" 
                strokeWidth="0.5" 
              />
            ))}
          </g>
          
          {/* Random bubbles */}
          {Array.from({ length: 15 }).map((_, i) => {
            const size = 2 + Math.random() * 5;
            const x = 100 + Math.random() * 600;
            const y = 50 + Math.random() * 400;
            const duration = 5 + Math.random() * 10;
            const delay = Math.random() * 10;
            
            return (
              <motion.circle
                key={`bubble-${i}`}
                cx={x}
                cy={y}
                r={size}
                fill="#4f5ecd"
                opacity="0.3"
                filter="url(#bubble)"
                initial={{ y: y }}
                animate={{ y: y - 50 }}
                transition={{
                  duration: duration,
                  repeat: Infinity,
                  delay: delay
                }}
              />
            );
          })}
          
          {/* Zoom and pan transformation group */}
          <g transform={`scale(${zoomLevel}) translate(${panOffset.x / zoomLevel} ${panOffset.y / zoomLevel})`}>
            {/* Fish-shaped Romania with swimming animation */}
            <motion.g
              animate={{ 
                x: [0, fishDirection * 8, 0],
                skewX: [0, fishDirection * -2, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              {/* Romania country outline - enhanced with fish-like appearance */}
              <motion.path
                d={fishRomaniaPath}
                fill="none"
                stroke="#3949ab"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3 }}
                className="drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
              />
              
              {/* Romania country fill with fish-like gradient and scales */}
              <path
                d={fishRomaniaPath}
                fill="url(#fishGradient)"
                fillOpacity="0.6"
              />
              
              <path
                d={fishRomaniaPath}
                fill="url(#fishScalesPattern)"
                fillOpacity="0.9"
              />
              
              {/* Fish tail fin */}
              <motion.path
                d={fishTailPath}
                fill="url(#tailGradient)"
                stroke="#3949ab"
                strokeWidth="1"
                initial={{ rotate: 0 }}
                animate={{ 
                  rotate: [0, fishDirection * 15, 0],
                  skewX: [0, fishDirection * 5, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                style={{ transformOrigin: "690px 180px" }}
              />
              
              {/* Fish bottom fin */}
              <motion.path
                d={fishBottomFinPath}
                fill="url(#finGradient)"
                stroke="#3949ab"
                strokeWidth="1"
                initial={{ rotate: 0 }}
                animate={{ rotate: [0, fishDirection * 5, 0] }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                style={{ transformOrigin: "450px 310px" }}
              />
              
              {/* Fish top fin */}
              <motion.path
                d={fishTopFinPath}
                fill="url(#finGradient)"
                stroke="#3949ab"
                strokeWidth="1"
                initial={{ rotate: 0 }}
                animate={{ rotate: [0, fishDirection * -7, 0] }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.5
                }}
                style={{ transformOrigin: "320px 100px" }}
              />
              
              {/* Fish eye with animated pupil */}
              <g>
                <circle
                  cx={fishEyePosition.x}
                  cy={fishEyePosition.y}
                  r="14"
                  fill="#101935"
                  fillOpacity="0.6"
                />
                <circle
                  cx={fishEyePosition.x}
                  cy={fishEyePosition.y}
                  r="10"
                  fill="#3949ab"
                  fillOpacity="0.7"
                />
                <motion.circle
                  cx={fishEyePosition.x + 3}
                  cy={fishEyePosition.y - 3}
                  r="5"
                  fill="white"
                  fillOpacity="0.8"
                  animate={{ 
                    cx: [fishEyePosition.x + 3, fishEyePosition.x + (fishDirection * 3) + 3, fishEyePosition.x + 3],
                    cy: [fishEyePosition.y - 3, fishEyePosition.y - 2, fishEyePosition.y - 3]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              </g>
              
              {/* Fish gill lines */}
              <path
                d="M265,140 C268,155 270,170 268,185"
                fill="none"
                stroke="#3949ab"
                strokeWidth="1.5"
                strokeOpacity="0.6"
                strokeLinecap="round"
              />
              <path
                d="M280,140 C283,155 285,170 283,185"
                fill="none"
                stroke="#3949ab"
                strokeWidth="1.5"
                strokeOpacity="0.6"
                strokeLinecap="round"
              />
            </motion.g>
            
            {/* Connection lines from headquarters to other cities - modernized with hover effects */}
            <g className="connections">
              {ROMANIAN_CITIES.map((city, index) => {
                const citySvgCoords = geoToSvgCoords(
                  city.lat, 
                  city.lng,
                  1, // Keep scaling at 1 here since we're inside the scaled group
                  0, 
                  0
                );
                
                // Create a unique gradient ID for each connection
                const gradientId = `connectionGradient-${index}`;
                const highlightedGradientId = `highlightedConnectionGradient-${index}`;
                
                // Determine if this connection is hovered
                const isHovered = hoveredConnection === index || hoveredCity === index;
                
                return (
                  <g key={`connection-group-${index}`}>
                    <defs>
                      {/* Normal gradient */}
                      <linearGradient 
                        id={gradientId} 
                        x1={companySvgCoords.x / zoomLevel - panOffset.x / zoomLevel} 
                        y1={companySvgCoords.y / zoomLevel - panOffset.y / zoomLevel} 
                        x2={citySvgCoords.x} 
                        y2={citySvgCoords.y} 
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0%" stopColor="#3949ab" stopOpacity="1" />
                        <stop offset="50%" stopColor="#4f5ecd" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#3949ab" stopOpacity="1" />
                      </linearGradient>
                      
                      {/* Highlighted gradient */}
                      <linearGradient 
                        id={highlightedGradientId} 
                        x1={companySvgCoords.x / zoomLevel - panOffset.x / zoomLevel} 
                        y1={companySvgCoords.y / zoomLevel - panOffset.y / zoomLevel} 
                        x2={citySvgCoords.x} 
                        y2={citySvgCoords.y} 
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0%" stopColor="#4f83cc" stopOpacity="1" />
                        <stop offset="50%" stopColor="#6aa0e4" stopOpacity="1" />
                        <stop offset="100%" stopColor="#4f83cc" stopOpacity="1" />
                      </linearGradient>
                    </defs>
                    
                    {/* Main connection line */}
                    <motion.path
                      d={createConnectionPath(
                        { 
                          x: companySvgCoords.x / zoomLevel - panOffset.x / zoomLevel, 
                          y: companySvgCoords.y / zoomLevel - panOffset.y / zoomLevel 
                        }, 
                        citySvgCoords
                      )}
                      stroke={isHovered ? `url(#${highlightedGradientId})` : `url(#${gradientId})`}
                      strokeWidth={isHovered ? "2.5" : "1.5"}
                      fill="none"
                      strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ 
                        pathLength: 1, 
                        opacity: 1,
                        strokeWidth: isHovered ? 2.5 : 1.5
                      }}
                      transition={{ 
                        duration: 1.5, 
                        delay: 0.3 + (index * 0.15),
                        ease: "easeOut"
                      }}
                      onMouseEnter={() => setHoveredConnection(index)}
                      onMouseLeave={() => setHoveredConnection(null)}
                    />
                    
                    {/* Subtle glow effect for the line */}
                    <motion.path
                      d={createConnectionPath(
                        { 
                          x: companySvgCoords.x / zoomLevel - panOffset.x / zoomLevel, 
                          y: companySvgCoords.y / zoomLevel - panOffset.y / zoomLevel 
                        }, 
                        citySvgCoords
                      )}
                      stroke={isHovered ? `url(#${highlightedGradientId})` : `url(#${gradientId})`}
                      strokeWidth="0.5"
                      fill="none"
                      strokeLinecap="round"
                      filter={isHovered ? "url(#strongGlow)" : "url(#glow)"}
                      opacity={isHovered ? "0.8" : "0.6"}
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ 
                        pathLength: 1, 
                        opacity: isHovered ? 0.8 : 0.6
                      }}
                      transition={{ 
                        duration: 1.5, 
                        delay: 0.3 + (index * 0.15),
                        ease: "easeOut"
                      }}
                    />
                    
                    {/* Animated pulse moving along the path - enhanced for hover */}
                    <motion.circle
                      cx="0"
                      cy="0"
                      r={isHovered ? "3" : "2"}
                      fill={isHovered ? "#6aa0e4" : "#4f5ecd"}
                      opacity="0.8"
                      filter={isHovered ? "url(#strongGlow)" : "url(#glow)"}
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: isHovered ? [0, 1, 0] : [0, 0.8, 0],
                        r: isHovered ? [2, 4, 2] : [2, 3, 2]
                      }}
                      transition={{
                        duration: isHovered ? 1.5 : 2,
                        delay: 1 + (index * 0.2),
                        repeat: Infinity,
                        repeatDelay: isHovered ? 1 : 3 + (index * 0.5)
                      }}
                    >
                      <animateMotion
                        path={createConnectionPath(
                          { 
                            x: companySvgCoords.x / zoomLevel - panOffset.x / zoomLevel, 
                            y: companySvgCoords.y / zoomLevel - panOffset.y / zoomLevel 
                          }, 
                          citySvgCoords
                        )}
                        dur={isHovered ? `${2 + (index % 2)}s` : `${3 + (index % 3)}s`}
                        begin={`${1 + (index * 0.2)}s`}
                        repeatCount="indefinite"
                      />
                    </motion.circle>
                  </g>
                );
              })}
            </g>
            
            {/* City markers - modernized with hover effects */}
            <g className="cities">
              {ROMANIAN_CITIES.map((city, index) => {
                const { x, y } = geoToSvgCoords(
                  city.lat, 
                  city.lng,
                  1, // Keep scaling at 1 here since we're inside the scaled group
                  0, 
                  0
                );
                
                const isHovered = hoveredCity === index;
                const cityInfo = t(`map.citiesInfo.${city.name}`);
                
                return (
                  <g key={`city-${index}`}>
                    {/* City glow effect - enhanced for hover */}
                    <motion.circle
                      cx={x}
                      cy={y}
                      r={isHovered ? "12" : "8"}
                      fill={isHovered ? "#4f83cc" : "#3949ab"}
                      opacity={isHovered ? "0.25" : "0.15"}
                      filter={isHovered ? "url(#strongGlow)" : "url(#glow)"}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ 
                        scale: isHovered ? [1, 1.8, 1] : [1, 1.5, 1],
                        opacity: isHovered ? [0.25, 0.4, 0.25] : [0.15, 0.3, 0.15]
                      }}
                      transition={{
                        duration: isHovered ? 2 : 3,
                        repeat: Infinity,
                        delay: 0.5 + (index * 0.1)
                      }}
                    />
                    
                    {/* City dot - enhanced for hover */}
                    <motion.circle
                      cx={x}
                      cy={y}
                      r={isHovered ? "5" : "3"}
                      fill={isHovered ? "#6aa0e4" : "#4f5ecd"}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ 
                        scale: isHovered ? 1.2 : 1, 
                        opacity: 1 
                      }}
                      transition={{ 
                        delay: 0.8 + (index * 0.1),
                        duration: 0.5,
                        type: "spring"
                      }}
                      onMouseEnter={() => setHoveredCity(index)}
                      onMouseLeave={() => setHoveredCity(null)}
                      style={{ cursor: 'pointer' }}
                    />
                    
                    {/* City name label - enhanced for hover */}
                    <motion.text
                      x={x}
                      y={y - 10}
                      fontSize={isHovered ? "11" : "9"}
                      fill={isHovered ? "#ffffff" : "#a5b4fc"}
                      fontFamily="sans-serif"
                      textAnchor="middle"
                      fontWeight={isHovered ? "600" : "500"}
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: 1,
                        y: isHovered ? y - 12 : y - 10,
                        fill: isHovered ? "#ffffff" : "#a5b4fc"
                      }}
                      transition={{ delay: 1.2 + (index * 0.1) }}
                    >
                      {city.name}
                    </motion.text>
                    
                    {/* Tooltip on hover */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.g
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Tooltip 
                            x={x} 
                            y={y} 
                            title={city.name} 
                            info={cityInfo} 
                          />
                        </motion.g>
                      )}
                    </AnimatePresence>
                  </g>
                );
              })}
            </g>
            
            {/* Headquarters marker with enhanced styling */}
            <g>
              {/* HQ large outer ring */}
              <motion.circle
                cx={companySvgCoords.x / zoomLevel - panOffset.x / zoomLevel}
                cy={companySvgCoords.y / zoomLevel - panOffset.y / zoomLevel}
                r="22"
                fill="transparent"
                stroke="#ffffff"
                strokeWidth="0.5"
                opacity="0.3"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: [0.3, 0.5, 0.3],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              
              {/* HQ middle ring */}
              <motion.circle
                cx={companySvgCoords.x / zoomLevel - panOffset.x / zoomLevel}
                cy={companySvgCoords.y / zoomLevel - panOffset.y / zoomLevel}
                r="14"
                fill="transparent"
                stroke="#4f5ecd"
                strokeWidth="1"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: [0.5, 0.8, 0.5],
                  scale: [1, 1.1, 1],
                  strokeWidth: [1, 1.5, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              
              {/* HQ inner circle glow */}
              <motion.circle
                cx={companySvgCoords.x / zoomLevel - panOffset.x / zoomLevel}
                cy={companySvgCoords.y / zoomLevel - panOffset.y / zoomLevel}
                r="8"
                fill="#3949ab"
                filter="url(#glow)"
                opacity="0.7"
                initial={{ scale: 0.8 }}
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              
              {/* HQ main circle */}
              <motion.circle
                cx={companySvgCoords.x / zoomLevel - panOffset.x / zoomLevel}
                cy={companySvgCoords.y / zoomLevel - panOffset.y / zoomLevel}
                r="6"
                fill="#ffffff"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3,
                  type: "spring"
                }}
              />
              
              {/* HQ inner dot */}
              <circle
                cx={companySvgCoords.x / zoomLevel - panOffset.x / zoomLevel}
                cy={companySvgCoords.y / zoomLevel - panOffset.y / zoomLevel}
                r="2.5"
                fill="#3949ab"
              />
              
              {/* Address tooltip always visible */}
              <foreignObject
                x={(companySvgCoords.x / zoomLevel - panOffset.x / zoomLevel) - 90}
                y={(companySvgCoords.y / zoomLevel - panOffset.y / zoomLevel) - 50}
                width="180"
                height="40"
              >
                <div className="text-xs text-center text-white font-semibold bg-primary-900/60 backdrop-blur-sm rounded-md px-2 py-1 border border-primary-700/40">
                  Strada Bradului 200, Sâncraiu de Mureș
                </div>
              </foreignObject>
              
              {/* HQ label with enhanced styling */}
              <motion.text
                x={companySvgCoords.x / zoomLevel - panOffset.x / zoomLevel}
                y={(companySvgCoords.y / zoomLevel - panOffset.y / zoomLevel) + 20}
                fontSize="13"
                fontWeight="bold"
                fill="#ffffff"
                textAnchor="middle"
                fontFamily="sans-serif"
                filter="url(#glow)"
                initial={{ opacity: 0, y: (companySvgCoords.y / zoomLevel - panOffset.y / zoomLevel) + 15 }}
                animate={{ opacity: 1, y: (companySvgCoords.y / zoomLevel - panOffset.y / zoomLevel) + 20 }}
                transition={{ delay: 0.5 }}
              >
                Sâncraiu de Mureș
              </motion.text>
              
              {/* Secondary label (HQ) */}
              <motion.text
                x={companySvgCoords.x / zoomLevel - panOffset.x / zoomLevel}
                y={(companySvgCoords.y / zoomLevel - panOffset.y / zoomLevel) + 35}
                fontSize="9"
                fill="#a5b4fc"
                textAnchor="middle"
                fontWeight="500"
                fontFamily="sans-serif"
                initial={{ opacity: 0, y: (companySvgCoords.y / zoomLevel - panOffset.y / zoomLevel) + 30 }}
                animate={{ opacity: 1, y: (companySvgCoords.y / zoomLevel - panOffset.y / zoomLevel) + 35 }}
                transition={{ delay: 0.7 }}
              >
                {t('map.hq')}
              </motion.text>
            </g>
            
            {/* Compass rose - refined styling */}
            <g transform="translate(720, 60)">
              <motion.g
                initial={{ rotate: -30, opacity: 0 }}
                animate={{ rotate: 0, opacity: 0.9 }}
                transition={{ duration: 1, delay: 1.5 }}
              >
                <path 
                  d="M0,-20 L5,-5 L0,-10 L-5,-5 Z" 
                  fill="#3949ab" 
                  filter="url(#glow)"
                />
                <path 
                  d="M0,20 L5,5 L0,10 L-5,5 Z" 
                  fill="#a5b4fc" 
                />
                <path 
                  d="M-20,0 L-5,5 L-10,0 L-5,-5 Z" 
                  fill="#a5b4fc" 
                />
                <path 
                  d="M20,0 L5,5 L10,0 L5,-5 Z" 
                  fill="#a5b4fc" 
                />
                <circle cx="0" cy="0" r="3" fill="#fff" />
              </motion.g>
            </g>
            
            {/* Map scale indicator */}
            <g transform="translate(60, 440)">
              <motion.g
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2 }}
              >
                <line x1="0" y1="0" x2="100" y2="0" stroke="#a5b4fc" strokeWidth="2" />
                <line x1="0" y1="-5" x2="0" y2="5" stroke="#a5b4fc" strokeWidth="2" />
                <line x1="100" y1="-5" x2="100" y2="5" stroke="#a5b4fc" strokeWidth="2" />
                <text x="50" y="20" fontSize="10" fill="#a5b4fc" textAnchor="middle" fontFamily="sans-serif">100 km</text>
              </motion.g>
            </g>
          </g>
        </svg>
        
        {/* Map controls - zoom, reset, fullscreen */}
        <motion.div 
          className="absolute bottom-4 left-4 flex flex-col space-y-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 2.4 }}
        >
          <button
            onClick={zoomIn}
            className={cn(
              "bg-primary-800/80 hover:bg-primary-700/80 backdrop-blur-sm p-2 rounded-lg border border-primary-700/50 text-primary-100",
              zoomLevel >= 3 && "opacity-50 cursor-not-allowed"
            )}
            disabled={zoomLevel >= 3}
            aria-label="Zoom In"
          >
            <ZoomIn size={18} />
          </button>
          
          <button
            onClick={zoomOut}
            className={cn(
              "bg-primary-800/80 hover:bg-primary-700/80 backdrop-blur-sm p-2 rounded-lg border border-primary-700/50 text-primary-100",
              zoomLevel <= 1 && "opacity-50 cursor-not-allowed"
            )}
            disabled={zoomLevel <= 1}
            aria-label="Zoom Out"
          >
            <ZoomOut size={18} />
          </button>
          
          <button
            onClick={resetView}
            className={cn(
              "bg-primary-800/80 hover:bg-primary-700/80 backdrop-blur-sm p-2 rounded-lg border border-primary-700/50 text-primary-100",
              zoomLevel === 1 && panOffset.x === 0 && panOffset.y === 0 && "opacity-50 cursor-not-allowed"
            )}
            disabled={zoomLevel === 1 && panOffset.x === 0 && panOffset.y === 0}
            aria-label="Reset View"
          >
            <Map size={18} />
          </button>
        </motion.div>
        
        {/* Fullscreen/Google Maps button */}
        <motion.div 
          className="absolute bottom-4 right-4 flex flex-col space-y-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 2.4 }}
        >
          <button
            onClick={openInGoogleMaps}
            className="bg-primary-800/80 hover:bg-primary-700/80 backdrop-blur-sm p-2 rounded-lg border border-primary-700/50 text-primary-100"
            aria-label="Open in Google Maps"
          >
            <Maximize2 size={18} />
          </button>
        </motion.div>
        
        {/* Map legend */}
        <motion.div 
          className="absolute top-4 right-4 bg-primary-900/80 backdrop-blur-sm p-3 rounded-lg border border-primary-700/50 text-xs text-primary-100"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.2 }}
        >
          <div className="flex items-center mb-1">
            <div className="w-3 h-3 rounded-full bg-white border border-primary-500 mr-2"></div>
            <span>{t('map.hq')}</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-primary-400 mr-2"></div>
            <span>{i18n.language === 'hu' ? 'Lefedett városok' : (i18n.language === 'en' ? 'Covered cities' : 'Orașe acoperite')}</span>
          </div>
        </motion.div>
      </div>
      
      {/* Interactive instructions */}
      <motion.div
        className="text-center mt-6 text-sm text-primary-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 3 }}
      >
        <p>{t('map.instructions.main')}</p>
        <p className="mt-1">{t('map.instructions.zoom')}</p>
      </motion.div>
    </div>
  );
}