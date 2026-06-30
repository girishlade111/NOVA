"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Container, Eyebrow, Section } from "@/components/site/layout";
import { PRICING, type PricingTier } from "@/lib/site";
import { AnimatedButton } from "@/components/site/animated-button";
import { staggerContainer, staggerItem } from "@/components/site/motion";
import { cn } from "@/lib/utils";

function Tier({ tier }: { tier: PricingTier }) {
  return (
    <motion.div
      variants={staggerItem}
      className={cn(
        "relative flex flex-col rounded-3xl border p-8 transition-all duration-500 sm:p-9",
        tier.highlighted
          ? "border-ink bg-ink text-canvas shadow-[0_30px_70px_-25px_rgba(20,17,15,0.5)]"
          : "border-ink/10 bg-card hover:border-ink/25"
      )}
    >
      {tier.highlighted && (
        <span className="absolute right-6 top-6 rounded-full bg-coral px-3 py-1 text-xs font-semibold text-ink">
          Most popular
        </span>
      )}

      <div className="font-display text-sm font-semibold uppercase tracking-[0.18em] opacity-70">
        {tier.name}
      </div>

      <div className="mt-5 flex items-baseline gap-1.5">
        <span className="font-display text-5xl font-bold tracking-tight">
          {tier.price}
        </span>
        <span className={cn("text-sm", tier.highlighted ? "text-canvas/60" : "text-muted-warm")}>
          {tier.cadence}
        </span>
      </div>

      <p className={cn("mt-4 text-sm leading-relaxed", tier.highlighted ? "text-canvas/70" : "text-muted-warm")}>
        {tier.description}
      </p>

      <div className={cn("my-7 h-px w-full", tier.highlighted ? "bg-canvas/15" : "bg-ink/10")} />

      <ul className="flex flex-1 flex-col gap-3.5">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm">
            <span
              className={cn(
                "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full",
                tier.highlighted ? "bg-coral text-ink" : "bg-lime text-ink"
              )}
            >
              <Check className="h-3 w-3" strokeWidth={3} />
            </span>
            <span className={tier.highlighted ? "text-canvas/90" : "text-ink"}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <AnimatedButton
          variant={tier.highlighted ? "lime" : "outline"}
          magnetic={false}
          withArrow
          className="w-full"
        >
          Choose {tier.name}
        </AnimatedButton>
      </div>
    </motion.div>
  );
}

export function Pricing() {
  return (
    <Section id="pricing" className="bg-card/40">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <Eyebrow>Engagements</Eyebrow>
          </div>
          <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Simple ways to work with us.
          </h2>
          <p className="mt-5 text-muted-warm sm:text-lg">
            Whether you need a focused sprint or an embedded team, there&rsquo;s
            a path that fits.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3"
        >
          {PRICING.map((tier) => (
            <Tier key={tier.name} tier={tier} />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
