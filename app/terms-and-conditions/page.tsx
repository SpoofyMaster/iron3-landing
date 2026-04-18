import type { Metadata } from "next";
import { SubpageShell } from "@/components/layout/SubpageShell";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms of use for IRON3, a product of Vibe Digital LLC.",
};

export default function TermsPage() {
  return (
    <SubpageShell
      title="Terms & Conditions"
      eyebrow="Legal"
      lede="Please read these terms carefully before using IRON3. By accessing or using our Service, you agree to be bound by these terms."
    >
      <p>
        <strong>Last updated:</strong> April 18, 2026
      </p>
      <p>
        These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your use of the IRON3 mobile
        application and the iron3.app website (the &ldquo;Service&rdquo;), operated by Vibe Digital
        LLC (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;IRON3&rdquo;), a Montana limited
        liability company.
      </p>

      <h2>1. Agreement to Terms</h2>
      <p>
        By creating an account or using any part of the Service, you confirm that you are at least 16
        years old and agree to these Terms and our{" "}
        <a href="/privacy-policy" className="text-iron-red/90 hover:text-iron-red">
          Privacy Policy
        </a>
        . If you do not agree, do not use the Service.
      </p>

      <h2>2. License to Use</h2>
      <p>
        We grant you a limited, non-exclusive, non-transferable, revocable license to use the IRON3
        app and website for your personal, non-commercial training purposes. You may not:
      </p>
      <ul>
        <li>Copy, modify, distribute, or create derivative works of the Service or its content.</li>
        <li>Reverse engineer, decompile, or disassemble any part of the software.</li>
        <li>Use automated tools to scrape, crawl, or extract data from the Service.</li>
        <li>Sublicense, lease, or rent access to any other person or entity.</li>
        <li>Use the Service for any unlawful purpose or in a way that harms other users.</li>
      </ul>

      <h2>3. Your Account</h2>
      <p>
        You are responsible for maintaining the confidentiality of your account credentials and for
        all activity under your account. You agree to provide accurate, current information and to
        notify us immediately at{" "}
        <a href="mailto:contact@iron3.app" className="text-iron-red/90 hover:text-iron-red">
          contact@iron3.app
        </a>{" "}
        if you suspect unauthorized access. We reserve the right to suspend or terminate accounts
        that violate these Terms.
      </p>

      <h2>4. Training Data and Content</h2>
      <p>
        You retain ownership of the training data, session logs, and content you submit to IRON3. By
        using the Service, you grant us a limited license to store, process, and display your data
        solely to provide and improve the Service. We will not use your individual data for
        advertising. Aggregated, anonymized data may be used for product analytics.
      </p>

      <h2>5. Health and Safety Disclaimer</h2>
      <p>
        <strong>IRON3 is not a medical device and does not provide medical advice.</strong> Training
        plans, performance insights, and all content within the Service are for informational and
        planning purposes only. Endurance training carries inherent physical risks including injury,
        illness, and — in extreme cases — death.
      </p>
      <p>
        You should consult a qualified healthcare professional before beginning any training program.
        You assume full responsibility for your training decisions and physical activity. IRON3 is
        not liable for any injury, harm, or health consequence arising from your use of the Service.
      </p>

      <h2>6. Third-Party Integrations</h2>
      <p>
        IRON3 integrates with third-party device platforms (Garmin, Apple Watch, COROS, Suunto,
        Wahoo). These integrations are provided for your convenience. We are not responsible for the
        availability, accuracy, or security of third-party services. Your use of those platforms is
        governed by their respective terms and privacy policies.
      </p>

      <h2>7. Intellectual Property</h2>
      <p>
        The IRON3 name, logo, design, software, and all associated content are the property of Vibe
        Digital LLC or its licensors, protected by copyright, trademark, and other intellectual
        property laws. Nothing in these Terms grants you any right, title, or interest in our
        intellectual property except the limited license described above.
      </p>

      <h2>8. Termination</h2>
      <p>
        You may close your account at any time by contacting us. We may suspend or terminate your
        access without notice if you violate these Terms or if continued operation of your account
        poses a risk to other users or the Service. Upon termination, your license to use the
        Service ends immediately. Sections that by their nature should survive termination
        (disclaimers, liability limits, governing law) will continue to apply.
      </p>

      <h2>9. Disclaimers</h2>
      <p>
        THE SERVICE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT
        WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF
        MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT
        THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE.
      </p>

      <h2>10. Limitation of Liability</h2>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, VIBE DIGITAL LLC AND ITS OFFICERS, DIRECTORS,
        EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
        CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF DATA, PROFITS, OR GOODWILL, ARISING OUT
        OF OR RELATED TO YOUR USE OF THE SERVICE.
      </p>
      <p>
        OUR TOTAL LIABILITY FOR ANY CLAIM RELATED TO THE SERVICE SHALL NOT EXCEED THE AMOUNT YOU
        PAID US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR ONE HUNDRED U.S. DOLLARS
        ($100.00), WHICHEVER IS GREATER.
      </p>

      <h2>11. Governing Law</h2>
      <p>
        These Terms are governed by and construed in accordance with the laws of the State of
        Montana, United States, without regard to conflict-of-law principles. Any legal action
        arising from these Terms shall be brought exclusively in the state or federal courts located
        in Flathead County, Montana.
      </p>

      <h2>12. Dispute Resolution</h2>
      <p>
        Before filing any claim, you agree to attempt informal resolution by contacting us at{" "}
        <a href="mailto:contact@iron3.app" className="text-iron-red/90 hover:text-iron-red">
          contact@iron3.app
        </a>
        . If we cannot resolve the dispute within 30 days, either party may pursue formal
        proceedings as described above.
      </p>

      <h2>13. Changes to These Terms</h2>
      <p>
        We may modify these Terms at any time. Material changes will be communicated via the app,
        email, or a prominent notice on this page with an updated &ldquo;Last updated&rdquo; date.
        Continued use of the Service after changes take effect constitutes your acceptance of the
        revised Terms.
      </p>

      <h2>14. Contact Us</h2>
      <p>For questions about these Terms, contact:</p>
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
