import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { MagButton, TiltCard } from "@/components/interactions";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { pillars, site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Elite Solutions USA combines accounting and financial expertise with design, web and marketing — led by Usman Tehseen.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero title="Scaling businesses through technology, offshore talent and digital growth" />
      <div className="sec">
        <div className="w about">
          <div>
            <Reveal as="h2">About {site.name}</Reveal>
            <Reveal as="p">
              {site.name} is a global finance and technology advisory led by{" "}
              {site.founder.name}. We combine accounting and financial expertise
              with design, web and marketing skills, so a business can get
              everything it needs from one team.
            </Reveal>
            <Reveal as="p">
              We work with restaurants, caterers, service businesses and growing
              companies that want reliable books, a strong brand and a website
              that works.
            </Reveal>
            <Reveal as="p">
              Every project starts with a conversation about what you need. Then
              we send a plan and a quote, and we do the work.
            </Reveal>
            <Reveal className="btns" style={{ marginTop: 26 }}>
              <MagButton>
                <Link className="btn blue" href="/contact">
                  Talk to us
                </Link>
              </MagButton>
            </Reveal>
          </div>
          <Reveal>
            <TiltCard className="cred">
              <h3>{site.founder.name}</h3>
              <p style={{ marginBottom: 18 }} />
              <dl>
                <dt>Qualifications</dt>
                <dd>{site.founder.qualifications}</dd>
                <dt>Based in</dt>
                <dd>{site.founder.basedIn}</dd>
                <dt>Focus</dt>
                <dd>{site.founder.focus}</dd>
              </dl>
            </TiltCard>
          </Reveal>
        </div>
      </div>
      <div className="sec alt">
        <div className="w">
          <Reveal as="h2">Three things we bring together</Reveal>
          <Reveal as="p" className="sub">
            Most firms offer one. We offer all three.
          </Reveal>
          <div className="pill">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={`${i * 0.1}s`}>
                <TiltCard>
                  <div className="ic">
                    <Icon name={p.icon} />
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
