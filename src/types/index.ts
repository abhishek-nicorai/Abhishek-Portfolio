export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  githubUrl: string; // Required for a dev portfolio
  liveUrl: string;   // Required for a dev portfolio
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string[]; // Array of strings for bullet points
  skills?: string[];    // Optional: Tech used in that role
}

export interface Skill {
  name: string;
  icon: string;
  category: "Frontend" | "Backend" | "Architecture" | "Systems" | "DevOps" | "Tools";
}