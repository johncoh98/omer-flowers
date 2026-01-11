"use client";

import React from "react";
import WhatsAppButton from "./WhatsAppButton";
import CallButton from "./CallButton";
import Reveal from "./Reveal";

export default function Hero() {
	return (
		<section className="relative isolate bg-[var(--tint-rose-50)]">
			<div className="mx-auto max-w-7xl px-6 py-16 md:py-20 lg:px-8 lg:py-24">
				<div className="grid items-center gap-8 md:gap-10">
					<Reveal>
						<div className="text-center lg:text-center">
							<div className="mb-5 flex justify-center lg:justify-center">
								<img
									src="/logo.png"
									alt="פרחי עומר - לוגו"
									className="h-24 w-auto drop-shadow-sm md:h-28"
									loading="eager"
									decoding="async"
								/>
							</div>
							<p className="mb-3 inline-block rounded-full bg-[var(--tint-rose-100)]/70 px-4 py-1 text-xs md:text-sm text-foreground">
								טרי כל יום • משלוחים מהירים • עיצוב בהתאמה אישית
							</p>
							<h1 className="heading-1">
								פרחי עומר – יופי שפורח בכל הזמנה
							</h1>
							<p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-foreground/80 md:text-lg">
								זרים מעוצבים, צמחים ומתנות באווירה אלגנטית. בחרו, שלחו בוואטסאפ – ואנחנו בדרך.
							</p>
							<div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-center">
								<WhatsAppButton size="lg" />
								<CallButton size="lg" />
								<a href="#contact" className="btn btn-outline">השאירו פרטים</a>
							</div>
						</div>
					</Reveal>
				</div>
			</div>
		</section>
	);
}


