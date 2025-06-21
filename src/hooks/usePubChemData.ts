
import { useState, useEffect } from 'react';

interface PubChemData {
  cas: string | null;
  iupacName: string | null;
  synonyms: string[];
  molecularFormula: string | null;
  molecularWeight: number | null;
  physicalDescription: string | null;
  safetyInfo: string | null;
  loading: boolean;
  error: string | null;
}

export const usePubChemData = (elementSymbol: string) => {
  const [data, setData] = useState<PubChemData>({
    cas: null,
    iupacName: null,
    synonyms: [],
    molecularFormula: null,
    molecularWeight: null,
    physicalDescription: null,
    safetyInfo: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchPubChemData = async () => {
      setData(prev => ({ ...prev, loading: true, error: null }));
      
      try {
        // Search for the element by symbol
        const searchResponse = await fetch(
          `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${elementSymbol}/JSON`
        );
        
        if (!searchResponse.ok) {
          throw new Error('Element not found in PubChem');
        }
        
        const searchData = await searchResponse.json();
        const cid = searchData.PC_Compounds[0].id.id.cid;
        
        // Get detailed properties
        const propsResponse = await fetch(
          `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/${cid}/property/MolecularFormula,MolecularWeight,IUPACName/JSON`
        );
        
        let propsData = null;
        if (propsResponse.ok) {
          propsData = await propsResponse.json();
        }
        
        // Get synonyms
        const synonymsResponse = await fetch(
          `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/${cid}/synonyms/JSON`
        );
        
        let synonymsData = null;
        if (synonymsResponse.ok) {
          synonymsData = await synonymsResponse.json();
        }
        
        setData({
          cas: null, // Would need additional API call
          iupacName: propsData?.PropertyTable?.Properties?.[0]?.IUPACName || null,
          synonyms: synonymsData?.InformationList?.Information?.[0]?.Synonym?.slice(0, 5) || [],
          molecularFormula: propsData?.PropertyTable?.Properties?.[0]?.MolecularFormula || null,
          molecularWeight: propsData?.PropertyTable?.Properties?.[0]?.MolecularWeight || null,
          physicalDescription: null, // Would need additional API call
          safetyInfo: null, // Would need additional API call
          loading: false,
          error: null,
        });
      } catch (error) {
        console.log(`PubChem data not available for ${elementSymbol}`);
        setData(prev => ({
          ...prev,
          loading: false,
          error: `PubChem data not available for ${elementSymbol}`,
        }));
      }
    };

    if (elementSymbol) {
      fetchPubChemData();
    }
  }, [elementSymbol]);

  return data;
};
