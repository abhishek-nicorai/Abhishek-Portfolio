"use client";

import React, { useState } from "react";
import { NAV_LINKS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-outline-variant/5">
      <div className="flex justify-between items-center h-20 max-w-[1120px] mx-auto px-6 md:px-gutter">
        
        {/* Logo/Brand */}
        <div className="text-2xl font-extrabold text-on-surface tracking-tighter">
          Abhishek Tn
        </div>

        {/* Desktop Nav - Dynamically mapped from Constants */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-semibold text-on-surface-variant hover:text-primary transition-all tracking-widest uppercase"
            >
              {link.label}
            </a>
          ))}
          
          <a
            href="/resume.pdf"
            className="ml-4 px-6 py-2.5 bg-[#0F172A] text-white rounded-full text-xs font-bold hover:bg-black transition-all shadow-sm"
          >
            RESUME
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-on-surface-variant"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="material-symbols-outlined">
            {isMobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-outline-variant/10 p-6 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm font-semibold text-on-surface-variant"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};