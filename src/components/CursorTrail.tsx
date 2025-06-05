
import React, { useEffect, useState } from 'react';

export const CursorTrail: React.FC = () => {
  const [trails, setTrails] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let trailId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Add new trail point
      setTrails(prev => {
        const newTrail = { x: mouseX, y: mouseY, id: trailId++ };
        const updated = [newTrail, ...prev].slice(0, 12); // Keep only last 12 points
        return updated;
      });
    };

    // Clear old trail points
    const clearTrails = setInterval(() => {
      setTrails(prev => prev.slice(0, -1));
    }, 50);

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearInterval(clearTrails);
    };
  }, []);

  return (
    <>
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="fixed pointer-events-none z-[9999] rounded-full"
          style={{
            left: trail.x - 3,
            top: trail.y - 3,
            width: Math.max(2, 6 - index * 0.3),
            height: Math.max(2, 6 - index * 0.3),
            background: `radial-gradient(circle, rgba(96, 165, 250, ${0.8 - index * 0.06}) 0%, rgba(59, 130, 246, ${0.4 - index * 0.03}) 50%, transparent 70%)`,
            boxShadow: `0 0 ${Math.max(5, 15 - index)}px rgba(59, 130, 246, ${0.5 - index * 0.04})`,
            transition: 'opacity 0.3s ease-out',
            opacity: Math.max(0, 1 - index * 0.08)
          }}
        />
      ))}
    </>
  );
};
