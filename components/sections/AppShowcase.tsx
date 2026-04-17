"use client";

import { motion } from "framer-motion";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const blocks = [
  {
    title: "Plan the season",
    subtitle: "Annual calendar & event discovery",
    id: "calendar",
  },
  {
    title: "Train with purpose",
    subtitle: "Prepare for what’s next",
    id: "prep",
  },
  {
    title: "Track what matters",
    subtitle: "Session intelligence, split by split",
    id: "track",
  },
] as const;

export function AppShowcase() {
  const reduced = useReducedMotion();

  return (
    <section
      id="showcase"
      className="relative overflow-hidden bg-iron-off-white py-[var(--spacing-section-lg)]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-iron-sand/30 to-transparent" />
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
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

        <div className="mt-16 flex flex-col items-stretch gap-16 lg:mt-24 lg:flex-row lg:justify-center lg:gap-8 xl:gap-12">
          {blocks.map((b, i) => (
            <motion.div
              key={b.id}
              initial={reduced ? false : { opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-1 flex-col items-center"
            >
              <p className="order-2 mt-6 text-center lg:order-1 lg:mt-0 lg:mb-8">
                <span className="block font-display text-2xl tracking-[0.08em] text-iron-charcoal">
                  {b.title}
                </span>
                <span className="mt-2 block text-sm text-iron-muted">{b.subtitle}</span>
              </p>
              <div className="order-1 w-full lg:order-2">
                <PhoneFrame index={i}>
                  <ScreenContent variant={b.id} />
                </PhoneFrame>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ScreenContent({ variant }: { variant: string }) {
  if (variant === "calendar") return <ScreenCalendar />;
  if (variant === "prep") return <ScreenPrep />;
  return <ScreenTrack />;
}

function ScreenCalendar() {
  return (
    <div className="flex h-full flex-col bg-gradient-to-b from-[#12141a] to-iron-carbon p-4 text-iron-off-white">
      <div className="flex items-center justify-between text-[0.6rem] uppercase tracking-[0.2em] text-iron-muted">
        <span>2026 Season</span>
        <span className="text-iron-red">Live</span>
      </div>
      <div className="mt-4 grid grid-cols-7 gap-1 text-center text-[0.55rem] text-iron-muted">
        {["M", "T", "W", "T", "F", "S", "S"].map((d) => (
          <span key={d} className="opacity-60">
            {d}
          </span>
        ))}
      </div>
      <div className="mt-2 grid flex-1 grid-cols-7 gap-1 text-[0.5rem]">
        {Array.from({ length: 28 }).map((_, i) => {
          const h = i % 5 === 0 ? "bg-iron-red/25" : i % 3 === 0 ? "bg-white/5" : "bg-transparent";
          return (
            <div
              key={i}
              className={`flex aspect-square items-center justify-center rounded-sm ${h} ring-1 ring-white/5`}
            >
              {i === 14 ? <span className="text-[0.45rem] text-iron-red">A‑Race</span> : null}
            </div>
          );
        })}
      </div>
      <div className="mt-3 rounded-lg border border-white/8 bg-white/[0.03] p-2">
        <p className="text-[0.55rem] uppercase tracking-[0.18em] text-iron-muted">Next — Event</p>
        <p className="mt-1 text-xs font-semibold">Ironman · 8 months out</p>
      </div>
    </div>
  );
}

function ScreenPrep() {
  return (
    <div className="flex h-full flex-col bg-gradient-to-b from-[#15161c] to-iron-carbon p-4 text-iron-off-white">
      <p className="text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-iron-muted">
        Today
      </p>
      <div className="mt-6 flex flex-col items-center">
        <div className="relative h-28 w-28 rounded-full border-4 border-white/10">
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "conic-gradient(var(--iron-red) 72%, rgba(255,255,255,0.06) 0)",
              mask: "radial-gradient(farthest-side, transparent calc(100% - 10px), #000 0)",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center font-display text-2xl tracking-widest">
            72%
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-iron-light-gray">Base phase · week 6</p>
      </div>
      <div className="mt-auto space-y-2">
        <div className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2">
          <p className="text-[0.55rem] uppercase tracking-[0.2em] text-iron-muted">Next workout</p>
          <p className="text-sm font-semibold">Bike · Sweet spot intervals</p>
        </div>
      </div>
    </div>
  );
}

function ScreenTrack() {
  return (
    <div className="flex h-full flex-col bg-gradient-to-b from-[#121319] to-iron-carbon p-4 text-iron-off-white">
      <div className="flex items-baseline justify-between">
        <p className="text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-iron-muted">
          Last session
        </p>
        <span className="text-[0.55rem] text-iron-red">Saved</span>
      </div>
      <div className="mt-4 space-y-2">
        {[
          { d: "Swim", v: "3.8k", b: "62% zone 3" },
          { d: "Bike", v: "90 min", b: "IF 0.85" },
          { d: "Run", v: "12 km", b: "Neg split" },
        ].map((row) => (
          <div
            key={row.d}
            className="flex items-center justify-between rounded-md border border-white/8 bg-white/[0.03] px-2 py-1.5"
          >
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.15em]">
              {row.d}
            </span>
            <span className="text-xs text-iron-light-gray">{row.v}</span>
            <span className="text-[0.55rem] text-iron-muted">{row.b}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-1 flex-col justify-end">
        <div className="h-16 w-full rounded-md bg-gradient-to-t from-iron-red/35 to-transparent ring-1 ring-white/10">
          <div className="flex h-full items-end gap-0.5 px-1 pb-1">
            {Array.from({ length: 24 }).map((_, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-white/35"
                style={{ height: `${20 + (i * 17) % 55}%` }}
              />
            ))}
          </div>
        </div>
        <p className="mt-2 text-center text-[0.55rem] text-iron-muted">Load · fatigue · readiness</p>
      </div>
    </div>
  );
}
