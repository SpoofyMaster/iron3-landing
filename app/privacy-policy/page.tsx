import type { Metadata } from "next";
import { SubpageShell } from "@/components/layout/SubpageShell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy practices for IRON3 — placeholder policy for the IRON3 marketing website.",
  robots: { index: false, follow: false },
};

export default function PrivacyPolicyPage() {
  return (
    <SubpageShell
      title="Privacy Policy"
      eyebrow="Legal"
      lede="This is a placeholder Privacy Policy for the IRON3 marketing website and product. Replace with counsel-reviewed text before production launch."
    >
      <p>
        <strong>Last updated:</strong> April 17, 2026. This document is a placeholder and does not
        constitute legal advice.
      </p>
      <h2>Information we may collect</h2>
      <p>
        In a production deployment, IRON3 would describe categories such as account information,
        training data provided by you or synced devices, usage analytics (where permitted),
        communications with support, and technical diagnostics needed to operate the service
        securely.
      </p>
      <h2>How information may be used</h2>
      <p>
        Placeholder: to deliver core features (planning, tracking, synchronization), to
        personalize the experience where enabled, to communicate important service updates, to
        secure accounts, and to improve reliability and performance.
      </p>
      <h2>Sharing</h2>
      <p>
        Placeholder: vendors who process data on our instructions (hosting, analytics, email
        delivery), legal requests where required, and business transfers as permitted by law — each
        described with specifics in a final policy.
      </p>
      <h2>Your choices</h2>
      <p>
        Placeholder: account controls, marketing preferences, cookie settings (where applicable),
        export/delete flows, and region-specific rights where GDPR or similar regimes apply.
      </p>
      <h2>Security</h2>
      <p>
        Placeholder: description of administrative, technical, and organizational safeguards
        appropriate to the risk — without marketing promises that legal counsel would not approve.
      </p>
      <h2>Contact</h2>
      <p>
        Placeholder: a dedicated privacy contact channel (email/web form) and jurisdiction-specific
        details as required.
      </p>
    </SubpageShell>
  );
}
