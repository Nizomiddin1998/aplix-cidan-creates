import { AboutHero } from "@/widgets/about/AboutHero";
import { OurMission } from "@/widgets/about/OurMission";
import { TeamSection } from "@/widgets/about/TeamSection";

export default function AboutPage() {
  return (
    <main>
      <div style={{ paddingTop: 56 }}>
        <AboutHero />
        <OurMission />
        <TeamSection />
      </div>
    </main>
  );
}
