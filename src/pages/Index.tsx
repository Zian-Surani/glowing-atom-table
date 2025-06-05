
import React, { useState } from 'react';
import { ElementCard } from '../components/ElementCard';
import { ElementModal } from '../components/ElementModal';
import { periodicTableData } from '../data/periodicTableData';
import { Element } from '../types/Element';

const Index = () => {
  const [selectedElement, setSelectedElement] = useState<Element | null>(null);

  const handleElementClick = (element: Element) => {
    setSelectedElement(element);
  };

  const closeModal = () => {
    setSelectedElement(null);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-auto">
      {/* Header */}
      <header className="text-center py-8 px-4">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent animate-pulse">
          The Atom Table
        </h1>
        <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
          Explore the building blocks of everything around you
        </p>
      </header>

      {/* Periodic Table */}
      <div className="px-4 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-18 gap-1 md:gap-2 min-w-[1200px]">
            {Array.from({ length: 18 }, (_, colIndex) => (
              <div key={colIndex} className="col-span-1">
                {Array.from({ length: 10 }, (_, rowIndex) => {
                  const element = periodicTableData.find(
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
                {periodicTableData
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
                {periodicTableData
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

      {/* Element Modal */}
      {selectedElement && (
        <ElementModal
          element={selectedElement}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default Index;
