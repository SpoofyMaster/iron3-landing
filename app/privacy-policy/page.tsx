import type { Metadata } from "next";
import { SubpageShell } from "@/components/layout/SubpageShell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How IRON3 and Vibe Digital LLC collect, use, and protect your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <SubpageShell
      title="Privacy Policy"
      eyebrow="Legal"
      lede="Your trust matters. This policy explains how Vibe Digital LLC, operating as IRON3, handles your personal information."
    >
      <p>
        <strong>Last updated:</strong> April 18, 2026
      </p>
      <p>
        Vibe Digital LLC (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;IRON3&rdquo;) operates the
        IRON3 mobile application and the iron3.app website (collectively, the
        &ldquo;Service&rdquo;). This Privacy Policy describes how we collect, use, share, and
        protect information when you use our Service.
      </p>
      <p>
        By using IRON3, you agree to the collection and use of information as described here. If you
        do not agree, please do not use the Service.
      </p>

      <h2>1. Information We Collect</h2>
      <p>
        <strong>Account information.</strong> When you create an account, we collect your name, email
        address, and authentication credentials. You may optionally provide a profile photo, date of
        birth, and training preferences.
      </p>
      <p>
        <strong>Training and activity data.</strong> IRON3 records swim, bike, and run sessions you
        log — including duration, distance, pace, heart rate, power, cadence, and other performance
        metrics. If you connect a compatible device (Garmin, Apple Watch, COROS, Suunto, or Wahoo),
        we receive data synced from that device through the manufacturer&rsquo;s API with your
        authorization.
      </p>
      <p>
        <strong>Event and season data.</strong> Races and events you add to your calendar, preparation
        plans, goal targets, and competition results.
      </p>
      <p>
        <strong>Device and usage information.</strong> We automatically collect device type, operating
        system version, app version, crash logs, and general usage patterns (features used, screen
        views) to improve reliability and performance.
      </p>
      <p>
        <strong>Communications.</strong> If you contact us for support, we retain the correspondence
        and any information you provide in it.
      </p>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>Deliver and maintain core features: session tracking, preparation plans, event calendars, and performance analytics.</li>
        <li>Sync data between your connected devices and the IRON3 app.</li>
        <li>Personalize training insights and recommendations.</li>
        <li>Send important service updates, security alerts, and (with your consent) product news.</li>
        <li>Diagnose technical issues, monitor performance, and improve the Service.</li>
        <li>Enforce our Terms &amp; Conditions and protect against misuse.</li>
      </ul>

      <h2>3. Sharing and Disclosure</h2>
      <p>We do not sell your personal data. We share information only in these limited circumstances:</p>
      <ul>
        <li>
          <strong>Service providers.</strong> We use Supabase for database hosting and authentication,
          and select vendors for analytics, error tracking, and email delivery. Each provider
          processes data solely on our instructions under contractual data protection obligations.
        </li>
        <li>
          <strong>Device integrations.</strong> When you connect a fitness watch, we exchange data with
          the manufacturer&rsquo;s platform as you have authorized. Their use of that data is governed
          by their own privacy policy.
        </li>
        <li>
          <strong>Legal requirements.</strong> We may disclose information if required by law,
          subpoena, or government request, or to protect the rights, safety, or property of IRON3,
          our users, or the public.
        </li>
        <li>
          <strong>Business transfers.</strong> In connection with a merger, acquisition, or sale of
          assets, your data may be transferred — subject to this policy or successor terms.
        </li>
      </ul>

      <h2>4. Data Retention</h2>
      <p>
        We retain your account and training data for as long as your account is active. If you delete
        your account, we will remove or anonymize your personal data within 30 days, except where
        retention is required by law (e.g., billing records) or necessary to resolve disputes.
      </p>
      <p>
        Aggregated, de-identified data that cannot reasonably identify you may be retained
        indefinitely for analytics and product improvement.
      </p>

      <h2>5. Security</h2>
      <p>
        We implement industry-standard technical and organizational measures — including encryption in
        transit (TLS) and at rest, access controls, and regular security reviews — to protect your
        data. No system is perfectly secure; we cannot guarantee absolute security but are committed
        to prompt disclosure and remediation if a breach occurs.
      </p>

      <h2>6. Your Rights</h2>
      <p>Depending on your jurisdiction, you may have the right to:</p>
      <ul>
        <li>Access the personal data we hold about you.</li>
        <li>Correct inaccurate or incomplete data.</li>
        <li>Delete your account and associated data.</li>
        <li>Export your data in a portable format.</li>
        <li>Restrict or object to certain processing activities.</li>
        <li>Withdraw consent at any time (where processing is based on consent).</li>
      </ul>
      <p>
        To exercise any of these rights, contact us at{" "}
        <a href="mailto:contact@iron3.app" className="text-iron-red/90 hover:text-iron-red">
          contact@iron3.app
        </a>
        . We will respond within 30 days (or sooner where required by applicable law).
      </p>
      <p>
        For users in the European Economic Area, see our{" "}
        <a href="/gdpr" className="text-iron-red/90 hover:text-iron-red">
          GDPR &amp; Data Protection
        </a>{" "}
        page for additional detail on your rights under the General Data Protection Regulation.
      </p>

      <h2>7. Children&rsquo;s Privacy</h2>
      <p>
        IRON3 is not intended for children under 16. We do not knowingly collect personal data from
        children. If you believe a child has provided us with personal information, please contact us
        and we will promptly delete it.
      </p>

      <h2>8. International Data Transfers</h2>
      <p>
        IRON3 is operated from the United States. If you access the Service from outside the U.S.,
        your data may be transferred to and processed in the United States or other jurisdictions
        where our service providers operate. We take steps to ensure appropriate safeguards are in
        place for international transfers in compliance with applicable data protection law.
      </p>

      <h2>9. Cookies and Tracking</h2>
      <p>
        The iron3.app marketing website uses minimal cookies — primarily essential cookies required
        for site functionality. We do not use third-party advertising trackers on this site. The
        IRON3 app does not use browser cookies.
      </p>

      <h2>10. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Material changes will be communicated
        via the app, email, or a prominent notice on this page. Continued use of the Service after
        changes take effect constitutes acceptance of the revised policy.
      </p>

      <h2>11. Contact Us</h2>
      <p>
        If you have questions or concerns about this Privacy Policy, contact:
      </p>
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
