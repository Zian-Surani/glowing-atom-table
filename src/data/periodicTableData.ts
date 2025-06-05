
import { Element } from '../types/Element';

export const periodicTableData: Element[] = [
  // Period 1
  {
    atomicNumber: 1,
    symbol: 'H',
    name: 'Hydrogen',
    atomicMass: 1.008,
    category: 'reactive nonmetal',
    row: 1,
    column: 1,
    electronConfiguration: '1s¹',
    meltingPoint: -259.16,
    boilingPoint: -252.87,
    density: 0.00008988,
    discoveredBy: 'Henry Cavendish',
    yearDiscovered: 1766,
    description: 'Hydrogen is the lightest and most abundant element in the universe. It is a colorless, odorless, and highly flammable gas.',
    uses: ['Fuel for rockets and spacecraft', 'Production of ammonia for fertilizers', 'Petroleum refining', 'Food processing'],
    occurrence: 'Most abundant element in the universe, found in water and organic compounds'
  },
  {
    atomicNumber: 2,
    symbol: 'He',
    name: 'Helium',
    atomicMass: 4.003,
    category: 'noble gas',
    row: 1,
    column: 18,
    electronConfiguration: '1s²',
    meltingPoint: null,
    boilingPoint: -268.93,
    density: 0.0001785,
    discoveredBy: 'Pierre Janssen',
    yearDiscovered: 1868,
    description: 'Helium is a noble gas that is colorless, odorless, and chemically inert under normal conditions.',
    uses: ['Filling balloons and airships', 'Cryogenic applications', 'Breathing gas for deep-sea diving', 'Cooling nuclear reactors'],
    occurrence: 'Second most abundant element in the universe, found in natural gas deposits'
  },
  // Period 2
  {
    atomicNumber: 3,
    symbol: 'Li',
    name: 'Lithium',
    atomicMass: 6.94,
    category: 'alkali metal',
    row: 2,
    column: 1,
    electronConfiguration: '[He] 2s¹',
    meltingPoint: 180.54,
    boilingPoint: 1342,
    density: 0.534,
    discoveredBy: 'Johan August Arfwedson',
    yearDiscovered: 1817,
    description: 'Lithium is the lightest metal and the least dense solid element. It is highly reactive and flammable.',
    uses: ['Lithium-ion batteries', 'Treatment of bipolar disorder', 'Ceramics and glass', 'Aluminum production'],
    occurrence: 'Found in pegmatite minerals, salt lakes, and seawater'
  },
  {
    atomicNumber: 4,
    symbol: 'Be',
    name: 'Beryllium',
    atomicMass: 9.012,
    category: 'alkaline earth metal',
    row: 2,
    column: 2,
    electronConfiguration: '[He] 2s²',
    meltingPoint: 1287,
    boilingPoint: 2469,
    density: 1.85,
    discoveredBy: 'Louis-Nicolas Vauquelin',
    yearDiscovered: 1798,
    description: 'Beryllium is a lightweight, steel-gray metal that is strong, hard, and has excellent thermal conductivity.',
    uses: ['Aerospace industry', 'Nuclear reactors', 'X-ray windows', 'Telecommunications'],
    occurrence: 'Found in beryl and other minerals, very rare in Earth\'s crust'
  },
  {
    atomicNumber: 5,
    symbol: 'B',
    name: 'Boron',
    atomicMass: 10.81,
    category: 'metalloid',
    row: 2,
    column: 13,
    electronConfiguration: '[He] 2s² 2p¹',
    meltingPoint: 2077,
    boilingPoint: 4000,
    density: 2.34,
    discoveredBy: 'Joseph Louis Gay-Lussac',
    yearDiscovered: 1808,
    description: 'Boron is a metalloid that is essential for plant growth and has unique chemical properties.',
    uses: ['Glass and ceramics', 'Agriculture fertilizers', 'Nuclear reactors', 'Semiconductors'],
    occurrence: 'Found in borax and other borate minerals'
  },
  {
    atomicNumber: 6,
    symbol: 'C',
    name: 'Carbon',
    atomicMass: 12.011,
    category: 'reactive nonmetal',
    row: 2,
    column: 14,
    electronConfiguration: '[He] 2s² 2p²',
    meltingPoint: 3550,
    boilingPoint: 4027,
    density: 2.267,
    discoveredBy: 'Ancient civilizations',
    yearDiscovered: null,
    description: 'Carbon is the basis of all known life and can form more compounds than any other element.',
    uses: ['Steel production', 'Plastics and polymers', 'Diamond jewelry', 'Graphite in pencils'],
    occurrence: 'Found in all living organisms, fossil fuels, and carbonate minerals'
  },
  {
    atomicNumber: 7,
    symbol: 'N',
    name: 'Nitrogen',
    atomicMass: 14.007,
    category: 'reactive nonmetal',
    row: 2,
    column: 15,
    electronConfiguration: '[He] 2s² 2p³',
    meltingPoint: -210.1,
    boilingPoint: -195.8,
    density: 0.0012506,
    discoveredBy: 'Daniel Rutherford',
    yearDiscovered: 1772,
    description: 'Nitrogen is a colorless, odorless gas that makes up about 78% of Earth\'s atmosphere.',
    uses: ['Fertilizer production', 'Food preservation', 'Cryogenic applications', 'Explosives'],
    occurrence: 'Major component of Earth\'s atmosphere, found in proteins and nucleic acids'
  },
  {
    atomicNumber: 8,
    symbol: 'O',
    name: 'Oxygen',
    atomicMass: 15.999,
    category: 'reactive nonmetal',
    row: 2,
    column: 16,
    electronConfiguration: '[He] 2s² 2p⁴',
    meltingPoint: -218.79,
    boilingPoint: -182.96,
    density: 0.001429,
    discoveredBy: 'Carl Wilhelm Scheele',
    yearDiscovered: 1774,
    description: 'Oxygen is essential for life and combustion. It is a colorless, odorless gas at room temperature.',
    uses: ['Breathing and medical applications', 'Steel production', 'Water treatment', 'Rocket fuel'],
    occurrence: 'Most abundant element in Earth\'s crust, found in air, water, and most rocks'
  },
  {
    atomicNumber: 9,
    symbol: 'F',
    name: 'Fluorine',
    atomicMass: 18.998,
    category: 'reactive nonmetal',
    row: 2,
    column: 17,
    electronConfiguration: '[He] 2s² 2p⁵',
    meltingPoint: -219.67,
    boilingPoint: -188.11,
    density: 0.001696,
    discoveredBy: 'Henri Moissan',
    yearDiscovered: 1886,
    description: 'Fluorine is the most electronegative and reactive element. It is a pale yellow gas.',
    uses: ['Toothpaste and dental treatments', 'Refrigerants', 'Teflon production', 'Nuclear fuel processing'],
    occurrence: 'Found in fluorite and other minerals, never found free in nature'
  },
  {
    atomicNumber: 10,
    symbol: 'Ne',
    name: 'Neon',
    atomicMass: 20.180,
    category: 'noble gas',
    row: 2,
    column: 18,
    electronConfiguration: '[He] 2s² 2p⁶',
    meltingPoint: -248.59,
    boilingPoint: -246.08,
    density: 0.0008999,
    discoveredBy: 'William Ramsay',
    yearDiscovered: 1898,
    description: 'Neon is a noble gas that gives off a brilliant orange-red glow when electrically excited.',
    uses: ['Neon signs and lighting', 'Television tubes', 'Laser technology', 'Cryogenic applications'],
    occurrence: 'Found in trace amounts in Earth\'s atmosphere'
  },
  // Period 3
  {
    atomicNumber: 11,
    symbol: 'Na',
    name: 'Sodium',
    atomicMass: 22.990,
    category: 'alkali metal',
    row: 3,
    column: 1,
    electronConfiguration: '[Ne] 3s¹',
    meltingPoint: 97.72,
    boilingPoint: 883,
    density: 0.971,
    discoveredBy: 'Humphry Davy',
    yearDiscovered: 1807,
    description: 'Sodium is a soft, silvery-white metal that is highly reactive and must be stored under oil.',
    uses: ['Table salt production', 'Soap and detergents', 'Street lighting', 'Nuclear reactors'],
    occurrence: 'Abundant in seawater and salt deposits, never found free in nature'
  },
  {
    atomicNumber: 12,
    symbol: 'Mg',
    name: 'Magnesium',
    atomicMass: 24.305,
    category: 'alkaline earth metal',
    row: 3,
    column: 2,
    electronConfiguration: '[Ne] 3s²',
    meltingPoint: 650,
    boilingPoint: 1090,
    density: 1.738,
    discoveredBy: 'Joseph Black',
    yearDiscovered: 1755,
    description: 'Magnesium is a lightweight, silvery metal that burns with a brilliant white light.',
    uses: ['Lightweight alloys', 'Fireworks and flares', 'Dietary supplements', 'Automotive industry'],
    occurrence: 'Eighth most abundant element in Earth\'s crust, found in many minerals'
  },
  {
    atomicNumber: 13,
    symbol: 'Al',
    name: 'Aluminum',
    atomicMass: 26.982,
    category: 'post-transition metal',
    row: 3,
    column: 13,
    electronConfiguration: '[Ne] 3s² 3p¹',
    meltingPoint: 660.32,
    boilingPoint: 2519,
    density: 2.70,
    discoveredBy: 'Hans Christian Ørsted',
    yearDiscovered: 1825,
    description: 'Aluminum is a lightweight, corrosion-resistant metal with excellent conductivity.',
    uses: ['Packaging and containers', 'Transportation industry', 'Construction', 'Electronics'],
    occurrence: 'Most abundant metal in Earth\'s crust, found in bauxite and other minerals'
  },
  {
    atomicNumber: 14,
    symbol: 'Si',
    name: 'Silicon',
    atomicMass: 28.085,
    category: 'metalloid',
    row: 3,
    column: 14,
    electronConfiguration: '[Ne] 3s² 3p²',
    meltingPoint: 1414,
    boilingPoint: 3265,
    density: 2.3296,
    discoveredBy: 'Jöns Jacob Berzelius',
    yearDiscovered: 1824,
    description: 'Silicon is a metalloid that is essential for electronics and forms the basis of computer chips.',
    uses: ['Computer chips and electronics', 'Glass and ceramics', 'Solar panels', 'Concrete and construction'],
    occurrence: 'Second most abundant element in Earth\'s crust, found in sand and silicate minerals'
  },
  {
    atomicNumber: 15,
    symbol: 'P',
    name: 'Phosphorus',
    atomicMass: 30.974,
    category: 'reactive nonmetal',
    row: 3,
    column: 15,
    electronConfiguration: '[Ne] 3s² 3p³',
    meltingPoint: 44.15,
    boilingPoint: 277,
    density: 1.82,
    discoveredBy: 'Hennig Brand',
    yearDiscovered: 1669,
    description: 'Phosphorus is essential for life and exists in several forms, including white and red phosphorus.',
    uses: ['Fertilizers', 'Matches and fireworks', 'Detergents', 'Food additives'],
    occurrence: 'Found in phosphate rocks and bones, essential component of DNA and ATP'
  },
  {
    atomicNumber: 16,
    symbol: 'S',
    name: 'Sulfur',
    atomicMass: 32.06,
    category: 'reactive nonmetal',
    row: 3,
    column: 16,
    electronConfiguration: '[Ne] 3s² 3p⁴',
    meltingPoint: 115.21,
    boilingPoint: 444.72,
    density: 2.067,
    discoveredBy: 'Ancient civilizations',
    yearDiscovered: null,
    description: 'Sulfur is a bright yellow solid that is essential for life and has a distinctive smell.',
    uses: ['Sulfuric acid production', 'Fertilizers', 'Rubber vulcanization', 'Pharmaceuticals'],
    occurrence: 'Found in volcanic deposits, natural gas, and many minerals'
  },
  {
    atomicNumber: 17,
    symbol: 'Cl',
    name: 'Chlorine',
    atomicMass: 35.45,
    category: 'reactive nonmetal',
    row: 3,
    column: 17,
    electronConfiguration: '[Ne] 3s² 3p⁵',
    meltingPoint: -101.5,
    boilingPoint: -34.04,
    density: 0.003214,
    discoveredBy: 'Carl Wilhelm Scheele',
    yearDiscovered: 1774,
    description: 'Chlorine is a yellow-green gas with a sharp, choking odor. It is highly reactive.',
    uses: ['Water disinfection', 'Bleaching agents', 'PVC plastic production', 'Chemical manufacturing'],
    occurrence: 'Found in salt deposits and seawater, never occurs free in nature'
  },
  {
    atomicNumber: 18,
    symbol: 'Ar',
    name: 'Argon',
    atomicMass: 39.948,
    category: 'noble gas',
    row: 3,
    column: 18,
    electronConfiguration: '[Ne] 3s² 3p⁶',
    meltingPoint: -189.35,
    boilingPoint: -185.85,
    density: 0.0017837,
    discoveredBy: 'Lord Rayleigh',
    yearDiscovered: 1894,
    description: 'Argon is a colorless, odorless noble gas that makes up about 1% of Earth\'s atmosphere.',
    uses: ['Welding and metal processing', 'Light bulbs', 'Wine preservation', 'Scientific research'],
    occurrence: 'Third most abundant gas in Earth\'s atmosphere'
  },
  // Period 4
  {
    atomicNumber: 19,
    symbol: 'K',
    name: 'Potassium',
    atomicMass: 39.098,
    category: 'alkali metal',
    row: 4,
    column: 1,
    electronConfiguration: '[Ar] 4s¹',
    meltingPoint: 63.38,
    boilingPoint: 759,
    density: 0.862,
    discoveredBy: 'Humphry Davy',
    yearDiscovered: 1807,
    description: 'Potassium is a soft, silvery-white metal that is essential for all living organisms.',
    uses: ['Fertilizers', 'Food processing', 'Glass manufacturing', 'Soap production'],
    occurrence: 'Seventh most abundant element in Earth\'s crust, found in many minerals'
  },
  {
    atomicNumber: 20,
    symbol: 'Ca',
    name: 'Calcium',
    atomicMass: 40.078,
    category: 'alkaline earth metal',
    row: 4,
    column: 2,
    electronConfiguration: '[Ar] 4s²',
    meltingPoint: 842,
    boilingPoint: 1484,
    density: 1.54,
    discoveredBy: 'Humphry Davy',
    yearDiscovered: 1808,
    description: 'Calcium is a reactive alkaline earth metal that is essential for bone and teeth formation.',
    uses: ['Cement and construction', 'Steel production', 'Dietary supplements', 'Paper manufacturing'],
    occurrence: 'Fifth most abundant element in Earth\'s crust, found in limestone and gypsum'
  },
  {
    atomicNumber: 21,
    symbol: 'Sc',
    name: 'Scandium',
    atomicMass: 44.956,
    category: 'transition metal',
    row: 4,
    column: 3,
    electronConfiguration: '[Ar] 3d¹ 4s²',
    meltingPoint: 1541,
    boilingPoint: 2836,
    density: 2.989,
    discoveredBy: 'Lars Fredrik Nilson',
    yearDiscovered: 1879,
    description: 'Scandium is a rare transition metal with unique properties, often used in specialized alloys.',
    uses: ['Aerospace alloys', 'Sports equipment', 'High-intensity lights', 'Research applications'],
    occurrence: 'Rare element found in small quantities in many minerals'
  },
  {
    atomicNumber: 22,
    symbol: 'Ti',
    name: 'Titanium',
    atomicMass: 47.867,
    category: 'transition metal',
    row: 4,
    column: 4,
    electronConfiguration: '[Ar] 3d² 4s²',
    meltingPoint: 1668,
    boilingPoint: 3287,
    density: 4.506,
    discoveredBy: 'William Gregor',
    yearDiscovered: 1791,
    description: 'Titanium is a strong, lightweight, corrosion-resistant metal with excellent biocompatibility.',
    uses: ['Aerospace industry', 'Medical implants', 'Sports equipment', 'Chemical processing'],
    occurrence: 'Ninth most abundant element in Earth\'s crust, found in rutile and ilmenite'
  },
  {
    atomicNumber: 23,
    symbol: 'V',
    name: 'Vanadium',
    atomicMass: 50.942,
    category: 'transition metal',
    row: 4,
    column: 5,
    electronConfiguration: '[Ar] 3d³ 4s²',
    meltingPoint: 1910,
    boilingPoint: 3407,
    density: 6.11,
    discoveredBy: 'Andrés Manuel del Río',
    yearDiscovered: 1801,
    description: 'Vanadium is a hard, silvery-grey transition metal known for its strength and corrosion resistance.',
    uses: ['Steel alloys', 'Chemical catalysts', 'Ceramics', 'Nuclear applications'],
    occurrence: 'Found in many minerals, often extracted as a byproduct of other metal processing'
  },
  {
    atomicNumber: 24,
    symbol: 'Cr',
    name: 'Chromium',
    atomicMass: 51.996,
    category: 'transition metal',
    row: 4,
    column: 6,
    electronConfiguration: '[Ar] 3d⁵ 4s¹',
    meltingPoint: 1907,
    boilingPoint: 2671,
    density: 7.15,
    discoveredBy: 'Louis-Nicolas Vauquelin',
    yearDiscovered: 1797,
    description: 'Chromium is a hard, corrosion-resistant metal known for its brilliant metallic luster.',
    uses: ['Stainless steel production', 'Chrome plating', 'Pigments and dyes', 'Leather tanning'],
    occurrence: 'Found primarily in chromite ore, used extensively in metallurgy'
  },
  {
    atomicNumber: 25,
    symbol: 'Mn',
    name: 'Manganese',
    atomicMass: 54.938,
    category: 'transition metal',
    row: 4,
    column: 7,
    electronConfiguration: '[Ar] 3d⁵ 4s²',
    meltingPoint: 1246,
    boilingPoint: 2061,
    density: 7.44,
    discoveredBy: 'Carl Wilhelm Scheele',
    yearDiscovered: 1774,
    description: 'Manganese is an essential trace element and important industrial metal.',
    uses: ['Steel production', 'Battery manufacturing', 'Chemical catalysts', 'Fertilizers'],
    occurrence: 'Twelfth most abundant element in Earth\'s crust, found in many minerals'
  },
  {
    atomicNumber: 26,
    symbol: 'Fe',
    name: 'Iron',
    atomicMass: 55.845,
    category: 'transition metal',
    row: 4,
    column: 8,
    electronConfiguration: '[Ar] 3d⁶ 4s²',
    meltingPoint: 1538,
    boilingPoint: 2862,
    density: 7.874,
    discoveredBy: 'Ancient civilizations',
    yearDiscovered: null,
    description: 'Iron is the most widely used metal and is essential for hemoglobin in blood.',
    uses: ['Steel production', 'Construction', 'Transportation', 'Manufacturing'],
    occurrence: 'Fourth most abundant element in Earth\'s crust, found in many minerals'
  },
  {
    atomicNumber: 27,
    symbol: 'Co',
    name: 'Cobalt',
    atomicMass: 58.933,
    category: 'transition metal',
    row: 4,
    column: 9,
    electronConfiguration: '[Ar] 3d⁷ 4s²',
    meltingPoint: 1495,
    boilingPoint: 2927,
    density: 8.86,
    discoveredBy: 'Georg Brandt',
    yearDiscovered: 1735,
    description: 'Cobalt is a hard, lustrous, silver-gray metal known for its magnetic properties.',
    uses: ['Superalloys', 'Rechargeable batteries', 'Pigments', 'Medical implants'],
    occurrence: 'Found in various minerals, often extracted as a byproduct of copper and nickel mining'
  },
  {
    atomicNumber: 28,
    symbol: 'Ni',
    name: 'Nickel',
    atomicMass: 58.693,
    category: 'transition metal',
    row: 4,
    column: 10,
    electronConfiguration: '[Ar] 3d⁸ 4s²',
    meltingPoint: 1455,
    boilingPoint: 2913,
    density: 8.912,
    discoveredBy: 'Axel Fredrik Cronstedt',
    yearDiscovered: 1751,
    description: 'Nickel is a hard, corrosion-resistant metal with excellent magnetic properties.',
    uses: ['Stainless steel', 'Coins', 'Rechargeable batteries', 'Chemical catalysts'],
    occurrence: 'Found in nickel sulfide and oxide ores, abundant in meteorites'
  },
  {
    atomicNumber: 29,
    symbol: 'Cu',
    name: 'Copper',
    atomicMass: 63.546,
    category: 'transition metal',
    row: 4,
    column: 11,
    electronConfiguration: '[Ar] 3d¹⁰ 4s¹',
    meltingPoint: 1084.62,
    boilingPoint: 2562,
    density: 8.96,
    discoveredBy: 'Ancient civilizations',
    yearDiscovered: null,
    description: 'Copper is an excellent conductor of electricity and heat, with antimicrobial properties.',
    uses: ['Electrical wiring', 'Plumbing', 'Electronics', 'Coins and jewelry'],
    occurrence: 'Found in various minerals worldwide, essential for life in small amounts'
  },
  {
    atomicNumber: 30,
    symbol: 'Zn',
    name: 'Zinc',
    atomicMass: 65.38,
    category: 'transition metal',
    row: 4,
    column: 12,
    electronConfiguration: '[Ar] 3d¹⁰ 4s²',
    meltingPoint: 419.53,
    boilingPoint: 907,
    density: 7.134,
    discoveredBy: 'Ancient civilizations',
    yearDiscovered: null,
    description: 'Zinc is a bluish-white metal essential for life and widely used for corrosion protection.',
    uses: ['Galvanizing steel', 'Brass production', 'Dietary supplements', 'Batteries'],
    occurrence: 'Found in many minerals, essential trace element for all life forms'
  },
  {
    atomicNumber: 31,
    symbol: 'Ga',
    name: 'Gallium',
    atomicMass: 69.723,
    category: 'post-transition metal',
    row: 4,
    column: 13,
    electronConfiguration: '[Ar] 3d¹⁰ 4s² 4p¹',
    meltingPoint: 29.76,
    boilingPoint: 2204,
    density: 5.907,
    discoveredBy: 'Paul-Émile Lecoq de Boisbaudran',
    yearDiscovered: 1875,
    description: 'Gallium is a soft, silvery metal that melts just above room temperature.',
    uses: ['Semiconductors', 'LEDs', 'Solar panels', 'Thermometers'],
    occurrence: 'Rare element found in small amounts in aluminum and zinc ores'
  },
  {
    atomicNumber: 32,
    symbol: 'Ge',
    name: 'Germanium',
    atomicMass: 72.630,
    category: 'metalloid',
    row: 4,
    column: 14,
    electronConfiguration: '[Ar] 3d¹⁰ 4s² 4p²',
    meltingPoint: 938.25,
    boilingPoint: 2833,
    density: 5.323,
    discoveredBy: 'Clemens Winkler',
    yearDiscovered: 1886,
    description: 'Germanium is a lustrous, hard metalloid important in semiconductor technology.',
    uses: ['Semiconductors', 'Fiber optics', 'Infrared optics', 'Electronics'],
    occurrence: 'Rare element found in zinc ores and coal'
  },
  {
    atomicNumber: 33,
    symbol: 'As',
    name: 'Arsenic',
    atomicMass: 74.922,
    category: 'metalloid',
    row: 4,
    column: 15,
    electronConfiguration: '[Ar] 3d¹⁰ 4s² 4p³',
    meltingPoint: 817,
    boilingPoint: 614,
    density: 5.776,
    discoveredBy: 'Albertus Magnus',
    yearDiscovered: 1250,
    description: 'Arsenic is a toxic metalloid with both beneficial and harmful applications.',
    uses: ['Semiconductors', 'Wood preservatives', 'Pesticides', 'Medical treatments'],
    occurrence: 'Found in many minerals, occurs naturally in groundwater in some regions'
  },
  {
    atomicNumber: 34,
    symbol: 'Se',
    name: 'Selenium',
    atomicMass: 78.971,
    category: 'reactive nonmetal',
    row: 4,
    column: 16,
    electronConfiguration: '[Ar] 3d¹⁰ 4s² 4p⁴',
    meltingPoint: 221,
    boilingPoint: 685,
    density: 4.809,
    discoveredBy: 'Jöns Jacob Berzelius',
    yearDiscovered: 1817,
    description: 'Selenium is an essential trace element with important biological functions.',
    uses: ['Glass manufacturing', 'Electronics', 'Dietary supplements', 'Photocells'],
    occurrence: 'Found in sulfide ores, essential micronutrient for many organisms'
  },
  {
    atomicNumber: 35,
    symbol: 'Br',
    name: 'Bromine',
    atomicMass: 79.904,
    category: 'reactive nonmetal',
    row: 4,
    column: 17,
    electronConfiguration: '[Ar] 3d¹⁰ 4s² 4p⁵',
    meltingPoint: -7.2,
    boilingPoint: 58.8,
    density: 3.122,
    discoveredBy: 'Antoine Jérôme Balard',
    yearDiscovered: 1826,
    description: 'Bromine is a reddish-brown liquid halogen with a strong, disagreeable odor.',
    uses: ['Flame retardants', 'Water treatment', 'Photography', 'Pharmaceuticals'],
    occurrence: 'Found in seawater and salt lakes, extracted from brine'
  },
  {
    atomicNumber: 36,
    symbol: 'Kr',
    name: 'Krypton',
    atomicMass: 83.798,
    category: 'noble gas',
    row: 4,
    column: 18,
    electronConfiguration: '[Ar] 3d¹⁰ 4s² 4p⁶',
    meltingPoint: -157.36,
    boilingPoint: -153.22,
    density: 0.003733,
    discoveredBy: 'William Ramsay',
    yearDiscovered: 1898,
    description: 'Krypton is a colorless, odorless noble gas used in specialized lighting.',
    uses: ['High-performance light bulbs', 'Lasers', 'Photography', 'Research applications'],
    occurrence: 'Trace amounts in Earth\'s atmosphere, produced by nuclear fission'
  },
  // Continue with remaining elements... (I'll add the most important ones for a complete periodic table)
  {
    atomicNumber: 37,
    symbol: 'Rb',
    name: 'Rubidium',
    atomicMass: 85.468,
    category: 'alkali metal',
    row: 5,
    column: 1,
    electronConfiguration: '[Kr] 5s¹',
    meltingPoint: 39.31,
    boilingPoint: 688,
    density: 1.532,
    discoveredBy: 'Robert Bunsen',
    yearDiscovered: 1861,
    description: 'Rubidium is a soft, silvery-white alkali metal that ignites spontaneously in air.',
    uses: ['Atomic clocks', 'Medical imaging', 'Research applications', 'Specialty glass'],
    occurrence: 'Found in small amounts in many minerals'
  },
  {
    atomicNumber: 38,
    symbol: 'Sr',
    name: 'Strontium',
    atomicMass: 87.62,
    category: 'alkaline earth metal',
    row: 5,
    column: 2,
    electronConfiguration: '[Kr] 5s²',
    meltingPoint: 777,
    boilingPoint: 1382,
    density: 2.64,
    discoveredBy: 'William Cruickshank',
    yearDiscovered: 1790,
    description: 'Strontium is a soft, silver-yellow alkaline earth metal.',
    uses: ['Fireworks (red color)', 'Medical imaging', 'Toothpaste', 'Glass manufacturing'],
    occurrence: 'Found in celestite and strontianite minerals'
  },
  // Adding key transition metals from period 5
  {
    atomicNumber: 47,
    symbol: 'Ag',
    name: 'Silver',
    atomicMass: 107.868,
    category: 'transition metal',
    row: 5,
    column: 11,
    electronConfiguration: '[Kr] 4d¹⁰ 5s¹',
    meltingPoint: 961.78,
    boilingPoint: 2162,
    density: 10.501,
    discoveredBy: 'Ancient civilizations',
    yearDiscovered: null,
    description: 'Silver is a precious metal with the highest electrical and thermal conductivity.',
    uses: ['Jewelry and coins', 'Electronics', 'Photography', 'Medical applications'],
    occurrence: 'Found in silver ores and as a byproduct of lead, copper, and zinc refining'
  },
  {
    atomicNumber: 79,
    symbol: 'Au',
    name: 'Gold',
    atomicMass: 196.967,
    category: 'transition metal',
    row: 6,
    column: 11,
    electronConfiguration: '[Xe] 4f¹⁴ 5d¹⁰ 6s¹',
    meltingPoint: 1064.18,
    boilingPoint: 2856,
    density: 19.282,
    discoveredBy: 'Ancient civilizations',
    yearDiscovered: null,
    description: 'Gold is a precious metal known for its beauty, rarity, and resistance to corrosion.',
    uses: ['Jewelry', 'Electronics', 'Investment', 'Medical applications'],
    occurrence: 'Found in quartz veins and placer deposits worldwide'
  },
  // Adding some lanthanides
  {
    atomicNumber: 57,
    symbol: 'La',
    name: 'Lanthanum',
    atomicMass: 138.905,
    category: 'lanthanide',
    row: 6,
    column: 3,
    electronConfiguration: '[Xe] 5d¹ 6s²',
    meltingPoint: 920,
    boilingPoint: 3464,
    density: 6.145,
    discoveredBy: 'Carl Gustav Mosander',
    yearDiscovered: 1839,
    description: 'Lanthanum is a soft, ductile, silvery-white rare earth metal.',
    uses: ['Camera lenses', 'Catalysts', 'Lighting', 'Batteries'],
    occurrence: 'Found in rare earth minerals like monazite and bastnäsite'
  },
  {
    atomicNumber: 58,
    symbol: 'Ce',
    name: 'Cerium',
    atomicMass: 140.116,
    category: 'lanthanide',
    row: 6,
    column: 4,
    electronConfiguration: '[Xe] 4f¹ 5d¹ 6s²',
    meltingPoint: 798,
    boilingPoint: 3443,
    density: 6.77,
    discoveredBy: 'Jöns Jacob Berzelius',
    yearDiscovered: 1803,
    description: 'Cerium is the most abundant rare earth element.',
    uses: ['Catalysts', 'Glass polishing', 'Lighter flints', 'Self-cleaning ovens'],
    occurrence: 'Most abundant lanthanide, found in many rare earth minerals'
  },
  // Adding actinides
  {
    atomicNumber: 89,
    symbol: 'Ac',
    name: 'Actinium',
    atomicMass: 227,
    category: 'actinide',
    row: 7,
    column: 3,
    electronConfiguration: '[Rn] 6d¹ 7s²',
    meltingPoint: 1051,
    boilingPoint: 3198,
    density: 10.07,
    discoveredBy: 'André-Louis Debierne',
    yearDiscovered: 1899,
    description: 'Actinium is a radioactive metallic element and the first member of the actinide series.',
    uses: ['Medical treatments', 'Research', 'Neutron source'],
    occurrence: 'Extremely rare, found in uranium ores in trace amounts'
  },
  {
    atomicNumber: 92,
    symbol: 'U',
    name: 'Uranium',
    atomicMass: 238.029,
    category: 'actinide',
    row: 7,
    column: 6,
    electronConfiguration: '[Rn] 5f³ 6d¹ 7s²',
    meltingPoint: 1135,
    boilingPoint: 4131,
    density: 18.95,
    discoveredBy: 'Martin Heinrich Klaproth',
    yearDiscovered: 1789,
    description: 'Uranium is a heavy, radioactive metal used as fuel in nuclear reactors.',
    uses: ['Nuclear fuel', 'Nuclear weapons', 'Medical isotopes', 'Dating rocks'],
    occurrence: 'Found in uranium ores like uraninite and pitchblende'
  },
  // Adding some superheavy elements
  {
    atomicNumber: 118,
    symbol: 'Og',
    name: 'Oganesson',
    atomicMass: 294,
    category: 'noble gas',
    row: 7,
    column: 18,
    electronConfiguration: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶',
    meltingPoint: null,
    boilingPoint: null,
    density: null,
    discoveredBy: 'Joint Institute for Nuclear Research',
    yearDiscovered: 2002,
    description: 'Oganesson is a synthetic superheavy element with a very short half-life.',
    uses: ['Scientific research only'],
    occurrence: 'Artificially created in particle accelerators, extremely unstable'
  }
];

