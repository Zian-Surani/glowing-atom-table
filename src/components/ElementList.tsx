import React, { useState, useMemo } from 'react';
import { Search, Filter, ChevronRight } from 'lucide-react';
import { Element } from '../types/Element';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface ElementListProps {
  elements: Element[];
  onElementSelect: (element: Element) => void;
}

export const ElementList: React.FC<ElementListProps> = ({ elements, onElementSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const categories = useMemo(() => {
    const cats = [...new Set(elements.map(el => el.category))];
    return cats.sort();
  }, [elements]);

  const filteredElements = useMemo(() => {
    return elements.filter(element => {
      const matchesSearch = 
        element.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        element.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
        element.atomicNumber.toString().includes(searchTerm);
      
      const matchesCategory = categoryFilter === 'all' || element.category === categoryFilter;
      
      return matchesSearch && matchesCategory;
    }).sort((a, b) => a.atomicNumber - b.atomicNumber);
  }, [elements, searchTerm, categoryFilter]);

  const getCategoryColor = (category: string) => {
    const colors = {
      'alkali metal': 'bg-pink-500/20 border-pink-500/40',
      'alkaline earth metal': 'bg-orange-500/20 border-orange-500/40',
      'transition metal': 'bg-yellow-500/20 border-yellow-500/40',
      'post-transition metal': 'bg-green-500/20 border-green-500/40',
      'metalloid': 'bg-cyan-500/20 border-cyan-500/40',
      'reactive nonmetal': 'bg-blue-500/20 border-blue-500/40',
      'noble gas': 'bg-purple-500/20 border-purple-500/40',
      'lanthanide': 'bg-fuchsia-500/20 border-fuchsia-500/40',
      'actinide': 'bg-indigo-500/20 border-indigo-500/40',
      'unknown': 'bg-gray-500/20 border-gray-500/40'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-500/20 border-gray-500/40';
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      {/* Search and Filter Controls */}
      <div className="mb-6 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            type="text"
            placeholder="Search elements by name, symbol, or atomic number..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
          />
        </div>
        
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 z-10" />
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="pl-10 bg-gray-800/50 border-gray-600 text-white">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-600">
              <SelectItem value="all" className="text-white hover:bg-gray-700">All Categories</SelectItem>
              {categories.map(category => (
                <SelectItem 
                  key={category} 
                  value={category}
                  className="text-white hover:bg-gray-700 capitalize"
                >
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-4 text-sm text-gray-400">
        {filteredElements.length} element{filteredElements.length !== 1 ? 's' : ''} found
      </div>

      {/* Element List */}
      <div className="space-y-3 max-h-96 overflow-y-auto">
        {filteredElements.map((element) => (
          <div
            key={element.symbol}
            onClick={() => onElementSelect(element)}
            className={`
              p-4 rounded-lg border transition-all duration-200 cursor-pointer
              hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]
              ${getCategoryColor(element.category)}
              backdrop-blur-sm
            `}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {/* Element Symbol */}
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <span className="text-lg font-bold text-white">{element.symbol}</span>
                </div>
                
                {/* Element Info */}
                <div>
                  <h3 className="font-semibold text-white text-lg">{element.name}</h3>
                  <p className="text-gray-300 text-sm">
                    Atomic Number: {element.atomicNumber} • {element.atomicMass}
                  </p>
                  <p className="text-gray-400 text-xs capitalize mt-1">
                    {element.category}
                  </p>
                </div>
              </div>
              
              {/* Arrow */}
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        ))}
      </div>

      {filteredElements.length === 0 && (
        <div className="text-center py-8 text-gray-400">
          <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <p>No elements found matching your search.</p>
        </div>
      )}
    </div>
  );
};