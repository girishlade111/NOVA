"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/site/layout";
import { AnimatedButton } from "@/components/site/animated-button";
import { Magnetic } from "@/components/site/motion";
import { useGsapParallax } from "@/lib/gsap";

export function CTA() {
  const blobRef = useGsapParallax<HTMLDivElement>(0.15);

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* dark panel */}
      <div className="absolute inset-0 -z-10 bg-ink" />

      {/* aurora */}
      <div
        ref={blobRef}
        className="blob pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 bg-coral/60"
      />
      <div className="blob pointer-events-none absolute -bottom-24 -right-10 h-[26rem] w-[26rem] bg-lime/40" />
      <div className="blob pointer-events-none absolute -top-20 -left-10 h-[22rem] w-[22rem] bg-coral-soft/30" />

      <Container>
        <div className="relative mx-auto max-w-4xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-canvas/20 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-canvas/70"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-lime" />
            Booking Q3 — 2 slots left
          </motion.span>

          <h2 className="mt-7 font-display text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.04em] text-canvas text-balance">
            Let&rsquo;s build something{" "}
            <span className="italic text-coral">unforgettable.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base text-canvas/70 sm:text-lg">
            Tell us what you&rsquo;re making. We&rsquo;ll bring the craft, the
            strategy, and the obsession with detail.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <AnimatedButton variant="lime" withArrow>
              Start a project
            </AnimatedButton>
            <Magnetic strength={0.2}>
              <a
                href="mailto:hello@nova.studio"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-canvas/25 px-6 py-3 text-sm font-medium text-canvas transition-colors duration-300 hover:bg-canvas/10"
              >
                hello@nova.studio
              </a>
            </Magnetic>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
