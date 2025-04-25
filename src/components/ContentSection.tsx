
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { FileImage, FileText, Database } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  type: 'image' | 'document' | 'data';
  content: string;
  date: string;
}

interface ContentSectionProps {
  title: string;
  items: ContentItem[];
}

const ContentSection: React.FC<ContentSectionProps> = ({ title, items }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'image':
        return <FileImage className="w-6 h-6 text-analyst-orange" />;
      case 'document':
        return <FileText className="w-6 h-6 text-analyst-burntorange" />;
      case 'data':
        return <Database className="w-6 h-6 text-analyst-orange" />;
      default:
        return null;
    }
  };

  return (
    <section className="py-12 px-4">
      <h2 className="text-2xl font-bold mb-6 text-analyst-black dark:text-analyst-lightgrey">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <Card 
            key={item.id}
            className="hover:shadow-lg transition-shadow duration-300 dark:bg-analyst-darkgrey border-analyst-lightgrey dark:border-analyst-black"
          >
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                {getIcon(item.type)}
                <h3 className="font-semibold text-analyst-black dark:text-analyst-lightgrey">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm text-analyst-darkgrey dark:text-analyst-lightgrey mb-4">
                {item.content}
              </p>
              <span className="text-xs text-analyst-darkgrey/70 dark:text-analyst-lightgrey/70">
                {item.date}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ContentSection;
