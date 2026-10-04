"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MagButton } from "@/components/interactions";
import { Reveal } from "@/components/reveal";
import {
  pricingPage,
  type PricingHighlightIcon,
  type PricingNonFinIcon,
} from "@/data/pricing-page";

function HighlightIcon({ name }: { name: PricingHighlightIcon }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "fees":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v10" />
          <path d="M9.5 9.5c.6-1 1.5-1.5 2.5-1.5 1.4 0 2.5.9 2.5 2s-1.1 2-2.5 2h-1c-1.4 0-2.5.9-2.5 2s1.1 2 2.5 2c1 0 1.9-.5 2.5-1.5" />
        </svg>
      );
    case "plans":
      return (
        <svg {...common}>
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h10" />
          <path d="M17 15l3 3-3 3" />
        </svg>
      );
    case "support":
      return (
        <svg {...common}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
  }
}

function NonFinIcon({ name }: { name: PricingNonFinIcon }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "seo":
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.3-4.3" />
          <path d="M8 11h6" />
          <path d="M11 8v6" />
        </svg>
      );
    case "web":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <path d="M3 8h18" />
          <path d="M8 18h8" />
        </svg>
      );
    case "social":
      return (
        <svg {...common}>
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <path d="M8.6 13.5 15.4 17.5" />
          <path d="M15.4 6.5 8.6 10.5" />
        </svg>
      );
    case "call":
      return (
        <svg {...common}>
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.5-1.1a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" />
        </svg>
      );
    case "content":
      return (
        <svg {...common}>
          <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6" />
          <path d="M9 13h6" />
          <path d="M9 17h6" />
        </svg>
      );
    case "design":
      return (
        <svg {...common}>
          <path d="M12 3 4 7.5v9L12 21l8-4.5v-9L12 3z" />
          <path d="M12 12 4 7.5" />
          <path d="M12 12v9" />
          <path d="M12 12l8-4.5" />
        </svg>
      );
  }
}

export function PricingStudioPage() {
  const { hero, discovery, nonFinancial, faq } = pricingPage;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="price-studio">
      <section className="price-hero">
        <div className="price-hero-bg" aria-hidden="true">
          <Image
            src={hero.image}
            alt=""
            fill
            priority
            quality={90}
            sizes="100vw"
            className="price-hero-bg-img"
          />
        </div>
        <div className="w price-hero-in">
          <div className="price-hero-copy">
            <Reveal as="p" className="price-eyebrow">
              {hero.eyebrow}
            </Reveal>
            <Reveal>
              <h1 className="price-title price-hero-title">
                {hero.titleBefore}{" "}
                <span className="price-accent">{hero.titleAccent}</span>
              </h1>
            </Reveal>
            <Reveal as="p" className="price-lead" delay="80ms">
              {hero.lead}
            </Reveal>
            <Reveal className="price-highlights" delay="140ms">
              {hero.highlights.map((item) => (
                <div key={item.label} className="price-highlight">
                  <span className="price-highlight-ic" aria-hidden="true">
                    <HighlightIcon name={item.icon} />
                  </span>
                  <span>{item.label}</span>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <section className="sec price-discovery">
        <div className="w">
          <div className="price-sec-head">
            <Reveal as="p" className="price-eyebrow">
              {discovery.eyebrow}
            </Reveal>
            <Reveal>
              <h2 className="price-title">{discovery.title}</h2>
            </Reveal>
            <Reveal as="p" className="price-lead" delay="60ms">
              {discovery.lead}
            </Reveal>
          </div>
          <div className="price-discovery-grid">
            {discovery.steps.map((step, i) => (
              <Reveal
                key={step.num}
                className="price-discovery-card"
                delay={`${100 + i * 80}ms`}
              >
                <div className="price-discovery-media">
                  <Image
                    src={step.image}
                    alt=""
                    fill
                    quality={90}
                    sizes="(max-width:900px) 100vw, 48vw"
                    className="price-discovery-img"
                  />
                </div>
                <span className="price-discovery-num" aria-hidden="true">
                  {step.num}
                </span>
                <strong>{step.title}</strong>
                <p>{step.body}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="price-sec-cta" delay="180ms">
            <MagButton>
              <Link className="btn gold mag" href={discovery.ctaHref}>
                {discovery.ctaLabel}
                <span aria-hidden="true"> →</span>
              </Link>
            </MagButton>
          </Reveal>
        </div>
      </section>

      <section className="sec price-nonfin">
        <div className="w">
          <div className="price-sec-head">
            <Reveal as="p" className="price-eyebrow">
              {nonFinancial.eyebrow}
            </Reveal>
            <Reveal>
              <h2 className="price-title">{nonFinancial.title}</h2>
            </Reveal>
            <Reveal as="p" className="price-lead" delay="60ms">
              {nonFinancial.lead}
            </Reveal>
          </div>
          <ul className="price-nonfin-grid">
            {nonFinancial.items.map((item, i) => (
              <Reveal
                key={item.title}
                as="li"
                className="price-nonfin-card"
                delay={`${Math.min(i * 60, 240)}ms`}
              >
                <span className="price-nonfin-ic" aria-hidden="true">
                  <NonFinIcon name={item.icon} />
                </span>
                <strong>{item.title}</strong>
                <p>{item.body}</p>
              </Reveal>
            ))}
          </ul>
          <Reveal className="price-sec-cta" delay="160ms">
            <MagButton>
              <Link className="btn gold mag" href={nonFinancial.ctaHref}>
                {nonFinancial.ctaLabel}
                <span aria-hidden="true"> →</span>
              </Link>
            </MagButton>
          </Reveal>
        </div>
      </section>

      <section className="sec price-faq">
        <div className="w">
          <div className="price-sec-head">
            <Reveal as="p" className="price-eyebrow">
              {faq.eyebrow}
            </Reveal>
            <Reveal>
              <h2 className="price-title">{faq.title}</h2>
            </Reveal>
          </div>

          <div className="price-faq-grid">
            <Reveal className="price-faq-aside" delay="60ms">
              <div className="price-faq-aside-media">
                <Image
                  src={faq.aside.image}
                  alt=""
                  fill
                  sizes="(max-width:900px) 100vw, 36vw"
                  className="price-faq-aside-img"
                />
              </div>
              <strong>{faq.aside.title}</strong>
              <p>{faq.aside.body}</p>
              <MagButton>
                <Link className="btn gold mag" href={faq.aside.ctaHref}>
                  {faq.aside.ctaLabel}
                  <span aria-hidden="true"> →</span>
                </Link>
              </MagButton>
            </Reveal>

            <div className="price-faq-list">
              {faq.items.map((item, i) => {
                const open = openFaq === i;
                const panelId = `price-faq-panel-${i}`;
                return (
                  <div
                    key={item.q}
                    className={`price-faq-item${open ? " open" : ""}`}
                  >
                    <button
                      type="button"
                      className="price-faq-q"
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => setOpenFaq((prev) => (prev === i ? null : i))}
                    >
                      <span>{item.q}</span>
                      <span className="price-faq-toggle" aria-hidden="true">
                        {open ? "−" : "+"}
                      </span>
                    </button>
                    <div
                      id={panelId}
                      className="price-faq-panel"
                      role="region"
                    >
                      <p className="price-faq-a">{item.a}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
