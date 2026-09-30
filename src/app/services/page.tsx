import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ServiceGrid } from "@/components/service-card";
import { Reveal } from "@/components/reveal";
import {
  financialServices,
  nonFinancialServices,
} from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Financial and non-financial services handled by one team — accounting, tax, payroll, CFO, web, design, marketing and SEO.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Services for every stage of your business"
        subtitle="Financial and non-financial work, handled by one team."
      />
      <div className="sec">
        <div className="w">
          <Reveal as="h2">Financial services</Reveal>
          <Reveal as="p" className="sub">
            The numbers side of your business.
          </Reveal>
          <ServiceGrid items={financialServices} columns={4} />
        </div>
      </div>
      <div className="sec alt">
        <div className="w">
          <Reveal as="h2">Non-financial services</Reveal>
          <Reveal as="p" className="sub">
            The brand and marketing side of your business.
          </Reveal>
          <ServiceGrid items={nonFinancialServices} />
        </div>
      </div>
    </>
  );
}
