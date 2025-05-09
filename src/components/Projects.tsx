
import React from 'react';
import ContentSection from './ContentSection';
import { Button } from "@/components/ui/button";
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const projectsData = [
  {
    id: "1",
    title: "HR Analytics Dashboard",
    type: "data" as const,
    content: "Comprehensive HR dashboard tracking employee metrics, performance and attrition trends",
    date: "2024-04-15"
  },
  {
    id: "2",
    title: "Competitor Analysis Dashboard",
    type: "data" as const,
    content: "Strategic analysis of market positions, performance metrics and revenue drivers",
    date: "2024-04-10"
  }
];

const Projects: React.FC = () => {
  return (
    <div className="bg-background light-section dark:bg-analyst-darkgrey">
      <div className="max-w-7xl mx-auto">
        <ContentSection title="Featured Power BI Projects" items={projectsData} />
        <div className="flex justify-center pb-12">
          <Button 
            className="bg-gradient-to-r from-analyst-blue to-analyst-navy hover:opacity-90 transition-opacity text-white shadow-md"
            asChild
          >
            <Link to="/projects">
              <ExternalLink className="mr-2 h-4 w-4" />
              View All Projects
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
