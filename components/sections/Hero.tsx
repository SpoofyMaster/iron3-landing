"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HERO_VIDEO_MP4 } from "@/constants/media";
import { AppStoreBadges } from "@/components/ui/AppStoreBadges";
import { Button } from "@/components/ui/Button";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const headline = [
  { t: "YOUR SEASON.", italic: false },
  { t: "YOUR DATA.", italic: false },
  { t: "YOUR IRON3.", italic: true },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.45], [1, 0.15]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-iron-carbon">
        {!reduced ? (
          <video
            className="h-full w-full scale-105 object-cover opacity-70"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster=""
            aria-hidden
          >
            <source src={HERO_VIDEO_MP4} type="video/mp4" />
          </video>
        ) : (
          <div
            className="h-full w-full bg-gradient-to-br from-iron-charcoal via-iron-carbon to-[#1a0a0c]"
            aria-hidden
          />
        )}
        <div
          className="absolute inset-0 bg-gradient-to-t from-iron-carbon via-iron-carbon/55 to-iron-carbon/20"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(193,18,31,0.12),transparent_55%)]"
          aria-hidden
        />
        <div className="grain-overlay absolute inset-0 opacity-90" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.65)]"
          aria-hidden
        />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 px-5 pt-24 text-center sm:px-8">
        <p className="mb-6 text-[0.68rem] font-semibold uppercase tracking-[0.42em] text-iron-light-gray/90">
          Endurance training — redefined
        </p>
        <h1 className="mx-auto max-w-[18ch] text-balance font-display text-[clamp(2.65rem,8.5vw,5.25rem)] leading-[0.92] tracking-[0.02em] text-iron-off-white">
          {headline.map((line, i) => (
            <motion.span
              key={line.t}
              initial={reduced ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.12 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              {line.italic ? (
                <span className="font-accent italic text-iron-off-white">{line.t}</span>
              ) : (
                line.t
              )}
            </motion.span>
          ))}
        </h1>
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-8 max-w-xl text-pretty text-base leading-relaxed text-iron-light-gray/95 sm:text-lg"
        >
          IRON3 helps athletes discover events, structure their season, and track performance
          after every training session.
        </motion.p>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.58 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5"
        >
          <Button href="#download">Start Your Season</Button>
          <Button href="#film" variant="ghost">
            Watch the Film
          </Button>
        </motion.div>

        <motion.div
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="mt-12"
        >
          <AppStoreBadges dark />
        </motion.div>

        <motion.a
          href="#showcase"
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 0.75 }}
          transition={{ delay: 1.1 }}
          className="mt-20 inline-flex flex-col items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-iron-muted hover:text-iron-off-white"
        >
          <span>Scroll</span>
          <span className="block h-10 w-px bg-gradient-to-b from-iron-red/80 to-transparent" />
        </motion.a>
      </motion.div>
    </section>
  );
}
