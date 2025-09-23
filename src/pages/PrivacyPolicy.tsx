import React from "react";
import "./PrivacyPolicy.css"; 
import ScrollToTopButton from "../components/ScrollToTopButton";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="privacy-container">
      {/* Hero heading */}
      <h1 className="privacy-heading">Privacy Policy</h1>

      {/* Card for content */}
      <div className="privacy-card">
        <p>
          <strong>
            <a href="/" className="privacy-link">
              Wruufs
            </a>
          </strong>{" "}
          (“we,” “our,” or “us”) values your privacy. This Privacy Policy
          explains how we collect, use, and protect information when you visit
          our website or purchase our products, including pet food, pet
          medications, and accessories.
        </p>

        <Section title="1. Information We Collect">
          <p>We may collect the following types of information:</p>
          <ul>
            <li>
              <strong>Personal Information:</strong> Name, email, phone number,
              shipping/billing addresses, payment info (processed securely).
            </li>
            <li>
              <strong>Non-Personal Information:</strong> Browser type, device
              info, IP address, website usage data, cookies, and similar
              technologies.
            </li>
            <li>
              <strong>Health & Pet Information:</strong> Information about your
              pet (age, breed, health conditions) relevant for recommendations
              or purchases.
            </li>
          </ul>
        </Section>

        <Section title="2. How We Use Your Information">
          <ul>
            <li>Process orders and payments.</li>
            <li>Deliver products and provide customer support.</li>
            <li>Personalize your shopping experience.</li>
            <li>Send promotional emails or updates (with your consent).</li>
            <li>Comply with legal obligations.</li>
          </ul>
        </Section>

        <Section title="3. Sharing Your Information">
          <p>
            We do <strong>not</strong> sell or rent your personal information.
            We may share it with:
          </p>
          <ul>
            <li>
              Service providers for payment, shipping, or website functionality.
            </li>
            <li>Legal authorities when required by law.</li>
            <li>Marketing partners only if you have opted in.</li>
          </ul>
        </Section>

        <Section title="4. Cookies and Tracking">
          <p>
            We use cookies and similar technologies to remember preferences,
            improve functionality, and analyze website traffic. You can manage
            or disable cookies via your browser, but some features may not work
            properly.
          </p>
        </Section>

        <Section title="5. Data Security">
          <p>
            We implement industry-standard measures to protect your information,
            including encryption and secure storage. However, no method is 100%
            secure.
          </p>
        </Section>

        <Section title="6. Your Rights">
          <p>
            You may have rights to access, update, or delete your personal
            information, opt out of marketing, and restrict or object to data
            processing. Contact us at <strong>contact@wruufs.com</strong> to
            exercise these rights.
          </p>
        </Section>

        <Section title="7. Third-Party Links">
          <p>
            Our website may contain links to external sites. We are not
            responsible for their privacy practices and encourage reading their
            policies.
          </p>
        </Section>

        <Section title="8. Children’s Privacy">
          <p>
            Our services are not directed to children under 13. We do not
            knowingly collect personal information from children. If discovered,
            we will delete it.
          </p>
        </Section>

        <Section title="9. Changes to This Privacy Policy">
          <p>
            We may update this Privacy Policy occasionally. The updated version
            will be posted on this page with the effective date.
          </p>
        </Section>

        <Section title="10. Contact Us">
          <p>If you have questions or concerns, contact us at:</p>
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
      <ScrollToTopButton />
    </div>
  );
};

export default PrivacyPolicy;

// --- Helper Section Component ---
interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <div className="privacy-section">
    <h2 className="privacy-subheading">{title}</h2>
    <div className="privacy-text">{children}</div>
  </div>
);
