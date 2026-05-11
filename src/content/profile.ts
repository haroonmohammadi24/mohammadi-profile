export type Experience = {
  company: string
  role: string
  period: string
  location: string
  highlights?: string[]
}

export type Education = {
  school: string
  degree: string
  period: string
}

export type Project = {
  name: string
  organization: string
  whatItIs: string
  role: string
  highlights?: string[]
}

export const profile = {
  name: 'Mohammad Haroon Mohammadi',
  title:
    'System Development & Integration Manager @APS | System Architect | Microservices | Docker | CI/CD | Java Spring Boot | Kotlin | React | MongoDB | PostgreSQL',
  location: 'Kabul, Afghanistan',
  phone: '0705560084',
  email: 'mohharoonmohammadi24@gmail.com',
  linkedin:
    'https://www.linkedin.com/in/mohammad-haroon-m-0533b6240',
  companySite: 'https://aps.gov.af/',
  topSkills: ['Apache Spark', 'Kotlin', 'OAuth2'],
  summary: [
    'I am a results-driven Software Development and Integration Manager with strong experience in enterprise system design, government digital transformation, and national payment systems.',
    'I currently lead system development and modernization at the Afghanistan Payment System (APS) under Da Afghanistan Bank, delivering secure, scalable, and high-performance financial and e-government platforms.',
    'I have hands-on knowledge of Fintech, ISO 8583, and ISO 20022 messaging standards, with direct involvement in payment system integration, interoperability, and transaction processing at the national level.',
    'Previously, as Head of System Development at MCIT, I managed large-scale government software projects focused on digital governance, system interoperability, and secure document management using modern, microservices-based architectures.',
    'With a technical foundation in Spring Boot, React, Docker, Kafka, and distributed systems, I combine technical leadership with practical engineering expertise. I have also contributed as a Software Engineering Lecturer and Full Stack Developer, mentoring teams and promoting modern development practices.',
    'My goal is to advance Afghanistan’s digital and financial infrastructure by building reliable, transparent, and connected systems that serve both institutions and citizens.',
  ],
  experiences: [
    {
      company:
        'Afghanistan Central Bank (Da Afghanistan Bank - DAB)',
      role: 'System Development & Integration Manager (APS)',
      period: 'October 2025 – Present',
      location: 'Kabul, Kabul Province, Afghanistan',
    },
    {
      company:
        'Afghanistan Central Bank (Da Afghanistan Bank - DAB)',
      role: 'Software Engineer',
      period: 'September 2025 – October 2025',
      location: 'Kabul, Kabul Province, Afghanistan',
    },
    {
      company:
        'Ministry of Communications and Information Technologies, Afghanistan',
      role: 'Simplification of Process Head',
      period: 'July 2025 – September 2025',
      location: 'Kabul, Kabul Province, Afghanistan',
    },
    {
      company:
        'Ministry of Communications and Information Technologies, Afghanistan',
      role: 'System Development Head',
      period: 'December 2022 – July 2025',
      location: 'Kabul, Kabul Province, Afghanistan',
      highlights: [
        'Leading software development initiatives within a governmental setting.',
        'Focused on strategic system design and mentoring development teams.',
      ],
    },
    {
      company: 'Tooti Sabz',
      role: 'General Team Leader',
      period: 'March 2025 – May 2025',
      location: 'Kabul, Kabul Province, Afghanistan',
    },
    {
      company: 'Tooti Sabz',
      role: 'Senior Backend Developer',
      period: 'January 2025 – March 2025',
      location: 'Kabul, Kabul Province, Afghanistan',
      highlights: [
        'Working on backend systems and architecture.',
        'Involved in freelance project delivery with a focus on performance and scalability.',
      ],
    },
    {
      company: 'Maryam University',
      role: 'Software Engineering Lecturer',
      period: 'January 2022 – December 2022',
      location: 'Kabul, Kabul Province, Afghanistan',
      highlights: [
        'Delivered lectures and mentored students in software engineering.',
      ],
    },
    {
      company: 'RELIEF HUMANITARIAN DEVELOPMENT ORGANIZATION',
      role: 'Full Stack Software Developer',
      period: 'February 2021 – January 2022',
      location: 'Kabul, Kabul Province, Afghanistan',
      highlights: [
        'Design, develop, and maintain scalable Java (Spring Boot) backend services and REST APIs.',
        'Build interactive and responsive user interfaces using React.',
        'Implement authentication/authorization and security features (JWT, OAuth2, Spring Security).',
        'Work with databases such as PostgreSQL, MySQL, MongoDB, and Redis.',
        'Deploy with Docker and CI/CD pipelines; debug and troubleshoot full-stack issues.',
      ],
    },
    {
      company: 'FAWAD MOHIB TELECOM INSTALLATION COMPANY',
      role: 'Software Developer',
      period: 'January 2019 – December 2021',
      location: 'Kabul, Kabul Province, Afghanistan',
    },
  ] satisfies Experience[],
  projects: [
    {
      name: 'NEXA Kankoor System',
      organization: 'MCIT Afghanistan',
      whatItIs: 'National examination (Kankoor) system.',
      role: 'Project Manager & Technical Project Lead',
    },
    {
      name: 'MCIT Form Builder',
      organization: 'MCIT Afghanistan',
      whatItIs: 'Internal form builder platform for creating and managing digital forms.',
      role: 'Developer',
    },
    {
      name: 'IMEI Project (Technical Architecture)',
      organization: 'MCIT Afghanistan',
      whatItIs: 'Designed the technical architecture for an IMEI-related system/project.',
      role: 'Technical Architect',
    },
    {
      name: 'Building Construction System',
      organization: 'Kabul Municipality (via MCIT Afghanistan)',
      whatItIs: 'System for building construction processes and management.',
      role: 'Developer',
    },
    {
      name: 'Ticketing System',
      organization: 'Afghanistan Payment System (APS)',
      whatItIs: 'Issue tracking / ticketing platform for operations and support.',
      role: 'Developer',
    },
    {
      name: 'Dispute Management System',
      organization: 'Afghanistan Payment System (APS)',
      whatItIs: 'Dispute case intake, workflow, and resolution tracking for payments.',
      role: 'Developer',
    },
    {
      name: 'Identity Hub (Microservice Architecture)',
      organization: 'Afghanistan Payment System (APS)',
      whatItIs: 'Microservices-based identity and access hub for platform integrations.',
      role: 'Technical Lead / Architect',
    },
  ] satisfies Project[],
  education: {
    school: 'Balkh University',
    degree: "Bachelor's degree, Computer Science",
    period: 'January 2016 – January 2020',
  } satisfies Education,
} as const
