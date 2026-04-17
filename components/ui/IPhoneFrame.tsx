import { cn } from "@/lib/cn";

type IPhoneFrameProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Realistic iPhone 15 Pro–style device frame.
 * The screen area fills the inner rounded rect; pass an <Image fill /> or any content.
 */
export function IPhoneFrame({ children, className }: IPhoneFrameProps) {
  return (
    <div className={cn("relative mx-auto shrink-0", className)}>
      {/* Outer device shell */}
      <div className="relative w-full overflow-hidden rounded-[3rem] border-[3px] border-[#2a2a2e] bg-[#1a1a1d] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.85),0_0_0_1px_rgba(255,255,255,0.06),inset_0_0_0_1px_rgba(255,255,255,0.04)]">
        {/* Side buttons — left */}
        <div className="absolute -left-[4px] top-[18%] h-8 w-[3px] rounded-l-sm bg-[#2a2a2e]" />
        <div className="absolute -left-[4px] top-[28%] h-14 w-[3px] rounded-l-sm bg-[#2a2a2e]" />
        <div className="absolute -left-[4px] top-[38%] h-14 w-[3px] rounded-l-sm bg-[#2a2a2e]" />
        {/* Side button — right */}
        <div className="absolute -right-[4px] top-[26%] h-16 w-[3px] rounded-r-sm bg-[#2a2a2e]" />

        {/* Inner screen bezel */}
        <div className="relative aspect-[9/19.5] w-full">
          {/* Screen area */}
          <div className="absolute inset-[6px] overflow-hidden rounded-[2.55rem] bg-black">
            {children}
          </div>

          {/* Dynamic Island */}
          <div className="pointer-events-none absolute left-1/2 top-[10px] z-20 h-[28px] w-[100px] -translate-x-1/2 rounded-full bg-black shadow-[0_0_0_2px_rgba(0,0,0,0.9)]" />
        </div>
      </div>

      {/* Ambient glow behind device */}
      <div
        className="pointer-events-none absolute -inset-8 -z-10 rounded-[4rem] opacity-40 blur-3xl"
        style={{ background: "radial-gradient(ellipse at center, rgba(193,18,31,0.15), transparent 70%)" }}
        aria-hidden
      />
    </div>
  );
}
