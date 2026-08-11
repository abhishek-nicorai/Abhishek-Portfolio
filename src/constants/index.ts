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

export const EXPERTISE_DATA = [
  {
    id: "01",
    area: "Frontend Engineering",
    description: "",
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Figma"],
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
    company: "Freelance / Self-Employed",
    role: "Full Stack Developer",
    duration: "2024 - Present",
    description: [
      "Architecting modular, type-safe web applications using Next.js and TypeScript.",
      "Developing responsive UI components with Tailwind CSS following modern design systems.",
      "Integrating backend services and APIs to create seamless user experiences.",
    ],
    skills: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"],
  },
  {
    company: "Open Source Contributor",
    role: "Developer",
    duration: "2023 - 2024",
    description: [
      "Collaborated on various open-source projects to improve code documentation and performance.",
      "Resolved issues related to UI responsiveness and state management in React-based libraries.",
    ],
    skills: ["React", "Git", "GitHub"],
  },
];

export const CONTACT_INFO = {
  email: "abhishektn27@gmail.com", // Replace with your real email
  linkedin: "https://linkedin.com/in/yourusername",
  github: "https://github.com/yourusername",
  twitter: "https://twitter.com/yourusername",
};