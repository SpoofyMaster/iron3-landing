# IRON3 Premium Landing Website — Full Build Brief

You are a senior creative director + senior frontend engineer + motion designer + conversion-focused product marketer.

Your mission is to design and build a world-class premium landing website for IRON3, a high-end endurance training app for beginner and pro triathletes preparing for Ironman-style events.

The final result must feel like a website that a top agency would sell for $10,000+.

This is not a generic SaaS landing page. This must feel like a cinematic, emotional, premium, animated performance brand experience at the intersection of endurance sports, elite mindset, data-driven preparation, premium mobile product design, and modern luxury sports storytelling.

The website should communicate: IRON3 helps athletes prepare for endurance events through a full-year event calendar, structured preparation, and training-performance tracking after each session.

---

## 1. PROJECT GOAL

Build a single-page premium homepage for IRON3 with footer pages: Our Story, Privacy Policy, Terms & Conditions, Careers.

The homepage must be highly animated, cinematic, responsive, and emotionally powerful. It must feel premium, modern, bold, minimal, athletic, cinematic, high-trust, conversion-oriented.

Primary objective: Make the brand feel elite and desirable, explain the app clearly, create emotional desire, push users toward downloading/joining/app stores.

---

## 2. BRAND CONTEXT

Brand name: IRON3
Audience: beginner triathletes, intermediate endurance athletes, serious amateur competitors, aspiring Ironman participants, performance-minded athletes, coaches/data-focused users.

Core value proposition: discover and prepare for endurance events, use in-app event calendar, track performance after each session, monitor progression across swim/bike/run, combine structure/inspiration/data.

Brand personality: elite but accessible, disciplined, inspiring, technical but human, ambitious, emotionally powerful, performance obsessed.

---

## 3. CREATIVE DIRECTION

Cinematic sports-tech landing page with emotional storytelling and clean editorial structure.

Alternating section atmospheres: dark cinematic → bright clean → warm editorial → immersive motion.

Page must feel alive with: motion, transitions, layered depth, elegant parallax, subtle reveal animations, premium typography choreography, video-led storytelling.

AVOID: generic startup templates, too many cards, cheap gradients, childish fitness visuals, cluttered dashboards, overuse of neon, stock-template feeling.

---

## 4. BRAND SYSTEM

### Color Palette
- Primary Red: #C1121F
- Dark Carbon: #0B0B0D
- Charcoal: #17181C
- Warm Sand: #E8DDCF
- Off White: #F7F5F1
- Light Gray: #E5E5E7
- Muted Gray: #9A9CA3
- Deep Brown: #45372F

Use color with restraint. Red is powerful because it is selective.

### Typography
- Condensed uppercase display font for major statements
- Clean modern sans-serif for body
- Optional italic display emphasis for emotional sport phrases
- Generous spacing, refined hierarchy
- Tall, sharp, athletic, editorial, luxurious, breathable

### Motion Language
- Controlled performance, premium momentum, athletic rhythm, cinematic pacing
- fade + slight upward reveal, text split reveals, parallax on hero media
- device mockup floating transitions, marquee movement, soft scaling on hover
- smooth scroll-linked transformations, background light shifts, subtle grain/vignette overlays

---

## 5. TECH STACK

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- Framer Motion
- Optional GSAP for advanced scroll choreography
- Fully responsive, mobile-first, smooth animations, accessibility-conscious, SEO-ready
- Reusable design tokens, component-based sections, consistent spacing system

---

## 6. PAGES

- `/` — one long premium homepage with all sections
- `/our-story`
- `/privacy-policy`
- `/terms-and-conditions`
- `/careers`

---

## 7. HOMEPAGE SECTIONS

### SECTION 1 — HERO
Full-bleed looping background video/cinematic montage, dark overlay, vignette. Center aligned, huge uppercase headline (mix italic + bold), subheadline, CTA, app store badges, scroll cue.

Headline direction: PREPARE FOR MORE THAN A RACE / TRAIN FOR THE DAY THAT CHANGES YOU / YOUR SEASON. YOUR DATA. YOUR IRON3.

Subheadline: IRON3 helps athletes discover events, structure their season, and track performance after every training session.

CTA: "Download the App" or "Start Your Season". Secondary: "Watch the Film" or "See How It Works".

Background video loops seamlessly, text reveals with premium stagger, slight parallax, gentle glow/vignette, subtle grain overlay. THIS HERO MUST FEEL EXPENSIVE.

