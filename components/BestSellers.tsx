"use client";

import React from "react";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";

export default function BestSellers() {
	const best = products.slice(0, 6);
	return (
		<section className="section">
			<div className="container">
				<div className="flex items-end justify-between gap-4">
					<div>
						<h2 className="heading-2">המבוקשים שלנו</h2>
						<p className="subtle mt-2">זרים וצמחים שאוהבים בכל הזמנה</p>
					</div>
					<a href="/catalog" className="btn btn-outline hidden sm:inline-flex">
						לכל הקטלוג
					</a>
				</div>
				<div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{best.map((p) => (
						<ProductCard key={p.id} product={p} />
					))}
				</div>
				<div className="mt-6 sm:hidden">
					<a href="/catalog" className="btn btn-outline w-full">
						לכל הקטלוג
					</a>
				</div>
			</div>
		</section>
	);
}


