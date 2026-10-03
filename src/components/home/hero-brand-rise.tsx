"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

function Runner({ accent = "sky" }: { accent?: "sky" | "gold" }) {
  const stroke = accent === "sky" ? "#7FA1E6" : "#F3D77A";
  const fill = accent === "sky" ? "#9DB8EE" : "#C9A227";

  return (
    <svg className="hbr-runner-svg" viewBox="0 0 40 48" aria-hidden="true">
      <g className="hbr-bob">
        <circle cx="20" cy="7" r="4.5" fill={fill} />
        <rect x="16.5" y="12" width="7" height="12" rx="3.5" fill={stroke} />
        <g className="hbr-arm-b">
          <rect x="18.5" y="13" width="2.4" height="9" rx="1.2" fill={fill} />
        </g>
        <g className="hbr-arm-f">
          <rect x="18.5" y="13" width="2.4" height="9" rx="1.2" fill={stroke} />
        </g>
        <g className="hbr-leg-b">
          <rect x="18.5" y="23" width="2.6" height="11" rx="1.3" fill={fill} />
        </g>
        <g className="hbr-leg-f">
          <rect x="18.5" y="23" width="2.6" height="11" rx="1.3" fill={stroke} />
        </g>
      </g>
    </svg>
  );
}

function EsMark() {
  return (
    <svg className="hbr-mark-svg" viewBox="0 0 120 120" aria-hidden="true">
      <defs>
        <linearGradient id="hbrTop" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5B7FC4" />
          <stop offset="100%" stopColor="#3D6BD1" />
        </linearGradient>
        <linearGradient id="hbrBot" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1A274F" />
          <stop offset="100%" stopColor="#243868" />
        </linearGradient>
      </defs>

      <g className="hbr-mark-top">
        <path
          d="M28 34 L60 16 L92 34 L92 52 L60 40 L28 52 Z"
          fill="url(#hbrTop)"
        />
        <path
          d="M40 38 H68"
          stroke="#fff"
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="68" cy="38" r="2.6" fill="#fff" />
        <path
          d="M40 46 H62"
          stroke="#fff"
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="62" cy="46" r="2.6" fill="#fff" />
      </g>

      <g className="hbr-mark-bot">
        <path
          d="M28 60 L60 48 L92 60 L92 88 L60 104 L28 88 Z"
          fill="url(#hbrBot)"
        />
        <path
          d="M48 68 H78"
          stroke="#fff"
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="78" cy="68" r="2.6" fill="#fff" />
        <path
          d="M42 80 H70"
          stroke="#fff"
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="70" cy="80" r="2.6" fill="#fff" />
      </g>

      <path
        d="M28 56 L60 44 L92 56"
        stroke="rgba(243,215,122,.55)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function HeroBrandRise() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  if (reduced) {
    return (
      <div className="hbr hbr-static" aria-hidden="true">
        <div className="hbr-logo hbr-logo-static">
          <Image
            src="/images/elite-logo.png"
            alt=""
            width={839}
            height={288}
            className="hbr-logo-img"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="hbr" aria-hidden="true">
      <div className="hbr-glow" />

      {/* Stage: two runners climb in */}
      <div className="hbr-climbers">
        <div className="hbr-climber hbr-climber-a">
          <Runner accent="sky" />
        </div>
        <div className="hbr-climber hbr-climber-b">
          <Runner accent="gold" />
        </div>
      </div>

      {/* Stage: ES mark flips */}
      <div className="hbr-flip-stage">
        <div className="hbr-mark hbr-mark-flip">
          <EsMark />
        </div>
      </div>

      {/* Stage: complete logo */}
      <div className="hbr-logo">
        <Image
          src="/images/elite-logo.png"
          alt=""
          width={839}
          height={288}
          className="hbr-logo-img"
          style={{ width: "100%", height: "auto" }}
          priority
        />
      </div>

      <p className="hbr-caption">Elite Solution</p>
    </div>
  );
}
