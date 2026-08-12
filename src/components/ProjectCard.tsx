import React from 'react';
import { Project } from "@/types";

export const ProjectCard = ({ title, description, techStack, imageUrl, githubUrl, liveUrl }: Project) => {
  return (
    <div className="group flex flex-col bg-white border border-outline-variant/0 rounded-[2.5rem] overflow-hidden transition-all duration-700 hover:shadow-[0_40px_80px_30px_rgba(0,0,0,0.08)] hover:border-primary/10">
      
      {/* 1. Image: Massive Rounded Inset */}
      <div className="p-4 pb-0">
        <div className="relative aspect-[16/9] overflow-hidden rounded-[1.8rem]">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-1000 scale-105 group-hover:scale-100"
          />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </div>
      </div>

      {/* 2. Content: Huge Breathing Space (p-10) */}
      <div className="p-10 pt-8 flex flex-col flex-grow">
        
        {/* Tech Stack: Minimalist Tags */}
        <div className="flex flex-wrap gap-3 mb-6">
          {techStack.map(tech => (
            <span key={tech} className="text-[10px] font-extrabold tracking-widest text-on-surface-variant uppercase">
              {tech}
            </span>
          ))}
        </div>

        {/* Title & Description */}
        <h3 className="text-3xl font-bold text-on-surface mb-4 tracking-tight group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-on-surface-variant leading-relaxed mb-10 text-base md:text-lg opacity-80">
          {description}
        </p>

        {/* 3. Action Bar: Spaced out links */}
        <div className="mt-auto pt-8 border-t border-outline-variant/10 flex items-center gap-8">
          <a 
            href={liveUrl} 
            target="_blank"
            className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-on-surface-variant hover:text-primary transition-all"
          >
            LIVE DEMO
          </a>

          <a 
            href={githubUrl} 
            target="_blank"
            className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-on-surface-variant hover:text-primary transition-all"
          >
            SOURCE CODE
          </a>
        </div>
      </div>
    </div>
  );
};