### SECTION 2 — APP SHOWCASE (triple mobile mockup)
Light/off-white background. Three phone mockups: (1) annual event calendar/discovery, (2) preparation dashboard/progress ring/next workout, (3) post-session tracking/charts/split analysis/swim-bike-run breakdown.

Each phone gently floats, screens reveal on scroll, layered depth, subtle shadow. Heading: PLAN THE SEASON / TRAIN WITH PURPOSE / TRACK WHAT MATTERS.

### SECTION 3 — DEVICE COMPATIBILITY
Dark background, premium centered composition. Row of wearable devices/sports watches, brand listing underneath. Message: IRON3 syncs with the tools endurance athletes already use. Premium product render feeling, spotlight lighting.

### SECTION 4 — VALUE PROPOSITION / STATEMENT BLOCK
Dark premium background, powerful typography, centered CTA. Animated marquee: PREPARE SMARTER • RACE STRONGER • TRACK EVERYTHING • IRON3 / SWIM • BIKE • RUN • PREPARE • PERFORM • PROGRESS.

### SECTION 5 — METHODOLOGY / HOW IT WORKS
Warm sand/beige editorial section. Asymmetrical split: large title left, structured content cards right.

4 blocks:
1. EVENT-FIRST PLANNING — Choose your target event and structure your season around it.
2. STRUCTURED PREPARATION — Align training blocks with your event timeline and discipline priorities.
3. SESSION-BY-SESSION TRACKING — Log results, review metrics, see progression after every workout.
4. RACE-READY DECISION MAKING — Use data and calendar context to train smarter and taper better.

Content cards reveal in sequence, sticky behavior on desktop.

### SECTION 6 — COACH / GUIDANCE ECOSYSTEM
Central phone mockup, surrounding circular nodes: Swim Guidance, Bike Guidance, Run Guidance, Performance Data, Recovery Insight, Race Planning. Subtle orbit/breathing animation, connecting lines. IRON3 is more than tracking — it is a complete preparation ecosystem.

### SECTION 7 — VIDEO FEATURE / 60-SECOND BRAND FILM
Dark cinematic block, embedded full-width video panel, big heading, play/mute controls. The emotional journey of endurance athletes.

### SECTION 8 — FINAL CTA
Strong centered headline, CTA button, app store buttons, subtle animated background. YOUR NEXT START LINE BEGINS HERE / BUILD YOUR SEASON WITH IRON3.

### FOOTER
Logo, brand sentence, links (Our Story, Privacy Policy, Terms & Conditions, Careers), social icons, copyright. Premium, quiet, clean.

---

## 8. CONTENT WRITING

Write premium copy for ALL sections. Tone: concise, elevated, emotional, confident, performance-oriented, never cheesy. Provide all headlines, subheadlines, CTA labels, methodology descriptions, footer text, Our Story page copy, Careers page copy, Privacy Policy placeholder, Terms & Conditions placeholder.

---

## 9. FILE STRUCTURE

```
app/                    (Next.js App Router)
components/sections/    (each homepage section is its own component)
components/ui/          (buttons, badges, marquee, etc.)
lib/
styles/
public/media/
public/images/
public/video/
content/
constants/              (design tokens, colors, typography)
hooks/
```

---

## 10. QUALITY BAR

Refine spacing obsessively. Ensure alignment consistency. Strong visual rhythm. Avoid generic spacing defaults. Luxurious white space. Intentional typography. Every animation has purpose. Optimize CTA placement. Visual coherence top to bottom. The page must feel CURATED, not assembled.

---

## 11. WHAT TO AVOID

NO: generic SaaS landing, template Tailwind, cheesy fitness marketing, bodybuilding aesthetic, crypto-style glowing UI, cluttered gradients, too many boxes/borders, too much red, poor spacing, over-animated gimmicks.

---

## 12. PERFORMANCE

Lazy load media, optimize video, compress images, reduce layout shift, responsive images, smooth animation, mobile must feel premium.

---

## NOW START

1. Set up Next.js project with TypeScript, Tailwind CSS, Framer Motion
2. Create full design system (tokens, typography, colors, spacing)
3. Implement each section one by one with premium quality
4. Write all copy inline
5. Build all secondary pages
6. Polish everything
7. Make it production-ready

Work with extreme attention to detail. Premium, editorial, cinematic, worthy of a top-tier sports-tech brand.
