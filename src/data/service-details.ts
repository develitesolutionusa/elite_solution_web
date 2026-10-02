export type ServiceDetailStep = {
  title: string;
  body: string;
};

export type ServiceDetailSpecialty = {
  title: string;
  body: string;
};

export type ServiceFeatureIcon =
  | "frontend"
  | "backend"
  | "database"
  | "fullstack"
  | "webapp"
  | "ecommerce"
  | "api"
  | "deploy";

export type ServiceDetailFeature = {
  title: string;
  body: string;
  icon: ServiceFeatureIcon;
};

export type ServiceProcessIcon =
  | "discuss"
  | "design"
  | "develop"
  | "launch";

export type ServiceProcessStep = {
  title: string;
  body: string;
  icon: ServiceProcessIcon;
};

export type ServiceFeaturedProject = {
  title: string;
  description: string;
  image: string;
  href: string;
  liveHref?: string;
  linkLabel?: string;
};

export type ServiceDetailSection = {
  heading: string;
  paragraphs: string[];
  eyebrow?: string;
  ctaLabel?: string;
  ctaHref?: string;
  bullets?: string[];
  steps?: ServiceDetailStep[];
  specialties?: ServiceDetailSpecialty[];
  features?: ServiceDetailFeature[];
  process?: ServiceProcessStep[];
  projects?: ServiceFeaturedProject[];
  image?: string;
};

export type ServiceDetailContent = {
  slug: string;
  pageTitle: string;
  intro: string[];
  offerLead?: string;
  pageBg?: string;
  heroBg?: string;
  sections: ServiceDetailSection[];
};

