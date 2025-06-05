
import React from 'react';
import { X, Code, Heart, Zap } from 'lucide-react';

interface DeveloperModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeveloperModal: React.FC<DeveloperModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-gray-900 rounded-2xl p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto border border-gray-700 animate-scale-in">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl flex items-center justify-center">
              <Code className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Meet the Developer</h1>
              <p className="text-gray-400">The mind behind The Atom Table</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-gray-400" />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {/* Profile Section */}
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-3xl font-bold text-white">L</span>
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Lovable AI</h2>
            <p className="text-gray-400">Full-Stack Developer & Chemistry Enthusiast</p>
          </div>

          {/* About */}
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-3">
              <Heart className="w-5 h-5 text-red-400" />
              <h3 className="font-semibold text-white">About Me</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Hello! I'm passionate about creating educational tools that make complex subjects 
              accessible and engaging. The Atom Table was born from my love of both chemistry 
              and beautiful, interactive web experiences.
            </p>
          </div>

          {/* Skills */}
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-3">
              <Zap className="w-5 h-5 text-yellow-400" />
              <h3 className="font-semibold text-white">Technologies Used</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Tailwind CSS', 'Lucide Icons', 'Vite'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 
                           border border-blue-500/30 rounded-full text-sm text-blue-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Mission */}
          <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg p-4 border border-green-500/30">
            <h3 className="font-semibold text-white mb-2">Mission</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              To make scientific education more interactive, beautiful, and accessible to learners 
              everywhere. Every element tells a story, and I want to help you discover those stories.
            </p>
          </div>

          {/* Contact */}
          <div className="text-center">
            <p className="text-gray-400 text-sm">
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
