import Link from "next/link";
import { MagButton } from "@/components/interactions";
import { nav, site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer>
      <div className="giant" aria-hidden="true">
        {site.shortName}
      </div>
      <div className="w ft">
        <div>
          {site.name}
          <br />
          {site.location}
        </div>
        <div className="fl">
          {nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.cta ? "Contact" : item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

export function CtaBanner() {
  return (
    <section className="cta">
      <div className="w">
        <div>
          <h2>Ready to grow your business?</h2>
          <p>
            Call {site.phone} or send us a message.
          </p>
        </div>
        <div className="btns">
          <MagButton>
            <Link className="btn gold" href="/contact">
              Book a free consultation
            </Link>
          </MagButton>
          <MagButton>
            <a className="btn ghost" href={site.phoneHref}>
              Call now
            </a>
          </MagButton>
        </div>
      </div>
    </section>
  );
}
