export default function Marquee() {
  const items = [
    "Watching Anime",
    "Playing Games",
    "Badminton",
    "Reading Papers",
    "Building Side-Projects",
    "Always Learning",
  ];
  const arr = [...items, ...items];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {arr.map((it, i) => (
          <div key={i} className={`marquee-item ${i % 2 ? "muted" : ""}`}>
            {it} <span className="star">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
