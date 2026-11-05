import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

function renderAt(path: string) {
  window.history.pushState({}, "", path);
  return render(<App />);
}

describe("portfolio routes", () => {
  it("renders the English-first homepage", () => {
    renderAt("/");
    expect(screen.getByRole("heading", { name: "Helber Soares" })).toBeInTheDocument();
    expect(screen.getByText(/Full Stack Developer/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Resume" })).toHaveAttribute("href", "/resume");
    expect(screen.getByRole("link", { name: /Project Briefing/i })).toHaveAttribute("href", "/projects");
  });

  it("switches the homepage to Portuguese", async () => {
    const user = userEvent.setup();
    renderAt("/");
    await user.click(screen.getByRole("button", { name: /Portuguese/i }));
    expect(screen.getByText(/Desenvolvedor Full Stack/i)).toBeInTheDocument();
  });

  it("renders the resume page without project-card decoration", () => {
    const { container } = renderAt("/resume");
    expect(screen.getByRole("heading", { name: "Resume" })).toBeInTheDocument();
    expect(screen.getByText("Professional Summary")).toBeInTheDocument();
    expect(container.querySelector(".project-card")).toBeNull();
  });

  it("renders the interviewer project briefing page", () => {
    renderAt("/projects");
    expect(screen.getByRole("heading", { name: /Project Briefing/i })).toBeInTheDocument();
    expect(screen.getAllByText(/Technical discussion points/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/E-commerce & Services Platform/i)).toBeInTheDocument();
    expect(screen.getByText(/Gym Management Platform/i)).toBeInTheDocument();
  });
});
