
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
        return <FileImage className="w-6 h-6 text-analyst-cyan" />;
      case 'document':
        return <FileText className="w-6 h-6 text-analyst-magenta" />;
      case 'data':
        return <Database className="w-6 h-6 text-analyst-sapphire" />;
      default:
        return null;
    }
  };

  return (
    <section className="py-12 px-4">
      <h2 className="text-2xl font-bold mb-6 text-analyst-sapphire dark:text-white">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <Card 
            key={item.id}
            className="hover:shadow-lg transition-shadow duration-300 dark:bg-analyst-charcoal"
          >
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                {getIcon(item.type)}
                <h3 className="font-semibold text-analyst-sapphire dark:text-analyst-gray">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {item.content}
              </p>
              <span className="text-xs text-gray-500 dark:text-gray-400">
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
