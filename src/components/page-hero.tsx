"use client";

import { useEffect, useRef, type ReactNode } from "react";
import Image from "next/image";
import { SpotSurface } from "@/components/interactions";

export function PageHero({
  title,
  subtitle,
  imageSrc,
  videoSrc,
  actions,
  align = "left",
}: {
  title: string;
  subtitle?: string;
  imageSrc?: string;
  videoSrc?: string;
  actions?: ReactNode;
  align?: "left" | "center";
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasMedia = Boolean(imageSrc || videoSrc);

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

  return (
    <SpotSurface className={`dk phero${hasMedia ? " phero-media" : ""}`}>
      {hasMedia ? (
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
      <div className={`w phero-in${align === "center" ? " center" : ""}`}>
        <h1 className="enter page-enter">{title}</h1>
        {subtitle ? (
          <p className="enter e2 page-enter">{subtitle}</p>
        ) : null}
        {actions ? (
          <div className="btns phero-actions enter e3 page-enter">{actions}</div>
        ) : null}
      </div>
    </SpotSurface>
  );
}
