"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";

export function PageLoader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setShow(false);
      return;
    }
    const t = setTimeout(() => setShow(false), 2800);
    return () => clearTimeout(t);
  }, []);

  if (!show) return null;

  return (
    <div className="loader" aria-hidden="true">
      <div className="in">
        <svg viewBox="0 0 40 40">
          <path
            pathLength="1"
            d="M20 3 37 20 20 37 3 20Z"
            stroke="#fff"
          />
          <path
            className="p2"
            pathLength="1"
            d="M20 10 30 20 20 30 10 20Z"
            stroke="#7FA1E6"
          />
          <path
            className="p3"
            pathLength="1"
            d="M20 16 24 20 20 24 16 20Z"
            stroke="#C9A227"
          />
        </svg>
        <b>{site.name}</b>
      </div>
    </div>
  );
}
