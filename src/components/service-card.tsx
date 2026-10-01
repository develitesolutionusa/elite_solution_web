import Image from "next/image";
import Link from "next/link";
import { TiltCard } from "@/components/interactions";
import { Reveal } from "@/components/reveal";
import { serviceHref, type Service } from "@/data/services";

export function ServiceCard({
  service,
  delay,
}: {
  service: Service;
  delay?: string;
}) {
  return (
    <Reveal as="div" delay={delay} className="svc-card-wrap">
      <TiltCard className="svc-grid-card">
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
            <span className="service-card-more">View details</span>
          </div>
        </Link>
      </TiltCard>
    </Reveal>
  );
}

export function ServiceGrid({
  items,
  columns = 3,
}: {
  items: Service[];
  columns?: 2 | 3 | 4;
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
        />
      ))}
    </div>
  );
}
