"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container, Eyebrow, Section } from "@/components/site/layout";
import { FEATURES, type Feature } from "@/lib/site";
import { staggerContainer, staggerItem } from "@/components/site/motion";
import { cn } from "@/lib/utils";

const accentMap = {
  coral: "bg-coral text-ink",
  lime: "bg-lime text-ink",
  ink: "btn-ink",
} as const;

function FeatureCard({ feature }: { feature: Feature }) {
  const Icon = feature.icon;
  return (
    <motion.div
      variants={staggerItem}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-ink/10 bg-card p-7 transition-all duration-500 hover:border-ink/20 hover:shadow-[0_24px_60px_-20px_rgba(20,17,15,0.18)] sm:p-9",
        feature.span
      )}
    >
      {/* hover wash */}
      <div className="pointer-events-none absolute inset-0 -z-0 translate-y-full bg-canvas transition-transform duration-500 ease-out group-hover:translate-y-0" />

      <div className="relative z-10">
        <div className="flex items-start justify-between">
          <div
            className={cn(
              "grid h-12 w-12 place-items-center rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6",
              accentMap[feature.accent ?? "ink"]
            )}
          >
            <Icon className="h-5 w-5" />
          </div>
          <ArrowUpRight className="h-5 w-5 text-muted-warm opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
        </div>

        <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
          {feature.title}
        </h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-warm sm:text-base">
          {feature.description}
        </p>
      </div>

      {/* index number */}
      <div className="relative z-10 mt-8 font-mono text-xs uppercase tracking-[0.2em] text-muted-warm">
        NOVA / services
      </div>
    </motion.div>
  );
}

export function Features() {
  return (
    <Section id="services">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <Eyebrow>What we do</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              A full-stack creative studio, minus the bloat.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-warm sm:text-base">
            Five disciplines, one accountable team. We cover the full creative
            surface area so your brand stays coherent everywhere it shows up.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
