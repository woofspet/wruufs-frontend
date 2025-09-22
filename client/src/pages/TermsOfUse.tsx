import React from "react";
import "./TermsOfUse.css";

const TermsOfUse: React.FC = () => {
  return (
    <div className="terms-container">
      {/* Hero heading */}
      <h1 className="terms-heading">Terms of Use</h1>

      {/* Card for content */}
      <div className="terms-card">
        <p>
          Welcome to{" "}
          <strong>
            <a href="/" className="terms-link">
              Wruufs
            </a>
          </strong>{" "}
          (“we,” “our,” or “us”). By accessing or using our website, you agree
          to comply with and be bound by these Terms of Use. If you do not
          agree, please do not use our website.
        </p>

        <Section title="1. Use of Website">
          <ul>
            <li>You may use our website only for lawful purposes.</li>
            <li>
              You must be at least 18 years old or have parental/guardian
              consent to make purchases.
            </li>
            <li>
              You agree not to use our website in a way that could damage,
              disable, or interfere with its operation.
            </li>
          </ul>
        </Section>

        <Section title="2. Account and Security">
          <ul>
            <li>
              You may need to create an account to access certain features.
            </li>
            <li>
              You are responsible for maintaining the confidentiality of your
              account and password.
            </li>
            <li>
              You agree to notify us immediately of any unauthorized use of your
              account.
            </li>
          </ul>
        </Section>

        <Section title="3. Products and Services">
          <ul>
            <li>
              We strive to provide accurate product descriptions, pricing, and
              availability.
            </li>
            <li>
              Prices and availability are subject to change without notice.
            </li>
            <li>
              We reserve the right to limit quantities or refuse service to
              anyone.
            </li>
            <li>
              All products are intended for pets; use responsibly and follow
              veterinarian guidance.
            </li>
          </ul>
        </Section>

        <Section title="4. Orders and Payments">
          <ul>
            <li>
              By placing an order, you agree to provide accurate information.
            </li>
            <li>
              Payment is processed securely via third-party payment providers.
            </li>
            <li>
              We reserve the right to cancel or refuse any order for any reason,
              including errors in product or pricing information.
            </li>
          </ul>
        </Section>

        <Section title="5. Shipping and Returns">
          <ul>
            <li>Shipping times are estimated and not guaranteed.</li>
            <li>
              Return and refund policies are outlined on our Return Policy page.
            </li>
            <li>
              Certain items (e.g., perishable pet foods or medications) may not
              be eligible for returns.
            </li>
          </ul>
        </Section>

        <Section title="6. Intellectual Property">
          <p>
            All content on this website, including text, graphics, logos,
            images, and software, is owned by or licensed to us. You may not
            reproduce, modify, distribute, or create derivative works without
            our permission.
          </p>
        </Section>

        <Section title="7. Third-Party Links">
          <p>
            Our website may contain links to external sites. We are not
            responsible for their content, policies, or practices.
          </p>
        </Section>

        <Section title="8. Limitation of Liability">
          <p>
            We are not liable for any direct, indirect, incidental, or
            consequential damages arising from your use of our website or
            products. Use our website and products at your own risk.
          </p>
        </Section>

        <Section title="9. Governing Law">
          <p>
            These Terms are governed by the laws of India. Any disputes will be
            resolved in the appropriate courts of India.
          </p>
        </Section>

        <Section title="10. Changes to Terms">
          <p>
            We may update these Terms from time to time. Updated Terms will be
            posted on this page with the effective date.
          </p>
        </Section>

        <Section title="11. Contact Us">
          <p>
            If you have questions or concerns about these Terms, contact us:
          </p>
          <ul>
            <li>
              <strong>Email:</strong> contact@wruufs.com
            </li>
            <li>
              <strong>Address:</strong> India
            </li>
          </ul>
        </Section>
      </div>
    </div>
  );
};

export default TermsOfUse;

// --- Helper Section Component ---
interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <div className="terms-section">
    <h2 className="terms-subheading">{title}</h2>
    <div className="terms-text">{children}</div>
  </div>
);
