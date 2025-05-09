
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, FileText } from 'lucide-react';
import { Certificate } from '@/types/certificate';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

interface CertificateGridProps {
  certificates: Certificate[];
  onCertificateClick: (certificate: Certificate) => void;
}

const CertificateGrid: React.FC<CertificateGridProps> = ({ certificates, onCertificateClick }) => {
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const handleImageError = (certificateId: string, imageType: string) => {
    console.error(`Failed to load ${imageType} for certificate ID ${certificateId}`);
    setLoadedImages(prev => ({
      ...prev,
      [`${certificateId}-${imageType}`]: false
    }));
    
    // Only show toast for thumbnail failures since they're the main visible images
    if (imageType === 'thumbnail') {
      toast({
        title: "Image failed to load",
        description: "Using fallback display instead",
        variant: "destructive",
      });
    }
  };

  const handleImageLoad = (certificateId: string, imageType: string) => {
    setLoadedImages(prev => ({
      ...prev,
      [`${certificateId}-${imageType}`]: true
    }));
  };

  // Function to get placeholder image based on domain
  const getPlaceholderImage = (domain: string) => {
    switch(domain) {
      case 'Power BI':
        return 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&h=400';
      case 'SQL':
        return 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&h=400';
      case 'Python':
        return 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&h=400';
      case 'Data Analyst':
        return 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&h=400';
      default:
        return 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&h=400';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {certificates.map((certificate, index) => (
        <motion.div
          key={certificate.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.03 }}
          onClick={() => onCertificateClick(certificate)}
          className="cursor-pointer"
        >
          <Card className="overflow-hidden h-full light-card dark:border-analyst-orange/20 dark:bg-gradient-to-br dark:from-analyst-darkgrey dark:to-analyst-black">
            <div className="relative h-48 bg-gray-100 dark:bg-gray-700">
              {/* Certificate Image with Improved Error Handling */}
              <div className="absolute inset-0 flex items-center justify-center">
                {certificate.thumbnail ? (
                  <img 
                    src={certificate.thumbnail} 
                    alt={certificate.title}
                    className={`object-cover w-full h-full ${loadedImages[`${certificate.id}-thumbnail`] === false ? 'hidden' : ''}`}
                    onError={() => handleImageError(certificate.id, 'thumbnail')}
                    onLoad={() => handleImageLoad(certificate.id, 'thumbnail')}
                    loading="lazy"
                  />
                ) : null}
                
                {/* Show image fallback if thumbnail fails */}
                {(!certificate.thumbnail || loadedImages[`${certificate.id}-thumbnail`] === false) && certificate.image && (
                  <img 
                    src={certificate.image} 
                    alt={certificate.title}
                    className={`object-cover w-full h-full ${loadedImages[`${certificate.id}-image`] === false ? 'hidden' : ''}`}
                    onError={() => handleImageError(certificate.id, 'image')}
                    onLoad={() => handleImageLoad(certificate.id, 'image')}
                    loading="lazy"
                  />
                )}
                
                {/* Domain-based placeholder if both thumbnail and image fail */}
                {(!certificate.thumbnail || loadedImages[`${certificate.id}-thumbnail`] === false) && 
                 (!certificate.image || loadedImages[`${certificate.id}-image`] === false) && (
                  <div className="flex items-center justify-center w-full h-full relative overflow-hidden">
                    <img 
                      src={getPlaceholderImage(certificate.domain)}
                      alt="Domain placeholder"
                      className="object-cover w-full h-full opacity-30"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      {certificate.pdfPath ? (
                        <FileText className="h-16 w-16 text-primary dark:text-analyst-orange" />
                      ) : (
                        <Award className="h-16 w-16 text-primary dark:text-analyst-orange" />
                      )}
                      <span className="text-sm font-medium mt-2 text-center px-4">{certificate.domain} Certificate</span>
                    </div>
                  </div>
                )}
              </div>
              <div className="absolute top-2 right-2 bg-primary/90 dark:bg-analyst-orange/90 text-white text-xs font-medium py-1 px-2 rounded">
                {certificate.domain}
              </div>
            </div>
            
            <CardContent className="p-5 flex flex-col h-[calc(100%-12rem)]">
              <h3 className="text-lg font-semibold mb-2 text-foreground dark:text-white">{certificate.title}</h3>
              <p className="text-sm text-muted-foreground dark:text-white/70 mb-4">{certificate.description}</p>
              <div className="mt-auto">
                <span className="text-sm font-medium text-primary dark:text-analyst-orange">{certificate.issuer}</span>
              </div>
              {(certificate.credentialUrl || certificate.pdfPath) && (
                <div className="mt-4 flex space-x-2">
                  {certificate.credentialUrl && (
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="flex-1 justify-center text-primary hover:bg-primary/10 dark:text-white dark:hover:bg-white/10"
                      asChild
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent triggering the card click
                      }}
                    >
                      <a 
                        href={certificate.credentialUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <span>Credential</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  )}
                  {certificate.pdfPath && (
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="flex-1 justify-center text-primary hover:bg-primary/10 dark:text-white dark:hover:bg-white/10"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent triggering the card click
                        window.open(certificate.pdfPath, '_blank');
                      }}
                    >
                      <span>View PDF</span>
                      <FileText className="ml-1 h-3 w-3" />
                    </Button>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default CertificateGrid;
