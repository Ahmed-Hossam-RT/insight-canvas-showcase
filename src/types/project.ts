
export type ProjectType = {
  id: string;
  title: string;
  description: string;
  type: 'data' | 'document' | 'image';
  thumbnail: string;
  date: string;
  category: string[];
  content: string;
  insights: string[];
  dashboardUrl?: string;
};
