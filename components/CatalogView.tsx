"use client";

import React, { useMemo, useState } from "react";
import { products as allProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import WhatsAppButton from "@/components/WhatsAppButton";

const categories = ["הכל", "זרים", "צמחים", "מתנות"] as const;
type SortKey = "price-asc" | "price-desc";

export default function CatalogView() {
	const [category, setCategory] = useState<(typeof categories)[number]>("הכל");
	const [sort, setSort] = useState<SortKey>("price-asc");

	const products = useMemo(() => {
		let list = allProducts.slice();
		if (category !== "הכל") {
			list = list.filter((p) => p.category === category);
		}
		list.sort((a, b) => (sort === "price-asc" ? a.price - b.price : b.price - a.price));
		return list;
	}, [category, sort]);

	return (
		<main className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
			<div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
				<div>
					<h1 className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">קטלוג</h1>
					<p className="mt-2 subtle">מבחר זרים, צמחים ומתנות לכל אירוע.</p>
				</div>
				<div className="flex gap-2">
					{categories.map((c) => (
						<button
							key={c}
							onClick={() => setCategory(c)}
							className={`btn ${category === c ? "btn-primary" : "btn-outline"}`}
							aria-pressed={category === c}
						>
							{c}
						</button>
					))}
				</div>
			</div>

			<div className="mt-4 flex items-center justify-between gap-3">
				<div className="subtle text-sm">נמצאו {products.length} מוצרים</div>
				<label className="flex items-center gap-2 text-sm">
					<span className="subtle">מיון:</span>
					<select
						className="rounded-lg border border-[var(--color-border)] bg-white px-3 py-2 text-sm"
						value={sort}
						onChange={(e) => setSort(e.target.value as SortKey)}
						aria-label="מיון לפי מחיר"
					>
						<option value="price-asc">מחיר עולה</option>
						<option value="price-desc">מחיר יורד</option>
					</select>
				</label>
			</div>

			<div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{products.map((p) => (
					<ProductCard key={p.id} product={p} />
				))}
			</div>

			<div className="mt-10 rounded-2xl border border-primary/20 p-6 text-center dark:border-primary/30">
				<p className="mb-3 text-sm subtle">לא מצאתם בדיוק את מה שרציתם?</p>
				<WhatsAppButton />
			</div>
		</main>
	);
}


