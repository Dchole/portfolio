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
      "tRPC",
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
    title: "Handymen - Smart Service Booking",
    description:
      "Intelligent service booking platform with automated provider matching and smart scheduling algorithms.",
    longDescription:
      "Developed a sophisticated scheduling system for home service bookings with intelligent provider-to-customer matching. Implemented time-slot conflict resolution algorithms, automated availability checking, and smart painter prioritization based on multiple factors (availability, workload distribution, proximity). Built RESTful APIs for availability management and booking requests with real-time slot recommendations when exact matches aren't available. Features include provider dashboard for availability management, customer booking interface, and automatic assignment logic with fallback to closest available slots.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Nest.js",
      "Prisma",
      "PostgreSQL",
      "React"
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
    company: "Welite",
    position: "Senior Full-Stack Developer",
    location: "Remote",
    startDate: "2021-12",
    endDate: null,
    description: [
      "Built 10+ client projects from scratch across e-commerce, SaaS, dashboards, and tracking systems under NDA",
      "Served as technical lead for complex problem-solving across projects, performing code reviews and architecture decisions",
      "Led major optimization initiatives on legacy codebases, reducing load times and improving performance metrics",
      "Migrated large JavaScript codebases to TypeScript, improving code quality and maintainability",
      "Mentored new developers during onboarding and collaborated on completing critical project deliverables"
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Nest.js",
      "Node.js",
      "Redux",
      "Zustand",
      "PostgreSQL",
      "MongoDB",
      "AWS",
      "Socket.io",
      "tRPC",
      "IndexedDB"
    ]
  },
  {
    id: "2",
    company: "Dishplug",
    position: "Co-Founder & COO",
    location: "Ghana",
    startDate: "2022-10",
    endDate: "2024-04",
    description: [
      "Co-founded food delivery platform connecting campus vendors with students across multiple universities",
      "Built complete technical infrastructure including customer web app, vendor admin panel, and rider mobile app",
      "Implemented real-time order tracking system with GraphQL API, Firebase, and Socket.io for live updates",
      "Integrated Google Maps API for location services, route optimization, and delivery tracking",
      "Managed operations including vendor onboarding, order fulfillment, and delivery coordination"
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "GraphQL",
      "Apollo Server",
      "React Native",
      "Firebase",
      "MongoDB",
      "Socket.io",
      "Google Maps API",
      "Paystack"
    ]
  },
  {
    id: "3",
    company: "Freelance Developer",
    position: "Full-Stack Developer",
    location: "Remote",
    startDate: "2020-11",
    endDate: "2024-07",
    description: [
      "Fixed OAuth authentication bug for fintech client using banking API with JWT integration",
      "Automated digital store sales with Steam login automation and 2FA handling via Google Email API",
      "Developed animated landing page with SEO and accessibility optimization achieving 95+ Lighthouse score",
      "Built Facebook automation bot for real-time post engagement with auto-like and contextual commenting",
      "Created Chrome extension with engagement tracking system using PostgreSQL and IndexedDB for dual-storage"
    ],
    technologies: [
      "TypeScript",
      "React",
      "Node.js",
      "PostgreSQL",
      "Chrome Extensions API",
      "OAuth",
      "Google APIs",
      "Automation"
    ]
  }
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/Dchole",
    icon: "github"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/derek-oware-5075981a2/",
    icon: "linkedin"
  },
  {
    name: "Twitter",
    url: "https://x.com/DerekOware2",
    icon: "twitter"
  }
];
