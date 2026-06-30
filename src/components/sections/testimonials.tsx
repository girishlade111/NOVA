"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Container, Eyebrow, Section } from "@/components/site/layout";
import { TESTIMONIALS } from "@/lib/site";
import { staggerContainer, staggerItem } from "@/components/site/motion";

export function Testimonials() {
  return (
    <Section id="testimonials">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <Eyebrow>Client voices</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Trusted by teams who care about the details.
            </h2>
          </div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3"
        >
          {TESTIMONIALS.map((t) => (
            <motion.figure
              key={t.name}
              variants={staggerItem}
              className="group relative flex flex-col justify-between rounded-3xl border border-ink/10 bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_-20px_rgba(20,17,15,0.18)]"
            >
              <Quote className="h-8 w-8 text-coral" />
              <blockquote className="mt-5 text-lg leading-relaxed tracking-tight text-ink">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full btn-ink font-display text-sm font-semibold text-canvas">
                  {t.initials}
                </span>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-warm">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
