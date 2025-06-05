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
      
      {/* Enhanced Welcome Screen */}
      {showWelcome && (
        <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center z-50 animate-fade-in">
          <div className="text-center space-y-10 max-w-5xl px-6 relative">
            <div className="space-y-6 relative z-10">
              <div className="w-28 h-28 bg-gradient-to-br from-blue-400 via-purple-500 to-cyan-400 rounded-2xl mx-auto flex items-center justify-center animate-glow shadow-2xl">
                <span className="text-4xl font-black text-white tech-font">AT</span>
              </div>
              
              <h1 className="text-7xl md:text-9xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent animate-pulse tech-font leading-none">
                The Atom Table
              </h1>
              
              <p className="text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto leading-relaxed modern-font font-light">
                Discover the fundamental building blocks of our universe in this 
                <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text font-semibold"> immersive </span>
                periodic table experience
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 modern-font">
                <span className="bg-blue-500/20 px-4 py-2 rounded-full border border-blue-400/30">118 Elements</span>
                <span className="bg-purple-500/20 px-4 py-2 rounded-full border border-purple-400/30">Interactive 3D</span>
                <span className="bg-green-500/20 px-4 py-2 rounded-full border border-green-400/30">Detailed Info</span>
                <span className="bg-orange-500/20 px-4 py-2 rounded-full border border-orange-400/30">Modern Design</span>
              </div>
            </div>
            
            <div className="space-y-6 relative z-10">
              <button
                onClick={handleGetStarted}
                className="px-12 py-6 bg-gradient-to-r from-blue-500 via-purple-600 to-cyan-500 rounded-2xl text-white font-black text-xl
                         hover:from-blue-600 hover:via-purple-700 hover:to-cyan-600 transform hover:scale-110 transition-all duration-500
                         shadow-2xl hover:shadow-3xl border-2 border-white/20 hover:border-white/40 tech-font
                         animate-glow"
              >
                Explore the Elements
              </button>
              
              <p className="text-gray-400 text-lg modern-font">
                Click on any element to unlock its 
                <span className="text-blue-400 font-semibold">scientific secrets</span>
              </p>
              
              <div className="flex justify-center space-x-8 text-xs text-gray-500 modern-font">
                <span>🔬 Detailed Properties</span>
                <span>⚛️ Electron Configuration</span>
                <span>🌡️ Temperature Data</span>
                <span>📅 Discovery History</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <Navigation 
        onAboutClick={() => setShowAbout(true)}
        onDeveloperClick={() => setShowDeveloper(true)}
      />

      {/* Enhanced Main Content */}
      <div className="pt-24">
        {/* Enhanced Header */}
        <header className="text-center py-12 px-6">
          <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent animate-pulse tech-font mb-6">
            The Atom Table
          </h1>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed modern-font">
            Interactive Periodic Table featuring all 118 elements with 
            <span className="text-cyan-400 font-semibold"> advanced visualizations </span>
            and comprehensive scientific data
          </p>
          
          <div className="flex justify-center space-x-6 mt-8 text-sm text-gray-400 modern-font">
            <div className="bg-gray-800/50 px-6 py-3 rounded-xl border border-gray-600/50">
              <span className="text-blue-400 font-bold text-lg">{allElements.length}</span>
              <span className="block">Elements</span>
            </div>
            <div className="bg-gray-800/50 px-6 py-3 rounded-xl border border-gray-600/50">
              <span className="text-purple-400 font-bold text-lg">10</span>
              <span className="block">Categories</span>
            </div>
            <div className="bg-gray-800/50 px-6 py-3 rounded-xl border border-gray-600/50">
              <span className="text-green-400 font-bold text-lg">7</span>
              <span className="block">Periods</span>
            </div>
          </div>
        </header>

        {/* Enhanced Periodic Table */}
        <div className="px-6 pb-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-18 gap-2 md:gap-3 min-w-[1200px] bg-gray-900/30 p-6 rounded-3xl border-2 border-gray-700/50 backdrop-blur-sm">
              {Array.from({ length: 18 }, (_, colIndex) => (
                <div key={colIndex} className="col-span-1">
                  {Array.from({ length: 10 }, (_, rowIndex) => {
                    const element = allElements.find(
                      el => el.column === colIndex + 1 && el.row === rowIndex + 1
                    );
                    
                    if (!element) {
                      return <div key={`${rowIndex}-${colIndex}`} className="h-14 md:h-18 lg:h-20" />;
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
            <div className="mt-8 space-y-4">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-purple-400 mb-2 tech-font">Lanthanides</h3>
                <div className="flex justify-center">
                  <div className="grid grid-cols-15 gap-2 md:gap-3 bg-purple-900/20 p-4 rounded-2xl border border-purple-500/30">
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
                <h3 className="text-2xl font-bold text-indigo-400 mb-2 tech-font">Actinides</h3>
                <div className="flex justify-center">
                  <div className="grid grid-cols-15 gap-2 md:gap-3 bg-indigo-900/20 p-4 rounded-2xl border border-indigo-500/30">
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
