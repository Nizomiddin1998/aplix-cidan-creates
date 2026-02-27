import { ContactHero } from "@/widgets/contact/ContactHero";
import { ContactForm } from "@/widgets/contact/ContactForm";
import { FAQ } from "@/widgets/faq/FAQ";

export default function ContactPage() {
  return (
    <main>
      <div style={{ paddingTop: 56 }}>
        <ContactHero />
        <ContactForm />
        <FAQ />
      </div>
    </main>
  );
}
