"use client";
import React from 'react';

interface ExpertiseRowProps {
  id: string;
  area: string;
  description: string;
  tools: string[];
}

export const ExpertiseRow = ({ id, area, description, tools }: ExpertiseRowProps) => {
  return (
    <div className="group relative py-20 border-b border-outline-variant/30 transition-all duration-500 hover:px-15">
      {/* Background Hover Effect */}
      <div className="absolute inset-0 bg-primary/[0.02] opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10 rounded-2xl" />

      <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
        {/* ID & Title */}
        <div className="flex items-center gap-6 md:w-1/2">
          <span className="text-xs font-mono text-primary/40 font-bold">{id}</span>
          <h3 className="text-2xl md:text-3xl font-bold text-on-surface tracking-tight group-hover:text-primary transition-colors duration-500">
            {area}
          </h3>
        </div>

        {/* Description */}
        {/* <div className="md:w-1/3">
          <p className="text-on-surface-variant text-sm leading-relaxed">
            {description}
          </p>
        </div> */}

        {/* Tools Tags */}
        <div className="flex flex-wrap gap-2 md:w-1/2 md:justify-end">
          {tools.map((tool) => (
            <span 
              key={tool} 
              className="px-3 py-1 bg-surface-container-low text-on-surface-variant text-[12px] font-bold rounded-full border border-outline-variant/10 whitespace-nowrap"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};