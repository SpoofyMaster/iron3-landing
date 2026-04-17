"use client";

import { motion, useInView } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 42000, suffix: "+", label: "Athletes worldwide" },
  { value: 128, suffix: "", label: "Countries represented" },
  { value: 3.2, suffix: "M", label: "Sessions logged" },
  { value: 4.9, suffix: "/5", label: "App Store rating" },
] as const;

const testimonials = [
  {
    quote: "IRON3 completely transformed how I prepare for IRONMAN. The structured plans and session tracking gave me confidence I never had before.",
    name: "Marcus D.",
    role: "3× IRONMAN Finisher",
    location: "Austin, TX",
  },
  {
    quote: "Finally an app that understands triathlon isn't just three separate sports. The brick session logging alone is worth it.",
    name: "Sarah K.",
    role: "Age Group Champion",
    location: "Melbourne, AU",
  },
  {
    quote: "Went from DNS anxiety to a sub-12 finish. The race calendar and PREP planning kept me honest every single week.",
    name: "João P.",
    role: "First-time 70.3 Finisher",
    location: "Lisbon, PT",
  },
];

function AnimatedCounter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplay(value);
        clearInterval(timer);
      } else {
        setDisplay(Math.floor(current * 10) / 10);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  const formatted = value >= 1000 
    ? Math.floor(display).toLocaleString()
    : Number.isInteger(value) 
      ? Math.floor(display).toString()
      : display.toFixed(1);

  return <>{formatted}{suffix}</>;
}

export function Community() {
  const reduced = useReducedMotion();
  const counterRef = useRef<HTMLDivElement>(null);
  const inView = useInView(counterRef, { once: true, margin: "-80px" });

  return (
    <section
      id="community"
      className="relative overflow-hidden bg-iron-off-white py-[var(--spacing-section-lg)]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-iron-brown/20 to-transparent" />

      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.38em] text-iron-brown">
            Community
          </p>
          <h2 className="mt-4 font-display text-[clamp(2.25rem,5vw,3.5rem)] leading-[0.98] tracking-[0.02em] text-iron-charcoal">
            JOIN 42,000+ ATHLETES WHO TRAIN WITH PURPOSE.
          </h2>
          <p className="mt-6 text-pretty text-base leading-relaxed text-iron-muted sm:text-lg">
            From first-timers to podium chasers — IRON3 athletes share one thing: they don&apos;t
            leave their season to chance.
          </p>
        </motion.div>

        {/* Stats */}
        <div ref={counterRef} className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={reduced ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-iron-brown/10 bg-white/70 p-6 text-center shadow-[0_12px_40px_rgba(69,55,47,0.06)] backdrop-blur-sm"
            >
              <span className="block font-display text-[clamp(2rem,4vw,3rem)] tracking-tight text-iron-red">
                <AnimatedCounter value={s.value} suffix={s.suffix} inView={inView} />
              </span>
              <span className="mt-2 block text-xs font-medium uppercase tracking-[0.2em] text-iron-muted">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={reduced ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: 0.1 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-2xl border border-iron-brown/10 bg-white/80 p-7 shadow-[0_18px_50px_rgba(69,55,47,0.06)] backdrop-blur-sm transition-shadow duration-500 hover:shadow-[0_28px_70px_rgba(69,55,47,0.1)]"
            >
              {/* Quote mark */}
              <span className="absolute -top-2 left-6 font-display text-5xl leading-none text-iron-red/20">
                &ldquo;
              </span>
              <p className="relative mt-4 text-sm leading-relaxed text-iron-brown/90">
                {t.quote}
              </p>
              <footer className="mt-5 border-t border-iron-brown/8 pt-4">
                <p className="font-display text-sm tracking-[0.06em] text-iron-charcoal">{t.name}</p>
                <p className="mt-0.5 text-xs text-iron-muted">
                  {t.role} · {t.location}
                </p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
