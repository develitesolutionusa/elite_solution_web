import type { Metadata } from "next";
import { ServiceGroupPage } from "@/components/service-group-page";
import { getServiceGroup } from "@/data/services";

const group = getServiceGroup("non-financial")!;

export const metadata: Metadata = {
  title: group.name,
  description: group.subtitle,
};

export default function NonFinancialServicesPage() {
  return <ServiceGroupPage group={group} />;
}
