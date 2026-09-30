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
  icon: ServiceIcon;
  name: string;
  description: string;
};

export const services: Service[] = [
  {
    group: "fin",
    icon: "calc",
    name: "Accounting and bookkeeping",
    description:
      "Monthly books, reconciliations and financial statements you can rely on.",
  },
  {
    group: "fin",
    icon: "tax",
    name: "Tax",
    description:
      "Preparation and filing for your business, with planning to keep what you owe accurate.",
  },
  {
    group: "fin",
    icon: "pay",
    name: "Payroll outsourcing",
    description:
      "Payroll processed on time and correctly, so you can focus on running the business.",
  },
  {
    group: "fin",
    icon: "cfo",
    name: "CFO services",
    description:
      "Budgets, forecasts and financial guidance from a senior finance professional, without a full-time hire.",
  },
  {
    group: "non",
    icon: "web",
    name: "Web development",
    description:
      "Fast, mobile-friendly websites that explain what you do and make it easy to contact you.",
  },
  {
    group: "non",
    icon: "gfx",
    name: "Graphic designing",
    description:
      "Logos, social media graphics, menus, brochures and other branded material.",
  },
  {
    group: "non",
    icon: "mkt",
    name: "Marketing strategies",
    description:
      "A clear plan for who to reach, where to reach them and what to say.",
  },
  {
    group: "non",
    icon: "seo",
    name: "SEO services",
    description:
      "Help customers find you on Google with better page content and site structure.",
  },
  {
    group: "non",
    icon: "mail",
    name: "Email marketing",
    description:
      "Campaigns and newsletters that keep your customers coming back.",
  },
  {
    group: "non",
    icon: "help",
    name: "Help line services",
    description:
      "A point of contact for your customers and your team when they need answers.",
  },
];

export const financialServices = services.filter((s) => s.group === "fin");
export const nonFinancialServices = services.filter((s) => s.group === "non");

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
