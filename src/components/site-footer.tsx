import Link from "next/link";
import { MagButton } from "@/components/interactions";
import { nav, site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer>
      <div className="w">
        <div className="ft">
          <div className="ft-brand">
            <strong>{site.name}</strong>
            <p>{site.tagline}</p>
            <p className="ft-loc">{site.location}</p>
          </div>

          <nav className="ft-col" aria-label="Footer">
            <h3>Explore</h3>
            <div className="fl">
              {nav.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.cta ? "Contact" : item.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="ft-col">
            <h3>Contact</h3>
            <div className="fl">
              <a href={site.phoneHref}>{site.phone}</a>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <a href={site.website} target="_blank" rel="noreferrer">
                {site.websiteLabel}
              </a>
            </div>
          </div>
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
          <p>Call {site.phone} or send us a message.</p>
        </div>
        <div className="btns">
          <MagButton>
            <Link className="btn gold mag" href="/contact">
              Book a free consultation
            </Link>
          </MagButton>
          <MagButton>
            <a className="btn ghost mag" href={site.phoneHref}>
              Call now
            </a>
          </MagButton>
        </div>
      </div>
    </section>
  );
}
