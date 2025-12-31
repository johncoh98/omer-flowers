"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import WhatsAppButton from "./WhatsAppButton";

const nav = [
  { href: "/", label: "בית" },
  { href: "/catalog", label: "קטלוג" },
  { href: "/gallery", label: "גלריה" },
  { href: "/about", label: "עלינו" },
  { href: "/contact", label: "צור קשר" },
  { href: "/delivery", label: "משלוחים" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`sticky top-0 z-40 w-full border-b border-primary/20 bg-white/80 backdrop-blur dark:border-primary/30 dark:bg-black/60 ${scrolled ? "shadow-sm" : ""}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
        <div className="flex items-center gap-6">
          <button
            className="inline-flex items-center justify-center rounded-lg border border-primary/30 p-2 text-primary hover:bg-primary/10 lg:hidden dark:border-primary/40"
            aria-label="תפריט"
            onClick={() => setOpen((v) => !v)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 6h18v2H3V6Zm0 5h18v2H3v-2Zm0 5h18v2H3v-2Z" />
            </svg>
          </button>
          <Link href="/" className="flex items-center gap-3" aria-label="פרחי עומר - דף הבית">
            <img
              src="/logo.png"
              alt="פרחי עומר - לוגו"
              className="h-14 w-auto drop-shadow-sm md:h-16"
              loading="eager"
              decoding="async"
            />
            <span className="sr-only">פרחי עומר</span>
          </Link>
        </div>
        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-700 hover:text-accent dark:text-zinc-300 hover:underline underline-offset-4 decoration-[var(--color-accent)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <WhatsAppButton size="sm" />
        </div>
      </div>
      {open && (
        <div className="border-t border-zinc-200 bg-white px-6 py-3 dark:border-zinc-800 dark:bg-black lg:hidden">
          <nav className="flex flex-col gap-3">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="text-base text-zinc-800 dark:text-zinc-200" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <div className="pt-2">
              <WhatsAppButton size="md" className="w-full" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}


