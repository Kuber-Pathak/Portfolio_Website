"use client";

import { useState, useEffect, useRef, useCallback, useSyncExternalStore } from "react";

/* useInView — flips to true once the element scrolls into view (once). */
export function useInView(opts: { threshold?: number; rootMargin?: string } = {}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (!ref.current || seen) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          obs.disconnect();
        }
      },
      { threshold: opts.threshold ?? 0.18, rootMargin: opts.rootMargin ?? "0px" }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seen]);
  return [ref, seen] as const;
}

/* useCountUp — eased number ramp, gated on `start`. */
export function useCountUp(target: number, start: boolean, duration = 1600) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    let t0 = 0;
    const step = (t: number) => {
      if (!t0) t0 = t;
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(target * eased);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);
  return val;
}

/* useActiveSection — tracks which section id is currently in view for the nav. */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const handler = () => {
      const y = window.scrollY + 200;
      let cur = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) cur = id;
      }
      setActive(cur);
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join("|")]);
  return active;
}

/* useTheme — dark/light with localStorage persistence.
   useSyncExternalStore gives React the server snapshot ("light") during
   SSR/hydration, then switches to the real localStorage value on the
   client — no hydration mismatch, no setState-in-effect lint warning. */
const THEME_KEY = "kp-theme";
const themeListeners = new Set<() => void>();

function subscribeTheme(cb: () => void) {
  themeListeners.add(cb);
  return () => { themeListeners.delete(cb); };
}

function getThemeSnapshot(): string {
  try {
    const v = localStorage.getItem(THEME_KEY);
    if (v === "dark" || v === "light") return v;
  } catch { /* ignore */ }
  return "light";
}

function getThemeServerSnapshot(): string {
  return "light";
}

export function useTheme(): [string, () => void] {
  const theme = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getThemeServerSnapshot);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggle = useCallback(() => {
    const next = getThemeSnapshot() === "dark" ? "light" : "dark";
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch { /* ignore */ }
    themeListeners.forEach((cb) => cb());
  }, []);

  return [theme, toggle];
}