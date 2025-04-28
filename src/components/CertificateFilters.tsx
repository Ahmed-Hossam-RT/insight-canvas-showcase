
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Filter } from 'lucide-react';

const domains = [
  "Data Engineer", 
  "Power BI", 
  "SQL", 
  "Cloud", 
  "Data Analyst", 
  "Machine Learning", 
  "Visualization"
];

interface CertificateFiltersProps {
  onFilterChange: (filters: string[]) => void;
}

const CertificateFilters: React.FC<CertificateFiltersProps> = ({ onFilterChange }) => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const toggleFilter = (domain: string) => {
    setActiveFilters(prev => {
      const newFilters = prev.includes(domain)
        ? prev.filter(filter => filter !== domain)
        : [...prev, domain];
      
      onFilterChange(newFilters);
      return newFilters;
    });
  };

  const clearFilters = () => {
    setActiveFilters([]);
    onFilterChange([]);
  };

  return (
    <div className="mb-10">
      <div className="flex items-center gap-2 mb-5">
        <Filter className="h-5 w-5 text-analyst-orange" />
        <h2 className="text-2xl font-medium text-white">Filter Certificates</h2>
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
      
      <div className="flex flex-wrap gap-3">
        {domains.map(domain => (
          <Button 
            key={domain}
            size="sm"
            variant={activeFilters.includes(domain) ? "default" : "outline"}
            className={
              activeFilters.includes(domain)
                ? "bg-analyst-orange hover:bg-analyst-burntorange text-white"
                : "border-analyst-lightgrey/30 hover:border-analyst-orange hover:text-analyst-orange text-white/80"
            }
            onClick={() => toggleFilter(domain)}
          >
            {domain}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CertificateFilters;
