"use client";

import React from "react";

const items = [
	{ title: "טרי כל יום", text: "פרחים איכותיים מהספקים המובילים", icon: "🌿" },
	{ title: "משלוח מהיר", text: "שירות שליחויות מהיום להיום", icon: "⚡" },
	{ title: "התאמה אישית", text: "נרכיב זר בטעם האישי שלכם", icon: "🎨" },
	{ title: "תשלום מאובטח", text: "כרטיס אשראי או במעמד הזמנה", icon: "🔒" },
];

export default function Trust() {
	return (
		<section className="section">
			<div className="container">
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{items.map((t, i) => (
						<div key={i} className="card p-5 card-hover">
							<div className="mb-2 text-2xl" aria-hidden="true">{t.icon}</div>
							<h3 className="text-base font-semibold">{t.title}</h3>
							<p className="subtle mt-1 text-sm">{t.text}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}


