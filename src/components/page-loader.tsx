"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function PageLoader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setShow(false);
      return;
    }
    const t = setTimeout(() => setShow(false), 3000);
    return () => clearTimeout(t);
  }, []);

  if (!show) return null;

  return (
    <div className="loader" aria-hidden="true">
      <div className="loader-in">
        <div className="loader-mark">
          <span className="loader-glow" />
          <div className="loader-plate">
            <Image
              src="/images/elite-logo.png"
              alt=""
              width={839}
              height={288}
              priority
              className="loader-logo"
            />
          </div>
        </div>
        <span className="loader-line" />
      </div>
    </div>
  );
}
