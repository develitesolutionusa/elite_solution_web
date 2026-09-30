import type { ReactNode } from "react";
import type { ServiceIcon } from "@/data/services";

const paths: Record<ServiceIcon, ReactNode> = {
  calc: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M8 7h8M8 12h2M12 12h2M8 16h2M12 16h4" />
    </>
  ),
  tax: (
    <>
      <path d="M6 3h9l4 4v14H6z" />
      <path d="M15 3v4h4M9 17l6-6M9.5 11.5h.01M14.5 16.5h.01" />
    </>
  ),
  pay: (
    <>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M6 12h.01M18 12h.01" />
    </>
  ),
  cfo: (
    <>
      <path d="M3 20h18M6 16l4-5 3 3 5-7" />
      <path d="M15 7h3v3" />
    </>
  ),
  web: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M7 6.5h.01M10 6.5h.01" />
    </>
  ),
  gfx: (
    <path d="M12 3l2.8 5.9 6.2.9-4.5 4.4 1.1 6.3L12 17.5 6.4 20.5l1.1-6.3L3 9.8l6.2-.9z" />
  ),
  mkt: (
    <>
      <path d="M4 10v4l10 4V6z" />
      <path d="M14 9a4 4 0 010 6M6 14l1 5h3l-1-4" />
    </>
  ),
  seo: (
    <>
      <circle cx="10.5" cy="10.5" r="6" />
      <path d="M15 15l5 5M8 12l2-2 1.5 1.5L14 9" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  help: (
    <>
      <path d="M4 14v-2a8 8 0 0116 0v2" />
      <rect x="3" y="14" width="4" height="6" rx="1.5" />
      <rect x="17" y="14" width="4" height="6" rx="1.5" />
      <path d="M20 20c0 1.5-2 2-5 2" />
    </>
  ),
};

export function Icon({
  name,
  className,
}: {
  name: ServiceIcon;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}

export function BrandMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className={className}>
      <g fill="none" strokeWidth="2.2">
        <path d="M20 3 37 20 20 37 3 20Z" stroke="#fff" />
        <path d="M20 10 30 20 20 30 10 20Z" stroke="#7FA1E6" />
        <path
          d="M20 16 24 20 20 24 16 20Z"
          stroke="#C9A227"
          fill="#C9A227"
        />
      </g>
    </svg>
  );
}
