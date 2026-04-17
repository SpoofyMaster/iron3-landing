"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { brand } from "@/content/site";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";

export function SiteHeader() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor: solid ? "rgba(11, 11, 13, 0.82)" : "rgba(11, 11, 13, 0)",
        borderColor: solid ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0)",
      }}
      transition={{ duration: 0.35 }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl",
        solid ? "shadow-[0_8px_40px_rgba(0,0,0,0.35)]" : "",
      )}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-[1280px] items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="font-display text-2xl tracking-[0.28em] text-iron-off-white sm:text-[1.65rem]"
        >
          {brand.name}
        </Link>
        <nav className="hidden items-center gap-10 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-iron-muted md:flex">
          <a href="#showcase" className="transition-colors hover:text-iron-off-white">
            Product
          </a>
          <a href="#methodology" className="transition-colors hover:text-iron-off-white">
            Method
          </a>
          <a href="#film" className="transition-colors hover:text-iron-off-white">
            Film
          </a>
          <Link href="/our-story" className="transition-colors hover:text-iron-off-white">
            Story
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <Button href="#download" variant="primary" className="!py-3 !text-[0.7rem]">
            Download
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
