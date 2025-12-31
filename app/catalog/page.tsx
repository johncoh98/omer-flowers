import React from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export const metadata = {
  title: "קטלוג | פרחי עומר",
  description: "קטלוג זרי פרחים, צמחים ומתנות של פרחי עומר.",
};

export default function CatalogPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      <h1 className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">קטלוג</h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">מבחר זרים, צמחים ומתנות לכל אירוע.</p>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </main>
  );
}


