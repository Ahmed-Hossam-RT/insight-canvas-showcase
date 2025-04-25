
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
import { ExternalLink, ChevronLeft, Database } from 'lucide-react';

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

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%] max-h-[90vh] overflow-y-auto bg-white dark:bg-analyst-darkgrey border-none">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={onClose}
              className="h-8 w-8 text-analyst-darkgrey dark:text-analyst-lightgrey hover:text-analyst-orange"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <DialogTitle className="text-2xl text-analyst-darkgrey dark:text-analyst-orange">
              {project.title}
            </DialogTitle>
          </div>
          <DialogDescription className="text-analyst-darkgrey/70 dark:text-analyst-lightgrey/70">
            {project.date} • {project.category.join(", ")}
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="dashboard" value={activeTab} onValueChange={setActiveTab} className="mt-4">
          <TabsList className="grid grid-cols-2 mb-6">
            <TabsTrigger value="dashboard" className="text-analyst-darkgrey dark:text-analyst-lightgrey data-[state=active]:text-analyst-orange data-[state=active]:shadow-[inset_0_-2px_0_0] data-[state=active]:shadow-current">
              <Database className="mr-2 h-4 w-4" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="insights" className="text-analyst-darkgrey dark:text-analyst-lightgrey data-[state=active]:text-analyst-orange data-[state=active]:shadow-[inset_0_-2px_0_0] data-[state=active]:shadow-current">
              Key Insights
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="dashboard" className="space-y-4">
            <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center">
              {project.dashboardUrl ? (
                <iframe
                  src={project.dashboardUrl}
                  className="w-full h-full rounded-md"
                  title={`${project.title} Dashboard`}
                  frameBorder="0"
                  allowFullScreen
                />
              ) : (
                <div className="text-center p-12">
                  <Database className="h-16 w-16 mx-auto mb-4 text-analyst-orange/40" />
                  <p className="text-analyst-darkgrey dark:text-analyst-lightgrey/70">
                    Interactive dashboard preview not available
                  </p>
                </div>
              )}
            </div>
            <p className="text-analyst-darkgrey dark:text-analyst-lightgrey">
              {project.content}
            </p>
          </TabsContent>
          
          <TabsContent value="insights" className="space-y-4">
            <div className="bg-analyst-lightgrey/10 p-6 rounded-md">
              <h3 className="text-xl mb-4 font-medium text-analyst-darkgrey dark:text-analyst-orange">
                Key Takeaways
              </h3>
              <ul className="space-y-3">
                {project.insights.map((insight, index) => (
                  <li key={index} className="flex items-start gap-3 text-analyst-darkgrey dark:text-analyst-lightgrey">
                    <span className="text-analyst-orange mt-1 text-lg">•</span>
                    <span>{insight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
        </Tabs>

        <DialogFooter className="mt-6">
          {project.dashboardUrl && (
            <Button className="bg-analyst-orange hover:bg-analyst-burntorange text-white" asChild>
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
