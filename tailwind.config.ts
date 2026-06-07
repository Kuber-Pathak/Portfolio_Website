import type { Config } from "tailwindcss";

/**
 * Hybrid setup: the bespoke design system lives in app/globals.css
 * (CSS variables, custom components, animations). Tailwind is available
 * for any new utility-class work you do on top of it.
 *
 * The design tokens are surfaced here so you can use them as Tailwind
 * utilities too, e.g. `text-accent`, `bg-surface`, `font-display`.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "var(--accent)",
        "accent-2": "var(--accent-2)",
        ink: "var(--ink)",
        "ink-2": "var(--ink-2)",
        muted: "var(--muted)",
        surface: "var(--surface)",
        bg: "var(--bg)",
        line: "var(--line)",
        "line-soft": "var(--line-soft)",
      },
      fontFamily: {
        display: "var(--f-display)",
        body: "var(--f-body)",
        mono: "var(--f-mono)",
        script: "var(--f-script)",
      },
    },
  },
  plugins: [],
  // The site ships its own CSS reset in globals.css. Disabling Preflight
  // guarantees the bespoke design renders identically; Tailwind utilities
  // still work without it.
  corePlugins: {
    preflight: false,
  },
};

export default config;
