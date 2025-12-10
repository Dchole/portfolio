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
    title: "Adcraft - Video Ad Generator",
    description:
      "AI-powered video ad generator that transforms your e-commerce product pages into professional video ads in under a minute.",
    longDescription:
      "Built an AI-powered SaaS platform that automates video ad creation for social media sellers. The system scrapes product images and videos from e-commerce URLs using Puppeteer, generates AI-powered scripts, and creates voice-overs with Eleven Labs. Features include customizable media selection, automated video rendering with FFmpeg, and Paystack payment integration. Generates professional ads in 30-60 seconds for $0-30 depending on the number of ads generated.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Nest.js",
      "MongoDB",
      "Puppeteer",
      "FFmpeg",
      "Eleven Labs API",
      "Paystack"
    ],
    imageUrl: "/projects/Adcraft.webp",
    demoUrl: "https://adcraft.cc",
    featured: true
  },
  {
    id: "2",
    title: "Brilla - AI Study Assistant",
    description:
      "AI-powered study platform that transforms study materials into interactive quizzes, flashcards, and summaries for efficient exam preparation.",
    longDescription:
      "Built an intelligent study platform for college students that processes PDF, DOCX, and TXT documents with advanced document parsing (pdf-parse, mammoth, docx). Features include interactive document preview with text highlighting, OpenAI-powered Q&A on study material, auto-generated quizzes and flashcards for revision, and AI-generated summaries. Integrated Supabase for authentication and storage, AWS S3 for document management, and Resend for email notifications. Instant AI responses provide seamless learning experience.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "OpenAI",
      "AWS S3",
      "PDF-Parse",
      "Mammoth",
      "Resend"
    ],
    imageUrl: "/projects/Brilla.webp",
    demoUrl: "https://brilla.app",
    featured: true
  },
  {
    id: "3",
    title: "Handymen - Book Home Services",
    description:
      "A comprehensive analytics dashboard with interactive charts and real-time data visualization.",
    longDescription:
      "Created a data visualization platform processing millions of data points. Features customizable dashboards, exportable reports, and real-time data streams. Implemented efficient data aggregation and caching strategies for optimal performance.",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Nest.js",
      "Prisma",
      "PostgreSQL"
    ],
    imageUrl: "/projects/Handymen.webp",
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
