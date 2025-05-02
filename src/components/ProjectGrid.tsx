
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { FileImage, FileText, Database } from 'lucide-react';
import { ProjectType } from '@/types/project';

const projectsData: ProjectType[] = [
  {
    id: "1",
    title: "Marketing Analytics Dashboard",
    description: "Interactive Power BI dashboard showing key marketing metrics and ROI analysis",
    type: "data",
    thumbnail: "/placeholder.svg",
    date: "2024-04-20",
    category: ["Power BI", "Marketing", "Analytics"],
    content: "This Power BI dashboard provides a comprehensive overview of our marketing campaigns, including ROI metrics, conversion rates, and customer acquisition costs.",
    insights: [
      "Social media campaigns outperformed email by 37% in Q2",
      "Customer acquisition cost decreased by 24% after website optimization",
      "Mobile traffic converts 18% better on the new landing page design"
    ],
    dashboardUrl: "https://app.powerbi.com/view?r=example-marketing"
  },
  {
    id: "2",
    title: "Customer Segmentation Analysis",
    description: "Detailed Power BI report with customer segments based on behavior patterns",
    type: "data",
    thumbnail: "/placeholder.svg",
    date: "2024-04-15",
    category: ["Power BI", "Customer Analysis", "Research"],
    content: "This Power BI report segments our customer base into distinct groups based on purchasing behavior, demographics, and engagement metrics.",
    insights: [
      "High-value customers make up only 6% of the base but generate 43% of revenue",
      "Loyalty program members spend 2.3x more than non-members",
      "First-time purchase rate increased after UX improvements"
    ],
    dashboardUrl: "https://app.powerbi.com/view?r=example-customer"
  },
  {
    id: "3",
    title: "Sales Performance Visualization",
    description: "Regional sales performance Power BI dashboard with interactive filters",
    type: "data",
    thumbnail: "/placeholder.svg",
    date: "2024-04-10",
    category: ["Power BI", "Sales", "Visualization"],
    content: "This interactive Power BI dashboard shows regional sales performance with year-over-year comparisons and trend analysis.",
    insights: [
      "Western region showed 27% YoY growth, outperforming all other regions",
      "Product line A experienced consistent growth across all markets",
      "Seasonal patterns indicate optimal timing for new product launches"
    ],
    dashboardUrl: "https://app.powerbi.com/view?r=example-sales"
  },
  {
    id: "4",
    title: "Financial Forecast Dashboard",
    description: "Power BI models for quarterly financial planning and forecasting",
    type: "data",
    thumbnail: "/placeholder.svg",
    date: "2024-04-05",
    category: ["Power BI", "Finance", "Analytics"],
    content: "This Power BI forecasting model helps predict revenue streams and expense patterns for improved financial planning.",
    insights: [
      "The model predicted Q1 revenue within 3.5% accuracy",
      "Seasonal factors account for 23% of variance in our sales cycles",
      "Cost optimization opportunities identified in operations and marketing"
    ],
    dashboardUrl: "https://app.powerbi.com/view?r=example-finance"
  },
  {
    id: "5",
    title: "Website Analytics Dashboard",
    description: "Comprehensive Power BI analysis of website traffic and conversion metrics",
    type: "data",
    thumbnail: "/placeholder.svg",
    date: "2024-03-28",
    category: ["Power BI", "Digital", "Analytics"],
    content: "This Power BI report analyzes user behavior across our digital properties, identifying optimization opportunities and tracking goal completion.",
    insights: [
      "Mobile conversion rate improved 42% after checkout optimization",
      "Average session duration increased by 1:45 minutes",
      "Top entry pages driving 68% of new visitor traffic"
    ],
    dashboardUrl: "https://app.powerbi.com/view?r=example-website"
  },
  {
    id: "6",
    title: "Supply Chain Optimization",
    description: "Power BI dashboard of supply chain efficiency metrics and KPIs",
    type: "data",
    thumbnail: "/placeholder.svg",
    date: "2024-03-20",
    category: ["Power BI", "Operations", "Logistics"],
    content: "This Power BI visualization tracks key metrics in our supply chain, from procurement to delivery, highlighting bottlenecks and optimization opportunities.",
    insights: [
      "Reduced lead times by 34% after process improvements",
      "Inventory turns increased from 6 to 8.5 annually",
      "Logistics costs as percentage of revenue decreased by 2.7%"
    ],
    dashboardUrl: "https://app.powerbi.com/view?r=example-supply"
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
  
  const filteredProjects = activeFilters.length 
    ? projectsData.filter(project => 
        project.category.some(category => activeFilters.includes(category))
      )
    : projectsData;

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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
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
                src={project.thumbnail} 
                alt={project.title}
                className="w-full h-full object-cover"
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
    </div>
  );
};

export default ProjectGrid;
