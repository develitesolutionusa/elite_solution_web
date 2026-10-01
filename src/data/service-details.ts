export type ServiceDetailSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  image: string;
};

export type ServiceDetailContent = {
  slug: string;
  pageTitle: string;
  intro: string[];
  pageBg?: string;
  sections: ServiceDetailSection[];
};

/** Content adapted from https://elitesolutionusa.com/accounting-bookkeeping/ */
export const serviceDetails: ServiceDetailContent[] = [
  {
    slug: "accounting-and-bookkeeping",
    pageTitle: "Accounting & Bookkeeping",
    intro: [
      "Our expert accounting and bookkeeping services are designed to help businesses manage their financial records with accuracy and efficiency.",
    ],
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
];

export function getServiceDetail(slug: string) {
  return serviceDetails.find((d) => d.slug === slug);
}
