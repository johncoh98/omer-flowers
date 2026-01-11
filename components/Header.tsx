"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import WhatsAppButton from "./WhatsAppButton";
import CallButton from "./CallButton";

const nav = [
  { href: "/", label: "בית" },
  { href: "/gallery", label: "גלריה" },
  { href: "/contact", label: "צור קשר" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`sticky top-0 z-40 w-full border-b border-subtle bg-[var(--surface-header)] backdrop-blur ${scrolled ? "shadow-sm" : ""}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
        <div className="flex items-center gap-6">
          <button
            className="inline-flex items-center justify-center rounded-lg border border-subtle p-2 text-foreground hover:bg-[var(--tint-rose-50)] lg:hidden"
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
        <nav className="hidden items-center gap-2 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm px-3 py-2 rounded-full transition ${
                pathname === item.href
                  ? "bg-[var(--tint-rose-100)] text-foreground ring-1 ring-[var(--color-accent)]/30"
                  : "text-foreground/80 hover:bg-[var(--tint-rose-50)] hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <CallButton size="sm" />
          <WhatsAppButton size="sm" />
        </div>
      </div>
      {open && (
        <div className="border-t border-subtle bg-[var(--surface-header)] px-6 py-3 lg:hidden">
          <nav className="flex flex-col gap-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-base px-3 py-2 rounded-lg ${pathname === item.href ? "bg-[var(--tint-rose-100)]" : "hover:bg-[var(--tint-rose-50)]"}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 grid grid-cols-2 gap-2">
              <CallButton size="md" className="w-full" />
              <WhatsAppButton size="md" className="w-full" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}


