"use client";

import React from "react";
import WhatsAppButton from "./WhatsAppButton";

export default function CTASection() {
	return (
		<section className="section">
			<div className="container">
				<div className="card p-6 lg:p-8 bg-[radial-gradient(120%_120%_at_10%_-10%,_var(--tint-rose-50),_transparent_40%),_radial-gradient(120%_120%_at_90%_-10%,_var(--tint-mint-50),_transparent_45%)] dark:bg-[radial-gradient(120%_120%_at_10%_-10%,_var(--tint-rose-100),_transparent_40%),_radial-gradient(120%_120%_at_90%_-10%,_var(--tint-mint-100),_transparent_45%)]">
					<div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-right">
						<div>
							<h3 className="text-xl font-semibold">מוכנים לזר הבא שלכם?</h3>
							<p className="subtle mt-1">שלחו לנו בוואטסאפ או השאירו פרטים ונחזור</p>
						</div>
						<div className="flex gap-3">
							<WhatsAppButton />
							<a href="#contact" className="btn btn-outline">השאירו פרטים</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}


