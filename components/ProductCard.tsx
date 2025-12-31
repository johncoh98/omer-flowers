import React from "react";
import WhatsAppButton from "./WhatsAppButton";

export type Product = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
};

export default function ProductCard({ product }: { product: Product }) {
  const message = `שלום פרחי עומר, אשמח להזמין את המוצר: ${product.name}`;
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-sm transition hover:shadow-md hover:-translate-y-0.5 dark:border-zinc-800/80 dark:bg-zinc-950">
      <div className="aspect-[4/3] w-full overflow-hidden bg-muted dark:bg-zinc-900">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex items-start justify-between gap-3 p-4">
        <div>
          <h3 className="text-base font-semibold text-foreground">{product.name}</h3>
          <p className="mt-1 text-sm text-foreground/70">{product.price.toLocaleString("he-IL")} ₪</p>
        </div>
        <WhatsAppButton size="sm" message={message} />
      </div>
    </div>
  );
}


