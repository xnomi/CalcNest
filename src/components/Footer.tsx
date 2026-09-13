import Link from 'next/link';
import { Calculator, Mail, Shield, FileText, Home, Info, ChevronRight, Heart } from 'lucide-react';

const tools = [
  { name: 'BMI Calculator', href: '/bmi-calculator' },
  { name: 'EMI Calculator', href: '/emi-calculator' },
  { name: 'Percentage Calculator', href: '/percentage-calculator' },
  { name: 'Age Calculator', href: '/age-calculator' },
  { name: 'Unit Converter', href: '/unit-converter' },
  { name: 'GPA Calculator', href: '/gpa-calculator' },
];

const company = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About Us', href: '/about', icon: Info },
  { name: 'Contact', href: '/contact', icon: Mail },
];

const legal = [
  { name: 'Privacy Policy', href: '/privacy-policy', icon: Shield },
  { name: 'Terms of Service', href: '/terms-of-service', icon: FileText },
  { name: 'Disclaimer', href: '/disclaimer', icon: FileText },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-border" style={{ background: 'var(--surface)' }}>
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4" aria-label="CalcNest Home">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: 'var(--gradient-cta)' }}
              >
                <Calculator className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading font-extrabold text-xl text-text">
                Calc<span className="text-accent">Nest</span>
              </span>
            </Link>
            <p className="text-sm text-muted leading-relaxed mb-5">
              Free, fast, and accurate online calculators for everyday needs. No sign-up, no ads interrupting your workflow.
            </p>
            <div
              className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full"
              style={{ background: 'rgba(79,70,229,0.1)', color: 'var(--accent)' }}
            >
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              All tools are 100% free
            </div>
          </div>

          {/* Calculators */}
          <div>
            <p className="font-heading font-bold text-text text-sm mb-4 uppercase tracking-wide">
              Calculators
            </p>
            <ul className="space-y-2.5">
              {tools.map((tool) => (
                <li key={tool.href}>
                  <Link
                    href={tool.href}
                    className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity -ml-1" />
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="font-heading font-bold text-text text-sm mb-4 uppercase tracking-wide">
              Company
            </p>
            <ul className="space-y-2.5">
              {company.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="flex items-center gap-2.5 text-sm text-muted hover:text-accent transition-colors"
                    >
                      <Icon className="w-3.5 h-3.5" />
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="font-heading font-bold text-text text-sm mb-4 uppercase tracking-wide">
              Legal & Policies
            </p>
            <ul className="space-y-2.5">
              {legal.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="flex items-center gap-2.5 text-sm text-muted hover:text-accent transition-colors"
                    >
                      <Icon className="w-3.5 h-3.5" />
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Disclaimer */}
            <div
              className="mt-6 p-3 rounded-xl text-xs text-muted leading-relaxed"
              style={{ background: 'var(--bg2)', border: '1px solid var(--border)' }}
            >
              <strong className="text-text2">Disclaimer:</strong> CalcNest tools are for informational purposes only. Consult a qualified professional for medical, financial, or academic decisions.
            </div>
          </div>
        </div>
      </div>

      {/* Ad Notice Bar (AdSense compliance) */}
      <div className="border-t border-border py-3 px-4 text-center text-xs text-muted" style={{ background: 'var(--bg2)' }}>
        This site uses Google AdSense to display ads.{' '}
        <Link href="/privacy-policy#cookies" className="text-accent hover:underline">
          Learn how we use cookies
        </Link>.
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border py-5 px-4" style={{ background: 'var(--surface)' }}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted flex items-center gap-1.5">
            © {year} CalcNest. All rights reserved.
            <span className="mx-1">·</span>
            Made with <Heart className="w-3 h-3 text-danger fill-danger" /> for everyone.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted">
            <Link href="/privacy-policy" className="hover:text-accent transition-colors">Privacy</Link>
            <span>·</span>
            <Link href="/terms-of-service" className="hover:text-accent transition-colors">Terms</Link>
            <span>·</span>
            <Link href="/contact" className="hover:text-accent transition-colors">Contact</Link>
            <span>·</span>
            <Link href="/about" className="hover:text-accent transition-colors">About</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
