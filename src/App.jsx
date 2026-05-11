import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import ResumeModal from './components/ResumeModal';
import { useStore } from './store';

function App() {
  const { isResumeOpen } = useStore();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative w-full bg-background min-h-screen text-gray-200 selection:bg-primary/30">
      <CustomCursor />
      <Navbar />
      
      <main className="relative z-10 flex flex-col items-center w-full">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {isResumeOpen && <ResumeModal />}
    </div>
  );
}

export default App;