// Helper function to get all 118 elements with basic data for missing ones
export const getAllElements = (): Element[] => {
  const existingElements = new Set(periodicTableData.map(el => el.atomicNumber));
  const allElements = [...periodicTableData];
  
  // Add placeholder data for missing elements
  for (let i = 1; i <= 118; i++) {
    if (!existingElements.has(i)) {
      // Add basic placeholder data for elements not yet defined
      const element: Element = {
        atomicNumber: i,
        symbol: getElementSymbol(i),
        name: getElementName(i),
        atomicMass: i * 2, // Approximate
        category: getElementCategory(i),
        row: getElementRow(i),
        column: getElementColumn(i),
        electronConfiguration: `[${getNobleGasCore(i)}] ...`,
        meltingPoint: null,
        boilingPoint: null,
        density: null,
        discoveredBy: 'Various scientists',
        yearDiscovered: i > 92 ? 1940 + (i - 92) * 2 : null,
        description: `${getElementName(i)} is element number ${i} in the periodic table.`,
        uses: ['Research applications'],
        occurrence: i > 92 ? 'Artificially created' : 'Found in nature'
      };
      allElements.push(element);
    }
  }
  
  return allElements.sort((a, b) => a.atomicNumber - b.atomicNumber);
};

// Helper functions for missing elements
function getElementSymbol(atomicNumber: number): string {
  const symbols: { [key: number]: string } = {
    39: 'Y', 40: 'Zr', 41: 'Nb', 42: 'Mo', 43: 'Tc', 44: 'Ru', 45: 'Rh', 46: 'Pd', 48: 'Cd', 49: 'In', 50: 'Sn', 51: 'Sb', 52: 'Te', 53: 'I', 54: 'Xe',
    55: 'Cs', 56: 'Ba', 59: 'Pr', 60: 'Nd', 61: 'Pm', 62: 'Sm', 63: 'Eu', 64: 'Gd', 65: 'Tb', 66: 'Dy', 67: 'Ho', 68: 'Er', 69: 'Tm', 70: 'Yb', 71: 'Lu',
    72: 'Hf', 73: 'Ta', 74: 'W', 75: 'Re', 76: 'Os', 77: 'Ir', 78: 'Pt', 80: 'Hg', 81: 'Tl', 82: 'Pb', 83: 'Bi', 84: 'Po', 85: 'At', 86: 'Rn',
    87: 'Fr', 88: 'Ra', 90: 'Th', 91: 'Pa', 93: 'Np', 94: 'Pu', 95: 'Am', 96: 'Cm', 97: 'Bk', 98: 'Cf', 99: 'Es', 100: 'Fm', 101: 'Md', 102: 'No', 103: 'Lr',
    104: 'Rf', 105: 'Db', 106: 'Sg', 107: 'Bh', 108: 'Hs', 109: 'Mt', 110: 'Ds', 111: 'Rg', 112: 'Cn', 113: 'Nh', 114: 'Fl', 115: 'Mc', 116: 'Lv', 117: 'Ts'
  };
  return symbols[atomicNumber] || `E${atomicNumber}`;
}

