import React from "react";
import { products } from "@/data/products";

export const metadata = {
  title: "זרים | פרחי עומר",
  description: "גלריית זרים יפהפיים מפרחי עומר.",
};

export default function CatalogPage() {
  const bouquets = products.filter((p) => p.category === "זרים");
  return (
    <main className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      <h1 className="section-title">זרים</h1>
      <p className="mt-2 subtle">מבחר תמונות להשראה. הזמנות דרך וואטסאפ או יצירת קשר.</p>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {bouquets.map((b) => (
          <div key={b.id} className="overflow-hidden rounded-2xl">
            <img src={b.imageUrl} alt={b.name} className="h-full w-full object-cover" loading="lazy" />
          </div>
        ))}
      </div>
    </main>
  );
}


