"use client";

import Image from "next/image";
import Link from "next/link";
import { MagButton, SpotSurface } from "@/components/interactions";

type HeroCta = {
  label: string;
  href: string;
  variant?: "gold" | "ghost" | "blue";
  play?: boolean;
  arrow?: boolean;
};

export function ServiceDetailHero({
  title,
  subtitle,
  imageSrc,
  groupLabel,
  groupHref,
  primaryCta,
  secondaryCta,
}: {
  title: string;
  subtitle: string;
  imageSrc?: string;
  groupLabel: string;
  groupHref: string;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
}) {
  const primary = primaryCta ?? {
    label: "Book a Free Consultation",
    href: "/contact",
    variant: "gold" as const,
  };
  const secondary = secondaryCta ?? {
    label: `All ${groupLabel} Services`,
    href: groupHref,
    variant: "blue" as const,
  };

  return (
    <SpotSurface className="dk svc-detail-hero">
      {imageSrc ? (
        <div className="svc-detail-hero-bg" aria-hidden="true">
          <Image
            src={imageSrc}
            alt=""
            fill
            priority
            quality={90}
            sizes="100vw"
            className="svc-detail-hero-bg-img"
          />
        </div>
      ) : null}
      <div className="svc-detail-hero-glow" aria-hidden="true" />
      <div className="orbw" aria-hidden="true">
        <div className="orb o1" />
        <div className="orb o2" />
      </div>

      <div className="w svc-detail-hero-layout">
        <div className="svc-detail-hero-copy">
          <p className="svc-detail-hero-eyebrow enter page-enter">
            {groupLabel} Services
          </p>
          <h1 className="enter e2 page-enter">{title}</h1>
          <p className="svc-detail-hero-lead enter e3 page-enter">{subtitle}</p>
          <div className="btns svc-detail-hero-actions enter e4 page-enter">
            <MagButton>
              <Link
                className={`btn ${primary.variant ?? "gold"} mag`}
                href={primary.href}
              >
                {primary.label}
                {primary.arrow ? (
                  <span aria-hidden="true"> →</span>
                ) : null}
              </Link>
            </MagButton>
            <MagButton>
              <Link
                className={`btn ${secondary.variant ?? "blue"} mag${secondary.play || secondary.variant === "ghost" ? " svc-detail-hero-ghost" : ""}`}
                href={secondary.href}
              >
                {secondary.play ? (
                  <span className="svc-detail-hero-play" aria-hidden="true">
                    ▶
                  </span>
                ) : null}
                {secondary.label}
              </Link>
            </MagButton>
          </div>
        </div>
      </div>
    </SpotSurface>
  );
}
