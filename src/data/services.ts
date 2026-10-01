export type ServiceIcon =
  | "calc"
  | "tax"
  | "pay"
  | "cfo"
  | "web"
  | "gfx"
  | "mkt"
  | "seo"
  | "mail"
  | "help";

export type ServiceGroup = "fin" | "non";

export type Service = {
  group: ServiceGroup;
  slug: string;
  icon: ServiceIcon;
  name: string;
  description: string;
  summary: string;
  includes: string[];
  outcomes: string[];
  image: string;
};

export type ServiceGroupMeta = {
  id: ServiceGroup;
  slug: "financial" | "non-financial";
  name: string;
  shortName: string;
  title: string;
  subtitle: string;
  intro: string[];
  idealFor: string[];
};

export const serviceGroups: ServiceGroupMeta[] = [
  {
    id: "fin",
    slug: "financial",
    name: "Financial services",
    shortName: "Financial",
    title: "Financial services that keep your numbers clear",
    subtitle:
      "Accounting, tax, payroll and CFO guidance — accurate books and senior finance support without a full-time hire.",
    intro: [
      "Strong finances start with clean books and a plan. We handle the numbers side so you always know where the business stands.",
      "Whether you need monthly bookkeeping, tax support, payroll, or a fractional CFO, one team stays with you and speaks plainly.",
    ],
    idealFor: [
      "Owners who want reliable monthly books",
      "Businesses preparing for tax season or growth",
      "Teams that need payroll done right, on time",
      "Leaders who want forecasts without a full-time CFO",
    ],
  },
  {
    id: "non",
    slug: "non-financial",
    name: "Non-financial services",
    shortName: "Non-financial",
    title: "Non-financial services that grow your brand",
    subtitle:
      "Websites, design, SEO and marketing — the brand and growth side, handled by the same team that knows your numbers.",
    intro: [
      "Customers find you through your brand, site and campaigns. We build the digital presence that explains what you do and brings people in.",
      "From a new website to SEO, email and help-line support, we keep design and marketing aligned with how your business actually runs.",
    ],
    idealFor: [
      "Businesses launching or refreshing a website",
      "Owners who need a clear brand and visuals",
      "Teams ready to grow through SEO and marketing",
      "Companies that want one partner for brand and ops",
    ],
  },
];

