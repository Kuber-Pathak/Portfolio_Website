"use client";

import { Reveal } from "@/lib/Reveal";

const QUOTES = [
  {
    text: "I focus on shipping things that actually work in production — not just clever notebooks. Every project I take on has to earn its place in someone's day.",
    name: "On craft",
    role: "Working philosophy",
    color: "var(--accent)",
  },
  {
    text: "AI moves fast. I read papers, ship prototypes in real time, break them, and iterate. The half-life of any 'best practice' here is short — I keep my hands dirty.",
    name: "On AI",
    role: "How I stay current",
    color: "var(--accent-2)",
  },
  {
    text: "Full-stack means you own outcomes end to end. From data model to button hover, I sweat the seams — that's where products feel polished or fall apart.",
    name: "On full-stack",
    role: "How I build",
    color: "#0E1726",
  },
];

export default function Why() {
  return (
    <section id="why" className="section why">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Why Work With Me</span>
          <h2>A few things I believe.</h2>
          <p>Working principles I keep close — what guides decisions when no one is watching.</p>
        </Reveal>
        <div className="why-grid">
          {QUOTES.map((q, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="why-card">
                <div className="quote">&ldquo;</div>
                <p>{q.text}</p>
                <div className="author">
                  <div className="av" style={{ background: q.color }}>K</div>
                  <div>
                    <div className="name">{q.name}</div>
                    <div className="role">{q.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
