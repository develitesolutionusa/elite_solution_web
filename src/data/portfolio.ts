import type { PortfolioCategoryId } from "./services";
import portfolioJson from "./portfolio.json";

export type PortfolioItem = {
  name: string;
  alt: string;
  bg: string;
  fit: "cover" | "contain";
  src: string;
  category: PortfolioCategoryId;
};

export const portfolio: PortfolioItem[] = portfolioJson as PortfolioItem[];
