"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MagButton, TiltCard } from "@/components/interactions";
import { Reveal } from "@/components/reveal";
import {
  portfolioStudioPage,
  type PortfolioStudioProject,
} from "@/data/portfolio-page";

export function PortfolioStudioPage() {
  const { hero, projects, process, cta } = portfolioStudioPage;
  const [active, setActive] = useState<PortfolioStudioProject | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <div className="pf-studio">
      <section className="pf-hero">
        <div className="pf-hero-bg" aria-hidden="true">
          <Image
            src={hero.image}
            alt=""
            fill
            priority
            quality={90}
            sizes="100vw"
            className="pf-hero-bg-img"
          />
        </div>
        <div className="w pf-hero-in">
          <div className="pf-hero-copy">
            <Reveal as="p" className="pf-eyebrow">
              {hero.eyebrow}
            </Reveal>
            <Reveal>
              <h1 className="pf-title pf-hero-title">{hero.title}</h1>
            </Reveal>
            <Reveal as="p" className="pf-lead" delay="80ms">
              {hero.lead}
            </Reveal>
          </div>
        </div>
      </section>

      <section className="sec pf-work">
        <div className="w">
          <div className="pf-process-head">
            <Reveal as="p" className="pf-eyebrow">
              Our Clients
            </Reveal>
            <Reveal>
              <h2 className="pf-title">Client Success Stories</h2>
            </Reveal>
          </div>

          <ul className="pf-grid">
              {projects.map((project, i) => (
                <Reveal
                  key={project.id}
                  as="li"
                  className="pf-card-slot"
                  delay={`${Math.min(i * 50, 250)}ms`}
                >
                  <TiltCard className="pf-card">
                    <div className="pf-card-media">
                      <Image
                        src={project.image}
                        alt=""
                        fill
                        sizes="(max-width:900px) 100vw, 33vw"
                        className={`pf-card-img${project.imageFit === "contain" ? " fit-contain" : ""}`}
                      />
                    </div>
                    <h3 className="pf-card-title">{project.title}</h3>
                    <p className="pf-card-body">{project.description}</p>
                    <button
                      type="button"
                      className="pf-card-btn"
                      onClick={() => setActive(project)}
                    >
                      View details
                    </button>
                  </TiltCard>
                </Reveal>
              ))}
          </ul>
        </div>
      </section>

      <section className="sec pf-process">
        <div className="w">
          <div className="pf-process-head">
            <Reveal as="p" className="pf-eyebrow">
              {process.eyebrow}
            </Reveal>
            <Reveal>
              <h2 className="pf-title">{process.title}</h2>
            </Reveal>
            <Reveal as="p" className="pf-lead" delay="60ms">
              {process.lead}
            </Reveal>
          </div>
          <ol className="pf-process-grid">
            {process.steps.map((step, i) => (
              <Reveal
                key={step.num}
                as="li"
                className="pf-process-card"
                delay={`${Math.min(i * 60, 240)}ms`}
              >
                <span className="pf-process-num" aria-hidden="true">
                  {step.num}
                </span>
                <strong>{step.title}</strong>
                <p>{step.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="sec pf-cta">
        <div className="w pf-cta-panel">
          <div className="pf-cta-copy">
            <Reveal>
              <h2 className="pf-title">{cta.title}</h2>
            </Reveal>
            <Reveal as="p" className="pf-lead" delay="60ms">
              {cta.lead}
            </Reveal>
            <Reveal className="pf-actions" delay="120ms">
              <MagButton>
                <Link className="btn gold mag" href={cta.primaryHref}>
                  {cta.primaryLabel}
                  <span aria-hidden="true"> →</span>
                </Link>
              </MagButton>
              <MagButton>
                <Link className="btn ghost mag pf-cta-ghost" href={cta.secondaryHref}>
                  {cta.secondaryLabel}
                </Link>
              </MagButton>
            </Reveal>
          </div>
          <Reveal className="pf-cta-media" delay="100ms">
            <div className="pf-cta-frame">
              <Image
                src={cta.image}
                alt=""
                fill
                sizes="(max-width:900px) 100vw, 42vw"
                className="pf-cta-img"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {active ? (
        <div
          className="pf-detail"
          role="dialog"
          aria-modal="true"
          aria-labelledby="pf-detail-title"
          onClick={() => setActive(null)}
        >
          <article className="pf-card pf-detail-card" onClick={(event) => event.stopPropagation()}>
            <div className="pf-card-media">
              <Image
                src={active.image}
                alt=""
                fill
                sizes="640px"
                className={`pf-card-img${active.imageFit === "contain" ? " fit-contain" : ""}`}
              />
            </div>
            <h3 id="pf-detail-title" className="pf-card-title">
              {active.title}
            </h3>
            <div className="pf-detail-copy">
              {active.details ? (
                <>
                  <p>{active.details.intro}</p>
                  {active.details.sections.map((section) => (
                    <section key={section.heading}>
                      <h4>{section.heading}</h4>
                      {section.paragraphs?.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                      {section.items?.map((item) => (
                        <p key={item.label}>
                          <strong>{item.label}: </strong>
                          {item.text}
                        </p>
                      ))}
                    </section>
                  ))}
                </>
              ) : (
                <p>{active.description}</p>
              )}
            </div>
            <button type="button" className="pf-card-btn" onClick={() => setActive(null)}>
              Close
            </button>
          </article>
        </div>
      ) : null}
    </div>
  );
}
