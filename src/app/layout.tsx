import type { Metadata } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import { CtaBanner, SiteFooter } from "@/components/site-footer";
import { PageLoader } from "@/components/page-loader";
import { ScrollProgress } from "@/components/scroll-progress";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/data/site";
import "./globals.css";

const head = Bricolage_Grotesque({
  variable: "--font-head",
  subsets: ["latin"],
  weight: ["500", "700", "800"],
});

const body = Figtree({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Financial and Non-Financial Services`,
    template: `%s | ${site.name}`,
  },
  description: site.tagline,
  metadataBase: new URL(site.website),
  openGraph: {
    title: site.name,
    description: site.tagline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${head.variable} ${body.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        <PageLoader />
        <ScrollProgress />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <CtaBanner />
        <SiteFooter />
      </body>
    </html>
  );
}
