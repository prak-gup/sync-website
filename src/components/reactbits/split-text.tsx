"use client";

import { useEffect, useRef } from "react";
import type React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SplitTextProps {
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: "chars" | "words" | "lines" | "words, chars";
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number;
  rootMargin?: string;
  textAlign?: "left" | "center" | "right" | "justify";
  onLetterAnimationComplete?: () => void;
}

export function SplitText({
  tag = "p",
  text,
  className = "",
  delay = 100,
  duration = 0.6,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
  onLetterAnimationComplete,
}: SplitTextProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const animationRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!containerRef.current || typeof window === "undefined") return;

    const container = containerRef.current;
    const elements = container.querySelectorAll(".split-element");

    // Create timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
      onComplete: onLetterAnimationComplete,
    });

    // Animate elements
    elements.forEach((element, index) => {
      tl.fromTo(
        element,
        from,
        {
          ...to,
          duration,
          ease,
          delay: index * (delay / 1000),
        },
        index * (delay / 1000)
      );
    });

    animationRef.current = tl;

    return () => {
      tl.kill();
    };
  }, [text, delay, duration, ease, from, to, threshold, rootMargin, onLetterAnimationComplete]);

  const splitText = (text: string, type: string) => {
    if (type === "chars") {
      return text.split("").map((char, index) => (
        <span key={index} className="split-element inline-block">
          {char === " " ? "\u00A0" : char}
        </span>
      ));
    } else if (type === "words") {
      return text.split(" ").map((word, index) => (
        <span key={index} className="split-element inline-block mr-1">
          {word}
        </span>
      ));
    } else if (type === "lines") {
      return text.split("\n").map((line, index) => (
        <div key={index} className="split-element block">
          {line}
        </div>
      ));
    } else if (type === "words, chars") {
      return text.split(" ").map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-1">
          {word.split("").map((char, charIndex) => (
            <span key={charIndex} className="split-element inline-block">
              {char}
            </span>
          ))}
        </span>
      ));
    }
    return text;
  };

  type AllowedTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  const Tag = tag as AllowedTag;

  return (
    <Tag className={className} style={{ textAlign }}>
      <span ref={containerRef}>
        {splitText(text, splitType)}
      </span>
    </Tag>
  );
}
