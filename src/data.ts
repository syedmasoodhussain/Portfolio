import { Project, TimelineItem } from './types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Capital One Banking Platform",
    description: "Developed robust backend systems using Java EE and Spring Boot",
    technologies: ["Java", "Spring Boot", "Appian", "AWS", "MySQL"],
    longDescription: "Led the development of banking platform features using Java & Spring Boot, creating RESTful APIs and enhancing microservices architecture. Implemented process automation using Appian and integrated third-party systems.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "GitHub Data Analysis Platform",
    description: "Web application for analyzing GitHub data using Spring and React",
    technologies: ["Spring", "Hibernate", "React", "MySQL", "Docker"],
    longDescription: "Built a comprehensive web application that analyzes GitHub data using Spring Boot backend and React frontend. Implemented efficient data transfer protocols and scalable architecture.",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

export const experience: TimelineItem[] = [
  {
    date: "August 2023 - Present",
    title: "Java Full Stack Developer",
    company: "Capital One",
    location: "MD, USA",
    description: [
      "Developed robust backend systems using Java EE and Spring Boot",
      "Appian Development & Automation with certification",
      "Backend Integration with third-party systems",
      "Database Management with MySQL",
      "AWS Deployment & Scalability management"
    ]
  },
  {
    date: "June 2019 - Aug 2022",
    title: "Java Full Stack Developer",
    company: "Genpact",
    location: "India",
    description: [
      "Developed web app using Spring, Hibernate, React, MySQL, and Docker",
      "Built scalable back-end solutions for SPA applications",
      "Created efficient RESTful APIs with Spring MVC",
      "Managed source code with Git and collaborated with teams",
      "Enhanced web application responsiveness"
    ]
  }
];

export const education: TimelineItem[] = [
  {
    date: "2022 - 2023",
    title: "Master of Science in Computer Science",
    location: "Campbellsville University, Kentucky, USA",
    description: []
  },
  {
    date: "2015 - 2019",
    title: "Bachelor of Technology in Computer Science",
    location: "JNTU, Hyderabad, India",
    description: []
  }
];