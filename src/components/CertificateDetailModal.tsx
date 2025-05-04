
import React from 'react';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Certificate } from "@/types/certificate";
import { Download, ExternalLink, FileText, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface CertificateDetailModalProps {
  certificate: Certificate;
  isOpen: boolean;
  onClose: () => void;
}

export function CertificateDetailModal({
  certificate,
  isOpen,
  onClose,
}: CertificateDetailModalProps) {
  const handleDownload = () => {
    if (certificate.pdfPath) {
      // Create a download link and trigger the download
      const link = document.createElement('a');
      link.href = certificate.pdfPath;
      link.download = `${certificate.title}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent className="max-w-4xl h-[80vh] flex flex-col dark:bg-analyst-darkgrey dark:border-analyst-orange/20">
        <AlertDialogHeader className="flex flex-row justify-between items-start">
          <div>
            <AlertDialogTitle className="text-2xl font-bold text-foreground dark:text-white">
              {certificate.title}
            </AlertDialogTitle>
            <AlertDialogDescription className="text-sm text-muted-foreground dark:text-white/70">
              <div className="flex items-center gap-2 mt-2">
                <Badge className="bg-primary dark:bg-analyst-orange">{certificate.domain}</Badge>
                <span className="text-sm text-muted-foreground dark:text-white/70">
                  {certificate.issuer} • {certificate.issueDate}
                </span>
              </div>
            </AlertDialogDescription>
          </div>
          <Button 
            size="icon" 
            variant="ghost" 
            className="text-muted-foreground hover:text-foreground dark:text-white/70 dark:hover:text-white"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </AlertDialogHeader>

        <div className="flex-grow overflow-auto my-4">
          {certificate.pdfPath ? (
            <iframe
              src={`${certificate.pdfPath}#view=FitH`}
              className="w-full h-full rounded-md border border-muted"
              title={certificate.title}
            />
          ) : certificate.image ? (
            <div className="flex justify-center items-center h-full">
              <img
                src={certificate.image}
                alt={certificate.title}
                className="max-h-full max-w-full object-contain rounded-md"
              />
            </div>
          ) : (
            <div className="flex items-center justify-center h-full bg-muted rounded-md">
              <FileText className="h-24 w-24 text-muted-foreground/30" />
              <p className="text-muted-foreground">No preview available</p>
            </div>
          )}
        </div>

        <p className="text-sm text-muted-foreground dark:text-white/80 my-4">
          {certificate.description}
        </p>

        <AlertDialogFooter className="flex sm:justify-between gap-2">
          <div className="flex gap-2">
            {certificate.pdfPath && (
              <Button 
                variant="outline" 
                onClick={handleDownload}
                className="flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                Download PDF
              </Button>
            )}
          </div>
          
          <div>
            {certificate.credentialUrl && (
              <Button asChild className="ml-auto">
                <a 
                  href={certificate.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <span>Verify Credential</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
