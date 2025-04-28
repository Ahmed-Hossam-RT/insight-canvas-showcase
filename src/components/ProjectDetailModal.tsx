
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectType } from '@/types/project';
import { ExternalLink, ChevronLeft, Database, FileText, FileImage } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectDetailModalProps {
  project: ProjectType;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ 
  project, 
  isOpen, 
  onClose 
}) => {
  const [activeTab, setActiveTab] = useState<string>("dashboard");
  
  const getIcon = (type: string) => {
    switch (type) {
      case 'image':
        return <FileImage className="h-6 w-6 text-analyst-orange" />;
      case 'document':
        return <FileText className="h-6 w-6 text-analyst-burntorange" />;
      case 'data':
      default:
        return <Database className="h-6 w-6 text-analyst-orange" />;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%] max-h-[90vh] overflow-y-auto bg-gradient-to-br from-white/95 to-white/90 dark:from-analyst-darkgrey dark:to-analyst-darkgrey/95 border-none shadow-xl">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={onClose}
              className="h-8 w-8 text-analyst-darkgrey dark:text-analyst-lightgrey hover:text-analyst-orange hover:scale-110 transition-all duration-300"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2"
            >
              {getIcon(project.type)}
              <DialogTitle className="text-2xl text-gradient-primary font-bold">
                {project.title}
              </DialogTitle>
            </motion.div>
          </div>
          <DialogDescription className="text-analyst-darkgrey/70 dark:text-analyst-lightgrey/70 font-medium">
            {project.date} • {project.category.join(", ")}
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="dashboard" value={activeTab} onValueChange={setActiveTab} className="mt-4">
          <TabsList className="grid grid-cols-2 mb-6 bg-gradient-to-r from-primary/10 to-accent/10 p-1">
            <TabsTrigger 
              value="dashboard" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-white transition-all duration-300"
            >
              <Database className="mr-2 h-4 w-4" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger 
              value="insights"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-white transition-all duration-300"
            >
              Key Insights
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="dashboard" className="space-y-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="aspect-video bg-gradient-to-br from-gray-100/30 to-gray-200/30 dark:from-gray-800/30 dark:to-gray-700/30 rounded-md overflow-hidden relative group"
            >
              {project.dashboardUrl ? (
                <div className="relative w-full h-full">
                  <iframe
                    src={project.dashboardUrl}
                    className="w-full h-full rounded-md"
                    title={`${project.title} Dashboard`}
                    frameBorder="0"
                    allowFullScreen
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white w-full">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <p className="text-sm text-white/90">{project.description}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center p-12 relative h-full">
                  <Database className="h-16 w-16 mx-auto mb-4 text-analyst-orange/40" />
                  <p className="text-analyst-darkgrey dark:text-analyst-lightgrey/70">
                    Interactive dashboard preview not available
                  </p>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white w-full">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <p className="text-sm text-white/90">{project.description}</p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-analyst-darkgrey dark:text-analyst-lightgrey leading-relaxed">
                {project.content}
              </p>
            </motion.div>
          </TabsContent>
          
          <TabsContent value="insights" className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-analyst-lightgrey/10 to-analyst-lightgrey/5 dark:from-analyst-darkgrey/80 dark:to-analyst-darkgrey/60 p-6 rounded-md border border-analyst-lightgrey/20 dark:border-analyst-lightgrey/10"
            >
              <h3 className="text-xl mb-4 font-medium text-gradient-primary">
                Key Takeaways
              </h3>
              <ul className="space-y-4">
                {project.insights.map((insight, index) => (
                  <motion.li 
                    key={index} 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start gap-3 text-analyst-darkgrey dark:text-analyst-lightgrey group"
                  >
                    <span className="text-analyst-orange mt-1 text-lg group-hover:scale-125 transition-transform duration-300">•</span>
                    <span className="group-hover:text-primary transition-colors duration-300">{insight}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </TabsContent>
        </Tabs>

        <DialogFooter className="mt-6">
          {project.dashboardUrl && (
            <Button 
              className="bg-gradient-to-r from-analyst-orange to-analyst-burntorange hover:from-analyst-burntorange hover:to-analyst-orange text-white transition-all duration-300 hover:shadow-lg hover:shadow-analyst-orange/20" 
              asChild
            >
              <a href={project.dashboardUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Open Full Dashboard
              </a>
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
