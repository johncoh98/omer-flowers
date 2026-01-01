import React from "react";
import GalleryMasonry from "@/components/GalleryMasonry";

const images = [
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1442458017215-285b83f65851?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1490111718993-d98654ce6cf7?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
];

export const metadata = {
  title: "גלריה | פרחי עומר",
  description: "השראה וזרים מעוצבים מהגלריה של פרחי עומר.",
};

export default function GalleryPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      <h1 className="text-3xl font-extrabold tracking-tight text-foreground">גלריה</h1>
      <p className="mt-2 subtle">התגלו בעיצובים ובמבחר הזרים שלנו.</p>
      <div className="mt-8">
        <GalleryMasonry images={images} />
      </div>
    </main>
  );
}