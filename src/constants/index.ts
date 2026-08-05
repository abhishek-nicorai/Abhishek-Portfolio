import { NavItem, Project, Experience, Skill } from "@/types";

export const NAV_LINKS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const PROJECTS: Project[] = [
  {
    title: "Production Portfolio",
    description: "A modular, type-safe portfolio website built with Next.js 15 and Tailwind CSS.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/yourusername/portfolio", // Update this later
    liveUrl: "https://your-vercel-url.vercel.app", // Update this later
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