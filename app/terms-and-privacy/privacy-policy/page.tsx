import { LegalHero } from "@/widgets/legal/LegalHero";
import { LegalContent } from "@/widgets/legal/LegalContent";

export default function PrivacyPage() {
  return (
    <main>
      <div style={{ paddingTop: 56 }}>
        <LegalHero title="Privacy Policy" lastUpdated="October 28, 2026" />
        <LegalContent>
          <h2>1. Data Collection</h2>
          <p>
            We collect information that you provide to us directly, such as when
            you create an account, subscribe to our newsletter, or contact us
            for support.
          </p>

          <h2>2. Use of Data</h2>
          <p>
            We use the data we collect to provide, maintain, and improve our
            services, and to communicate with you about updates and products.
          </p>
          <ul>
            <li>To personalize your experience.</li>
            <li>To improve our website functionality.</li>
            <li>To provide customer support.</li>
          </ul>

          <h2>3. Data Security</h2>
          <p>
            We implement a variety of security measures to maintain the safety
            of your personal information when you enter, submit, or access your
            information.
          </p>

          <h2>4. Third-Party Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personally
            identifiable information to outside parties except for trusted
            partners who assist us in operating our website.
          </p>
        </LegalContent>
      </div>
    </main>
  );
}
