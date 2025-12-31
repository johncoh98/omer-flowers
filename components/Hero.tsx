"use client";

import React from "react";
import WhatsAppButton from "./WhatsAppButton";
import Reveal from "./Reveal";

export default function Hero() {
	return (
		<section className="relative isolate overflow-hidden bg-[radial-gradient(120%_120%_at_10%_-10%,_var(--tint-rose-50),_transparent_40%),_radial-gradient(120%_120%_at_90%_-10%,_var(--tint-mint-50),_transparent_45%)] dark:bg-[radial-gradient(120%_120%_at_10%_-10%,_var(--tint-rose-100),_transparent_40%),_radial-gradient(120%_120%_at_90%_-10%,_var(--tint-mint-100),_transparent_45%)]">
			<div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
				<Reveal className="mx-auto max-w-3xl text-center">
					<div className="mb-6 flex justify-center">
						<img
							src="/logo.png"
							alt="פרחי עומר - לוגו"
							className="h-32 w-auto drop-shadow-sm md:h-40"
							loading="eager"
							decoding="async"
						/>
					</div>
					<p className="mb-4 inline-block rounded-full bg-[var(--tint-rose-50)] px-4 py-1 text-sm text-foreground/80 dark:bg-[var(--tint-rose-100)]">
						טרי כל יום • משלוחים מהירים בעיר
					</p>
					<h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl">
						פרחי עומר
					</h1>
					<p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-700 dark:text-zinc-300">
						זרים מעוצבים, מתנות ומגוון צמחים לבית ולמשרד. שירות חם מהלב עם
						מגע של סטייל.
					</p>
					<div className="mt-10 flex items-center justify-center gap-4">
						<WhatsAppButton size="lg" />
						<a
							href="#contact"
							className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent px-6 py-4 text-base text-white shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
						>
							השאירו פרטים
						</a>
					</div>
				</Reveal>
				{/* Image mosaic */}
				<Reveal className="mx-auto mt-14 max-w-5xl">
					<div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
						<div className="group col-span-1 overflow-hidden rounded-2xl border border-[rgba(46,125,50,0.12)] dark:border-[rgba(255,255,255,0.08)] shadow-sm shadow-[inset_0_0_0_1px_rgba(255,255,255,0.5)] ring-1 ring-black/5 hover:border-[rgba(46,125,50,0.24)] aspect-[4/5] bg-[radial-gradient(120%_120%_at_50%_0%,_#fff1f2,_#ffe4e6_60%,_#fff7ed)]">
							<img
								src="/1.png"
								alt="זר פרחים אלגנטי"
								className="h-full w-full object-cover transition duration-300 scale-[1.2] sm:scale-[1.3] group-hover:scale-[1.35] drop-shadow-[0_10px_25px_rgba(0,0,0,0.12)]"
								loading="lazy"
							/>
						</div>
						<div className="group col-span-1 overflow-hidden rounded-2xl border border-[rgba(46,125,50,0.12)] dark:border-[rgba(255,255,255,0.08)] shadow-sm shadow-[inset_0_0_0_1px_rgba(255,255,255,0.5)] ring-1 ring-black/5 hover:border-[rgba(46,125,50,0.24)] aspect-[4/5] bg-[radial-gradient(120%_120%_at_50%_0%,_#ecfeff,_#e0f2fe_60%,_#f0fdfa)]">
							<img
								src="/2.png"
								alt="זר צבעוני"
								className="h-full w-full object-cover transition duration-300 scale-[1.2] sm:scale-[1.3] group-hover:scale-[1.35] drop-shadow-[0_10px_25px_rgba(0,0,0,0.12)]"
								loading="lazy"
							/>
						</div>
						<div className="group col-span-1 overflow-hidden rounded-2xl border border-[rgba(46,125,50,0.12)] dark:border-[rgba(255,255,255,0.08)] shadow-sm shadow-[inset_0_0_0_1px_rgba(255,255,255,0.5)] ring-1 ring-black/5 hover:border-[rgba(46,125,50,0.24)] aspect-[4/5] bg-[radial-gradient(120%_120%_at_50%_0%,_#fef9c3,_#ffedd5_60%,_#fff7ed)]">
							<img
								src="/3.png"
								alt="צמח לבית"
								className="h-full w-full object-cover transition duration-300 scale-[1.2] sm:scale-[1.3] group-hover:scale-[1.35] drop-shadow-[0_10px_25px_rgba(0,0,0,0.12)]"
								loading="lazy"
							/>
						</div>
						<div className="group col-span-1 overflow-hidden rounded-2xl border border-[rgba(46,125,50,0.12)] dark:border-[rgba(255,255,255,0.08)] shadow-sm shadow-[inset_0_0_0_1px_rgba(255,255,255,0.5)] ring-1 ring-black/5 hover:border-[rgba(46,125,50,0.24)] aspect-[4/5] bg-[radial-gradient(120%_120%_at_50%_0%,_#f3e8ff,_#e9d5ff_60%,_#faf5ff)]">
							<img
								src="/8.png"
								alt="סידור פרחים"
								className="h-full w-full object-cover transition duration-300 scale-[1.2] sm:scale-[1.3] group-hover:scale-[1.35] drop-shadow-[0_10px_25px_rgba(0,0,0,0.12)]"
								loading="lazy"
							/>
						</div>
					</div>
				</Reveal>
			</div>
		</section>
	);
}


