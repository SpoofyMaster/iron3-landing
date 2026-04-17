"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const nodes = [
  { label: "Swim guidance", angle: -90 },
  { label: "Bike guidance", angle: -30 },
  { label: "Run guidance", angle: 30 },
  { label: "Performance data", angle: 90 },
  { label: "Recovery insight", angle: 150 },
  { label: "Race planning", angle: -150 },
] as const;

export function CoachEcosystem() {
  const reduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-iron-carbon py-[var(--spacing-section-lg)] text-iron-off-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(193,18,31,0.07),transparent_60%)]" />

      <div className="relative mx-auto max-w-[1100px] px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.38em] text-iron-muted">
            Ecosystem
          </p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-[0.98] tracking-[0.02em]">
            MORE THAN TRACKING. A PREPARATION SYSTEM.
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-iron-light-gray/90">
            IRON3 weaves guidance across disciplines with performance context — a single place where
            swim, bike, run, recovery, and race strategy connect.
          </p>
        </div>

        <div className="relative mx-auto mt-16 min-h-[520px] max-w-[880px]">
          <OrbitNodes reduced={reduced} />

          <ul className="relative z-[5] mb-10 flex flex-wrap justify-center gap-2 md:hidden">
            {nodes.map((n) => (
              <li
                key={n.label}
                className="rounded-full border border-white/12 bg-white/[0.04] px-2.5 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-iron-light-gray"
              >
                {n.label}
              </li>
            ))}
          </ul>

          <div className="relative z-10 mx-auto flex w-[min(88vw,280px)] justify-center">
            <motion.div
              animate={
                reduced
                  ? undefined
                  : {
                      y: [0, -8, 0],
                    }
              }
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <PhoneFrame index={1}>
                <Image
                  src="/images/screenshots/leaderboard.jpg"
                  alt="IRON3 Global Leaderboard showing friends, global, and local rankings"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 88vw, 280px"
                  quality={90}
                />
              </PhoneFrame>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OrbitNodes({ reduced }: { reduced: boolean }) {
  const r = 200;
  return (
    <div className="pointer-events-none absolute inset-0 hidden md:block">
      <svg
        className="absolute left-1/2 top-[48%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 text-white/10"
        viewBox="0 0 420 420"
        aria-hidden
      >
        <circle cx="210" cy="210" r={r} fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>
      {nodes.map((n, i) => {
        const rad = (n.angle * Math.PI) / 180;
        const tx = Math.cos(rad) * r;
        const ty = Math.sin(rad) * r;
        return (
          <motion.div
            key={n.label}
            className="absolute left-1/2 top-[48%] w-max"
            style={{
              transform: `translate(-50%, -50%) translate(${tx}px, ${ty}px)`,
            }}
            animate={
              reduced
                ? undefined
                : {
                    scale: [1, 1.03, 1],
                  }
            }
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.35,
            }}
          >
            <div className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-iron-light-gray backdrop-blur-md">
              {n.label}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
