import type { Metadata } from "next";
import { SubpageShell } from "@/components/layout/SubpageShell";

export const metadata: Metadata = {
  title: "GDPR & Data Protection",
  description:
    "How IRON3 and Vibe Digital LLC comply with the General Data Protection Regulation (GDPR) and protect your data rights.",
};

export default function GdprPage() {
  return (
    <SubpageShell
      title="GDPR & Data Protection"
      eyebrow="Legal"
      lede="If you are in the European Economic Area (EEA), the United Kingdom, or Switzerland, this page explains your rights under the General Data Protection Regulation and how we protect them."
    >
      <p>
        <strong>Last updated:</strong> April 18, 2026
      </p>
      <p>
        This page supplements our{" "}
        <a href="/privacy-policy" className="text-iron-red/90 hover:text-iron-red">
          Privacy Policy
        </a>{" "}
        with information specific to data protection regulations applicable in the EEA, UK, and
        Switzerland.
      </p>

      <h2>1. Data Controller</h2>
      <p>
        The data controller responsible for your personal data is:
      </p>
      <p>
        Vibe Digital LLC<br />
        1001 D MAIN ST, STE 600<br />
        KALISPELL, MT 59901-1498<br />
        United States
      </p>
      <p>
        Data protection contact:{" "}
        <a href="mailto:contact@iron3.app" className="text-iron-red/90 hover:text-iron-red">
          contact@iron3.app
        </a>
      </p>

      <h2>2. Legal Bases for Processing</h2>
      <p>We process your personal data under the following legal bases:</p>
      <ul>
        <li>
          <strong>Performance of a contract.</strong> Processing necessary to provide the IRON3
          Service you signed up for — account management, session tracking, preparation plans, data
          synchronization with connected devices, and event calendars.
        </li>
        <li>
          <strong>Legitimate interests.</strong> Improving the Service, troubleshooting bugs,
          preventing fraud, and ensuring platform security — where these interests do not override
          your fundamental rights.
        </li>
        <li>
          <strong>Consent.</strong> Where required — for example, optional marketing communications
          or connecting third-party fitness devices. You may withdraw consent at any time.
        </li>
        <li>
          <strong>Legal obligation.</strong> Processing required to comply with applicable laws, such
          as tax or accounting requirements.
        </li>
      </ul>

      <h2>3. Your Data Subject Rights</h2>
      <p>Under the GDPR, you have the following rights:</p>
      <ul>
        <li>
          <strong>Right of access (Art. 15).</strong> Request a copy of the personal data we hold
          about you.
        </li>
        <li>
          <strong>Right to rectification (Art. 16).</strong> Request correction of inaccurate or
          incomplete data.
        </li>
        <li>
          <strong>Right to erasure (Art. 17).</strong> Request deletion of your personal data
          (&ldquo;right to be forgotten&rdquo;), subject to legal retention obligations.
        </li>
        <li>
          <strong>Right to data portability (Art. 20).</strong> Receive your data in a structured,
          machine-readable format and transmit it to another controller.
        </li>
        <li>
          <strong>Right to restriction (Art. 18).</strong> Request that we limit processing of your
          data in certain circumstances.
        </li>
        <li>
          <strong>Right to object (Art. 21).</strong> Object to processing based on legitimate
          interests, including profiling.
        </li>
        <li>
          <strong>Right to withdraw consent (Art. 7).</strong> Where processing is based on consent,
          withdraw it at any time without affecting the lawfulness of prior processing.
        </li>
        <li>
          <strong>Right not to be subject to automated decision-making (Art. 22).</strong> IRON3 does
          not make decisions based solely on automated processing that produce legal or similarly
          significant effects on you.
        </li>
      </ul>

      <h2>4. How to Exercise Your Rights</h2>
      <p>
        To exercise any of the rights above, email us at{" "}
        <a href="mailto:contact@iron3.app" className="text-iron-red/90 hover:text-iron-red">
          contact@iron3.app
        </a>{" "}
        with the subject line &ldquo;GDPR Request.&rdquo; We will verify your identity and respond
        within 30 days. If your request is complex or we receive a high volume, we may extend this
        by an additional 60 days with notice.
      </p>
      <p>There is no fee for exercising your rights unless requests are manifestly unfounded or excessive.</p>

      <h2>5. International Data Transfers</h2>
      <p>
        IRON3 is operated from the United States. When your personal data is transferred outside the
        EEA/UK, we ensure appropriate safeguards are in place, including:
      </p>
      <ul>
        <li>Standard Contractual Clauses (SCCs) approved by the European Commission.</li>
        <li>Data processing agreements with all sub-processors.</li>
        <li>Encryption in transit and at rest for all personal data.</li>
      </ul>

      <h2>6. Sub-Processors</h2>
      <p>We use the following categories of sub-processors:</p>
      <ul>
        <li>
          <strong>Hosting and database:</strong> Supabase (cloud infrastructure and authentication).
        </li>
        <li>
          <strong>Device integrations:</strong> Garmin, Apple, COROS, Suunto, and Wahoo APIs — data
          exchanged only with your explicit authorization.
        </li>
        <li>
          <strong>Email delivery:</strong> Transactional email service for account notifications and
          service communications.
        </li>
        <li>
          <strong>Error monitoring:</strong> Crash reporting and diagnostics tools for app stability.
        </li>
      </ul>

      <h2>7. Cookies</h2>
      <p>
        The iron3.app marketing website uses only essential cookies necessary for basic site
        functionality (e.g., navigation, security). We do not use third-party advertising or
        behavioral tracking cookies on this site. No cookie consent banner is required for strictly
        necessary cookies under ePrivacy regulations; however, should we add non-essential cookies in
        the future, we will implement a consent mechanism before deployment.
      </p>

      <h2>8. Data Retention</h2>
      <p>We retain personal data as follows:</p>
      <ul>
        <li>
          <strong>Active accounts:</strong> Data is retained for the lifetime of your account.
        </li>
        <li>
          <strong>Deleted accounts:</strong> Personal data is erased or anonymized within 30 days of
          account deletion, except where retention is required by law.
        </li>
        <li>
          <strong>Support correspondence:</strong> Retained for up to 2 years after resolution for
          quality assurance and legal compliance.
        </li>
        <li>
          <strong>Billing and transaction records:</strong> Retained as required by tax and
          accounting regulations (typically 7 years).
        </li>
      </ul>

      <h2>9. Right to Lodge a Complaint</h2>
      <p>
        If you believe your data protection rights have been violated, you have the right to lodge a
        complaint with your local supervisory authority. A list of EEA data protection authorities is
        available at{" "}
        <a
          href="https://edpb.europa.eu/about-edpb/about-edpb/members_en"
          target="_blank"
          rel="noopener noreferrer"
          className="text-iron-red/90 hover:text-iron-red"
        >
          edpb.europa.eu
        </a>
        .
      </p>
      <p>
        We encourage you to contact us first at{" "}
        <a href="mailto:contact@iron3.app" className="text-iron-red/90 hover:text-iron-red">
          contact@iron3.app
        </a>{" "}
        so we can attempt to resolve any concerns directly.
      </p>

      <h2>10. Changes to This Page</h2>
      <p>
        We may update this GDPR information as our practices evolve or regulations change. Updates
        will be reflected with a revised &ldquo;Last updated&rdquo; date at the top of this page.
      </p>

      <h2>11. Contact</h2>
      <p>For any data protection inquiries:</p>
      <p>
        Vibe Digital LLC<br />
        1001 D MAIN ST, STE 600<br />
        KALISPELL, MT 59901-1498<br />
        United States
      </p>
      <p>
        Email:{" "}
        <a href="mailto:contact@iron3.app" className="text-iron-red/90 hover:text-iron-red">
          contact@iron3.app
        </a>
        <br />
        Phone: +1 (917) 730-4472
      </p>
    </SubpageShell>
  );
}
