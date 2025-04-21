import React from 'react';

interface ShieldClockIconProps {
  size?: number;
  className?: string;
}

const ShieldClockIcon: React.FC<ShieldClockIconProps> = ({ size = 24, className = "" }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className={className}
      aria-label="Pază și protecție, intervenție rapidă – serviciu de securitate"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 10v2l1.5 1.5" />
    </svg>
  );
};

export default ShieldClockIcon;