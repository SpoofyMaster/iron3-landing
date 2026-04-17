"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Button } from "@/components/ui/Button";

const plans = [
  {
    name: "Weekly",
    price: "$4.99",
    period: "/week",
    description: "Try everything, commit to nothing",
    features: [
      "Full race calendar access",
      "PREP plan generator",
      "Session logging (all disciplines)",
      "Device sync (Garmin, Apple Watch)",
      "Cancel anytime",
    ],
    popular: false,
    cta: "Start free trial",
  },
  {
    name: "Monthly",
    price: "$14.99",
    period: "/month",
    description: "The sweet spot for serious athletes",
    features: [
      "Everything in Weekly",
      "Advanced analytics & trends",
      "Brick session tracking",
      "Performance insights",
      "Priority support",
      "Save 25% vs weekly",
    ],
    popular: true,
    cta: "Start free trial",
  },
  {
    name: "Annual",
    price: "$99.99",
    period: "/year",
    description: "Best value — one season, fully covered",
    features: [
      "Everything in Monthly",
      "Exclusive annual badges",
      "Early access to new features",
      "Race day checklists",
      "Season review report",
      "Save 50% vs monthly",
    ],
    popular: false,
    cta: "Start free trial",
  },
] as const;

export function Pricing() {
  const reduced = useReducedMotion();

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-iron-carbon py-[var(--spacing-section-lg)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(193,18,31,0.08),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.38em] text-iron-muted">
            Pricing
          </p>
          <h2 className="mt-4 font-display text-[clamp(2.25rem,5vw,3.5rem)] leading-[0.98] tracking-[0.02em] text-iron-off-white">
            INVEST IN YOUR SEASON.
          </h2>
          <p className="mt-6 text-pretty text-base leading-relaxed text-iron-light-gray/80 sm:text-lg">
            Every plan includes a 7-day free trial. No credit card required. Cancel anytime.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3 lg:gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={reduced ? false : { opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: 0.1 * i, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className={`relative flex flex-col rounded-2xl border p-8 transition-shadow duration-500 ${
                plan.popular
                  ? "border-iron-red/40 bg-gradient-to-b from-iron-red/[0.08] to-transparent shadow-[0_30px_80px_rgba(193,18,31,0.15),0_0_0_1px_rgba(193,18,31,0.2)]"
                  : "border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent shadow-[0_24px_60px_rgba(0,0,0,0.3)]"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-iron-red px-4 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white shadow-[0_4px_16px_rgba(193,18,31,0.4)]">
                  Most popular
                </div>
              )}

              <div className="text-center">
                <h3 className="font-display text-lg tracking-[0.1em] text-iron-off-white/90">
                  {plan.name}
                </h3>
                <div className="mt-4 flex items-baseline justify-center gap-1">
                  <span className="font-display text-[clamp(2.5rem,5vw,3.5rem)] tracking-tight text-iron-off-white">
                    {plan.price}
                  </span>
                  <span className="text-sm text-iron-muted">{plan.period}</span>
                </div>
                <p className="mt-2 text-sm text-iron-light-gray/60">{plan.description}</p>
              </div>

              <ul className="mt-8 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-iron-light-gray/85">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-iron-red"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button
                  href="https://apps.apple.com"
                  variant={plan.popular ? "primary" : "outline"}
                  className="w-full justify-center"
                >
                  {plan.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
