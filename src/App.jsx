import { portfolio } from './data/portfolioData.js';
import { Navbar } from './components/layout/Navbar.jsx';
import { Footer } from './components/layout/Footer.jsx';
import { Hero } from './components/sections/Hero.jsx';
import { About } from './components/sections/About.jsx';
import { Skills } from './components/sections/Skills.jsx';
import { Experience } from './components/sections/Experience.jsx';
import { Projects } from './components/sections/Projects.jsx';
import { Education } from './components/sections/Education.jsx';
import { Contact } from './components/sections/Contact.jsx';

export default function App() {
  return (
    <div className="app-shell">
      <Navbar links={portfolio.nav} />
      <main>
        <Hero data={portfolio.hero} />
        <About data={portfolio.about} />
        <Skills groups={portfolio.skills} />
        <Experience items={portfolio.experience} />
        <Projects projects={portfolio.projects} />
        <Education education={portfolio.education} achievements={portfolio.achievements} />
        <Contact data={portfolio.contact} />
      </main>
      <Footer name={portfolio.hero.name} links={portfolio.contact.links} />
    </div>
  );
}
