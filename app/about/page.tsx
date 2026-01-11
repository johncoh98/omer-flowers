import React from "react";

export const metadata = {
  title: "עלינו | פרחי עומר",
  description: "מי אנחנו, הסיפור של פרחי עומר והאהבה שלנו לפרחים.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      <h1 className="section-title">הסיפור שלנו</h1>
      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="prose prose-zinc dark:prose-invert lg:col-span-2">
          <h2>מי אנחנו</h2>
          <p>
            אנחנו פרחי עומר – חנות שכונתית חמה ומשפחתית שמאמינה בכוח של פרחים לשמח,
            לרגש ולהפוך כל רגע לקצת יותר מיוחד. אצלנו תמצאו זרי פרחים טריים מדי יום,
            צמחים לבית ולמשרד, ומגוון מתנות מעוצבות.
          </p>
          <h2>מה מייחד אותנו</h2>
          <p>
            כל זר שאנחנו מרכיבים מקבל תשומת לב מלאה לפרטים, צבעים ותחושה. אנחנו כאן כדי
            להקשיב, לייעץ ולהתאים בדיוק לטעם שלכם.
          </p>
          <h2>מקורות פרחים</h2>
          <p>
            אנו עובדים עם מגדלים מקומיים וספקים נבחרים כדי להבטיח טריות ואיכות לאורך כל השנה.
          </p>
          <h2>שירות וטריות</h2>
          <p>
            משלוחים מהירים בעיר, שירות אישי בוואטסאפ ותשלום נוח – כדי שהחוויה תהיה נעימה ופשוטה.
          </p>
        </div>
        <div className="lg:col-span-1">
          <div className="card overflow-hidden">
            <img src="/12.png" alt="צוות החנות פרחי עומר" className="img-cover aspect-[4/5]" />
            <div className="p-4">
              <h3 className="text-base font-semibold">הצוות והחנות</h3>
              <p className="subtle mt-1 text-sm">קפה טוב, חיוך רחב ופרחים טריים – כל יום.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}




