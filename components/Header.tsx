
import React, { useState } from 'react';

const LogoIcon: React.FC = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-secondary">
    <path d="M9 20H5V14H9V20ZM15 20H11V10H15V20ZM21 20H17V4H21V20Z" fill="currentColor"/>
  </svg>
);


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#demo', label: 'Demo' },
    { href: '#features', label: 'Features' },
    { href: '#tech', label: 'Capabilities' },
    { href: '#use-cases', label: 'Use Cases' },
    { href: '#security', label: 'Security' },
  ];

  return (
    <header className="bg-base-dark/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <LogoIcon />
          <span className="text-xl font-bold text-text-primary">DocRAG Pro</span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-text-secondary hover:text-text-primary transition-colors duration-300">
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="hidden md:inline-block bg-brand-primary hover:bg-brand-secondary text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
          Request a Demo
        </a>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-text-primary focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-base-light">
          <nav className="flex flex-col items-center space-y-4 px-6 pt-2 pb-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-text-secondary hover:text-text-primary transition-colors duration-300">
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="w-full text-center bg-brand-primary hover:bg-brand-secondary text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
              Request a Demo
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
