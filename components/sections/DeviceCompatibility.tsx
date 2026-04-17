"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const INTERVAL_MS = 4000;

const watches = [
  {
    id: "garmin",
    name: "Garmin",
    model: "Fenix 8",
    image: "/images/watches/garmin.png",
    alt: "Garmin Fenix 8 sports watch on black background",
  },
  {
    id: "apple-watch",
    name: "Apple Watch",
    model: "Ultra 2",
    image: "/images/watches/apple-watch.png",
    alt: "Apple Watch Ultra 2 on black background",
  },
  {
    id: "coros",
    name: "COROS",
    model: "PACE 3",
    image: "/images/watches/coros.png",
    alt: "COROS PACE 3 sports watch on black background",
  },
  {
    id: "wahoo",
    name: "Wahoo",
    model: "ELEMNT RIVAL",
    image: "/images/watches/wahoo.png",
    alt: "Wahoo ELEMNT RIVAL multisport watch on black background",
  },
  {
    id: "suunto",
    name: "Suunto",
    model: "9 Peak Pro",
    image: "/images/watches/suunto.png",
    alt: "Suunto 9 Peak Pro sports watch on black background",
  },
] as const;

const brands = [
  "Garmin Connect",
  "Apple Health",
  "Strava",
  "TrainingPeaks",
  "Oura",
  "COROS",
];

function getPosition(index: number, active: number, total: number) {
  const diff = ((index - active) % total + total) % total;
  if (diff === 0) return "center";
  if (diff === 1) return "right";
  if (diff === total - 1) return "left";
  if (diff === 2) return "farRight";
  return "farLeft";
}

const positionVariants = {
  center: {
    x: "0%",
    scale: 1.1,
    rotateY: 0,
    zIndex: 30,
    opacity: 1,
    filter: "brightness(1)",
  },
  left: {
    x: "-130%",
    scale: 0.8,
    rotateY: 20,
    zIndex: 20,
    opacity: 0.55,
    filter: "brightness(0.45)",
  },
  right: {
    x: "130%",
    scale: 0.8,
    rotateY: -20,
    zIndex: 20,
    opacity: 0.55,
    filter: "brightness(0.45)",
  },
  farLeft: {
    x: "-220%",
    scale: 0.6,
    rotateY: 30,
    zIndex: 5,
    opacity: 0.25,
    filter: "brightness(0.3)",
  },
  farRight: {
    x: "220%",
    scale: 0.6,
    rotateY: -30,
    zIndex: 5,
    opacity: 0.25,
    filter: "brightness(0.3)",
  },
};

const mobileFade = {
  enter: { opacity: 0, scale: 0.9 },
  center: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
};

export function DeviceCompatibility() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % watches.length);
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

  const currentWatch = watches[active];

  return (
    <section
      id="sync"
      className="relative overflow-hidden bg-[#050507] py-[var(--spacing-section-lg)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(193,18,31,0.08),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="relative mx-auto max-w-[1240px] px-5 text-center sm:px-8">
        {/* Header */}
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[0.68rem] font-semibold uppercase tracking-[0.38em] text-iron-muted"
        >
          Works with your ecosystem
        </motion.p>
        <motion.h2
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mt-5 font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-[0.98] tracking-[0.02em] text-iron-off-white"
        >
          SYNC WITH THE TOOLS YOU ALREADY TRUST.
        </motion.h2>
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-iron-light-gray/90"
        >
          IRON3 connects with the wearables and platforms endurance athletes rely on — so your
          training diary stays honest, complete, and ready for race week.
        </motion.p>

        {/* ─── Desktop carousel (5 watches) ─── */}
        <div
          className="relative mx-auto mt-14 hidden lg:mt-20 lg:block"
          style={{ perspective: "1600px", height: "420px" }}
        >
          <div className="relative mx-auto h-full w-full max-w-[960px]">
            {watches.map((w, i) => {
              const pos = getPosition(i, active, watches.length);
              return (
                <motion.div
                  key={w.id}
                  className="absolute left-1/2 top-1/2 cursor-pointer"
                  style={{ marginLeft: "-130px", marginTop: "-170px", width: "260px", height: "340px" }}
                  animate={positionVariants[pos]}
                  transition={{
                    duration: 0.75,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  onClick={() => goTo(i)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Show ${w.name}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") goTo(i);
                  }}
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={w.image}
                      alt={w.alt}
                      fill
                      className="object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
                      sizes="260px"
                      quality={100}
                      priority={i < 3}
                      unoptimized
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ─── Mobile carousel (1 watch, fade) ─── */}
        <div className="relative mx-auto mt-10 flex min-h-[340px] items-center justify-center lg:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              variants={mobileFade}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-[280px] w-[240px]"
            >
              <Image
                src={currentWatch.image}
                alt={currentWatch.alt}
                fill
                className="object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
                sizes="240px"
                quality={100}
                unoptimized
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ─── Watch name + model ─── */}
        <div className="mt-6 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
            >
              <span className="block font-display text-2xl tracking-[0.08em] text-iron-off-white">
                {currentWatch.name}
              </span>
              <span className="mt-1 block text-sm text-iron-light-gray/60">
                {currentWatch.model}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Progress dots */}
          <div className="mt-5 flex items-center justify-center gap-2">
            {watches.map((w, i) => (
              <button
                key={w.id}
                onClick={() => goTo(i)}
                aria-label={`Go to ${w.name}`}
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

        {/* Platform names */}
        <motion.div
          initial={reduced ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-iron-muted"
        >
          {brands.map((b) => (
            <span key={b} className="text-iron-light-gray/85">
              {b}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
