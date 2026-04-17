import { cn } from "@/lib/cn";

type AppStoreBadgesProps = {
  className?: string;
  dark?: boolean;
};

export function AppStoreBadges({ className, dark }: AppStoreBadgesProps) {
  return (
    <div className={cn("flex flex-wrap items-center justify-center gap-3 sm:gap-4", className)}>
      <a
        href="#download"
        className={cn(
          "group inline-flex h-12 min-w-[140px] items-center justify-center gap-2 rounded-md px-4 text-[0.7rem] font-semibold tracking-wide transition-colors sm:min-w-[158px]",
          dark
            ? "border border-white/15 bg-white/[0.04] text-iron-off-white hover:bg-white/[0.08]"
            : "border border-iron-charcoal/15 bg-iron-charcoal text-iron-off-white hover:bg-iron-carbon",
        )}
        aria-label="Download on the App Store"
      >
        <AppleGlyph className="h-7 w-7 opacity-90 group-hover:opacity-100" />
        <span className="text-left leading-tight">
          <span className="block text-[0.55rem] font-normal uppercase tracking-wider opacity-80">
            Download on the
          </span>
          <span className="block text-[0.95rem] font-semibold">App Store</span>
        </span>
      </a>
      <a
        href="#download"
        className={cn(
          "group inline-flex h-12 min-w-[140px] items-center justify-center gap-2 rounded-md px-4 text-[0.7rem] font-semibold tracking-wide transition-colors sm:min-w-[158px]",
          dark
            ? "border border-white/15 bg-white/[0.04] text-iron-off-white hover:bg-white/[0.08]"
            : "border border-iron-charcoal/15 bg-iron-charcoal text-iron-off-white hover:bg-iron-carbon",
        )}
        aria-label="Get it on Google Play"
      >
        <PlayGlyph className="h-6 w-6 opacity-90 group-hover:opacity-100" />
        <span className="text-left leading-tight">
          <span className="block text-[0.55rem] font-normal uppercase tracking-wider opacity-80">
            Get it on
          </span>
          <span className="block text-[0.95rem] font-semibold">Google Play</span>
        </span>
      </a>
    </div>
  );
}

function AppleGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M16.7 1.1c.2 2.3-1.4 4.4-3.4 5.2-.3-2.2 1.3-4.3 3.4-5.2zm2.4 16.3c-.9 2-1.9 3.9-3.5 3.9-1.3 0-1.7-.8-3.3-.8-1.7 0-2.2.8-3.5.9-1.5.1-2.7-2-3.6-4-.9-1.9-1.5-4.5-.6-6.4.7-1.6 2.1-2.5 3.3-2.6 1.2-.1 2.4.9 3.3.9.8 0 2.3-1.1 3.9-1 .7 0 2.5.2 3.7 1.7-3.2 1.8-2.5 6.7.3 7.4z" />
    </svg>
  );
}

function PlayGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M3.6 1.9c-.3.2-.5.5-.5.9v18.4c0 .7.6 1.1 1.2.8L20.7 13c.5-.3.5-1 0-1.3L4.3 1.1c-.2-.1-.5-.2-.7-.2z"
      />
    </svg>
  );
}
