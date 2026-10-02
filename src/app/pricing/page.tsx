import type { Metadata } from "next";
import { PricingStudioPage } from "@/components/pricing-studio-page";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Affordable, transparent pricing for tailored financial and non-financial solutions — book a complimentary 2-part discovery call with Elite Solutions USA.",
};

export default function PricingPage() {
  return <PricingStudioPage />;
}
