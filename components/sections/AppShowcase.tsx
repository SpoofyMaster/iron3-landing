"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const INTERVAL_MS = 4000;

const blocks = [
  {
    title: "Plan the season",
    subtitle: "44 races worldwide — find your next start line",
    id: "calendar",
    screenshot: "/images/screenshots/race-calendar.jpg",
    alt: "IRON3 Race Calendar showing upcoming IRONMAN events worldwide",
  },
  {
    title: "Train with purpose",
    subtitle: "Brick sessions, effort tracking, workout logging",
    id: "prep",
    screenshot: "/images/screenshots/brick-session.jpg",
    alt: "IRON3 Brick Session screen with swim, bike, run, and brick workout options",
  },
  {
    title: "Track what matters",
    subtitle: "Discipline balance, monthly stats, personal bests",
    id: "track",
    screenshot: "/images/screenshots/performance-stats.jpg",
    alt: "IRON3 Performance Stats showing discipline balance and monthly summary",
  },
] as const;

/* Positions: left, center, right for each slot relative to active index */
function getPosition(index: number, active: number, total: number) {
  const diff = ((index - active) % total + total) % total;
  if (diff === 0) return "center";
  if (diff === 1) return "right";
  return "left";
}

const positionVariants = {
  center: {
    x: 0,
    scale: 1,
    rotateY: 0,
    zIndex: 30,
    opacity: 1,
    filter: "brightness(1)",
  },
  left: {
    x: "-58%",
    scale: 0.78,
    rotateY: 12,
    zIndex: 10,
    opacity: 0.7,
    filter: "brightness(0.65)",
  },
  right: {
    x: "58%",
    scale: 0.78,
    rotateY: -12,
    zIndex: 10,
    opacity: 0.7,
    filter: "brightness(0.65)",
  },
};

/* Mobile: simple fade carousel */
const mobileFade = {
  enter: { opacity: 0, scale: 0.92 },
  center: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.92 },
};

export function AppShowcase() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % blocks.length);
  }, []);

  /* Auto-rotate */
  useEffect(() => {
    if (reduced) return;
    timerRef.current = setInterval(next, INTERVAL_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [next, reduced]);

  /* Click on a side phone to jump to it */
  const goTo = (idx: number) => {
    setActive(idx);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(next, INTERVAL_MS);
  };

  const currentBlock = blocks[active];

  return (
    <section
      id="showcase"
      className="relative overflow-hidden bg-iron-off-white py-[var(--spacing-section-lg)]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-iron-sand/30 to-transparent" />
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.38em] text-iron-brown">
            Inside the app
          </p>
          <h2 className="mt-4 font-display text-[clamp(2.25rem,5vw,3.5rem)] leading-[0.98] tracking-[0.02em] text-iron-charcoal">
            THREE LENSES. ONE SEASON.
          </h2>
          <p className="mt-6 text-pretty text-base leading-relaxed text-iron-muted sm:text-lg">
            Discover races that matter. Build preparation that compounds. Review every session with
            clarity — swim, bike, run.
          </p>
        </motion.div>

        {/* ─── Desktop carousel (3 phones visible) ─── */}
        <div
          className="relative mx-auto mt-16 hidden lg:mt-24 lg:block"
          style={{ perspective: "1200px", height: "560px" }}
        >
          <div className="relative mx-auto h-full w-full max-w-[720px]">
            {blocks.map((b, i) => {
              const pos = getPosition(i, active, blocks.length);
              return (
                <motion.div
                  key={b.id}
                  className="absolute left-1/2 top-0 w-[240px] cursor-pointer"
                  style={{ marginLeft: "-120px" }}
                  animate={positionVariants[pos]}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  onClick={() => goTo(i)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Show ${b.title}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") goTo(i);
                  }}
                >
                  <PhoneFrame bare className="w-full">
                    <Image
                      src={b.screenshot}
                      alt={b.alt}
                      fill
                      className="object-cover object-top"
                      sizes="240px"
                      quality={90}
                      priority={i === 0}
                    />
                  </PhoneFrame>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ─── Mobile carousel (1 phone, fade) ─── */}
        <div className="relative mx-auto mt-12 flex min-h-[480px] items-center justify-center lg:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              variants={mobileFade}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="w-[220px]"
            >
              <PhoneFrame bare className="w-full">
                <Image
                  src={currentBlock.screenshot}
                  alt={currentBlock.alt}
                  fill
                  className="object-cover object-top"
                  sizes="220px"
                  quality={90}
                />
              </PhoneFrame>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ─── Caption + dots ─── */}
        <div className="mt-8 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
            >
              <span className="block font-display text-2xl tracking-[0.08em] text-iron-charcoal">
                {currentBlock.title}
              </span>
              <span className="mt-2 block text-sm text-iron-muted">{currentBlock.subtitle}</span>
            </motion.div>
          </AnimatePresence>

          {/* Dots / indicators */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {blocks.map((b, i) => (
              <button
                key={b.id}
                onClick={() => goTo(i)}
                aria-label={`Go to ${b.title}`}
                className="group relative h-2 overflow-hidden rounded-full transition-all duration-500"
                style={{ width: i === active ? "2rem" : "0.5rem" }}
              >
                <span
                  className="absolute inset-0 rounded-full transition-colors duration-300"
                  style={{
                    backgroundColor: i === active ? "var(--iron-red)" : "var(--iron-muted)",
                    opacity: i === active ? 1 : 0.35,
                  }}
                />
                {i === active && (
                  <motion.span
                    className="absolute inset-y-0 left-0 rounded-full bg-iron-red"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: INTERVAL_MS / 1000, ease: "linear" }}
                    key={`progress-${active}`}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
