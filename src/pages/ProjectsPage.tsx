
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectGrid from '@/components/ProjectGrid';
import ProjectFilters from '@/components/ProjectFilters';
import { ProjectDetailModal } from '@/components/ProjectDetailModal';
import { ProjectType } from '@/types/project';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const ProjectsPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const handleProjectClick = (project: ProjectType) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handleFilterChange = (filters: string[]) => {
    setActiveFilters(filters);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-100 dark:from-analyst-darkgrey dark:to-analyst-black">
      <Header />
      <main className="flex-grow px-4 md:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <Button 
            variant="outline" 
            asChild 
            className="mb-8 flex items-center gap-2 text-primary hover:bg-primary/10 dark:text-analyst-orange dark:hover:bg-analyst-orange/10"
          >
            <Link to="/">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-4 text-gradient-primary dark:text-white"
            >
              My Data Projects
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto dark:text-white/80"
            >
              Interactive dashboards and insights from my analytics work
            </motion.p>
          </div>
          
          <ProjectFilters onFilterChange={handleFilterChange} />
          
          <ProjectGrid activeFilters={activeFilters} onProjectClick={handleProjectClick} />
          
          {selectedProject && (
            <ProjectDetailModal 
              project={selectedProject} 
              isOpen={!!selectedProject} 
              onClose={handleCloseModal} 
            />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
