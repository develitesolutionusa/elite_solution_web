"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MagButton } from "@/components/interactions";
import { Reveal } from "@/components/reveal";
import { ServiceGrid } from "@/components/service-card";
import { financialServices, nonFinancialServices } from "@/data/services";

export function ServiceTabs() {
  const [group, setGroup] = useState<"fin" | "non">("fin");
  const indRef = useRef<HTMLSpanElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tabs = tabsRef.current;
    const ind = indRef.current;
    if (!tabs || !ind) return;
    const active = tabs.querySelector<HTMLButtonElement>(
      '[aria-selected="true"]',
    );
    if (!active) return;
    ind.style.width = `${active.offsetWidth}px`;
    ind.style.transform = `translateX(${active.offsetLeft}px)`;
  }, [group]);

  const items =
    group === "fin"
      ? financialServices.filter(
          (s) => s.slug !== "cfo-services" && s.slug !== "audit-and-review",
        )
      : nonFinancialServices.filter(
          (s) =>
            s.slug !== "seo-services" &&
            s.slug !== "email-marketing" &&
            s.slug !== "help-line-services",
        );

  return (
    <div className="sec what-do-sec">
      <div className="w what-do">
        <Reveal as="h2" className="what-do-title">
          What we do
        </Reveal>
        <Reveal as="p" className="sub">
          Two service groups, one team. Use them together or separately.
        </Reveal>
        <div className="tabs-wrap">
          <div className="tabs" role="tablist" ref={tabsRef}>
            <span className="ind" ref={indRef} />
            <button
              type="button"
              role="tab"
              aria-selected={group === "fin"}
              onClick={() => setGroup("fin")}
            >
              Financial
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={group === "non"}
              onClick={() => setGroup("non")}
            >
              Non-financial
            </button>
          </div>
        </div>
        <ServiceGrid items={items} columns={3} />
        <Reveal className="what-do-more">
          <MagButton>
            <Link
              className="btn gold mag more"
              href={
                group === "fin"
                  ? "/services#financial"
                  : "/services#non-financial"
              }
            >
              {group === "fin"
                ? "View Financial Services"
                : "View Non-financial Services"}
            </Link>
          </MagButton>
        </Reveal>
      </div>
    </div>
  );
}

export function ProcessTimeline() {
  const tlRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = tlRef.current;
    if (!tl) return;
    const steps = Array.from(tl.querySelectorAll<HTMLElement>(".tl-step"));

    const onScroll = () => {
      const r = tl.getBoundingClientRect();
      const p = Math.max(
        0,
        Math.min(1, (window.innerHeight * 0.75 - r.top) / (r.height * 0.9)),
      );
      tl.style.setProperty("--p", String(p));
      steps.forEach((s) => {
        const t = Number(s.dataset.t ?? 0);
        s.classList.toggle("on", p >= t);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="sec alt">
      <div className="w how">
        <div className="how-head">
          <Reveal as="h2">How it works</Reveal>
          <Reveal as="p" className="sub">
            A simple start, with no obligation.
          </Reveal>
        </div>
        <div className="tl" id="tl" ref={tlRef}>
          <div className="tl-line">
            <i />
          </div>
          <div className="tl-step" data-t=".05">
            <span className="step-badge">Step 1</span>
            <h3>Tell us what you need</h3>
            <p>
              Send a message or call. Describe your business and what you want
              done.
            </p>
          </div>
          <div className="tl-step" data-t=".4">
            <span className="step-badge">Step 2</span>
            <h3>Get a plan and a quote</h3>
            <p>We reply with the scope, the timeline and the price.</p>
          </div>
          <div className="tl-step" data-t=".75">
            <span className="step-badge">Step 3</span>
            <h3>We deliver and support</h3>
            <p>
              Your work is completed and we stay available for changes and
              questions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
