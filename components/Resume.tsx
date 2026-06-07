"use client";

import { Reveal } from "@/lib/Reveal";
import { I } from "@/lib/icons";

type TLEntry = {
  date: string;
  title: string;
  school: string;
  sub: string;
  desc: string;
  now?: boolean;
  completed?: boolean;
  letter: string;
};

const EDUCATION: TLEntry[] = [
  {
    date: "2022 — 2026 · Completed",
    title: "B.E. Information Technology",
    school: "Nepal College of Information Technology",
    sub: "Pokhara University · CGPA 3.84 / 4.0",
    desc: "Graduated with focus on artificial intelligence, distributed systems, and software engineering. Final-year work in RAG-based learning systems.",
    now: false,
    completed: true,
    letter: "P",
  },
  {
    date: "2019 — 2021",
    title: "Higher Secondary (+2 Science)",
    school: "Science Stream",
    sub: "Physics, Chemistry, Mathematics, Computer Science",
    desc: "Built early programming projects and competed in inter-college tech events.",
    letter: "+2",
  },
];

const CERTS: TLEntry[] = [
  {
    date: "Coursera · Stanford",
    title: "Supervised Machine Learning",
    school: "Coursera / Stanford University",
    sub: "Regression, Classification, Gradient Descent",
    desc: "Foundations of supervised learning — linear & logistic regression, neural nets primer, regularization, gradient descent intuitions.",
    letter: "S",
  },
  {
    date: "Coursera · Stanford",
    title: "Advanced Learning Algorithms",
    school: "Coursera / Stanford University",
    sub: "Neural Networks, Decision Trees, ML Strategy",
    desc: "TensorFlow-based deep nets, tree ensembles, bias/variance, advice for applying ML, and model evaluation.",
    letter: "A",
  },
  {
    date: "BROADWAY · NCIT",
    title: "MERN Stack Development",
    school: "Broadway Infosys & NCIT",
    sub: "MongoDB, Express, React, Node.js",
    desc: "Hands-on full-stack training with MERN — auth, REST APIs, deployment workflows.",
    letter: "M",
  },
  {
    date: "NOSK · NCIT",
    title: "NOSKATHON LITE — Hackathon",
    school: "NOSK & NCIT",
    sub: "Team Project · 24-hour Build",
    desc: "Rapid-prototype hackathon focused on community-impact software builds.",
    letter: "N",
  },
  {
    date: "2025",
    title: "Nepal Techno Fest 2025",
    school: "Presented By: Nepal Techno Fest",
    sub: "Exhibitor / Participant",
    desc: "Showcased AI + IoT work to industry visitors and peers from across the country.",
    letter: "T",
  },
];

function TLItem({ item }: { item: TLEntry }) {
  return (
    <Reveal className={`tl-item ${item.now ? "now" : ""} ${item.completed ? "done" : ""}`}>
      <div className={`tl-date ${item.now ? "now" : ""} ${item.completed ? "done" : ""}`}>{item.date}</div>
      <h5>
        <span className="logo-letter">{item.letter}</span> {item.title}
      </h5>
      <p>{item.desc}</p>
      <div className="tl-meta">{item.school} · {item.sub}</div>
    </Reveal>
  );
}

export default function Resume() {
  return (
    <section id="resume" className="section resume">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Resume</span>
          <h2>Education &amp; certifications.</h2>
          <p>What I&apos;ve studied, the certifications I&apos;ve earned, and the events that shaped me.</p>
        </Reveal>

        <div className="resume-grid">
          <div className="resume-col">
            <h3><span className="icon">{I.cap}</span> Education</h3>
            <div className="timeline">
              {EDUCATION.map((e) => <TLItem key={e.title} item={e} />)}
            </div>
          </div>
          <div className="resume-col">
            <h3><span className="icon">{I.award}</span> Certifications &amp; Events</h3>
            <div className="timeline">
              {CERTS.map((c) => <TLItem key={c.title} item={c} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
