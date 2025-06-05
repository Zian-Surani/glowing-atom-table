
import React from 'react';

export const LiveBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 animate-pulse" />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      {/* Animated orbital rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`absolute border border-blue-500/10 rounded-full animate-spin`}
              style={{
                width: `${200 + i * 100}px`,
                height: `${200 + i * 100}px`,
                left: `${-100 - i * 50}px`,
                top: `${-100 - i * 50}px`,
                animationDuration: `${20 + i * 10}s`,
                animationDirection: i % 2 === 0 ? 'normal' : 'reverse'
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Glowing molecules */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-30 animate-bounce"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};
