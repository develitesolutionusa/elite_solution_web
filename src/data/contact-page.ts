import { site } from "@/data/site";

export type ContactChannelIcon = "phone" | "email" | "location" | "hours";

export const contactPage = {
  hero: {
    eyebrow: "Get in Touch",
    titleBefore: "Let's grow your",
    titleAccent: "business together",
    lead: "Book a free consultation. Tell us what you need — we reply with a clear plan, timeline, and quote.",
    image: "/images/helpline-hero-premium.jpg",
    highlights: [
      { icon: "phone" as const, label: "Same-day reply on business hours" },
      { icon: "email" as const, label: "Free consultation — no obligation" },
      { icon: "hours" as const, label: "Financial & digital services under one roof" },
    ],
  },
  channels: {
    eyebrow: "Reach Us",
    titleBefore: "Talk to",
    titleAccent: "Elite Solutions",
    lead: "Prefer a call, email, or a short form? Pick what works — we are easy to reach.",
    items: [
      {
        icon: "phone" as ContactChannelIcon,
        label: "Phone",
        value: site.phone,
        href: site.phoneHref,
        hint: "Mon–Fri, business hours (CT)",
      },
      {
        icon: "email" as ContactChannelIcon,
        label: "Email",
        value: site.email,
        href: `mailto:${site.email}`,
        hint: "We typically reply within one business day",
      },
      {
        icon: "location" as ContactChannelIcon,
        label: "Office",
        value: site.address,
        href: "https://maps.google.com/?q=1493+Fairway+Drive,+Naperville,+Illinois+60563",
        hint: site.location,
      },
      {
        icon: "hours" as ContactChannelIcon,
        label: "Hours",
        value: "Mon – Fri · 9:00 AM – 6:00 PM CT",
        href: null,
        hint: "Weekend by appointment",
      },
    ],
  },
  form: {
    eyebrow: "Consultation",
    titleBefore: "Send a",
    titleAccent: "message",
    lead: "Share a few details and we will open your email app with everything filled in — ready to send.",
    submitLabel: "Send message",
  },
} as const;
