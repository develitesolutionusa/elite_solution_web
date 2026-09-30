"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandMark } from "@/components/icons";
import { MagButton } from "@/components/interactions";
import { nav, site } from "@/data/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="top" id="top">
      <div className="w bar">
        <Link className="brand" href="/">
          <BrandMark />
          {site.name}
        </Link>
        <button
          className="burger"
          type="button"
          aria-expanded={open}
          aria-controls="nav"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
        <nav
          className={`nav${open ? " open" : ""}`}
          id="nav"
          aria-label="Main"
        >
          {nav.map((item) => {
            const current =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            if (item.cta) {
              return (
                <MagButton key={item.href}>
                  <Link
                    href={item.href}
                    className="call"
                    aria-current={current ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </MagButton>
              );
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
