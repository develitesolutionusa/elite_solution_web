export const site = {
  name: "Elite Solutions USA",
  shortName: "ELITE SOLUTIONS",
  tagline: "Comprehensive financial and non-financial services to empower growth and success.",
  phone: "+1 832-951-2823",
  phoneHref: "tel:+18329512823",
  email: "info@elitesolutionscpa.com",
  website: "https://www.elitesolutionusa.com",
  websiteLabel: "www.elitesolutionusa.com",
  location: "Naperville, Illinois",
  founder: {
    name: "Usman Tehseen",
    qualifications: "ACCA, MBA (Marketing), University of Oxford",
    basedIn: "Naperville, Illinois",
    focus: "Finance, technology, offshore talent and digital growth",
  },
} as const;

export const nav: {
  href: string;
  label: string;
  cta?: boolean;
}[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact us", cta: true },
];

export const heroWords = [
  "accounting",
  "websites",
  "branding",
  "marketing",
  "payroll",
  "SEO",
] as const;

export const processSteps = [
  {
    threshold: 0.05,
    title: "Tell us what you need",
    body: "Send a message or call. Describe your business and what you want done.",
  },
  {
    threshold: 0.45,
    title: "Get a plan and a quote",
    body: "We reply with the scope, the timeline and the price.",
  },
  {
    threshold: 0.85,
    title: "We deliver and support",
    body: "Your work is completed and we stay available for changes and questions.",
  },
] as const;

export const pillars = [
  {
    icon: "cfo" as const,
    title: "Finance",
    body: "Accounting, tax, payroll and CFO guidance.",
  },
  {
    icon: "web" as const,
    title: "Technology",
    body: "Websites and digital tools built for your business.",
  },
  {
    icon: "mkt" as const,
    title: "Digital growth",
    body: "Branding, SEO and marketing that bring in customers.",
  },
] as const;
