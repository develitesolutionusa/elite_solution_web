import Image from "next/image";
import Link from "next/link";
import { MagButton } from "@/components/interactions";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { ServiceZigzag } from "@/components/service-zigzag";
import { getServiceDetail } from "@/data/service-details";
import {
  getServicesByGroup,
  serviceGroupHref,
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
  const detail = getServiceDetail(service.slug);
  const pageBg = detail?.pageBg;
  const related = getServicesByGroup(group.id).filter(
    (s) => s.slug !== service.slug,
  );

  const content = (
    <>
      <PageHero
        title={detail?.pageTitle ?? service.name}
        subtitle={detail?.intro[0] ?? service.summary}
        imageSrc={pageBg ? undefined : service.image}
        align="center"
        actions={
          <>
            <MagButton>
              <Link className="btn gold mag" href="/contact">
                Book a free consultation
              </Link>
            </MagButton>
            <MagButton>
              <Link className="btn blue mag" href={serviceGroupHref(group)}>
                All {group.shortName.toLowerCase()} services
              </Link>
            </MagButton>
          </>
        }
      />

      {detail ? (
        <ServiceZigzag detail={detail} />
      ) : (
        <div className="sec">
          <div className="w svc-single">
            <div className="svc-single-main">
              <Reveal className="svc-detail-card svc-single-card">
                <h2>{service.name}</h2>
                <p className="svc-detail-summary">{service.summary}</p>
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
            </div>
          </div>
        </div>
      )}

      {related.length > 0 ? (
        <div className="sec alt">
          <div className="w">
            <Reveal as="h2">
              Related {group.shortName.toLowerCase()} services
            </Reveal>
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

  if (pageBg) {
    return (
      <div className="svc-page-bg">
        <div className="svc-page-bg-layer" aria-hidden="true">
          <Image
            src={pageBg}
            alt=""
            fill
            priority
            quality={100}
            sizes="100vw"
            className="svc-page-bg-img"
          />
        </div>
        <div className="svc-page-bg-content">{content}</div>
      </div>
    );
  }

  return <div className="svc-detail-page">{content}</div>;
}
