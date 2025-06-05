
import React from 'react';

export const Atom3D: React.FC = () => {
  return (
    <div className="atom-container w-[500px] h-[500px] flex items-center justify-center">
      <div className="atom relative">
        {/* Nucleus */}
        <div className="nucleus absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full shadow-lg animate-pulse" />
        
        {/* Electron orbits */}
        <div className="orbit orbit-1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-blue-300/40 rounded-full animate-spin">
          <div className="electron absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-400 rounded-full shadow-lg" />
        </div>
        
        <div className="orbit orbit-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-purple-300/40 rounded-full" style={{ animation: 'spin 3s linear infinite reverse' }}>
          <div className="electron absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-purple-400 rounded-full shadow-lg" />
        </div>
        
        <div className="orbit orbit-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-green-300/40 rounded-full" style={{ animation: 'spin 4s linear infinite' }}>
          <div className="electron absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-green-400 rounded-full shadow-lg" />
        </div>
      </div>
      
      <style jsx>{`
        .orbit-1 {
          animation: spin 2s linear infinite;
        }
        .orbit-2 {
          animation: spin 3s linear infinite reverse;
        }
        .orbit-3 {
          animation: spin 4s linear infinite;
        }
        
        @keyframes spin {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};
