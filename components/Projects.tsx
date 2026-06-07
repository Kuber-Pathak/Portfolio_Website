"use client";

import { useState } from "react";
import Image from "next/image";
import { Reveal } from "@/lib/Reveal";
import { I } from "@/lib/icons";

type Project = {
  id: string;
  title: string;
  cat: string;
  year: string;
  tags: string[];
  cover: string;
  desc: string;
  stack: string[];
  role: string[];
  features: string[];
  repo: string;
  img: string;
  w: number;
  h: number;
};

const PROJECTS: Project[] = [
  {
    id: "bato",
    title: "Bato.ai",
    cat: "Gen AI",
    year: "2025",
    tags: ["ai"],
    cover: "gen",
    desc: "A RAG-based AI learning platform that leverages official technical documentation to generate structured learning roadmaps, detailed topic explanations, topic-wise quizzes, and progress tracking using LLM APIs and a scalable backend.",
    stack: ["Next.js", "Tailwind CSS", "FastAPI", "LangChain", "PGVector", "OpenAI"],
    role: ["AI / RAG Pipeline", "LLM Integration"],
    features: [
      "RAG pipeline grounded in official technical documentation",
      "Auto-generated, structured learning roadmaps",
      "Topic explanations and topic-wise quizzes",
      "Progress tracking backed by a scalable API",
    ],
    repo: "https://github.com/Final-Year-Project-Hub/Bato-Ai",
    img: "/bato.png",
    w: 1894,
    h: 832,
  },
  {
    id: "pandit",
    title: "Purohit — Pandit Reservation",
    cat: "Backend · AI",
    year: "2025",
    tags: ["ai", "backend"],
    cover: "fullstack",
    desc: "A full-stack platform connecting users with qualified service providers. Includes an AI-based recommendation system, reviews, ratings, and end-to-end booking workflows.",
    stack: ["Next.js", "Tailwind CSS", "Node.js", "Python", "MongoDB", "ML Recsys"],
    role: ["Backend", "AI Recommender"],
    features: [
      "AI-based pandit / service recommendation engine",
      "End-to-end booking workflow with scheduling",
      "Reviews & ratings system",
      "Multi-role accounts for users and providers",
    ],
    repo: "https://github.com/Serve-Hub/",
    img: "/pandit.png",
    w: 1919,
    h: 979,
  },
  {
    id: "smartbin",
    title: "EcoSort — Smart Bin",
    cat: "AI · Backend",
    year: "2024",
    tags: ["ai", "backend"],
    cover: "iot",
    desc: "Computer-vision system that classifies biodegradable vs non-biodegradable waste in real time. IoT automation + a web dashboard for monitoring and controlling segregation.",
    stack: ["PyTorch", "OpenCV", "Raspberry Pi", "Next.js", "Tailwind CSS", "MQTT"],
    role: ["Backend", "AI / Computer Vision"],
    features: [
      "Real-time biodegradable vs non-biodegradable classification",
      "Computer-vision model running on edge hardware",
      "IoT automation that drives the segregation mechanism",
      "Web dashboard for live monitoring and control",
    ],
    repo: "https://github.com/Noskathon-Lite/Tech_Titans/tree/main/kuber",
    img: "/smartbin.png",
    w: 1832,
    h: 838,
  },
];

const FILTERS = [
  { id: "all", label: "All Work" },
  { id: "ai", label: "AI / GenAI" },
  { id: "backend", label: "Backend" },
];

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [opened, setOpened] = useState<string | null>(null); // mobile tap-to-reveal

  return (
    <section id="work" className="section projects">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Featured Works</span>
          <h2>Things I&apos;ve built.</h2>
          <p>A mix of AI applications, full-stack platforms, and applied research from the past two years.</p>
        </Reveal>

        <Reveal className="proj-filter">
          {FILTERS.map((f) => (
            <button key={f.id} className={filter === f.id ? "on" : ""} onClick={() => setFilter(f.id)}>
              {f.label}
            </button>
          ))}
        </Reveal>

        <div className="proj-grid">
          {PROJECTS.map((p, i) => {
            const shown = filter === "all" || p.tags.includes(filter);
            return (
              <div
                key={p.id}
                className={`proj-card ${shown ? "" : "hide"} ${opened === p.id ? "open" : ""}`}
                style={{ animationDelay: `${i * 60}ms` }}
                onClick={() => setOpened(opened === p.id ? null : p.id)}
              >
                <div className={`proj-cover ${p.cover}`}>
                  <Image
                    className="proj-img"
                    src={p.img}
                    alt={p.title}
                    width={p.w}
                    height={p.h}
                    sizes="(max-width: 900px) 90vw, 360px"
                  />
                  <div className="proj-pill">{p.cat}</div>
                </div>
                <div className="proj-meta">
                  <div>
                    <h4>{p.title}</h4>
                    <p>{p.cat}</p>
                  </div>
                  <a
                    className="proj-meta-git"
                    href={p.repo}
                    target="_blank"
                    rel="noopener"
                    aria-label={`${p.title} on GitHub`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {I.github}
                  </a>
                </div>
                <div className="proj-overlay">
                  <div className="cat">{p.cat}</div>
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                  <div className="proj-role">
                    <span className="lbl">My Role</span>
                    <div className="role-tags">
                      {p.role.map((r) => <span key={r}>{r}</span>)}
                    </div>
                  </div>
                  <a
                    className="proj-git-btn"
                    href={p.repo}
                    target="_blank"
                    rel="noopener"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {I.github} View on GitHub
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <Reveal className="proj-more">
          <span>Want to dig into the code?</span>
          <a className="btn btn-ghost" href="https://github.com/Kuber-Pathak" target="_blank" rel="noopener">
            Explore all repositories {I.github}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
