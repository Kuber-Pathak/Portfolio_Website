"use client";

import { Reveal } from "@/lib/Reveal";
import { I } from "@/lib/icons";

const INVOLVEMENT = [
  {
    badge: "SARYN",
    icon: I.globe,
    org: "South Asian Regional Youth Network",
    parent: "Under IPPF · International Planned Parenthood Federation",
    role: "Member — Nepal",
    desc: "Representing Nepal in a regional network of young advocates, collaborating with peers across South Asia on youth-led action for health, rights, and inclusion.",
  },
  {
    badge: "FPAN",
    icon: I.community,
    org: "Family Planning Association of Nepal",
    parent: "Central Youth Committee",
    role: "Youth Member",
    desc: "Serving on the central youth committee — contributing to youth programs, advocacy, and community outreach initiatives nationwide.",
  },
];

export default function Involvement() {
  return (
    <section id="community" className="section involve">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Beyond the Code</span>
          <h2>Community &amp; youth leadership.</h2>
          <p>Outside of engineering, I stay active in youth advocacy and social-service networks across Nepal and South Asia.</p>
        </Reveal>

        <div className="involve-grid">
          {INVOLVEMENT.map((x, i) => (
            <Reveal key={x.badge} delay={i * 100}>
              <div className="involve-card">
                <div className="involve-top">
                  <div className="involve-badge">{x.badge}</div>
                  <div className="involve-icon">{x.icon}</div>
                </div>
                <h4>{x.org}</h4>
                <div className="involve-parent">{x.parent}</div>
                <div className="involve-role"><span className="dot"></span>{x.role}</div>
                <p>{x.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
