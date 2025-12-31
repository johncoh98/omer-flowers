import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import Showcase from "@/components/Showcase";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Showcase />
      <ContactForm />
    </main>
  );
}
