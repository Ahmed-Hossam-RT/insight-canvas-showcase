
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 py-4 px-4 md:px-6 flex items-center justify-between w-full max-w-7xl mx-auto backdrop-blur-md bg-background/80 border-b border-border">
      <div className="flex items-center space-x-2">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="h-8 w-8 bg-gradient-to-br from-primary to-accent rounded-md flex items-center justify-center transition-transform group-hover:scale-110 duration-300">
            <span className="text-white font-bold text-lg">A</span>
          </div>
          <span className="font-bold text-xl group-hover:text-primary transition-colors duration-300">Ahmed Hossam</span>
        </Link>
      </div>
      
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to="/#about">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/#projects">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Projects
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/#work">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Work
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/#skills">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Skills
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/#contact">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contact
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <a 
              href="https://www.linkedin.com/in/ahmed-hossam-285b86241" 
              target="_blank" 
              rel="noopener noreferrer"
              className={navigationMenuTriggerStyle() + " hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white transition-colors duration-300"}
            >
              LinkedIn
            </a>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <Popover>
          <PopoverTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon" onClick={toggleMenu} className="relative">
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-screen p-4 mr-6 mt-2 border-t-0 rounded-t-none">
            <nav className="flex flex-col space-y-4">
              <Link to="/#about" className="text-foreground hover:text-primary transition-colors py-2 border-b border-border">About</Link>
              <Link to="/#projects" className="text-foreground hover:text-primary transition-colors py-2 border-b border-border">Projects</Link>
              <Link to="/#work" className="text-foreground hover:text-primary transition-colors py-2 border-b border-border">Work</Link>
              <Link to="/#skills" className="text-foreground hover:text-primary transition-colors py-2 border-b border-border">Skills</Link>
              <Link to="/#contact" className="text-foreground hover:text-primary transition-colors py-2 border-b border-border">Contact</Link>
              <a 
                href="https://www.linkedin.com/in/ahmed-hossam-285b86241" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors py-2"
              >
                LinkedIn
              </a>
            </nav>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
};

export default Header;
