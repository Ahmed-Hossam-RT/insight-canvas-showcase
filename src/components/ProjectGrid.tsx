
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { FileImage, FileText, Database } from 'lucide-react';
import { ProjectType } from '@/types/project';
import { toast } from '@/hooks/use-toast';

const projectsData: ProjectType[] = [
  {
    id: "1",
    title: "HR Analytics Dashboard",
    description: "Comprehensive HR dashboard tracking employee metrics, performance and attrition trends",
    type: "data",
    thumbnail: "/placeholder.svg",
    date: "2024-04-15",
    category: ["Power BI", "HR Analytics", "Employee Data"],
    content: "Developed a comprehensive HR analytics dashboard for Atlas Labs to monitor employee metrics, track performance, and analyze attrition trends. The dashboard provides actionable insights to optimize workforce management and improve employee satisfaction.",
    insights: [
      "Tracked 1,470 total employees, with 1,233 active and 237 inactive employees, highlighting a 16.1% attrition rate",
      "Visualized hiring trends across departments like Technology, Sales, and Human Resources to identify growth areas",
      "Monitored employee satisfaction levels (1–5 scale) with yearly trends from 2019–2022",
      "Identified attrition drivers by correlating satisfaction scores with departmental turnover"
    ],
    dashboardUrl: "https://medmansedu-my.sharepoint.com/:u:/g/personal/hossamrefaat_std_mans_edu_eg/EbMSk8MIRy9Bo-yPb1n_-BIBf-PTI2zTwyo-tb24x3k-Lg?e=36N31V"
  },
  {
    id: "2",
    title: "Competitor Analysis Dashboard",
    description: "Strategic analysis of market positions, performance metrics and revenue drivers",
    type: "data",
    thumbnail: "/placeholder.svg",
    date: "2024-04-10",
    category: ["Power BI", "Market Analysis", "Competitive Intelligence"],
    content: "Created a comprehensive competitor analysis dashboard tracking revenue performance, market share, and product performance across different regions and time periods. The dashboard enables strategic decision-making based on competitive positioning and market trends.",
    insights: [
      "Achieved 57.79% growth in key product categories, highlighting successful sales strategies",
      "Identified 94.7K high-value transactions, emphasizing customer purchasing trends",
      "Sintec market share of 19.6%, generating most revenue in USA and Japan",
      "Revenue growth rate of 21% from 2020 to 2021",
      "Top Products: Upsumu UC-S4 and Mushuru UA+80 drove the highest revenue increases"
    ],
    dashboardUrl: "https://medmansedu-my.sharepoint.com/:u:/g/personal/hossamrefaat_std_mans_edu_eg/ERafQzm_zGlHuPIx6KLZANcBfrk1y0UMONUB397xn1_hsg?e=LDdjGh"
  }
];

const getIcon = (type: string) => {
  switch (type) {
    case 'image':
      return <FileImage className="w-6 h-6 text-analyst-orange" />;
    case 'document':
      return <FileText className="w-6 h-6 text-analyst-burntorange" />;
    case 'data':
      return <Database className="w-6 h-6 text-analyst-orange" />;
    default:
      return null;
  }
};

interface ProjectGridProps {
  activeFilters: string[];
  onProjectClick: (project: ProjectType) => void;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ activeFilters, onProjectClick }) => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  
  const filteredProjects = activeFilters.length 
    ? projectsData.filter(project => 
        project.category.some(category => activeFilters.includes(category))
      )
    : projectsData;

  const handleImageError = (projectId: string) => {
    setImageErrors(prev => ({ ...prev, [projectId]: true }));
    toast({
      title: "Image loading issue",
      description: "Could not load project thumbnail. Using placeholder instead.",
      variant: "destructive",
    });
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      }
    })
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      {filteredProjects.map((project, index) => (
        <motion.div
          key={project.id}
          custom={index}
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          onClick={() => onProjectClick(project)}
          whileHover={{ scale: 1.02 }}
          className="cursor-pointer"
        >
          <Card className="h-full hover:border-analyst-orange transition-colors duration-300 dark:bg-analyst-darkgrey border-analyst-lightgrey dark:border-analyst-black">
            <div className="h-40 bg-gray-200 dark:bg-gray-700 rounded-t-lg overflow-hidden">
              <img 
                src={imageErrors[project.id] ? "/placeholder.svg" : project.thumbnail} 
                alt={project.title}
                className="w-full h-full object-cover"
                onError={() => handleImageError(project.id)}
              />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-3">
                {getIcon(project.type)}
                <h3 className="font-semibold text-analyst-black dark:text-analyst-lightgrey">
                  {project.title}
                </h3>
              </div>
              <p className="text-sm text-analyst-darkgrey dark:text-analyst-lightgrey mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.category.map(category => (
                  <span 
                    key={`${project.id}-${category}`}
                    className="text-xs px-2 py-1 bg-analyst-orange/20 text-analyst-orange rounded"
                  >
                    {category}
                  </span>
                ))}
              </div>
              <span className="text-xs text-analyst-darkgrey/70 dark:text-analyst-lightgrey/70">
                {project.date}
              </span>
            </CardContent>
          </Card>
        </motion.div>
      ))}
      {filteredProjects.length === 0 && (
        <div className="col-span-2 text-center py-10">
          <Database className="h-12 w-12 mx-auto mb-4 text-analyst-orange/40" />
          <p className="text-analyst-darkgrey/70 dark:text-analyst-lightgrey/70">No projects match your selected filters</p>
        </div>
      )}
    </div>
  );
};

export default ProjectGrid;
