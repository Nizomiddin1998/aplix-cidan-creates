import { Header } from "@/widgets/header/Header";
import { Footer } from "@/widgets/footer/Footer";
import { ContactHero } from "@/widgets/contact/ContactHero";
import { ContactForm } from "@/widgets/contact/ContactForm";
import { FAQ } from "@/widgets/faq/FAQ";

export default function ContactPage() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Header />
      <div style={{ paddingTop: 56 }}>
        <ContactHero />
        <ContactForm />
        <FAQ />
      </div>
      <Footer />
    </main>
  );
}
