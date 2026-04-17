import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  style: ["italic"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://iron3.app"),
  title: {
    default: "IRON3 — Train Your Season. Own Your Start Line.",
    template: "%s — IRON3",
  },
  description:
    "Discover endurance events, structure your season, and track performance after every swim, bike, and run session. IRON3 is preparation intelligence for triathletes.",
  openGraph: {
    title: "IRON3 — Train Your Season. Own Your Start Line.",
    description:
      "Endurance event calendar, structured preparation, and session-by-session performance tracking.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "IRON3",
    description:
      "Discover events, build your season, track what matters — swim, bike, run.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebas.variable} ${dmSans.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
