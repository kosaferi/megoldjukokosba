"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: "fadeIn" | "fadeInUp" | "fadeInDown" | "slideInLeft" | "slideInRight" | "scaleIn";
  delay?: number;
  duration?: number;
  threshold?: number;
}

const animationClasses = {
  fadeIn: "opacity-0 translate-y-4",
  fadeInUp: "opacity-0 translate-y-8",
  fadeInDown: "opacity-0 -translate-y-8",
  slideInLeft: "opacity-0 -translate-x-8",
  slideInRight: "opacity-0 translate-x-8",
  scaleIn: "opacity-0 scale-95",
};

const visibleClasses = {
  fadeIn: "opacity-100 translate-y-0",
  fadeInUp: "opacity-100 translate-y-0",
  fadeInDown: "opacity-100 translate-y-0",
  slideInLeft: "opacity-100 translate-x-0",
  slideInRight: "opacity-100 translate-x-0",
  scaleIn: "opacity-100 scale-100",
};

export default function ScrollReveal({
  children,
  className = "",
  animation = "fadeInUp",
  delay = 0,
  duration = 600,
  threshold = 0.1,
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold });

  return (
    <div
      ref={ref}
      className={`transition-all ${className} ${
        isVisible ? visibleClasses[animation] : animationClasses[animation]
      }`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {children}
    </div>
  );
}
