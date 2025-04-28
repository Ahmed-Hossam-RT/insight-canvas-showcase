
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
        <Filter className="h-5 w-5 text-primary" />
        <h2 className="text-2xl font-medium">Filter Certificates</h2>
        {activeFilters.length > 0 && (
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={clearFilters}
            className="ml-auto text-muted-foreground hover:text-primary"
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
                ? "bg-primary hover:bg-primary/90 text-white"
                : "border-muted-foreground/30 hover:border-primary hover:text-primary"
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
