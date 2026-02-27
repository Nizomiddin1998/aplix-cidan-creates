import { ChangelogHero } from "@/widgets/changelog/ChangelogHero";
import { ChangelogList } from "@/widgets/changelog/ChangelogList";
import { CTASection } from "@/widgets/cta/CTASection";

export default function ChangelogPage() {
  return (
    <main>
      <div style={{ paddingTop: 56 }}>
        <ChangelogHero />
        <ChangelogList />
        <CTASection />
      </div>
    </main>
  );
}
