import { Project, Experience, Skill, SocialLink } from "@/types";

export const personalInfo = {
  name: "Derek Oware",
  title: "Senior Full-Stack Developer",
  tagline: "Building elegant solutions with modern web technologies",
  email: "derekoware47@gmail.com",
  location: "Takoradi, Ghana",
  bio: "I'm a senior full-stack developer with 8+ years of experience specializing in React, Next.js, and Node.js. I'm passionate about creating performant, accessible web applications that solve real-world problems. My focus is on frontend architecture, but I bring full-stack expertise to every project.",
  avatar: "/avatar.jpg" // Add your image to public folder
};

export const skills: Skill[] = [
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "Zustand",
      "React Query",
      "Framer Motion"
    ]
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express",
      "RESTful APIs",
      "GraphQL",
      "PostgreSQL",
      "MongoDB",
      "Prisma"
    ]
  },
  {
    category: "Tools & Others",
    items: [
      "Git",
      "Docker",
      "AWS",
      "Vercel",
      "Jest",
      "Playwright",
      "Figma",
      "CI/CD"
    ]
  }
];

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with real-time inventory management and payment processing.",
    longDescription:
      "Built a scalable e-commerce solution handling 10k+ daily users. Implemented advanced filtering, real-time inventory updates, and integrated Stripe for payment processing. Achieved 95+ Lighthouse score through aggressive optimization.",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Stripe",
      "Redis"
    ],
    imageUrl: "/projects/Adcraft.png",
    demoUrl: "https://adcraft.cc",
    githubUrl: "https://github.com/yourusername/ecommerce",
    featured: true
  },
  {
    id: "2",
    title: "Task Management SaaS",
    description:
      "A collaborative task management application with real-time updates and team workspaces.",
    longDescription:
      "Developed a real-time collaboration tool using WebSockets. Features include drag-and-drop task boards, team workspaces, file attachments, and activity tracking. Supports 1000+ concurrent users with optimistic UI updates.",
    technologies: [
      "React",
      "Node.js",
      "Socket.io",
      "MongoDB",
      "AWS S3",
      "Tailwind CSS"
    ],
    imageUrl: "/projects/Brilla.png",
    demoUrl: "https://learn.brilla.app",
    githubUrl: "https://github.com/yourusername/task-manager",
    featured: true
  },
  {
    id: "3",
    title: "Analytics Dashboard",
    description:
      "A comprehensive analytics dashboard with interactive charts and real-time data visualization.",
    longDescription:
      "Created a data visualization platform processing millions of data points. Features customizable dashboards, exportable reports, and real-time data streams. Implemented efficient data aggregation and caching strategies for optimal performance.",
    technologies: [
      "React",
      "D3.js",
      "GraphQL",
      "PostgreSQL",
      "Docker",
      "Kubernetes"
    ],
    imageUrl: "/projects/Handymen.png",
    demoUrl: "https://handymen-nu.vercel.app/",
    githubUrl: "https://github.com/Dchole/handymen",
    featured: true
  }
];

export const experience: Experience[] = [
  {
    id: "1",
    company: "TechCorp Inc.",
    position: "Senior Full-Stack Developer",
    location: "San Francisco, CA",
    startDate: "2021-03",
    endDate: null,
    description: [
      "Led frontend architecture redesign reducing load time by 60%",
      "Mentored team of 4 junior developers in React best practices",
      "Implemented comprehensive testing strategy increasing coverage to 85%",
      "Collaborated with product team to define technical requirements"
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "AWS"
    ]
  },
  {
    id: "2",
    company: "StartupXYZ",
    position: "Full-Stack Developer",
    location: "Remote",
    startDate: "2019-01",
    endDate: "2021-02",
    description: [
      "Built customer-facing web application from ground up",
      "Designed and implemented RESTful APIs serving 50k+ daily requests",
      "Optimized database queries reducing response time by 70%",
      "Participated in agile ceremonies and sprint planning"
    ],
    technologies: ["React", "Express", "MongoDB", "Redis", "Docker"]
  },
  {
    id: "3",
    company: "Digital Agency Co.",
    position: "Frontend Developer",
    location: "New York, NY",
    startDate: "2017-06",
    endDate: "2018-12",
    description: [
      "Developed responsive web applications for multiple clients",
      "Implemented pixel-perfect designs from Figma mockups",
      "Improved website performance achieving 90+ Lighthouse scores",
      "Collaborated with designers and backend developers"
    ],
    technologies: ["React", "Vue.js", "SASS", "Webpack", "REST APIs"]
  }
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: "github"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: "linkedin"
  },
  {
    name: "Twitter",
    url: "https://twitter.com/yourusername",
    icon: "twitter"
  }
];
