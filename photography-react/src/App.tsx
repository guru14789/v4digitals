import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import About from './pages/About';
import Prints from './pages/Prints';
import Blog from './pages/Blog';
import Gear from './pages/Gear';
import Presets from './pages/Presets';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import LibraryItem from './pages/LibraryItem';
import PageWrapper from './components/PageWrapper';
import Lenis from 'lenis';
import { useEffect } from 'react';
import './styles/framer.css';
import './index.css';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/prints" element={<PageWrapper><Prints /></PageWrapper>} />
        <Route path="/blog" element={<PageWrapper><Blog /></PageWrapper>} />
        <Route path="/gear" element={<PageWrapper><Gear /></PageWrapper>} />
        <Route path="/presets" element={<PageWrapper><Presets /></PageWrapper>} />
        <Route path="/courses" element={<PageWrapper><Courses /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="/library/:id" element={<PageWrapper><LibraryItem /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.1,
      touchMultiplier: 1.5,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
