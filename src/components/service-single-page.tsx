import Link from "next/link";
import { Icon } from "@/components/icons";
import { MagButton, TiltCard } from "@/components/interactions";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import {
  getServicesByGroup,
  serviceHref,
  type Service,
  type ServiceGroupMeta,
} from "@/data/services";

export function ServiceSinglePage({
  group,
  service,
}: {
  group: ServiceGroupMeta;
  service: Service;
}) {
  const related = getServicesByGroup(group.id).filter(
    (s) => s.slug !== service.slug,
  );

  return (
    <>
      <PageHero
        title={service.name}
        subtitle={service.summary}
        imageSrc={service.image}
      />

      <div className="sec">
        <div className="w svc-single">
          <div className="svc-single-main">
            <Reveal className="svc-single-crumb">
              <Link href="/services">Services</Link>
              <span aria-hidden="true">/</span>
              <Link href={`/services/${group.slug}`}>{group.shortName}</Link>
              <span aria-hidden="true">/</span>
              <span>{service.name}</span>
            </Reveal>

            <Reveal className="svc-detail-card svc-single-card">
              <div className="svc-detail-card-top">
                <div className="ic">
                  <Icon name={service.icon} />
                </div>
                <div>
                  <p className="svc-single-group">{group.name}</p>
                  <h2>{service.name}</h2>
                  <p className="svc-detail-summary">{service.summary}</p>
                </div>
              </div>
              <div className="svc-detail-cols">
                <div>
                  <h4>Includes</h4>
                  <ul>
                    {service.includes.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>You get</h4>
                  <ul>
                    {service.outcomes.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal className="btns" style={{ marginTop: 28 }}>
              <MagButton>
                <Link className="btn gold mag" href="/contact">
                  Book a free consultation
                </Link>
              </MagButton>
              <MagButton>
                <Link className="btn blue mag" href={`/services/${group.slug}`}>
                  All {group.shortName.toLowerCase()} services
                </Link>
              </MagButton>
            </Reveal>
          </div>

          <Reveal>
            <TiltCard className="cred svc-ideal">
              <h3>About this service</h3>
              <p className="svc-single-blurb">{service.description}</p>
              <Link className="svc-single-back" href={`/services/${group.slug}`}>
                Back to {group.shortName.toLowerCase()}
              </Link>
            </TiltCard>
          </Reveal>
        </div>
      </div>

      {related.length > 0 ? (
        <div className="sec alt">
          <div className="w">
            <Reveal as="h2">Related {group.shortName.toLowerCase()} services</Reveal>
            <Reveal as="p" className="sub">
              Add more from the same team when you are ready.
            </Reveal>
            <div className="svc-related">
              {related.map((item, i) => (
                <Reveal key={item.slug} delay={`${i * 60}ms`}>
                  <Link className="svc-related-card" href={serviceHref(item)}>
                    <div>
                      <strong>{item.name}</strong>
                      <p>{item.description}</p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
