
import React, { useState } from 'react';
import { ChevronLeft, Upload, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import CertificateFilters from '@/components/CertificateFilters';
import CertificateGrid from '@/components/CertificateGrid';
import { Certificate } from '@/types/certificate';
import { motion } from 'framer-motion';
import { CertificateDetailModal } from '@/components/CertificateDetailModal';

const CertificatesPage = () => {
  const navigate = useNavigate();
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  
  const handleGoBack = () => {
    navigate(-1);
  };
  
  const handleFilterChange = (filters: string[]) => {
    setActiveFilters(filters);
  };

  const handleCertificateClick = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
  };

  const handleCloseModal = () => {
    setSelectedCertificate(null);
  };
  
  const certificates: Certificate[] = [
    {
      id: '1',
      title: 'Microsoft Certified: Power BI Data Analyst Associate',
      issuer: 'Microsoft',
      issueDate: 'June 2023',
      domain: 'Power BI',
      description: 'Certification validating skills in creating and maintaining Power BI dashboards, performing data analysis, and transforming data into actionable insights.',
      image: '/certificates/images/power-bi-cert.jpg',
      thumbnail: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=400&auto=format',
      credentialUrl: 'https://www.credly.com/badges/microsoft-certified-power-bi-data-analyst'
    }, 
    {
      id: '2',
      title: 'Data Engineering on Google Cloud Platform',
      issuer: 'Google Cloud',
      issueDate: 'March 2023',
      domain: 'Data Engineer',
      description: 'Specialization in designing, building, and maintaining data processing systems with a focus on reliability, efficiency, and security.',
      image: '/certificates/images/gcp-data-engineering.jpg',
      thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=400&auto=format',
      credentialUrl: 'https://www.coursera.org/account/accomplishments/specialization/data-engineering-gcp'
    }, 
    {
      id: '3',
      title: 'Advanced SQL for Data Analysis',
      issuer: 'DataCamp',
      issueDate: 'January 2023',
      domain: 'SQL',
      description: 'Advanced course covering complex SQL queries, optimization techniques, and data manipulation for analytical purposes.',
      image: '/certificates/images/sql-advanced.jpg',
      thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=400&auto=format',
      credentialUrl: 'https://www.datacamp.com/certificate/SQL-advanced',
      pdfPath: '/Certificates/PDF/Data manipulation in SQL.pdf'
    }, 
    {
      id: '4',
      title: 'AWS Certified Data Analytics - Specialty',
      issuer: 'Amazon Web Services',
      issueDate: 'November 2022',
      domain: 'Cloud',
      description: 'Validates technical expertise in designing and maintaining AWS data analytics solutions.',
      image: '/certificates/images/aws-analytics.jpg',
      thumbnail: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=400&auto=format',
      credentialUrl: 'https://www.credly.com/badges/aws-certified-data-analytics-specialty'
    }, 
    {
      id: '5',
      title: 'Data Analyst with Python',
      issuer: 'DataCamp',
      issueDate: 'October 2022',
      domain: 'Data Analyst',
      description: 'Comprehensive track covering Python libraries for data analysis including Pandas, NumPy, and Matplotlib.',
      image: '/certificates/images/python-analyst.jpg',
      thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=400&auto=format',
      credentialUrl: 'https://www.datacamp.com/certificate/data-analyst-with-python'
    },
    {
      id: '6',
      title: 'Machine Learning Fundamentals',
      issuer: 'Coursera',
      issueDate: 'August 2022',
      domain: 'Machine Learning',
      description: 'Introduction to machine learning algorithms, techniques, and practical applications in data science.',
      image: '/certificates/images/ml-fundamentals.jpg',
      thumbnail: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=400&auto=format',
      credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/ML-fundamentals'
    },
    {
      id: '7',
      title: 'Data Manipulation in SQL',
      issuer: 'DataCamp',
      issueDate: 'May 2022',
      domain: 'SQL',
      description: 'Comprehensive course on SQL data manipulation techniques, including joins, subqueries, and advanced filtering.',
      image: '/certificates/images/sql-manipulation.jpg',
      thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=400&auto=format',
      pdfPath: '/Certificates/PDF/Data manipulation in SQL.pdf'
    },
    {
      id: '8',
      title: 'Data-Driven Decision Making in SQL',
      issuer: 'DataCamp',
      issueDate: 'April 2022',
      domain: 'SQL',
      description: 'Course focused on using SQL for data analysis and making informed business decisions based on database insights.',
      image: '/certificates/images/sql-decision-making.jpg',
      thumbnail: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=400&auto=format',
      pdfPath: '/Certificates/PDF/Data-Driven Decision Making in SQL.pdf'
    },
    {
      id: '9',
      title: 'Exploratory Data Analysis in SQL',
      issuer: 'DataCamp',
      issueDate: 'March 2022',
      domain: 'SQL',
      description: 'Course covering techniques for exploring and extracting insights from data using SQL queries and analysis.',
      image: '/certificates/images/sql-exploratory.jpg',
      thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=400&auto=format',
      pdfPath: '/Certificates/PDF/Exploratory Data Analysis in SQL.pdf'
    },
    {
      id: '10',
      title: 'Functions for Manipulating Data in PostgreSQL',
      issuer: 'DataCamp',
      issueDate: 'February 2022',
      domain: 'SQL',
      description: 'Specialized course on PostgreSQL functions and techniques for advanced data manipulation and analysis.',
      image: '/certificates/images/postgresql-functions.jpg',
      thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=400&auto=format',
      pdfPath: '/Certificates/PDF/Functions for Manipulating Data in POSTGRE SQL.pdf'
    },
    {
      id: '11',
      title: 'PostgreSQL Summary Stats and Window Functions',
      issuer: 'DataCamp',
      issueDate: 'January 2022',
      domain: 'SQL',
      description: 'In-depth course on PostgreSQL window functions and statistical analysis methods for data aggregation.',
      image: '/certificates/images/postgresql-window.jpg',
      thumbnail: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=400&auto=format',
      pdfPath: '/Certificates/PDF/PostgreSQL Summary Stats and Window Functions.pdf'
    },
    {
      id: '12',
      title: 'Joining Data in SQL',
      issuer: 'DataCamp',
      issueDate: 'December 2021',
      domain: 'SQL',
      description: 'Comprehensive course on SQL join operations, including inner, outer, cross joins, and union operations.',
      image: '/certificates/images/sql-joining.jpg',
      thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=400&auto=format',
      pdfPath: '/Certificates/PDF/joining data in SQL.pdf'
    },
    {
      id: '13',
      title: 'Associate Data Analyst in SQL',
      issuer: 'DataCamp',
      issueDate: 'November 2021',
      domain: 'SQL',
      description: 'Professional certification validating SQL skills for data analysis roles and database query optimization.',
      image: '/certificates/images/sql-associate.jpg',
      thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=400&auto=format',
      pdfPath: '/Certificates/PDF/associate data analyst in SQL.pdf'
    }
  ];

  // Filter certificates based on active filters
  const filteredCertificates = activeFilters.length > 0 ? certificates.filter(cert => activeFilters.includes(cert.domain)) : certificates;
  
  return <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-20 px-4 md:px-6 light-section dark:bg-gradient-to-b dark:from-analyst-darkgrey dark:to-analyst-black">
        <div className="max-w-7xl mx-auto">
          <Button variant="outline" className="mb-8 flex items-center gap-2 hover:bg-primary/10 hover:text-primary transition-all duration-300" onClick={handleGoBack}>
            <ChevronLeft className="h-4 w-4" />
            Back
          </Button>

          <div className="text-center mb-16">
            <motion.h2 initial={{
            opacity: 0,
            y: -20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} className="text-3xl font-bold mb-4 text-gradient-primary dark:text-white">
              Professional Certificates
            </motion.h2>
            <motion.p initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} className="text-muted-foreground max-w-2xl mx-auto dark:text-white/80">
              A collection of my professional certifications demonstrating expertise in various domains of data analysis, engineering, and cloud technologies.
            </motion.p>
          </div>
          
          <CertificateFilters onFilterChange={handleFilterChange} />
          <CertificateGrid certificates={filteredCertificates} onCertificateClick={handleCertificateClick} />
          
          {selectedCertificate && (
            <CertificateDetailModal
              certificate={selectedCertificate}
              isOpen={!!selectedCertificate}
              onClose={handleCloseModal}
            />
          )}
        </div>
      </main>
      <Footer />
    </div>;
};
export default CertificatesPage;
