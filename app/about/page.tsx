import React from "react";

export const metadata = {
  title: "עלינו | פרחי עומר",
  description: "מי אנחנו, הסיפור של פרחי עומר והאהבה שלנו לפרחים.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 lg:px-8">
      <h1 className="text-3xl font-extrabold tracking-tight text-foreground">על פרחי עומר</h1>
      <div className="prose prose-zinc mt-6 dark:prose-invert">
        <p>
          אנחנו פרחי עומר – חנות שכונתית חמה ומשפחתית שמאמינה בכוח של פרחים לשמח,
          לרגש ולהפוך כל רגע לקצת יותר מיוחד. אצלנו תמצאו זרי פרחים טריים מדי יום,
          צמחים לבית ולמשרד, ומגוון מתנות מעוצבות.
        </p>
        <p>
          אנחנו עובדים עם סיטונאים מקומיים כדי להבטיח איכות וטריות, ומעצבים כל זר
          עם תשומת לב לפרטים ולטעם האישי שלכם.
        </p>
      </div>
    </main>
  );
}




