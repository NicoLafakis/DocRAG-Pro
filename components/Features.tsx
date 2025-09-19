
import React from 'react';

interface FeatureItem {
  title: string;
  description: string;
  items: string[];
  icon: React.ReactNode;
}

const featureData: FeatureItem[] = [
  {
    title: 'Universal Document Processing',
    description: 'Ingest and process a wide variety of document formats with ease.',
    items: ['Multi-Format Support (PDF, Word, etc.)', 'Advanced OCR for scanned documents', 'Structured Data Recognition', 'Batch Processing for thousands of documents'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Intelligent Content Analysis',
    description: 'AI-powered analysis to understand the content of your documents deeply.',
    items: ['Semantic Segmentation', 'Entity Recognition', 'Relationship Mapping', 'Quality Assessment Scores'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'RAG-Optimized Output',
    description: 'Generate outputs perfectly structured for Retrieval-Augmented Generation.',
    items: ['Smart, context-aware chunking', 'Hierarchical structure preservation', 'Rich metadata enrichment', 'Vector-ready embeddings'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H7a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
  {
    title: 'Customization & Control',
    description: 'Tailor the processing pipeline to your specific domain and needs.',
    items: ['Domain Adaptation (legal, medical, etc.)', 'Multiple chunking strategies', 'Customizable output formats', 'Quality and relevance filters'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 16v-2m8-8h2M4 12H2m15.364 6.364l1.414 1.414M4.222 4.222l1.414 1.414m12.728 0l-1.414 1.414M5.636 18.364l-1.414 1.414M12 18a6 6 0 100-12 6 6 0 000 12z" />
      </svg>
    ),
  },
];

const FeatureCard: React.FC<{ feature: FeatureItem }> = ({ feature }) => (
  <div className="bg-base-light rounded-xl p-6 flex flex-col hover:shadow-2xl hover:shadow-brand-dark/50 transition-shadow duration-300 transform hover:-translate-y-1">
    <div className="flex items-center mb-4">
      <div className="bg-slate-700 p-3 rounded-full mr-4">
        {feature.icon}
      </div>
      <h3 className="text-xl font-bold text-text-primary">{feature.title}</h3>
    </div>
    <p className="text-text-secondary mb-4 flex-grow">{feature.description}</p>
    <ul className="space-y-2 text-text-secondary">
      {feature.items.map((item, index) => (
        <li key={index} className="flex items-start">
          <svg className="w-5 h-5 text-brand-secondary mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">Core Features</h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            Everything you need to build high-quality, searchable knowledge bases from your documents.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featureData.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
