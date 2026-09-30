import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { PortfolioBrowser } from "@/components/portfolio/portfolio-browser";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse brands and businesses we have built logos, websites, marketing and financial systems for.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        title="Work we have delivered"
        subtitle="Browse the brands and businesses we have built logos, websites, marketing and financial systems for."
      />
      <PortfolioBrowser />
    </>
  );
}
