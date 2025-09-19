
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InteractiveDemo from './components/InteractiveDemo';
import Features from './components/Features';
import TechnicalCapabilities from './components/TechnicalCapabilities';
import UseCases from './components/UseCases';
import Security from './components/Security';
import GettingStarted from './components/GettingStarted';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-base-dark text-text-primary font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <InteractiveDemo />
        <Features />
        <TechnicalCapabilities />
        <UseCases />
        <Security />
        <GettingStarted />
      </main>
      <Footer />
    </div>
  );
};

export default App;
