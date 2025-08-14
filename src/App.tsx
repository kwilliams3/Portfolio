import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer'; 

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer /> {/* <-- ajout du Footer ici */}
    </div>
  );
}

export default App;
