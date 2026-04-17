import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Hero } from "@/components/sections/Hero";
import { AppShowcase } from "@/components/sections/AppShowcase";
import { DeviceCompatibility } from "@/components/sections/DeviceCompatibility";
import { StatementValue } from "@/components/sections/StatementValue";
import { Methodology } from "@/components/sections/Methodology";
import { CoachEcosystem } from "@/components/sections/CoachEcosystem";
import { BrandFilm } from "@/components/sections/BrandFilm";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <Hero />
        <AppShowcase />
        <DeviceCompatibility />
        <StatementValue />
        <Methodology />
        <CoachEcosystem />
        <BrandFilm />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
