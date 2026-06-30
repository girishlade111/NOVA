import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/* ----------------------------------------------------------------
   Container — consistent max-width wrapper
----------------------------------------------------------------- */
export function Container({
  children,
  className,
  size = "default",
}: {
  children: ReactNode;
  className?: string;
  size?: "default" | "wide" | "narrow";
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-8 lg:px-12",
        size === "default" && "max-w-7xl",
        size === "wide" && "max-w-[88rem]",
        size === "narrow" && "max-w-4xl",
        className
      )}
    >
      {children}
    </div>
  );
}

/* ----------------------------------------------------------------
   Section — vertical rhythm + eyebrow
----------------------------------------------------------------- */
export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("relative py-20 sm:py-28 lg:py-32", className)}>
      {children}
    </section>
  );
}

/* ----------------------------------------------------------------
   Eyebrow — small label tag above headings
----------------------------------------------------------------- */
export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-ink/15 bg-card/60 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-muted-warm backdrop-blur",
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-coral" />
      {children}
    </span>
  );
}
