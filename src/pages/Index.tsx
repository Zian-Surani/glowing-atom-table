
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
      
      {/* Welcome Screen */}
      {showWelcome && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 animate-fade-in">
          <div className="text-center space-y-8 max-w-2xl px-4">
            <div className="space-y-4">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto flex items-center justify-center animate-pulse">
                <span className="text-3xl font-bold text-white">AT</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent animate-pulse">
                The Atom Table
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-xl mx-auto leading-relaxed">
                Explore the building blocks of everything around you in this interactive periodic table experience
              </p>
            </div>
            
            <div className="space-y-4">
              <button
                onClick={handleGetStarted}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold text-lg
                         hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300
                         shadow-lg hover:shadow-xl"
              >
                Explore the Elements
              </button>
              <p className="text-gray-400 text-sm">
                Click on any element to discover its secrets
              </p>
            </div>
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
        <header className="text-center py-8 px-4">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent animate-pulse">
            The Atom Table
          </h1>
          <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
            Interactive Periodic Table with all 118 elements
          </p>
        </header>

        {/* Periodic Table */}
        <div className="px-4 pb-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-18 gap-1 md:gap-2 min-w-[1200px]">
              {Array.from({ length: 18 }, (_, colIndex) => (
                <div key={colIndex} className="col-span-1">
                  {Array.from({ length: 10 }, (_, rowIndex) => {
                    const element = allElements.find(
                      el => el.column === colIndex + 1 && el.row === rowIndex + 1
                    );
                    
                    if (!element) {
                      return <div key={`${rowIndex}-${colIndex}`} className="h-12 md:h-16" />;
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
            <div className="mt-8 space-y-4">
              {/* Lanthanides */}
              <div className="flex justify-center">
                <div className="grid grid-cols-15 gap-1 md:gap-2">
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
              
              {/* Actinides */}
              <div className="flex justify-center">
                <div className="grid grid-cols-15 gap-1 md:gap-2">
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
