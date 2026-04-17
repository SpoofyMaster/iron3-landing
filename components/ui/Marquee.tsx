"use client";

import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type MarqueeProps = {
  children: React.ReactNode;
  className?: string;
  speed?: "slow" | "normal" | "fast";
};

export function Marquee({ children, className, speed = "normal" }: MarqueeProps) {
  const reduced = useReducedMotion();
  const duration = speed === "slow" ? 50 : speed === "fast" ? 22 : 34;

  return (
    <div
      className={cn(
        "relative overflow-hidden border-y border-white/5 bg-iron-charcoal py-5",
        className,
      )}
      role="presentation"
    >
      <div
        className={cn(
          "flex w-max gap-12 px-6 text-[clamp(0.75rem,1.4vw,0.875rem)] font-display uppercase tracking-[0.35em] text-iron-muted",
          !reduced && "animate-marquee",
        )}
        style={
          reduced
            ? undefined
            : { animationDuration: `${duration}s` }
        }
      >
        <span className="flex shrink-0 gap-12">{children}</span>
        <span className="flex shrink-0 gap-12" aria-hidden>
          {children}
        </span>
      </div>
    </div>
  );
}
