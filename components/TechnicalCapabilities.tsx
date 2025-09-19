
import React from 'react';

const PipelineStep: React.FC<{ number: number; title: string; description: string }> = ({ number, title, description }) => (
  <li className="relative flex items-start pb-8">
    <div className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-slate-700" aria-hidden="true"></div>
    <div className="flex items-center flex-shrink-0">
      <span className="h-8 w-8 rounded-full bg-brand-primary flex items-center justify-center ring-8 ring-base-light text-white font-bold">
        {number}
      </span>
      <h3 className="ml-4 text-lg font-semibold text-text-primary">{title}</h3>
    </div>
    <p className="ml-16 mt-1 text-text-secondary">{description}</p>
  </li>
);

const IntegrationLogo: React.FC<{ name: string }> = ({ name }) => (
  <div className="flex items-center justify-center p-4 bg-slate-800 rounded-lg h-20">
    <span className="text-text-secondary font-semibold">{name}</span>
  </div>
);

const TechnicalCapabilities: React.FC = () => {
  return (
    <section id="tech" className="py-20 bg-base-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">Technical Capabilities</h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            A robust, scalable, and developer-friendly platform.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h3 className="text-2xl font-bold text-text-primary mb-6">Processing Pipeline</h3>
            <ol>
                <li className="relative flex items-start pb-8">
                    <div className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-slate-700" aria-hidden="true"></div>
                    <div className="relative flex items-center">
                        <span className="h-8 w-8 rounded-full bg-brand-primary flex items-center justify-center ring-8 ring-base-light text-white font-bold">1</span>
                        <div className="ml-4">
                            <h4 className="text-lg font-semibold text-text-primary">Ingestion</h4>
                            <p className="text-text-secondary mt-1">Multi-threaded document parsing with format-specific handlers.</p>
                        </div>
                    </div>
                </li>
                 <li className="relative flex items-start pb-8">
                    <div className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-slate-700" aria-hidden="true"></div>
                    <div className="relative flex items-center">
                        <span className="h-8 w-8 rounded-full bg-brand-primary flex items-center justify-center ring-8 ring-base-light text-white font-bold">2</span>
                        <div className="ml-4">
                            <h4 className="text-lg font-semibold text-text-primary">Analysis</h4>
                            <p className="text-text-secondary mt-1">NLP models for content understanding and structure recognition.</p>
                        </div>
                    </div>
                </li>
                 <li className="relative flex items-start pb-8">
                    <div className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-slate-700" aria-hidden="true"></div>
                    <div className="relative flex items-center">
                        <span className="h-8 w-8 rounded-full bg-brand-primary flex items-center justify-center ring-8 ring-base-light text-white font-bold">3</span>
                        <div className="ml-4">
                            <h4 className="text-lg font-semibold text-text-primary">Optimization</h4>
                            <p className="text-text-secondary mt-1">Intelligent chunking with overlap management.</p>
                        </div>
                    </div>
                </li>
                 <li className="relative flex items-start pb-8">
                    <div className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-slate-700" aria-hidden="true"></div>
                    <div className="relative flex items-center">
                        <span className="h-8 w-8 rounded-full bg-brand-primary flex items-center justify-center ring-8 ring-base-light text-white font-bold">4</span>
                        <div className="ml-4">
                            <h4 className="text-lg font-semibold text-text-primary">Validation</h4>
                            <p className="text-text-secondary mt-1">Automated quality checks and human review workflows.</p>
                        </div>
                    </div>
                </li>
                 <li className="relative flex items-start">
                    <div className="relative flex items-center">
                        <span className="h-8 w-8 rounded-full bg-brand-primary flex items-center justify-center ring-8 ring-base-light text-white font-bold">5</span>
                        <div className="ml-4">
                            <h4 className="text-lg font-semibold text-text-primary">Export</h4>
                            <p className="text-text-secondary mt-1">Vector database integration and multiple output formats.</p>
                        </div>
                    </div>
                </li>
            </ol>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-text-primary mb-6">Seamless Integration Options</h3>
            <p className="text-text-secondary mb-8">Connect DocRAG Pro with your existing stack effortlessly.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <IntegrationLogo name="RESTful API" />
              <IntegrationLogo name="Webhooks" />
              <IntegrationLogo name="Pinecone" />
              <IntegrationLogo name="Weaviate" />
              <IntegrationLogo name="Chroma" />
              <IntegrationLogo name="Qdrant" />
              <IntegrationLogo name="AWS S3" />
              <IntegrationLogo name="Google Cloud" />
              <IntegrationLogo name="Azure Blob" />
              <IntegrationLogo name="GitHub Actions" />
              <IntegrationLogo name="Jenkins" />
              <IntegrationLogo name="LangChain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalCapabilities;
