
import React, { useState } from 'react';
import { ElementCard } from '../components/ElementCard';
import { ElementModal } from '../components/ElementModal';
import { LiveBackground } from '../components/LiveBackground';
import { Navigation } from '../components/Navigation';
import { AboutModal } from '../components/AboutModal';
import { DeveloperModal } from '../components/DeveloperModal';
import { getAllElements } from '../data/periodicTableData';
import { Element } from '../types/Element';

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
      
      {/* Simplified Welcome Screen */}
      {showWelcome && (
        <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center z-50">
          <div className="text-center space-y-8 max-w-4xl px-6">
            <div className="space-y-4">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 via-purple-500 to-cyan-400 rounded-xl mx-auto flex items-center justify-center shadow-xl">
                <span className="text-3xl font-black text-white tech-font">AT</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent tech-font">
                The Atom Table
              </h1>
              
              <p className="text-xl text-gray-300 max-w-2xl mx-auto modern-font">
                Discover the fundamental building blocks of our universe
              </p>
            </div>
            
            <button
              onClick={handleGetStarted}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-bold text-lg
                       hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300
                       shadow-lg tech-font"
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
      <div className="pt-20">
        {/* Header */}
        <header className="text-center py-8 px-6">
          <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent tech-font mb-4">
            The Atom Table
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto modern-font">
            Interactive Periodic Table with comprehensive scientific data
          </p>
        </header>

        {/* Optimized Periodic Table */}
        <div className="px-4 pb-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-18 gap-1 bg-gray-900/20 p-4 rounded-2xl border border-gray-700/30 backdrop-blur-sm">
              {Array.from({ length: 18 }, (_, colIndex) => (
                <div key={colIndex} className="space-y-1">
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
            
            {/* Lanthanides and Actinides */}
            <div className="mt-6 space-y-3">
              <div className="text-center">
                <h3 className="text-lg font-bold text-purple-400 mb-2 tech-font">Lanthanides</h3>
                <div className="flex justify-center">
                  <div className="grid grid-cols-15 gap-1 bg-purple-900/10 p-3 rounded-xl border border-purple-500/20">
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
                <h3 className="text-lg font-bold text-indigo-400 mb-2 tech-font">Actinides</h3>
                <div className="flex justify-center">
                  <div className="grid grid-cols-15 gap-1 bg-indigo-900/10 p-3 rounded-xl border border-indigo-500/20">
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
