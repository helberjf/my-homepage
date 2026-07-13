import type { ReactNode } from "react";

type SectionProps = {
  title: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ title, eyebrow, children, className = "" }: SectionProps) {
  return (
    <section className={`section ${className}`.trim()}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {children}
    </section>
  );
}
