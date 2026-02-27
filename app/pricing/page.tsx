import { PricingHero } from "@/widgets/pricing/PricingHero";
import { Pricing } from "@/widgets/pricing/Pricing";
import { ComparisonTable } from "@/widgets/pricing/ComparisonTable";
import { FAQ } from "@/widgets/faq/FAQ";

export default function PricingPage() {
  return (
    <main>
      <div style={{ paddingTop: 56 }}>
        <PricingHero />
        <Pricing />
        <ComparisonTable />
        <FAQ />
      </div>
    </main>
  );
}
