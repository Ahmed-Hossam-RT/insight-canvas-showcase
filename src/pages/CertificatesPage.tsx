
import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import CertificateFilters from '@/components/CertificateFilters';
import CertificateGrid from '@/components/CertificateGrid';
import { Certificate } from '@/types/certificate';

const CertificatesPage = () => {
  const navigate = useNavigate();
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleFilterChange = (filters: string[]) => {
    setActiveFilters(filters);
  };

  const certificates: Certificate[] = [
    {
      id: '1',
      title: 'Microsoft Certified: Power BI Data Analyst Associate',
      issuer: 'Microsoft',
      issueDate: 'June 2023',
      domain: 'Power BI',
      description: 'Certification validating skills in creating and maintaining Power BI dashboards, performing data analysis, and transforming data into actionable insights.',
      image: '/certificates/power-bi-cert.jpg'
    },
    {
      id: '2',
      title: 'Data Engineering on Google Cloud Platform',
      issuer: 'Google Cloud',
      issueDate: 'March 2023',
      domain: 'Data Engineer',
      description: 'Specialization in designing, building, and maintaining data processing systems with a focus on reliability, efficiency, and security.',
      image: '/certificates/gcp-data-engineering.jpg'
    },
    {
      id: '3',
      title: 'Advanced SQL for Data Analysis',
      issuer: 'DataCamp',
      issueDate: 'January 2023',
      domain: 'SQL',
      description: 'Advanced course covering complex SQL queries, optimization techniques, and data manipulation for analytical purposes.',
      image: '/certificates/sql-advanced.jpg'
    },
    {
      id: '4',
      title: 'AWS Certified Data Analytics - Specialty',
      issuer: 'Amazon Web Services',
      issueDate: 'November 2022',
      domain: 'Cloud',
      description: 'Validates technical expertise in designing and maintaining AWS data analytics solutions.',
      image: '/certificates/aws-analytics.jpg'
    },
    {
      id: '5',
      title: 'Data Analyst with Python',
      issuer: 'DataCamp',
      issueDate: 'October 2022',
      domain: 'Data Analyst',
      description: 'Comprehensive track covering Python libraries for data analysis including Pandas, NumPy, and Matplotlib.',
      image: '/certificates/python-analyst.jpg'
    },
    {
      id: '6',
      title: 'Machine Learning Fundamentals',
      issuer: 'Coursera',
      issueDate: 'August 2022',
      domain: 'Machine Learning',
      description: 'Introduction to machine learning algorithms, techniques, and practical applications in data science.',
      image: '/certificates/ml-fundamentals.jpg'
    }
  ];

  // Filter certificates based on active filters
  const filteredCertificates = activeFilters.length > 0
    ? certificates.filter(cert => activeFilters.includes(cert.domain))
    : certificates;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-20 px-4 md:px-6 bg-gradient-to-b from-analyst-darkgrey to-analyst-black">
        <div className="max-w-7xl mx-auto">
          <Button 
            variant="outline" 
            className="mb-8 flex items-center gap-2"
            onClick={handleGoBack}
          >
            <ChevronLeft className="h-4 w-4" />
            Back
          </Button>

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">Professional Certificates</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              A collection of my professional certifications demonstrating expertise in various domains of data analysis, engineering, and cloud technologies.
            </p>
          </div>
          
          <CertificateFilters onFilterChange={handleFilterChange} />
          <CertificateGrid certificates={filteredCertificates} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CertificatesPage;
