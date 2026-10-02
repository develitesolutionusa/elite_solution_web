import Link from "next/link";
import type {
  ServiceProcessIcon,
  ServiceProcessStep,
} from "@/data/service-details";

function ProcessIcon({ name }: { name: ServiceProcessIcon }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "discuss":
      return (
        <svg {...common}>
          <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5z" />
        </svg>
      );
    case "design":
      return (
        <svg {...common}>
          <path d="M15 4V2" />
          <path d="M15 16v-2" />
          <path d="M8 9h2" />
          <path d="M20 9h2" />
          <path d="m17.8 11.8 1.4 1.4" />
          <path d="m8.8 6.8 1.4 1.4" />
          <path d="m17.8 6.2-1.4 1.4" />
          <path d="m12 12 7-7" />
          <path d="M5 19l4.2-1.2a2 2 0 0 0 .9-.5L17 10a2.1 2.1 0 0 0-3-3l-7.3 7a2 2 0 0 0-.5.9L5 19z" />
        </svg>
      );
    case "develop":
      return (
        <svg {...common}>
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case "launch":
      return (
        <svg {...common}>
          <path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2 0-2.8a2 2 0 0 0-2.8 0z" />
          <path d="m12 15-3-3a22 22 0 0 1 2-3.9A12.8 12.8 0 0 1 22 2c0 2.7-.8 5.4-2.3 7.6a22 22 0 0 1-3.9 2.1z" />
          <path d="M9 12H4s.5-3 2-5c1.7 0 3 .5 3 .5" />
          <path d="M12 15v5s3-.5 5-2c0-1.7-.5-3-.5-3" />
        </svg>
      );
    default:
      return null;
  }
}

export function ServiceProcess({
  eyebrow,
  heading,
  lead,
  ctaLabel,
  ctaHref,
  steps,
}: {
  eyebrow?: string;
  heading: string;
  lead: string;
  ctaLabel?: string;
  ctaHref?: string;
  steps: ServiceProcessStep[];
}) {
  return (
    <div className="svc-pro-process">
      <div className="svc-pro-process-copy">
        {eyebrow ? <p className="svc-pro-section-eyebrow">{eyebrow}</p> : null}
        <h3>{heading}</h3>
        <p>{lead}</p>
        {ctaLabel && ctaHref ? (
          <Link className="svc-pro-process-cta" href={ctaHref}>
            {ctaLabel}
            <span aria-hidden="true">→</span>
          </Link>
        ) : null}
      </div>
      <ol className="svc-pro-process-track">
        {steps.map((step, i) => (
          <li key={step.title} className="svc-pro-process-card">
            <span className="svc-pro-process-num" aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="svc-pro-process-icon" aria-hidden="true">
              <ProcessIcon name={step.icon} />
            </span>
            <strong>{step.title}</strong>
            <p>{step.body}</p>
            {i < steps.length - 1 ? (
              <span className="svc-pro-process-arrow" aria-hidden="true">
                →
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}
