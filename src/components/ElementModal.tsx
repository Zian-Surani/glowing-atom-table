import React from 'react';
import { X, Thermometer, Scale, Calendar, User, Zap, Atom, Layers, Activity, AlertCircle, Globe, Beaker, Shield, Database, Loader, Microscope, Factory, Mountain, Cpu } from 'lucide-react';
import { Element } from '../types/Element';
import { useElementData } from '../hooks/useElementData';

interface ElementModalProps {
  element: Element;
  onClose: () => void;
}

export const ElementModal: React.FC<ElementModalProps> = ({ element, onClose }) => {
  const elementData = useElementData(element.symbol, element.atomicNumber);

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

  const getElectronConfiguration = (atomicNumber: number) => {
    // Complete electron configuration mapping for all elements
    const configurations: { [key: number]: string } = {
      1: '1s¹',
      2: '1s²',
      3: '[He] 2s¹',
      4: '[He] 2s²',
      5: '[He] 2s² 2p¹',
      6: '[He] 2s² 2p²',
      7: '[He] 2s² 2p³',
      8: '[He] 2s² 2p⁴',
      9: '[He] 2s² 2p⁵',
      10: '[He] 2s² 2p⁶',
      11: '[Ne] 3s¹',
      12: '[Ne] 3s²',
      13: '[Ne] 3s² 3p¹',
      14: '[Ne] 3s² 3p²',
      15: '[Ne] 3s² 3p³',
      16: '[Ne] 3s² 3p⁴',
      17: '[Ne] 3s² 3p⁵',
      18: '[Ne] 3s² 3p⁶',
      19: '[Ar] 4s¹',
      20: '[Ar] 4s²',
      21: '[Ar] 3d¹ 4s²',
      22: '[Ar] 3d² 4s²',
      23: '[Ar] 3d³ 4s²',
      24: '[Ar] 3d⁵ 4s¹',
      25: '[Ar] 3d⁵ 4s²',
      26: '[Ar] 3d⁶ 4s²',
      27: '[Ar] 3d⁷ 4s²',
      28: '[Ar] 3d⁸ 4s²',
      29: '[Ar] 3d¹⁰ 4s¹',
      30: '[Ar] 3d¹⁰ 4s²',
      31: '[Ar] 3d¹⁰ 4s² 4p¹',
      32: '[Ar] 3d¹⁰ 4s² 4p²',
      33: '[Ar] 3d¹⁰ 4s² 4p³',
      34: '[Ar] 3d¹⁰ 4s² 4p⁴',
      35: '[Ar] 3d¹⁰ 4s² 4p⁵',
      36: '[Ar] 3d¹⁰ 4s² 4p⁶',
      37: '[Kr] 5s¹',
      38: '[Kr] 5s²',
      39: '[Kr] 4d¹ 5s²',
      40: '[Kr] 4d² 5s²',
      41: '[Kr] 4d⁴ 5s¹',
      42: '[Kr] 4d⁵ 5s¹',
      43: '[Kr] 4d⁵ 5s²',
      44: '[Kr] 4d⁷ 5s¹',
      45: '[Kr] 4d⁸ 5s¹',
      46: '[Kr] 4d¹⁰',
      47: '[Kr] 4d¹⁰ 5s¹',
      48: '[Kr] 4d¹⁰ 5s²',
      49: '[Kr] 4d¹⁰ 5s² 5p¹',
      50: '[Kr] 4d¹⁰ 5s² 5p²',
      51: '[Kr] 4d¹⁰ 5s² 5p³',
      52: '[Kr] 4d¹⁰ 5s² 5p⁴',
      53: '[Kr] 4d¹⁰ 5s² 5p⁵',
      54: '[Kr] 4d¹⁰ 5s² 5p⁶',
      55: '[Xe] 6s¹',
      56: '[Xe] 6s²',
      57: '[Xe] 5d¹ 6s²',
      58: '[Xe] 4f² 6s²',
      59: '[Xe] 4f³ 6s²',
      60: '[Xe] 4f⁴ 6s²',
      61: '[Xe] 4f⁵ 6s²',
      62: '[Xe] 4f⁶ 6s²',
      63: '[Xe] 4f⁷ 6s²',
      64: '[Xe] 4f⁷ 5d¹ 6s²',
      65: '[Xe] 4f⁹ 6s²',
      66: '[Xe] 4f¹⁰ 6s²',
      67: '[Xe] 4f¹¹ 6s²',
      68: '[Xe] 4f¹² 6s²',
      69: '[Xe] 4f¹³ 6s²',
      70: '[Xe] 4f¹⁴ 6s²',
      71: '[Xe] 4f¹⁴ 5d¹ 6s²',
      72: '[Xe] 4f¹⁴ 5d² 6s²',
      73: '[Xe] 4f¹⁴ 5d³ 6s²',
      74: '[Xe] 4f¹⁴ 5d⁴ 6s²',
      75: '[Xe] 4f¹⁴ 5d⁵ 6s²',
      76: '[Xe] 4f¹⁴ 5d⁶ 6s²',
      77: '[Xe] 4f¹⁴ 5d⁷ 6s²',
      78: '[Xe] 4f¹⁴ 5d⁹ 6s¹',
      79: '[Xe] 4f¹⁴ 5d¹⁰ 6s¹',
      80: '[Xe] 4f¹⁴ 5d¹⁰ 6s²',
      81: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹',
      82: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²',
      83: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³',
      84: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴',
      85: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵',
      86: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶',
      87: '[Rn] 7s¹',
      88: '[Rn] 7s²',
      89: '[Rn] 6d¹ 7s²',
      90: '[Rn] 6d² 7s²',
      91: '[Rn] 5f² 6d¹ 7s²',
      92: '[Rn] 5f³ 6d¹ 7s²',
      93: '[Rn] 5f⁴ 6d¹ 7s²',
      94: '[Rn] 5f⁶ 7s²',
      95: '[Rn] 5f⁷ 7s²',
      96: '[Rn] 5f⁷ 6d¹ 7s²',
      97: '[Rn] 5f⁹ 7s²',
      98: '[Rn] 5f¹⁰ 7s²',
      99: '[Rn] 5f¹¹ 7s²',
      100: '[Rn] 5f¹² 7s²',
      101: '[Rn] 5f¹³ 7s²',
      102: '[Rn] 5f¹⁴ 7s²',
      103: '[Rn] 5f¹⁴ 6d¹ 7s²',
      104: '[Rn] 5f¹⁴ 6d² 7s²',
      105: '[Rn] 5f¹⁴ 6d³ 7s²',
      106: '[Rn] 5f¹⁴ 6d⁴ 7s²',
      107: '[Rn] 5f¹⁴ 6d⁵ 7s²',
      108: '[Rn] 5f¹⁴ 6d⁶ 7s²',
      109: '[Rn] 5f¹⁴ 6d⁷ 7s²',
      110: '[Rn] 5f¹⁴ 6d⁸ 7s²',
      111: '[Rn] 5f¹⁴ 6d⁹ 7s²',
      112: '[Rn] 5f¹⁴ 6d¹⁰ 7s²',
      113: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹',
      114: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²',
      115: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³',
      116: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴',
      117: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵',
      118: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶'
    };
    return configurations[atomicNumber] || element.electronConfiguration;
  };

  const getPhaseAtRoom = () => {
    if (!element.meltingPoint) return 'Unknown';
    if (element.meltingPoint > 25) return 'Solid';
    if (element.boilingPoint && element.boilingPoint < 25) return 'Gas';
    return 'Liquid';
  };

  const getAtomicRadius = (atomicNumber: number) => {
    // Approximate atomic radii in picometers
    const radii: { [key: number]: number } = {
      1: 53, 2: 31, 3: 167, 4: 112, 5: 87, 6: 67, 7: 56, 8: 48, 9: 42, 10: 38,
      11: 190, 12: 145, 13: 118, 14: 111, 15: 98, 16: 88, 17: 79, 18: 71,
      19: 243, 20: 194, 21: 184, 22: 176, 23: 171, 24: 166, 25: 161, 26: 156,
      27: 152, 28: 149, 29: 145, 30: 142, 31: 136, 32: 125, 33: 114, 34: 103,
      35: 94, 36: 88
    };
    return radii[atomicNumber] || null;
  };

  const getElectronegativity = (atomicNumber: number) => {
    // Pauling electronegativity values
    const electronegativities: { [key: number]: number } = {
      1: 2.20, 2: null, 3: 0.98, 4: 1.57, 5: 2.04, 6: 2.55, 7: 3.04, 8: 3.44,
      9: 3.98, 10: null, 11: 0.93, 12: 1.31, 13: 1.61, 14: 1.90, 15: 2.19,
      16: 2.58, 17: 3.16, 18: null, 19: 0.82, 20: 1.00, 21: 1.36, 22: 1.54,
      23: 1.63, 24: 1.66, 25: 1.55, 26: 1.83, 27: 1.88, 28: 1.91, 29: 1.90,
      30: 1.65, 31: 1.81, 32: 2.01, 33: 2.18, 34: 2.55, 35: 2.96, 36: 3.00
    };
    return electronegativities[atomicNumber] || null;
  };

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-start justify-center z-50 p-4 animate-fade-in overflow-y-auto">
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl max-w-5xl w-full border-2 border-gray-600 animate-scale-in shadow-2xl my-4 relative">
        {/* Scrollable Content */}
        <div className="p-6 pb-20 max-h-[85vh] overflow-y-auto">
          {/* Header */}
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
          </div>

          {/* Enhanced Properties Grid */}
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

          {/* Comprehensive Element Data Section */}
          {!elementData.loading && !elementData.error && (
            <>
              {/* Physical Properties */}
              <div className="bg-gradient-to-br from-cyan-900/40 to-cyan-800/20 rounded-xl p-6 mb-6 border border-cyan-500/30">
                <div className="flex items-center space-x-3 mb-4">
                  <Microscope className="w-6 h-6 text-cyan-400" />
                  <h3 className="font-bold text-white text-xl tech-font">Physical Properties</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-300 mb-2 modern-font">
                      <span className="text-cyan-300 font-bold">Appearance:</span>
                    </p>
                    <p className="text-white text-lg font-semibold">{elementData.physicalProperties.appearance}</p>
                  </div>
                  <div>
                    <p className="text-gray-300 mb-2 modern-font">
                      <span className="text-cyan-300 font-bold">Crystal Structure:</span>
                    </p>
                    <p className="text-white text-lg font-semibold">{elementData.crystalStructure}</p>
                  </div>
                </div>
              </div>

              {/* Chemical Properties */}
              <div className="bg-gradient-to-br from-emerald-900/40 to-emerald-800/20 rounded-xl p-6 mb-6 border border-emerald-500/30">
                <div className="flex items-center space-x-3 mb-4">
                  <Beaker className="w-6 h-6 text-emerald-400" />
                  <h3 className="font-bold text-white text-xl tech-font">Chemical Properties</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {getElectronegativity(element.atomicNumber) && (
                    <div>
                      <p className="text-gray-300 mb-2 modern-font">
                        <span className="text-emerald-300 font-bold">Electronegativity:</span>
                      </p>
                      <p className="text-white text-lg font-semibold">{getElectronegativity(element.atomicNumber)} (Pauling)</p>
                    </div>
                  )}
                  {getAtomicRadius(element.atomicNumber) && (
                    <div>
                      <p className="text-gray-300 mb-2 modern-font">
                        <span className="text-emerald-300 font-bold">Atomic Radius:</span>
                      </p>
                      <p className="text-white text-lg font-semibold">{getAtomicRadius(element.atomicNumber)} pm</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Isotopes Information */}
              {elementData.isotopes && (
                <div className="bg-gradient-to-br from-violet-900/40 to-violet-800/20 rounded-xl p-6 mb-6 border border-violet-500/30">
                  <div className="flex items-center space-x-3 mb-4">
                    <Atom className="w-6 h-6 text-violet-400" />
                    <h3 className="font-bold text-white text-xl tech-font">Isotopes</h3>
                  </div>
                  <p className="text-white text-lg leading-relaxed">{elementData.isotopes}</p>
                </div>
              )}

              {/* Biological Role */}
              {elementData.biologicalRole && (
                <div className="bg-gradient-to-br from-rose-900/40 to-rose-800/20 rounded-xl p-6 mb-6 border border-rose-500/30">
                  <div className="flex items-center space-x-3 mb-4">
                    <Activity className="w-6 h-6 text-rose-400" />
                    <h3 className="font-bold text-white text-xl tech-font">Biological Role</h3>
                  </div>
                  <p className="text-white text-lg leading-relaxed">{elementData.biologicalRole}</p>
                </div>
              )}

              {/* Industrial Uses */}
              {elementData.industrialUses && (
                <div className="bg-gradient-to-br from-amber-900/40 to-amber-800/20 rounded-xl p-6 mb-6 border border-amber-500/30">
                  <div className="flex items-center space-x-3 mb-4">
                    <Factory className="w-6 h-6 text-amber-400" />
                    <h3 className="font-bold text-white text-xl tech-font">Industrial Applications</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {elementData.industrialUses.map((use, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 bg-amber-900/20 rounded-lg">
                        <div className="w-3 h-3 bg-amber-400 rounded-full mt-2 flex-shrink-0 animate-pulse" />
                        <p className="text-gray-200 modern-font">{use}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Safety Information */}
              {elementData.safetyInfo && (
                <div className="bg-gradient-to-br from-red-900/40 to-red-800/20 rounded-xl p-6 mb-6 border border-red-500/30">
                  <div className="flex items-center space-x-3 mb-4">
                    <Shield className="w-6 h-6 text-red-400" />
                    <h3 className="font-bold text-white text-xl tech-font">Safety Information</h3>
                  </div>
                  <p className="text-white text-lg leading-relaxed">{elementData.safetyInfo}</p>
                </div>
              )}

              {/* Geological Occurrence */}
              {elementData.geologicalOccurrence && (
                <div className="bg-gradient-to-br from-stone-900/40 to-stone-800/20 rounded-xl p-6 mb-6 border border-stone-500/30">
                  <div className="flex items-center space-x-3 mb-4">
                    <Mountain className="w-6 h-6 text-stone-400" />
                    <h3 className="font-bold text-white text-xl tech-font">Geological Occurrence</h3>
                  </div>
                  <p className="text-white text-lg leading-relaxed">{elementData.geologicalOccurrence}</p>
                </div>
              )}

              {/* Discovery History */}
              {elementData.discoveryHistory && (
                <div className="bg-gradient-to-br from-indigo-900/40 to-indigo-800/20 rounded-xl p-6 mb-6 border border-indigo-500/30">
                  <div className="flex items-center space-x-3 mb-4">
                    <Calendar className="w-6 h-6 text-indigo-400" />
                    <h3 className="font-bold text-white text-xl tech-font">Discovery History</h3>
                  </div>
                  <p className="text-white text-lg leading-relaxed">{elementData.discoveryHistory}</p>
                </div>
              )}
            </>
          )}

          {elementData.loading && (
            <div className="bg-gradient-to-br from-indigo-900/40 to-indigo-800/20 rounded-xl p-6 mb-6 border border-indigo-500/30">
              <div className="flex items-center space-x-3">
                <Loader className="w-6 h-6 text-indigo-400 animate-spin" />
                <p className="text-indigo-300">Loading comprehensive element data...</p>
              </div>
            </div>
          )}

          {/* Enhanced Electron Configuration */}
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/30 rounded-xl p-6 mb-6 border border-gray-600/50">
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="w-6 h-6 text-yellow-400" />
              <h3 className="font-bold text-white text-xl tech-font">Complete Electron Configuration</h3>
            </div>
            <div className="bg-black/30 rounded-lg p-4 mb-4">
              <p className="text-yellow-300 font-mono text-lg break-all">
                {getElectronConfiguration(element.atomicNumber)}
              </p>
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

          {/* Discovery Info */}
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
                  {element.yearDiscovered || 'Ancient'}
                </p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/10 rounded-xl p-6 mb-6 border border-blue-500/30">
            <h3 className="font-bold text-white text-xl mb-4 tech-font">About {element.name}</h3>
            <p className="text-gray-200 leading-relaxed text-lg modern-font">{element.description}</p>
          </div>

          {/* Uses */}
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

          {/* Occurrence */}
          <div className="bg-gradient-to-br from-cyan-900/30 to-cyan-800/10 rounded-xl p-6 border border-cyan-500/30">
            <div className="flex items-center space-x-3 mb-4">
              <AlertCircle className="w-6 h-6 text-cyan-400" />
              <h3 className="font-bold text-white text-xl tech-font">Natural Occurrence</h3>
            </div>
            <p className="text-gray-200 leading-relaxed text-lg modern-font">{element.occurrence}</p>
          </div>
        </div>

        {/* Fixed Exit Button */}
        <div className="absolute bottom-0 right-0 p-6">
          <button
            onClick={onClose}
            className="p-3 bg-gray-800/90 hover:bg-gray-700 rounded-xl transition-all duration-300 hover:scale-110 group border border-gray-600"
          >
            <X className="w-7 h-7 text-gray-400 group-hover:text-white transition-colors" />
          </button>
        </div>
      </div>
    </div>
  );
};
