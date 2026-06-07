"use client";

import { Reveal } from "@/lib/Reveal";
import { I } from "@/lib/icons";

export default function CTAStrip() {
  return (
    <section className="cta-strip">
      <div className="container">
        <Reveal><div className="small">Have a project in mind?</div></Reveal>
        <Reveal delay={100}><h2>Just say <em>hello</em>.</h2></Reveal>
        <Reveal delay={200}>
          <a href="#contact" className="btn btn-dark">Hire Me {I.arrow}</a>
        </Reveal>
      </div>
    </section>
  );
}
