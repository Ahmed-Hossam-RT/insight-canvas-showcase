
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ChartBarBig, FileSpreadsheet, Database } from 'lucide-react';
import { motion } from 'framer-motion';

interface StatProps {
  icon: React.ReactNode;
  number: string;
  label: string;
  animate?: boolean;
}

const StatCard: React.FC<StatProps> = ({ icon, number, label, animate = true }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="border-none shadow-md stat-animation dark:bg-gradient-to-br dark:from-analyst-charcoal dark:to-analyst-sapphire hover:shadow-xl transition-all duration-300">
        <CardContent className="pt-6 flex flex-col items-center justify-center text-center p-6">
          <div className="mb-4">
            {icon}
          </div>
          <div className="text-3xl font-bold mb-1 text-analyst-sapphire dark:text-analyst-cyan">
            {number}
          </div>
          <div className="text-muted-foreground dark:text-analyst-gray">
            {label}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Stats: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-6 bg-gradient-to-br from-white to-analyst-gray/30 dark:from-analyst-charcoal dark:to-analyst-sapphire">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard 
            icon={<ChartBarBig className="h-10 w-10 text-analyst-cyan" />}
            number="50+"
            label="Data Analysis Projects"
          />
          <StatCard 
            icon={<FileSpreadsheet className="h-10 w-10 text-analyst-cyan" />}
            number="15M+"
            label="Data Points Analyzed"
          />
          <StatCard 
            icon={<Database className="h-10 w-10 text-analyst-cyan" />}
            number="8+"
            label="Years Experience"
          />
        </div>
      </div>
    </section>
  );
};

export default Stats;
