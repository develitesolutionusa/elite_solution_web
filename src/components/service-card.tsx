import { Icon } from "@/components/icons";
import { TiltCard } from "@/components/interactions";
import { Reveal } from "@/components/reveal";
import type { Service } from "@/data/services";

export function ServiceCard({
  service,
  delay,
}: {
  service: Service;
  delay?: string;
}) {
  return (
    <Reveal as="div" delay={delay}>
      <TiltCard>
        <div className="ic">
          <Icon name={service.icon} />
        </div>
        <h3>{service.name}</h3>
        <p>{service.description}</p>
      </TiltCard>
    </Reveal>
  );
}

export function ServiceGrid({
  items,
  columns = 3,
}: {
  items: Service[];
  columns?: 3 | 4;
}) {
  return (
    <div className={`cards${columns === 4 ? " c4" : ""}`}>
      {items.map((service, i) => (
        <ServiceCard
          key={service.name}
          service={service}
          delay={`${i * 70}ms`}
        />
      ))}
    </div>
  );
}
