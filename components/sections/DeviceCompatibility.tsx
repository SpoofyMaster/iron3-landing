"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const devices = [
  { name: "Apple Watch", abbr: "AW" },
  { name: "Garmin", abbr: "G" },
  { name: "Polar", abbr: "P" },
  { name: "Wahoo", abbr: "W" },
  { name: "Suunto", abbr: "S" },
  { name: "Whoop", abbr: "WHOOP" },
] as const;

const brands = [
  "Garmin Connect",
  "Apple Health",
  "Strava",
  "TrainingPeaks",
  "Oura",
  "COROS",
];

export function DeviceCompatibility() {
  const reduced = useReducedMotion();

  return (
    <section
      id="sync"
      className="relative overflow-hidden bg-iron-carbon py-[var(--spacing-section-lg)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-20%,rgba(193,18,31,0.15),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="relative mx-auto max-w-[960px] px-5 text-center sm:px-8">
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

        <div className="mt-14 flex flex-wrap items-center justify-center gap-5 sm:gap-7">
          {devices.map((d, i) => (
            <motion.div
              key={d.name}
              initial={reduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i }}
              whileHover={reduced ? undefined : { y: -4, scale: 1.02 }}
              className="flex h-24 w-[5.5rem] flex-col items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] shadow-[0_24px_60px_rgba(0,0,0,0.45)] backdrop-blur-sm"
            >
              <span className="font-display text-lg text-iron-off-white/95">{d.abbr}</span>
              <span className="mt-1 text-[0.6rem] uppercase tracking-[0.18em] text-iron-muted">
                {d.name}
              </span>
            </motion.div>
          ))}
        </div>

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
