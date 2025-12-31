import React from "react";
import ContactForm from "@/components/ContactForm";
import ContactDetails from "@/components/ContactDetails";

export const metadata = {
  title: "צור קשר | פרחי עומר",
  description: "צור קשר עם פרחי עומר להזמנות ושאלות.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      <h1 className="text-3xl font-extrabold tracking-tight text-foreground">צור קשר</h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        נשמח לשוחח, לייעץ ולהרכיב לכם זר מושלם.
      </p>
      <div className="mt-8 space-y-10">
        <ContactDetails />
        <ContactForm />
      </div>
    </main>
  );
}




