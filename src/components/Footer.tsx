
import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return <footer className="py-12 px-4 md:px-6 bg-gradient-to-b from-analyst-lightblue/10 to-analyst-gray/20 dark:from-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-gradient-to-br from-primary to-accent rounded-md flex items-center justify-center overflow-hidden">
                <img 
                  src="/lovable-uploads/c132ba01-a3d0-428f-b28c-b79c0dd048e7.png" 
                  alt="Ahmed Hossam" 
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="font-bold text-xl">Ahmed Hossam</span>
            </div>
            <p className="text-muted-foreground mt-2 max-w-md">Transforming complex data into actionable insights </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 sm:gap-16">
            <div>
              <h3 className="font-medium mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://www.linkedin.com/in/ahmed-hosam05" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
                    <Linkedin className="h-5 w-5 group-hover:text-primary transition-colors duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Ahmed-Hossam-RT/Portfolio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
                    <Github className="h-5 w-5 group-hover:text-primary transition-colors duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">GitHub</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@ahmedhossam.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
                    
                    
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/#about" className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block transition-transform duration-300">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/#projects" className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block transition-transform duration-300">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="/skills" className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block transition-transform duration-300">
                    Skills
                  </Link>
                </li>
                <li>
                  <Link to="/certificates" className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block transition-transform duration-300">
                    Certificates
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ahmed Hossam Portfolio. All rights reserved.
        </div>
      </div>
    </footer>;
};
export default Footer;
