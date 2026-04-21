"use client";

import { motion } from "framer-motion";
import { AppStoreBadges } from "@/components/ui/AppStoreBadges";
import { Button } from "@/components/ui/Button";
import { SILHOUETTE_VIDEO_MP4 } from "@/constants/media";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function FinalCta() {
  const reduced = useReducedMotion();

  return (
    <section
      id="download"
      className="relative overflow-hidden bg-iron-carbon py-[var(--spacing-section-lg)] text-iron-off-white"
    >
      {/* Background video — silhouette athlete at sunset */}
      <div className="absolute inset-0">
        {!reduced ? (
          <video
            className="h-full w-full object-cover opacity-25"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden
          >
            <source src={SILHOUETTE_VIDEO_MP4} type="video/mp4" />
          </video>
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-iron-carbon via-iron-carbon/60 to-iron-carbon/40" />
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-1/4 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-iron-red/15 blur-[120px]" />
          <div className="absolute -right-1/4 top-1/3 h-[420px] w-[420px] rounded-full bg-white/[0.04] blur-[100px]" />
        </div>
        <div className="grain-overlay absolute inset-0 opacity-70" />
      </div>

      <motion.div
        initial={reduced ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-[680px] px-5 text-center sm:px-8"
      >
        <h2 className="font-display text-[clamp(2.25rem,5.5vw,3.75rem)] leading-[0.98] tracking-[0.03em]">
          YOUR NEXT START LINE{" "}
          <span className="font-accent italic text-iron-red">BEGINS HERE.</span>
        </h2>
        <p className="mt-5 text-pretty text-lg leading-relaxed text-iron-light-gray/95">
          Build your season with IRON3 — event clarity, structured preparation, and session truth you
          can race on.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="https://apps.apple.com">Download the app</Button>
          <Button href="/our-story" variant="outline">
            Read our story
          </Button>
        </div>
        <div className="mt-12">
          <AppStoreBadges dark />
        </div>
      </motion.div>
    </section>
  );
}
