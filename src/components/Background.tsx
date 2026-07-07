"use client";
import { useEffect, useRef } from "react";

export const Background = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top = `${e.clientY}px`;
        glowRef.current.style.opacity = "1";
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div 
        ref={glowRef}
        className="absolute w-[400px] h-[400px] rounded-full opacity-0 transition-opacity duration-300 -translate-x-1/2 -translate-y-1/2"
        style={{
          background: "radial-gradient(circle, rgba(0, 82, 255, 0.05) 0%, rgba(255, 255, 255, 0) 70%)"
        }}
      />
    </div>
  );
};