import { profile } from "../data/profile";
import { projects } from "../data/projects";

describe("portfolio content", () => {
  it("is English-first and includes the strongest recruiter signals", () => {
    expect(profile.defaultLanguage).toBe("en");
    expect(profile.hero.en.role).toContain("Full Stack Developer");
    expect(profile.hero.en.summary).toContain("Next.js");
    expect(profile.hero.en.summary).toContain("AI");
    expect(profile.credentials.en.join(" ")).toContain("FGV");
    expect(profile.credentials.en.join(" ")).toContain("Brazilian Navy");
  });

  it("keeps a separate ATS resume model", () => {
    expect(profile.resume.en.sections.map((section) => section.title)).toEqual([
      "Professional Summary",
      "Core Skills",
      "Experience",
      "Selected Projects",
      "Education",
      "Certifications",
      "Languages",
      "Availability"
    ]);
  });

  it("prioritizes interviewer-ready project evidence", () => {
    const names = projects.map((project) => project.name);
    expect(names).toContain("E-commerce & Services Platform");
    expect(names).toContain("Gym Management Platform");
    expect(names).toContain("AI Tutor for Kids");
    expect(names).toContain("AI Media Transcription & Report Studio");
    expect(names).toContain("Agenda Productivity App");
    expect(names).toContain("Logs Microservice");
  });
});
