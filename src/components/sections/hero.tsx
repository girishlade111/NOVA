"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, Star, Play } from "lucide-react";
import { Container } from "@/components/site/layout";
import { AnimatedButton } from "@/components/site/animated-button";
import { Magnetic } from "@/components/site/motion";
import { useGsapParallax } from "@/lib/gsap";

const headlineLines = [
  ["We", "craft", "brands"],
  ["that", "refuse", "to"],
  ["stand", "still."],
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const blob1Ref = useGsapParallax<HTMLDivElement>(0.18);
  const blob2Ref = useGsapParallax<HTMLDivElement>(-0.12);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden pt-32 pb-20 sm:pt-40"
    >
      {/* Aurora blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          ref={blob1Ref}
          className="blob absolute -top-32 -left-24 h-[40rem] w-[40rem] bg-coral/60"
        />
        <div
          ref={blob2Ref}
          className="blob absolute top-[15%] -right-28 h-[36rem] w-[36rem] bg-lime/55"
        />
        <div className="blob absolute bottom-[-15%] left-1/3 h-[28rem] w-[28rem] bg-coral-soft/45" />
      </div>

      {/* Grid texture */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #14110f0d 1px, transparent 1px), linear-gradient(to bottom, #14110f0d 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 35%, black, transparent)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 35%, black, transparent)",
        }}
      />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative"
      >
        <Container size="wide">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-card/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-muted-warm backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-coral opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-coral" />
              </span>
              Independent creative studio — est. 2013
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="mx-auto mt-8 max-w-5xl text-center font-display text-[clamp(2.75rem,8vw,7rem)] font-bold leading-[0.95] tracking-[-0.04em] text-balance">
            {headlineLines.map((line, lineIdx) => (
              <span key={lineIdx} className="block overflow-hidden">
                <span className="inline-flex flex-wrap justify-center gap-x-[0.25em]">
                  {line.map((word, wordIdx) => {
                    const isAccent =
                      (lineIdx === 0 && word === "craft") ||
                      (lineIdx === 2 && word === "still.");
                    return (
                      <span key={wordIdx} className="inline-block overflow-hidden">
                        <motion.span
                          initial={{ y: "110%" }}
                          animate={{ y: "0%" }}
                          transition={{
                            duration: 0.9,
                            delay: 0.15 + lineIdx * 0.12 + wordIdx * 0.05,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className={
                            isAccent
                              ? "inline-block italic font-medium text-coral"
                              : "inline-block"
                          }
                        >
                          {word}
                        </motion.span>
                      </span>
                    );
                  })}
                </span>
              </span>
            ))}
          </h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mx-auto mt-8 max-w-xl text-center text-base text-muted-warm sm:text-lg text-balance"
          >
            NOVA is an independent studio building brand systems, digital products,
            and motion design for teams who want to be unforgettable.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <AnimatedButton variant="primary" withArrow>
              Start a project
            </AnimatedButton>
            <AnimatedButton variant="outline" magnetic={false}>
              <Play className="h-3.5 w-3.5 fill-current" />
              Watch showreel
            </AnimatedButton>
          </motion.div>

          {/* Floating proof bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.05 }}
            className="mx-auto mt-16 flex max-w-2xl flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-muted-warm"
          >
            <Magnetic strength={0.2} className="flex items-center gap-2">
              <div className="flex">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-coral text-coral"
                  />
                ))}
              </div>
              <span className="font-medium text-ink">4.9/5</span>
              <span>from 90+ clients</span>
            </Magnetic>
            <span className="hidden h-4 w-px bg-ink/15 sm:block" />
            <Magnetic strength={0.2} className="flex items-center gap-2">
              <span className="font-display text-lg font-semibold text-ink">140+</span>
              <span>projects shipped worldwide</span>
            </Magnetic>
          </motion.div>
        </Container>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-warm sm:flex"
      >
        <span className="text-[0.7rem] uppercase tracking-[0.25em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="grid h-9 w-9 place-items-center rounded-full border border-ink/15"
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.div>
    </section>
  );
}
