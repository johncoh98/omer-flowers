"use client";

import React, { useState } from "react";

export default function GalleryMasonry({ images }: { images: string[] }) {
	const [active, setActive] = useState<string | null>(null);
	return (
		<>
			<div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [column-fill:_balance]">
				{images.map((src, i) => (
					<button
						key={i}
						onClick={() => setActive(src)}
						className="group relative mb-4 block w-full overflow-hidden rounded-2xl bg-[var(--muted)] outline-none ring-offset-2 focus-visible:ring-2"
						aria-label={`פתיחת תמונה ${i + 1} בחלונית`}
					>
						<img src={src} alt={`גלריה ${i + 1}`} className="h-auto w-full object-cover transition duration-300 group-hover:scale-[1.02]" loading="lazy" />
						<span className="pointer-events-none absolute inset-0 bg-[var(--tint-rose-50)]/0 transition-opacity duration-300 group-hover:bg-[var(--tint-rose-50)]/35" />
					</button>
				))}
			</div>
			{active && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
					role="dialog"
					aria-modal="true"
					aria-label="תצוגת תמונה"
					onClick={() => setActive(null)}
				>
					<img
						src={active}
						alt="תמונה מוגדלת"
						className="max-h-[85vh] w-auto max-w-[90vw] rounded-xl shadow-2xl"
					/>
				</div>
			)}
		</>
	);
}


