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
  const message = `שלום פרחי עומר, אשמח להזמין: ${product.name} (${product.price.toLocaleString("he-IL")} ₪). כתובת למשלוח: `;
  return (
    <div className="card card-hover overflow-hidden">
      <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
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
          <p className="mt-1 text-sm font-semibold text-accent">{product.price.toLocaleString("he-IL")} ₪</p>
        </div>
        <WhatsAppButton size="sm" message={message} />
      </div>
    </div>
  );
}


