import Hero from "@/components/Hero";
import BouquetCarousel from "@/components/BouquetCarousel";
import HowItWorks from "@/components/HowItWorks";
import Trust from "@/components/Trust";
import Reviews from "@/components/Reviews";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <BouquetCarousel />
      <HowItWorks />
      <Trust />
      <Reviews />
      <CTASection />
      <ContactForm />
    </main>
  );
}
