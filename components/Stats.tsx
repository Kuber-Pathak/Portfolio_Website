"use client";

import { useInView, useCountUp } from "@/lib/hooks";

const STATS = [
  { v: 3, sym: "+", lbl: "Major Projects Shipped" },
  { v: 12, sym: "+", lbl: "Tech Stacks Mastered" },
  { v: 5, sym: "", lbl: "Certifications" },
  { v: 384, sym: "/400", lbl: "CGPA Achieved" },
];

function StatItem({ v, sym, lbl }: { v: number; sym: string; lbl: string }) {
  const [ref, inView] = useInView({ threshold: 0.4 });
  const n = useCountUp(v, inView, 1600);
  const isDecimal = v < 10;
  return (
    <div ref={ref} className="stat">
      <div className="num">
        {isDecimal ? n.toFixed(0) : Math.round(n)}
        <span className="sym">{sym}</span>
      </div>
      <div className="lbl">{lbl}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="stats">
      <div className="container stats-grid">
        {STATS.map((s) => <StatItem key={s.lbl} {...s} />)}
      </div>
    </section>
  );
}
