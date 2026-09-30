import { HomeHero } from "@/components/home/hero";
import { LogoMarquee, RibbonMarquee } from "@/components/home/marquees";
import { ProcessTimeline, ServiceTabs } from "@/components/home/sections";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <RibbonMarquee />
      <ServiceTabs />
      <ProcessTimeline />
      <LogoMarquee />
    </>
  );
}
