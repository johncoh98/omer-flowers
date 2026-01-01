"use client";

import React, { useEffect, useMemo, useState } from "react";
import { products } from "@/data/products";
import WhatsAppButton from "./WhatsAppButton";

export default function BouquetCarousel() {
	const slides = useMemo(() => products.filter((p) => p.category === "זרים"), []);
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

				<div className="relative overflow-hidden rounded-2xl">
					<div
						className="flex transition-transform duration-500 will-change-transform"
						style={{ transform: `translateX(-${index * 100}%)` }}
					>
						{slides.map((p) => {
							const message = `שלום פרחי עומר, אשמח להזמין: ${p.name} (${p.price.toLocaleString("he-IL")} ₪). כתובת למשלוח: `;
							return (
								<article key={p.id} className="w-full shrink-0">
									<div className="relative w-full aspect-[5/3] overflow-hidden rounded-2xl card">
										<img src={p.imageUrl} alt={p.name} className="h-full w-full object-cover" loading="lazy" />
										<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
										<div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
											<div>
												<h3 className="text-base font-semibold text-white drop-shadow-sm">{p.name}</h3>
												<p className="mt-0.5 text-sm font-semibold text-[var(--color-accent)] drop-shadow-[0_1px_0_rgba(0,0,0,0.4)]">
													{p.price.toLocaleString("he-IL")} ₪
												</p>
											</div>
											<WhatsAppButton size="sm" message={message} />
										</div>
									</div>
								</article>
							);
						})}
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
