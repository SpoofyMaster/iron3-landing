"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SWIM_VIDEO_MP4, BIKE_VIDEO_MP4, RUN_VIDEO_MP4 } from "@/constants/media";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const disciplines = [
  {
    id: "swim",
    label: "SWIM",
    stat: "Open Water",
    video: SWIM_VIDEO_MP4,
    color: "#00B4D8",
    description: "Master the first discipline. Track pace, distance, and technique evolution.",
  },
  {
    id: "bike",
    label: "BIKE",
    stat: "On the Road",
    video: BIKE_VIDEO_MP4,
    color: "#80ED99",
    description: "Build power on every ride. Structured sessions that compound into race fitness.",
  },
  {
    id: "run",
    label: "RUN",
    stat: "To the Line",
    video: RUN_VIDEO_MP4,
    color: "#FFB347",
    description: "Finish what you started. Every stride logged, every split measured.",
  },
] as const;

function DisciplineCard({
  discipline,
  index,
  reduced,
}: {
  discipline: (typeof disciplines)[number];
  index: number;
  reduced: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <motion.div
      ref={ref}
      initial={reduced ? false : { opacity: 0, y: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/[0.06]"
    >
      {/* Video background */}
      <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[3/4] overflow-hidden">
        {!reduced ? (
          <motion.div style={{ y }} className="absolute inset-[-20%]">
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden
            >
              <source src={discipline.video} type="video/mp4" />
            </video>
          </motion.div>
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${discipline.color}22, var(--iron-carbon))`,
            }}
          />
        )}

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-iron-carbon via-iron-carbon/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-iron-carbon/30 via-transparent to-transparent" />

        {/* Colored accent line at top */}
        <div
          className="absolute inset-x-0 top-0 h-[2px] opacity-60"
          style={{ background: `linear-gradient(90deg, transparent, ${discipline.color}, transparent)` }}
        />

        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8">
          {/* Top: discipline label */}
          <div className="flex items-center gap-3">
            <span
              className="inline-block h-2 w-2 rounded-full"
              style={{ backgroundColor: discipline.color }}
            />
            <span
              className="text-[0.65rem] font-semibold uppercase tracking-[0.35em]"
              style={{ color: discipline.color }}
            >
              {discipline.stat}
            </span>
          </div>

          {/* Bottom: name + description */}
          <div>
            <h3
              className="font-display text-[clamp(3rem,8vw,4.5rem)] leading-[0.85] tracking-[0.04em]"
              style={{
                color: discipline.color,
                textShadow: `0 0 60px ${discipline.color}33`,
              }}
            >
              {discipline.label}
            </h3>
            <p className="mt-3 max-w-[28ch] text-sm leading-relaxed text-iron-light-gray/80">
              {discipline.description}
            </p>
          </div>
        </div>

        {/* Hover glow */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          style={{
            background: `radial-gradient(circle at 50% 80%, ${discipline.color}15, transparent 60%)`,
          }}
        />
      </div>
    </motion.div>
  );
}

export function DisciplineShowcase() {
  const reduced = useReducedMotion();

  return (
    <section id="disciplines" className="relative bg-iron-carbon py-[var(--spacing-section-lg)]">
      {/* Subtle top border */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.38em] text-iron-muted">
            Three disciplines
          </p>
          <h2 className="mt-4 font-display text-[clamp(2.25rem,5vw,3.5rem)] leading-[0.98] tracking-[0.02em] text-iron-off-white">
            SWIM. BIKE. RUN.{" "}
            <span className="font-accent italic text-iron-red">One season.</span>
          </h2>
          <p className="mt-6 text-pretty text-base leading-relaxed text-iron-light-gray/80 sm:text-lg">
            Each discipline has its own rhythm. IRON3 understands all three — and the thread that
            connects them to your start line.
          </p>
        </motion.div>

        {/* Three video cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-3 lg:mt-20 lg:gap-6">
          {disciplines.map((d, i) => (
            <DisciplineCard key={d.id} discipline={d} index={i} reduced={reduced} />
          ))}
        </div>
      </div>
    </section>
  );
}
