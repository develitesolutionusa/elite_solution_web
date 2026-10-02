import type { Metadata } from "next";
import { PortfolioStudioPage } from "@/components/portfolio/portfolio-studio-page";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore recent Elite Solutions USA projects across web development, apps, UI/UX, e-commerce, and branding.",
};

export default function PortfolioPage() {
  return <PortfolioStudioPage />;
}
