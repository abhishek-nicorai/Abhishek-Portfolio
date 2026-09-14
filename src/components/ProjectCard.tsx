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
  SiPostgresql,
  SiGit,
  SiGithub,
  SiThreedotjs,
  SiTailwindcss,
  SiFigma,
} from "react-icons/si";

import { ArrowUpRight, ExternalLink, Code2 } from "lucide-react";

import { Project } from "@/types";

/*
 * Technology → Logo
 */
const TECH_ICONS: Record<
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

  PostgreSQL: SiPostgresql,

  Git: SiGit,
  GitHub: SiGithub,

  "Three.js": SiThreedotjs,

  Tailwind: SiTailwindcss,
  "Tailwind CSS": SiTailwindcss,

  Figma: SiFigma,
};

export const ProjectCard = ({
  title,
  description,
  techStack,
  imageUrl,
  githubUrl,
  liveUrl,
}: Project) => {
  return (
    <article
      className="
        group
        relative
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-[1.75rem]
        border
        border-outline-variant/20
        bg-white
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-primary/20
        hover:shadow-[0_30px_70px_-25px_rgba(0,0,0,0.18)]
      "
    >
      {/* ------------------------------------------
          PROJECT IMAGE
      ------------------------------------------ */}
      <div className="relative overflow-hidden p-3 pb-0">
        <div className="relative aspect-[16/9] overflow-hidden rounded-[1.25rem] bg-surface-container-low">

          <img
            src={imageUrl}
            alt={title}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-700
              ease-out
              group-hover:scale-[1.04]
            "
          />

          {/* Dark overlay */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/45
              via-black/0
              to-transparent
              opacity-60
              transition-opacity
              duration-500
              group-hover:opacity-80
            "
          />

          {/* Project label */}
          <div className="absolute left-4 top-4">
            <span
              className="
                rounded-full
                border
                border-white/20
                bg-black/30
                px-3
                py-1.5
                text-[9px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-white
                backdrop-blur-md
              "
            >
              Project
            </span>
          </div>

          {/* Open project */}
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${title}`}
            className="
              absolute
              bottom-4
              right-4
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-white
              text-on-surface
              opacity-0
              shadow-lg
              transition-all
              duration-500
              group-hover:opacity-100
              hover:bg-primary
              hover:text-white
            "
          >
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* ------------------------------------------
          CONTENT
      ------------------------------------------ */}
      <div className="flex flex-1 flex-col p-6 md:p-7">

        {/* Project meta */}
        <div className="mb-5 flex items-center justify-between">
          <span
            className="
              text-[10px]
              font-mono
              font-bold
              tracking-[0.2em]
              text-primary
            "
          >
            CASE STUDY
          </span>

          <span
            className="
              text-[10px]
              font-mono
              text-on-surface-variant/40
            "
          >
            ↗ 01
          </span>
        </div>

        {/* Title */}
        <h3
          className="
            mb-3
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
          {title}
        </h3>

        {/* Description */}
        <p
          className="
            mb-7
            max-w-xl
            text-sm
            leading-6
            text-on-surface-variant
            md:text-[15px]
          "
        >
          {description}
        </p>

        {/* ------------------------------------------
            TECHNOLOGIES
        ------------------------------------------ */}
        <div className="mb-7">
          <p
            className="
              mb-3
              text-[9px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-on-surface-variant/50
            "
          >
            Built with
          </p>

          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => {
              const Icon = TECH_ICONS[tech] ?? Code2;

              return (
                <div
                  key={tech}
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-lg
                    border
                    border-outline-variant/15
                    bg-surface-container-low/60
                    px-2.5
                    py-2
                    transition-all
                    duration-300
                    hover:border-primary/25
                    hover:bg-primary/[0.04]
                  "
                >
                  <Icon
                    className="
                      h-3.5
                      w-3.5
                      text-on-surface-variant
                      transition-colors
                      duration-300
                    "
                  />

                  <span
                    className="
                      text-[10px]
                      font-semibold
                      text-on-surface-variant
                    "
                  >
                    {tech}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ------------------------------------------
            ACTIONS
        ------------------------------------------ */}
        <div
          className="
            mt-auto
            flex
            items-center
            justify-between
            border-t
            border-outline-variant/15
            pt-5
          "
        >
          {/* Live */}
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group/link
              flex
              items-center
              gap-2
              text-xs
              font-bold
              uppercase
              tracking-[0.12em]
              text-on-surface
              transition-colors
              hover:text-primary
            "
          >
            <ExternalLink className="h-4 w-4" />

            <span>Live Demo</span>

            <ArrowUpRight
              className="
                h-3.5
                w-3.5
                transition-transform
                duration-300
                group-hover/link:-translate-y-0.5
                group-hover/link:translate-x-0.5
              "
            />
          </a>

          {/* GitHub */}
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group/link
              flex
              items-center
              gap-2
              text-xs
              font-bold
              uppercase
              tracking-[0.12em]
              text-on-surface-variant
              transition-colors
              hover:text-primary
            "
          >
            <SiGithub className="h-4 w-4" />

            <span>Source</span>
          </a>
        </div>
      </div>
    </article>
  );
};