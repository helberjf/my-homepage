import { BriefcaseBusiness, FileText, Github, Linkedin, Mail } from "lucide-react";
import { IconLink } from "../components/IconLink";
import { ProjectCard } from "../components/ProjectCard";
import { Section } from "../components/Section";
import { profile } from "../data/profile";
import { featuredProjects } from "../data/projects";
import { useLanguage } from "../i18n/language";

export function HomePage() {
  const { language, labels } = useLanguage();
  const hero = profile.hero[language];

  return (
    <>
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">{profile.location}</p>
          <h1>Helber Soares</h1>
          <p className="hero-role">{hero.role}</p>
          <p className="hero-summary">{hero.summary}</p>
          <p className="availability">{hero.availability}</p>
          <div className="hero-actions">
            <IconLink href="/resume" icon={<FileText aria-hidden="true" size={18} />} variant="primary">
              {language === "en" ? "View Resume" : "Ver currículo"}
            </IconLink>
            <IconLink href="/projects" icon={<BriefcaseBusiness aria-hidden="true" size={18} />}>
              {language === "en" ? "Read Projects" : "Ler projetos"}
            </IconLink>
            <IconLink href={profile.contact.github.href} icon={<Github aria-hidden="true" size={18} />} external>
              GitHub
            </IconLink>
            <IconLink href={profile.contact.linkedin.href} icon={<Linkedin aria-hidden="true" size={18} />} external>
              LinkedIn
            </IconLink>
          </div>
        </div>
        <aside className="hero-panel" aria-label="Recruiter signals">
          {profile.evidence[language].map((item) => (
            <div className="signal" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </aside>
      </section>

      <Section title={labels.recruiterSummary}>
        <div className="summary-list">
          {profile.recruiterSummary[language].map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <ul className="credential-list">
          {profile.credentials[language].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>

      <Section title={labels.selectedProjects} eyebrow={labels.projectBriefing}>
        <div className="project-grid">
          {featuredProjects.map((project) => (
            <ProjectCard project={project} key={project.name} />
          ))}
        </div>
      </Section>

      <Section title={labels.technicalStack}>
        <div className="stack-grid">
          {profile.stackGroups[language].map((group) => (
            <article className="stack-card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="tag-list">
                {group.items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section title={labels.background}>
        <div className="two-column">
          <div>
            {profile.background[language].map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="quiet-panel">
            <h3>{labels.education}</h3>
            <ul>
              {profile.education[language].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section title={labels.certifications}>
        <div className="two-column">
          <ul className="plain-list">
            {profile.certifications[language].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <ul className="plain-list">
            {profile.languages[language].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section title={labels.contact} className="contact-section">
        <div className="contact-actions">
          <IconLink href={`mailto:${profile.contact.email}`} icon={<Mail aria-hidden="true" size={18} />} variant="primary">
            {profile.contact.email}
          </IconLink>
          <IconLink href={profile.contact.github.href} icon={<Github aria-hidden="true" size={18} />} external>
            {profile.contact.github.label}
          </IconLink>
          <IconLink href={profile.contact.linkedin.href} icon={<Linkedin aria-hidden="true" size={18} />} external>
            {profile.contact.linkedin.label}
          </IconLink>
        </div>
      </Section>
    </>
  );
}
