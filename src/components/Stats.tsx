
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ChartBarBig, FileSpreadsheet, Database } from 'lucide-react';

const Stats: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-6 bg-gradient-to-br from-analyst-lightblue to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard 
            icon={<ChartBarBig className="h-10 w-10 text-analyst-teal" />}
            number="50+"
            label="Data Analysis Projects"
          />
          <StatCard 
            icon={<FileSpreadsheet className="h-10 w-10 text-analyst-teal" />}
            number="15M+"
            label="Data Points Analyzed"
          />
          <StatCard 
            icon={<Database className="h-10 w-10 text-analyst-teal" />}
            number="8+"
            label="Years Experience"
          />
        </div>
      </div>
    </section>
  );
};

interface StatCardProps {
  icon: React.ReactNode;
  number: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, number, label }) => {
  return (
    <Card className="border-none shadow-md stat-animation">
      <CardContent className="pt-6 flex flex-col items-center justify-center text-center p-6">
        <div className="mb-4">
          {icon}
        </div>
        <div className="text-3xl font-bold mb-1">{number}</div>
        <div className="text-muted-foreground">{label}</div>
      </CardContent>
    </Card>
  );
};

export default Stats;
