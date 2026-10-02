"use client";

import { useId } from "react";
import type { ServiceDetailFeature, ServiceFeatureIcon } from "@/data/service-details";

function FeatureIcon({ name }: { name: ServiceFeatureIcon }) {
  const uid = useId().replace(/:/g, "");
  const gradId = `svc-fg-${name}-${uid}`;
  const stroke = `url(#${gradId})`;

  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke,
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
    className: "svc-pro-feature-svg",
  };

  const defs = (
    <defs>
      <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#38BDF8" />
        <stop offset="55%" stopColor="#818CF8" />
        <stop offset="100%" stopColor="#A78BFA" />
      </linearGradient>
    </defs>
  );

  switch (name) {
    case "frontend":
      return (
        <svg {...common}>
          {defs}
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case "backend":
      return (
        <svg {...common}>
          {defs}
          <rect x="2" y="3" width="20" height="5" rx="1.5" />
          <rect x="2" y="10" width="20" height="5" rx="1.5" />
          <rect x="2" y="17" width="20" height="4" rx="1.5" />
          <circle cx="6" cy="5.5" r="0.8" fill={stroke} stroke="none" />
          <circle cx="6" cy="12.5" r="0.8" fill={stroke} stroke="none" />
        </svg>
      );
    case "database":
      return (
        <svg {...common}>
          {defs}
          <ellipse cx="12" cy="5" rx="8" ry="3" />
          <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
          <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
        </svg>
      );
    case "fullstack":
      return (
        <svg {...common}>
          {defs}
          <path d="M18 10h-1.3A8 8 0 1 0 20 16h0" />
          <path d="M22 10h-6v6" />
        </svg>
      );
    case "webapp":
      return (
        <svg {...common}>
          {defs}
          <rect x="7" y="2" width="10" height="20" rx="2" />
          <path d="M11 18h2" />
        </svg>
      );
    case "ecommerce":
      return (
        <svg {...common}>
          {defs}
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
        </svg>
      );
    case "api":
      return (
        <svg {...common}>
          {defs}
          <path d="M12 3l2.2 6.6L21 12l-6.8 2.4L12 21l-2.2-6.6L3 12l6.8-2.4L12 3z" />
        </svg>
      );
    case "deploy":
      return (
        <svg {...common}>
          {defs}
          <path d="M17.5 19a4.5 4.5 0 0 0 .5-9 7 7 0 0 0-13.5 2A4 4 0 0 0 6 19z" />
        </svg>
      );
    default:
      return null;
  }
}

export function ServiceFeatureGrid({
  features,
}: {
  features: ServiceDetailFeature[];
}) {
  return (
    <ul className="svc-pro-features">
      {features.map((item) => (
        <li key={item.title} className="svc-pro-feature">
          <span className={`svc-pro-feature-icon tone-${item.icon}`} aria-hidden="true">
            <FeatureIcon name={item.icon} />
          </span>
          <strong>{item.title}</strong>
          <p>{item.body}</p>
        </li>
      ))}
    </ul>
  );
}
