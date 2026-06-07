export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <a className="logo" href="#home">
            <div className="logo-mark"><span>KP</span></div>
            <span style={{ color: "#fff" }}>kuber<span style={{ color: "var(--accent)" }}>.</span></span>
          </a>
          <nav>
            <a href="#about">About</a>
            <a href="#services">Service</a>
            <a href="#work">Portfolio</a>
            <a href="#resume">Resume</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
        <div className="footer-bot">
          <div>© 2026 KUBER PATHAK · ALL RIGHTS RESERVED</div>
          <div style={{ display: "flex", gap: 18 }}>
            <a href="https://github.com/Kuber-Pathak" target="_blank" rel="noopener">GitHub</a>
            <a href="https://www.linkedin.com/in/kuber-pathak-8b804b217/" target="_blank" rel="noopener">LinkedIn</a>
            <a href="https://www.instagram.com/pathakkuber/" target="_blank" rel="noopener">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
