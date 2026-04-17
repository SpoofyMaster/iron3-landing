"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const blocks = [
  {
    title: "Plan the season",
    subtitle: "44 races worldwide — find your next start line",
    id: "calendar",
    screenshot: "/images/screenshots/race-calendar.jpg",
    alt: "IRON3 Race Calendar showing upcoming IRONMAN events worldwide",
  },
  {
    title: "Train with purpose",
    subtitle: "Brick sessions, effort tracking, workout logging",
    id: "prep",
    screenshot: "/images/screenshots/brick-session.jpg",
    alt: "IRON3 Brick Session screen with swim, bike, run, and brick workout options",
  },
  {
    title: "Track what matters",
    subtitle: "Discipline balance, monthly stats, personal bests",
    id: "track",
    screenshot: "/images/screenshots/performance-stats.jpg",
    alt: "IRON3 Performance Stats showing discipline balance and monthly summary",
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
                  <Image
                    src={b.screenshot}
                    alt={b.alt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 85vw, 240px"
                    quality={90}
                  />
                </PhoneFrame>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
