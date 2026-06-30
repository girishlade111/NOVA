"use client";

import { Container, Eyebrow, Section } from "@/components/site/layout";
import { PROCESS } from "@/lib/site";
import { useGsapReveal } from "@/lib/gsap";
import { cn } from "@/lib/utils";

export function Process() {
  const ref = useGsapReveal<HTMLDivElement>({ stagger: 0.15, y: 32 });

  return (
    <Section id="process" className="bg-card/40">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>How we work</Eyebrow>
          <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            A calm, deliberate process.
          </h2>
          <p className="mt-5 text-muted-warm sm:text-lg">
            No mystery, no chaos. Four phases that turn ambition into shipped,
            measurable creative work.
          </p>
        </div>

        <div ref={ref} className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((step, i) => (
            <div
              key={step.number}
              data-reveal
              className={cn(
                "group relative bg-canvas p-8 transition-colors duration-300 hover:bg-card sm:p-9"
              )}
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-5xl font-bold tracking-tight text-ink/15 transition-colors duration-300 group-hover:text-coral sm:text-6xl">
                  {step.number}
                </span>
                <span className="h-2 w-2 rounded-full bg-coral opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold tracking-tight">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-warm">
                {step.description}
              </p>

              {/* connecting line */}
              {i < PROCESS.length - 1 && (
                <span className="pointer-events-none absolute right-0 top-1/2 hidden h-px w-8 -translate-y-1/2 translate-x-4 bg-ink/15 lg:block" />
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
