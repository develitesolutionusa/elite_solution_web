import type { Metadata } from "next";
import { CareersStudioPage } from "@/components/careers-studio-page";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Elite Solutions — explore career opportunities where skills are valued, growth is encouraged, and every day makes an impact.",
};

export default function CareersPage() {
  return <CareersStudioPage />;
}
