"use client";

import { useInView } from "@/lib/hooks";

const SKILLS_AI = [
  { name: "PyTorch / TensorFlow", pct: 88 },
  { name: "LLM Applications & RAG", pct: 92 },
  { name: "LangChain & Prompt Engineering", pct: 90 },
  { name: "Computer Vision & NLP", pct: 85 },
];
const SKILLS_FS = [
  { name: "React / Next.js", pct: 93 },
  { name: "Node.js / Express", pct: 89 },
  { name: "Python / FastAPI", pct: 90 },
  { name: "PostgreSQL & MongoDB", pct: 84 },
];

const TAGS_AI = [
  "PyTorch", "TensorFlow", "Scikit-learn", "Computer Vision", "NLP",
  "Deep Learning", "Generative AI", "LLM Apps", "LangChain", "RAG",
  "Prompt Engineering", "Transfer Learning", "Model Deployment",
];
const TAGS_FS = [
  "Next.js", "React", "Node.js", "Python", "FastAPI", "Express.js",
  "PostgreSQL", "MongoDB", "REST APIs", "Tailwind", "TypeScript", "Git",
];

function SkillBar({ name, pct, inView, delay }: { name: string; pct: number; inView: boolean; delay: number }) {
  return (
    <div className="skill-bar">
      <div className="skill-bar-head">
        <span className="name">{name}</span>
        <span className="pct">{pct}%</span>
      </div>
      <div className="skill-bar-track">
        <div
          className="skill-bar-fill"
          style={{ width: inView ? `${pct}%` : 0, transitionDelay: `${delay}ms` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.2 });
  return (
    <section className="section skills">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">My Skills</span>
            <h2>A toolkit that spans intelligence and interface.</h2>
          </div>
          <p>From training and deploying models to shipping production-grade web apps — I work across the stack.</p>
        </div>

        <div ref={ref} className="skill-cluster">
          <div className="skill-col ai">
            <h4><span className="num">01</span> AI / Machine Learning</h4>
            {SKILLS_AI.map((s, i) => (
              <SkillBar key={s.name} {...s} inView={inView} delay={i * 120} />
            ))}
            <div className="tag-cloud">
              {TAGS_AI.map((t) => <span key={t} className="chip ai">{t}</span>)}
            </div>
          </div>
          <div className="skill-col fs">
            <h4><span className="num">02</span> Full-Stack Engineering</h4>
            {SKILLS_FS.map((s, i) => (
              <SkillBar key={s.name} {...s} inView={inView} delay={i * 120} />
            ))}
            <div className="tag-cloud">
              {TAGS_FS.map((t) => <span key={t} className="chip web">{t}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
