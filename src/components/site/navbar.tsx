"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/site";
import { Container } from "./layout";
import { AnimatedButton } from "./animated-button";
import { Magnetic, AnimatedUnderline } from "./motion";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container size="wide" className="pt-4">
        <nav
          className={cn(
            "flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500",
            scrolled
              ? "border border-ink/10 bg-card/70 shadow-[0_8px_30px_rgba(20,17,15,0.06)] backdrop-blur-xl"
              : "border border-transparent bg-transparent"
          )}
        >
          {/* Logo */}
          <a href="#top" className="flex items-center gap-2.5">
            <motion.span
              initial={{ rotate: -20, scale: 0.8 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              className="grid h-9 w-9 place-items-center rounded-full btn-ink"
            >
              <span className="font-display text-lg font-bold leading-none text-canvas">N</span>
            </motion.span>
            <span className="font-display text-lg font-semibold tracking-tight">NOVA</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-muted-warm transition-colors hover:text-ink"
                >
                  <AnimatedUnderline>{link.label}</AnimatedUnderline>
                </a>
              </li>
            ))}
          </ul>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-2">
            <div className="hidden md:block">
              <Magnetic strength={0.2}>
                <AnimatedButton variant="primary" withArrow magnetic={false} className="px-5 py-2.5">
                  Start a project
                </AnimatedButton>
              </Magnetic>
            </div>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 bg-card/60 backdrop-blur md:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-0 z-40 bg-canvas/95 backdrop-blur-xl md:hidden"
          >
            <Container className="flex h-full flex-col justify-center gap-2 pt-20">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.06 }}
                  className="font-display text-4xl font-semibold tracking-tight text-ink"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <AnimatedButton variant="primary" withArrow className="w-full">
                  Start a project
                </AnimatedButton>
              </motion.div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
