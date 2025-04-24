
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChartPie, ChartBar, BarChart } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: "E-commerce Sales Analysis",
    description: "Analyzed 3 years of sales data to identify trends and opportunities, resulting in a 15% increase in conversion rates.",
    icon: <ChartBar className="h-8 w-8 text-analyst-teal" />,
    skills: ["Python", "Pandas", "Tableau", "SQL"],
    gradient: "from-blue-50 to-cyan-50"
  },
  {
    id: 2,
    title: "Customer Segmentation",
    description: "Developed a customer segmentation model using clustering algorithms to target marketing campaigns more effectively.",
    icon: <ChartPie className="h-8 w-8 text-analyst-teal" />,
    skills: ["R", "K-means", "PowerBI", "Statistical Analysis"],
    gradient: "from-purple-50 to-blue-50"
  },
  {
    id: 3,
    title: "Predictive Sales Forecasting",
    description: "Created time-series forecasting models that predicted quarterly sales with 92% accuracy.",
    icon: <BarChart className="h-8 w-8 text-analyst-teal" />,
    skills: ["Python", "Scikit-learn", "Time Series", "Visualization"],
    gradient: "from-teal-50 to-green-50"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent data analysis and visualization projects that demonstrate
            my technical skills and business impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="gap-2">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
    skills: string[];
    gradient: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className={`border project-card bg-gradient-to-br ${project.gradient}`}>
      <CardHeader>
        <div className="mb-2">{project.icon}</div>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription className="text-foreground/70">{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {project.skills.map((skill, index) => (
            <Badge key={index} variant="secondary">{skill}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" size="sm">View Details</Button>
      </CardFooter>
    </Card>
  );
};

export default Projects;
