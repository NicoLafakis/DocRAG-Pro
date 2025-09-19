
import React from 'react';

const SecurityFeature: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="flex">
        <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-primary text-white">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            </div>
        </div>
        <div className="ml-4">
            <dt className="text-lg leading-6 font-medium text-text-primary">{title}</dt>
            <dd className="mt-2 text-base text-text-secondary">{children}</dd>
        </div>
    </div>
);


const Security: React.FC = () => {
  return (
    <section id="security" className="py-20 bg-base-dark">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">Enterprise-Grade Security & Compliance</h2>
          <p className="mt-4 text-lg text-text-secondary max-w-3xl mx-auto">
            Your data is your most valuable asset. We treat it that way with robust security controls and flexible deployment options.
          </p>
        </div>

        <div className="mt-12">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                <SecurityFeature title="Data Privacy">
                    On-premises deployment options and data residency controls give you full ownership of your data.
                </SecurityFeature>
                <SecurityFeature title="End-to-End Encryption">
                    Protecting your documents in transit and at rest with industry-standard encryption protocols.
                </SecurityFeature>
                <SecurityFeature title="Access Control">
                    Role-based permissions and detailed audit logging to ensure only authorized access.
                </SecurityFeature>
                <SecurityFeature title="Compliance Ready">
                    Built to support SOC 2, GDPR, and other industry-specific compliance requirements.
                </SecurityFeature>
            </dl>
        </div>
      </div>
    </section>
  );
};

export default Security;
