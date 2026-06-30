"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { Magnetic } from "./motion";
import { ArrowUpRight } from "lucide-react";

type Variant = "primary" | "outline" | "lime";

interface AnimatedButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: Variant;
  withArrow?: boolean;
  magnetic?: boolean;
  children: React.ReactNode;
}

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-tight transition-colors duration-300 overflow-hidden select-none";

const variants: Record<Variant, string> = {
  primary: "btn-ink",
  outline: "border border-ink/20 text-ink hover:border-ink",
  lime: "bg-lime text-ink",
};

export function AnimatedButton({
  variant = "primary",
  withArrow = false,
  magnetic = true,
  className,
  children,
  ...props
}: AnimatedButtonProps) {
  const inner = (
    <motion.button
      whileTap={{ scale: 0.96 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={cn(base, variants[variant], className)}
      {...props}
    >
      {/* hover sweep */}
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-coral transition-transform duration-500 ease-out group-hover:translate-x-0" />
      <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-ink">
        {children}
        {withArrow && (
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        )}
      </span>
    </motion.button>
  );

  return magnetic ? <Magnetic strength={0.25}>{inner}</Magnetic> : inner;
}
