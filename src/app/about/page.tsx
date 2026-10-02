import type { Metadata } from "next";
import { AboutStudioPage } from "@/components/about-studio-page";

export const metadata: Metadata = {
  title: "About",
  description:
    "Your partner in financial and business growth — specialized accounting, tax, payroll, and digital services from Elite Solutions USA.",
};

export default function AboutPage() {
  return <AboutStudioPage />;
}
