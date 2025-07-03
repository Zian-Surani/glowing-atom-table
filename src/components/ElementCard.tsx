
import React from 'react';
import { Element } from '../types/Element';

interface ElementCardProps {
  element: Element;
  onClick: () => void;
}

export const ElementCard: React.FC<ElementCardProps> = ({ element, onClick }) => {
  const getCategoryColor = (category: string) => {
    const colors = {
      'alkali metal': 'from-pink-500/80 to-pink-600/80',
      'alkaline earth metal': 'from-orange-500/80 to-orange-600/80',
      'transition metal': 'from-yellow-500/80 to-yellow-600/80',
      'post-transition metal': 'from-green-500/80 to-green-600/80',
      'metalloid': 'from-cyan-500/80 to-cyan-600/80',
      'reactive nonmetal': 'from-blue-500/80 to-blue-600/80',
      'noble gas': 'from-purple-500/80 to-purple-600/80',
      'lanthanide': 'from-fuchsia-500/80 to-fuchsia-600/80',
      'actinide': 'from-indigo-500/80 to-indigo-600/80',
      'unknown': 'from-gray-500/80 to-gray-600/80'
    };
    return colors[category as keyof typeof colors] || 'from-gray-500/80 to-gray-600/80';
  };

  const getCategoryTextColor = (category: string) => {
    const colors = {
      'alkali metal': 'text-pink-50',
      'alkaline earth metal': 'text-orange-50',
      'transition metal': 'text-yellow-50',
      'post-transition metal': 'text-green-50',
      'metalloid': 'text-cyan-50',
      'reactive nonmetal': 'text-blue-50',
      'noble gas': 'text-purple-50',
      'lanthanide': 'text-fuchsia-50',
      'actinide': 'text-indigo-50',
      'unknown': 'text-gray-50'
    };
    return colors[category as keyof typeof colors] || 'text-gray-50';
  };

  return (
    <div
      onClick={onClick}
      className={`
        element-card relative aspect-square w-full
        bg-gradient-to-br ${getCategoryColor(element.category)}
        border border-white/20 rounded-lg
        will-change-transform gpu-accelerated
        transition-transform duration-200 ease-out
        hover:scale-105 hover:shadow-lg hover:border-white/40
        cursor-pointer
        backdrop-blur-sm ${getCategoryTextColor(element.category)}
        group active:scale-95
        sm:hover:scale-110 sm:hover:shadow-xl
        md:transition-all md:duration-300
      `}
      style={{
        minWidth: '40px',
        minHeight: '40px'
      }}
    >
      {/* Subtle glow effect - only on desktop */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/10 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block" />
      
      <div className="relative p-1 sm:p-2 h-full flex flex-col justify-center items-center text-center tech-font z-10">
        <div className="text-xs sm:text-xs font-semibold leading-none mb-0.5 sm:mb-1 opacity-75">
          {element.atomicNumber}
        </div>
        <div className="text-lg sm:text-2xl font-bold leading-none mb-0.5 sm:mb-1 drop-shadow-sm">
          {element.symbol}
        </div>
        <div className="text-xs leading-tight truncate w-full font-medium opacity-80 hidden sm:block">
          {element.name}
        </div>
        {/* Mobile: Show first 3 letters only */}
        <div className="text-xs leading-tight truncate w-full font-medium opacity-80 sm:hidden">
          {element.name.substring(0, 3)}
        </div>
      </div>
    </div>
  );
};
