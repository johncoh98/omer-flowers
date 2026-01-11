"use client";

import React from "react";

const steps = [
	{ title: "בוחרים", text: "מבחר זרים, צמחים ומתנות", icon: "🪻" },
	{ title: "שולחים בוואטסאפ", text: "שלחו שם מוצר והעדפות", icon: "📲" },
	{ title: "משלוח מהיר", text: "עד הבית או לאירוע", icon: "🛵" },
];

export default function HowItWorks() {
	return (
		<section className="section">
			<div className="container">
				<h2 className="section-title">איך זה עובד</h2>
				<div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
					{steps.map((s, i) => (
						<div key={i} className="card p-6 text-center card-hover">
							<div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-2xl">
								<span aria-hidden="true">{s.icon}</span>
							</div>
							<h3 className="text-lg font-semibold">{s.title}</h3>
							<p className="subtle mt-1">{s.text}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}


