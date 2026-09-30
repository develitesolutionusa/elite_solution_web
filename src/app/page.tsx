import { HomeHero } from "@/components/home/hero";
import { LogoMarquee, RibbonMarquee } from "@/components/home/marquees";
import {
  ProcessTimeline,
  ServiceTabs,
  StatsSection,
} from "@/components/home/sections";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <RibbonMarquee />
      <StatsSection />
      <ServiceTabs />
      <ProcessTimeline />
      <LogoMarquee />
    </>
  );
}
