import React from 'react';

interface LogoProps {
  className?: string;
  color?: string;
}

const Logo: React.FC<LogoProps> = ({ className = 'h-10', color = 'currentColor' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="https://8fpa87ovv8.ufs.sh/f/m4AOA69vaiTF1lATVovIYfwG49WDrCXoQyAmiLts763HhFUS" 
        alt="APS-MS Logo" 
        className="h-full w-auto"
      />
    </div>
  );
};

export default Logo;