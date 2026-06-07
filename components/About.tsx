"use client";

import Image from "next/image";
import { Reveal } from "@/lib/Reveal";
import { I } from "@/lib/icons";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        <Reveal className="about-photo">
          <div className="ap-window">
            <div className="ap-bar">
              <span className="ap-dots"><i></i><i></i><i></i></span>
              <span className="ap-label">about me</span>
            </div>
            <div className="ap-photo">
              <Image
                src="/photo.jpg"
                alt="Kuber Pathak"
                fill
                priority
                sizes="(max-width: 760px) 90vw, 400px"
                placeholder="blur"
                blurDataURL="/photo.jpg"
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="about-text">
          <span className="eyebrow">About Me</span>
          <h3>
            An IT graduate{" "}
            <em style={{ color: "var(--accent)", fontStyle: "italic", fontWeight: 500 }}>obsessed</em>{" "}
            with building intelligent products.
          </h3>
          <p>
            I&apos;m <span className="hl">Kuber Pathak</span> — a B.E. graduate from
            <span className="hl"> Nepal College of Information Technology </span>
            (Pokhara University). I specialize in{" "}
            <span className="hl">AI/ML and full-stack development</span>, focused on building
            scalable and intelligent applications.
          </p>
          <p>
            Excited by the rapid evolution of artificial intelligence, I enjoy researching emerging
            technologies and building applications that solve meaningful problems — from RAG
            pipelines and recommendation systems to IoT&#8209;connected computer vision.
          </p>

          <div className="about-meta">
            <div className="row"><span className="k">Name</span><span className="v">Kuber Pathak</span></div>
            <div className="row"><span className="k">Email</span><span className="v">kuberpathak124@gmail.com</span></div>
            <div className="row"><span className="k">Degree</span><span className="v">B.E. Information Technology ✓</span></div>
            <div className="row"><span className="k">CGPA</span><span className="v">3.84 / 4.0</span></div>
            <div className="row"><span className="k">Based In</span><span className="v">Kathmandu, Nepal</span></div>
            <div className="row"><span className="k">Status</span><span className="v" style={{ color: "var(--accent)" }}>● Open to work</span></div>
          </div>

          <div className="signature">~ Kuber</div>

          <div className="about-ctas">
            <a href="#contact" className="btn btn-primary">Hire Me {I.arrow}</a>
            <a href="/Kuber-Pathak-CV.pdf" download className="btn btn-dark">Download CV {I.download}</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
