
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const skillsData = {
  technical: [
    { name: "Data Analysis", level: 95 },
    { name: "SQL", level: 90 },
    { name: "Python", level: 85 },
    { name: "R Programming", level: 80 },
    { name: "Tableau", level: 95 },
    { name: "Power BI", level: 90 },
    { name: "Excel/Google Sheets", level: 100 },
    { name: "Machine Learning", level: 75 },
  ],
  domain: [
    "Marketing Analytics",
    "Sales Forecasting",
    "Customer Behavior Analysis",
    "A/B Testing",
    "Data Cleaning & Preparation",
    "Statistical Analysis",
    "Dashboard Design",
    "Data Storytelling"
  ]
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-4 md:px-6 bg-gradient-to-b from-white to-analyst-lightblue">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My toolkit for transforming data into actionable insights and compelling visualizations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card>
            <CardHeader>
              <CardTitle>Technical Skills</CardTitle>
              <CardDescription>
                Tools, languages and technologies I use for data analysis
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {skillsData.technical.map((skill, index) => (
                <div key={index} className="space-y-1.5">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Domain Expertise</CardTitle>
              <CardDescription>
                Business areas and analytical approaches where I excel
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {skillsData.domain.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-analyst-teal"></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
