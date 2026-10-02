"use client";

import { useEffect, useId, useRef } from "react";
import type { ServiceDetailStep } from "@/data/service-details";

export function ServiceSteps({ steps }: { steps: ServiceDetailStep[] }) {
  const trackRef = useRef<HTMLOListElement>(null);
  const gradId = useId().replace(/:/g, "");

  useEffect(() => {
    const track = trackRef.current;
    if (!track || steps.length < 2) return;

    const base = track.querySelector<SVGPathElement>(".svc-pro-steps-base");
    const fill = track.querySelector<SVGPathElement>(".svc-pro-steps-fill");
    const svg = track.querySelector<SVGSVGElement>(".svc-pro-steps-line");
    const grad = track.querySelector<SVGLinearGradientElement>(
      `#steps-grad-${gradId}`,
    );

    const circlesOf = () =>
      Array.from(
        track.querySelectorAll<HTMLElement>(".svc-pro-step-circle"),
      );

    const setProgress = (p: number) => {
      const clamped = Math.max(0, Math.min(1, p));
      track.style.setProperty("--p", String(clamped));
      if (fill) {
        // pathLength=1 → draw left→right from start to end
        fill.style.strokeDasharray = "1";
        fill.style.strokeDashoffset = String(1 - clamped);
      }
      circlesOf().forEach((circle, i) => {
        const t = i / Math.max(1, circlesOf().length - 1);
        circle.classList.toggle("on", clamped >= t - 0.001);
      });
    };

    const layout = () => {
      const circles = circlesOf();
      if (!base || !fill || !svg || circles.length === 0) return;

      const trackRect = track.getBoundingClientRect();
      const w = Math.max(1, track.clientWidth);
      const h = Math.max(1, track.clientHeight);
      svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
      svg.style.width = `${w}px`;
      svg.style.height = `${h}px`;

      // Always connect left → right (or top → bottom on stacked mobile)
      const points = circles
        .map((el) => {
          const r = el.getBoundingClientRect();
          return {
            x: r.left - trackRect.left + r.width / 2,
            y: r.top - trackRect.top + r.height / 2,
          };
        })
        .sort((a, b) =>
          Math.abs(a.x - b.x) >= Math.abs(a.y - b.y) ? a.x - b.x : a.y - b.y,
        );

      let d = `M ${points[0].x} ${points[0].y}`;
      for (let i = 1; i < points.length; i++) {
        d += ` L ${points[i].x} ${points[i].y}`;
      }

      base.setAttribute("d", d);
      fill.setAttribute("d", d);
      fill.setAttribute("pathLength", "1");
      base.setAttribute("pathLength", "1");

      if (grad) {
        grad.setAttribute("gradientUnits", "userSpaceOnUse");
        grad.setAttribute("x1", String(points[0].x));
        grad.setAttribute("y1", String(points[0].y));
        grad.setAttribute(
          "x2",
          String(points[points.length - 1].x),
        );
        grad.setAttribute(
          "y2",
          String(points[points.length - 1].y),
        );
      }

      setProgress(Number(track.style.getPropertyValue("--p") || 0));
    };

    const onScroll = () => {
      layout();
      const rect = track.getBoundingClientRect();
      const viewH = window.innerHeight;
      // Fill left→right as the steps row scrolls through the viewport
      const start = viewH * 0.85;
      const end = viewH * 0.28;
      const p = (start - rect.top) / Math.max(1, start - end);
      setProgress(p);
    };

    const ro = new ResizeObserver(onScroll);
    ro.observe(track);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();

    return () => {
      ro.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [steps.length, gradId]);

  return (
    <ol className="svc-pro-steps" ref={trackRef}>
      <svg className="svc-pro-steps-line" aria-hidden="true">
        <defs>
          <linearGradient id={`steps-grad-${gradId}`}>
            <stop offset="0%" stopColor="#7FA1E6" />
            <stop offset="50%" stopColor="#C9A227" />
            <stop offset="100%" stopColor="#F3D77A" />
          </linearGradient>
        </defs>
        <path className="svc-pro-steps-base" fill="none" />
        <path
          className="svc-pro-steps-fill"
          fill="none"
          stroke={`url(#steps-grad-${gradId})`}
        />
      </svg>
      {steps.map((step, si) => (
        <li key={step.title} className="svc-pro-step">
          <span className="svc-pro-step-circle" aria-hidden="true">
            {si + 1}
          </span>
          <strong>{step.title}</strong>
          <p>{step.body}</p>
        </li>
      ))}
    </ol>
  );
}
