
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award } from 'lucide-react';
import { Certificate } from '@/types/certificate';
import { Card, CardContent } from "@/components/ui/card";

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
          <Card className="overflow-hidden border-analyst-orange/20 bg-gradient-to-br from-analyst-darkgrey to-analyst-black h-full">
            <div className="relative h-48 bg-gray-700">
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
                    <Award className="h-16 w-16 text-analyst-orange/30" />
                  </div>
                )}
              </div>
              <div className="absolute top-2 right-2 bg-analyst-orange/90 text-white text-xs font-medium py-1 px-2 rounded">
                {certificate.domain}
              </div>
            </div>
            
            <CardContent className="p-5 flex flex-col h-[calc(100%-12rem)]">
              <h3 className="text-lg font-semibold mb-2 text-white">{certificate.title}</h3>
              <p className="text-sm text-white/70 mb-4">{certificate.description}</p>
              <div className="mt-auto flex justify-between items-center">
                <span className="text-sm font-medium text-analyst-orange">{certificate.issuer}</span>
                <div className="flex items-center gap-1 text-xs text-white/60">
                  <Calendar className="h-3 w-3" />
                  <span>{certificate.issueDate}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default CertificateGrid;
