
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectGrid from '@/components/ProjectGrid';
import ProjectFilters from '@/components/ProjectFilters';
import { ProjectDetailModal } from '@/components/ProjectDetailModal';
import { ProjectType } from '@/types/project';

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
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-analyst-darkgrey to-analyst-black text-analyst-lightgrey">
      <Header />
      <main className="flex-grow px-4 md:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-3 text-analyst-orange">My Data Projects</h1>
          <p className="text-xl mb-8 text-analyst-lightgrey">
            Interactive dashboards and insights from my analytics work
          </p>
          
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
