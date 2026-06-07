"use client";

import React from "react";
import { useInView } from "./hooks";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
};

/* Reveal — fades/slides its children in once scrolled into view. */
export function Reveal({ children, delay = 0, className = "", as = "div" }: RevealProps) {
  const [ref, inView] = useInView();
  const Tag = as as React.ElementType;
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
