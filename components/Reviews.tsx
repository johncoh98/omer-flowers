"use client";

import React from "react";

const reviews = [
	{ name: "נועה ר.", text: "זר מושלם ליום ההולדת! שירות מהיר ואדיב.", rating: 5 },
	{ name: "אורי ב.", text: "צמחים איכותיים ושירות מעולה. ממליץ!", rating: 5 },
	{ name: "שירה מ.", text: "התאימו לי זר בדיוק לטעם שלי. וואו!", rating: 5 },
];

function Stars({ n }: { n: number }) {
	return (
		<div aria-label={`${n} כוכבים`} className="text-accent">
			{"★".repeat(n)}
			<span className="text-[color-mix(in_oklab,var(--color-text)_25%,_transparent)]">{"★".repeat(5 - n)}</span>
		</div>
	);
}

export default function Reviews() {
	return (
		<section className="section">
			<div className="container">
				<h2 className="heading-2">לקוחות מספרים</h2>
				<div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
					{reviews.map((r, i) => (
						<figure key={i} className="card p-6">
							<Stars n={r.rating} />
							<blockquote className="mt-3 text-foreground">{r.text}</blockquote>
							<figcaption className="mt-3 text-sm subtle">{r.name}</figcaption>
						</figure>
					))}
				</div>
			</div>
		</section>
	);
}


