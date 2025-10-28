"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface AnimatedContentProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  duration?: number;
  ease?: string;
  initialOpacity?: number;
  initialScale?: number;
  threshold?: number;
  delay?: number;
  className?: string;
  trigger?: boolean;
}

export function AnimatedContent({
  children,
  direction = "up",
  distance = 50,
  duration = 0.8,
  ease = "power3.out",
  initialOpacity = 0,
  initialScale = 1,
  threshold = 0.1,
  delay = 0,
  className = "",
  trigger = true,
}: AnimatedContentProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!elementRef.current || typeof window === "undefined" || !trigger) return;

    const element = elementRef.current;

    // Set initial position based on direction
    const initialPosition: gsap.TweenVars = {
      opacity: initialOpacity,
      scale: initialScale,
    };

    switch (direction) {
      case "up":
        initialPosition.y = distance;
        break;
      case "down":
        initialPosition.y = -distance;
        break;
      case "left":
        initialPosition.x = distance;
        break;
      case "right":
        initialPosition.x = -distance;
        break;
    }

    // Set initial state
    gsap.set(element, initialPosition);

    // Create animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate to final state
    const finalPosition: gsap.TweenVars = {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      duration,
      ease,
      delay: delay / 1000,
    };

    tl.to(element, finalPosition);

    animationRef.current = tl;

    return () => {
      tl.kill();
    };
  }, [direction, distance, duration, ease, initialOpacity, initialScale, threshold, delay, trigger]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
