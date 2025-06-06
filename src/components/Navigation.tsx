
import React from 'react';
import { Github, Info, User, Code } from 'lucide-react';

interface NavigationProps {
  onAboutClick: () => void;
  onDeveloperClick: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onAboutClick, onDeveloperClick }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-gray-900/80 via-gray-800/80 to-gray-900/80 backdrop-blur-md border-b border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <img 
                src="/lovable-uploads/ccc83364-6481-4b28-9be5-efdd8a876884.png" 
                alt="The Atom Table Logo" 
                className="w-8 h-8 object-contain"
              />
            </div>
            <span className="text-white text-xl font-bold tech-font">The Atom Table</span>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-2">
            <button
              onClick={onAboutClick}
              className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all duration-300 modern-font"
            >
              <Info className="w-4 h-4" />
              <span>About</span>
            </button>
            
            <button
              onClick={onDeveloperClick}
              className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all duration-300 modern-font"
            >
              <User className="w-4 h-4" />
              <span>Developer</span>
            </button>
            
            <a
              href="https://github.com/Zian-Surani"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all duration-300 modern-font"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
