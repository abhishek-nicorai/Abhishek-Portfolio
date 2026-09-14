"use client";

import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  
  SiTailwindcss,
  SiSass,
  SiNodedotjs,
  SiPython,
  SiFastapi,
  SiDotnet,
  SiUmbraco,
  SiGit,
  SiGithub,
  SiGitlab,
  
  SiThreedotjs,
  SiGreensock,
  SiPostgresql,
  SiDocker,
  SiFigma,
} from "react-icons/si";

import { TbBrandCSharp } from "react-icons/tb";

import { Code2 } from "lucide-react";

interface ExpertiseRowProps {
  id: string;
  area: string;
  description: string;
  tools: string[];
  index?: number;
}

/*
 * Technology → Logo
 *
 * The names here should match the names inside
 * your EXPERTISE_DATA tools array.
 */
const TOOL_ICONS: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  React: SiReact,
  "React.js": SiReact,

  "Next.js": SiNextdotjs,
  NextJS: SiNextdotjs,

  TypeScript: SiTypescript,
  JavaScript: SiJavascript,

  HTML: SiHtml5,
  HTML5: SiHtml5,

 

  Tailwind: SiTailwindcss,
  "Tailwind CSS": SiTailwindcss,

  Sass: SiSass,
  SCSS: SiSass,

  Node: SiNodedotjs,
  "Node.js": SiNodedotjs,

  Python: SiPython,

  FastAPI: SiFastapi,

  ".NET": SiDotnet,
  "ASP.NET": SiDotnet,

  "C#": TbBrandCSharp,

  Umbraco: SiUmbraco,

  Git: SiGit,
  GitHub: SiGithub,
  GitLab: SiGitlab,



  "Three.js": SiThreedotjs,
  ThreeJS: SiThreedotjs,

  GSAP: SiGreensock,

  PostgreSQL: SiPostgresql,

  Docker: SiDocker,

  Figma: SiFigma,
};

export const ExpertiseRow = ({
  id,
  area,
  description,
  tools,
  index = 0,
}: ExpertiseRowProps) => {
  return (
    <article
      className="
        group relative
        overflow-hidden
        rounded-2xl
        border border-outline-variant/20
        bg-surface-container-low/40
        p-6 md:p-8
        transition-all duration-500
        hover:-translate-y-1
        hover:border-primary/30
        hover:bg-surface-container-low
      "
    >
      {/* Hover glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-24
          -top-24
          h-48
          w-48
          rounded-full
          bg-primary/10
          blur-3xl
          opacity-0
          transition-opacity duration-500
          group-hover:opacity-100
        "
      />

      {/* Top */}
      <div className="relative flex items-start justify-between gap-4 mb-7">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-primary">
              {id}
            </span>

            <span className="h-px w-8 bg-outline-variant/30" />
          </div>

          <h3
            className="
              text-2xl md:text-3xl
              font-bold
              tracking-tight
              text-on-surface
              transition-colors duration-300
              group-hover:text-primary
            "
          >
            {area}
          </h3>
        </div>

        {/* Number */}
        <span
          className="
            hidden sm:block
            text-5xl
            font-black
            tracking-tighter
            text-on-surface/[0.04]
            select-none
          "
        >
          0{index + 1}
        </span>
      </div>

      {/* Description */}
      {description && (
        <p
          className="
            relative
            mb-7
            max-w-xl
            text-sm
            leading-6
            text-on-surface-variant
          "
        >
          {description}
        </p>
      )}

      {/* Technologies */}
      <div className="relative grid grid-cols-2 sm:grid-cols-3 gap-3">
        {tools.map((tool) => {
          const Icon = TOOL_ICONS[tool] ?? Code2;

          return (
            <div
              key={tool}
              className="
                group/tool
                flex
                items-center
                gap-3
                rounded-xl
                border
                border-outline-variant/15
                bg-surface-container-low/70
                px-3
                py-3
                transition-all
                duration-300
                hover:border-primary/30
                hover:bg-primary/[0.04]
              "
            >
              {/* Logo container */}
              <div
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-outline-variant/15
                  bg-surface
                  text-on-surface-variant
                  transition-all
                  duration-300
                  group-hover/tool:text-primary
                  group-hover/tool:border-primary/20
                "
              >
                <Icon className="h-5 w-5" />
              </div>

              {/* Name */}
              <span
                className="
                  min-w-0
                  truncate
                  text-xs
                  font-semibold
                  text-on-surface-variant
                  transition-colors
                  duration-300
                  group-hover/tool:text-on-surface
                "
              >
                {tool}
              </span>
            </div>
          );
        })}
      </div>
    </article>
  );
};