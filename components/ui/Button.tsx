import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "outline";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

const base =
  "inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[0.8125rem] font-semibold uppercase tracking-[0.22em] transition-[transform,background-color,color,box-shadow] duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-iron-red";

const variants = {
  primary:
    "bg-iron-red text-iron-off-white shadow-[0_0_0_1px_rgba(255,255,255,0.06)] hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(193,18,31,0.35)]",
  ghost:
    "bg-white/5 text-iron-off-white backdrop-blur-md hover:bg-white/10 border border-white/10",
  outline:
    "border border-iron-muted/40 bg-transparent text-iron-off-white hover:border-iron-red/80 hover:text-white",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  const cls = cn(base, variants[variant], className);
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
