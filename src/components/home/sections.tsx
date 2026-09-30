"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/reveal";
import { ServiceGrid } from "@/components/service-card";
import { financialServices, nonFinancialServices } from "@/data/services";
import { stats } from "@/data/site";

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="stats" ref={ref}>
      <div className="w">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={`${i * 0.12}s`} className="st">
            <div className="n">
              <CountUp to={s.value} active={started} />
            </div>
            <p>{s.label}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function CountUp({ to, active }: { to: number; active: boolean }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(to);
      return;
    }
    const start = performance.now();
    const dur = 1200;
    let raf = 0;
    const frame = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [active, to]);
  return <span>{n}</span>;
}

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

  const items = group === "fin" ? financialServices : nonFinancialServices;

  return (
    <div className="sec">
      <div className="w">
        <Reveal as="h2">What we do</Reveal>
        <Reveal as="p" className="sub">
          Two service groups, one team. Use them together or separately.
        </Reveal>
        <Reveal>
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
        </Reveal>
        <ServiceGrid items={items} columns={group === "fin" ? 4 : 3} />
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
        Math.min(1, (window.innerHeight * 0.7 - r.top) / r.height),
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
        <div className="stick">
          <Reveal as="h2">How it works</Reveal>
          <Reveal as="p" className="sub" style={{ margin: 0 }}>
            A simple start, with no obligation.
          </Reveal>
        </div>
        <div className="tl" id="tl" ref={tlRef}>
          <div className="tl-line">
            <i />
          </div>
          <div className="tl-step" data-t=".05">
            <span className="dot" />
            <h3>Tell us what you need</h3>
            <p>
              Send a message or call. Describe your business and what you want
              done.
            </p>
          </div>
          <div className="tl-step" data-t=".45">
            <span className="dot" />
            <h3>Get a plan and a quote</h3>
            <p>We reply with the scope, the timeline and the price.</p>
          </div>
          <div className="tl-step" data-t=".85">
            <span className="dot" />
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
