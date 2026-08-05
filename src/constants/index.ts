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
    description: "A real-time collaborative workspace for development teams, featuring end-to-end encryption and custom workflow modules.",
    techStack: ["React", "Firebase", "Tailwind"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    githubUrl: "#",
    liveUrl: "#",
    size: "large",
  },
  {
    title: "Core API",
    description: "High-performance REST API with automated documentation and testing pipelines.",
    techStack: ["Node.js", "Express", "PostgreSQL"],
    imageUrl: "https://images.unsplash.com/photo-1614064641935-3bb7518b2c5f?auto=format&fit=crop&q=80&w=1000",
    githubUrl: "#",
    size: "small",
  },
];

export const SKILLS: Skill[] = [
  { name: "React", icon: "terminal", category: "Frontend" },
  { name: "Node.js", icon: "dns", category: "Backend" },
  { name: "TypeScript", icon: "code", category: "Architecture" },
  { name: "PostgreSQL", icon: "database", category: "Systems" },
  { name: "Docker", icon: "cloud", category: "DevOps" },
  { name: "Next.js", icon: "layers", category: "Frontend" },
  { name: "Tailwind", icon: "palette", category: "Frontend" },
  { name: "Git", icon: "history", category: "Tools" },
];

// Leave this empty for now if you are a student, or add your details
export const EXPERIENCES: Experience[] = [
  {
    company: "Self-Employed",
    role: "Full Stack Developer",
    duration: "2024 - Present",
    description: [
      "Building production-ready web applications using modern tech stacks.",
      "Implementing CI/CD pipelines and modular architecture.",
    ],
  },
];