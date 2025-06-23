
import { useState, useEffect } from 'react';

interface ElementData {
  discoveryHistory: string | null;
  physicalProperties: {
    appearance: string | null;
    density: string | null;
    hardness: string | null;
    conductivity: string | null;
  };
  chemicalProperties: {
    oxidationStates: string | null;
    ionizationEnergy: string | null;
    electronegativity: string | null;
    atomicRadius: string | null;
  };
  isotopes: string | null;
  biologicalRole: string | null;
  safetyInfo: string | null;
  industrialUses: string[] | null;
  geologicalOccurrence: string | null;
  crystalStructure: string | null;
  loading: boolean;
  error: string | null;
}

export const useElementData = (elementSymbol: string, atomicNumber: number) => {
  const [data, setData] = useState<ElementData>({
    discoveryHistory: null,
    physicalProperties: {
      appearance: null,
      density: null,
      hardness: null,
      conductivity: null,
    },
    chemicalProperties: {
      oxidationStates: null,
      ionizationEnergy: null,
      electronegativity: null,
      atomicRadius: null,
    },
    isotopes: null,
    biologicalRole: null,
    safetyInfo: null,
    industrialUses: null,
    geologicalOccurrence: null,
    crystalStructure: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchElementData = async () => {
      setData(prev => ({ ...prev, loading: true, error: null }));
      
      try {
        // Using PeriodicTableAPI.com for comprehensive element data
        const response = await fetch(
          `https://periodic-table-elements-info.herokuapp.com/element/atomicnumber/${atomicNumber}`
        );
        
        if (!response.ok) {
          throw new Error('Element data not found');
        }
        
        const elementInfo = await response.json();
        
        // Enhanced data processing for more detailed information
        const getDetailedProperties = (symbol: string) => {
          const elementDatabase = {
            'H': {
              discoveryHistory: 'Discovered by Henry Cavendish in 1766. Named from Greek "hydro" (water) and "genes" (forming).',
              appearance: 'Colorless, odorless gas',
              biologicalRole: 'Essential for all life; component of water and organic molecules',
              safetyInfo: 'Highly flammable gas; forms explosive mixtures with air',
              industrialUses: ['Rocket fuel', 'Ammonia production', 'Hydrogenation of oils', 'Metal refining'],
              geologicalOccurrence: 'Most abundant element in universe; found in water, hydrocarbons',
              crystalStructure: 'Hexagonal close-packed (solid)',
              isotopes: 'Protium (¹H), Deuterium (²H), Tritium (³H - radioactive)'
            },
            'He': {
              discoveryHistory: 'First detected in solar spectrum by Pierre Janssen and Norman Lockyer in 1868.',
              appearance: 'Colorless, odorless noble gas',
              biologicalRole: 'Biologically inert; no known biological function',
              safetyInfo: 'Non-toxic but can cause asphyxiation in confined spaces',
              industrialUses: ['Balloon and airship inflation', 'Cryogenics', 'Arc welding', 'Deep-sea diving'],
              geologicalOccurrence: 'Produced by radioactive decay; found in natural gas',
              crystalStructure: 'Face-centered cubic (solid at extreme conditions)',
              isotopes: 'Helium-3 (³He), Helium-4 (⁴He - most common)'
            },
            'Li': {
              discoveryHistory: 'Discovered by Johan August Arfwedson in 1817 in petalite ore.',
              appearance: 'Soft, silvery-white metal',
              biologicalRole: 'Mood stabilizer in psychiatry; trace element in some organisms',
              safetyInfo: 'Reacts violently with water; corrosive to skin',
              industrialUses: ['Lithium-ion batteries', 'Ceramics and glass', 'Psychiatric medication', 'Aerospace alloys'],
              geologicalOccurrence: 'Found in pegmatite deposits, salt lakes, and seawater',
              crystalStructure: 'Body-centered cubic',
              isotopes: 'Lithium-6 (⁶Li), Lithium-7 (⁷Li - most abundant)'
            },
            'C': {
              discoveryHistory: 'Known since ancient times; carbon dating developed by Willard Libby in 1940s.',
              appearance: 'Varies: diamond (colorless), graphite (black), amorphous carbon (black)',
              biologicalRole: 'Fundamental to all organic life; backbone of biomolecules',
              safetyInfo: 'Generally safe; carbon monoxide is highly toxic',
              industrialUses: ['Steel production', 'Diamond tools', 'Carbon fiber', 'Activated carbon filters'],
              geologicalOccurrence: 'Coal, oil, natural gas, limestone, diamonds',
              crystalStructure: 'Diamond (cubic), Graphite (hexagonal), Fullerenes',
              isotopes: 'Carbon-12 (¹²C - 98.9%), Carbon-13 (¹³C), Carbon-14 (¹⁴C - radioactive)'
            },
            'O': {
              discoveryHistory: 'Discovered independently by Carl Wilhelm Scheele and Joseph Priestley in 1770s.',
              appearance: 'Colorless, odorless gas; pale blue liquid',
              biologicalRole: 'Essential for cellular respiration and energy production',
              safetyInfo: 'Supports combustion; high concentrations can be toxic',
              industrialUses: ['Steel production', 'Medical oxygen', 'Rocket oxidizer', 'Water treatment'],
              geologicalOccurrence: 'Most abundant element in Earth\'s crust; 21% of atmosphere',
              crystalStructure: 'Cubic (solid oxygen)',
              isotopes: 'Oxygen-16 (¹⁶O - 99.76%), Oxygen-17 (¹⁷O), Oxygen-18 (¹⁸O)'
            },
            'Fe': {
              discoveryHistory: 'Used since ancient times; Iron Age began around 1200 BCE.',
              appearance: 'Lustrous metallic gray, rusts to reddish-brown',
              biologicalRole: 'Essential for oxygen transport in blood (hemoglobin)',
              safetyInfo: 'Generally safe; iron dust can be explosive',
              industrialUses: ['Steel and alloy production', 'Construction', 'Automotive', 'Machinery'],
              geologicalOccurrence: 'Fourth most abundant element in Earth\'s crust; iron ore deposits',
              crystalStructure: 'Body-centered cubic (alpha iron)',
              isotopes: 'Iron-54, Iron-56 (most abundant), Iron-57, Iron-58'
            },
            'Au': {
              discoveryHistory: 'Known since ancient times; symbol from Latin "aurum".',
              appearance: 'Bright yellow metallic luster',
              biologicalRole: 'No essential biological function; used in medical treatments',
              safetyInfo: 'Generally non-toxic; gold compounds can be toxic',
              industrialUses: ['Jewelry', 'Electronics', 'Dentistry', 'Investment commodity'],
              geologicalOccurrence: 'Found in quartz veins, placer deposits, and seawater',
              crystalStructure: 'Face-centered cubic',
              isotopes: 'Gold-197 (¹⁹⁷Au - only stable isotope)'
            }
          };
          
          return elementDatabase[symbol] || {
            discoveryHistory: 'Discovery information not available in current database.',
            appearance: 'Physical appearance data not available.',
            biologicalRole: 'Biological role information not available.',
            safetyInfo: 'Safety information not available.',
            industrialUses: ['Industrial applications not specified'],
            geologicalOccurrence: 'Geological occurrence data not available.',
            crystalStructure: 'Crystal structure data not available.',
            isotopes: 'Isotope information not available.'
          };
        };
        
        const detailedInfo = getDetailedProperties(elementSymbol);
        
        setData({
          discoveryHistory: detailedInfo.discoveryHistory,
          physicalProperties: {
            appearance: detailedInfo.appearance,
            density: elementInfo.density ? `${elementInfo.density} g/cm³` : 'Not available',
            hardness: elementInfo.hardness || 'Not specified',
            conductivity: elementInfo.conductivity || 'Not specified',
          },
          chemicalProperties: {
            oxidationStates: elementInfo.oxidationStates || 'Not available',
            ionizationEnergy: elementInfo.ionizationEnergy ? `${elementInfo.ionizationEnergy} eV` : 'Not available',
            electronegativity: elementInfo.electronegativity || 'Not available',
            atomicRadius: elementInfo.atomicRadius ? `${elementInfo.atomicRadius} pm` : 'Not available',
          },
          isotopes: detailedInfo.isotopes,
          biologicalRole: detailedInfo.biologicalRole,
          safetyInfo: detailedInfo.safetyInfo,
          industrialUses: detailedInfo.industrialUses,
          geologicalOccurrence: detailedInfo.geologicalOccurrence,
          crystalStructure: detailedInfo.crystalStructure,
          loading: false,
          error: null,
        });
      } catch (error) {
        console.log(`Detailed element data not available for ${elementSymbol}`);
        setData(prev => ({
          ...prev,
          loading: false,
          error: `Detailed data not available for ${elementSymbol}`,
        }));
      }
    };

    if (elementSymbol && atomicNumber) {
      fetchElementData();
    }
  }, [elementSymbol, atomicNumber]);

  return data;
};
