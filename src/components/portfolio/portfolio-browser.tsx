"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { MagButton } from "@/components/interactions";
import { portfolio, type PortfolioItem } from "@/data/portfolio";
import {
  portfolioCategories,
  type PortfolioCategoryId,
} from "@/data/services";

export function PortfolioBrowser() {
  const [cat, setCat] = useState<PortfolioCategoryId>("all");
  const [active, setActive] = useState<PortfolioItem | null>(null);

  const filtered = useMemo(() => {
    if (cat === "all") return portfolio;
    return portfolio.filter((p) => p.category === cat);
  }, [cat]);

  const counts = useMemo(() => {
    const map: Record<string, number> = { all: portfolio.length };
    for (const c of portfolioCategories) {
      if (c.id === "all") continue;
      map[c.id] = portfolio.filter((p) => p.category === c.id).length;
    }
    return map;
  }, []);

  const title =
    portfolioCategories.find((c) => c.id === cat)?.name ?? "All work";

  return (
    <>
      <div className="sec">
        <div className="w pf">
          <aside className="cats" aria-label="Portfolio categories">
            <h2>Categories</h2>
            <ul>
              {portfolioCategories.map((c) => (
                <li key={c.id}>
                  <button
                    type="button"
                    className="cat"
                    aria-pressed={cat === c.id}
                    onClick={() => setCat(c.id)}
                  >
                    <span>{c.name}</span>
                    <span className="count">{counts[c.id] ?? 0}</span>
                  </button>
                </li>
              ))}
            </ul>
          </aside>
          <div>
            <div className="head">
              <h2>{title}</h2>
              <span>
                {filtered.length}{" "}
                {filtered.length === 1 ? "project" : "projects"}
              </span>
            </div>
            {filtered.length === 0 ? (
              <div className="empty">
                <h3>No projects here yet</h3>
                <p>
                  Completed projects in this category will be listed here.
                </p>
              </div>
            ) : (
              <ul className="grid">
                {filtered.map((item) => (
                  <li key={item.name}>
                    <button
                      type="button"
                      className="item tilt"
                      aria-label={`View ${item.name} logo`}
                      onClick={() => setActive(item)}
                      style={{
                        display: "block",
                        width: "100%",
                        textAlign: "left",
                        font: "inherit",
                        color: "inherit",
                        padding: 0,
                        border: "1px solid var(--line)",
                        background: "var(--surface)",
                        borderRadius: 14,
                        overflow: "hidden",
                        cursor: "pointer",
                      }}
                    >
                      <div
                        className="tile"
                        style={{ background: item.bg }}
                      >
                        <Image
                          src={item.src}
                          alt={item.alt}
                          width={440}
                          height={440}
                          style={{ objectFit: item.fit }}
                        />
                      </div>
                      <div className="cap">
                        <strong>{item.name}</strong>
                        <small>Logo design</small>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {active ? (
        <div
          className="lb"
          role="dialog"
          aria-modal="true"
          aria-label="Logo preview"
          onClick={() => setActive(null)}
        >
          <div className="box" onClick={(e) => e.stopPropagation()}>
            <div className="big" style={{ background: active.bg }}>
              <Image
                src={active.src}
                alt={active.alt}
                width={520}
                height={520}
                style={{ objectFit: active.fit }}
              />
            </div>
            <div className="cp">
              <strong>{active.name}</strong>
              <MagButton>
                <button
                  type="button"
                  className="mag"
                  onClick={() => setActive(null)}
                >
                  Close
                </button>
              </MagButton>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
