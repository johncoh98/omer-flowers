import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-primary/20 bg-white dark:border-primary/30 dark:bg-black">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">פרחי עומר</h3>
            <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
              זרי פרחים טריים, צמחים ומתנות. שירות אישי ומשלוחים מהירים.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">פרטי קשר</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li>רחוב הראשי 10, תל אביב</li>
              <li>טלפון: <a className="underline" href="tel:+972501234567">050-123-4567</a></li>
              <li>וואטסאפ: <a className="underline" href="https://wa.me/972501234567" target="_blank" rel="noopener noreferrer">הודעה מהירה</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">שעות פתיחה</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li>א׳–ה׳: 09:00–19:00</li>
              <li>ו׳: 09:00–14:00</li>
              <li>שבת: סגור</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-primary/20 pt-6 text-xs text-zinc-500 dark:border-primary/30">
          © {new Date().getFullYear()} פרחי עומר. כל הזכויות שמורות.
        </div>
      </div>
    </footer>
  );
}


