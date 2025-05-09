import { Certificate } from '@/types/certificate';

export const certificates: Certificate[] = [
  // Power BI Certificates
  {
    id: '1',
    title: 'Power BI Analyst',
    issuer: '365 Data Science',
    issueDate: 'June 2023', // We'll keep the date in the data but not display it
    domain: 'Power BI',
    description: 'Certification validating skills in creating and maintaining Power BI dashboards, performing data analysis, and transforming data into actionable insights.',
    image: '/certificates/images/power-bi-cert.jpg',
    thumbnail: '/thumbnails/Power Bi/365 Power BI.jpg',
    credentialUrl: 'https://www.credly.com/badges/microsoft-certified-power-bi-data-analyst'
  },
  {
    id: '23',
    title: 'Introduction to Power BI',
    issuer: 'DataCamp',
    issueDate: 'January 2023',
    domain: 'Power BI',
    description: 'Fundamental course covering Power BI basics, interface navigation, and creating simple dashboards.',
    thumbnail: '/thumbnails/Power Bi/Introduction to Power BI-1.jpg',
    pdfPath: '/Certificates/Power bi/Introduction to Power BI.pdf'
  },
  {
    id: '24',
    title: 'Data Preparation in Power BI',
    issuer: 'DataCamp',
    issueDate: 'February 2023',
    domain: 'Power BI',
    description: 'Course on preparing, cleaning and transforming data before analysis in Power BI.',
    thumbnail: '/thumbnails/Power Bi/Data Preparation in Power BI-1.jpg',
    pdfPath: '/Certificates/Power bi/Data Preparation in Power BI.pdf'
  },
  {
    id: '25',
    title: 'Data Modeling in Power BI',
    issuer: 'DataCamp',
    issueDate: 'March 2023',
    domain: 'Power BI',
    description: 'In-depth training on creating effective data models and relationships in Power BI.',
    thumbnail: '/thumbnails/Power Bi/Data Modeling in Power BI-1.jpg',
    pdfPath: '/Certificates/Power bi/Data Modeling in Power BI.pdf'
  },
  {
    id: '26',
    title: 'Data Transformation in Power BI',
    issuer: 'DataCamp',
    issueDate: 'April 2023',
    domain: 'Power BI',
    description: 'Advanced techniques for transforming and reshaping data in Power BI using Power Query Editor.',
    thumbnail: '/thumbnails/Power Bi/Data Transformation in Power BI-1.jpg',
    pdfPath: '/Certificates/Power bi/Data Transformation in Power BI.pdf'
  },
  {
    id: '27',
    title: 'Data Connections in Power BI',
    issuer: 'DataCamp',
    issueDate: 'May 2023',
    domain: 'Power BI',
    description: 'Course covering various data source connections and integration methods in Power BI.',
    thumbnail: '/thumbnails/Power Bi/Data Connections in Power BI-1.jpg',
    pdfPath: '/Certificates/Power bi/Data Connections in Power BI.pdf'
  },
  {
    id: '28',
    title: 'Data Visualization in Power BI',
    issuer: 'DataCamp',
    issueDate: 'June 2023',
    domain: 'Power BI',
    description: 'Comprehensive course on creating effective and interactive data visualizations in Power BI.',
    thumbnail: '/thumbnails/Power Bi/Data Visualization in Power BI-1.jpg',
    pdfPath: '/Certificates/Power bi/Data Visualization in Power BI.pdf'
  },
  {
    id: '29',
    title: 'Introduction to DAX in Power BI',
    issuer: 'DataCamp',
    issueDate: 'July 2023',
    domain: 'Power BI',
    description: 'Foundation course on Data Analysis Expressions (DAX) for calculations and metrics in Power BI.',
    thumbnail: '/thumbnails/Power Bi/Introduction to DAX in Power BI-1.jpg',
    pdfPath: '/Certificates/Power bi/Introduction to DAX in Power BI.pdf'
  },
  {
    id: '30',
    title: 'Intermediate DAX in Power BI',
    issuer: 'DataCamp',
    issueDate: 'August 2023',
    domain: 'Power BI',
    description: 'Advanced DAX functions and techniques for complex calculations and business rules in Power BI.',
    thumbnail: '/thumbnails/Power Bi/Intermediate DAX in Power BI-1.jpg',
    pdfPath: '/Certificates/Power bi/Intermediate DAX in Power BI.pdf'
  },
  {
    id: '31',
    title: 'DAX Functions in Power BI',
    issuer: 'DataCamp',
    issueDate: 'September 2023',
    domain: 'Power BI',
    description: 'Specialized course on utilizing built-in DAX functions for sophisticated data analysis in Power BI.',
    thumbnail: '/thumbnails/Power Bi/DAX Functions in Power BI-1.jpg',
    pdfPath: '/Certificates/Power bi/DAX Functions in Power BI.pdf'
  },
  {
    id: '32',
    title: 'Intermediate Data Modeling in Power BI',
    issuer: 'DataCamp',
    issueDate: 'October 2023',
    domain: 'Power BI',
    description: 'Advanced modeling techniques including many-to-many relationships and role-playing dimensions in Power BI.',
    thumbnail: '/thumbnails/Power Bi/Intermediate Data Modeling in Power BI-1.jpg',
    pdfPath: '/Certificates/Power bi/Intermediate Data Modeling in Power BI.pdf'
  },
  {
    id: '33',
    title: 'Reports in Power BI',
    issuer: 'DataCamp',
    issueDate: 'November 2023',
    domain: 'Power BI',
    description: 'Comprehensive training on building effective reports with filters, bookmarks, and navigation in Power BI.',
    thumbnail: '/thumbnails/Power Bi/Reports in Power BI-1.jpg',
    pdfPath: '/Certificates/Power bi/Reports in Power BI.pdf'
  },
  {
    id: '34',
    title: 'Report Design in Power BI',
    issuer: 'DataCamp',
    issueDate: 'December 2023',
    domain: 'Power BI',
    description: 'Course focusing on design principles, layouts, and accessibility for professional Power BI reports.',
    thumbnail: '/thumbnails/Power Bi/Report Design in Power BI-1.jpg',
    pdfPath: '/Certificates/Power bi/Report Design in Power BI.pdf'
  },
  {
    id: '35',
    title: 'Trend Analysis in Power BI',
    issuer: 'DataCamp',
    issueDate: 'January 2024',
    domain: 'Power BI',
    description: 'Specialized course on time series analysis, forecasting, and trend visualization in Power BI.',
    thumbnail: '/thumbnails/Power Bi/Trend Analysis in Power BI-1.jpg',
    pdfPath: '/Certificates/Power bi/Trend Analysis in Power BI.pdf'
  },
  {
    id: '36',
    title: 'Exploratory Data Analysis in Power BI',
    issuer: 'DataCamp',
    issueDate: 'February 2024',
    domain: 'Power BI',
    description: 'Techniques for exploring datasets, identifying patterns, and extracting insights using Power BI tools.',
    thumbnail: '/thumbnails/Power Bi/Exploratory Data Analysis in Power BI-1.jpg',
    pdfPath: '/Certificates/Power bi/Exploratory Data Analysis in Power BI.pdf'
  },
  {
    id: '37',
    title: 'Deploying and Maintaining Assets in Power BI',
    issuer: 'DataCamp',
    issueDate: 'March 2024',
    domain: 'Power BI',
    description: 'Best practices for deploying, sharing, and maintaining Power BI dashboards and reports in production environments.',
    thumbnail: '/thumbnails/Power Bi/Deploying and Maintaining Assets in Power BI-1.jpg',
    pdfPath: '/Certificates/Power bi/Deploying and Maintaining Assets in Power BI.pdf'
  },
  
  // SQL Certificates
  {
    id: '3',
    title: 'Advanced SQL for Data Analysis',
    issuer: 'DataCamp',
    issueDate: 'January 2023',
    domain: 'SQL',
    description: 'Advanced course covering complex SQL queries, optimization techniques, and data manipulation for analytical purposes.',
    thumbnail: '/thumbnails/SQL/Advanced-SQL-for-Data-Analysis.jpg',
    pdfPath: '/Certificates/PDF/Data manipulation in SQL.pdf'
  },
  {
    id: '7',
    title: 'Data Manipulation in SQL',
    issuer: 'DataCamp',
    issueDate: 'May 2022',
    domain: 'SQL',
    description: 'Comprehensive course on SQL data manipulation techniques, including joins, subqueries, and advanced filtering.',
    thumbnail: '/thumbnails/SQL/Data manipulation in SQL.jpg',
    pdfPath: '/Certificates/PDF/Data manipulation in SQL.pdf'
  },
  {
    id: '8',
    title: 'Data-Driven Decision Making in SQL',
    issuer: 'DataCamp',
    issueDate: 'April 2022',
    domain: 'SQL',
    description: 'Course focused on using SQL for data analysis and making informed business decisions based on database insights.',
    thumbnail: '/thumbnails/SQL/Data-Driven Decision Making in SQL.pdf.jpg',
    pdfPath: '/Certificates/PDF/Data-Driven Decision Making in SQL.pdf'
  },
  {
    id: '9',
    title: 'Exploratory Data Analysis in SQL',
    issuer: 'DataCamp',
    issueDate: 'March 2022',
    domain: 'SQL',
    description: 'Course covering techniques for exploring and extracting insights from data using SQL queries and analysis.',
    thumbnail: '/thumbnails/SQL/Exploratory-Data-Analysis-in-SQL.jpg',
    pdfPath: '/Certificates/PDF/Exploratory Data Analysis in SQL.pdf'
  },
  {
    id: '10',
    title: 'Functions for Manipulating Data in PostgreSQL',
    issuer: 'DataCamp',
    issueDate: 'February 2022',
    domain: 'SQL',
    description: 'Specialized course on PostgreSQL functions and techniques for advanced data manipulation and analysis.',
    thumbnail: '/thumbnails/SQL/Functions-for-Manipulating-Data-in-PostgreSQL.jpg',
    pdfPath: '/Certificates/PDF/Functions for Manipulating Data in POSTGRE SQL.pdf'
  },
  {
    id: '11',
    title: 'PostgreSQL Summary Stats and Window Functions',
    issuer: 'DataCamp',
    issueDate: 'January 2022',
    domain: 'SQL',
    description: 'In-depth course on PostgreSQL window functions and statistical analysis methods for data aggregation.',
    thumbnail: '/thumbnails/SQL/PostgreSQL-Summary-Stats-and-Window-Functions.jpg',
    pdfPath: '/Certificates/PDF/PostgreSQL Summary Stats and Window Functions.pdf'
  },
  {
    id: '12',
    title: 'Joining Data in SQL',
    issuer: 'DataCamp',
    issueDate: 'December 2021',
    domain: 'SQL',
    description: 'Comprehensive course on SQL join operations, including inner, outer, cross joins, and union operations.',
    thumbnail: '/thumbnails/SQL/joining-data-in-SQL.jpg',
    pdfPath: '/Certificates/PDF/joining data in SQL.pdf'
  },
  {
    id: '13',
    title: 'Associate Data Analyst in SQL',
    issuer: 'DataCamp',
    issueDate: 'November 2021',
    domain: 'SQL',
    description: 'Professional certification validating SQL skills for data analysis roles and database query optimization.',
    thumbnail: '/thumbnails/SQL/associate-data-analyst-in-SQL.jpg',
    pdfPath: '/Certificates/PDF/associate data analyst in SQL.pdf'
  },
  {
    id: '38',
    title: 'Data Communication Concepts',
    issuer: 'DataCamp',
    issueDate: 'October 2021',
    domain: 'SQL',
    description: 'Course covering fundamentals of data communication and effective presentation of SQL analysis results.',
    thumbnail: '/thumbnails/SQL/Data Communication Concepts.jpg',
    pdfPath: '/Certificates/PDF/Data Communication Concepts.pdf'
  },
  {
    id: '39',
    title: 'Understanding Data Visualization',
    issuer: 'DataCamp',
    issueDate: 'September 2021',
    domain: 'SQL',
    description: 'Course focused on creating effective data visualizations from SQL query results for better insights.',
    thumbnail: '/thumbnails/SQL/Understanding Data Visualization.jpg',
    pdfPath: '/Certificates/PDF/Understanding Data Visualization.pdf'
  },
  {
    id: '40',
    title: 'Reporting in SQL',
    issuer: 'DataCamp',
    issueDate: 'August 2021',
    domain: 'SQL',
    description: 'Comprehensive course on creating reports and dashboards using SQL for business intelligence.',
    thumbnail: '/thumbnails/SQL/Reporting in SQL.pdf.png',
    pdfPath: '/Certificates/PDF/Reporting in SQL.pdf'
  },
  
  // Data Engineer Certificates
  {
    id: '2',
    title: 'Data Engineering on Google Cloud Platform',
    issuer: 'Google Cloud',
    issueDate: 'March 2023',
    domain: 'Data Engineer',
    description: 'Specialization in designing, building, and maintaining data processing systems with a focus on reliability, efficiency, and security.',
    image: '/certificates/images/gcp-data-engineering.jpg',
    thumbnail: '/thumbnails/GOOGLE CERT.jpg',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/specialization/data-engineering-gcp'
  },
  
  // Google Data Analyst Certificate
  {
    id: '41',
    title: 'Google Data Analytics Professional Certificate',
    issuer: 'Google',
    issueDate: 'May 2023',
    domain: 'Data Analyst',
    description: 'Comprehensive Google certification covering data analysis, preparation, processing, visualization, and R programming.',
    thumbnail: '/thumbnails/GOOGLE CERT.jpg',
    pdfPath: '/Certificates/GOOGLE CERT.pdf'
  },
  
  // Cloud Certificates
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
  
  // Data Analyst Certificates
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
  
  // Machine Learning Certificates
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
  
  // Python Certificates
  {
    id: '14',
    title: 'Data Analyst in Python',
    issuer: 'DataCamp',
    issueDate: 'July 2022',
    domain: 'Python',
    description: 'Complete career track covering Python fundamentals, data manipulation, and analysis for professional data analyst roles.',
    thumbnail: '/thumbnails/Python/Data analyst in python.jpg',
    pdfPath: '/Certificates/python/Data analyst in python.pdf'
  },
  {
    id: '15',
    title: 'Introduction to Python',
    issuer: 'DataCamp',
    issueDate: 'June 2022',
    domain: 'Python',
    description: 'Fundamental course covering Python syntax, data types, functions, and basic programming concepts.',
    thumbnail: '/thumbnails/Python/introduction to python.jpg',
    pdfPath: '/Certificates/python/introduction to python.pdf'
  },
  {
    id: '16',
    title: 'Data Manipulation with pandas',
    issuer: 'DataCamp',
    issueDate: 'August 2022',
    domain: 'Python',
    description: 'Comprehensive course on using pandas library for data manipulation, cleaning, and preparation in Python.',
    thumbnail: '/thumbnails/Python/Data Manipulation with pandas.jpg',
    pdfPath: '/Certificates/python/Data Manipulation with pandas.pdf'
  },
  {
    id: '17',
    title: 'Joining Data with pandas',
    issuer: 'DataCamp',
    issueDate: 'September 2022',
    domain: 'Python',
    description: 'Advanced techniques for combining and merging datasets using pandas, including various join operations.',
    thumbnail: '/thumbnails/Python/Joining Data with pandas.jpg',
    pdfPath: '/Certificates/python/Joining Data with pandas.pdf'
  },
  {
    id: '18',
    title: 'Introduction to Data Visualization with Matplotlib',
    issuer: 'DataCamp',
    issueDate: 'October 2022',
    domain: 'Python',
    description: 'Foundation course on creating effective data visualizations in Python using the Matplotlib library.',
    thumbnail: '/thumbnails/Python/Introduction to Data Visualization with.jpg',
    pdfPath: '/Certificates/python/Introduction to Data Visualization with.pdf'
  },
  {
    id: '19',
    title: 'Exploratory Data Analysis in Python',
    issuer: 'DataCamp',
    issueDate: 'November 2022',
    domain: 'Python',
    description: 'Techniques for exploring datasets, detecting patterns, and extracting insights using Python statistical tools.',
    thumbnail: '/thumbnails/Python/Exploratory Data Analysis in Python.jpg',
    pdfPath: '/Certificates/python/Exploratory Data Analysis in Python.pdf'
  },
  {
    id: '20',
    title: 'Introduction to Statistics in Python',
    issuer: 'DataCamp',
    issueDate: 'December 2022',
    domain: 'Python',
    description: 'Course covering fundamental statistical concepts and their implementation using Python libraries.',
    thumbnail: '/thumbnails/Python/Introduction to Statistics in Python.jpg',
    pdfPath: '/Certificates/python/Introduction to Statistics in Python.pdf'
  },
  {
    id: '21',
    title: 'Hypothesis Testing in Python',
    issuer: 'DataCamp',
    issueDate: 'January 2023',
    domain: 'Python',
    description: 'Advanced course on statistical hypothesis testing methods and implementations in Python.',
    thumbnail: '/thumbnails/Python/Hypothesis Testing in Python.jpg',
    pdfPath: '/Certificates/python/Hypothesis Testing in Python.pdf'
  },
  {
    id: '22',
    title: 'Sampling in Python',
    issuer: 'DataCamp',
    issueDate: 'February 2023',
    domain: 'Python',
    description: 'Specialized course on sampling techniques and methodologies for data analysis in Python.',
    thumbnail: '/thumbnails/Python/Sampling in Python.jpg',
    pdfPath: '/Certificates/python/Sampling in Python.pdf'
  }
];
