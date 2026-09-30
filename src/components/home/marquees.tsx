"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { portfolio } from "@/data/portfolio";
import { services } from "@/data/services";

export function RibbonMarquee() {
  const names = services.map((s) => s.name);
  const content = [...names, ...names, ...names, ...names];

  return (
    <div className="ribbon" aria-hidden="true">
      <div className="mq">
        {content.map((n, i) => (
          <span key={`${n}-${i}`}>{n}</span>
        ))}
      </div>
    </div>
  );
}

export function LogoMarquee() {
  const logos = [...portfolio, ...portfolio, ...portfolio, ...portfolio];

  return (
    <div className="sec">
      <div className="w">
        <Reveal as="h2">Brands we have designed</Reveal>
        <Reveal as="p" className="sub">
          Recent logo work. Hover to pause, open the portfolio to see more.
        </Reveal>
      </div>
      <div className="logos">
        <div className="mq">
          {logos.map((l, i) => (
            <Link
              key={`${l.name}-${i}`}
              className={`lt ${l.fit}`}
              href="/portfolio"
              style={{ background: l.bg }}
              tabIndex={-1}
            >
              <Image
                src={l.src}
                alt={l.alt}
                width={230}
                height={230}
                style={{ objectFit: l.fit }}
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="w">
        <Link className="more" href="/portfolio">
          View the full portfolio
        </Link>
      </div>
    </div>
  );
}
