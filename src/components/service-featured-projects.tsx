import Image from "next/image";
import Link from "next/link";
import type { ServiceFeaturedProject } from "@/data/service-details";

export function ServiceFeaturedProjects({
  heading,
  lead,
  ctaLabel,
  ctaHref,
  projects,
}: {
  heading: string;
  lead: string;
  ctaLabel?: string;
  ctaHref?: string;
  projects: ServiceFeaturedProject[];
}) {
  return (
    <div className="svc-pro-projects">
      <div className="svc-pro-projects-head">
        <h3>{heading}</h3>
        {lead ? <p className="svc-pro-projects-lead">{lead}</p> : null}
      </div>
      <ul className="svc-pro-projects-grid">
        {projects.map((project) => {
          const liveHref = project.liveHref ?? project.href;
          const liveExternal = /^https?:\/\//.test(liveHref);

          return (
            <li key={project.title} className="svc-pro-project">
              <article className="svc-pro-project-card">
                <div className="svc-pro-project-media">
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    sizes="(max-width:900px) 90vw, 25vw"
                    className="svc-pro-project-img"
                  />
                  <div className="svc-pro-project-live-wrap">
                    {liveExternal ? (
                      <a
                        className="svc-pro-project-live"
                        href={liveHref}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live
                        <span aria-hidden="true">↗</span>
                      </a>
                    ) : (
                      <Link className="svc-pro-project-live" href={liveHref}>
                        Live
                        <span aria-hidden="true">↗</span>
                      </Link>
                    )}
                  </div>
                </div>
                <div className="svc-pro-project-body">
                  <strong>{project.title}</strong>
                  <p>{project.description}</p>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
      {ctaLabel && ctaHref ? (
        <div className="svc-pro-projects-foot">
          <Link className="svc-pro-projects-all" href={ctaHref}>
            {ctaLabel}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      ) : null}
    </div>
  );
}
