
import React from 'react';
import { Element } from '../types/Element';

interface ElementCardProps {
  element: Element;
  onClick: () => void;
}

export const ElementCard: React.FC<ElementCardProps> = ({ element, onClick }) => {
  const getCategoryColor = (category: string) => {
    const colors = {
      'alkali metal': 'from-red-500 to-red-600',
      'alkaline earth metal': 'from-orange-500 to-orange-600',
      'transition metal': 'from-yellow-500 to-yellow-600',
      'post-transition metal': 'from-green-500 to-green-600',
      'metalloid': 'from-teal-500 to-teal-600',
      'reactive nonmetal': 'from-blue-500 to-blue-600',
      'noble gas': 'from-purple-500 to-purple-600',
      'lanthanide': 'from-pink-500 to-pink-600',
      'actinide': 'from-indigo-500 to-indigo-600'
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  const getCategoryGlow = (category: string) => {
    const glows = {
      'alkali metal': 'shadow-red-500/50',
      'alkaline earth metal': 'shadow-orange-500/50',
      'transition metal': 'shadow-yellow-500/50',
      'post-transition metal': 'shadow-green-500/50',
      'metalloid': 'shadow-teal-500/50',
      'reactive nonmetal': 'shadow-blue-500/50',
      'noble gas': 'shadow-purple-500/50',
      'lanthanide': 'shadow-pink-500/50',
      'actinide': 'shadow-indigo-500/50'
    };
    return glows[category as keyof typeof glows] || 'shadow-gray-500/50';
  };

  return (
    <div
      onClick={onClick}
      className={`
        relative h-12 md:h-16 cursor-pointer
        bg-gradient-to-br ${getCategoryColor(element.category)}
        border border-gray-700 rounded-lg
        transition-all duration-300 ease-out
        hover:scale-110 hover:z-10
        hover:shadow-lg hover:${getCategoryGlow(element.category)}
        hover:brightness-125
        group
        animate-fade-in
      `}
    >
      {/* Glow effect */}
      <div className={`
        absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100
        bg-gradient-to-br ${getCategoryColor(element.category)}
        blur-sm transition-opacity duration-300
        -z-10
      `} />
      
      <div className="p-1 md:p-2 h-full flex flex-col justify-center items-center text-center">
        <div className="text-xs md:text-sm font-bold leading-none">
          {element.atomicNumber}
        </div>
        <div className="text-lg md:text-2xl font-bold leading-none">
          {element.symbol}
        </div>
        <div className="text-xs leading-none truncate w-full">
          {element.name}
        </div>
      </div>
      
      {/* Atomic mass */}
      <div className="absolute bottom-0 right-0 text-xs opacity-70 p-1">
        {element.atomicMass.toFixed(1)}
      </div>
    </div>
  );
};
