import React from "react";
import { siteConfig } from "@/lib/siteConfig";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "משלוחים | פרחי עומר",
  description: "מידע על זמני ועלויות משלוח מפרחי עומר.",
};

export default function DeliveryPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 lg:px-8">
      <h1 className="text-3xl font-extrabold tracking-tight text-foreground">משלוחים</h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">תמחור פשוט ושירות מהיר עד הבית</p>

      <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
        <table className="w-full text-right text-sm">
          <thead className="bg-muted/60 dark:bg-zinc-900">
            <tr className="text-zinc-600 dark:text-zinc-300">
              <th className="px-4 py-3 font-medium">אזור</th>
              <th className="px-4 py-3 font-medium">מחיר</th>
              <th className="px-4 py-3 font-medium">הערות</th>
            </tr>
          </thead>
          <tbody>
            {siteConfig.deliveryPrices.map((row, i) => (
              <tr key={i} className="border-t border-zinc-200 dark:border-zinc-800">
                <td className="px-4 py-3">{row.label}</td>
                <td className="px-4 py-3">{typeof row.price === "number" ? `${row.price} ₪` : row.price ?? row.priceRange}</td>
                <td className="px-4 py-3">{row.note ?? "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="prose prose-zinc mt-6 dark:prose-invert">
        <p>משלוחים יוצאים בימים {siteConfig.hours.weekday.replace("א׳–ה׳: ", "")} ובימי {siteConfig.hours.friday.replace("ו׳: ", "")}. הזמנות בשבת יטופלו ביום א׳.</p>
        <p>לאזורים מרוחקים ייתכן תוספת זמן/עלות – צרו קשר לווידוא.</p>
      </div>

      <div className="mt-6"><WhatsAppButton /></div>
    </main>
  );
}




