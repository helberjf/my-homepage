import { BriefcaseBusiness, FileText, Github, Linkedin, Mail } from "lucide-react";
import type { ReactNode } from "react";
import { profile } from "../data/profile";
import { useLanguage } from "../i18n/language";
import { LanguageToggle } from "./LanguageToggle";

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  const { labels } = useLanguage();

  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="/" aria-label="Helber Soares home">
          HS
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          <a href="/">{labels.home}</a>
          <a href="/resume">
            <FileText aria-hidden="true" size={16} />
            {labels.resume}
          </a>
          <a href="/projects">
            <BriefcaseBusiness aria-hidden="true" size={16} />
            {labels.projects}
          </a>
          <a href={profile.contact.github.href} target="_blank" rel="noreferrer">
            <Github aria-hidden="true" size={16} />
            {labels.github}
          </a>
          <a href={profile.contact.linkedin.href} target="_blank" rel="noreferrer">
            <Linkedin aria-hidden="true" size={16} />
            {labels.linkedin}
          </a>
          <a href={`mailto:${profile.contact.email}`}>
            <Mail aria-hidden="true" size={16} />
            {labels.email}
          </a>
        </nav>
        <LanguageToggle />
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <span>{profile.name}</span>
        <span>{profile.location}</span>
        <a href={`mailto:${profile.contact.email}`}>{profile.contact.email}</a>
      </footer>
    </div>
  );
}
