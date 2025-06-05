
import React from 'react';
import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  onAboutClick: () => void;
  onDeveloperClick: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onAboutClick, onDeveloperClick }) => {
  const handleGithubClick = () => {
    window.open('https://github.com', '_blank');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">AT</span>
          </div>
          <span className="text-white font-bold text-xl">The Atom Table</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            onClick={onAboutClick}
            className="text-gray-300 hover:text-white hover:bg-gray-800"
          >
            About
          </Button>
          <Button
            variant="ghost"
            onClick={onDeveloperClick}
            className="text-gray-300 hover:text-white hover:bg-gray-800"
          >
            Meet the Developer
          </Button>
          <Button
            variant="outline"
            onClick={handleGithubClick}
            className="text-gray-300 border-gray-600 hover:bg-gray-800 hover:text-white"
          >
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </Button>
        </div>
      </div>
    </nav>
  );
};
