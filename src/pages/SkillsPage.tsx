
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const SkillsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-20 px-4 md:px-6 bg-gradient-to-b from-analyst-darkgrey to-analyst-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">Skills Overview</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Core competencies and areas of expertise in data analysis
            </p>
          </div>

          <div className="space-y-6">
            {[
              { name: "Data Analysis", level: 95 },
              { name: "SQL", level: 90 },
              { name: "Python", level: 85 },
              { name: "R Programming", level: 80 },
            ].map((skill, index) => (
              <Card key={index} className="bg-gradient-to-br from-analyst-darkgrey to-analyst-black border-analyst-orange/20">
                <CardContent className="pt-6">
                  <div className="space-y-1.5">
                    <div className="flex justify-between">
                      <span className="font-medium text-white">{skill.name}</span>
                      <span className="text-sm text-white/80">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SkillsPage;