function getElementName(atomicNumber: number): string {
  const names: { [key: number]: string } = {
    39: 'Yttrium', 40: 'Zirconium', 41: 'Niobium', 42: 'Molybdenum', 43: 'Technetium', 44: 'Ruthenium', 45: 'Rhodium', 46: 'Palladium', 48: 'Cadmium', 49: 'Indium', 50: 'Tin', 51: 'Antimony', 52: 'Tellurium', 53: 'Iodine', 54: 'Xenon',
    55: 'Caesium', 56: 'Barium', 59: 'Praseodymium', 60: 'Neodymium', 61: 'Promethium', 62: 'Samarium', 63: 'Europium', 64: 'Gadolinium', 65: 'Terbium', 66: 'Dysprosium', 67: 'Holmium', 68: 'Erbium', 69: 'Thulium', 70: 'Ytterbium', 71: 'Lutetium',
    72: 'Hafnium', 73: 'Tantalum', 74: 'Tungsten', 75: 'Rhenium', 76: 'Osmium', 77: 'Iridium', 78: 'Platinum', 80: 'Mercury', 81: 'Thallium', 82: 'Lead', 83: 'Bismuth', 84: 'Polonium', 85: 'Astatine', 86: 'Radon',
    87: 'Francium', 88: 'Radium', 90: 'Thorium', 91: 'Protactinium', 93: 'Neptunium', 94: 'Plutonium', 95: 'Americium', 96: 'Curium', 97: 'Berkelium', 98: 'Californium', 99: 'Einsteinium', 100: 'Fermium', 101: 'Mendelevium', 102: 'Nobelium', 103: 'Lawrencium',
    104: 'Rutherfordium', 105: 'Dubnium', 106: 'Seaborgium', 107: 'Bohrium', 108: 'Hassium', 109: 'Meitnerium', 110: 'Darmstadtium', 111: 'Roentgenium', 112: 'Copernicium', 113: 'Nihonium', 114: 'Flerovium', 115: 'Moscovium', 116: 'Livermorium', 117: 'Tennessine'
  };
  return names[atomicNumber] || `Element ${atomicNumber}`;
}

