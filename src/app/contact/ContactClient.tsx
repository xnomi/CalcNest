'use client';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactClient() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
    if (!formspreeId || formspreeId === 'your_formspree_id') {
      setTimeout(() => setStatus('success'), 1000);
      return;
    }
    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-bg text-text">
      <Header />
      <main className="flex-grow max-w-2xl mx-auto px-4 sm:px-6 py-12 w-full">
        <h1 className="text-4xl font-heading font-bold text-accent mb-4">
          Contact Us
        </h1>
        <p className="text-muted text-lg mb-2">
          We&apos;d love to hear from you. Whether you have a question about a
          calculator, found a bug, want to suggest a new feature, or just want to say
          hello — reach out and we&apos;ll get back to you as soon as possible.
        </p>
        <p className="text-muted mb-10">
          We typically respond within{' '}
          <strong className="text-text">1–2 business days</strong>.
        </p>

        {status === 'success' ? (
          <div className="bg-success/10 border border-success/30 rounded-xl p-8 text-center">
            <p className="text-2xl font-heading font-bold text-success mb-2">
              Message Sent!
            </p>
            <p className="text-muted">
              Thank you for reaching out. We&apos;ll get back to you within 1–2
              business days.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-surface rounded-2xl border border-muted/10 shadow-sm p-8 space-y-5"
            aria-label="Contact form"
          >
            <div>
              <label
                htmlFor="contact-name"
                className="block text-sm font-semibold text-text mb-1"
              >
                Your Name <span className="text-danger">*</span>
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-lg border border-muted/30 bg-bg text-text focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <label
                htmlFor="contact-email"
                className="block text-sm font-semibold text-text mb-1"
              >
                Email Address <span className="text-danger">*</span>
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-lg border border-muted/30 bg-bg text-text focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <label
                htmlFor="contact-subject"
                className="block text-sm font-semibold text-text mb-1"
              >
                Subject <span className="text-danger">*</span>
              </label>
              <input
                id="contact-subject"
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="e.g. Bug report, Feature request"
                className="w-full px-4 py-3 rounded-lg border border-muted/30 bg-bg text-text focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <label
                htmlFor="contact-message"
                className="block text-sm font-semibold text-text mb-1"
              >
                Message <span className="text-danger">*</span>
              </label>
              <textarea
                id="contact-message"
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us how we can help..."
                className="w-full px-4 py-3 rounded-lg border border-muted/30 bg-bg text-text focus:outline-none focus:ring-2 focus:ring-accent resize-none"
              />
            </div>
            {status === 'error' && (
              <p className="text-danger text-sm">
                Something went wrong. Please try again or email us directly at
                hello@calcnest.me.
              </p>
            )}
            <button
              id="contact-submit-btn"
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed min-h-[44px]"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </main>
      <Footer />
    </div>
  );
}
