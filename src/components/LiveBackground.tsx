
import React from 'react';

export const LiveBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-slate-900" />
      
      {/* Subtle starfield */}
      <div className="absolute inset-0">
        {Array.from({ length: 100 }, (_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${3 + Math.random() * 4}s infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      {/* Meteor streaks */}
      <div className="absolute inset-0">
        {Array.from({ length: 5 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-20 bg-gradient-to-b from-blue-400/30 to-transparent rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: 'rotate(45deg)',
              animation: `meteor ${8 + Math.random() * 4}s infinite linear`,
              animationDelay: `${Math.random() * 10}s`
            }}
          />
        ))}
      </div>
      
      {/* Subtle floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animation: `float ${6 + Math.random() * 4}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }
        
        @keyframes meteor {
          0% { 
            transform: translateX(-100px) translateY(-100px) rotate(45deg);
            opacity: 0;
          }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { 
            transform: translateX(calc(100vw + 100px)) translateY(calc(100vh + 100px)) rotate(45deg);
            opacity: 0;
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </div>
  );
};
