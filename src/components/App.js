import React from 'react';
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;