import { Header } from "@/widgets/header/Header";
import { Footer } from "@/widgets/footer/Footer";
import { BlogHero } from "@/widgets/blog/BlogHero";
import { BlogGrid } from "@/widgets/blog/BlogGrid";
import { CTASection } from "@/widgets/cta/CTASection";

export default function BlogPage() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Header />
      <div style={{ paddingTop: 56 }}>
        <BlogHero />
        <BlogGrid />
        <CTASection />
      </div>
      <Footer />
    </main>
  );
}
