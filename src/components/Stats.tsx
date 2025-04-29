
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Award, SlidersHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const StatCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  to: string;
  delay?: number;
}> = ({ icon, title, to, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        type: "spring",
        stiffness: 300,
        delay: delay
      }}
    >
      <Link to={to}>
        <motion.div
          whileHover={{ 
            scale: 1.05,
            rotate: 1,
            transition: { type: "spring", stiffness: 400, damping: 10 }
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-primary/80 via-accent to-secondary/90 hover:from-accent hover:via-primary/90 hover:to-accent/90 cursor-pointer overflow-hidden dark:from-primary/80 dark:via-accent dark:to-secondary/90 dark:hover:from-accent dark:hover:via-primary/90 dark:hover:to-accent/90">
            <CardContent className="pt-6 flex flex-col items-center justify-center text-center p-6 min-h-[200px] relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <motion.div 
                className="mb-4 text-white relative z-10"
                whileHover={{ rotate: [0, -10, 10, -10, 0], transition: { duration: 0.5 } }}
              >
                {icon}
              </motion.div>
              <div className="text-xl font-bold text-white relative z-10 group-hover:text-white/90 transition-colors">
                <motion.span
                  initial={{ backgroundPosition: "0% 50%" }}
                  whileHover={{ backgroundPosition: "100% 50%" }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="bg-clip-text bg-gradient-to-r from-white to-white/80"
                >
                  {title}
                </motion.span>
              </div>
              <motion.div
                initial={{ width: "0%" }}
                whileHover={{ width: "80%" }}
                transition={{ duration: 0.3 }}
                className="h-0.5 bg-white/50 mt-2 mx-auto rounded-full"
              />
            </CardContent>
          </Card>
        </motion.div>
      </Link>
    </motion.div>
  );
};

const Stats: React.FC = () => {
  return (
    <section id="work" className="py-16 px-4 md:px-6 bg-gradient-to-br from-secondary/10 to-secondary/20 dark:from-secondary/80 dark:to-secondary/90">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 text-gradient-primary">Explore My Work</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Dive deeper into my projects, certifications, and technical skills</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard 
            icon={<Briefcase className="h-10 w-10" />}
            title="Projects"
            to="/projects"
            delay={0.1}
          />
          <StatCard 
            icon={<Award className="h-10 w-10" />}
            title="Certificates"
            to="/certificates"
            delay={0.2}
          />
          <StatCard 
            icon={<SlidersHorizontal className="h-10 w-10" />}
            title="Skills"
            to="/skills"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

export default Stats;
