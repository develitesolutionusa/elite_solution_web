import Image from "next/image";
import Link from "next/link";
import { TiltCard } from "@/components/interactions";
import { Reveal } from "@/components/reveal";
import { serviceHref, type Service } from "@/data/services";

export function ServiceCard({
  service,
  delay,
  showMore = true,
}: {
  service: Service;
  delay?: string;
  showMore?: boolean;
}) {
  return (
    <Reveal as="div" delay={delay} className="svc-card-wrap">
      <TiltCard className={`svc-grid-card${showMore ? "" : " svc-grid-card-plain"}`}>
        <Link className="service-card-link" href={serviceHref(service)}>
          <div className="svc-grid-media">
            <Image
              src={service.image}
              alt=""
              fill
              sizes="(max-width:900px) 100vw, (max-width:1200px) 50vw, 33vw"
              className="svc-grid-img"
            />
          </div>
          <div className="svc-grid-body">
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            {showMore ? (
              <span className="service-card-more">View details</span>
            ) : null}
          </div>
        </Link>
      </TiltCard>
    </Reveal>
  );
}

export function ServiceGrid({
  items,
  columns = 3,
  showMore = true,
}: {
  items: Service[];
  columns?: 2 | 3 | 4;
  showMore?: boolean;
}) {
  const colClass =
    columns === 2 ? " c2" : columns === 4 ? " c4" : "";

  return (
    <div className={`cards svc-cards${colClass}`}>
      {items.map((service, i) => (
        <ServiceCard
          key={service.slug}
          service={service}
          delay={`${i * 70}ms`}
          showMore={showMore}
        />
      ))}
    </div>
  );
}
