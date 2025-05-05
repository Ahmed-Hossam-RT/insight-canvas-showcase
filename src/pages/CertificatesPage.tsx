
import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import CertificateFilters from '@/components/CertificateFilters';
import CertificateGrid from '@/components/CertificateGrid';
import { Certificate } from '@/types/certificate';
import { motion } from 'framer-motion';
import { CertificateDetailModal } from '@/components/CertificateDetailModal';
import { certificates } from '@/data/certificates';

const CertificatesPage = () => {
  const navigate = useNavigate();
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  
  const handleGoBack = () => {
    navigate(-1);
  };
  
  const handleFilterChange = (filters: string[]) => {
    setActiveFilters(filters);
  };

  const handleCertificateClick = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
  };

  const handleCloseModal = () => {
    setSelectedCertificate(null);
  };
  
  // Filter certificates based on active filters
  const filteredCertificates = activeFilters.length > 0 
    ? certificates.filter(cert => activeFilters.includes(cert.domain)) 
    : certificates;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-20 px-4 md:px-6 light-section dark:bg-gradient-to-b dark:from-analyst-darkgrey dark:to-analyst-black">
        <div className="max-w-7xl mx-auto">
          <Button 
            variant="outline" 
            className="mb-8 flex items-center gap-2 hover:bg-primary/10 hover:text-primary transition-all duration-300" 
            onClick={handleGoBack}
          >
            <ChevronLeft className="h-4 w-4" />
            Back
          </Button>

          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }} 
              className="text-3xl font-bold mb-4 text-gradient-primary dark:text-white"
            >
              Professional Certificates
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.5, delay: 0.2 }} 
              className="text-muted-foreground max-w-2xl mx-auto dark:text-white/80"
            >
              A collection of my professional certifications demonstrating expertise in various domains of data analysis, engineering, and cloud technologies.
            </motion.p>
          </div>
          
          <CertificateFilters onFilterChange={handleFilterChange} />
          <CertificateGrid certificates={filteredCertificates} onCertificateClick={handleCertificateClick} />
          
          {selectedCertificate && (
            <CertificateDetailModal
              certificate={selectedCertificate}
              isOpen={!!selectedCertificate}
              onClose={handleCloseModal}
            />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CertificatesPage;
