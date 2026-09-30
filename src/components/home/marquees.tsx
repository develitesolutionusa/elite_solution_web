"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { portfolio } from "@/data/portfolio";
import { services } from "@/data/services";

export function RibbonMarquee() {
  const items = [...services, ...services, ...services, ...services];

  return (
    <div className="ribbon" aria-hidden="true">
      <div className="mq">
        {items.map((s, i) => (
          <span key={`${s.name}-${i}`} className="ribbon-item">
            <span className="ribbon-ic">
              <Icon name={s.icon} />
            </span>
            {s.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export function LogoMarquee() {
  const logos = [...portfolio, ...portfolio, ...portfolio, ...portfolio];

  return (
    <div className="sec">
      <div className="w brands-head">
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
      <div className="w brands-more">
        <Link className="more" href="/portfolio">
          View the full portfolio
        </Link>
      </div>
    </div>
  );
}
