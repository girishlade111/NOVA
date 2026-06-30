"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * useGsapReveal — registers GSAP ScrollTrigger and reveals children of the
 * referenced element with a staggered fade-up. Returns a ref to attach.
 */
export function useGsapReveal<T extends HTMLElement = HTMLDivElement>(
  options?: {
    stagger?: number;
    y?: number;
    duration?: number;
    selector?: string;
    start?: string;
  }
) {
  const ref = useRef<T>(null);
  const {
    stagger = 0.12,
    y = 28,
    duration = 0.9,
    selector = "[data-reveal]",
    start = "top 85%",
  } = options ?? {};

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const el = ref.current;
    if (!el) return;

    const items = el.querySelectorAll<HTMLElement>(selector);
    if (!items.length) return;

    const ctx = gsap.context(() => {
      gsap.set(items, { opacity: 0, y });
      gsap.to(items, {
        opacity: 1,
        y: 0,
        duration,
        stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: "play none none none",
        },
      });
    }, el);

    return () => ctx.revert();
  }, [stagger, y, duration, selector, start]);

  return ref;
}

/**
 * useGsapParallax — moves the referenced element on the Y axis as the user
 * scrolls, producing a subtle parallax effect.
 */
export function useGsapParallax<T extends HTMLElement = HTMLDivElement>(
  speed: number = 0.25
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        yPercent: speed * 100,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, [speed]);

  return ref;
}