export const services: Service[] = [
  {
    group: "fin",
    slug: "accounting-and-bookkeeping",
    icon: "calc",
    name: "Accounting and bookkeeping",
    description:
      "Monthly books, reconciliations and financial statements you can rely on.",
    summary:
      "We keep your books current and reconciled so reports are accurate when you need them — for decisions, lenders, or tax time.",
    includes: [
      "Monthly bookkeeping and bank reconciliations",
      "Profit & loss, balance sheet and cash summaries",
      "Clean categorization of income and expenses",
      "Year-round support when questions come up",
    ],
    outcomes: [
      "Clear monthly picture of performance",
      "Fewer surprises at tax time",
      "Books ready for loans, investors or sale",
    ],
    image: "/images/service-accounting.jpg",
  },
  {
    group: "fin",
    slug: "tax",
    icon: "tax",
    name: "Tax",
    description:
      "Preparation and filing for your business, with planning to keep what you owe accurate.",
    summary:
      "We prepare and file business taxes with attention to detail, and help you plan ahead so liabilities are not a last-minute scramble.",
    includes: [
      "Business tax preparation and filing",
      "Review of deductions and credits that apply",
      "Quarterly planning where it makes sense",
      "Coordination with your bookkeeping records",
    ],
    outcomes: [
      "Accurate filings on schedule",
      "Fewer year-end surprises",
      "Records that support every number",
    ],
    image: "/images/service-tax.jpg",
  },
  {
    group: "fin",
    slug: "payroll-outsourcing",
    icon: "pay",
    name: "Payroll outsourcing",
    description:
      "Payroll processed on time and correctly, so you can focus on running the business.",
    summary:
      "Payroll runs on time with correct withholdings and filings, so your team gets paid and you stay compliant without the admin load.",
    includes: [
      "Scheduled payroll processing",
      "Tax withholdings and employer filings",
      "Employee pay stubs and records",
      "Onboarding and offboarding support",
    ],
    outcomes: [
      "On-time pay every cycle",
      "Less payroll admin on your plate",
      "Cleaner compliance trail",
    ],
    image: "/images/service-payroll.jpg",
  },
  {
    group: "fin",
    slug: "cfo-services",
    icon: "cfo",
    name: "CFO services",
    description:
      "Budgets, forecasts and financial guidance from a senior finance professional, without a full-time hire.",
    summary:
      "Get senior finance guidance — budgets, forecasts and decision support — without the cost of a full-time CFO.",
    includes: [
      "Budgets and rolling forecasts",
      "Cash-flow visibility and planning",
      "KPI reviews and plain-language reports",
      "Support for growth, pricing and big decisions",
    ],
    outcomes: [
      "A clear financial plan you can act on",
      "Better timing on spend and hiring",
      "Confidence in the numbers behind decisions",
    ],
    image: "/images/service-cfo.jpg",
  },
  {
    group: "non",
    slug: "web-development",
    icon: "web",
    name: "Web development",
    description:
      "Fast, mobile-friendly websites that explain what you do and make it easy to contact you.",
    summary:
      "We build fast, mobile-friendly sites that tell your story clearly and make it simple for customers to reach you.",
    includes: [
      "Custom site design and development",
      "Mobile-first layouts and clear navigation",
      "Contact forms and call-to-action paths",
      "Basic SEO setup and performance polish",
    ],
    outcomes: [
      "A site that looks professional on every device",
      "Clear path from visit to inquiry",
      "Foundation ready for SEO and campaigns",
    ],
    image: "/images/service-web.jpg",
  },
  {
    group: "non",
    slug: "graphic-designing",
    icon: "gfx",
    name: "Graphic designing",
    description:
      "Logos, social media graphics, menus, brochures and other branded material.",
    summary:
      "Brand visuals that stay consistent — logos, social assets, menus, brochures and the pieces your business uses every week.",
    includes: [
      "Logo and brand mark design",
      "Social media and campaign graphics",
      "Menus, flyers and print-ready layouts",
      "Templates your team can reuse",
    ],
    outcomes: [
      "A cohesive look across touchpoints",
      "Assets ready for print and digital",
      "Faster turnaround on future marketing",
    ],
    image: "/images/service-graphic.jpg",
  },
  {
    group: "non",
    slug: "marketing-strategies",
    icon: "mkt",
    name: "Marketing strategies",
    description:
      "A clear plan for who to reach, where to reach them and what to say.",
    summary:
      "We map who you should reach, where they pay attention, and what message will move them — then turn that into a practical plan.",
    includes: [
      "Audience and offer clarity",
      "Channel recommendations that fit your budget",
      "Messaging and campaign outlines",
      "A simple roadmap with next steps",
    ],
    outcomes: [
      "Marketing that targets the right people",
      "Less wasted spend on the wrong channels",
      "A plan your team can follow",
    ],
    image: "/images/service-marketing.jpg",
  },
  {
    group: "non",
    slug: "seo-services",
    icon: "seo",
    name: "SEO services",
    description:
      "Help customers find you on Google with better page content and site structure.",
    summary:
      "Improve how customers find you on Google through clearer content, structure and ongoing SEO work that matches how people search.",
    includes: [
      "Keyword and page priority mapping",
      "On-page content and structure improvements",
      "Technical SEO checks that affect visibility",
      "Reporting on progress that matters",
    ],
    outcomes: [
      "Stronger presence for relevant searches",
      "Pages that answer what buyers ask",
      "Steady improvement instead of one-off fixes",
    ],
    image: "/images/service-seo.jpg",
  },
  {
    group: "non",
    slug: "email-marketing",
    icon: "mail",
    name: "Email marketing",
    description:
      "Campaigns and newsletters that keep your customers coming back.",
    summary:
      "Campaigns and newsletters that stay useful — so customers remember you, return, and take the next step.",
    includes: [
      "Campaign and newsletter planning",
      "Copy and design that matches your brand",
      "List segments for clearer targeting",
      "Performance review and iterate",
    ],
    outcomes: [
      "Regular touchpoints with customers",
      "Higher return visits and repeat orders",
      "A channel you own, not rent",
    ],
    image: "/images/service-email.jpg",
  },
  {
    group: "non",
    slug: "help-line-services",
    icon: "help",
    name: "Help line services",
    description:
      "A point of contact for your customers and your team when they need answers.",
    summary:
      "Give customers and your team a reliable point of contact when questions come up — so issues get answered without chaos.",
    includes: [
      "Dedicated help-line coverage windows",
      "Clear escalation paths to your team",
      "Logging of common questions and issues",
      "Friendly, brand-aligned responses",
    ],
    outcomes: [
      "Faster answers for customers",
      "Less interruption for owners and staff",
      "Better visibility into recurring issues",
    ],
    image: "/images/service-helpline.jpg",
  },
];

export const financialServices = services.filter((s) => s.group === "fin");
export const nonFinancialServices = services.filter((s) => s.group === "non");

export function getServiceGroup(slug: string) {
  return serviceGroups.find((g) => g.slug === slug);
}

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getServiceInGroup(groupSlug: string, serviceSlug: string) {
  const group = getServiceGroup(groupSlug);
  if (!group) return null;
  const service = services.find(
    (s) => s.slug === serviceSlug && s.group === group.id,
  );
  if (!service) return null;
  return { group, service };
}

export function getServicesByGroup(group: ServiceGroup) {
  return services.filter((s) => s.group === group);
}

export function getOtherServiceGroup(group: ServiceGroup) {
  return serviceGroups.find((g) => g.id !== group)!;
}

export function serviceHref(service: Service) {
  const group = serviceGroups.find((g) => g.id === service.group)!;
  return `/services/${group.slug}/${service.slug}`;
}

export const portfolioCategories = [
  { id: "all", name: "All work" },
  { id: "logo", name: "Logo design" },
  { id: "graphic", name: "Graphic design" },
  { id: "web", name: "Web development" },
  { id: "marketing", name: "Marketing and SEO" },
  { id: "accounting", name: "Accounting and bookkeeping" },
  { id: "tax", name: "Tax and payroll" },
  { id: "cfo", name: "CFO services" },
] as const;

export type PortfolioCategoryId =
  (typeof portfolioCategories)[number]["id"];
