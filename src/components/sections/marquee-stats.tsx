"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Container } from "@/components/site/layout";
import { MARQUEE_WORDS, STATS } from "@/lib/site";
import { useGsapReveal } from "@/lib/gsap";

function MarqueeRow({
  words,
  reverse = false,
}: {
  words: readonly string[];
  reverse?: boolean;
}) {
  const items = [...words, ...words];
  return (
    <div className="flex w-max">
      <div
        className={`flex shrink-0 items-center gap-8 pr-8 ${
          reverse ? "animate-marquee-rev" : "animate-marquee"
        }`}
      >
        {items.map((word, i) => (
          <div key={i} className="flex items-center gap-8">
            <span className="font-display text-2xl font-semibold tracking-tight text-ink/80 sm:text-3xl">
              {word}
            </span>
            <span className="text-coral">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Marquee() {
  return (
    <section className="relative overflow-hidden border-y border-ink/10 bg-card/40 py-8">
      <div className="flex flex-col gap-3">
        <MarqueeRow words={MARQUEE_WORDS} />
      </div>
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-canvas to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-canvas to-transparent" />
    </section>
  );
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toString());

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
    });
    return controls.stop;
  }, [inView, value, count]);

  return (
    <span ref={ref} className="inline-flex items-baseline">
      <motion.span>{rounded}</motion.span>
      <span className="text-coral">{suffix}</span>
    </span>
  );
}

export function Stats() {
  const ref = useGsapReveal<HTMLDivElement>({ stagger: 0.12 });

  return (
    <section className="relative py-20 sm:py-24">
      <Container>
        <div
          ref={ref}
          className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 lg:grid-cols-4"
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              data-reveal
              className="group relative bg-canvas p-8 transition-colors duration-300 hover:bg-card sm:p-10"
            >
              <div className="font-display text-5xl font-bold tracking-tight text-ink sm:text-6xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-3 text-sm text-muted-warm">{stat.label}</div>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-coral transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
