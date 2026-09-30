"use client";

import { useEffect, useRef } from "react";
import { MagButton, SpotSurface } from "@/components/interactions";
import { Icon } from "@/components/icons";
import { EsRunners } from "@/components/home/es-runners";
import Link from "next/link";
import { heroWords, site } from "@/data/site";

function Typewriter() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = "accounting and design";
      return;
    }

    let wi = 0;
    let ci = 0;
    let del = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const w = heroWords[wi];
      let t = 85;
      el.textContent = w.slice(0, ci);
      if (!del && ci < w.length) ci++;
      else if (!del) {
        del = true;
        t = 1500;
      } else if (ci > 0) {
        ci--;
        t = 40;
      } else {
        del = false;
        wi = (wi + 1) % heroWords.length;
        t = 320;
      }
      timer = setTimeout(tick, t);
    };

    timer = setTimeout(tick, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <span className="rotline">
      <span className="grad" ref={ref}>
        accounting
      </span>
      <span className="caret" />
    </span>
  );
}

function ParticleNet() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;
    const parent = cv.parentElement;
    if (!parent) return;

    const RM = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let W = 0;
    let H = 0;
    let P: { x: number; y: number; vx: number; vy: number; g: boolean; r: number }[] = [];
    const m = { x: -999, y: -999 };
    let vis = true;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let raf = 0;

    const size = () => {
      const r = parent.getBoundingClientRect();
      W = r.width;
      H = r.height;
      if (!W) return;
      cv.width = W * dpr;
      cv.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.min(95, Math.floor((W * H) / 15000));
      P = [];
      for (let i = 0; i < n; i++) {
        P.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          g: Math.random() < 0.13,
          r: Math.random() * 1.6 + 1,
        });
      }
      if (RM) draw();
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < P.length; i++) {
        const p = P[i];
        if (!RM) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > W) p.vx *= -1;
          if (p.y < 0 || p.y > H) p.vy *= -1;
          const dx = m.x - p.x;
          const dy = m.y - p.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 160 && d > 1) {
            p.x += (dx / d) * 0.6;
            p.y += (dy / d) * 0.6;
          }
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.g ? "rgba(243,215,122,.95)" : "rgba(160,190,245,.8)";
        ctx.fill();
        for (let j = i + 1; j < P.length; j++) {
          const q = P[j];
          const ex = p.x - q.x;
          const ey = p.y - q.y;
          const e = ex * ex + ey * ey;
          if (e < 14400) {
            ctx.strokeStyle = `rgba(127,161,230,${0.34 * (1 - Math.sqrt(e) / 120)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
        const mx = m.x - p.x;
        const my = m.y - p.y;
        const md = Math.sqrt(mx * mx + my * my);
        if (md < 160) {
          ctx.strokeStyle = `rgba(243,215,122,${0.5 * (1 - md / 160)})`;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(m.x, m.y);
          ctx.stroke();
        }
      }
    };

    const loop = () => {
      if (vis && W && !document.hidden && !RM) draw();
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e: MouseEvent) => {
      const r = parent.getBoundingClientRect();
      m.x = e.clientX - r.left;
      m.y = e.clientY - r.top;
    };
    const onLeave = () => {
      m.x = -999;
      m.y = -999;
    };

    parent.addEventListener("mousemove", onMove);
    parent.addEventListener("mouseleave", onLeave);
    const ro = new ResizeObserver(size);
    ro.observe(parent);
    const io = new IntersectionObserver((es) => {
      vis = es[0]?.isIntersecting ?? false;
    });
    io.observe(parent);
    size();
    loop();

    return () => {
      cancelAnimationFrame(raf);
      parent.removeEventListener("mousemove", onMove);
      parent.removeEventListener("mouseleave", onLeave);
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  return <canvas className="net" ref={canvasRef} aria-hidden="true" />;
}

export function HomeHero() {
  return (
    <SpotSurface className="dk hero" id="hero">
      <div className="orbw" aria-hidden="true">
        <div className="orb o1" />
        <div className="orb o2" />
        <div className="orb o3" />
      </div>
      <ParticleNet />
      <div className="w hero-in">
        <div>
          <h1 className="enter e1">
            Your business, powered by <Typewriter />
          </h1>
          <p className="lead enter e2">{site.tagline}</p>
          <div className="btns enter e3">
            <MagButton>
              <Link className="btn gold mag" href="/contact">
                Book a free consultation
              </Link>
            </MagButton>
            <MagButton>
              <Link className="btn ghost mag" href="/portfolio">
                See our work
              </Link>
            </MagButton>
          </div>
        </div>
        <div className="vis enter e4" aria-hidden="true">
          <div className="vis-geo">
            <svg viewBox="0 0 400 400">
              <g fill="none">
                <path
                  className="d a"
                  d="M200 20 380 200 200 380 20 200Z"
                  stroke="#395DA0"
                  strokeWidth="2"
                />
                <path
                  className="d b"
                  d="M200 70 330 200 200 330 70 200Z"
                  stroke="#7FA1E6"
                  strokeWidth="2"
                />
                <path
                  className="d a"
                  d="M200 120 280 200 200 280 120 200Z"
                  stroke="#fff"
                  strokeWidth="2"
                  opacity=".85"
                />
                <path d="M200 165 235 200 200 235 165 200Z" fill="#C9A227" />
              </g>
            </svg>
            <div className="chip c1">
              <Icon name="calc" />
              Bookkeeping
            </div>
            <div className="chip c2">
              <Icon name="web" />
              Websites
            </div>
            <div className="chip c3">
              <Icon name="seo" />
              SEO
            </div>
          </div>
          <EsRunners />
        </div>
      </div>
      <div className="scrollcue" aria-hidden="true" />
    </SpotSurface>
  );
}
