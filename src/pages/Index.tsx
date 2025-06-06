
import React, { useState } from 'react';
import { ElementCard } from '../components/ElementCard';
import { ElementModal } from '../components/ElementModal';
import { LiveBackground } from '../components/LiveBackground';
import { Navigation } from '../components/Navigation';
import { AboutModal } from '../components/AboutModal';
import { DeveloperModal } from '../components/DeveloperModal';
import { getAllElements } from '../data/periodicTableData';
import { Element } from '../types/Element';
import { Sparkles, Zap, Atom } from 'lucide-react';

const Index = () => {
  const [selectedElement, setSelectedElement] = useState<Element | null>(null);
  const [showAbout, setShowAbout] = useState(false);
  const [showDeveloper, setShowDeveloper] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  const allElements = getAllElements();

  const handleElementClick = (element: Element) => {
    setSelectedElement(element);
  };

  const closeModal = () => {
    setSelectedElement(null);
  };

  const handleGetStarted = () => {
    setShowWelcome(false);
  };

  return (
    <div className="min-h-screen text-white overflow-x-auto">
      <LiveBackground />
      
      {/* Enhanced Welcome Screen */}
      {showWelcome && (
        <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center z-50">
          <div className="text-center space-y-6 sm:space-y-8 max-w-4xl px-4 sm:px-6">
            <div className="space-y-4">
              {/* Animated logo */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-400 via-purple-500 to-cyan-400 rounded-xl mx-auto flex items-center justify-center shadow-xl animate-pulse">
                <span className="text-2xl sm:text-3xl font-black text-white tech-font">AT</span>
              </div>
              
              {/* Enhanced title with animations */}
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent tech-font animate-fade-in">
                The Atom Table
              </h1>
              
              {/* Subtitle with icons */}
              <div className="flex items-center justify-center space-x-2 sm:space-x-3">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 animate-pulse" />
                <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto modern-font">
                  Discover the fundamental building blocks of our universe
                </p>
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 animate-pulse" />
              </div>
              
              {/* Feature highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8 max-w-3xl mx-auto">
                <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 p-4 sm:p-6 rounded-xl border border-blue-500/30">
                  <Atom className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <h3 className="text-sm sm:text-base font-bold text-blue-300 mb-1">Interactive Elements</h3>
                  <p className="text-xs sm:text-sm text-gray-300">Click any element to explore its properties</p>
                </div>
                <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 p-4 sm:p-6 rounded-xl border border-purple-500/30">
                  <Zap className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <h3 className="text-sm sm:text-base font-bold text-purple-300 mb-1">Scientific Data</h3>
                  <p className="text-xs sm:text-sm text-gray-300">Complete electron configurations & properties</p>
                </div>
                <div className="bg-gradient-to-br from-green-900/30 to-green-800/20 p-4 sm:p-6 rounded-xl border border-green-500/30">
                  <Sparkles className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <h3 className="text-sm sm:text-base font-bold text-green-300 mb-1">Visual Effects</h3>
                  <p className="text-xs sm:text-sm text-gray-300">Beautiful animations & live backgrounds</p>
                </div>
              </div>
            </div>
            
            <button
              onClick={handleGetStarted}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-bold text-base sm:text-lg
                       hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 active:scale-95 transition-all duration-300
                       shadow-lg tech-font animate-glow"
            >
              Explore the Elements
            </button>
          </div>
        </div>
      )}

      <Navigation 
        onAboutClick={() => setShowAbout(true)}
        onDeveloperClick={() => setShowDeveloper(true)}
      />

      {/* Main Content */}
      <div className="pt-16 sm:pt-20">
        {/* Enhanced Header */}
        <header className="text-center py-6 sm:py-8 px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent tech-font mb-2 sm:mb-4">
            The Atom Table
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto modern-font">
            Interactive Periodic Table with comprehensive scientific data
          </p>
        </header>

        {/* Optimized Periodic Table for Mobile */}
        <div className="px-2 sm:px-4 pb-6 sm:pb-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-18 gap-0.5 sm:gap-1 bg-gray-900/20 p-2 sm:p-4 rounded-xl sm:rounded-2xl border border-gray-700/30 backdrop-blur-sm overflow-x-auto">
              {Array.from({ length: 18 }, (_, colIndex) => (
                <div key={colIndex} className="space-y-0.5 sm:space-y-1">
                  {Array.from({ length: 10 }, (_, rowIndex) => {
                    const element = allElements.find(
                      el => el.column === colIndex + 1 && el.row === rowIndex + 1
                    );
                    
                    if (!element) {
                      return <div key={`${rowIndex}-${colIndex}`} className="aspect-square" />;
                    }

                    return (
                      <ElementCard
                        key={element.symbol}
                        element={element}
                        onClick={() => handleElementClick(element)}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
            
            {/* Enhanced Lanthanides and Actinides */}
            <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
              <div className="text-center">
                <h3 className="text-base sm:text-lg font-bold text-purple-400 mb-1 sm:mb-2 tech-font">Lanthanides</h3>
                <div className="flex justify-center">
                  <div className="grid grid-cols-15 gap-0.5 sm:gap-1 bg-purple-900/10 p-2 sm:p-3 rounded-lg sm:rounded-xl border border-purple-500/20">
                    {allElements
                      .filter(el => el.atomicNumber >= 57 && el.atomicNumber <= 71)
                      .map(element => (
                        <ElementCard
                          key={element.symbol}
                          element={element}
                          onClick={() => handleElementClick(element)}
                        />
                      ))}
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-base sm:text-lg font-bold text-indigo-400 mb-1 sm:mb-2 tech-font">Actinides</h3>
                <div className="flex justify-center">
                  <div className="grid grid-cols-15 gap-0.5 sm:gap-1 bg-indigo-900/10 p-2 sm:p-3 rounded-lg sm:rounded-xl border border-indigo-500/20">
                    {allElements
                      .filter(el => el.atomicNumber >= 89 && el.atomicNumber <= 103)
                      .map(element => (
                        <ElementCard
                          key={element.symbol}
                          element={element}
                          onClick={() => handleElementClick(element)}
                        />
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {selectedElement && (
        <ElementModal
          element={selectedElement}
          onClose={closeModal}
        />
      )}

      <AboutModal 
        isOpen={showAbout}
        onClose={() => setShowAbout(false)}
      />

      <DeveloperModal 
        isOpen={showDeveloper}
        onClose={() => setShowDeveloper(false)}
      />
    </div>
  );
};

export default Index;
