// ✅ src/App.jsx
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
 import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('dark');
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="transition-all duration-500 ease-in-out">
      <Header theme={theme} setTheme={setTheme} />
       <About />
      <Skills />
      <Projects />
      <Education />
      <Footer />
    </div>
  );
}

export default App;