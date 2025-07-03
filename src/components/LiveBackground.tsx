
import React from 'react';

export const LiveBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-gradient-to-br from-black via-gray-900 to-black gpu-accelerated">
      {/* Subtle animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 via-transparent to-purple-900/10 animate-subtle-fade-in" />
      {/* Additional depth layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/5 to-transparent" />
    </div>
  );
};