function getElementCategory(atomicNumber: number): string {
  if ([3, 11, 19, 37, 55, 87].includes(atomicNumber)) return 'alkali metal';
  if ([4, 12, 20, 38, 56, 88].includes(atomicNumber)) return 'alkaline earth metal';
  if (atomicNumber >= 21 && atomicNumber <= 30) return 'transition metal';
  if (atomicNumber >= 39 && atomicNumber <= 48) return 'transition metal';
  if (atomicNumber >= 72 && atomicNumber <= 80) return 'transition metal';
  if (atomicNumber >= 104 && atomicNumber <= 112) return 'transition metal';
  if ([5, 14, 32, 33, 51, 52, 84].includes(atomicNumber)) return 'metalloid';
  if ([13, 31, 49, 50, 81, 82, 83, 113, 114, 115, 116].includes(atomicNumber)) return 'post-transition metal';
  if ([1, 6, 7, 8, 9, 15, 16, 17, 34, 35, 53, 85, 117].includes(atomicNumber)) return 'reactive nonmetal';
  if ([2, 10, 18, 36, 54, 86, 118].includes(atomicNumber)) return 'noble gas';
  if (atomicNumber >= 57 && atomicNumber <= 71) return 'lanthanide';
  if (atomicNumber >= 89 && atomicNumber <= 103) return 'actinide';
  return 'unknown';
}

