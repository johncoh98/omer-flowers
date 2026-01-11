import React from "react";
import GalleryMasonry from "@/components/GalleryMasonry";

const images = [
  "/1.png",
  "/2.png",
  "/3.png",
  "/4.png",
  "/5.png",
  "/6.png",
  "/7.png",
  "/8.png",
  "/9.png",
  "/10.png",
  "/11.png",
  "/12.png",
  "/13.png",
];

export const metadata = {
  title: "גלריה | פרחי עומר",
  description: "השראה וזרים מעוצבים מהגלריה של פרחי עומר.",
};

export default function GalleryPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      <h1 className="section-title">גלריה</h1>
      <p className="mt-2 subtle">התגלו בעיצובים ובמבחר הזרים שלנו.</p>
      <div className="mt-8">
        <GalleryMasonry images={images} />
      </div>
    </main>
  );
}