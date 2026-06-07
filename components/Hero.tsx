"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Reveal } from "@/lib/Reveal";
import { I } from "@/lib/icons";

const TAGLINE_ROTATE = ["AI Developer", "Full-Stack Engineer", "GenAI Builder", "Problem Solver"];

function Typewriter({ words, speed = 80, pause = 1800 }: { words: string[]; speed?: number; pause?: number }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[i];
    let to: ReturnType<typeof setTimeout>;
    if (!del && text.length < w.length) {
      to = setTimeout(() => setText(w.slice(0, text.length + 1)), speed);
    } else if (!del && text.length === w.length) {
      to = setTimeout(() => setDel(true), pause);
    } else if (del && text.length > 0) {
      to = setTimeout(() => setText(w.slice(0, text.length - 1)), speed / 2);
    } else {
      to = setTimeout(() => {
        setDel(false);
        setI((i + 1) % words.length);
      }, 200);
    }
    return () => clearTimeout(to);
  }, [text, del, i, words, speed, pause]);
  return (
    <span>
      {text}
      <span className="cursor-blink"></span>
    </span>
  );
}

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-orb"></div>

      <div className="container">
        <div className="hero-grid">
          <div className="hero-text">
            <Reveal className="hello-row">
              HELLO &nbsp; <span className="hello-wave">👋</span>
            </Reveal>
            <Reveal delay={120}>
              <h1>
                I&apos;m <span className="accent">Kuber</span>
                <br />
                Pathak.
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="hero-sub">
                <span className="hl">Building the future with AI, code, and bold ideas.</span> An IT
                graduate specializing in AI/ML and full-stack development, focused on shipping
                scalable, intelligent applications that solve meaningful problems.
              </p>
            </Reveal>
            <Reveal delay={320}>
              <div
                style={{
                  fontFamily: "var(--f-mono)",
                  fontSize: 12,
                  letterSpacing: "0.22em",
                  color: "var(--ink-2)",
                  textTransform: "uppercase",
                  marginBottom: 36,
                }}
              >
                Currently &nbsp;//&nbsp;{" "}
                <span style={{ color: "var(--accent)" }}>
                  <Typewriter words={TAGLINE_ROTATE} />
                </span>
              </div>
            </Reveal>
            <Reveal delay={420} className="hero-ctas">
              <a href="#contact" className="btn btn-primary">Hire Me {I.arrow}</a>
              <a href="#work" className="btn btn-ghost">See Work {I.arrowDown}</a>
            </Reveal>

            <Reveal delay={520} className="hero-socials">
              <span className="label">Find Me</span>
              <a href="https://github.com/Kuber-Pathak" target="_blank" rel="noopener" aria-label="GitHub">{I.github}</a>
              <a href="https://www.linkedin.com/in/kuber-pathak-8b804b217/" target="_blank" rel="noopener" aria-label="LinkedIn">{I.linkedin}</a>
              <a href="https://www.instagram.com/pathakkuber/" target="_blank" rel="noopener" aria-label="Instagram">{I.instagram}</a>
              <a href="mailto:Kuberpathak124@gmail.com" aria-label="Email">{I.email}</a>
            </Reveal>
          </div>

          <Reveal delay={300} className="hero-photo">
            <div className="hero-photo-bg"></div>

            <div className="photo-wrap">
              <Image
                src="/photo.jpg"
                alt="Kuber Pathak"
                fill
                priority
                sizes="(max-width: 900px) 360px, 540px"
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* corner accent block */}
            <div
              style={{
                position: "absolute",
                right: "-3%",
                bottom: "8%",
                width: 90,
                height: 90,
                background: "var(--accent)",
                zIndex: 2,
                transform: "rotate(-8deg)",
                boxShadow: "0 18px 40px -10px rgba(255,45,85,0.45)",
              }}
            ></div>

            <div className="photo-badge b1">
              <span className="dot"></span>
              <div>
                <div className="label">Status</div>
                <div className="val">Open to work</div>
              </div>
            </div>
            <div className="photo-badge b2">
              <div style={{ fontFamily: "var(--f-display)", fontSize: 24, fontWeight: 700, color: "var(--accent)", lineHeight: 1 }}>
                3.84
              </div>
              <div>
                <div className="label">CGPA / 4</div>
                <div className="val">B.E. Information Technology</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="side-rail left">@kuber.pathak — 2026</div>
      <div className="side-rail right">SCROLL DOWN</div>
    </section>
  );
}
