import React from "react";

export const metadata = {
  title: "משלוחים | פרחי עומר",
  description: "מידע על זמני ועלויות משלוח מפרחי עומר.",
};

export default function DeliveryPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 lg:px-8">
      <h1 className="text-3xl font-extrabold tracking-tight text-foreground">משלוחים</h1>
      <div className="prose prose-zinc mt-6 dark:prose-invert">
        <ul>
          <li>משלוח בתוך העיר: 25 ₪ (עד 3 שעות)</li>
          <li>משלוח לשכונות סמוכות: 35–45 ₪</li>
          <li>איסוף עצמי: ללא עלות</li>
        </ul>
        <p>משלוחים יוצאים בימים א׳–ו׳ בהתאם לשעות הפתיחה. להזמנות דחופות, פנו אלינו בוואטסאפ.</p>
      </div>
    </main>
  );
}




