"use client";

import React, { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { NAV_LINKS, CONTACT_DATA } from "@/constants";
// import { SiGithub, SiLinkedin } from "react-icons/si";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* ================= DESKTOP / MAIN NAVBAR ================= */}
      <header className="fixed top-0 left-0 w-full z-[100] px-4 md:px-6 pointer-events-none">
        <nav
          className={`
            pointer-events-auto
            max-w-[1120px]
            mx-auto
            transition-all
            duration-500
            ease-out
            ${
              scrolled
                ? "mt-4 rounded-full bg-white/80 px-5 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.06)] backdrop-blur-xl"
                : "mt-0 px-2 py-6"
            }
          `}
        >
          <div className="flex items-center justify-between">
            {/* ================= LOGO ================= */}
            <a
              href="#home"
              onClick={closeMenu}
              className="
                group
                text-lg
                md:text-xl
                font-black
                tracking-tighter
                text-on-surface
              "
            >
              Abhishek Tn
              <span className="text-primary transition-all duration-300 group-hover:ml-0.5">
                .
              </span>
            </a>

            {/* ================= DESKTOP NAV ================= */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="
                    group
                    relative
                    py-2
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-on-surface-variant
                    transition-colors
                    duration-300
                    hover:text-on-surface
                  "
                >
                  {link.label}

                  {/* Animated underline */}
                  <span
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-px
                      w-0
                      bg-primary
                      transition-all
                      duration-300
                      group-hover:w-full
                    "
                  />
                </a>
              ))}

              {/* Resume */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-on-surface
                  px-5
                  py-2.5
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-white
                  transition-all
                  duration-300
                  hover:bg-primary
                  hover:shadow-lg
                "
              >
                Resume

                <ArrowUpRight
                  size={14}
                  strokeWidth={2}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </a>
            </div>

            {/* ================= MOBILE BUTTON ================= */}
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              aria-label="Open navigation menu"
              className="
                md:hidden
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-outline-variant/30
                text-on-surface
                transition-all
                duration-300
                hover:border-primary
                hover:text-primary
              "
            >
              <Menu size={20} strokeWidth={2} />
            </button>
          </div>
        </nav>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`
          fixed
          inset-0
          z-[110]
          bg-on-surface
          transition-transform
          duration-500
          ease-[cubic-bezier(0.76,0,0.24,1)]
          ${
            isOpen
              ? "translate-y-0"
              : "-translate-y-full"
          }
        `}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-6">
          <a
            href="#home"
            onClick={closeMenu}
            className="text-xl font-black tracking-tighter text-white"
          >
            Abhishek Tn
            <span className="text-primary">.</span>
          </a>

          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close navigation menu"
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              text-white/60
              transition-all
              duration-300
              hover:border-primary
              hover:text-white
            "
          >
            <X size={22} strokeWidth={2} />
          </button>
        </div>

        {/* Mobile links */}
        <div className="flex h-[calc(100%-90px)] flex-col justify-between px-6 pb-10">
          <div className="flex flex-col justify-center flex-1">
            <div className="mb-8">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">
                Navigation
              </span>
            </div>

            <div className="space-y-2">
              {NAV_LINKS.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  className="
                    group
                    flex
                    items-center
                    gap-5
                    border-b
                    border-white/10
                    py-5
                    text-white
                    transition-all
                    duration-300
                    hover:border-primary
                  "
                >
                  <span
                    className="
                      text-[10px]
                      font-mono
                      text-white/30
                      transition-colors
                      group-hover:text-primary
                    "
                  >
                    0{index + 1}
                  </span>

                  <span
                    className="
                      text-3xl
                      font-bold
                      tracking-tighter
                      transition-all
                      duration-300
                      group-hover:translate-x-2
                      group-hover:text-primary
                    "
                  >
                    {link.label}
                  </span>

                  <ArrowUpRight
                    size={20}
                    className="
                      ml-auto
                      text-white/20
                      transition-all
                      duration-300
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                      group-hover:text-primary
                    "
                  />
                </a>
              ))}
            </div>

            {/* Resume */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="
                mt-8
                flex
                items-center
                justify-center
                gap-2
                rounded-full
                bg-primary
                px-6
                py-4
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-white
                transition-all
                duration-300
                hover:bg-white
                hover:text-on-surface
              "
            >
              View Resume
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Social links */}
          <div className="border-t border-white/10 pt-6">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/30">
                Connect
              </span>

              <div className="flex items-center gap-5">
                <a
                  href={CONTACT_DATA.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-white/50 transition-colors hover:text-primary"
                >
                  {/* <SiLinkedin size={18} /> */}
                </a>

                <a
                  href={CONTACT_DATA.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-white/50 transition-colors hover:text-primary"
                >
                  {/* <SiGithub size={18} /> */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};