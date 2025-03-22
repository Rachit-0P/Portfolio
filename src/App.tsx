import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FeaturedProjects from './components/FeaturedProjects';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-primary/95 text-white">
      <div className="animate-gradient">
        <Navbar />
        <Hero />
        <Portfolio />
        <FeaturedProjects />
        <About />
        <Services />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;