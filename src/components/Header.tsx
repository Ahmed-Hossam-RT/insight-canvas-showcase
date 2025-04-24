
import React from 'react';
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

const Header: React.FC = () => {
  return (
    <header className="py-6 px-4 md:px-6 flex items-center justify-between w-full max-w-7xl mx-auto">
      <div className="flex items-center space-x-2">
        <div className="h-8 w-8 bg-analyst-teal dark:bg-analyst-darkteal rounded-md flex items-center justify-center">
          <span className="text-white font-bold text-lg">A</span>
        </div>
        <span className="font-bold text-xl">Ahmed Hossam</span>
      </div>
      <nav className="hidden md:flex items-center space-x-8">
        <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
        <a href="#projects" className="text-foreground hover:text-primary transition-colors">Projects</a>
        <a href="#skills" className="text-foreground hover:text-primary transition-colors">Skills</a>
        <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
        <ThemeToggle />
      </nav>
      <div className="flex items-center gap-2 md:hidden">
        <ThemeToggle />
        <Button variant="outline">Menu</Button>
      </div>
    </header>
  );
};

export default Header;
