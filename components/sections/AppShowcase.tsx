"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IPhoneFrame } from "@/components/ui/IPhoneFrame";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const INTERVAL_MS = 4000;

const blocks = [
  {
    title: "Plan the season",
    subtitle: "171 events worldwide — find your next start line",
    id: "calendar",
    screenshot: "/images/screenshots/race-calendar.jpg",
    alt: "IRON3 Race Calendar showing upcoming IRONMAN events worldwide",
  },
  {
    title: "Train with purpose",
    subtitle: "Weekly plans, discipline tracking, structured preparation",
    id: "prep",
    screenshot: "/images/screenshots/prep-plan.jpg",
    alt: "IRON3 PREP Plan showing weekly training schedule with swim, bike, run",
  },
  {
    title: "Log every session",
    subtitle: "Duration, distance, effort, workout type — all in one tap",
    id: "log",
    screenshot: "/images/screenshots/swim-log.jpg",
    alt: "IRON3 Swim session logging with duration, distance, and effort tracking",
  },
] as const;

function getPosition(index: number, active: number, total: number) {
  const diff = ((index - active) % total + total) % total;
  if (diff === 0) return "center";
  if (diff === 1) return "right";
  return "left";
}

/* Desktop: 3 phones with generous spacing */
const positionVariants = {
  center: {
    x: 0,
    scale: 1.05,
    rotateY: 0,
    zIndex: 30,
    opacity: 1,
    filter: "brightness(1)",
  },
  left: {
    x: "-110%",
    scale: 0.85,
    rotateY: 18,
    zIndex: 10,
    opacity: 0.55,
    filter: "brightness(0.5)",
  },
  right: {
    x: "110%",
    scale: 0.85,
    rotateY: -18,
    zIndex: 10,
    opacity: 0.55,
    filter: "brightness(0.5)",
  },
};

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

  useEffect(() => {
    if (reduced) return;
    timerRef.current = setInterval(next, INTERVAL_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [next, reduced]);

  const goTo = (idx: number) => {
    setActive(idx);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(next, INTERVAL_MS);
  };

  const currentBlock = blocks[active];

  return (
    <section
      id="showcase"
      className="relative overflow-hidden bg-iron-carbon py-[var(--spacing-section-lg)]"
    >
      {/* Subtle radial glow behind carousel */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(193,18,31,0.05),transparent_65%)]" />

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.38em] text-iron-muted">
            Inside the app
          </p>
          <h2 className="mt-4 font-display text-[clamp(2.25rem,5vw,3.5rem)] leading-[0.98] tracking-[0.02em] text-iron-off-white">
            THREE LENSES. ONE SEASON.
          </h2>
          <p className="mt-6 text-pretty text-base leading-relaxed text-iron-light-gray/80 sm:text-lg">
            Discover races that matter. Build preparation that compounds. Review every session with
            clarity — swim, bike, run.
          </p>
        </motion.div>

        {/* ─── Desktop carousel (3 iPhones with spacing) ─── */}
        <div
          className="relative mx-auto mt-16 hidden lg:mt-20 lg:block"
          style={{ perspective: "1600px", height: "620px" }}
        >
          <div className="relative mx-auto h-full w-full max-w-[960px]">
            {blocks.map((b, i) => {
              const pos = getPosition(i, active, blocks.length);
              return (
                <motion.div
                  key={b.id}
                  className="absolute left-1/2 top-0 cursor-pointer"
                  style={{ marginLeft: "-130px", width: "260px" }}
                  animate={positionVariants[pos]}
                  transition={{
                    duration: 0.75,
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
                  <IPhoneFrame className="w-full">
                    <Image
                      src={b.screenshot}
                      alt={b.alt}
                      fill
                      className="object-cover object-top"
                      sizes="260px"
                      quality={100}
                      priority={i === 0}
                      unoptimized
                    />
                  </IPhoneFrame>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ─── Mobile carousel (1 iPhone, fade) ─── */}
        <div className="relative mx-auto mt-10 flex min-h-[500px] items-center justify-center lg:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              variants={mobileFade}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="w-[min(72vw,260px)]"
            >
              <IPhoneFrame className="w-full">
                <Image
                  src={currentBlock.screenshot}
                  alt={currentBlock.alt}
                  fill
                  className="object-cover object-top"
                  sizes="72vw"
                  quality={100}
                  unoptimized
                />
              </IPhoneFrame>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ─── Caption + dots ─── */}
        <div className="mt-10 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
            >
              <span className="block font-display text-2xl tracking-[0.08em] text-iron-off-white">
                {currentBlock.title}
              </span>
              <span className="mt-2 block text-sm text-iron-light-gray/70">
                {currentBlock.subtitle}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Progress dots */}
          <div className="mt-6 flex items-center justify-center gap-2.5">
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
