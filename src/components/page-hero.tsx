"use client";

import { useEffect, useRef, type ReactNode } from "react";
import Image from "next/image";
import { SpotSurface } from "@/components/interactions";

export function PageHero({
  title,
  subtitle,
  imageSrc,
  videoSrc,
  sideImage,
  actions,
  align = "left",
}: {
  title: string;
  subtitle?: string;
  imageSrc?: string;
  videoSrc?: string;
  sideImage?: string;
  actions?: ReactNode;
  align?: "left" | "center";
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasBg = Boolean(imageSrc || videoSrc);
  const hasSide = Boolean(sideImage);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !videoSrc) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
      return;
    }
    const play = () => {
      void video.play().catch(() => {});
    };
    play();
    const onVis = () => {
      if (document.hidden) video.pause();
      else play();
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, [videoSrc]);

  const copy = (
    <>
      <h1 className="enter page-enter">{title}</h1>
      {subtitle ? (
        <p className="enter e2 page-enter">{subtitle}</p>
      ) : null}
      {actions ? (
        <div className="btns phero-actions enter e3 page-enter">{actions}</div>
      ) : null}
    </>
  );

  return (
    <SpotSurface
      className={`dk phero${hasBg ? " phero-media" : ""}${hasSide ? " phero-split" : ""}`}
    >
      {hasBg ? (
        <div className="phero-bg" aria-hidden="true">
          {videoSrc ? (
            <video
              ref={videoRef}
              className="phero-bg-video"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={imageSrc}
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          ) : null}
          {imageSrc && !videoSrc ? (
            <Image
              src={imageSrc}
              alt=""
              fill
              priority
              sizes="100vw"
              className="phero-bg-img"
            />
          ) : null}
        </div>
      ) : null}
      <div className="orbw" aria-hidden="true">
        <div className="orb o1" />
        <div className="orb o2" />
      </div>
      {hasSide ? (
        <div className="w phero-layout">
          <div
            className={`phero-in${align === "center" ? " center" : ""}`}
          >
            {copy}
          </div>
          <div className="phero-side enter e2 page-enter">
            <Image
              src={sideImage!}
              alt=""
              fill
              priority
              sizes="(max-width:900px) 100vw, 48vw"
              className="phero-side-img"
            />
          </div>
        </div>
      ) : (
        <div className={`w phero-in${align === "center" ? " center" : ""}`}>
          {copy}
        </div>
      )}
    </SpotSurface>
  );
}
