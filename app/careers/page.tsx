import type { Metadata } from "next";
import { SubpageShell } from "@/components/layout/SubpageShell";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the IRON3 team — we hire designers, engineers, athletes, and storytellers obsessed with performance product.",
};

export default function CareersPage() {
  return (
    <SubpageShell
      title="Careers at IRON3"
      eyebrow="Careers"
      lede="We are building software worthy of athletes who wake up before sunrise — again — because the goal matters."
    >
      <p>
        IRON3 is a small, focused team. We care about craft: typography that breathes, motion that
        feels athletic (never frantic), and engineering that respects battery life, sync integrity,
        and trust. If that sounds like your kind of standard, you will probably like it here.
      </p>
      <h2>What we look for</h2>
      <ul>
        <li>
          <strong>Product sense:</strong> you translate ambiguity into decisions users can feel in
          thirty seconds.
        </li>
        <li>
          <strong>Ownership:</strong> you close loops — code, copy, customer impact — without
          waiting for permission.
        </li>
        <li>
          <strong>Taste under constraints:</strong> you can ship premium experiences with pragmatic
          timelines.
        </li>
      </ul>
      <h2>Open roles (examples)</h2>
      <p>
        We hire on a rolling basis. Example lanes include mobile engineering (React Native or native
        excellence), product design (motion-forward), performance marketing, community, and sports
        science advising.
      </p>
      <p>
        If you do not see a role listed yet, send a concise note anyway — tell us what you have
        shipped, what you want to build next, and the race or project that taught you what endurance
        really costs.
      </p>
      <h2>How to apply (placeholder)</h2>
      <p>
        Replace this paragraph with a recruiting email or ATS link. Until then, this page exists to
        signal that IRON3 is a serious product organization with room for exceptional people.
      </p>
    </SubpageShell>
  );
}
