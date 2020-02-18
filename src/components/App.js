import React from 'react';
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;