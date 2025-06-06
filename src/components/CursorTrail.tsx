
import React, { useEffect, useState, useCallback } from 'react';

export const CursorTrail: React.FC = () => {
  const [trails, setTrails] = useState<Array<{ x: number; y: number; id: number }>>([]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setTrails(prev => {
      const newTrail = { x: e.clientX, y: e.clientY, id: Date.now() };
      return [newTrail, ...prev.slice(0, 6)]; // Reduced trail length for performance
    });
  }, []);

  useEffect(() => {
    // Throttle mouse move events for better performance
    let animationFrame: number;
    const throttledMouseMove = (e: MouseEvent) => {
      if (animationFrame) return;
      animationFrame = requestAnimationFrame(() => {
        handleMouseMove(e);
        animationFrame = 0;
      });
    };

    document.addEventListener('mousemove', throttledMouseMove);

    // Clear old trail points less frequently
    const clearTrails = setInterval(() => {
      setTrails(prev => prev.slice(0, -1));
    }, 100);

    return () => {
      document.removeEventListener('mousemove', throttledMouseMove);
      clearInterval(clearTrails);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [handleMouseMove]);

  return (
    <>
      {/* Main cursor dot - more visible */}
      <div 
        className="fixed pointer-events-none z-[9999] w-4 h-4 bg-blue-400 rounded-full shadow-lg"
        style={{
          left: trails[0]?.x - 8 || -100,
          top: trails[0]?.y - 8 || -100,
          boxShadow: '0 0 20px rgba(59, 130, 246, 0.8)',
          transition: 'none'
        }}
      />
      {trails.slice(1).map((trail, index) => (
        <div
          key={trail.id}
          className="fixed pointer-events-none z-[9998] rounded-full"
          style={{
            left: trail.x - 2,
            top: trail.y - 2,
            width: Math.max(1, 4 - index * 0.5),
            height: Math.max(1, 4 - index * 0.5),
            background: `rgba(59, 130, 246, ${0.6 - index * 0.1})`,
            transition: 'none'
          }}
        />
      ))}
    </>
  );
};
