"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { MagButton } from "@/components/interactions";
import { Reveal } from "@/components/reveal";
import {
  portfolioStudioFilters,
  portfolioStudioPage,
  type PortfolioStudioFilterId,
} from "@/data/portfolio-page";

export function PortfolioStudioPage() {
  const { hero, projects, process, cta } = portfolioStudioPage;
  const [filter, setFilter] = useState<PortfolioStudioFilterId>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((p) => p.category === filter);
  }, [filter, projects]);

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
          <div className="pf-filters" role="tablist" aria-label="Portfolio filters">
            {portfolioStudioFilters.map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={filter === item.id}
                className={`pf-filter${filter === item.id ? " on" : ""}`}
                onClick={() => setFilter(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="pf-empty">
              <h3>No projects in this category yet</h3>
              <p>Completed projects will appear here soon.</p>
            </div>
          ) : (
            <ul className="pf-grid">
              {filtered.map((project, i) => (
                <Reveal
                  key={project.id}
                  as="li"
                  className="pf-card"
                  delay={`${Math.min(i * 50, 250)}ms`}
                >
                  <div className="pf-card-media">
                    <Image
                      src={project.image}
                      alt=""
                      fill
                      sizes="(max-width:900px) 100vw, 33vw"
                      className="pf-card-img"
                    />
                  </div>
                  <strong className="pf-card-title">{project.title}</strong>
                  <span className="pf-card-cat">{project.categoryLabel}</span>
                  <p className="pf-card-body">{project.description}</p>
                  <Link className="pf-card-link" href={project.href}>
                    View Project
                    <span aria-hidden="true"> →</span>
                  </Link>
                </Reveal>
              ))}
            </ul>
          )}
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
    </div>
  );
}
