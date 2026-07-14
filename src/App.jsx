import { LanguageProvider } from "./i18n/LanguageContext";
import Nav from "./Components/Nav";
import PipelineRail from "./Components/PipelineRail";
import Inicio from "./Components/Inicio";
import About from "./Components/About";
import Projects from "./Components/Projects.jsx";
import Skills from "./Components/Skills.jsx";
import Contact from "./Components/Contact.jsx";

function App() {
  return (
    <LanguageProvider>
      <main className="overflow-x-hidden bg-ink">
        <Nav />
        <PipelineRail />
        <Inicio />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </LanguageProvider>
  );
}

export default App;
