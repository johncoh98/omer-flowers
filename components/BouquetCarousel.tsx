"use client";

import React, { useEffect, useMemo, useState } from "react";


const publicSlides = ["/2.png","/3.png","/4.png","/5.png","/6.png","/7.png","/8.png","/9.png","/10.png","/11.png","/12.png","/13.png","/1.png"];

export default function BouquetCarousel() {
	const slides = useMemo(() => {
		const list = publicSlides.filter(Boolean);
		const keep = Math.max(0, list.length - 3);
		return list.slice(0, keep);
	}, []);
	const [index, setIndex] = useState(0);
	const total = slides.length;


	useEffect(() => {
		if (total <= 1) return;
		const id = window.setInterval(() => {
			setIndex((i) => (i + 1) % total);
		}, 3500);
		return () => window.clearInterval(id);
	}, [total]);

	function prev() {
		setIndex((i) => (i - 1 + total) % total);
	}
	function next() {
		setIndex((i) => (i + 1) % total);
	}

	return (
		<section className="section" aria-label="קרוסלת זרי פרחים">
			<div className="container">
				<div className="mb-3 flex items-end justify-between">
					<h2 className="heading-2">זרים נבחרים</h2>
					<div className="hidden gap-2 sm:flex">
						<button type="button" onClick={prev} className="btn btn-outline" aria-label="הקודם">‹</button>
						<button type="button" onClick={next} className="btn btn-outline" aria-label="הבא">›</button>
					</div>
				</div>

				<div className="relative rounded-3xl p-[2px] bg-gradient-to-br from-[var(--tint-rose-100)] to-[var(--tint-rose-200)] dark:from-white/10 dark:to-white/5 mx-auto max-w-2xl sm:max-w-3xl lg:max-w-4xl">
					<div className="relative overflow-hidden rounded-[calc(1.5rem-2px)] border border-[rgba(46,125,50,0.12)] dark:border-[rgba(255,255,255,0.08)] shadow-sm shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35)]">
						<div className="relative w-full bg-[var(--muted)] aspect-[4/5] sm:aspect-[16/9] lg:aspect-[5/3]">
						{slides.map((src, i) => (
							<img
								key={src + i}
								src={src}
								alt={`זר ${i + 1}`}
								className={`absolute inset-0 h-full w-full object-cover object-center transition-[opacity,transform] duration-500 ${i < 4 ? "scale-[1.12] sm:scale-[1.08] lg:scale-[1.06]" : ""} ${i === index ? "opacity-100" : "opacity-0"}`}
								loading={i <= 1 ? "eager" : "lazy"}
								decoding="async"
								onError={(e) => {
									const img = e.currentTarget as HTMLImageElement;
									if (img.src.endsWith("/2.png")) return;
									img.src = "/2.png";
								}}
							/>
						))}
							<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
						</div>
					</div>
				</div>

				<div className="mt-3 flex items-center justify-center gap-2">
					{slides.map((_, i) => (
						<button
							key={i}
							aria-label={`שקופית ${i + 1}`}
							onClick={() => setIndex(i)}
							className={`h-2 w-2 rounded-full transition ${i === index ? "bg-[var(--color-accent)] w-6" : "bg-[color-mix(in_oklab,var(--color-text)_25%,transparent)]"}`}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
