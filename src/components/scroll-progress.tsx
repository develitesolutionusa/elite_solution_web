"use client";

import { useEffect } from "react";

export function ScrollProgress() {
  useEffect(() => {
    const prog = document.getElementById("prog");
    const top = document.getElementById("top");
    if (!prog || !top) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let ticking = false;

    const onScroll = () => {
      const y = window.scrollY;
      const h =
        document.documentElement.scrollHeight - window.innerHeight;
      prog.style.transform = `scaleX(${h > 0 ? y / h : 0})`;
      top.classList.toggle("scrolled", y > 40);
      if (!reduced) {
        document.querySelectorAll<HTMLElement>(".orbw").forEach((o) => {
          o.style.setProperty("--py", String(Math.min(y, 900)));
        });
      }
      ticking = false;
    };

    const onScrollRaf = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(onScroll);
      }
    };

    window.addEventListener("scroll", onScrollRaf, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScrollRaf);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return <div className="prog" id="prog" aria-hidden="true" />;
}
