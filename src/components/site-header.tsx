"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/brand-logo";
import { AuthControls } from "@/components/auth-controls";
import { MagButton } from "@/components/interactions";
import { nav } from "@/data/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const links = nav.filter((item) => !item.cta);
  const cta = nav.find((item) => item.cta);
  const ctaCurrent = cta && pathname.startsWith(cta.href) ? "page" : undefined;

  return (
    <header className="top" id="top">
      <div className="bar">
        <Link className="brand" href="/" aria-label="Elite Solution home">
          <BrandLogo priority />
        </Link>
        <nav
          className={`nav${open ? " open" : ""}`}
          id="nav"
          aria-label="Main"
        >
          {links.map((item) => {
            const current =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
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
          {cta ? (
            <>
              <div className="nav-auth-mobile">
                <AuthControls />
              </div>
              <MagButton>
                <Link
                  href={cta.href}
                  className="call mag nav-call-mobile"
                  aria-current={ctaCurrent}
                >
                  {cta.label}
                </Link>
              </MagButton>
            </>
          ) : (
            <div className="nav-auth-mobile">
              <AuthControls />
            </div>
          )}
        </nav>
        <div className="bar-end">
          <button
            className="burger"
            type="button"
            aria-expanded={open}
            aria-controls="nav"
            onClick={() => setOpen((v) => !v)}
          >
            Menu
          </button>
          {cta ? (
            <span className="nav-cta">
              <AuthControls />
              <MagButton>
                <Link
                  href={cta.href}
                  className="call mag"
                  aria-current={ctaCurrent}
                >
                  {cta.label}
                </Link>
              </MagButton>
            </span>
          ) : (
            <span className="nav-cta">
              <AuthControls />
            </span>
          )}
        </div>
      </div>
    </header>
  );
}
