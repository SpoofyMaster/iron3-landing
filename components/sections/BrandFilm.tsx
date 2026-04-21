"use client";

import { useCallback, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BRAND_FILM_MP4 } from "@/constants/media";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function BrandFilm() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const videoY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const toggleMute = useCallback(() => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = !el.muted;
    setMuted(el.muted);
  }, []);

  const togglePlay = useCallback(() => {
    const el = videoRef.current;
    if (!el) return;
    if (el.paused) {
      void el.play();
      setPlaying(true);
    } else {
      el.pause();
      setPlaying(false);
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="film"
      className="relative bg-iron-charcoal py-[var(--spacing-section-lg)] text-iron-off-white"
    >
      <div className="grain-overlay pointer-events-none absolute inset-0 opacity-50" />
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-iron-red/[0.06] blur-[120px]" />

      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.38em] text-iron-muted">
            60-second film
          </p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-[0.98] tracking-[0.02em]">
            THE EMOTIONAL JOURNEY OF ENDURANCE.
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-iron-light-gray/92">
            Early alarms. Quiet roads. The work nobody sees — and the belief that keeps you showing
            up. This is the atmosphere IRON3 was built for.
          </p>
        </motion.div>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 32, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-12 overflow-hidden rounded-2xl border border-white/10 bg-black shadow-[0_50px_120px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.04)]"
        >
          {/* Parallax video */}
          {!reduced ? (
            <motion.div style={{ y: videoY }} className="relative">
              <video
                ref={videoRef}
                className="aspect-video w-full scale-110 object-cover"
                src={BRAND_FILM_MP4}
                muted={muted}
                loop
                playsInline
                autoPlay
                preload="metadata"
              />
            </motion.div>
          ) : (
            <div className="aspect-video w-full bg-gradient-to-br from-iron-carbon via-[#1a1412] to-iron-red/20" />
          )}

          {/* Cinematic letterbox bars */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[8%] bg-gradient-to-b from-black/60 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[8%] bg-gradient-to-t from-black/60 to-transparent" />

          {/* Vignette */}
          <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.4)]" />

          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 sm:bottom-6 sm:left-8 sm:right-8">
            <div className="pointer-events-auto flex gap-2">
              <button
                type="button"
                onClick={togglePlay}
                className="rounded-md border border-white/15 bg-black/50 px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-iron-off-white backdrop-blur-md transition-all duration-200 hover:bg-black/65 hover:border-white/25"
              >
                {playing ? "Pause" : "Play"}
              </button>
              <button
                type="button"
                onClick={toggleMute}
                className="rounded-md border border-white/15 bg-black/50 px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-iron-off-white backdrop-blur-md transition-all duration-200 hover:bg-black/65 hover:border-white/25"
              >
                {muted ? "Unmute" : "Mute"}
              </button>
            </div>
            <p className="hidden text-[0.65rem] uppercase tracking-[0.25em] text-iron-muted sm:block">
              Sound optional · best with headphones
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
