"use client";
import React, { useState, useEffect } from "react";
import { NAV_LINKS, CONTACT_DATA } from "@/constants";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isOpen]);

  return (
    <>
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled ? "py-6 bg-white/50 backdrop-blur-xl border-outline-variant/10" : "py-6 bg-transparent"
      }`}>
        <div className="max-w-[1120px] mx-auto px-6 flex justify-between items-center">
          
          {/* Logo */}
          <a href="#home" className="text-xl font-black text-on-surface tracking-tighter hover:opacity-70 transition-opacity">
            Abhishek Tn<span className="text-primary">.</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[12px] font-bold text-on-surface-variant hover:text-primary transition-all tracking-[0.2em] uppercase"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              className="px-6 py-2.5 bg-on-surface text-white rounded-full text-[10px] font-bold tracking-[0.2em] hover:bg-primary transition-all"
            >
              RESUME
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(true)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-on-surface"
          >
            <span className="material-symbols-outlined text-[28px]">menu</span>
          </button>
        </div>
      </nav>

      {/* --- MOBILE FULL-SCREEN MENU --- */}
      <div className={`fixed inset-0 z-[110] bg-on-surface transition-all duration-700 ease-in-out ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      }`}>
        {/* Close Button */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center text-white/50 hover:text-white"
        >
          <span className="material-symbols-outlined text-[32px]">close</span>
        </button>

        <div className="h-full flex flex-col justify-center px-10 space-y-12">
          {/* Mobile Nav Links */}
          <div className="space-y-6">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block text-4xl font-bold text-white tracking-tighter transition-all duration-500 delay-[${i * 100}ms] ${
                  isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Socials Footer */}
          <div className={`pt-12 border-t border-white/10 flex gap-8 transition-all duration-700 delay-500 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}>
            <a href={CONTACT_DATA.linkedin} className="text-white/50 hover:text-primary font-bold text-xs tracking-widest uppercase">LinkedIn</a>
            <a href={CONTACT_DATA.github} className="text-white/50 hover:text-primary font-bold text-xs tracking-widest uppercase">GitHub</a>
          </div>
        </div>
      </div>
    </>
  );
};