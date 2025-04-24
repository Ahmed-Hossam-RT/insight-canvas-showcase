
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChartBar, ChartPie } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-6 flex flex-col items-center text-center">
      <div className="animate-fade-in max-w-4xl mx-auto">
        <div className="flex justify-center mb-8">
          <div className="h-32 w-32 rounded-full bg-gradient-to-br from-analyst-blue to-analyst-teal flex items-center justify-center">
            <span className="text-white text-4xl font-bold">JD</span>
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          <span>Hi, I'm </span>
          <span className="highlight-gradient">Jane Doe</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium mb-6 text-muted-foreground">
          Data Analyst & Visualization Expert
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-muted-foreground">
          Transforming complex data into actionable insights. I specialize in data analysis, 
          visualization, and building predictive models to help businesses make data-driven decisions.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" className="gap-2">
            <ChartPie size={18} />
            View My Work
          </Button>
          <Button size="lg" variant="outline" className="gap-2">
            <ChartBar size={18} />
            Download CV
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
