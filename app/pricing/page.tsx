import { Header } from "@/widgets/header/Header";
import { Footer } from "@/widgets/footer/Footer";
import { PricingHero } from "@/widgets/pricing/PricingHero";
import { Pricing } from "@/widgets/pricing/Pricing";
import { ComparisonTable } from "@/widgets/pricing/ComparisonTable";
import { FAQ } from "@/widgets/faq/FAQ";

export default function PricingPage() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Header />
      <div style={{ paddingTop: 56 }}>
        <PricingHero />
        <Pricing />
        <ComparisonTable />
        <FAQ />
      </div>
      <Footer />
    </main>
  );
}
