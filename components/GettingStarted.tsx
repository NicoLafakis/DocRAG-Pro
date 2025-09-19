
import React from 'react';

const GettingStarted: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="bg-base-light rounded-2xl p-8 md:p-12 text-center shadow-2xl shadow-brand-dark/30">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">Ready to Get Started?</h2>
          <p className="mt-4 text-lg text-text-secondary max-w-3xl mx-auto">
            DocRAG Pro offers flexible deployment options including cloud SaaS, on-premises installation, and hybrid configurations. Contact our team for a personalized demo and implementation strategy tailored to your document processing needs.
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="inline-block bg-brand-primary hover:bg-brand-secondary text-white font-bold py-4 px-10 rounded-full text-lg transition-transform transform hover:scale-105 duration-300"
            >
              Contact Our Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;
