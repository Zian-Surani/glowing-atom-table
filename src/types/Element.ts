
export interface Element {
  atomicNumber: number;
  symbol: string;
  name: string;
  atomicMass: number;
  category: string;
  row: number;
  column: number;
  electronConfiguration: string;
  meltingPoint: number | null;
  boilingPoint: number | null;
  density: number | null;
  discoveredBy: string;
  yearDiscovered: number | null;
  description: string;
  uses: string[];
  occurrence: string;
}
