export const portfolioStudioFilters = [
  { id: "all", label: "All" },
  { id: "web", label: "Web Development" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "uiux", label: "UI/UX Design" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "branding", label: "Branding" },
] as const;

export type PortfolioStudioFilterId =
  (typeof portfolioStudioFilters)[number]["id"];

export type PortfolioStudioProject = {
  id: string;
  title: string;
  category: Exclude<PortfolioStudioFilterId, "all">;
  categoryLabel: string;
  description: string;
  image: string;
  href: string;
};

export const portfolioStudioPage = {
  hero: {
    eyebrow: "Our Portfolio",
    title: "Our Work Speaks for Itself",
    lead: "Explore some of our recent projects and see how we turn ideas into powerful digital solutions.",
    image: "/images/portfolio-hero-devices.jpg",
  },
  projects: [
    {
      id: "ecommerce-platform",
      title: "E-Commerce Platform",
      category: "ecommerce",
      categoryLabel: "Web Development",
      description:
        "A modern e-commerce platform with secure payments, inventory management and a seamless shopping experience.",
      image: "/images/portfolio-project-ecommerce.jpg",
      href: "/contact",
    },
    {
      id: "fitness-app",
      title: "Fitness App",
      category: "mobile",
      categoryLabel: "Mobile App Development",
      description:
        "A complete fitness app with workout plans, progress tracking and personalized goals.",
      image: "/images/portfolio-project-fitness.jpg",
      href: "/contact",
    },
    {
      id: "business-website",
      title: "Business Website",
      category: "uiux",
      categoryLabel: "UI/UX Design",
      description:
        "A modern and professional business website designed for better user experience and high conversion rates.",
      image: "/images/portfolio-project-business.jpg",
      href: "/contact",
    },
    {
      id: "food-delivery",
      title: "Food Delivery App",
      category: "mobile",
      categoryLabel: "Mobile App Development",
      description:
        "A fast and reliable food delivery app with real-time tracking and multiple payment options.",
      image: "/images/portfolio-project-food.jpg",
      href: "/contact",
    },
    {
      id: "dashboard-ui",
      title: "Dashboard UI",
      category: "uiux",
      categoryLabel: "UI/UX Design",
      description:
        "A clean and modern dashboard design for managing business operations efficiently.",
      image: "/images/portfolio-project-dashboard.jpg",
      href: "/contact",
    },
    {
      id: "branding-identity",
      title: "Branding & Identity",
      category: "branding",
      categoryLabel: "Branding",
      description:
        "Complete brand identity design including logo, colors, typography and social media assets.",
      image: "/images/portfolio-project-branding.jpg",
      href: "/contact",
    },
    {
      id: "corporate-website",
      title: "Corporate Website",
      category: "web",
      categoryLabel: "Web Development",
      description:
        "A professional corporate website with modern design, CMS integration and contact forms.",
      image: "/images/portfolio-project-corporate.jpg",
      href: "/contact",
    },
    {
      id: "elearning",
      title: "E-Learning Platform",
      category: "web",
      categoryLabel: "Web Development",
      description:
        "An interactive learning platform with courses, quizzes and student progress tracking.",
      image: "/images/portfolio-project-elearning.jpg",
      href: "/contact",
    },
    {
      id: "restaurant-website",
      title: "Restaurant Website",
      category: "uiux",
      categoryLabel: "UI/UX Design",
      description:
        "A visually stunning restaurant website with online booking and menu integration.",
      image: "/images/portfolio-project-restaurant.jpg",
      href: "/contact",
    },
  ] satisfies PortfolioStudioProject[],
  process: {
    eyebrow: "Our Process",
    title: "How We Bring Ideas to Life",
    lead: "Our proven process ensures your project is delivered on time, within budget, and beyond expectations.",
    steps: [
      {
        num: "01",
        title: "Discovery",
        body: "Understand your goals and requirements.",
      },
      {
        num: "02",
        title: "Design",
        body: "Create stunning designs and user flows.",
      },
      {
        num: "03",
        title: "Development",
        body: "Build with best practices and clean code.",
      },
      {
        num: "04",
        title: "Testing",
        body: "Ensure quality, performance and security.",
      },
      {
        num: "05",
        title: "Launch",
        body: "Go live and provide ongoing support.",
      },
    ],
  },
  cta: {
    title: "Have a Project in Mind?",
    lead: "Let's create something amazing together. Get in touch with our team today for a free consultation and quote.",
    primaryLabel: "Get a Free Quote",
    primaryHref: "/contact",
    secondaryLabel: "Contact Us",
    secondaryHref: "/contact",
    image: "/images/about-cta-laptop.jpg",
  },
} as const;
