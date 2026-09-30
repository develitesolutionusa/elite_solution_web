import { SpotSurface } from "@/components/interactions";

export function PageHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <SpotSurface className="dk phero">
      <div className="orbw" aria-hidden="true">
        <div className="orb o1" />
        <div className="orb o2" />
      </div>
      <div className="w">
        <h1 className="enter page-enter">{title}</h1>
        {subtitle ? (
          <p className="enter e2 page-enter">{subtitle}</p>
        ) : null}
      </div>
    </SpotSurface>
  );
}
