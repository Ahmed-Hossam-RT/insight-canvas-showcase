
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 md:px-6 bg-gradient-to-b from-analyst-lightblue to-analyst-gray">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-analyst-teal rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="font-bold text-xl">DataAnalyst</span>
            </div>
            <p className="text-muted-foreground mt-2 max-w-md">
              Transforming complex data into actionable insights and beautiful visualizations.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 sm:gap-16">
            <div>
              <h3 className="font-medium mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#linkedin" className="text-muted-foreground hover:text-foreground transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#github" className="text-muted-foreground hover:text-foreground transition-colors">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#twitter" className="text-muted-foreground hover:text-foreground transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#medium" className="text-muted-foreground hover:text-foreground transition-colors">
                    Medium
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Data Analyst Portfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
