import React from 'react';
import { Atom, Zap } from 'lucide-react';

export const AtomicStructure: React.FC = () => {
  return (
    <div className="relative w-full max-w-xs mx-auto aspect-square mb-8">
      {/* Nucleus */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg">
        <Atom className="w-6 h-6 text-white m-1" />
      </div>
      
      {/* Electron orbits */}
      <div className="absolute inset-0 border-2 border-blue-400/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}>
        {/* Electron 1 */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-400 rounded-full shadow-md">
          <Zap className="w-2 h-2 text-white m-0.5" />
        </div>
      </div>
      
      <div className="absolute inset-4 border-2 border-purple-400/30 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
        {/* Electron 2 */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-purple-400 rounded-full shadow-md">
          <Zap className="w-2 h-2 text-white m-0.5" />
        </div>
      </div>
      
      <div className="absolute inset-8 border-2 border-green-400/30 rounded-full animate-spin" style={{ animationDuration: '12s' }}>
        {/* Electron 3 */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-green-400 rounded-full shadow-md">
          <Zap className="w-2 h-2 text-white m-0.5" />
        </div>
      </div>
      
      {/* Central glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-yellow-400/20 via-transparent to-transparent rounded-full"></div>
    </div>
  );
};