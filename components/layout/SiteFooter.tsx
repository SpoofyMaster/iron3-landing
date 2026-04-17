import Link from "next/link";
import { brand, footerLinks, socialLinks } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-iron-carbon py-16 sm:py-20">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-3xl tracking-[0.32em] text-iron-off-white">
              {brand.name}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-iron-muted">{brand.tagline}</p>
          </div>
          <nav className="flex flex-col gap-3 text-sm md:items-end">
            {footerLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-iron-light-gray/90 transition-colors hover:text-iron-off-white"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="flex gap-5 md:flex-col md:items-end">
            {socialLinks.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-iron-muted transition-colors hover:text-iron-off-white"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
        <p className="mt-16 text-center text-[0.7rem] uppercase tracking-[0.28em] text-iron-muted/80 sm:text-left">
          © {new Date().getFullYear()} {brand.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
