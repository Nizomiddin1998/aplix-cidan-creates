import { BlogHero } from "@/widgets/blog/BlogHero";
import { BlogGrid } from "@/widgets/blog/BlogGrid";
import { CTASection } from "@/widgets/cta/CTASection";

export default function BlogPage() {
  return (
    <main>
      <div style={{ paddingTop: 56 }}>
        <BlogHero />
        <BlogGrid />
        <CTASection />
      </div>
    </main>
  );
}
