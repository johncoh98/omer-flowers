"use client";

import React, { useState } from "react";

type LeadPayload = {
	name: string;
	phone: string;
	email?: string;
	note?: string;
};

export default function ContactForm() {
	const [form, setForm] = useState<LeadPayload>({
		name: "",
		phone: "",
		email: "",
		note: "",
	});
	const [submitting, setSubmitting] = useState(false);
	const [success, setSuccess] = useState<string | null>(null);
	const [error, setError] = useState<string | null>(null);

	function handleChange(
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) {
		const { name, value } = e.target;
		setForm((prev) => ({ ...prev, [name]: value }));
	}

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		setSubmitting(true);
		setSuccess(null);
		setError(null);
		try {
			if (!form.name.trim() || !form.phone.trim()) {
				setError("נא למלא שם ומספר טלפון");
				return;
			}
			const res = await fetch("/api/leads", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(form),
			});
			if (!res.ok) {
				throw new Error("Request failed");
			}
			setSuccess("תודה! קיבלנו את הפרטים ונחזור אליכם בהקדם.");
			setForm({ name: "", phone: "", email: "", note: "" });
		} catch {
			setError("אירעה שגיאה בשליחה. נסו שוב בעוד רגע.");
		} finally {
			setSubmitting(false);
		}
	}

	return (
		<section id="contact" className="bg-white dark:bg-black">
			<div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
				<div className="mx-auto max-w-2xl">
					<h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
						השאירו פרטים ונחזור אליכם
					</h2>
					<p className="mt-2 text-zinc-600 dark:text-zinc-400">
						לשאלות, הזמנות ומשלוחים מהירים.
					</p>
					<form onSubmit={handleSubmit} className="mt-8 space-y-6">
						<div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
							<div className="flex flex-col gap-2">
								<label htmlFor="name" className="text-sm text-zinc-700 dark:text-zinc-300">
									שם מלא
								</label>
								<input
									id="name"
									name="name"
									type="text"
									required
									value={form.name}
									onChange={handleChange}
									className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-foreground placeholder-zinc-400 outline-none transition focus:border-rose-400 dark:border-zinc-700 dark:bg-zinc-900"
									placeholder="לדוגמה: עומר כהן"
								/>
							</div>
							<div className="flex flex-col gap-2">
								<label htmlFor="phone" className="text-sm text-zinc-700 dark:text-zinc-300">
									טלפון
								</label>
								<input
									id="phone"
									name="phone"
									type="tel"
									required
									value={form.phone}
									onChange={handleChange}
									className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-foreground placeholder-zinc-400 outline-none transition focus:border-rose-400 dark:border-zinc-700 dark:bg-zinc-900"
									placeholder="050-0000000"
								/>
							</div>
							<div className="flex flex-col gap-2 sm:col-span-2">
								<label htmlFor="email" className="text-sm text-zinc-700 dark:text-zinc-300">
									אימייל (אופציונלי)
								</label>
								<input
									id="email"
									name="email"
									type="email"
									value={form.email}
									onChange={handleChange}
									className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-foreground placeholder-zinc-400 outline-none transition focus:border-rose-400 dark:border-zinc-700 dark:bg-zinc-900"
									placeholder="example@mail.com"
								/>
							</div>
							<div className="flex flex-col gap-2 sm:col-span-2">
								<label htmlFor="note" className="text-sm text-zinc-700 dark:text-zinc-300">
									הודעה
								</label>
								<textarea
									id="note"
									name="note"
									rows={4}
									value={form.note}
									onChange={handleChange}
									className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-foreground placeholder-zinc-400 outline-none transition focus:border-rose-400 dark:border-zinc-700 dark:bg-zinc-900"
									placeholder="ספרו לנו מה תרצו להזמין…"
								/>
							</div>
						</div>
						<div className="flex items-center gap-4">
							<button
								type="submit"
								disabled={submitting}
								className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-white hover:opacity-90 disabled:opacity-50"
							>
								{submitting ? "שולח..." : "שליחה"}
							</button>
							{success && <span className="text-accent">{success}</span>}
							{error && <span className="text-primary">{error}</span>}
						</div>
					</form>
				</div>
			</div>
		</section>
	);
}


