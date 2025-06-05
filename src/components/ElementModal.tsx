
import React from 'react';
import { X, Thermometer, Scale, Calendar, User, Zap, Atom, Layers, Activity, AlertCircle } from 'lucide-react';
import { Element } from '../types/Element';

interface ElementModalProps {
  element: Element;
  onClose: () => void;
}

export const ElementModal: React.FC<ElementModalProps> = ({ element, onClose }) => {
  const getCategoryColor = (category: string) => {
    const colors = {
      'alkali metal': 'from-pink-500 to-pink-600',
      'alkaline earth metal': 'from-orange-500 to-orange-600',
      'transition metal': 'from-yellow-500 to-yellow-600',
      'post-transition metal': 'from-green-500 to-green-600',
      'metalloid': 'from-cyan-500 to-cyan-600',
      'reactive nonmetal': 'from-blue-500 to-blue-600',
      'noble gas': 'from-purple-500 to-purple-600',
      'lanthanide': 'from-fuchsia-500 to-fuchsia-600',
      'actinide': 'from-indigo-500 to-indigo-600'
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  const getElectronShells = (config: string) => {
    // Simplified electron shell visualization
    const shells = config.match(/\d+/g)?.map(num => parseInt(num)) || [];
    return shells.slice(0, 7); // Max 7 shells
  };

  const getPhaseAtRoom = () => {
    if (!element.meltingPoint) return 'Unknown';
    if (element.meltingPoint > 25) return 'Solid';
    if (element.boilingPoint && element.boilingPoint < 25) return 'Gas';
    return 'Liquid';
  };

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-6 max-w-5xl w-full max-h-[95vh] overflow-y-auto border-2 border-gray-600 animate-scale-in shadow-2xl">
        {/* Header with enhanced styling */}
        <div className="flex justify-between items-start mb-8">
          <div className="flex items-center space-x-6">
            <div className={`
              w-24 h-24 rounded-2xl bg-gradient-to-br ${getCategoryColor(element.category)}
              flex items-center justify-center shadow-2xl relative overflow-hidden
              border-2 border-white/20
            `}>
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
              <span className="text-4xl font-black text-white tech-font drop-shadow-lg relative z-10">
                {element.symbol}
              </span>
            </div>
            <div className="space-y-2">
              <h1 className="text-4xl font-black text-white tech-font">{element.name}</h1>
              <p className="text-xl text-gray-300 capitalize modern-font font-semibold">{element.category}</p>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span className="flex items-center space-x-1">
                  <Atom className="w-4 h-4" />
                  <span>Atomic Number: {element.atomicNumber}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Scale className="w-4 h-4" />
                  <span>Period: {element.row}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Layers className="w-4 h-4" />
                  <span>Group: {element.column}</span>
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-3 hover:bg-gray-700 rounded-xl transition-all duration-300 hover:scale-110 group"
          >
            <X className="w-7 h-7 text-gray-400 group-hover:text-white transition-colors" />
          </button>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/30 rounded-xl p-4 border border-blue-500/30">
            <div className="flex items-center space-x-2 mb-2">
              <Scale className="w-5 h-5 text-blue-400" />
              <h3 className="font-bold text-white text-sm">Atomic Mass</h3>
            </div>
            <p className="text-2xl font-black text-blue-300 tech-font">{element.atomicMass} u</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 rounded-xl p-4 border border-purple-500/30">
            <div className="flex items-center space-x-2 mb-2">
              <Activity className="w-5 h-5 text-purple-400" />
              <h3 className="font-bold text-white text-sm">Phase</h3>
            </div>
            <p className="text-xl font-black text-purple-300 tech-font">{getPhaseAtRoom()}</p>
          </div>

          <div className="bg-gradient-to-br from-green-900/50 to-green-800/30 rounded-xl p-4 border border-green-500/30">
            <div className="flex items-center space-x-2 mb-2">
              <Zap className="w-5 h-5 text-green-400" />
              <h3 className="font-bold text-white text-sm">Electrons</h3>
            </div>
            <p className="text-xl font-black text-green-300 tech-font">{element.atomicNumber}</p>
          </div>

          <div className="bg-gradient-to-br from-orange-900/50 to-orange-800/30 rounded-xl p-4 border border-orange-500/30">
            <div className="flex items-center space-x-2 mb-2">
              <Layers className="w-5 h-5 text-orange-400" />
              <h3 className="font-bold text-white text-sm">Density</h3>
            </div>
            <p className="text-lg font-black text-orange-300 tech-font">
              {element.density ? `${element.density} g/cm³` : 'Unknown'}
            </p>
          </div>
        </div>

        {/* Electron Configuration Visualization */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/30 rounded-xl p-6 mb-6 border border-gray-600/50">
          <div className="flex items-center space-x-2 mb-4">
            <Zap className="w-6 h-6 text-yellow-400" />
            <h3 className="font-bold text-white text-xl tech-font">Electron Configuration</h3>
          </div>
          <div className="bg-black/30 rounded-lg p-4 mb-4">
            <p className="text-yellow-300 font-mono text-lg">{element.electronConfiguration}</p>
          </div>
          
          {/* Visual electron shells */}
          <div className="flex items-center justify-center space-x-2">
            {getElectronShells(element.electronConfiguration).map((electrons, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className={`
                  w-12 h-12 rounded-full border-2 border-yellow-400/60 
                  flex items-center justify-center text-xs font-bold text-yellow-300
                  ${electrons > 0 ? 'bg-yellow-400/20' : 'bg-gray-600/20'}
                `}>
                  {electrons}
                </div>
                <span className="text-xs text-gray-400 mt-1">Shell {index + 1}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Temperature Properties */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gradient-to-br from-red-900/40 to-red-800/20 rounded-xl p-6 border border-red-500/30">
            <div className="flex items-center space-x-3 mb-4">
              <Thermometer className="w-6 h-6 text-red-400" />
              <h3 className="font-bold text-white text-xl tech-font">Melting Point</h3>
            </div>
            <p className="text-3xl font-black text-red-300 tech-font mb-2">
              {element.meltingPoint ? `${element.meltingPoint}°C` : 'Unknown'}
            </p>
            {element.meltingPoint && (
              <p className="text-red-200 text-sm">
                {element.meltingPoint + 273.15}K / {Math.round(element.meltingPoint * 9/5 + 32)}°F
              </p>
            )}
          </div>
          
          <div className="bg-gradient-to-br from-orange-900/40 to-orange-800/20 rounded-xl p-6 border border-orange-500/30">
            <div className="flex items-center space-x-3 mb-4">
              <Thermometer className="w-6 h-6 text-orange-400" />
              <h3 className="font-bold text-white text-xl tech-font">Boiling Point</h3>
            </div>
            <p className="text-3xl font-black text-orange-300 tech-font mb-2">
              {element.boilingPoint ? `${element.boilingPoint}°C` : 'Unknown'}
            </p>
            {element.boilingPoint && (
              <p className="text-orange-200 text-sm">
                {element.boilingPoint + 273.15}K / {Math.round(element.boilingPoint * 9/5 + 32)}°F
              </p>
            )}
          </div>
        </div>

        {/* Discovery Info with enhanced styling */}
        <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/20 rounded-xl p-6 mb-6 border border-purple-500/30">
          <div className="flex items-center space-x-3 mb-4">
            <Calendar className="w-6 h-6 text-purple-400" />
            <h3 className="font-bold text-white text-xl tech-font">Discovery Information</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-300 mb-2 modern-font">
                <span className="text-purple-300 font-bold">Discovered by:</span>
              </p>
              <p className="text-white text-lg font-semibold">{element.discoveredBy}</p>
            </div>
            <div>
              <p className="text-gray-300 mb-2 modern-font">
                <span className="text-purple-300 font-bold">Year of Discovery:</span>
              </p>
              <p className="text-white text-lg font-semibold">
                {element.yearDiscovered || 'Unknown'}
              </p>
            </div>
          </div>
        </div>

        {/* Description with better typography */}
        <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/10 rounded-xl p-6 mb-6 border border-blue-500/30">
          <h3 className="font-bold text-white text-xl mb-4 tech-font">About {element.name}</h3>
          <p className="text-gray-200 leading-relaxed text-lg modern-font">{element.description}</p>
        </div>

        {/* Enhanced Uses section */}
        <div className="bg-gradient-to-br from-green-900/30 to-green-800/10 rounded-xl p-6 mb-6 border border-green-500/30">
          <h3 className="font-bold text-white text-xl mb-4 tech-font">Applications & Uses</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {element.uses.map((use, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-green-900/20 rounded-lg">
                <div className="w-3 h-3 bg-green-400 rounded-full mt-2 flex-shrink-0 animate-pulse" />
                <p className="text-gray-200 modern-font">{use}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Occurrence with enhanced styling */}
        <div className="bg-gradient-to-br from-cyan-900/30 to-cyan-800/10 rounded-xl p-6 border border-cyan-500/30">
          <div className="flex items-center space-x-3 mb-4">
            <AlertCircle className="w-6 h-6 text-cyan-400" />
            <h3 className="font-bold text-white text-xl tech-font">Natural Occurrence</h3>
          </div>
          <p className="text-gray-200 leading-relaxed text-lg modern-font">{element.occurrence}</p>
        </div>
      </div>
    </div>
  );
};
