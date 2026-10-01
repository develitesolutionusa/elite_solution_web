import Link from "next/link";
import { MagButton, TiltCard } from "@/components/interactions";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { ServiceGrid } from "@/components/service-card";
import {
  getOtherServiceGroup,
  getServicesByGroup,
  type ServiceGroupMeta,
} from "@/data/services";

export function ServiceGroupPage({ group }: { group: ServiceGroupMeta }) {
  const items = getServicesByGroup(group.id);
  const other = getOtherServiceGroup(group.id);

  return (
    <>
      <PageHero title={group.title} subtitle={group.subtitle} />

      <div className="sec">
        <div className="w svc-detail-intro">
          <div>
            <Reveal as="h2">{group.name}</Reveal>
            {group.intro.map((p) => (
              <Reveal as="p" key={p}>
                {p}
              </Reveal>
            ))}
            <Reveal className="btns" style={{ marginTop: 26 }}>
              <MagButton>
                <Link className="btn gold mag" href="/contact">
                  Book a free consultation
                </Link>
              </MagButton>
              <MagButton>
                <Link className="btn blue mag" href={`/services/${other.slug}`}>
                  See {other.shortName.toLowerCase()} services
                </Link>
              </MagButton>
            </Reveal>
          </div>
          <Reveal>
            <TiltCard className="cred svc-ideal">
              <h3>Ideal for</h3>
              <ul>
                {group.idealFor.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </TiltCard>
          </Reveal>
        </div>
      </div>

      <div className="sec alt">
        <div className="w">
          <Reveal as="h2">What&apos;s included</Reveal>
          <Reveal as="p" className="sub">
            Open any service for full details. Each one can stand alone or
            combine with others.
          </Reveal>
          <ServiceGrid items={items} columns={3} />
        </div>
      </div>

      <div className="sec services-cta">
        <div className="w services-cta-in">
          <Reveal as="h2">Ready to get started?</Reveal>
          <Reveal as="p" className="sub">
            Tell us what you need. We reply with a clear plan and a quote.
          </Reveal>
          <Reveal className="btns">
            <MagButton>
              <Link className="btn gold mag" href="/contact">
                Book a free consultation
              </Link>
            </MagButton>
            <MagButton>
              <Link className="btn blue mag" href="/services">
                All services
              </Link>
            </MagButton>
          </Reveal>
        </div>
      </div>
    </>
  );
}
