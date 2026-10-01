"use client";

import Image from "next/image";
import { useEffect, useId, useRef } from "react";
import { Reveal } from "@/components/reveal";
import type { ServiceDetailContent } from "@/data/service-details";

export function ServiceZigzag({ detail }: { detail: ServiceDetailContent }) {
  const bodyIntro = detail.intro.slice(1);
  const trackRef = useRef<HTMLDivElement>(null);
  const gradId = useId().replace(/:/g, "");

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const base = track.querySelector<SVGPathElement>(".svc-zigzag-spine-base");
    const fill = track.querySelector<SVGPathElement>(".svc-zigzag-spine-fill");
    const svg = track.querySelector<SVGSVGElement>(".svc-zigzag-spine");

    const cardsOf = () =>
      Array.from(track.querySelectorAll<HTMLElement>(".svc-zigzag-row"));

    const layout = () => {
      const cards = cardsOf();
      if (!base || !fill || !svg || cards.length === 0) return;

      const trackRect = track.getBoundingClientRect();
      const w = track.clientWidth;
      const h = track.scrollHeight;
      svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
      svg.style.height = `${h}px`;

      const points = cards.map((card) => {
        const node = card.querySelector<HTMLElement>(".svc-zigzag-node");
        const target = node ?? card;
        const r = target.getBoundingClientRect();
        return {
          x: r.left - trackRect.left + r.width / 2,
          y: r.top - trackRect.top + r.height / 2,
        };
      });

      let d = `M ${points[0].x} ${points[0].y}`;
      for (let i = 1; i < points.length; i++) {
        const prev = points[i - 1];
        const curr = points[i];
        const midY = (prev.y + curr.y) / 2;
        d += ` L ${prev.x} ${midY} L ${curr.x} ${midY} L ${curr.x} ${curr.y}`;
      }

      base.setAttribute("d", d);
      fill.setAttribute("d", d);
      const len = fill.getTotalLength();
      fill.style.strokeDasharray = `${len}`;
      fill.style.strokeDashoffset = String(
        len * (1 - Number(track.style.getPropertyValue("--p") || 0)),
      );
      track.dataset.pathLen = String(len);
    };

    const onScroll = () => {
      layout();
      const cards = cardsOf();
      if (cards.length === 0) return;
      const firstRect = cards[0].getBoundingClientRect();
      const lastRect = cards[cards.length - 1].getBoundingClientRect();
      const startY = firstRect.top + firstRect.height / 2;
      const endY = lastRect.top + lastRect.height / 2;
      const focus = window.innerHeight * 0.55;
      const span = Math.max(1, endY - startY);
      const p = Math.max(0, Math.min(1, (focus - startY) / span));
      track.style.setProperty("--p", String(p));

      const fillPath = track.querySelector<SVGPathElement>(
        ".svc-zigzag-spine-fill",
      );
      const len = Number(track.dataset.pathLen || 0);
      if (fillPath && len) {
        fillPath.style.strokeDashoffset = String(len * (1 - p));
      }

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const t = (center - startY) / span;
        card.classList.toggle("on", p >= t - 0.001);
      });
    };

    const ro = new ResizeObserver(onScroll);
    ro.observe(track);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    const imgs = Array.from(track.querySelectorAll("img"));
    imgs.forEach((img) => img.addEventListener("load", onScroll));

    return () => {
      ro.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      imgs.forEach((img) => img.removeEventListener("load", onScroll));
    };
  }, []);

  return (
    <div className="svc-zigzag">
      {bodyIntro.length > 0 ? (
        <div className="sec">
          <div className="w svc-zigzag-intro">
            {bodyIntro.map((p) => (
              <Reveal as="p" key={p.slice(0, 48)}>
                {p}
              </Reveal>
            ))}
          </div>
        </div>
      ) : null}

      <div className="w svc-zigzag-track" ref={trackRef}>
        <svg className="svc-zigzag-spine" aria-hidden="true">
          <defs>
            <linearGradient
              id={`zig-grad-${gradId}`}
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="0%" stopColor="#7FA1E6" />
              <stop offset="52%" stopColor="#C9A227" />
              <stop offset="100%" stopColor="#F3D77A" />
            </linearGradient>
          </defs>
          <path className="svc-zigzag-spine-base" fill="none" />
          <path
            className="svc-zigzag-spine-fill"
            fill="none"
            stroke={`url(#zig-grad-${gradId})`}
          />
        </svg>

        {detail.sections.map((section, i) => {
          const reverse = i % 2 === 1;
          return (
            <div key={section.heading} className="svc-zigzag-sec">
              <Reveal
                className={`svc-zigzag-row${reverse ? " reverse" : ""}`}
                from={reverse ? "right" : "left"}
                delay={`${Math.min(i * 70, 280)}ms`}
              >
                <span className="svc-zigzag-node">{i + 1}</span>
                <div className="svc-zigzag-media">
                  <Image
                    src={section.image}
                    alt=""
                    fill
                    sizes="(max-width:900px) 100vw, 48vw"
                    className="svc-zigzag-img"
                  />
                </div>
                <div className="svc-zigzag-copy">
                  <h3>{section.heading}</h3>
                  {section.paragraphs.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                  {section.bullets?.length ? (
                    <ul>
                      {section.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </Reveal>
            </div>
          );
        })}
      </div>
    </div>
  );
}
