
import React from 'react';
import { Github, User, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  onAboutClick: () => void;
  onDeveloperClick: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onAboutClick, onDeveloperClick }) => {
  const handleGithubClick = () => {
    window.open('https://github.com', '_blank');
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/zian-rajeshkumar-surani-125215195/', '_blank');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b-2 border-blue-500/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-400 via-purple-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white font-black text-lg tech-font">AT</span>
          </div>
          <span className="text-white font-black text-2xl tech-font bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            The Atom Table
          </span>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button
            variant="ghost"
            onClick={onAboutClick}
            className="text-gray-300 hover:text-white hover:bg-blue-600/20 border border-transparent hover:border-blue-400/50 transition-all duration-300 modern-font font-semibold"
          >
            <Info className="w-5 h-5 mr-2" />
            About
          </Button>
          
          <Button
            variant="ghost"
            onClick={handleLinkedInClick}
            className="text-gray-300 hover:text-white hover:bg-purple-600/20 border border-transparent hover:border-purple-400/50 transition-all duration-300 modern-font font-semibold"
          >
            <User className="w-5 h-5 mr-2" />
            Developer
          </Button>
          
          <Button
            onClick={handleGithubClick}
            className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white border-2 border-gray-500 hover:border-gray-400 transition-all duration-300 shadow-lg hover:shadow-xl modern-font font-bold px-6 py-3"
          >
            <Github className="w-5 h-5 mr-2" />
            GitHub
          </Button>
        </div>
      </div>
    </nav>
  );
};
