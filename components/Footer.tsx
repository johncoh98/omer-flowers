import React from "react";
import { siteConfig } from "@/lib/siteConfig";

export default function Footer() {
  return (
    <footer className="border-t border-transparent bg-[var(--footer-bg)]">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8 text-white">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold">{siteConfig.storeName}</h3>
            <p className="mt-3 text-sm text-white/70">
              זרי פרחים טריים, צמחים ומתנות. שירות אישי ומשלוחים מהירים.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold">פרטי קשר</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li>{siteConfig.address.street}, {siteConfig.address.city}</li>
              <li>טלפון: <a className="underline" href={`tel:${siteConfig.phone.e164}`}>{siteConfig.phone.display}</a></li>
              <li>וואטסאפ: <a className="underline" href={`https://wa.me/${siteConfig.whatsappNumber}`} target="_blank" rel="noopener noreferrer">הודעה מהירה</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">שעות פתיחה</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li>{siteConfig.hours.weekday}</li>
              <li>{siteConfig.hours.friday}</li>
              <li>{siteConfig.hours.saturday}</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/60">
          © {new Date().getFullYear()} {siteConfig.storeName}. כל הזכויות שמורות.
        </div>
      </div>
    </footer>
  );
}


