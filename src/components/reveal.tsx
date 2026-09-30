"use client";

import {
  useEffect,
  useRef,
  type CSSProperties,
  type ReactNode,
} from "react";

export function Reveal({
  children,
  className = "",
  delay,
  style,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: string;
  style?: CSSProperties;
  as?: "div" | "article" | "aside" | "li" | "p" | "h2" | "h3";
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      el.classList.add("in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const merged: CSSProperties = {
    ...style,
    ...(delay ? ({ "--d": delay } as CSSProperties) : null),
  };

  return (
    <Tag
      ref={ref as never}
      className={`rv ${className}`.trim()}
      style={Object.keys(merged).length ? merged : undefined}
    >
      {children}
    </Tag>
  );
}
