"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container, Eyebrow, Section } from "@/components/site/layout";
import { PROJECTS, type Project } from "@/lib/site";
import { staggerContainer, staggerItem } from "@/components/site/motion";
import { AnimatedButton } from "@/components/site/animated-button";
import { cn } from "@/lib/utils";

/* CSS-art cover: layered gradients + shapes unique per project */
function CoverArt({ project }: { project: Project }) {
  return (
    <div
      className="relative aspect-[4/3] w-full overflow-hidden"
      style={{ backgroundColor: project.accent }}
    >
      {/* grain */}
      <div className="absolute inset-0 opacity-30 mix-blend-overlay [background-image:url('data:image/svg+xml,%3Csvg viewBox=%270 0 256 256%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%273%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27/%3E%3C/svg%3E')]" />

      {/* decorative shapes */}
      <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-white/20 blur-2xl transition-transform duration-700 group-hover:scale-125" />
      <div className="absolute bottom-0 left-1/4 h-32 w-32 rounded-full bg-black/10 blur-xl transition-transform duration-700 group-hover:translate-y-6" />

      {/* big initial */}
      <div className="absolute inset-0 grid place-items-center">
        <span className="font-display text-[7rem] font-bold leading-none tracking-tighter text-white/90 transition-transform duration-700 group-hover:scale-110 sm:text-[9rem]">
          {project.title.charAt(0)}
        </span>
      </div>

      {/* category chip */}
      <div className="absolute left-5 top-5 rounded-full bg-black/25 px-3 py-1 text-xs font-medium text-white backdrop-blur">
        {project.category}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.a
      href="#work"
      variants={staggerItem}
      className="group block"
    >
      <div className="relative overflow-hidden rounded-3xl border border-ink/10">
        <CoverArt project={project} />
        {/* hover overlay */}
        <div className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-black/50 via-transparent to-transparent p-5 opacity-0 transition-opacity duration-400 group-hover:opacity-100">
          <span className="text-sm font-medium text-white">View case study</span>
          <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-ink">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </div>

      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-2xl font-semibold tracking-tight">
            {project.title}
          </h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-ink/15 px-2.5 py-0.5 text-xs text-muted-warm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <span className="font-mono text-xs text-muted-warm">{project.year}</span>
      </div>
    </motion.a>
  );
}

export function Showcase() {
  return (
    <Section id="work">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <Eyebrow>Selected work</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Work we&rsquo;re proud to sign.
            </h2>
          </div>
          <AnimatedButton variant="outline" withArrow magnetic={false}>
            View all projects
          </AnimatedButton>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2"
        >
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
