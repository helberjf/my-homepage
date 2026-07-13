import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { profile } from "../data/profile";
import { useLanguage } from "../i18n/language";

export function ResumePage() {
  const { language } = useLanguage();
  const resume = profile.resume[language];

  return (
    <article className="resume-page" aria-label={resume.title}>
      <header className="resume-header">
        <div>
          <h1>{resume.title}</h1>
          <h2>{profile.name}</h2>
          <p>{profile.hero[language].role}</p>
          <p>{resume.subtitle}</p>
        </div>
        <address className="resume-contact">
          <a href={`mailto:${profile.contact.email}`}>
            <Mail aria-hidden="true" size={16} />
            {profile.contact.email}
          </a>
          <a href={`tel:${profile.contact.phone.replace(/\D/g, "")}`}>
            <Phone aria-hidden="true" size={16} />
            {profile.contact.phone}
          </a>
          <a href={profile.contact.github.href}>
            <Github aria-hidden="true" size={16} />
            {profile.contact.github.label}
          </a>
          <a href={profile.contact.linkedin.href}>
            <Linkedin aria-hidden="true" size={16} />
            {profile.contact.linkedin.label}
          </a>
          <span>{profile.location}</span>
        </address>
      </header>

      {resume.sections.map((section) => (
        <section className="resume-section" key={section.title}>
          <h3>{section.title}</h3>
          <ul>
            {section.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ))}
    </article>
  );
}
