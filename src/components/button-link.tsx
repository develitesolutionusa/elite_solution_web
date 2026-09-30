import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "gold" | "ghost" | "blue";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "gold",
  className = "",
}: ButtonLinkProps) {
  const external = href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("http");
  const classes = `btn ${variant} mag ${className}`.trim();

  if (external) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {children}
    </Link>
  );
}
