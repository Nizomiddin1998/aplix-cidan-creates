import { LegalHero } from "@/widgets/legal/LegalHero";
import { LegalContent } from "@/widgets/legal/LegalContent";

export default function TermsPage() {
  return (
    <main>
      <div style={{ paddingTop: 56 }}>
        <LegalHero title="Terms of Use" lastUpdated="October 28, 2026" />
        <LegalContent>
          <h2>1. Introduction</h2>
          <p>
            By using the Aplix website and services, you agree to comply with
            and be bound by the following terms and conditions of use. Please
            review them carefully.
          </p>

          <h2>2. Use of Service</h2>
          <p>
            Aplix provides API monitoring and analytics services. You may use
            our services only for lawful purposes and in accordance with these
            Terms.
          </p>
          <ul>
            <li>You must be at least 18 years old to use the service.</li>
            <li>
              You are responsible for maintaining the security of your account.
            </li>
            <li>
              You may not use the service for any illegal or unauthorized
              purpose.
            </li>
          </ul>

          <h2>3. Intellectual Property</h2>
          <p>
            All content, features, and functionality of the service are the
            exclusive property of Aplix and its licensors.
          </p>

          <h2>4. Limitation of Liability</h2>
          <p>
            In no event shall Aplix be liable for any indirect, incidental,
            special, consequential or punitive damages arising out of your use
            of the service.
          </p>
        </LegalContent>
      </div>
    </main>
  );
}
