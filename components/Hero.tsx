
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-base-dark">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-text-primary leading-tight">
          Intelligent Document-to-RAG Conversion Platform
        </h1>
        <p className="mt-6 text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
          DocRAG Pro transforms unstructured documents into optimized RAG datasets through intelligent content analysis, semantic understanding, and automated processing.
        </p>
        <div className="mt-10 flex justify-center space-x-4">
          <a
            href="#contact"
            className="bg-brand-primary hover:bg-brand-secondary text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 duration-300"
          >
            Get Started
          </a>
          <a
            href="#features"
            className="bg-base-light hover:bg-slate-700 text-text-primary font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
