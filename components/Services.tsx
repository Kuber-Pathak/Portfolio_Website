"use client";

import { Reveal } from "@/lib/Reveal";
import { I } from "@/lib/icons";

const SERVICES = [
  {
    n: "01",
    icon: I.brain,
    title: "AI / GenAI Applications",
    desc: "Designing RAG pipelines, LLM-powered assistants, and ML-driven features that turn data into product magic.",
    list: ["RAG & Vector Search", "LLM Agents", "Prompt Engineering", "Model Deployment"],
  },
  {
    n: "02",
    icon: I.code,
    title: "Full-Stack Development",
    desc: "End-to-end web apps with modern stacks — React / Next.js on the front, Node or FastAPI on the back.",
    list: ["Next.js / React", "Node & FastAPI", "PostgreSQL / Mongo", "REST APIs"],
  },
  {
    n: "03",
    icon: I.flask,
    title: "Research & Experimentation",
    desc: "Staying close to the latest AI research — reading papers, reproducing techniques, and prototyping ideas to learn what actually works.",
    list: ["Reading Papers", "Implementing Techniques", "Prototyping", "Benchmarking"],
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">What I Do</span>
          <h2>Areas of expertise.</h2>
          <p>Three overlapping practices that let me ship intelligent products from idea to production.</p>
        </Reveal>

        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <div className="service-card">
                <span className="service-num">{s.n}</span>
                <div className="service-icon">{s.icon}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
                <ul>
                  {s.list.map((l) => <li key={l}>{l}</li>)}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
