import { Header } from "@/widgets/header/Header";
import { Footer } from "@/widgets/footer/Footer";
import { ChangelogHero } from "@/widgets/changelog/ChangelogHero";
import { ChangelogList } from "@/widgets/changelog/ChangelogList";
import { CTASection } from "@/widgets/cta/CTASection";

export default function ChangelogPage() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Header />
      <div style={{ paddingTop: 56 }}>
        <ChangelogHero />
        <ChangelogList />
        <CTASection />
      </div>
      <Footer />
    </main>
  );
}
