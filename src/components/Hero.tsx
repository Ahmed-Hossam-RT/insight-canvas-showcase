import React from 'react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ChartBar, ChartPie } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToWork = () => {
    const element = document.getElementById('work');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-20 px-4 md:px-6 flex flex-col items-center text-center bg-gradient-to-br from-white to-analyst-gray/30 dark:from-analyst-charcoal dark:to-analyst-sapphire">
      <div className="animate-fade-in max-w-4xl mx-auto">
        <div className="flex justify-center mb-8">
          <Avatar className="h-32 w-32">
            <AvatarImage 
              src="/placeholder.svg" 
              alt="Ahmed Hossam Profile Photo" 
              className="object-cover rounded-full"
            />
            <AvatarFallback className="bg-gradient-to-br from-analyst-sapphire to-analyst-cyan">
              <span className="text-white text-4xl font-bold">AH</span>
            </AvatarFallback>
          </Avatar>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-analyst-sapphire dark:text-white">
          <span>Hi, I'm </span>
          <span className="highlight-gradient">Ahmed Hossam</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium mb-6 text-analyst-sapphire/80 dark:text-analyst-gray">
          Data Analyst & Visualization Expert
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-analyst-sapphire/70 dark:text-analyst-gray">
          Transforming complex data into actionable insights. I specialize in data analysis, 
          visualization, and building predictive models to help businesses make data-driven decisions.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-analyst-orange to-analyst-burntorange hover:opacity-90 transition-opacity text-white"
            onClick={scrollToWork}
          >
            <ChartPie size={18} />
            View My Work
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-analyst-sapphire text-analyst-sapphire hover:bg-analyst-sapphire/10 dark:border-analyst-cyan dark:text-analyst-cyan dark:hover:bg-analyst-cyan/10"
          >
            <ChartBar size={18} />
            Download CV
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
