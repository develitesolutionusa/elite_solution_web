"use client";

import { useEffect, useState } from "react";

function RunnerFigure({ accent }: { accent: "sky" | "gold" }) {
  const stroke = accent === "sky" ? "#7FA1E6" : "#F3D77A";
  const fill = accent === "sky" ? "#9DB8EE" : "#C9A227";

  return (
    <g className="es-figure">
      <g className="es-bob">
        <circle className="es-head" cx="20" cy="7" r="4.5" fill={fill} />
        <rect
          className="es-torso"
          x="16.5"
          y="12"
          width="7"
          height="12"
          rx="3.5"
          fill={stroke}
        />
        <g className="es-arm es-arm-back">
          <rect
            x="18.5"
            y="13"
            width="2.4"
            height="9"
            rx="1.2"
            fill={fill}
          />
        </g>
        <g className="es-arm es-arm-front">
          <rect
            x="18.5"
            y="13"
            width="2.4"
            height="9"
            rx="1.2"
            fill={stroke}
          />
        </g>
        <g className="es-leg es-leg-back">
          <rect
            x="18.5"
            y="23"
            width="2.6"
            height="11"
            rx="1.3"
            fill={fill}
          />
        </g>
        <g className="es-leg es-leg-front">
          <rect
            x="18.5"
            y="23"
            width="2.6"
            height="11"
            rx="1.3"
            fill={stroke}
          />
        </g>
      </g>
    </g>
  );
}

function LetterE() {
  return (
    <g
      className="es-glyph"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M29 8 H12 V40 H29" stroke="#7FA1E6" strokeWidth="4.2" />
      <path d="M12 24 H25" stroke="#F3D77A" strokeWidth="4.2" />
    </g>
  );
}

function LetterS() {
  return (
    <g
      className="es-glyph"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M29 14 C29 8 12 8 12 16 C12 24 28 22 28 30 C28 40 12 40 12 34"
        stroke="#7FA1E6"
        strokeWidth="4.2"
      />
      <path
        d="M29 14 C29 8 12 8 12 16"
        stroke="#F3D77A"
        strokeWidth="4.2"
        opacity="0.9"
      />
    </g>
  );
}

export function EsRunners() {
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
      <div className="es-track es-track-static" aria-hidden="true">
        <div className="es-pair-static">
          <svg className="es-unit" viewBox="0 0 40 48">
            <LetterE />
          </svg>
          <svg className="es-unit" viewBox="0 0 40 48">
            <LetterS />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div className="es-track" aria-hidden="true">
      <div className="es-actor es-actor-left">
        <svg className="es-unit" viewBox="0 0 40 48">
          <RunnerFigure accent="sky" />
          <LetterE />
        </svg>
      </div>
      <div className="es-actor es-actor-right">
        <svg className="es-unit" viewBox="0 0 40 48">
          <g className="es-face-left">
            <RunnerFigure accent="gold" />
          </g>
          <LetterS />
        </svg>
      </div>
      <div className="es-glow" />
    </div>
  );
}
