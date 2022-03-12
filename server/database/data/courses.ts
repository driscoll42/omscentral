import { PartialModelObject as PMO } from 'objection';

import { Course } from '../../src/models';

// https://omscs.gatech.edu/current-courses

export const courses: PMO<Course>[] = [
  {
    id: 'CS-6035',
    department: 'CS',
    number: '6035',
    name: 'Introduction to Information Security',
    aliases: ['IIS'],
    foundational: true,
    deprecated: false,
    link: 'https://omscs.gatech.edu/cs-6035-introduction-to-information-security',
  },
  {
    id: 'CS-6150',
    department: 'CS',
    number: '6150',
    name: 'Computing for Good',
    aliases: [],
    foundational: false,
    deprecated: false,
    link: 'https://omscs.gatech.edu/cs-6150-computing-good',
  },
  {
    id: 'CS-6200',
    department: 'CS',
    number: '6200',
    name: 'Introduction to Operating Systems',
    aliases: ['GIOS', 'IOS'],
    foundational: true,
    deprecated: false,
    link: 'https://omscs.gatech.edu/cs-6200-introduction-operating-systems',
  },
  {
    id: 'CS-6210',
    department: 'CS',
    number: '6210',
    name: 'Advanced Operating Systems',
    aliases: ['AOS'],
    foundational: true,
    deprecated: false,
    link: 'https://omscs.gatech.edu/cs-6210-advanced-operating-systems',
  },
  {
    id: 'CS-6238',
    department: 'CS',
    number: '6238',
    name: 'Secure Computer Systems',
    aliases: ['SCS'],
    foundational: true,
    deprecated: false,
    link: 'https://omscs.gatech.edu/cs-6238-secure-computer-systems',
  },
  {
    id: 'CS-6250',
    department: 'CS',
    number: '6250',
    name: 'Computer Networks',
    aliases: ['CN'],
    foundational: true,
    deprecated: false,
    link: 'https://omscs.gatech.edu/cs-6250-computer-networks',
  },
  {
    id: 'CS-6260',
    department: 'CS',
    number: '6260',
    name: 'Applied Cryptography',
    aliases: ['AC'],
    foundational: true,
    deprecated: false,
    link: 'https://omscs.gatech.edu/cs-6260-applied-cryptography',
  },
  {
    id: 'CS-6262',
    department: 'CS',
    number: '6262',
    name: 'Network Security',
    aliases: ['NS'],
    foundational: true,
    deprecated: false,
    link: 'https://omscs.gatech.edu/cs-6262-network-security',
  },
  {
    id: 'CS-6263',
    department: 'CS',
    number: '6263',
    name: 'Introduction to Cyber Physical Systems Security',
    aliases: ['CPSS'],
    foundational: true,
    deprecated: false,
    link: 'https://omscs.gatech.edu/cs-8803-special-topics-cyber-physical-systems',
  },
  {
    id: 'CS-6264',
    department: 'CS',
    number: '6264',
    name: 'Information Security Lab: System & Network Defenses',
    aliases: ['SND', 'ISND', 'ISLND'],
    foundational: true,
    deprecated: false,
    link: 'https://omscs.gatech.edu/cs-6264-information-security-lab-system-and-network-defenses',
  },
  {
    id: 'CS-6265',
    department: 'CS',
    number: '6265',
    name: 'Information Security Lab',
    aliases: ['ISL'],
    foundational: false,
    deprecated: false,
    link: 'https://omscs.gatech.edu/cs-6265-information-security-lab',
  },
  {
    id: 'CS-6266',
    department: 'CS',
    number: '6266',
    name: 'Information Security Practicum',
    aliases: [],
    foundational: false,
    deprecated: true,
  },
  {
    id: 'CS-6290',
    department: 'CS',
    number: '6290',
    name: 'High Performance Computer Architecture',
    aliases: ['HPCA'],
    foundational: true,
    deprecated: false,
    link: 'https://omscs.gatech.edu/cs-6290-high-performance-computer-architecture',
  },
  {
    id: 'CS-6291',
    department: 'CS',
    number: '6291',
    name: 'Embedded Systems Optimization',
    aliases: ['ESO'],
    foundational: true,
    deprecated: false,
    link: 'https://omscs.gatech.edu/cs-6291-embedded-systems-optimization',
  },
  {
    id: 'CS-6300',
    department: 'CS',
    number: '6300',
    name: 'Software Development Process',
    aliases: ['SDP'],
    foundational: true,
    deprecated: false,
    link: 'https://omscs.gatech.edu/cs-6300-software-development-process',
  },
  {
    id: 'CS-6310',
    department: 'CS',
    number: '6310',
    name: 'Software Architecture & Design',
    aliases: ['SAD'],
    foundational: true,
    deprecated: false,
    link: 'https://omscs.gatech.edu/cs-6310-software-architecture-design',
  },
  {
    id: 'CS-6340',
    department: 'CS',
    number: '6340',
    name: 'Software Analysis',
    aliases: ['SA'],
    foundational: true,
    deprecated: false,
    link: 'https://omscs.gatech.edu/cs-6340-software-analysis',
  },
  {
    id: 'CS-6400',
    department: 'CS',
    number: '6400',
    name: 'Database Systems Concepts & Design',
    aliases: ['DBS', 'DBSD'],
    foundational: true,
    deprecated: false,
    link: 'https://omscs.gatech.edu/cs-6400-database-systems-concepts-and-design',
  },
  {
    id: 'CS-6440',
    department: 'CS',
    number: '6440',
    name: 'Introduction to Health Informatics',
    aliases: ['IHI'],
    foundational: true,
    deprecated: false,
    link: 'https://omscs.gatech.edu/cs-6440-intro-health-informatics',
  },
  {
    id: 'CS-6457',
    department: 'CS',
    number: '6457',
    name: 'Video Game Design',
    aliases: ['VGD'],
    foundational: false,
    deprecated: false,
    link: 'https://omscs.gatech.edu/cs-6457-video-game-design',
  },
  {
    id: 'CS-6460',
    department: 'CS',
    number: '6460',
    name: 'Educational Technology',
    aliases: ['EdTech'],
    foundational: true,
    deprecated: false,
    link: 'https://omscs.gatech.edu/cs-6460-educational-technology',
  },
  {
    id: 'CS-6465',
    department: 'CS',
    number: '6465',
    name: 'Computational Journalism',
    aliases: [],
    foundational: false,
    deprecated: true,
  },
  {
    id: 'CS-6475',
    department: 'CS',
    number: '6475',
    name: 'Computational Photography',
    aliases: ['CP'],
    foundational: true,
    deprecated: false,
    link: 'https://omscs.gatech.edu/cs-6475-computational-photography',
  },
  {
    id: 'CS-6476',
    department: 'CS',
    number: '6476',
    name: 'Computer Vision',
    aliases: ['CV'],
    foundational: true,
    deprecated: false,
    link: 'https://omscs.gatech.edu/cs-6476-computer-vision',
  },
  {
    id: 'CS-6515',
    department: 'CS',
    number: '6515',
    name: 'Introduction to Graduate Algorithms',
    aliases: ['GA'],
    foundational: true,
    deprecated: false,
    link: 'https://omscs.gatech.edu/cs-6515-intro-graduate-algorithms',
  },
  {
    id: 'CS-6601',
    department: 'CS',
    number: '6601',
    name: 'Artificial Intelligence',
    aliases: ['AI'],
    foundational: true,
    deprecated: false,
    link: 'https://omscs.gatech.edu/cs-6601-artificial-intelligence',
  },
  {
    id: 'CS-6603',
    department: 'CS',
    number: '6603',
    name: 'AI, Ethics & Society',
    aliases: ['AIES', 'AI-Ethics'],
    foundational: true,
    deprecated: false,
    link: 'https://omscs.gatech.edu/cs-6603-ai-ethics-and-society',
  },
  {
    id: 'CS-6675',
    department: 'CS',
    number: '6675',
    name: 'Advanced Internet Systems & Applications',
    aliases: [],
    foundational: true,
    deprecated: false,
    link: 'https://omscs.gatech.edu/cs-6675-advanced-internet-systems-and-applications',
  },
  {
    id: 'CS-6726',
    department: 'CS',
    number: '6726',
    name: 'Privacy, Technology, Policy & Law',
    aliases: [],
    foundational: false,
    deprecated: true,
  },
  {
    id: 'CS-6727',
    department: 'CS',
    number: '6727',
    name: 'Cybersecurity Practicum',
    aliases: [],
    foundational: false,
    deprecated: true,
  },
  {
    id: 'CS-6747',
    department: 'CS',
    number: '6747',
    name: 'Advanced Malware Analysis',
    aliases: [],
    foundational: false,
    deprecated: false,
    link: 'https://omscs.gatech.edu/cs-6747-advanced-malware-analysis',
  },
  {
    id: 'CS-6750',
    department: 'CS',
    number: '6750',
    name: 'Human-Computer Interaction',
    aliases: ['HCI'],
    foundational: true,
    deprecated: false,
    link: 'https://omscs.gatech.edu/cs-6750-human-computer-interaction',
  },
  {
    id: 'CS-6795',
    department: 'CS',
    number: '6795',
    name: 'Introduction to Cognitive Science',
    aliases: [],
    foundational: true,
    deprecated: false,
    link: 'https://omscs.gatech.edu/cs-6795-introduction-cognitive-science',
  },
  {
    id: 'CS-7210',
    department: 'CS',
    number: '7210',
    name: 'Distributed Computing',
    aliases: ['DC'],
    foundational: true,
    deprecated: false,
    link: 'https://omscs.gatech.edu/cs-7210-distributed-computing',
  },
  {
    id: 'CS-7280',
    department: 'CS',
    number: '7280',
    name: 'Network Science',
    aliases: ['NS'],
    foundational: true,
    deprecated: false,
    link: 'https://omscs.gatech.edu/cs-7280-network-science',
  },
  {
    id: 'CS-7450',
    department: 'CS',
    number: '7450',
    name: 'Information Visualization',
    aliases: [],
    foundational: false,
    deprecated: true,
  },
  {
    id: 'CS-7470',
    department: 'CS',
    number: '7470',
    name: 'Mobile & Ubiquitous Computing',
    aliases: [],
    foundational: false,
    deprecated: false,
    link: 'https://omscs.gatech.edu/cs-7470-mobile-ubiquitous-computing',
  },
  {
    id: 'CS-7632',
    department: 'CS',
    number: '7632',
    name: 'Game AI',
    aliases: ['GAI'],
    foundational: true,
    deprecated: false,
    link: 'https://omscs.gatech.edu/cs-7632-game-ai',
  },
  {
    id: 'CS-7637',
    department: 'CS',
    number: '7637',
    name: 'Knowledge-Based Artificial Intelligence: Cognitive Systems',
    aliases: ['KBAI'],
    foundational: true,
    deprecated: false,
    link: 'https://omscs.gatech.edu/cs-7637-knowledge-based-artificial-intelligence-cognitive-systems',
  },
  {
    id: 'CS-7638',
    department: 'CS',
    number: '7638',
    name: 'Artificial Intelligence for Robotics',
    aliases: ['AI4R', 'RAIT'],
    foundational: true,
    deprecated: false,
    link: 'https://omscs.gatech.edu/cs-7638-artificial-intelligence-robotics',
  },
  {
    id: 'CS-7639',
    department: 'CS',
    number: '7639',
    name: 'Cyber Physical Design & Analysis',
    aliases: ['CPDA'],
    foundational: true,
    deprecated: false,
    link: 'https://omscs.gatech.edu/cs-7639-cyber-physical-design-and-analysis',
  },
  {
    id: 'CS-7641',
    department: 'CS',
    number: '7641',
    name: 'Machine Learning',
    aliases: ['ML'],
    foundational: true,
    deprecated: false,
    link: 'https://omscs.gatech.edu/cs-7641-machine-learning',
  },
  {
    id: 'CS-7642',
    department: 'CS',
    number: '7642',
    name: 'Reinforcement Learning',
    aliases: ['RL'],
    foundational: true,
    deprecated: false,
    link: 'https://www.omscs.gatech.edu/cs-7642-reinforcement-learning',
  },
  {
    id: 'CS-7643',
    department: 'CS',
    number: '7643',
    name: 'Deep Learning',
    aliases: ['DL'],
    foundational: true,
    deprecated: false,
    link: 'https://omscs.gatech.edu/cs-7643-deep-learning',
  },
  {
    id: 'CS-7646',
    department: 'CS',
    number: '7646',
    name: 'Machine Learning for Trading',
    aliases: ['ML4T'],
    foundational: true,
    deprecated: false,
    link: 'https://omscs.gatech.edu/cs-7646-machine-learning-trading',
  },
  {
    id: 'CS-8803-O04',
    department: 'CS',
    number: '8803-04',
    name: 'Embedded Software',
    aliases: [],
    foundational: false,
    deprecated: true,
  },
  {
    id: 'CS-8803-O05',
    department: 'CS',
    number: '8803-05',
    name: 'Data Visualization for Health Informatics',
    aliases: [],
    foundational: false,
    deprecated: true,
  },
  {
    id: 'CS-8803-O06',
    department: 'CS',
    number: '8803-06',
    name: 'Biomedical Analytics',
    aliases: [],
    foundational: false,
    deprecated: true,
  },
  {
    id: 'CS-8803-O08',
    department: 'CS',
    number: '8803-08',
    name: 'Compilers: Theory & Practice',
    aliases: [],
    foundational: true,
    deprecated: false,
    link: 'https://omscs.gatech.edu/cs-8803-o08-compilers-theory-and-practice',
  },
  {
    id: 'CS-8803-O12',
    department: 'CS',
    number: '8803-12',
    name: 'Systems Issues in Cloud Computing',
    aliases: [],
    foundational: true,
    deprecated: false,
    link: 'https://omscs.gatech.edu/cs-8803-o12-systems-issues-cloud-computing',
  },
  {
    id: 'CS-8803-OC1',
    department: 'CS',
    number: '8803',
    name: 'Security Operations & Incidence Response',
    aliases: [],
    foundational: false,
    deprecated: false,
  },
  {
    id: 'CS-8813',
    department: 'CS',
    number: '8813',
    name: 'Malware Analysis & Defense',
    aliases: [],
    foundational: false,
    deprecated: false,
  },
  {
    id: 'CSE-6040',
    department: 'CSE',
    number: '6040',
    name: 'Computing for Data Analytics',
    aliases: [],
    foundational: false,
    deprecated: false,
  },
  {
    id: 'CSE-6140',
    department: 'CSE',
    number: '6140',
    name: 'Computational Science & Engineering Algorithms',
    aliases: [],
    foundational: false,
    deprecated: false,
  },
  {
    id: 'CSE-6220',
    department: 'CSE',
    number: '6220',
    name: 'High Performance Computing',
    aliases: ['HPC', 'IHPC'],
    foundational: true,
    deprecated: false,
    link: 'https://omscs.gatech.edu/cse-6220-intro-hpc',
  },
  {
    id: 'CSE-6240',
    department: 'CSE',
    number: '6240',
    name: 'Web Search & Text Mining',
    aliases: [],
    foundational: false,
    deprecated: false,
  },
  {
    id: 'CSE-6242',
    department: 'CSE',
    number: '6242',
    name: 'Data & Visual Analytics',
    aliases: ['DVA'],
    foundational: true,
    deprecated: false,
    link: 'https://omscs.gatech.edu/cse-6242-data-visual-analytics',
  },
  {
    id: 'CSE-6250',
    department: 'CSE',
    number: '6250',
    name: 'Big Data for Health Informatics',
    aliases: ['BD4H', 'BDHI'],
    foundational: true,
    deprecated: false,
    link: 'https://omscs.gatech.edu/cse-8803-special-topics-big-data-for-health-informatics',
  },
  {
    id: 'ECE-6150',
    department: 'ECE',
    number: '6150',
    name: 'Computational Aspects of Cyber Physical Systems',
    aliases: [],
    foundational: false,
    deprecated: false,
  },
  {
    id: 'ECE-6266',
    department: 'ECE',
    number: '6266',
    name: 'Energy Systems Practicum',
    aliases: [],
    foundational: false,
    deprecated: true,
  },
  {
    id: 'ECE-6320',
    department: 'ECE',
    number: '6320',
    name: 'Power Systems Control & Operation',
    aliases: [],
    foundational: false,
    deprecated: false,
  },
  {
    id: 'ECE-6323',
    department: 'ECE',
    number: '6323',
    name: 'Power Systems Protection',
    aliases: [],
    foundational: false,
    deprecated: false,
  },
  {
    id: 'ECE-8803a',
    department: 'ECE',
    number: '8803',
    name: 'Computational Aspects of Cyber Physical Systems',
    aliases: [],
    foundational: false,
    deprecated: false,
  },
  {
    id: 'ECE-8803c',
    department: 'ECE',
    number: '8803',
    name: 'Embedded Systems',
    aliases: [],
    foundational: false,
    deprecated: true,
  },
  {
    id: 'ECE-8803d',
    department: 'ECE',
    number: '8803',
    name: 'Embedded Systems Security',
    aliases: [],
    foundational: false,
    deprecated: true,
  },
  {
    id: 'ECE-8803e',
    department: 'ECE',
    number: '8803',
    name: 'Introduction to Cyber Physical Electric Energy Systems',
    aliases: [],
    foundational: false,
    deprecated: false,
  },
  {
    id: 'ECE-8803g',
    department: 'ECE',
    number: '8803',
    name: 'Smart Grids',
    aliases: [],
    foundational: false,
    deprecated: false,
  },
  {
    id: 'ECE-8803h',
    department: 'ECE',
    number: '8803',
    name: 'Software Vulnerabilities & Security',
    aliases: [],
    foundational: false,
    deprecated: true,
  },
  {
    id: 'ECE-8813',
    department: 'ECE',
    number: '8813',
    name: 'Introduction to Cyber Physical Systems Security',
    aliases: [],
    foundational: false,
    deprecated: false,
  },
  {
    id: 'ECE-8823',
    department: 'ECE',
    number: '8823',
    name: 'Cyber Physical Design',
    aliases: ['CPDA'],
    foundational: false,
    deprecated: false,
  },
  {
    id: 'ECE-8843',
    department: 'ECE',
    number: '8843',
    name: 'Side Channels & Their Role in Cyberpsecurity',
    aliases: [],
    foundational: false,
    deprecated: false,
    link: 'https://omscs.gatech.edu/ece-8843-side-channels-and-their-role-cybersecurity',
  },
  {
    id: 'ECE-8853',
    department: 'ECE',
    number: '8853',
    name: 'Introduction to Cyber Physical Electric Energy Systems',
    aliases: [],
    foundational: false,
    deprecated: false,
  },
  {
    id: 'ECE-8863',
    department: 'ECE',
    number: '8863',
    name: 'Principles of Smart Electricity Grids',
    aliases: [],
    foundational: false,
    deprecated: false,
  },
  {
    id: 'ECE-8873',
    department: 'ECE',
    number: '8873',
    name: 'Advanced Hardware Oriented Security & Trust',
    aliases: [],
    foundational: false,
    deprecated: false,
  },
  {
    id: 'INTA-6014',
    department: 'INTA',
    number: '6014',
    name: 'Scenario & Path Gaming',
    aliases: [],
    foundational: false,
    deprecated: false,
  },
  {
    id: 'INTA-6103',
    department: 'INTA',
    number: '6103',
    name: 'International Security',
    aliases: [],
    foundational: false,
    deprecated: false,
  },
  {
    id: 'INTA-6450',
    department: 'INTA',
    number: '6450',
    name: 'Data Analytics & Security',
    aliases: [],
    foundational: false,
    deprecated: false,
    link: 'https://omscs.gatech.edu/inta-6450-data-analytics-and-security',
  },
  {
    id: 'CSE-6742',
    department: 'CSE',
    number: '6742',
    name: 'Modeling, Simulation & Military Gaming',
    aliases: [],
    foundational: false,
    deprecated: false,
    link: 'https://omscs.gatech.edu/cse-6742-modeling-simulation-and-military-gaming',
  },
  {
    id: 'INTA-8803G',
    department: 'INTA',
    number: '8803',
    name: 'Challenge of Terrorism in Democratic Societies',
    aliases: [],
    foundational: false,
    deprecated: false,
  },
  {
    id: 'ISYE-6402',
    department: 'ISYE',
    number: '6402',
    name: 'Time Series Analysis',
    aliases: ['TSA'],
    foundational: false,
    deprecated: false,
    link: 'https://omscs.gatech.edu/isye-6402-time-series-analysis',
  },
  {
    id: 'ISYE-6404',
    department: 'ISYE',
    number: '6404',
    name: 'Nonparametric Data Analysis',
    aliases: [],
    foundational: false,
    deprecated: false,
  },
  {
    id: 'ISYE-6413',
    department: 'ISYE',
    number: '6413',
    name: 'Design & Analysis of Experiments',
    aliases: [],
    foundational: false,
    deprecated: false,
  },
  {
    id: 'ISYE-6414',
    department: 'ISYE',
    number: '6414',
    name: 'Regression Analysis',
    aliases: [],
    foundational: false,
    deprecated: false,
  },
  {
    id: 'ISYE-6416',
    department: 'ISYE',
    number: '6416',
    name: 'Computational Statistics',
    aliases: [],
    foundational: false,
    deprecated: false,
  },
  {
    id: 'ISYE-6420',
    department: 'ISYE',
    number: '6420',
    name: 'Bayesian Statistics',
    aliases: ['BS'],
    foundational: true,
    deprecated: false,
    link: 'https://omscs.gatech.edu/isye-6420-bayesian-statistics',
  },
  {
    id: 'ISYE-6501',
    department: 'ISYE',
    number: '6501',
    name: 'Introduction to Analytics Modeling',
    aliases: ['IAM'],
    foundational: false,
    deprecated: false,
    link: 'https://omscs.gatech.edu/isye-6501-intro-analytics-modeling',
  },
  {
    id: 'ISYE-6644',
    department: 'ISYE',
    number: '6644',
    name: 'Simulation & Modeling for Engineering & Science',
    aliases: ['SIM'],
    foundational: false,
    deprecated: false,
    link: 'https://omscs.gatech.edu/isye-6644-simulation-and-modeling-engineering-and-science',
  },
  {
    id: 'ISYE-6650',
    department: 'ISYE',
    number: '6650',
    name: 'Probabilistic Models',
    aliases: [],
    foundational: false,
    deprecated: false,
  },
  {
    id: 'ISYE-6669',
    department: 'ISYE',
    number: '6669',
    name: 'Deterministic Optimization',
    aliases: [],
    foundational: false,
    deprecated: false,
  },
  {
    id: 'ISYE-6740',
    department: 'ISYE',
    number: '6740',
    name: 'Computational Data Analytics',
    aliases: [],
    foundational: false,
    deprecated: false,
  },
  {
    id: 'ISYE-7406',
    department: 'ISYE',
    number: '7406',
    name: 'Data Mining & Statistical Learning',
    aliases: [],
    foundational: false,
    deprecated: false,
  },
  {
    id: 'ISYE-8803',
    department: 'ISYE',
    number: '8803',
    name: 'High-Dimensional Data Analytics',
    aliases: ['HDDA'],
    foundational: false,
    deprecated: false,
    link: 'https://omscs.gatech.edu/isye-8803-topics-high-dimensional-data-analytics',
  },
  {
    id: 'MGT-6203',
    department: 'MGT',
    number: '6203',
    name: 'Data Analytics & Business',
    aliases: [],
    foundational: false,
    deprecated: false,
  },
  {
    id: 'MGT-6311',
    department: 'MGT',
    number: '6311',
    name: 'Digital Marketing',
    aliases: [],
    foundational: false,
    deprecated: false,
    link: 'https://omscs.gatech.edu/mgt-6311-digital-marketing',
  },
  {
    id: 'MGT-6748',
    department: 'MGT',
    number: '6748',
    name: 'Applied Analytics Practicum',
    aliases: [],
    foundational: false,
    deprecated: false,
  },
  {
    id: 'MGT-8803',
    department: 'MGT',
    number: '8803',
    name: 'Business Fundamentals for Analytics',
    aliases: [],
    foundational: true,
    deprecated: false,
  },
  {
    id: 'MGT-8813',
    department: 'MGT',
    number: '8813',
    name: 'Financial Modeling',
    aliases: [],
    foundational: false,
    deprecated: false,
  },
  {
    id: 'MGT-8823',
    department: 'MGT',
    number: '8823',
    name: 'Data Analytics & Continuous Improvement',
    aliases: [],
    foundational: false,
    deprecated: false,
  },
    id: 'MGT-8833',
    department: 'MGT',
    number: '8833',
    name: 'Privacy for Professionals',
    aliases: [],
    foundational: false,
    deprecated: false,
  },
  {
    id: 'MGT-6727',
    department: 'MGT',
    number: '6727',
    name: 'Privacy for Professionals',
    aliases: [],
    foundational: false,
    deprecated: false,
  },
  {
    id: 'PUBP-6111',
    department: 'PUBP',
    number: '6111',
    name: 'Internet & Public Policy',
    aliases: [],
    foundational: false,
    deprecated: false,
  },
  {
    id: 'PUBP-6266',
    department: 'PUBP',
    number: '6266',
    name: 'Policy Practicum',
    aliases: [],
    foundational: false,
    deprecated: true,
  },
  {
    id: 'PUBP-6501',
    department: 'PUBP',
    number: '6501',
    name: 'Information Policy & Management',
    aliases: [],
    foundational: false,
    deprecated: false,
  },
  {
    id: 'PUBP-6502',
    department: 'PUBP',
    number: '6502',
    name: 'Information & Communications Policy',
    aliases: [],
    foundational: false,
    deprecated: false,
  },
  {
    id: 'PUBP-6725',
    department: 'PUBP',
    number: '6725',
    name: 'Information Security Policies',
    aliases: ['ISP'],
    foundational: false,
    deprecated: false,
    link: 'https://omscs.gatech.edu/pubp-6725-information-security-policies',
  },
  {
    id: 'VIP-6600',
    department: 'VIP',
    number: '6600',
    name: 'Vertically Integrated Projects',
    aliases: ['VIP'],
    foundational: false,
    deprecated: false,
    link: 'https://www.vip.gatech.edu/',
  },
];
