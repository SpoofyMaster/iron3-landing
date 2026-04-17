"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const steps = [
  {
    n: "01",
    title: "Event-first planning",
    body: "Choose your target event and structure your season around it — milestones, priorities, and the weeks that actually move the needle.",
  },
  {
    n: "02",
    title: "Structured preparation",
    body: "Align training blocks with your event timeline and discipline focus. Clear intent beats vague volume.",
  },
  {
    n: "03",
    title: "Session-by-session tracking",
    body: "Log results, review metrics, and see progression after every workout — not as noise, but as signal.",
  },
  {
    n: "04",
    title: "Race-ready decision making",
    body: "Use data and calendar context to train smarter, recover deliberately, and taper with confidence.",
  },
] as const;

export function Methodology() {
  const reduced = useReducedMotion();

  return (
    <section
      id="methodology"
      className="border-y border-iron-brown/15 bg-iron-sand py-[var(--spacing-section-lg)] text-iron-charcoal"
    >
      <div className="mx-auto grid max-w-[1240px] gap-12 px-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16 lg:px-8">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.38em] text-iron-brown">
            How it works
          </p>
          <h2 className="mt-4 max-w-[14ch] font-display text-[clamp(2.25rem,4vw,3.75rem)] leading-[0.98] tracking-[0.02em]">
            METHODOLOGY BUILT FOR LONG-COURSE REALITY.
          </h2>
          <p className="mt-6 max-w-md text-pretty leading-relaxed text-iron-brown/90">
            IRON3 connects planning, execution, and review — so the story of your season stays
            coherent from first build to final taper.
          </p>
        </div>

        <div className="space-y-5">
          {steps.map((s, i) => (
            <motion.article
              key={s.n}
              initial={reduced ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group rounded-2xl border border-iron-brown/12 bg-iron-off-white/80 p-7 shadow-[0_18px_50px_rgba(69,55,47,0.08)] backdrop-blur-sm transition-[transform,box-shadow] duration-500 hover:-translate-y-0.5 hover:shadow-[0_28px_70px_rgba(69,55,47,0.12)]"
            >
              <div className="flex items-start gap-5">
                <span className="font-display text-xl text-iron-red/90">{s.n}</span>
                <div>
                  <h3 className="font-display text-xl tracking-[0.06em]">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-iron-brown/95">{s.body}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
