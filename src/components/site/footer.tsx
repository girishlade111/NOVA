"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { Container } from "./layout";

const FOOTER_LINKS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Studio",
    links: [
      { label: "Work", href: "#work" },
      { label: "Services", href: "#services" },
      { label: "Process", href: "#process" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Journal", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Social",
    links: [
      { label: "Instagram", href: "#" },
      { label: "Dribbble", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "X / Twitter", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative bg-ink text-canvas">
      <Container size="wide" className="py-16 sm:py-20">
        {/* top */}
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-coral font-display text-lg font-bold leading-none text-ink">
                N
              </span>
              <span className="font-display text-lg font-semibold tracking-tight">
                NOVA
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-canvas/60">
              An independent creative studio building brand systems, digital
              products, and motion design for ambitious teams.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-canvas/60">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
              </span>
              Available for new projects
            </div>
          </div>

          {FOOTER_LINKS.map((col) => (
            <div key={col.title}>
              <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-canvas/40">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center text-sm text-canvas/80 transition-colors hover:text-canvas"
                    >
                      <span className="relative">
                        {link.label}
                        <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-coral transition-all duration-300 group-hover:w-full" />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* giant wordmark */}
        <div className="mt-16 overflow-hidden border-t border-canvas/10 pt-10">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(4rem,18vw,16rem)] font-bold leading-[0.8] tracking-[-0.05em] text-canvas"
          >
            NOVA<span className="text-coral">.</span>
          </motion.h2>
        </div>

        {/* bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-canvas/10 pt-8 text-xs text-canvas/50 sm:flex-row">
          <p>© {new Date().getFullYear()} NOVA Studio. Crafted with obsession.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="transition-colors hover:text-canvas">Privacy</a>
            <a href="#" className="transition-colors hover:text-canvas">Terms</a>
            <a
              href="#top"
              className="group inline-flex items-center gap-1.5 transition-colors hover:text-canvas"
            >
              Back to top
              <span className="grid h-6 w-6 place-items-center rounded-full border border-canvas/20 transition-transform duration-300 group-hover:-translate-y-0.5">
                <ArrowUp className="h-3 w-3" />
              </span>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
