
import React from 'react';
import ContentSection from './ContentSection';
import { Button } from "@/components/ui/button";
import { DownloadCloud } from 'lucide-react';
import { Link } from 'react-router-dom';

const projectsData = [
  {
    id: "1",
    title: "Marketing Analytics Dashboard",
    type: "data" as const,
    content: "Interactive dashboard showing key marketing metrics and ROI analysis",
    date: "2024-04-20"
  },
  {
    id: "2",
    title: "Customer Segmentation Report",
    type: "document" as const,
    content: "Detailed analysis of customer segments based on behavior patterns",
    date: "2024-04-15"
  },
  {
    id: "3",
    title: "Sales Performance Visualization",
    type: "image" as const,
    content: "Visual representation of quarterly sales performance across regions",
    date: "2024-04-10"
  }
];

const Projects: React.FC = () => {
  return (
    <div className="bg-background light-section dark:bg-analyst-darkgrey">
      <div className="max-w-7xl mx-auto">
        <ContentSection title="Featured Projects" items={projectsData} />
        <div className="flex justify-center pb-12">
          <Button 
            className="bg-gradient-to-r from-analyst-blue to-analyst-navy hover:opacity-90 transition-opacity text-white shadow-md"
            asChild
          >
            <Link to="/projects">
              <DownloadCloud className="mr-2 h-4 w-4" />
              View All Projects
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
