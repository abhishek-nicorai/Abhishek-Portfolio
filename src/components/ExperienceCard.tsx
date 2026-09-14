
"use client";

import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
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
  SiTailwindcss,
  SiFigma,
} from "react-icons/si";

import { Code2 } from "lucide-react";

interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string[];
  skills?: string[];
}

interface ExperienceCardProps {
  experience: Experience;
  index: number;
  isLatest?: boolean;
}

/*
 * Technology → Logo
 */
const SKILL_ICONS: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  React: SiReact,
  "React.js": SiReact,

  "Next.js": SiNextdotjs,
  NextJS: SiNextdotjs,

  TypeScript: SiTypescript,
  JavaScript: SiJavascript,

  "Node.js": SiNodedotjs,
  Node: SiNodedotjs,

  Python: SiPython,
  FastAPI: SiFastapi,

  ".NET": SiDotnet,
  "ASP.NET": SiDotnet,

  Umbraco: SiUmbraco,

  Git: SiGit,
  GitHub: SiGithub,
  GitLab: SiGitlab,

 

  "Three.js": SiThreedotjs,
  ThreeJS: SiThreedotjs,

  GSAP: SiGreensock,

  PostgreSQL: SiPostgresql,

  Docker: SiDocker,

  "Tailwind CSS": SiTailwindcss,
  Tailwind: SiTailwindcss,

  Figma: SiFigma,
};

export const ExperienceCard = ({
  experience,
  index,
  isLatest = false,
}: ExperienceCardProps) => {
  return (
    <article className="group relative md:grid md:grid-cols-[208px_1fr] md:gap-48">

      {/* ------------------------------------------------
          LEFT SIDE — DATE / NUMBER
      ------------------------------------------------ */}
      <div className="relative mb-5 flex items-center gap-4 md:mb-0 md:block">

        {/* Timeline Number */}
        <div
          className="
            relative
            z-10
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-outline-variant/30
            bg-surface
            text-xs
            font-mono
            font-bold
            text-primary
            transition-all
            duration-500
            group-hover:border-primary/50
            group-hover:bg-primary
            group-hover:text-white
            md:absolute
            md:left-[45px]
            md:top-30
            md:-translate-x-1/2
          "
        >
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Duration */}
        <div className="md:pt-1">
          <time
            className="
              text-[11px]
              font-bold
              uppercase
              tracking-[0.12em]
              text-on-surface-variant
            "
          >
            {experience.duration}
          </time>

          {isLatest && (
            <div className="mt-2 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-primary
                    opacity-60
                  "
                />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>

              <span className="text-[9px] font-bold uppercase tracking-widest text-primary">
                Current
              </span>
            </div>
          )}
        </div>
      </div>

      {/* ------------------------------------------------
          RIGHT SIDE — EXPERIENCE
      ------------------------------------------------ */}
      <div
        className="
          relative
          overflow-hidden
          rounded-2xl
          border
          border-outline-variant/20
          bg-white
          p-6
          transition-all
          duration-500
          hover:-translate-y-1
          hover:border-primary/25
          hover:shadow-[0_24px_60px_-25px_rgba(0,0,0,0.15)]
          md:py-8 md:px-16
        "
      >
        {/* Subtle hover accent */}
        <div
          className="
            absolute
            left-0
            top-0
            h-full
            w-1
            origin-top
            scale-y-0
            bg-primary
            transition-transform
            duration-500
            group-hover:scale-y-100
          "
        />

        {/* Header */}
        <div className="mb-7 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-primary">
              {experience.company}
            </p>

            <h3
              className="
                text-2xl
                font-black
                tracking-tight
                text-on-surface
                transition-colors
                duration-300
                group-hover:text-primary
                md:text-3xl
              "
            >
              {experience.role}
            </h3>
          </div>

          {/* Experience index */}
          <span
            className="
              hidden
              select-none
              text-6xl
              font-black
              leading-none
              tracking-[-0.08em]
              text-on-surface/[0.04]
              sm:block
            "
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Description */}
        <ul className="mb-8 space-y-4">
          {experience.description.map((point, pointIndex) => (
            <li
              key={pointIndex}
              className="
                flex
                gap-3
                text-sm
                leading-6
                text-on-surface-variant
              "
            >
              <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary/50" />

              <span>{point}</span>
            </li>
          ))}
        </ul>

        {/* Divider */}
        {experience.skills && experience.skills.length > 0 && (
          <div className="border-t border-outline-variant/15 pt-6">

            <p className="mb-4 text-[9px] font-bold uppercase tracking-[0.2em] text-on-surface-variant/50">
              Technologies
            </p>

            <div className="flex flex-wrap gap-2">
              {experience.skills.map((skill) => {
                const Icon = SKILL_ICONS[skill] ?? Code2;

                return (
                  <div
                    key={skill}
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-lg
                      border
                      border-outline-variant/15
                      bg-surface-container-low/70
                      px-3
                      py-2
                      transition-all
                      duration-300
                      hover:border-primary/25
                      hover:bg-primary/[0.04]
                    "
                  >
                    <Icon className="h-4 w-4 text-on-surface-variant transition-colors duration-300 hover:text-primary" />

                    <span className="text-[10px] font-semibold text-on-surface-variant">
                      {skill}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </article>
  );
};
