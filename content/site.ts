export const brand = {
  name: "IRON3",
  tagline: "Endurance intelligence for the season that defines you.",
} as const;

export const entity = {
  name: "Vibe Digital LLC",
  dba: "IRON3",
  address: {
    line1: "1001 D MAIN ST",
    line2: "STE 600",
    city: "KALISPELL",
    state: "MT",
    zip: "59901-1498",
    country: "United States",
  },
  email: "contact@iron3.app",
  phone: "+1 (917) 730-4472",
} as const;

export const footerLinks = [
  { href: "/our-story", label: "Our Story" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
  { href: "/gdpr", label: "GDPR" },
  { href: "/careers", label: "Careers" },
] as const;

export const socialLinks = [
  { href: "https://instagram.com", label: "Instagram" },
  { href: "https://x.com", label: "X" },
  { href: "https://youtube.com", label: "YouTube" },
] as const;
