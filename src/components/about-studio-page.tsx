import Image from "next/image";
import Link from "next/link";
import { MagButton } from "@/components/interactions";
import { Reveal } from "@/components/reveal";
import {
  aboutPage,
  type AboutMissionIcon,
} from "@/data/about-page";

function MissionIcon({ name }: { name: AboutMissionIcon }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "promise":
      return (
        <svg {...common}>
          <path d="M12 3 14.5 8.5 20.5 9.3 16 13.5 17.2 19.5 12 16.7 6.8 19.5 8 13.5 3.5 9.3 9.5 8.5 12 3z" />
        </svg>
      );
    case "expertise":
      return (
        <svg {...common}>
          <path d="M12 2v4" />
          <path d="M12 18v4" />
          <path d="M4.93 4.93l2.83 2.83" />
          <path d="M16.24 16.24l2.83 2.83" />
          <path d="M2 12h4" />
          <path d="M18 12h4" />
          <path d="M4.93 19.07l2.83-2.83" />
          <path d="M16.24 7.76l2.83-2.83" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "mission":
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      );
  }
}

export function AboutStudioPage() {
  const { hero, story, mission, industries, growth, team } = aboutPage;

  return (
    <div className="about-studio">
      <section className="about-hero">
        <div className="about-hero-bg" aria-hidden="true">
          <Image
            src={hero.image}
            alt=""
            fill
            priority
            quality={90}
            sizes="100vw"
            className="about-hero-bg-img"
          />
        </div>
        <div className="w about-hero-in">
          <div className="about-hero-copy">
            <Reveal as="p" className="about-eyebrow">
              {hero.eyebrow}
            </Reveal>
            <Reveal>
              <h1 className="about-title">{hero.title}</h1>
            </Reveal>
            <Reveal as="p" className="about-lead" delay="80ms">
              {hero.lead}
            </Reveal>
            <Reveal className="about-actions" delay="140ms">
              <MagButton>
                <Link className="btn gold mag" href={hero.ctaHref}>
                  {hero.ctaLabel}
                  <span aria-hidden="true"> →</span>
                </Link>
              </MagButton>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="sec about-story">
        <div className="w about-story-grid">
          <div className="about-story-copy">
            <Reveal as="p" className="about-eyebrow">
              {story.eyebrow}
            </Reveal>
            <Reveal>
              <h2 className="about-title">{story.title}</h2>
            </Reveal>
            {story.paragraphs.map((p, i) => (
              <Reveal as="p" key={p.slice(0, 32)} className="about-body" delay={`${80 + i * 40}ms`}>
                {p}
              </Reveal>
            ))}
            <Reveal className="about-actions" delay="160ms">
              <MagButton>
                <Link className="btn gold mag" href={story.ctaHref}>
                  {story.ctaLabel}
                  <span aria-hidden="true"> →</span>
                </Link>
              </MagButton>
            </Reveal>
          </div>
          <Reveal className="about-story-media" delay="100ms">
            <div className="about-media-frame">
              <Image
                src={story.image}
                alt=""
                fill
                quality={90}
                sizes="(max-width:900px) 100vw, 48vw"
                className="about-media-img"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="sec about-mission">
        <div className="w">
          <div className="about-mission-copy about-mission-top">
            <Reveal as="p" className="about-eyebrow">
              {mission.eyebrow}
            </Reveal>
            <Reveal>
              <h2 className="about-title">{mission.title}</h2>
            </Reveal>
            <Reveal as="p" className="about-body" delay="80ms">
              {mission.lead}
            </Reveal>
          </div>
          <div className="about-mission-cards">
            {mission.cards.map((card, i) => (
              <Reveal
                key={card.title}
                className="about-mission-card"
                delay={`${100 + i * 80}ms`}
              >
                <span className="about-mission-ic" aria-hidden="true">
                  <MissionIcon name={card.icon} />
                </span>
                <strong>{card.title}</strong>
                <p>{card.body}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="about-actions about-mission-cta" delay="160ms">
            <MagButton>
              <Link className="btn gold mag" href={mission.ctaHref}>
                {mission.ctaLabel}
                <span aria-hidden="true"> →</span>
              </Link>
            </MagButton>
          </Reveal>
        </div>
      </section>

      <section className="sec about-industries">
        <div className="w">
          <div className="about-industries-head">
            <Reveal as="p" className="about-eyebrow">
              {industries.eyebrow}
            </Reveal>
            <Reveal>
              <h2 className="about-title">{industries.title}</h2>
            </Reveal>
            <Reveal as="p" className="about-body" delay="60ms">
              {industries.lead}
            </Reveal>
          </div>
          <ul className="about-industries-grid">
            {industries.items.map((item, i) => (
              <Reveal
                key={item.title}
                as="li"
                className="about-industry-card"
                delay={`${Math.min(i * 40, 280)}ms`}
              >
                <span className="about-industry-num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <strong>{item.title}</strong>
                <p>{item.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="sec about-growth">
        <div className="w">
          <div className="about-industries-head">
            <Reveal as="p" className="about-eyebrow">
              {growth.eyebrow}
            </Reveal>
            <Reveal>
              <h2 className="about-title">{growth.title}</h2>
            </Reveal>
            <Reveal as="p" className="about-body" delay="60ms">
              {growth.lead}
            </Reveal>
          </div>
          <ul className="about-growth-grid">
            {growth.highlights.map((item, i) => (
              <Reveal
                key={item.title}
                as="li"
                className="about-growth-card"
                delay={`${100 + i * 60}ms`}
              >
                <strong>{item.title}</strong>
                <p>{item.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="sec about-team">
        <div className="w">
          <div className="about-team-head">
            <div>
              <Reveal as="p" className="about-eyebrow">
                {team.eyebrow}
              </Reveal>
              <Reveal>
                <h2 className="about-title">{team.title}</h2>
              </Reveal>
              <Reveal as="p" className="about-body" delay="60ms">
                {team.lead}
              </Reveal>
            </div>
            <Reveal delay="100ms">
              <MagButton>
                <Link className="btn gold mag" href={team.ctaHref}>
                  {team.ctaLabel}
                  <span aria-hidden="true"> →</span>
                </Link>
              </MagButton>
            </Reveal>
          </div>
          <ul className="about-team-grid">
            {team.members.map((member, i) => (
              <Reveal
                key={member.name}
                as="li"
                className="about-team-card"
                delay={`${Math.min(i * 60, 240)}ms`}
              >
                <div className="about-team-media">
                  <Image
                    src={member.image}
                    alt=""
                    fill
                    sizes="(max-width:900px) 50vw, 20vw"
                    className="about-team-img"
                  />
                </div>
                <strong>{member.name}</strong>
                <span>{member.role}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
