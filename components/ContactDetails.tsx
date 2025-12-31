import React from "react";

export default function ContactDetails() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
        <h3 className="text-lg font-semibold text-foreground">פרטי קשר</h3>
        <ul className="mt-4 space-y-2 text-zinc-700 dark:text-zinc-300">
          <li>כתובת: רחוב הראשי 10, תל אביב</li>
          <li>טלפון: <a className="underline" href="tel:+972501234567">050-123-4567</a></li>
          <li>וואטסאפ: <a className="underline" href="https://wa.me/972501234567" target="_blank" rel="noopener noreferrer">שלחו הודעה</a></li>
        </ul>
      </div>
      <div className="overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
        <iframe
          title="מפה"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86041.75121277522!2d34.7300937!3d32.0804809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4b82b9f062b1%3A0x6f01fd2599b2c1a7!2sTel%20Aviv!5e0!3m2!1sen!2sil!4v1700000000000"
          width="100%"
          height="280"
          loading="lazy"
          style={{ border: 0 }}
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}




