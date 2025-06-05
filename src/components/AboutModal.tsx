
import React from 'react';
import { X, Atom, Zap, Star } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-gray-900 rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700 animate-scale-in">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Atom className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">About The Atom Table</h1>
              <p className="text-gray-400">Interactive Periodic Table Experience</p>
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
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-3">
              <Zap className="w-5 h-5 text-yellow-400" />
              <h3 className="font-semibold text-white">What is The Atom Table?</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              The Atom Table is an interactive periodic table that brings chemistry to life. 
              Explore all 118 elements with detailed information, beautiful animations, and 
              an intuitive interface designed to make learning about the elements engaging and fun.
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-3">
              <Star className="w-5 h-5 text-blue-400" />
              <h3 className="font-semibold text-white">Features</h3>
            </div>
            <ul className="text-gray-300 space-y-2">
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                <span>Complete periodic table with all 118 elements</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                <span>Detailed element information including properties, uses, and discovery history</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                <span>Interactive hover effects and smooth animations</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                <span>Color-coded element categories for easy identification</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                <span>Beautiful live background with atomic orbital animations</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-lg p-4">
            <h3 className="font-semibold text-white mb-3">How to Use</h3>
            <div className="text-gray-300 space-y-2">
              <p>• Click on any element to view detailed information</p>
              <p>• Hover over elements to see their glow effects</p>
              <p>• Elements are color-coded by their chemical categories</p>
              <p>• Scroll through the table to explore all periods and groups</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-4 border border-blue-500/30">
            <p className="text-center text-gray-300">
              "The important thing is not to stop questioning. Curiosity has its own reason for existing."
            </p>
            <p className="text-center text-blue-400 font-semibold mt-2">— Albert Einstein</p>
          </div>
        </div>
      </div>
    </div>
  );
};
