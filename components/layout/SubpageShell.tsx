import type { ReactNode } from "react";
import Link from "next/link";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

type SubpageShellProps = {
  title: string;
  eyebrow?: string;
  lede?: string;
  children: ReactNode;
};

export function SubpageShell({ title, eyebrow, lede, children }: SubpageShellProps) {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col bg-iron-carbon pt-[4.25rem] text-iron-off-white">
        <header className="border-b border-white/10 bg-iron-charcoal/40 px-5 py-16 sm:px-8">
          <div className="mx-auto max-w-[720px]">
            <Link
              href="/"
              className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-iron-muted transition-colors hover:text-iron-off-white"
            >
              ← Home
            </Link>
            {eyebrow ? (
              <p className="mt-8 text-[0.68rem] font-semibold uppercase tracking-[0.38em] text-iron-red/90">
                {eyebrow}
              </p>
            ) : null}
            <h1 className="mt-4 font-display text-[clamp(2.25rem,5vw,3.25rem)] leading-[0.98] tracking-[0.02em]">
              {title}
            </h1>
            {lede ? <p className="mt-6 text-lg leading-relaxed text-iron-light-gray/95">{lede}</p> : null}
          </div>
        </header>
        <article className="mx-auto w-full max-w-[720px] flex-1 px-5 py-14 sm:px-8 sm:py-20">
          <div className="prose-iron">{children}</div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
