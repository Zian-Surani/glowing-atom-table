
import React from 'react';
import { Element } from '../types/Element';

interface ElementCardProps {
  element: Element;
  onClick: () => void;
}

export const ElementCard: React.FC<ElementCardProps> = ({ element, onClick }) => {
  const getCategoryColor = (category: string) => {
    const colors = {
      'alkali metal': 'from-pink-400 via-pink-500 to-pink-600',
      'alkaline earth metal': 'from-orange-400 via-orange-500 to-orange-600',
      'transition metal': 'from-yellow-400 via-yellow-500 to-yellow-600',
      'post-transition metal': 'from-green-400 via-green-500 to-green-600',
      'metalloid': 'from-cyan-400 via-cyan-500 to-cyan-600',
      'reactive nonmetal': 'from-blue-400 via-blue-500 to-blue-600',
      'noble gas': 'from-purple-400 via-purple-500 to-purple-600',
      'lanthanide': 'from-fuchsia-400 via-fuchsia-500 to-fuchsia-600',
      'actinide': 'from-indigo-400 via-indigo-500 to-indigo-600',
      'unknown': 'from-gray-400 via-gray-500 to-gray-600'
    };
    return colors[category as keyof typeof colors] || 'from-gray-400 via-gray-500 to-gray-600';
  };

  const getCategoryGlow = (category: string) => {
    const glows = {
      'alkali metal': 'shadow-pink-400/60',
      'alkaline earth metal': 'shadow-orange-400/60',
      'transition metal': 'shadow-yellow-400/60',
      'post-transition metal': 'shadow-green-400/60',
      'metalloid': 'shadow-cyan-400/60',
      'reactive nonmetal': 'shadow-blue-400/60',
      'noble gas': 'shadow-purple-400/60',
      'lanthanide': 'shadow-fuchsia-400/60',
      'actinide': 'shadow-indigo-400/60',
      'unknown': 'shadow-gray-400/60'
    };
    return glows[category as keyof typeof glows] || 'shadow-gray-400/60';
  };

  const getCategoryTextColor = (category: string) => {
    const colors = {
      'alkali metal': 'text-pink-100',
      'alkaline earth metal': 'text-orange-100',
      'transition metal': 'text-yellow-100',
      'post-transition metal': 'text-green-100',
      'metalloid': 'text-cyan-100',
      'reactive nonmetal': 'text-blue-100',
      'noble gas': 'text-purple-100',
      'lanthanide': 'text-fuchsia-100',
      'actinide': 'text-indigo-100',
      'unknown': 'text-gray-100'
    };
    return colors[category as keyof typeof colors] || 'text-gray-100';
  };

  return (
    <div
      onClick={onClick}
      className={`
        element-card relative h-14 md:h-18 lg:h-20 
        bg-gradient-to-br ${getCategoryColor(element.category)}
        border-2 border-transparent rounded-xl m-1
        transition-all duration-500 ease-out
        hover:scale-125 hover:z-20 hover:rotate-3
        hover:shadow-2xl hover:${getCategoryGlow(element.category)}
        hover:brightness-125 hover:saturate-150
        group animate-fade-in neon-border fluorescent-glow
        backdrop-blur-sm bg-opacity-90
        ${getCategoryTextColor(element.category)}
      `}
      style={{
        boxShadow: `0 0 15px ${element.category === 'alkali metal' ? '#f472b6' :
                              element.category === 'alkaline earth metal' ? '#fb923c' :
                              element.category === 'transition metal' ? '#facc15' :
                              element.category === 'post-transition metal' ? '#4ade80' :
                              element.category === 'metalloid' ? '#22d3ee' :
                              element.category === 'reactive nonmetal' ? '#3b82f6' :
                              element.category === 'noble gas' ? '#a855f7' :
                              element.category === 'lanthanide' ? '#d946ef' :
                              element.category === 'actinide' ? '#6366f1' : '#6b7280'}40`
      }}
    >
      {/* Animated glow effect */}
      <div className={`
        absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100
        bg-gradient-to-br ${getCategoryColor(element.category)}
        blur-md transition-all duration-500 animate-pulse-slow
        -z-10 scale-110
      `} />
      
      {/* Inner glow */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent opacity-50" />
      
      <div className="relative p-1 md:p-2 lg:p-3 h-full flex flex-col justify-center items-center text-center tech-font">
        <div className="text-xs md:text-sm lg:text-base font-bold leading-none mb-1 opacity-80">
          {element.atomicNumber}
        </div>
        <div className="text-lg md:text-2xl lg:text-3xl font-black leading-none mb-1 drop-shadow-lg">
          {element.symbol}
        </div>
        <div className="text-xs md:text-sm leading-none truncate w-full font-medium opacity-90">
          {element.name}
        </div>
        
        {/* Atomic mass indicator */}
        <div className="absolute top-1 right-1 text-xs opacity-60 font-mono">
          {Math.round(element.atomicMass)}
        </div>
      </div>
      
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-0 h-0 border-l-8 border-b-8 border-l-transparent border-b-white/30 rounded-br-xl" />
    </div>
  );
};
