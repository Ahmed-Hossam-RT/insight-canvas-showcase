import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
const SkillsPage = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  const skillsData = [{
    name: "Data Analysis",
    description: "Advanced proficiency in extracting insights from complex datasets using statistical methods and predictive modeling."
  }, {
    name: "SQL",
    description: "Expertise in database querying, optimization, and complex data manipulation across various database management systems."
  }, {
    name: "Python",
    description: "Comprehensive skills in data science libraries like Pandas, NumPy, and machine learning frameworks such as scikit-learn and TensorFlow."
  }, {
    name: "R Programming",
    description: "Strong capabilities in statistical computing, data visualization, and advanced analytical techniques using R."
  }];
  return <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-20 px-4 md:px-6 bg-gradient-to-b from-white to-gray-100 dark:from-analyst-darkgrey dark:to-analyst-black">
        <div className="max-w-7xl mx-auto">
          <Button variant="outline" className="mb-8 flex items-center gap-2 text-primary hover:bg-primary/10 dark:text-white dark:hover:bg-white/10" onClick={handleGoBack}>
            <ChevronLeft className="h-4 w-4" />
            Back
          </Button>

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gradient-primary dark:text-white">Skills & Domain expertise</h2>
            <p className="text-gray-700 dark:text-white/80 max-w-2xl mx-auto">
              I specialize in transforming complex data into actionable insights, leveraging advanced analytical techniques and cutting-edge technologies to drive strategic decision-making across various domains.
            </p>
          </div>

          <div className="space-y-6">
            {skillsData.map((skill, index) => <Card key={index} className="bg-white shadow-md border border-gray-200 dark:bg-gradient-to-br dark:from-analyst-darkgrey dark:to-analyst-black dark:border-analyst-blue/20">
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <h3 className="font-medium text-gray-800 dark:text-white text-xl">{skill.name}</h3>
                    <p className="text-gray-600 dark:text-white/70">{skill.description}</p>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};
export default SkillsPage;