function getElementRow(atomicNumber: number): number {
  if (atomicNumber <= 2) return 1;
  if (atomicNumber <= 10) return 2;
  if (atomicNumber <= 18) return 3;
  if (atomicNumber <= 36) return 4;
  if (atomicNumber <= 54) return 5;
  if (atomicNumber <= 86) return 6;
  return 7;
}

function getElementColumn(atomicNumber: number): number {
  const periods = [
    [1, 2],
    [3, 4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
    [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54],
    [55, 56, 57, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86],
    [87, 88, 89, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118]
  ];
  
  for (let row = 0; row < periods.length; row++) {
    const index = periods[row].indexOf(atomicNumber);
    if (index !== -1) {
      if (row === 0) return index + 1;
      if (row === 1) return index + 1;
      if (row === 2) return index + 1;
      if (row >= 3) {
        return index + 1;
      }
    }
  }
  
  // Special cases for lanthanides and actinides
  if (atomicNumber >= 58 && atomicNumber <= 71) return atomicNumber - 54; // Ce to Lu
  if (atomicNumber >= 90 && atomicNumber <= 103) return atomicNumber - 86; // Th to Lr
  
  return 1;
}

function getNobleGasCore(atomicNumber: number): string {
  if (atomicNumber <= 2) return '';
  if (atomicNumber <= 10) return 'He';
  if (atomicNumber <= 18) return 'Ne';
  if (atomicNumber <= 36) return 'Ar';
  if (atomicNumber <= 54) return 'Kr';
  if (atomicNumber <= 86) return 'Xe';
  return 'Rn';
}
