import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Hero } from "@/components/sections/Hero";
import { DisciplineShowcase } from "@/components/sections/DisciplineShowcase";
import { AppShowcase } from "@/components/sections/AppShowcase";
import { DeviceCompatibility } from "@/components/sections/DeviceCompatibility";
import { StatementValue } from "@/components/sections/StatementValue";
import { Methodology } from "@/components/sections/Methodology";
import { BrandFilm } from "@/components/sections/BrandFilm";
import { CoachEcosystem } from "@/components/sections/CoachEcosystem";
import { Community } from "@/components/sections/Community";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <Hero />
        <DisciplineShowcase />
        <BrandFilm />
        <AppShowcase />
        <DeviceCompatibility />
        <StatementValue />
        <Methodology />
        <CoachEcosystem />
        <Community />
        <Pricing />
        <FAQ />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
