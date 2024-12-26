import React from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="font-sans">
      <Navigation />
      <Home />
      <Skills />
      <About />
      
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
