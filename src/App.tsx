import { ThemeProvider } from './components/ThemeContext';
import PageWrapper from './components/PageWrapper';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Projects';
import Footer from './components/Footer';
import Particles from './components/Particles';
import Contact from './components/Contact';

// TODO: more visual elements and animations
function App() {
  return (
    <ThemeProvider>
      <Particles
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={false}
        alphaParticles={false}
        disableRotation={false}
      />
      <PageWrapper>
        <Header />
        <main className="pb-[50px] md:pb-0">
          <Hero />
          <Features />
          <Contact />
        </main>
        {/* <Footer /> */}
      </PageWrapper>
    </ThemeProvider>
  );
}

export default App;
