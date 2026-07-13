import { ExternalLink } from "lucide-react";
import type { Project } from "../data/projects";
import { useLanguage } from "../i18n/language";

type ProjectCardProps = {
  project: Project;
  detailed?: boolean;
};

export function ProjectCard({ project, detailed = false }: ProjectCardProps) {
  const { language, labels } = useLanguage();

  return (
    <article className={`project-card ${project.featured ? "project-card-featured" : ""}`}>
      <div className="project-card-header">
        <h3>{project.name}</h3>
        <div className="project-links">
          {project.links.map((link) => (
            <a href={link.href} key={link.href} target="_blank" rel="noreferrer">
              <ExternalLink aria-hidden="true" size={15} />
              <span>{link.type === "demo" ? labels.liveDemo : link.type === "caseStudy" ? labels.caseStudy : labels.repository}</span>
            </a>
          ))}
        </div>
      </div>
      <p>{project.summary[language]}</p>
      {detailed ? (
        <div className="project-details">
          <h4>{labels.problem}</h4>
          <p>{project.problem[language]}</p>
          <h4>{labels.architecture}</h4>
          <p>{project.architecture[language]}</p>
          <h4>{labels.highlights}</h4>
          <ul>
            {project.highlights[language].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h4>{language === "en" ? "Talking points" : "Pontos para discutir"}</h4>
          <ul>
            {project.talkingPoints[language].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}
      <div className="tag-list" aria-label={`${project.name} stack`}>
        {project.stack.map((item) => (
          <span className="tag" key={item}>
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
