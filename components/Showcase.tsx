"use client";

import React from "react";
import Reveal from "./Reveal";

const images = ["/1.png", "/2.png", "/3.png", "/4.png", "/5.png", "/6.png", "/7.png", "/8.png"];

// Soft pastel radial backgrounds to avoid harsh white
const pastelBg: string[] = [
  "bg-[radial-gradient(120%_120%_at_50%_0%,_#fff1f2,_#ffe4e6_60%,_#fff7ed)]",
  "bg-[radial-gradient(120%_120%_at_50%_0%,_#ecfeff,_#e0f2fe_60%,_#f0fdfa)]",
  "bg-[radial-gradient(120%_120%_at_50%_0%,_#fef9c3,_#ffedd5_60%,_#fff7ed)]",
  "bg-[radial-gradient(120%_120%_at_50%_0%,_#e8f5e9,_#d1fae5_60%,_#f0fdf4)]",
  "bg-[radial-gradient(120%_120%_at_50%_0%,_#f3e8ff,_#e9d5ff_60%,_#faf5ff)]",
  "bg-[radial-gradient(120%_120%_at_50%_0%,_#fdf2f8,_#fce7f3_60%,_#fff0f6)]",
];

export default function Showcase() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">מבחר אלגנטי</h2>
          <p className="mt-3 text-base text-zinc-700 dark:text-zinc-300">
            זרים וצמחים נבחרים – נקי, מודרני ומוכן לשילוח מהיר.
          </p>
        </Reveal>
        <Reveal className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {images.map((src, idx) => (
            <div
              key={src}
              className={`group overflow-hidden rounded-2xl border border-[rgba(46,125,50,0.12)] dark:border-[rgba(255,255,255,0.08)] shadow-sm shadow-[inset_0_0_0_1px_rgba(255,255,255,0.5)] transition hover:shadow-md hover:-translate-y-0.5 hover:border-[rgba(46,125,50,0.24)] aspect-[4/5] ${pastelBg[idx % pastelBg.length]}`}
            >
              <img
                src={src}
                alt={`תצוגה ${idx + 1}`}
                className="h-full w-full object-cover transition duration-300 scale-[1.15] sm:scale-[1.25] group-hover:scale-[1.3] drop-shadow-[0_10px_25px_rgba(0,0,0,0.12)]"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}


