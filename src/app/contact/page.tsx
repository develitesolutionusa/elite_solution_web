import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free consultation with Elite Solutions USA. Tell us what you need and we will reply with a plan and a quote.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Book a free consultation"
        subtitle="Tell us what you need and we will reply with a plan and a quote."
      />
      <ContactForm />
    </>
  );
}
