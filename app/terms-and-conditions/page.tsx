import type { Metadata } from "next";
import { SubpageShell } from "@/components/layout/SubpageShell";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms of use for IRON3 — placeholder terms for the IRON3 marketing website.",
  robots: { index: false, follow: false },
};

export default function TermsPage() {
  return (
    <SubpageShell
      title="Terms & Conditions"
      eyebrow="Legal"
      lede="This is a placeholder Terms & Conditions document. Replace with counsel-reviewed terms before production launch."
    >
      <p>
        <strong>Last updated:</strong> April 17, 2026. This document is a placeholder and does not
        constitute legal advice.
      </p>
      <h2>Agreement to terms</h2>
      <p>
        Placeholder: by accessing or using IRON3 services, users agree to these terms and any
        incorporated policies (including Privacy Policy and acceptable use rules).
      </p>
      <h2>License and acceptable use</h2>
      <p>
        Placeholder: grant of a limited, revocable license to use the software; prohibitions on
        misuse, scraping, harmful automation, infringement, reverse engineering where restricted,
        and conduct that threatens athletes, staff, or platform integrity.
      </p>
      <h2>Accounts and eligibility</h2>
      <p>
        Placeholder: age requirements, account accuracy, credentials, responsibility for activity
        under the account, and termination for violations.
      </p>
      <h2>Health and safety</h2>
      <p>
        Placeholder: IRON3 is not medical advice; users should consult professionals for health
        decisions; training involves inherent risk; users assume responsibility for their activities.
      </p>
      <h2>Disclaimers and limitation of liability</h2>
      <p>
        Placeholder: warranties disclaimed to the extent permitted; cap and exclusions on
        liability; carve-outs where non-waivable by law.
      </p>
      <h2>Changes, governing law, and disputes</h2>
      <p>
        Placeholder: how terms may change; notice mechanics; governing law and venue; informal dispute
        resolution or arbitration where applicable.
      </p>
      <h2>Contact</h2>
      <p>Placeholder: legal/support contact information for notices and questions.</p>
    </SubpageShell>
  );
}
