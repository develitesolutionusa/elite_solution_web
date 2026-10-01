import type { Metadata } from "next";
import { ServiceGroupPage } from "@/components/service-group-page";
import { getServiceGroup } from "@/data/services";

const group = getServiceGroup("financial")!;

export const metadata: Metadata = {
  title: group.name,
  description: group.subtitle,
};

export default function FinancialServicesPage() {
  return <ServiceGroupPage group={group} />;
}
