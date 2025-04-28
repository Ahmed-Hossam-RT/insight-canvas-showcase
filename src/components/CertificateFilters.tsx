
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Filter } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <motion.div 
      className="mb-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-2 mb-5">
        <motion.div
          whileHover={{ rotate: 180, scale: 1.2 }}
          transition={{ duration: 0.5 }}
        >
          <Filter className="h-5 w-5 text-primary" />
        </motion.div>
        <h2 className="text-2xl font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Filter Certificates</h2>
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
        {domains.map((domain, index) => (
          <motion.div
            key={domain}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <Button 
              size="sm"
              variant={activeFilters.includes(domain) ? "default" : "outline"}
              className={
                activeFilters.includes(domain)
                  ? "bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white shadow-md"
                  : "border-muted-foreground/30 hover:border-primary hover:text-primary"
              }
              onClick={() => toggleFilter(domain)}
            >
              {domain}
            </Button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CertificateFilters;
