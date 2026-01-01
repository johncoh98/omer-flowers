import React from "react";
import { siteConfig } from "@/lib/siteConfig";

export default function ContactDetails() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
        <h3 className="text-lg font-semibold text-foreground">פרטי קשר</h3>
        <ul className="mt-4 space-y-2 text-zinc-700 dark:text-zinc-300">
          <li>כתובת: {siteConfig.address.street}, {siteConfig.address.city}</li>
          <li>טלפון: <a className="underline" href={`tel:${siteConfig.phone.e164}`}>{siteConfig.phone.display}</a></li>
          <li>וואטסאפ: <a className="underline" href={`https://wa.me/${siteConfig.whatsappNumber}`} target="_blank" rel="noopener noreferrer">שלחו הודעה</a></li>
        </ul>
      </div>
      <div className="overflow-hidden rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
        <div className="h-72 w-full rounded-xl bg-[url('/11.png')] bg-cover bg-center opacity-90" aria-hidden="true" />
        <div className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
          מפת הגעה: {siteConfig.address.street}, {siteConfig.address.city}
        </div>
      </div>
    </div>
  );
}




