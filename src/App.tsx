import { Layout } from "./components/Layout";
import { LanguageProvider } from "./i18n/language";
import { HomePage } from "./pages/HomePage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ResumePage } from "./pages/ResumePage";

function CurrentPage() {
  const path = window.location.pathname;

  if (path === "/resume") {
    return <ResumePage />;
  }

  if (path === "/projects") {
    return <ProjectsPage />;
  }

  return <HomePage />;
}

export default function App() {
  return (
    <LanguageProvider>
      <Layout>
        <CurrentPage />
      </Layout>
    </LanguageProvider>
  );
}
