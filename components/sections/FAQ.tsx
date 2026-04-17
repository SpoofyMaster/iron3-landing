"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const faqs = [
  {
    q: "Do I need a coach to use IRON3?",
    a: "Not at all. IRON3 is built for self-coached athletes — the PREP plan generator creates structured weekly plans based on your target event, available training time, and discipline balance. That said, IRON3 also works great alongside a coach as a daily logging and tracking companion.",
  },
  {
    q: "Which devices and platforms sync with IRON3?",
    a: "IRON3 connects with Garmin, Apple Watch, COROS, Wahoo, Suunto, Polar, and Whoop. We also integrate with Strava, Apple Health, Garmin Connect, and TrainingPeaks — so your data flows in automatically after every session.",
  },
  {
    q: "Is IRON3 only for IRONMAN events?",
    a: "Nope. Our race calendar covers 70.3, full IRONMAN, Olympic, Sprint, and local triathlons worldwide. Whether you're training for your first sprint tri or your tenth full-distance — IRON3 adapts to your season.",
  },
  {
    q: "Can I try it before committing?",
    a: "Absolutely. Every plan starts with a 7-day free trial — full access, no credit card required. If it doesn't click, cancel before day 7 and you won't be charged a thing.",
  },
  {
    q: "What makes IRON3 different from Strava or TrainingPeaks?",
    a: "Strava is a social network. TrainingPeaks is a coaching platform. IRON3 is built specifically for the self-coached triathlete who wants event-first planning, structured preparation, and honest session tracking — all in one place, without the complexity.",
  },
  {
    q: "Is my training data private?",
    a: "Yes. Your sessions, plans, and performance data are yours. We don't sell data, we don't share it with third parties, and your profile is private by default. You choose what (if anything) to share on the community leaderboard.",
  },
] as const;

function FAQItem({ faq, index, isOpen, toggle }: {
  faq: typeof faqs[number];
  index: number;
  isOpen: boolean;
  toggle: () => void;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: 0.06 * index, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="border-b border-iron-brown/12 last:border-b-0"
    >
      <button
        onClick={toggle}
        className="group flex w-full items-center justify-between gap-4 py-6 text-left transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-display text-lg tracking-[0.04em] text-iron-charcoal group-hover:text-iron-red transition-colors duration-300">
          {faq.q}
        </span>
        <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
          isOpen
            ? "border-iron-red/30 bg-iron-red/10 text-iron-red rotate-45"
            : "border-iron-brown/20 text-iron-muted group-hover:border-iron-red/30 group-hover:text-iron-red"
        }`}>
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
          </svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 pr-12 text-sm leading-relaxed text-iron-brown/85">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  const reduced = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-iron-sand py-[var(--spacing-section-lg)]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-iron-brown/15 to-transparent" />

      <div className="mx-auto max-w-[820px] px-5 sm:px-8">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.38em] text-iron-brown">
            Questions & answers
          </p>
          <h2 className="mt-4 font-display text-[clamp(2.25rem,5vw,3.5rem)] leading-[0.98] tracking-[0.02em] text-iron-charcoal">
            FREQUENTLY ASKED.
          </h2>
        </motion.div>

        <div className="mt-12 rounded-2xl border border-iron-brown/10 bg-iron-off-white/70 px-7 shadow-[0_18px_50px_rgba(69,55,47,0.06)] backdrop-blur-sm sm:px-10">
          {faqs.map((faq, i) => (
            <FAQItem
              key={faq.q}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              toggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
