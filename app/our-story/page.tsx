import type { Metadata } from "next";
import { SubpageShell } from "@/components/layout/SubpageShell";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Why IRON3 exists — a premium training companion for athletes building seasons worth remembering.",
};

export default function OurStoryPage() {
  return (
    <SubpageShell
      title="Built at the intersection of obsession and grace."
      eyebrow="Our story"
      lede="IRON3 began with a simple frustration: endurance training deserves software that feels as serious as the start line — without drowning athletes in noise."
    >
      <p>
        We are a team of athletes, coaches, and product builders who believe preparation should be
        legible. Too many tools optimize for novelty. IRON3 optimizes for continuity — a calendar
        that respects your life, sessions that record what matters, and progression you can trust
        when doubt shows up three weeks out from race day.
      </p>
      <p>
        The name IRON3 honors the triathlon archetype — swim, bike, run — but it is bigger than
        three sports. It is three commitments: choose a worthy target, train with intent, and
        measure honestly. That third piece — honest measurement — is what turns hope into
        strategy.
      </p>
      <h2>What we refuse to do</h2>
      <p>
        We do not sell shortcuts. We do not promise outcomes we cannot own with you. We do not confuse
        activity for progress. IRON3 is for athletes who can handle feedback — even when it is quiet.
      </p>
      <h2>What we wake up for</h2>
      <p>
        If we do our job, you will feel something subtle but undeniable: your season makes sense. The
        work connects to the race. The data supports the story your body is trying to tell. And on
        the morning when you stand at the start line, you will know — not hope — that you prepared.
      </p>
    </SubpageShell>
  );
}
