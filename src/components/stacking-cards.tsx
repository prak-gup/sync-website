"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";

interface StackingCardsProps {
  children: ReactNode;
  className?: string;
}

interface StackingCardProps {
  children: ReactNode;
  index: number;
  total: number;
  className?: string;
}

export function StackingCards({ children, className }: StackingCardsProps) {
  return (
    <div className={cn("relative", className)}>
      {children}
    </div>
  );
}

export function StackingCard({
  children,
  index,
  total,
  className,
}: StackingCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  // Calculate scale and opacity based on card position
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [0.95 + (index * 0.01), 1]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.5, 0.8, 1]
  );

  // Calculate position - each card starts lower and moves up
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [50 + (index * 20), 0]
  );

  // Each subsequent card should have higher z-index so it stacks on top
  const zIndex = index + 1;

  return (
    <motion.div
      ref={ref}
      style={{
        scale,
        opacity,
        y,
        zIndex,
      }}
      className={cn(
        "sticky top-24 mb-12",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