/** Accounting content adapted from https://elitesolutionusa.com/accounting-bookkeeping/ */
export const serviceDetails: ServiceDetailContent[] = [
  {
    slug: "accounting-and-bookkeeping",
    pageTitle: "Accounting & Bookkeeping",
    intro: [
      "Our expert accounting and bookkeeping services are designed to help businesses manage their financial records with accuracy and efficiency.",
    ],
    offerLead:
      "From day-to-day books to reporting and controls, we keep your financial operations accurate, compliant, and ready for growth.",
    sections: [
      {
        heading: "Accounting Services",
        image: "/images/acct-premium-accounting.jpg",
        paragraphs: [
          "Accounting is a cornerstone of every business, ensuring financial transparency, operational efficiency, and sound decision-making. It helps organizations monitor transactions, assess financial health, and plan for future growth.",
          "At Elite Solutions Accounting and Bookkeeping, we recognize the importance of maintaining accurate financial records tailored to U.S. regulations and business practices. We specialize in streamlining accounting processes for businesses of all sizes, ensuring compliance and enabling decision-makers to act on reliable financial data. Our services not only reduce overhead costs but also enhance the efficiency of year-end reporting, leaving you more time to focus on your core business objectives.",
        ],
      },
      {
        heading: "Bookkeeping Services",
        image: "/images/acct-premium-bookkeeping.jpg",
        paragraphs: [
          "Efficient bookkeeping ensures that daily transactions and financial records are well-organized and accurate. Our outsourced bookkeeping services keep your financial data up to date so operations stay seamless.",
        ],
        bullets: [
          "Setting up and reviewing the Chart of Accounts",
          "Recording daily financial transactions with precision",
          "Flexible service schedules (daily, weekly, monthly, or quarterly)",
          "Managing accounts payable and receivable",
          "Performing bank reconciliations",
          "Ensuring compliance with tax regulations",
          "Creating detailed MIS reports for better business insights",
        ],
      },
      {
        heading: "Accounts Payable Outsourcing",
        image: "/images/acct-premium-payable.jpg",
        paragraphs: [
          "In today’s competitive business environment, optimizing costs without compromising quality is essential. Outsourcing accounts payable allows businesses to focus on strategic goals while leaving tedious financial processes to experts.",
          "Our team at Elite Accounting handles accounts payable efficiently, offering tailored services on a weekly, monthly, or annual basis, depending on transaction volume. By entrusting us with your payable process, you gain a reliable partner who prioritizes accuracy and confidentiality, ensuring that your creditors’ data is secure and managed professionally.",
        ],
      },
      {
        heading: "Financial Reporting",
        image: "/images/acct-premium-reporting.jpg",
        paragraphs: [
          "Accurate financial reporting reflects your company’s performance and future potential. Investors, banks, and other stakeholders rely on these reports to evaluate profitability and make key decisions.",
          "We specialize in preparing comprehensive financial statements that adhere to regulatory standards. Our reports provide insights into your organization’s financial position, enabling strategic planning and fostering confidence among investors and lenders. With us, your business’s financial health is always represented accurately and transparently.",
        ],
      },
      {
        heading: "Internal Controls Testing and Implementation",
        image: "/images/acct-premium-controls.jpg",
        paragraphs: [
          "Maintaining integrity in financial reporting is critical to avoiding fraud or mismanagement. Our team conducts thorough internal control testing to detect vulnerabilities in your financial processes.",
          "At Elite Accounting, we implement robust controls to safeguard your financial data and ensure compliance. By acting as an unbiased third party, we bring fresh perspectives and a commitment to ethical accounting practices. Regular assessments of bookkeeping and financial reporting prevent costly mistakes and help secure your business’s future.",
        ],
      },
      {
        heading: "Software Implementation",
        image: "/images/acct-premium-software.jpg",
        paragraphs: [
          "Adopting the right accounting software can transform the way you manage finances. Our team specializes in selecting, deploying, and customizing software solutions to align with your business needs.",
        ],
        bullets: [
          "Detailed requirement analysis to select the best software",
          "Data migration with minimal disruption",
          "Staff training to maximize software utilization",
          "Ongoing technical support for troubleshooting and upgrades",
        ],
      },
      {
        heading: "Sales, Invoicing, and Receivables Management",
        image: "/images/acct-premium-invoicing.jpg",
        paragraphs: [
          "Managing sales and receivables effectively is vital for maintaining healthy cash flow. We offer comprehensive solutions to streamline your invoicing process and ensure timely payment collection.",
        ],
        bullets: [
          "Automated invoicing and billing setup",
          "Tracking outstanding receivables with detailed reporting",
          "Implementing strategies to reduce overdue payments",
          "Integrating invoicing with accounting software for efficiency",
        ],
      },
    ],
  },
  {
    slug: "payroll-outsourcing",
    pageTitle: "Payroll Outsourcing Services",
    heroBg: "/images/payroll-hero-bg.jpg",
    intro: [
      "Elite Solutions CPA offers payroll outsourcing services to businesses, allowing them to focus on core operations while ensuring accurate, timely payroll processing.",
    ],
    offerLead:
      "Accurate, on-time payroll with tax withholdings and filings handled for you — so your team gets paid and you stay compliant.",
    sections: [
      {
        heading: "Payroll Outsourcing Services",
        image: "/images/payroll-premium-overview.jpg",
        paragraphs: [
          "Elite Solutions CPA offers payroll outsourcing services to businesses, allowing them to focus on core operations while ensuring accurate, timely payroll processing. This service helps businesses manage payroll efficiently, ensuring compliance and freeing up resources for innovation and growth.",
        ],
      },
      {
        heading: "What’s included",
        image: "/images/payroll-premium-included.jpg",
        paragraphs: [
          "We handle the full payroll cycle so your team gets paid on time and your records stay clean.",
        ],
        bullets: [
          "Scheduled payroll processing",
          "Tax withholdings and employer filings",
          "Employee pay stubs and records",
          "Onboarding and offboarding support",
        ],
      },
      {
        heading: "What you get",
        image: "/images/payroll-premium-outcomes.jpg",
        paragraphs: [
          "Outsourcing payroll with Elite Solutions helps you stay compliant while your internal team focuses on growth.",
        ],
        bullets: [
          "On-time pay every cycle",
          "Less payroll admin on your plate",
          "Cleaner compliance trail",
        ],
      },
    ],
  },
  {
    slug: "tax",
    pageTitle: "Tax",
    intro: [
      "Elite Solutions CPA offers expert tax services, helping businesses navigate state and federal tax laws.",
    ],
    offerLead:
      "Professional tax services for U.S. businesses — filings, projections, and compliance that help you plan ahead and reduce year-end surprises.",
    sections: [
      {
        heading: "Professional Tax Services for U.S. Businesses",
        paragraphs: [
          "Elite Solutions CPA offers expert tax services, helping businesses navigate state and federal tax laws. Their services include tax return filings, projections, and compliance to ensure businesses save money through tax-efficient strategies while meeting all legal requirements.",
          "Whether you own a corporation, LLC, partnership, or sole proprietorship, Elite Solutions is here to help with all your tax needs. We ensure your tax filings are accurate and efficient.",
        ],
      },
      {
        heading: "What we cover",
        paragraphs: [
          "With in-depth knowledge of both state and federal tax laws, we help your business take full advantage of available opportunities to reduce your tax burden.",
        ],
        bullets: [
          "Business income tax returns",
          "Tax projections and year-end planning",
          "Estimated tax calculations",
          "State income taxes",
          "Sales taxes",
          "Payroll taxes",
          "Responding to IRS notices",
          "Extension forms",
          "Quarterly tax payments",
        ],
      },
    ],
  },
  {
    slug: "cfo-services",
    pageTitle: "CFO Services",
    intro: [
      "Outsourced CFO services from Elite Solutions CPA provide businesses with in-depth financial analysis, cash flow management, and strategic guidance.",
    ],
    offerLead:
      "Senior finance leadership without a full-time hire — analysis, cash-flow management, and strategic guidance that strengthen overall financial health.",
    sections: [
      {
        heading: "CFO Services",
        paragraphs: [
          "Outsourced CFO services from Elite Solutions CPA provide businesses with in-depth financial analysis, cash flow management, and strategic guidance. These services help businesses identify growth opportunities, set financial goals, and improve overall financial health without the cost of a full-time CFO.",
          "Our CFO services dive deep into your financial data, uncovering actionable opportunities for growth and cost savings. We provide strategic consulting that delivers greater value than hiring a full-time CFO.",
        ],
      },
      {
        heading: "What we cover",
        paragraphs: [
          "Strategic consulting for entrepreneurs and small business owners — focused on cash flow, cost control, and goals that support sustainable growth.",
        ],
        bullets: [
          "Strategic consulting for entrepreneurs and small business owners",
          "Cash flow analysis to optimize revenue management",
          "Identifying areas for cost-cutting and growth",
          "Setting financial goals to ensure business growth",
        ],
      },
    ],
  },
  {
    slug: "audit-and-review",
    pageTitle: "Audit & Review",
    intro: [
      "Effective audits and reviews provide clarity and confidence in your financial performance. Our professional services ensure compliance with regulations while identifying opportunities for improvement.",
    ],
    offerLead:
      "Independent, risk-based audit and review services — external, internal, and IT — so your reports stay accurate, controls improve, and stakeholders can trust the numbers.",
    sections: [
      {
        heading: "Audit & Review",
        paragraphs: [
          "Elite Solutions CPA provides comprehensive audit services, including external audits, internal audits, and IT audits, to evaluate financial accuracy, operational efficiency, and compliance. Their independent and risk-based approach helps businesses identify inefficiencies, improve internal controls, and mitigate risks.",
          "External audits focus on financial statement accuracy and fraud detection, internal audits assess internal controls and compliance, and IT audits ensure the security and effectiveness of IT systems in line with industry standards.",
          "We employ a risk-based audit approach, fully aligned with International Standards, ensuring an efficient and objective audit delivered within the required timeframes. Whether you’re an entrepreneurial start-up, a family-run business, or a large corporate organization, Elite Solutions offers dependable financial advice and timely reporting for all your stakeholders.",
        ],
        bullets: [
          "Audits, reviews, and compilations",
          "Other attestation services",
          "Agreed-upon procedures",
        ],
      },
      {
        heading: "External Audit",
        paragraphs: [
          "Gain a comprehensive understanding of your business’s financial health with the support of top external auditors in the United States. This process typically begins with a detailed review of your accounting records to verify their accuracy. The auditor’s analysis is then compared against the financial statements to determine the true state of your business finances.",
          "External audits help both small and large businesses assess management competence, safeguard investments, identify fraudulent practices, and ensure statutory compliance. At Elite Solutions, we present a transparent and accurate view of your financial statements, align documentation with the appropriate reporting standards, and provide strategic recommendations that support operational improvements.",
        ],
      },
      {
        heading: "Internal Audit",
        paragraphs: [
          "Internal auditing evaluates the effectiveness of your company’s internal controls, financial reporting, and regulatory compliance. Our internal auditors review every facet of the business, from management ethics to departmental operational strategies, and identify inefficiencies in existing controls, policies, and financial systems.",
          "Following a thorough evaluation, internal auditors provide reports and strategies to strengthen internal controls, minimize risks, and boost efficiency. Findings remain independent and accountable to the audit committee, free from conflicts of interest or undue influence.",
        ],
      },
      {
        heading: "Information Technology Audit Services",
        paragraphs: [
          "Our CISA-certified auditors ensure the robustness and security of your IT infrastructure, providing services across industries such as finance, healthcare, and manufacturing — tailored to your specific needs.",
        ],
        bullets: [
          "Understanding business processes and identifying risks",
          "Risk assessment and strategic remediation recommendations",
          "IT general control testing",
          "Compliance testing against industry regulations",
          "SOC 1 and SOC 2 reports",
          "SOX compliance support",
          "Framework implementation (NIST, COSO, COBIT, ISO)",
          "HIPAA, GAAP, and IIA-aligned compliance expertise",
          "SAP system audits",
          "Microsoft 365 CIS benchmark audits",
        ],
      },
      {
        heading: "Deliverables & why choose us",
        paragraphs: [
          "You receive clear findings, practical remediation guidance, and ongoing support — delivered by experienced, client-focused auditors.",
        ],
        bullets: [
          "Detailed audit reports",
          "Consultation on remediation strategies",
          "Ongoing support and guidance",
          "CISA-certified expertise",
          "Industry-specific, tailored solutions",
          "Regulatory compliance focus",
        ],
      },
    ],
  },
  {
    slug: "web-development",
    pageTitle: "Web Development",
    heroBg: "/images/web-coding-hero-premium.jpg",
    intro: [
      "Your website is the heart of your business — it should be beautiful, functional, and built to tell your brand story.",
    ],
    offerLead:
      "Custom, responsive websites that look sharp on every device, reflect your brand, and turn visitors into inquiries.",
    sections: [
      {
        heading: "Web Development",
        image: "/images/web-devices-premium.jpg",
        paragraphs: [
          "At Elite Solutions, we’re dedicated to helping your business thrive with customized non-financial services. As your website is the heart of your business, it should be as beautiful and functional as your online presence matters. From layout and navigation to performance and accessibility, we build sites that feel polished on every screen and stay easy for your team to manage.",
          "We focus on custom web application development for user-friendly, interactive sites. First impressions are made there — let’s create a site that tells your brand story and speaks to your audience. Clear structure, fast load times, and purposeful calls to action help visitors understand what you offer and take the next step with confidence.",
        ],
      },
      {
        heading: "Complete Web Development Solutions",
        paragraphs: [
          "From modern frontends to powerful backends, we build everything you need to bring your ideas to life.",
        ],
        features: [
          {
            icon: "frontend",
            title: "Frontend Development",
            body: "Beautiful, responsive and high-performance user interfaces using modern technologies.",
          },
          {
            icon: "backend",
            title: "Backend Development",
            body: "Robust APIs and scalable server-side solutions with Python, Node.js and more.",
          },
          {
            icon: "database",
            title: "Database Integration",
            body: "Secure and efficient database setup, migration and management (Supabase, PostgreSQL, etc).",
          },
          {
            icon: "fullstack",
            title: "Full Stack Development",
            body: "End-to-end development with modern stacks like Next.js, React, FastAPI and more.",
          },
          {
            icon: "webapp",
            title: "Web Applications",
            body: "Custom web apps tailored to your business needs.",
          },
          {
            icon: "ecommerce",
            title: "E-commerce Solutions",
            body: "Powerful online stores with secure payments and smooth UX.",
          },
          {
            icon: "api",
            title: "API Development",
            body: "RESTful APIs and third-party integrations (OpenAI, Stripe, etc).",
          },
          {
            icon: "deploy",
            title: "Deployment & Support",
            body: "Reliable deployment, monitoring and ongoing support.",
          },
        ],
      },
      {
        heading: "From Idea to Live Website",
        paragraphs: [
          "We keep the process simple, transparent and focused on your goals.",
        ],
        process: [
          {
            icon: "discuss",
            title: "Discuss Your Idea",
            body: "We understand your goals, requirements and vision.",
          },
          {
            icon: "design",
            title: "Design & Plan",
            body: "We create a clean design and development plan for your approval.",
          },
          {
            icon: "develop",
            title: "Develop & Build",
            body: "We build your website using modern technologies and best practices.",
          },
          {
            icon: "launch",
            title: "Launch & Support",
            body: "Your website goes live and we’re here for ongoing support.",
          },
        ],
      },
      {
        heading: "Featured Projects",
        paragraphs: [
          "Take a look at some of the websites we've built for our clients.",
        ],
        ctaLabel: "View All Projects",
        ctaHref: "/portfolio",
        projects: [
          {
            title: "E-Commerce Store",
            description:
              "A premium online store built for smooth browsing, secure checkout, and product storytelling that converts visitors into buyers.",
            image: "/images/project-ecommerce.jpg",
            href: "/portfolio",
            linkLabel: "View project",
          },
          {
            title: "Business Website",
            description:
              "A clean corporate site that presents services clearly, builds trust fast, and makes it easy for prospects to get in touch.",
            image: "/images/project-business.jpg",
            href: "/portfolio",
            linkLabel: "View project",
          },
          {
            title: "SaaS Platform",
            description:
              "A modern product experience with dashboards and workflows designed to help teams track progress and grow with confidence.",
            image: "/images/project-saas.jpg",
            href: "/portfolio",
            linkLabel: "View project",
          },
          {
            title: "Restaurant Website",
            description:
              "An appetizing digital presence that showcases the menu, atmosphere, and brand — ready to drive reservations and orders.",
            image: "/images/project-restaurant.jpg",
            href: "/portfolio",
            linkLabel: "View project",
          },
        ],
      },
    ],
  },
  {
    slug: "graphic-designing",
    pageTitle: "Graphic Designing",
    intro: [
      "Bring your brand to life with innovative, creative, and visually dynamic designs that communicate your message clearly.",
    ],
    offerLead:
      "Logos, promotional materials, and digital content tailored to your identity — designs that captivate and leave a lasting impression.",
    sections: [
      {
        heading: "Graphic Designing",
        paragraphs: [
          "At Elite Solutions, we position you for distinction with bespoke non-financial services. From marketing strategy to online presence, we help grow your brand and keep it at the top of its game.",
          "We work with core design principles — contrast, alignment, repetition, proximity, and hierarchy — to change your brand with stunning, creative visuals that bring it to life.",
        ],
      },
      {
        heading: "We focus on",
        paragraphs: [
          "Every design is tailored to reflect your business’s unique identity and communicate your message effectively.",
        ],
        specialties: [
          {
            title: "Logo creation",
            body: "Marks that capture your brand and stay memorable.",
          },
          {
            title: "Promotional materials",
            body: "Print and campaign assets aligned to your identity.",
          },
          {
            title: "Digital content",
            body: "Visuals that communicate your message clearly online.",
          },
        ],
      },
      {
        heading: "Why choose Elite Solutions",
        paragraphs: [
          "Ready to stand out? Our designers deliver visuals that captivate and make a lasting impact.",
        ],
        steps: [
          {
            title: "Expertise",
            body: "Professionals who excel at creating strong visuals.",
          },
          {
            title: "Customization",
            body: "Every design reflects your unique identity.",
          },
          {
            title: "Results-driven",
            body: "Designs that captivate and leave an impact.",
          },
        ],
      },
    ],
  },
  {
    slug: "marketing-strategies",
    pageTitle: "Marketing Strategies",
    intro: [
      "We design multi-touch marketing strategies that build brand awareness, accelerate engagement, and drive enduring success.",
    ],
    offerLead:
      "Clear plans for who to reach, where to reach them, and what to say — tailored to your goals and audience.",
    sections: [
      {
        heading: "Marketing Strategy",
        paragraphs: [
          "At Elite Solutions, we help create brand awareness and development through one-of-a-kind non-financial services. We work on multi-touch marketing strategies — whether crafting a clear plan for your business, improving online visibility, or applying other growth techniques.",
          "Creative design in marketing depends on how you depict and target your audience. The design must focus deeply to bring traffic to your website and includes everything from branding to advertising.",
        ],
      },
      {
        heading: "Discover your brand",
        paragraphs: [
          "We design marketing strategies that initiate growth, accelerate engagement, and bring enduring success.",
        ],
        specialties: [
          {
            title: "Brand identity",
            body: "A unique, memorable presence that helps you stand out.",
          },
          {
            title: "Customer connection",
            body: "More meaningful ways to engage audiences and build loyalty.",
          },
          {
            title: "Sustainable growth",
            body: "Strategies for steady, long-term business success.",
          },
        ],
      },
      {
        heading: "Why choose Elite Solutions",
        paragraphs: [
          "Are you ready to take your brand to the next level? We focus on real, measurable growth and meaningful customer interactions.",
        ],
        steps: [
          {
            title: "Expertise",
            body: "Years of experience delivering effective marketing solutions.",
          },
          {
            title: "Customization",
            body: "Strategies matched to your goals and audience.",
          },
          {
            title: "Results-driven",
            body: "Real, measurable growth and meaningful interactions.",
          },
        ],
      },
    ],
  },
  {
    slug: "seo-services",
    pageTitle: "SEO Services",
    intro: [
      "Boost your visibility, attract the right audience, and grow your business with smart SEO solutions that drive real organic traffic.",
    ],
    offerLead:
      "Proven SEO strategies — keyword research, content optimization, and ongoing tracking — to improve rankings and conversions.",
    sections: [
      {
        heading: "SEO Services",
        paragraphs: [
          "At Elite Solutions, we give personalized support to grow your brand — whether creating an impactful marketing strategy or building a robust online presence. SEO Services help boost your visibility, attract the right audience, and grow your business with smart solutions.",
          "Trigger your online existence and drive real organic traffic with our SEO strategies.",
        ],
      },
      {
        heading: "Which includes",
        paragraphs: [
          "We tailor every strategy to suit your business’s niche and goals, staying ahead of trends to optimize your visibility.",
        ],
        specialties: [
          {
            title: "Keyword research",
            body: "Area-wise research and implementation that fits your market.",
          },
          {
            title: "Content optimization",
            body: "Pages structured to answer what buyers search for.",
          },
          {
            title: "Performance tracking",
            body: "Ongoing adjustments based on real results.",
          },
        ],
      },
      {
        heading: "Why choose Elite Solutions",
        paragraphs: [
          "Ready to rank higher? We focus on rankings, driving traffic, and increasing conversions.",
        ],
        steps: [
          {
            title: "Expertise",
            body: "SEO specialists who stay ahead of trends.",
          },
          {
            title: "Customization",
            body: "Strategies tailored to your niche and goals.",
          },
          {
            title: "Results-driven",
            body: "Rankings, traffic, and conversions that matter.",
          },
        ],
      },
    ],
  },
  {
    slug: "email-marketing",
    pageTitle: "Email Marketing",
    intro: [
      "Personalized email campaigns that connect, convert, and grow your customer base — one of the most effective ways to engage customers.",
    ],
    offerLead:
      "Compelling email content, targeted lists, and measurable campaigns that build loyalty and increase sales.",
    sections: [
      {
        heading: "Email Marketing",
        paragraphs: [
          "At Elite Solutions, we’re here to help your business thrive. Whether creating smart marketing strategies or building a solid online presence, we provide customized support to grow your brand every step of the way.",
          "We create personalized email promotions that connect, convert, and grow your customer base — engaging customers and increasing sales with specified email campaigns.",
        ],
      },
      {
        heading: "We provide",
        paragraphs: [
          "From crafting compelling email content to building targeted lists, we help you achieve impactful, measurable results.",
        ],
        specialties: [
          {
            title: "Email content",
            body: "Personalized copy that connects and converts.",
          },
          {
            title: "Targeted lists",
            body: "Building and managing lists for clearer reach.",
          },
          {
            title: "Measurable loyalty",
            body: "Campaigns that drive engagement and repeat business.",
          },
        ],
      },
      {
        heading: "Why choose Elite Solutions",
        paragraphs: [
          "Ready to connect? Let’s power up your email strategy with campaigns tailored to your audience and goals.",
        ],
        steps: [
          {
            title: "Expertise",
            body: "Compelling campaigns that drive engagement.",
          },
          {
            title: "Customization",
            body: "Tailored to your audience and goals.",
          },
          {
            title: "Results-driven",
            body: "Measurable impact with every send.",
          },
        ],
      },
    ],
  },
  {
    slug: "help-line-services",
    pageTitle: "Help Line Services",
    intro: [
      "Dedicated helpline support that addresses inquiries, resolves issues quickly, and keeps customers satisfied.",
    ],
    offerLead:
      "Reliable, responsive customer support lines customized to your business — so customers get answers and you build trust.",
    sections: [
      {
        heading: "Help Line Services",
        paragraphs: [
          "At Elite Solutions, our dedication is directed toward your business success. From building an efficient marketing plan to increasing your online presence, we help you expand and maintain a strong brand for the long term.",
          "Deliver exceptional customer support and ensure satisfaction with our dedicated helpline services — reliable solutions that keep customers supported at all times.",
        ],
      },
      {
        heading: "We offer",
        paragraphs: [
          "Our team is committed to delivering professional, responsive assistance customized to your business’s needs.",
        ],
        specialties: [
          {
            title: "Support lines",
            body: "Dedicated channels ready for customer inquiries.",
          },
          {
            title: "Quick resolution",
            body: "Issues handled promptly to keep satisfaction high.",
          },
          {
            title: "Trusted experience",
            body: "Seamless support that builds loyalty over time.",
          },
        ],
      },
      {
        heading: "Why choose Elite Solutions",
        paragraphs: [
          "Ready to elevate your support? We focus on enhancing customer satisfaction and trust.",
        ],
        steps: [
          {
            title: "Expertise",
            body: "Professional, responsive customer support.",
          },
          {
            title: "Customization",
            body: "Helpline services matched to your needs.",
          },
          {
            title: "Results-driven",
            body: "Stronger satisfaction and lasting trust.",
          },
        ],
      },
    ],
  },
];

/** Tax content adapted from https://elitesolutionusa.com/tax/ */
/** Payroll content adapted from https://elitesolutionusa.com/payroll-outsourcing-services/ */
/** CFO content adapted from https://elitesolutionusa.com/cfo/ */
/** Audit & Review content adapted from https://elitesolutionusa.com/audit-review/ */
/** Web Development content adapted from https://elitesolutionusa.com/web-development/ */
/** Graphic Designing content adapted from https://elitesolutionusa.com/graphic-designing/ */
/** Marketing Strategies content adapted from https://elitesolutionusa.com/marketing-strategies/ */
/** SEO Services content adapted from https://elitesolutionusa.com/seo-services/ */
/** Email Marketing content adapted from https://elitesolutionusa.com/email-marketing/ */
/** Help Line Services content adapted from https://elitesolutionusa.com/help-line-services/ */

export function getServiceDetail(slug: string) {
  return serviceDetails.find((d) => d.slug === slug);
}
