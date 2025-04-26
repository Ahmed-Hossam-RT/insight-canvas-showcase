import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Award, SlidersHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const StatCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  to: string;
}> = ({ icon, title, to }) => {
  return (
    <Link to={to}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-analyst-orange to-analyst-darkgrey hover:from-analyst-burntorange hover:to-analyst-black cursor-pointer">
          <CardContent className="pt-6 flex flex-col items-center justify-center text-center p-6 min-h-[200px]">
            <div className="mb-4 text-white">
              {icon}
            </div>
            <div className="text-xl font-bold text-white">
              {title}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
};

const Stats: React.FC = () => {
  return (
    <section id="work" className="py-16 px-4 md:px-6 bg-gradient-to-br from-analyst-black to-analyst-darkgrey">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard 
            icon={<Briefcase className="h-10 w-10" />}
            title="Projects"
            to="/projects"
          />
          <StatCard 
            icon={<Award className="h-10 w-10" />}
            title="Certificates"
            to="/certificates"
          />
          <StatCard 
            icon={<SlidersHorizontal className="h-10 w-10" />}
            title="Skills"
            to="/skills"
          />
        </div>
      </div>
    </section>
  );
};

export default Stats;
