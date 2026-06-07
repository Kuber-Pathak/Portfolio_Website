"use client";

import { useEffect, useRef } from "react";

export default function CursorFX() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let dx = 0,
      dy = 0,
      rx = 0,
      ry = 0;
    let raf = 0;
    // If the page uses CSS `zoom` on <html>, fixed-element transforms are
    // scaled by it but e.clientX/Y are not — so divide the pointer coords
    // by the zoom factor to keep the custom cursor aligned with the real one.
    const getZoom = () =>
      parseFloat(getComputedStyle(document.documentElement).zoom || "1") || 1;
    let zoom = getZoom();
    const onResize = () => {
      zoom = getZoom();
    };
    const onMove = (e: MouseEvent) => {
      dx = e.clientX / zoom;
      dy = e.clientY / zoom;
    };
    const tick = () => {
      rx += (dx - rx) * 0.18;
      ry += (dy - ry) * 0.18;
      if (dotRef.current) dotRef.current.style.transform = `translate(${dx}px, ${dy}px) translate(-50%,-50%)`;
      if (ringRef.current) ringRef.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("resize", onResize);
    raf = requestAnimationFrame(tick);

    const onOver = (e: MouseEvent) => {
      const target = e.target as Element | null;
      const isInteractive = target?.closest("a, button, .proj-card, input, textarea, label");
      if (ringRef.current) ringRef.current.classList.toggle("big", !!isInteractive);
    };
    window.addEventListener("mouseover", onOver);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot"></div>
      <div ref={ringRef} className="cursor-ring"></div>
    </>
  );
}
