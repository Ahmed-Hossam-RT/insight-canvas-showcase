
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Filter } from 'lucide-react';

const categories = [
  "Power BI", 
  "HR Analytics", 
  "Market Analysis", 
  "Employee Data", 
  "Competitive Intelligence"
];

interface ProjectFiltersProps {
  onFilterChange: (filters: string[]) => void;
}

const ProjectFilters: React.FC<ProjectFiltersProps> = ({ onFilterChange }) => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const toggleFilter = (category: string) => {
    setActiveFilters(prev => {
      const newFilters = prev.includes(category)
        ? prev.filter(filter => filter !== category)
        : [...prev, category];
      
      onFilterChange(newFilters);
      return newFilters;
    });
  };

  const clearFilters = () => {
    setActiveFilters([]);
    onFilterChange([]);
  };

  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-3">
        <Filter className="h-5 w-5 text-analyst-orange" />
        <h2 className="text-xl font-medium">Filter Projects</h2>
        {activeFilters.length > 0 && (
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={clearFilters}
            className="ml-auto text-analyst-lightgrey hover:text-analyst-orange"
          >
            Clear
          </Button>
        )}
      </div>
      
      <div className="flex flex-wrap gap-2">
        {categories.map(category => (
          <Button 
            key={category}
            size="sm"
            variant={activeFilters.includes(category) ? "default" : "outline"}
            className={
              activeFilters.includes(category)
                ? "bg-analyst-orange hover:bg-analyst-burntorange text-white"
                : "border-analyst-lightgrey/30 hover:border-analyst-orange hover:text-analyst-orange"
            }
            onClick={() => toggleFilter(category)}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ProjectFilters;
