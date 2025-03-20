import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Linkedin, Youtube, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-primary/95 backdrop-blur-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-heading font-bold text-accent-cyan">
            Rachit
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-4">
              <a href="#home" className="nav-link">Home</a>
              <a href="#portfolio" className="nav-link">Portfolio</a>
              <a href="#services" className="nav-link">Services</a>
              <a href="#about" className="nav-link">About</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>

            <div className="flex items-center space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-300 hover:text-accent-cyan transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                 className="text-gray-300 hover:text-accent-cyan transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                 className="text-gray-300 hover:text-accent-cyan transition-colors">
                <Youtube size={20} />
              </a>
              <button onClick={() => setIsDark(!isDark)} 
                      className="text-gray-300 hover:text-accent-cyan transition-colors">
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-300" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="nav-link">Home</a>
              <a href="#portfolio" className="nav-link">Portfolio</a>
              <a href="#services" className="nav-link">Services</a>
              <a href="#about" className="nav-link">About</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>
            <div className="flex justify-center space-x-6 mt-6">
              <Instagram size={20} className="text-gray-300" />
              <Linkedin size={20} className="text-gray-300" />
              <Youtube size={20} className="text-gray-300" />
              <button onClick={() => setIsDark(!isDark)}>
                {isDark ? <Sun size={20} className="text-gray-300" /> : 
                         <Moon size={20} className="text-gray-300" />}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;