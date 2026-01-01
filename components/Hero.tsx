"use client";

import React from "react";
import WhatsAppButton from "./WhatsAppButton";
import Reveal from "./Reveal";

export default function Hero() {
	return (
		<section className="relative isolate overflow-hidden">
			<div className="absolute inset-0 -z-10">
				<div className="absolute inset-0 bg-[url('/8.png')] bg-cover bg-center opacity-60" aria-hidden="true" />
				<div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.25)] via-[var(--tint-rose-100)]/60 to-[var(--tint-mint-50)]/60" aria-hidden="true" />
			</div>
			<div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
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
					<p className="mb-4 inline-block rounded-full bg-[var(--tint-rose-100)]/70 px-4 py-1 text-sm text-white shadow-sm">
						טרי כל יום • משלוחים מהירים • עיצוב בהתאמה אישית
					</p>
					<h1 className="text-5xl font-extrabold tracking-tight text-white drop-shadow md:text-7xl">פרחי עומר – יופי שפורח בכל הזמנה</h1>
					<p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/90">
						זרים מעוצבים, צמחים ומתנות באווירה אלגנטית. בחרו, שלחו בוואטסאפ – ואנחנו בדרך.
					</p>
					<div className="mt-10 flex items-center justify-center gap-3">
						<WhatsAppButton size="lg" />
						<a href="/catalog" className="btn btn-primary">לקטלוג</a>
						<a href="#contact" className="btn btn-outline bg-[rgba(255,255,255,0.1)] text-white backdrop-blur">השאירו פרטים</a>
					</div>
				</Reveal>
				{/* Hero simplified for stronger focus on brand message */}
			</div>
		</section>
	);
}


