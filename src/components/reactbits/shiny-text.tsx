"use client";

import { useEffect, useRef } from "react";
import type React from "react";
import { gsap } from "gsap";

interface ShinyTextProps {
  text: string;
  className?: string;
  duration?: number;
  delay?: number;
  color?: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
}

export function ShinyText({
  text,
  className = "",
  duration = 2,
  delay = 0,
  color = "#ffffff",
  tag = "span",
}: ShinyTextProps) {
  const textRef = useRef<HTMLSpanElement>(null);
  const animationRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!textRef.current || typeof window === "undefined") return;

    const element = textRef.current;

    // Create the shiny effect animation
    const tl = gsap.timeline({
      delay: delay / 1000,
      repeat: -1,
      repeatDelay: 1,
    });

    // Create a pseudo-element for the shine effect
    const shineElement = document.createElement("div");
    shineElement.style.cssText = `
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, ${color}, transparent);
      opacity: 0.8;
      pointer-events: none;
    `;
    
    element.style.position = "relative";
    element.style.overflow = "hidden";
    element.appendChild(shineElement);

    // Animate the shine effect
    tl.to(shineElement, {
      left: "100%",
      duration,
      ease: "power2.inOut",
    });

    animationRef.current = tl;

    return () => {
      tl.kill();
      if (shineElement.parentNode) {
        shineElement.parentNode.removeChild(shineElement);
      }
    };
  }, [text, duration, delay, color]);

  type AllowedTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  const Tag = tag as AllowedTag;

  return (
    <Tag className={className}>
      <span ref={textRef}>{text}</span>
    </Tag>
  );
}
