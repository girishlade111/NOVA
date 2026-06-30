"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/* ----------------------------------------------------------------
   Reveal — Framer Motion scroll reveal wrapper
----------------------------------------------------------------- */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ----------------------------------------------------------------
   Stagger — container + item variants for list reveals
----------------------------------------------------------------- */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ----------------------------------------------------------------
   Magnetic — wrapper that pulls content toward the cursor
----------------------------------------------------------------- */
export function Magnetic({
  children,
  className,
  strength = 0.35,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  }

  function reset() {
    const el = ref.current;
    if (el) el.style.transform = "translate(0px, 0px)";
  }

  return (
    <div
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={cn("inline-block transition-transform duration-300 ease-out will-change-transform", className)}
      ref={ref}
    >
      {children}
    </div>
  );
}

/* ----------------------------------------------------------------
   AnimatedUnderline — link with a grow-from-left underline
----------------------------------------------------------------- */
export function AnimatedUnderline({
  children,
  className,
  color = "bg-coral",
}: {
  children: ReactNode;
  className?: string;
  color?: string;
}) {
  return (
    <span className={cn("group relative inline-block", className)}>
      {children}
      <span
        className={cn(
          "absolute left-0 -bottom-0.5 h-[2px] w-0 transition-all duration-300 ease-out group-hover:w-full",
          color
        )}
      />
    </span>
  );
}
