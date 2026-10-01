import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceSinglePage } from "@/components/service-single-page";
import {
  financialServices,
  getServiceInGroup,
} from "@/data/services";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return financialServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const found = getServiceInGroup("financial", slug);
  if (!found) return { title: "Service" };
  return {
    title: found.service.name,
    description: found.service.summary,
  };
}

export default async function FinancialServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const found = getServiceInGroup("financial", slug);
  if (!found) notFound();
  return <ServiceSinglePage group={found.group} service={found.service} />;
}
