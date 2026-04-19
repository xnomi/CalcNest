import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface FAQ {
  question: string;
  answer: string;
}

interface CalcLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
  formula?: React.ReactNode;
  faqs?: FAQ[];
}

export default function CalcLayout({ title, description, children, formula, faqs }: CalcLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-bg text-text">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 py-8 w-full">
        <div className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-accent mb-3">{title}</h1>
          <p className="text-muted max-w-2xl mx-auto">{description}</p>
        </div>

        <div className="bg-surface rounded-2xl shadow-sm border border-muted/10 p-4 sm:p-8 mb-12">
          {children}
        </div>

        {formula && (
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-semibold mb-4 text-accent2">Formula Explained</h2>
            <div className="bg-surface p-6 rounded-xl border border-muted/10 shadow-sm overflow-x-auto">
              {formula}
            </div>
          </div>
        )}

        {faqs && faqs.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-semibold mb-6 text-accent2">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-surface p-5 rounded-xl border border-muted/10 shadow-sm">
                  <h3 className="font-semibold text-lg mb-2 text-text">{faq.question}</h3>
                  <p className="text-muted leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
