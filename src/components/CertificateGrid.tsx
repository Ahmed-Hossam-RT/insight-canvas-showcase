
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award, ExternalLink } from 'lucide-react';
import { Certificate } from '@/types/certificate';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CertificateGridProps {
  certificates: Certificate[];
}

const CertificateGrid: React.FC<CertificateGridProps> = ({ certificates }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {certificates.map((certificate, index) => (
        <motion.div
          key={certificate.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.03 }}
        >
          <Card className="overflow-hidden h-full light-card dark:border-analyst-orange/20 dark:bg-gradient-to-br dark:from-analyst-darkgrey dark:to-analyst-black">
            <div className="relative h-48 bg-gray-100 dark:bg-gray-700">
              <div className="absolute inset-0 flex items-center justify-center">
                {certificate.image ? (
                  <img 
                    src={certificate.image} 
                    alt={certificate.title}
                    className="object-cover w-full h-full"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.svg";
                    }}
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full">
                    <Award className="h-16 w-16 text-primary/30 dark:text-analyst-orange/30" />
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
              <div className="mt-auto flex justify-between items-center">
                <span className="text-sm font-medium text-primary dark:text-analyst-orange">{certificate.issuer}</span>
                <div className="flex items-center gap-1 text-xs text-muted-foreground dark:text-white/60">
                  <Calendar className="h-3 w-3" />
                  <span>{certificate.issueDate}</span>
                </div>
              </div>
              {certificate.credentialUrl && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="mt-4 w-full justify-center text-primary hover:bg-primary/10 dark:text-white dark:hover:bg-white/10"
                  asChild
                >
                  <a 
                    href={certificate.credentialUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <span>View Credential</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </Button>
              )}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default CertificateGrid;
