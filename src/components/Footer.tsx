"use client";
import React from 'react';
import { CONTACT_DATA } from "@/constants";

const SOCIAL_ICONS = [
  {
    name: "LinkedIn",
    href: CONTACT_DATA.linkedin,
    svg: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: CONTACT_DATA.github,
    svg: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "X (Twitter)",
    href: CONTACT_DATA.twitter,
    svg: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.933zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: `https://wa.me/${CONTACT_DATA.whatsapp.replace('+', '')}`,
    svg: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.417-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.305 1.652zm6.599-3.819c1.614.96 3.204 1.488 4.887 1.488 5.235 0 9.497-4.263 9.499-9.498 0-2.54-.988-4.927-2.782-6.72s-4.183-2.783-6.722-2.783c-5.239 0-9.504 4.263-9.507 9.502-.001 1.77.481 3.434 1.411 4.939l-1.005 3.676 3.769-.988zm11.526-7.078c-.163-.082-1.074-.531-1.24-.592-.165-.06-.285-.09-.404.091-.119.181-.464.592-.569.702-.104.11-.208.124-.37.043-.162-.082-.686-.253-1.306-.806-.483-.43-.808-.961-.903-1.124-.095-.163-.01-.251.071-.332.074-.073.163-.19.245-.286.083-.095.11-.163.165-.272.055-.11.027-.204-.014-.286-.041-.082-.404-.992-.553-1.353-.145-.354-.294-.306-.404-.311-.104-.005-.224-.006-.344-.006-.12 0-.314.045-.479.224-.164.181-.626.612-.626 1.493 0 .882.641 1.735.731 1.856.09.12 1.261 1.925 3.055 2.702.427.185.76.295 1.019.378.429.135.819.116 1.127.07.344-.051 1.074-.439 1.224-.863.15-.424.15-.788.104-.863-.045-.075-.164-.112-.327-.194z" />
      </svg>
    ),
  },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#f0f2f5] py-24 px-6 border-t border-outline-variant/10">
      <div className="max-w-[1120px] mx-auto">
        <div className="flex flex-col items-center text-center space-y-12">
          
          {/* Brand Heading */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-on-surface tracking-tighter">
              Abhishek<span className="text-primary">.</span>
            </h2>
            <p className="text-on-surface-variant font-medium max-w-sm mx-auto text-sm leading-relaxed">
              Designed with purpose. Built with precision. 
              Available for world-class engineering challenges.
            </p>
          </div>

          {/* Social Icons Hub */}
          <div className="flex items-center gap-4">
            {SOCIAL_ICONS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-2xl bg-surface-container-low text-on-surface-variant hover:bg-primary hover:text-white transition-all duration-500 shadow-sm"
                aria-label={social.name}
              >
                {social.svg}
              </a>
            ))}
          </div>

          {/* Bottom metadata */}
          <div className="w-full pt-12 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] font-bold text-on-surface-variant tracking-[0.3em] uppercase opacity-50">
              © {currentYear} Software Engineer
            </p>
            <div className="flex items-center gap-6">
              <span className="text-[10px] font-bold text-on-surface-variant tracking-[0.3em] uppercase opacity-50">
                Next.js 15
              </span>
              <span className="text-[10px] font-bold text-on-surface-variant tracking-[0.3em] uppercase opacity-50">
                Tailwind v4
              </span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};