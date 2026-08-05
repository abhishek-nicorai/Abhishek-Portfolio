import Image from "next/image";
import { Project } from "@/types";

export const ProjectCard = ({ title, description, techStack, imageUrl, size }: Project) => {
  const isLarge = size === "large";

  return (
    <div className={`group relative overflow-hidden rounded-3xl border border-outline-variant/30 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl 
      ${isLarge ? "md:col-span-8" : "md:col-span-4"}`}>
      
      {/* Image Container */}
      <div className="aspect-video overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-8 md:p-10">
        <div className="flex gap-2 mb-6">
          {techStack.map(tech => (
            <span key={tech} className="px-3 py-1 bg-surface-container text-primary text-[10px] font-bold rounded-full uppercase tracking-wider">
              {tech}
            </span>
          ))}
        </div>
        
        <h3 className="text-2xl md:text-3xl font-bold mb-3 text-on-surface">{title}</h3>
        <p className="text-on-surface-variant leading-relaxed mb-8 max-w-2xl">
          {description}
        </p>

        <a href="#" className="inline-flex items-center gap-2 text-primary font-bold hover:underline group/link text-sm">
          VIEW CASE STUDY
          <span className="material-symbols-outlined text-sm transition-transform group-hover/link:translate-x-1">
            open_in_new
          </span>
        </a>
      </div>
    </div>
  );
};