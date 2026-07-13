import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

export type Language = "en" | "pt";
export type Localized<T> = Record<Language, T>;

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  labels: Labels;
};

type Labels = {
  home: string;
  resume: string;
  projects: string;
  github: string;
  linkedin: string;
  email: string;
  switchLanguage: string;
  recruiterSummary: string;
  selectedProjects: string;
  technicalStack: string;
  background: string;
  education: string;
  certifications: string;
  contact: string;
  projectBriefing: string;
  interviewTalkingPoints: string;
  problem: string;
  architecture: string;
  highlights: string;
  liveDemo: string;
  caseStudy: string;
  repository: string;
};

const labels: Localized<Labels> = {
  en: {
    home: "Home",
    resume: "ATS Resume",
    projects: "Project Briefing",
    github: "GitHub",
    linkedin: "LinkedIn",
    email: "Email",
    switchLanguage: "Portuguese",
    recruiterSummary: "Recruiter Summary",
    selectedProjects: "Selected Projects",
    technicalStack: "Technical Stack",
    background: "Background",
    education: "Education",
    certifications: "Certifications",
    contact: "Contact",
    projectBriefing: "Project Briefing",
    interviewTalkingPoints: "Interview talking points",
    problem: "Problem",
    architecture: "Architecture",
    highlights: "Engineering highlights",
    liveDemo: "Live demo",
    caseStudy: "Case study",
    repository: "Repository"
  },
  pt: {
    home: "Início",
    resume: "Currículo ATS",
    projects: "Projetos para Entrevista",
    github: "GitHub",
    linkedin: "LinkedIn",
    email: "Email",
    switchLanguage: "English",
    recruiterSummary: "Resumo para Recrutadores",
    selectedProjects: "Projetos Selecionados",
    technicalStack: "Stack Técnica",
    background: "Trajetória",
    education: "Formação",
    certifications: "Certificações",
    contact: "Contato",
    projectBriefing: "Projetos para Entrevista",
    interviewTalkingPoints: "Pontos para entrevista",
    problem: "Problema",
    architecture: "Arquitetura",
    highlights: "Destaques de engenharia",
    liveDemo: "Demo",
    caseStudy: "Estudo de caso",
    repository: "Repositório"
  }
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const value = useMemo(() => ({ language, setLanguage, labels: labels[language] }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
