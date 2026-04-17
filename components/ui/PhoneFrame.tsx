import { cn } from "@/lib/cn";

type PhoneFrameProps = {
  children: React.ReactNode;
  className?: string;
  index?: number;
  /** When true, skip the default rotation/translate — caller controls positioning */
  bare?: boolean;
};

export function PhoneFrame({ children, className, index = 0, bare = false }: PhoneFrameProps) {
  const rotations = ["rotate-[-6deg]", "rotate-0", "rotate-[5deg]"];
  const y = ["translate-y-4", "translate-y-0", "translate-y-6"];
  return (
    <div
      className={cn(
        "relative mx-auto w-[min(85vw,240px)] shrink-0",
        !bare && rotations[index % 3],
        !bare && y[index % 3],
        className,
      )}
    >
      <div
        className={cn(
          "relative aspect-[9/19.2] w-full overflow-hidden rounded-[2.25rem] border border-white/12 bg-gradient-to-b from-iron-charcoal to-iron-carbon shadow-[0_40px_80px_-20px_rgba(0,0,0,0.75),inset_0_1px_0_rgba(255,255,255,0.06)]",
        )}
      >
        <div className="absolute inset-[10px] overflow-hidden rounded-[1.65rem] bg-iron-carbon ring-1 ring-black/40 [&>img]:absolute [&>img]:inset-0 [&>img]:h-full [&>img]:w-full">
          {children}
        </div>
        <div className="pointer-events-none absolute left-1/2 top-3 h-5 w-16 -translate-x-1/2 rounded-full bg-black/50 blur-[1px]" />
      </div>
      <div
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[3rem] bg-iron-red/5 blur-3xl"
        aria-hidden
      />
    </div>
  );
}
