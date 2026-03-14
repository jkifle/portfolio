import { Navigation, Footer } from './components/layout';
import { Hero, About, Work, Skills, Contact } from './components/sections';
import './styles/globals.css';

export default function App() {
  return (
    <>
      {/* Mosaic background — fixed layer */}
      <div className="mosaic-bg" />

      {/* Navigation */}
      <Navigation />

      {/* Main content */}
      <main className="content-layer">
        <Hero />
        <About />
        <Work />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
