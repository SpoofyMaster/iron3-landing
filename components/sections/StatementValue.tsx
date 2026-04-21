"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Marquee } from "@/components/ui/Marquee";
import { Button } from "@/components/ui/Button";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function StatementValue() {
  const reduced = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const textScale = useTransform(scrollYProgress, [0.1, 0.4], [0.92, 1]);
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.35], [0, 1]);
  const lineWidth = useTransform(scrollYProgress, [0.2, 0.5], ["0%", "100%"]);

  return (
    <section id="statement" className="relative bg-iron-charcoal text-iron-off-white">
      <Marquee speed="slow">
        <>
          <span className="text-iron-off-white/90">Prepare smarter</span>
          <span aria-hidden className="text-iron-red">
            •
          </span>
          <span>Race stronger</span>
          <span aria-hidden className="text-iron-red">
            •
          </span>
          <span>Track everything</span>
          <span aria-hidden className="text-iron-red">
            •
          </span>
          <span className="text-iron-off-white">IRON3</span>
          <span aria-hidden className="text-iron-red">
            •
          </span>
          <span>Swim</span>
          <span aria-hidden className="text-iron-red">
            •
          </span>
          <span>Bike</span>
          <span aria-hidden className="text-iron-red">
            •
          </span>
          <span>Run</span>
          <span aria-hidden className="text-iron-red">
            •
          </span>
          <span>Prepare</span>
          <span aria-hidden className="text-iron-red">
            •
          </span>
          <span>Perform</span>
          <span aria-hidden className="text-iron-red">
            •
          </span>
          <span>Progress</span>
        </>
      </Marquee>

      <div ref={sectionRef} className="relative overflow-hidden py-[var(--spacing-section-lg)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(193,18,31,0.08),transparent_62%)]" />
        <div className="grain-overlay absolute inset-0 opacity-60" />

        <div className="relative mx-auto max-w-[720px] px-5 text-center sm:px-8">
          <motion.h2
            style={reduced ? {} : { scale: textScale, opacity: textOpacity }}
            className="font-display text-[clamp(2rem,5.5vw,3.75rem)] leading-[1.02] tracking-[0.03em]"
          >
            PREPARE FOR MORE THAN A RACE.{" "}
            <span className="text-iron-red">TRAIN FOR THE DAY THAT CHANGES YOU.</span>
          </motion.h2>

          {/* Animated divider line */}
          <motion.div
            style={reduced ? {} : { width: lineWidth }}
            className="mx-auto mt-8 h-px bg-gradient-to-r from-transparent via-iron-red/60 to-transparent"
          />

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.7 }}
            className="mt-8 text-lg leading-relaxed text-iron-light-gray/92"
          >
            The start line is not a moment — it is the edge of every early session, every hard
            repeat, every honest recovery. IRON3 turns your season into a single narrative you can
            see, feel, and trust.
          </motion.p>
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-10"
          >
            <Button href="#download">Download the app</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
