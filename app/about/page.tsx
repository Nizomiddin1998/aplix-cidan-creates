import { Header } from "@/widgets/header/Header";
import { Footer } from "@/widgets/footer/Footer";
import { AboutHero } from "@/widgets/about/AboutHero";
import { OurMission } from "@/widgets/about/OurMission";
import { TeamSection } from "@/widgets/about/TeamSection";

export default function AboutPage() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Header />
      <div style={{ paddingTop: 56 }}>
        <AboutHero />
        <OurMission />
        <TeamSection />
      </div>
      <Footer />
    </main>
  );
}
