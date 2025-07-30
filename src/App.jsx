import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Inicio from './Components/Inicio'
import About from './Components/About'
import Projects from './Components/Projects.jsx'
import Skills from './Components/Skills.jsx'
import Contact from './Components/Contact.jsx'
// <Projects onEnter={() => setActiveSection("projects")} />
// <Skills onEnter={() => setActiveSection("skills")} />
// <Contact onEnter={() => setActiveSection("contact")} />
// <BackgroundLayer section={activeSection} />
// const [activeSection, setActiveSection] = useState("inicio");
import BackgroundLayer from "./Components/BackgroundLayer";

function App() {
  return (
    <main className="overflow-x-hidden">
      <Inicio/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </main>
  )
}

export default App
