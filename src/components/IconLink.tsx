import type { ReactNode } from "react";

type IconLinkProps = {
  href: string;
  children: ReactNode;
  icon: ReactNode;
  external?: boolean;
  variant?: "primary" | "secondary";
};

export function IconLink({ href, children, icon, external = false, variant = "secondary" }: IconLinkProps) {
  return (
    <a
      className={`button ${variant === "primary" ? "button-primary" : "button-secondary"}`}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {icon}
      <span>{children}</span>
    </a>
  );
}
