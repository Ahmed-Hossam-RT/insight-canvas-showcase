
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { BookOpen, ChartBar, Database, Code } from "lucide-react";

const Skills: React.FC = () => {
  const domainExpertise = [
    {
      title: "Data Analysis",
      description: "Proficiency in extracting insights from complex datasets using statistical methods and visualization tools",
      icon: <ChartBar className="h-5 w-5 text-primary" />,
      areas: ["Statistical Analysis", "Data Visualization", "Predictive Modeling", "Trend Identification"]
    },
    {
      title: "Database Management",
      description: "Experience with various database systems, data modeling, and optimization techniques",
      icon: <Database className="h-5 w-5 text-primary" />,
      areas: ["SQL Optimization", "Database Design", "ETL Processes", "Data Warehousing"]
    },
    {
      title: "Programming & Automation",
      description: "Strong coding skills with focus on data processing and automation workflows",
      icon: <Code className="h-5 w-5 text-primary" />,
      areas: ["Python", "R", "Data Processing", "Workflow Automation"]
    },
    {
      title: "Business Intelligence",
      description: "Converting raw data into actionable business insights and strategic recommendations",
      icon: <BookOpen className="h-5 w-5 text-primary" />,
      areas: ["KPI Development", "Executive Reporting", "Decision Support", "Market Analysis"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 md:px-6 bg-gradient-to-b from-white to-gray-100 text-foreground dark:from-analyst-darkgrey dark:to-analyst-black dark:text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-foreground dark:text-white">Skills Overview</h2>
          <p className="text-muted-foreground dark:text-white/80 max-w-2xl mx-auto">
            Core competencies and areas of expertise in data analysis
          </p>
        </div>

        <div className="space-y-6 mb-16">
          {[
            { name: "Data Analysis", level: 95 },
            { name: "SQL", level: 90 },
            { name: "Python", level: 85 },
            { name: "R Programming", level: 80 },
          ].map((skill, index) => (
            <div key={index} className="space-y-1.5">
              <div className="flex justify-between">
                <span className="font-medium text-foreground dark:text-white">{skill.name}</span>
                <span className="text-sm text-muted-foreground dark:text-white/80">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </div>
          ))}
        </div>
        
        {/* Domain Expertise Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 text-center text-foreground dark:text-white">Domain Expertise</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {domainExpertise.map((domain, index) => (
              <Card key={index} className="hover-lift border border-border bg-card dark:bg-gradient-to-br dark:from-analyst-darkgrey dark:to-analyst-black dark:border-analyst-blue/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10 dark:bg-primary/20">
                      {domain.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-medium mb-2 text-foreground dark:text-white">{domain.title}</h4>
                      <p className="text-muted-foreground dark:text-white/80 mb-4">{domain.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {domain.areas.map((area, i) => (
                          <HoverCard key={i}>
                            <HoverCardTrigger asChild>
                              <Badge 
                                variant="outline" 
                                className="cursor-pointer border-primary/30 bg-primary/5 text-primary hover:bg-primary/10 transition-all dark:bg-primary/20 dark:text-white"
                              >
                                {area}
                              </Badge>
                            </HoverCardTrigger>
                            <HoverCardContent className="w-64 bg-card dark:bg-analyst-darkgrey dark:text-white">
                              <p className="text-sm">Specialized expertise in {area} techniques and applications.</p>
                            </HoverCardContent>
                          </HoverCard>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
