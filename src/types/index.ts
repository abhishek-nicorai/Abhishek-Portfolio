export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string; // e.g., "Jan 2024 - Present"
  description: string[];
}

export interface Skill {
  name: string;
  icon: string;
  category: "Frontend" | "Backend" | "Architecture" | "Systems" | "DevOps" | "Tools";
}