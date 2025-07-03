
import React, { useEffect, useState, useCallback } from 'react';

export const CursorTrail: React.FC = () => {
  const [trails, setTrails] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isMobile) return; // Don't track on mobile
    
    setTrails(prev => {
      const newTrail = { x: e.clientX, y: e.clientY, id: Date.now() };
      return [newTrail, ...prev.slice(0, 4)]; // Further reduced trail length
    });
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return; // Skip cursor trail entirely on mobile
    
    // Optimized throttling for better performance
    let animationFrame: number;
    let lastTime = 0;
    
    const throttledMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - lastTime < 16) return; // ~60fps limit
      
      if (animationFrame) return;
      animationFrame = requestAnimationFrame(() => {
        handleMouseMove(e);
        animationFrame = 0;
        lastTime = now;
      });
    };

    document.addEventListener('mousemove', throttledMouseMove, { passive: true });

    // Clear old trail points
    const clearTrails = setInterval(() => {
      setTrails(prev => prev.slice(0, -1));
    }, 120);

    return () => {
      document.removeEventListener('mousemove', throttledMouseMove);
      clearInterval(clearTrails);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [handleMouseMove, isMobile]);

  // Don't render cursor trail on mobile
  if (isMobile || trails.length === 0) return null;

  return (
    <div className="cursor-trail">
      {/* Main cursor dot - smaller and more subtle */}
      <div 
        className="fixed pointer-events-none z-[9999] w-3 h-3 bg-blue-400/80 rounded-full"
        style={{
          left: trails[0]?.x - 6 || -100,
          top: trails[0]?.y - 6 || -100,
          boxShadow: '0 0 12px rgba(59, 130, 246, 0.4)',
          transition: 'none',
          transform: 'translateZ(0)', // Hardware acceleration
        }}
      />
      {trails.slice(1).map((trail, index) => (
        <div
          key={trail.id}
          className="fixed pointer-events-none z-[9998] rounded-full"
          style={{
            left: trail.x - 1,
            top: trail.y - 1,
            width: Math.max(1, 3 - index * 0.7),
            height: Math.max(1, 3 - index * 0.7),
            background: `rgba(59, 130, 246, ${0.4 - index * 0.1})`,
            transition: 'none',
            transform: 'translateZ(0)', // Hardware acceleration
          }}
        />
      ))}
    </div>
  );
};
