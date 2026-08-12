import { NavItem, Project, Experience, Skill } from "@/types";

export const NAV_LINKS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const PROJECTS: Project[] = [
  {
    title: "Project Nexus",
    description: "A real-time collaborative workspace for development teams with end-to-end encryption and custom modules.",
    techStack: ["Next.js", "WebRTC", "PostgreSQL"],
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    githubUrl: "https://github.com/yourusername",
    liveUrl: "https://project-nexus.vercel.app",
  },
  {
    title: "Project Nexus",
    description: "A real-time collaborative workspace for development teams with end-to-end encryption and custom modules.",
    techStack: ["Next.js", "WebRTC", "PostgreSQL"],
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    githubUrl: "https://github.com/yourusername",
    liveUrl: "https://project-nexus.vercel.app",
  },
  {
    title: "Project Nexus",
    description: "A real-time collaborative workspace for development teams with end-to-end encryption and custom modules.",
    techStack: ["Next.js", "WebRTC", "PostgreSQL"],
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    githubUrl: "https://github.com/yourusername",
    liveUrl: "https://project-nexus.vercel.app",
  },
  
  // Add more projects here...
];
export const EXPERTISE_DATA = [
  {
    id: "01",
    area: "Frontend Engineering",
    description: "",
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Figma","React", "Next.js", "TypeScript", "Tailwind CSS", "Figma","React", "Next.js", "TypeScript", "Tailwind CSS", "Figma"],
  },
  {
    id: "02",
    area: "Backend & Systems",
    description: "",
    tools: ["Node.js", "PostgreSQL", "Prisma", "Express"],
  },
  {
    id: "03",
    area: "DevOps & Deployment",
    description: "",
    tools: ["Docker", "Git", "Vercel", "GitHub Actions"],
  }
];
// Leave this empty for now if you are a student, or add your details
export const EXPERIENCES: Experience[] = [
  {
    company: "Tech Solutions Inc.",
    role: "Full Stack Developer",
    duration: "2024 — PRESENT",
    description: [
      "Leading the development of a modular UI kit used across 5 internal products.",
      "Optimized database queries in PostgreSQL, reducing load times by 40%.",
      "Collaborating with designers to implement pixel-perfect, accessible interfaces."
    ],
    skills: ["Next.js", "TypeScript", "PostgreSQL", "AWS"]
  },
  {
    company: "Freelance Projects",
    role: "Frontend Engineer",
    duration: "2023 — 2024",
    description: [
      "Built and deployed over 10+ responsive websites for international clients.",
      "Mastered modern styling tools like Tailwind CSS and Framer Motion for animations.",
      "Integrated various headless CMS platforms for dynamic content management."
    ],
    skills: ["React", "Tailwind", "Figma", "Sanity.io"]
  }
];

export const CONTACT_DATA = {
  email: "yourname@example.com",
  whatsapp: "+919876543210",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
  location: "Your City, Country",
  availability: "Currently accepting new projects",
  web3forms_key: "YOUR_KEY_HERE" // Get yours at web3forms.com
};

export const FOOTER_LINKS = [
  {
    title: "Navigation",
    links: [
      { label: "Home", href: "#home" },
      { label: "Experience", href: "#experience" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Socials",
    links: [
      { label: "GitHub", href: CONTACT_DATA.github },
      { label: "LinkedIn", href: CONTACT_DATA.linkedin },
      { label: "Twitter", href: CONTACT_DATA.twitter },
      { label: "WhatsApp", href: `https://wa.me/${CONTACT_DATA.whatsapp.replace('+', '')}` },
    ],
  },
];