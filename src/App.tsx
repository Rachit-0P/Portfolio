import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FeaturedProjects from './components/FeaturedProjects';
import FeaturedWorks from './components/FeaturedWorks'; // Add this import
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <div className="animate-gradient">
          <Navbar />
          <Hero />
          <Services />
          <FeaturedWorks />  {/* Add this to show your portfolio works */}
          <FeaturedProjects />
          <About />
          <Contact />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;