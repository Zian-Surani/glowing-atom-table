
import React from 'react';
import { X, Thermometer, Scale, Calendar, User, Zap } from 'lucide-react';
import { Element } from '../types/Element';

interface ElementModalProps {
  element: Element;
  onClose: () => void;
}

export const ElementModal: React.FC<ElementModalProps> = ({ element, onClose }) => {
  const getCategoryColor = (category: string) => {
    const colors = {
      'alkali metal': 'from-red-500 to-red-600',
      'alkaline earth metal': 'from-orange-500 to-orange-600',
      'transition metal': 'from-yellow-500 to-yellow-600',
      'post-transition metal': 'from-green-500 to-green-600',
      'metalloid': 'from-teal-500 to-teal-600',
      'reactive nonmetal': 'from-blue-500 to-blue-600',
      'noble gas': 'from-purple-500 to-purple-600',
      'lanthanide': 'from-pink-500 to-pink-600',
      'actinide': 'from-indigo-500 to-indigo-600'
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-gray-900 rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700 animate-scale-in">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center space-x-4">
            <div className={`
              w-20 h-20 rounded-xl bg-gradient-to-br ${getCategoryColor(element.category)}
              flex items-center justify-center shadow-lg
            `}>
              <span className="text-3xl font-bold text-white">{element.symbol}</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">{element.name}</h1>
              <p className="text-gray-400 capitalize">{element.category}</p>
              <p className="text-sm text-gray-500">Atomic Number: {element.atomicNumber}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-gray-400" />
          </button>
        </div>

        {/* Basic Properties */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Scale className="w-5 h-5 text-blue-400" />
              <h3 className="font-semibold text-white">Atomic Mass</h3>
            </div>
            <p className="text-2xl font-bold text-blue-400">{element.atomicMass} u</p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              <h3 className="font-semibold text-white">Electron Config</h3>
            </div>
            <p className="text-sm text-yellow-400 font-mono">{element.electronConfiguration}</p>
          </div>
        </div>

        {/* Temperature Properties */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Thermometer className="w-5 h-5 text-red-400" />
              <h3 className="font-semibold text-white">Melting Point</h3>
            </div>
            <p className="text-xl font-bold text-red-400">
              {element.meltingPoint ? `${element.meltingPoint}°C` : 'Unknown'}
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Thermometer className="w-5 h-5 text-orange-400" />
              <h3 className="font-semibold text-white">Boiling Point</h3>
            </div>
            <p className="text-xl font-bold text-orange-400">
              {element.boilingPoint ? `${element.boilingPoint}°C` : 'Unknown'}
            </p>
          </div>
        </div>

        {/* Discovery Info */}
        <div className="bg-gray-800 rounded-lg p-4 mb-6">
          <div className="flex items-center space-x-2 mb-3">
            <Calendar className="w-5 h-5 text-purple-400" />
            <h3 className="font-semibold text-white">Discovery</h3>
          </div>
          <div className="space-y-2">
            <p className="text-gray-300">
              <span className="text-purple-400 font-semibold">Discovered by:</span> {element.discoveredBy}
            </p>
            <p className="text-gray-300">
              <span className="text-purple-400 font-semibold">Year:</span> {element.yearDiscovered || 'Unknown'}
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="bg-gray-800 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-white mb-3">Description</h3>
          <p className="text-gray-300 leading-relaxed">{element.description}</p>
        </div>

        {/* Uses */}
        <div className="bg-gray-800 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-white mb-3">Common Uses</h3>
          <div className="space-y-2">
            {element.uses.map((use, index) => (
              <div key={index} className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-300">{use}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Occurrence */}
        <div className="bg-gray-800 rounded-lg p-4">
          <h3 className="font-semibold text-white mb-3">Natural Occurrence</h3>
          <p className="text-gray-300 leading-relaxed">{element.occurrence}</p>
        </div>
      </div>
    </div>
  );
};
