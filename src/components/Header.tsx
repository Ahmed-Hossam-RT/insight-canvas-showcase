import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Linkedin } from 'lucide-react';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('');

  // Update active section based on URL hash or pathname
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      setActiveSection(hash.substring(1)); // Remove # from the hash
    } else if (location.pathname !== '/') {
      setActiveSection(location.pathname.substring(1)); // Remove / from the pathname
    } else {
      setActiveSection('about'); // Default to about on homepage with no hash
    }
  }, [location]);
  const isActive = (section: string) => {
    // Handle both hash-based and path-based sections
    if (section.startsWith('#')) {
      return activeSection === section.substring(1);
    } else {
      return activeSection === section.substring(1) || location.pathname === section;
    }
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <header className="sticky top-0 z-50 py-4 px-4 md:px-6 flex items-center justify-between w-full max-w-7xl mx-auto backdrop-blur-md bg-background/80 border-b border-border">
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
              <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${isActive('#about') ? 'bg-primary/10 text-primary' : ''}`}>
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/#projects">
              <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${isActive('#projects') ? 'bg-primary/10 text-primary' : ''}`}>
                Projects
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/#work">
              <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${isActive('#work') ? 'bg-primary/10 text-primary' : ''}`}>
                Work
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/skills">
              <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${isActive('/skills') ? 'bg-primary/10 text-primary' : ''}`}>
                Skills
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/#contact">
              <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${isActive('#contact') ? 'bg-primary/10 text-primary' : ''}`}>
                Contact
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            
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
              <Link to="/#about" className={`text-foreground hover:text-primary transition-colors py-2 border-b border-border ${isActive('#about') ? 'text-primary font-medium' : ''}`}>About</Link>
              <Link to="/#projects" className={`text-foreground hover:text-primary transition-colors py-2 border-b border-border ${isActive('#projects') ? 'text-primary font-medium' : ''}`}>Projects</Link>
              <Link to="/#work" className={`text-foreground hover:text-primary transition-colors py-2 border-b border-border ${isActive('#work') ? 'text-primary font-medium' : ''}`}>Work</Link>
              <Link to="/skills" className={`text-foreground hover:text-primary transition-colors py-2 border-b border-border ${isActive('/skills') ? 'text-primary font-medium' : ''}`}>Skills</Link>
              <Link to="/#contact" className={`text-foreground hover:text-primary transition-colors py-2 border-b border-border ${isActive('#contact') ? 'text-primary font-medium' : ''}`}>Contact</Link>
              <a href="https://www.linkedin.com/in/ahmed-hossam-913b19121" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors py-2 flex items-center gap-2">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </nav>
          </PopoverContent>
        </Popover>
      </div>
    </header>;
};
export default Header;