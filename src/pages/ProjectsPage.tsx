import { ProjectCard } from "../components/ProjectCard";
import { Section } from "../components/Section";
import { projects } from "../data/projects";
import { useLanguage } from "../i18n/language";

export function ProjectsPage() {
  const { language, labels } = useLanguage();

  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">{labels.interviewTalkingPoints}</p>
        <h1>{labels.projectBriefing}</h1>
        <p>
          {language === "en"
            ? "This page gives interviewers a fast, technical reading of the strongest projects: the problem, architecture, engineering decisions and trade-offs worth discussing."
            : "Esta página entrega ao entrevistador uma leitura técnica dos projetos mais fortes: problema, arquitetura, decisões de engenharia e trade-offs para discutir."}
        </p>
      </section>
      <Section title={language === "en" ? "Projects in depth" : "Projetos em detalhes"}>
        <div className="project-briefing-list">
          {projects.map((project) => (
            <ProjectCard project={project} detailed key={project.name} />
          ))}
        </div>
      </Section>
    </>
  );
}
