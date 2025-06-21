
import React from 'react';
import { X, Code, Heart, Zap, Linkedin } from 'lucide-react';

interface DeveloperModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeveloperModal: React.FC<DeveloperModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-2 sm:p-4 animate-fade-in">
      <div className="bg-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 max-w-sm sm:max-w-lg w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto border border-gray-700 animate-scale-in">
        {/* Header */}
        <div className="flex justify-between items-start mb-4 sm:mb-6">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center">
              <Code className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg sm:text-2xl font-bold text-white">Meet the Developer</h1>
              <p className="text-sm sm:text-base text-gray-400">The mind behind The Atom Table</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 hover:bg-gray-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-4 sm:space-y-6">
          {/* Profile Section */}
          <div className="text-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
              <span className="text-2xl sm:text-3xl font-bold text-white">ZS</span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">Zian Surani</h2>
            <p className="text-sm sm:text-base text-gray-400 mb-3">Full-Stack Developer & Chemistry Enthusiast</p>
            
            {/* LinkedIn Link */}
            <a
              href="https://www.linkedin.com/in/zian-rajeshkumar-surani-125215195"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-white text-sm sm:text-base"
            >
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Connect on LinkedIn</span>
            </a>
          </div>

          {/* About */}
          <div className="bg-gray-800 rounded-lg p-3 sm:p-4">
            <div className="flex items-center space-x-2 mb-2 sm:mb-3">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />
              <h3 className="text-sm sm:text-base font-semibold text-white">About Me</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Hello! I'm passionate about creating educational tools that make complex subjects 
              accessible and engaging. The Atom Table was born from my love of both chemistry 
              and beautiful, interactive web experiences.
            </p>
          </div>

          {/* Skills */}
          <div className="bg-gray-800 rounded-lg p-3 sm:p-4">
            <div className="flex items-center space-x-2 mb-2 sm:mb-3">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
              <h3 className="text-sm sm:text-base font-semibold text-white">Technologies Used</h3>
            </div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {['React', 'TypeScript', 'Tailwind CSS', 'Lucide Icons', 'Vite'].map((tech) => (
                <span
                  key={tech}
                  className="px-2 sm:px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 
                           border border-blue-500/30 rounded-full text-xs sm:text-sm text-blue-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Mission */}
          <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg p-3 sm:p-4 border border-green-500/30">
            <h3 className="text-sm sm:text-base font-semibold text-white mb-2">Mission</h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              To make scientific education more interactive, beautiful, and accessible to learners 
              everywhere. Every element tells a story, and I want to help you discover those stories.
            </p>
          </div>

          {/* Contact */}
          <div className="text-center">
            <p className="text-gray-400 text-xs sm:text-sm">
              Built with ❤️ using modern web technologies
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Open source and available on GitHub
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
