'use client';

import Link from 'next/link';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  Sun,
  Moon,
  Calculator,
  ChevronDown,
  Percent,
  Calendar,
  RefreshCw,
  GraduationCap,
  Coins,
  Activity,
} from 'lucide-react';

const tools = [
  {
    name: 'BMI Calculator',
    href: '/bmi-calculator',
    icon: Activity,
    desc: 'Check your Body Mass Index',
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
  {
    name: 'EMI Calculator',
    href: '/emi-calculator',
    icon: Coins,
    desc: 'Loan EMI & amortization',
    color: 'text-success',
    bg: 'bg-success/10',
  },
  {
    name: 'Percentage',
    href: '/percentage-calculator',
    icon: Percent,
    desc: 'Percentages made easy',
    color: 'text-warning',
    bg: 'bg-warning/10',
  },
  {
    name: 'Age Calculator',
    href: '/age-calculator',
    icon: Calendar,
    desc: 'Your exact age in detail',
    color: 'text-danger',
    bg: 'bg-danger/10',
  },
  {
    name: 'Unit Converter',
    href: '/unit-converter',
    icon: RefreshCw,
    desc: 'Length, weight, temp & more',
    color: 'text-accent2',
    bg: 'bg-accent2/10',
  },
  {
    name: 'GPA Calculator',
    href: '/gpa-calculator',
    icon: GraduationCap,
    desc: 'Semester & cumulative GPA',
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Sync dark mode
  useEffect(() => {
    const saved = localStorage.getItem('calcnest-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = saved === 'dark' || (!saved && prefersDark);
    setDark(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('calcnest-theme', next ? 'dark' : 'light');
  };

  // Scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setToolsOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setToolsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface/95 backdrop-blur-lg shadow-md border-b border-border'
          : 'bg-surface border-b border-border'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 flex-shrink-0"
            aria-label="CalcNest — Home"
          >
            <div className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ background: 'var(--gradient-cta)' }}>
              <Calculator className="w-5 h-5 text-white" />
            </div>
            <span className="font-heading font-extrabold text-xl text-text">
              Calc<span className="text-accent">Nest</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            <Link href="/" className={`nav-link px-3 py-2 rounded-lg hover:bg-surface2 ${pathname === '/' ? 'active' : ''}`}>
              Home
            </Link>

            {/* Tools Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setToolsOpen(!toolsOpen)}
                aria-expanded={toolsOpen}
                aria-haspopup="true"
                className={`nav-link flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-surface2 ${
                  tools.some(t => pathname === t.href) ? 'active' : ''
                }`}
              >
                Calculators
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${toolsOpen ? 'rotate-180' : ''}`} />
              </button>

              {toolsOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[560px] rounded-2xl shadow-lg border border-border overflow-hidden z-50"
                  style={{ background: 'var(--surface)' }}
                  role="menu"
                >
                  <div className="p-2 grid grid-cols-2 gap-1">
                    {tools.map((tool) => {
                      const Icon = tool.icon;
                      return (
                        <Link
                          key={tool.href}
                          href={tool.href}
                          role="menuitem"
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-surface2 transition-all group"
                        >
                          <div className={`w-10 h-10 rounded-xl ${tool.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                            <Icon className={`w-5 h-5 ${tool.color}`} />
                          </div>
                          <div>
                            <p className="font-semibold text-sm text-text">{tool.name}</p>
                            <p className="text-xs text-muted">{tool.desc}</p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="border-t border-border px-4 py-2 bg-surface2 text-xs text-muted text-center">
                    All tools are 100% free — no account needed
                  </div>
                </div>
              )}
            </div>

            <Link href="/about" className={`nav-link px-3 py-2 rounded-lg hover:bg-surface2 ${pathname === '/about' ? 'active' : ''}`}>
              About
            </Link>
            <Link href="/contact" className={`nav-link px-3 py-2 rounded-lg hover:bg-surface2 ${pathname === '/contact' ? 'active' : ''}`}>
              Contact
            </Link>
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-2">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDark}
              aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="w-9 h-9 rounded-xl flex items-center justify-center hover:bg-surface2 transition-colors border border-border"
            >
              {dark ? (
                <Sun className="w-4.5 h-4.5 text-warning" />
              ) : (
                <Moon className="w-4.5 h-4.5 text-accent" />
              )}
            </button>

            {/* CTA Button */}
            <Link
              href="/bmi-calculator"
              className="hidden sm:inline-flex btn-primary text-sm px-4 py-2"
              aria-label="Try a free calculator"
            >
              Try Free
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              className="md:hidden w-9 h-9 rounded-xl flex items-center justify-center hover:bg-surface2 transition-colors border border-border"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-surface" aria-label="Mobile navigation">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            <Link
              href="/"
              className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${pathname === '/' ? 'bg-accent/10 text-accent font-semibold' : 'hover:bg-surface2 text-text2'}`}
            >
              Home
            </Link>

            <div className="pt-1 pb-1">
              <p className="text-xs font-bold uppercase tracking-widest text-muted px-3 mb-2">
                Calculators
              </p>
              {tools.map((tool) => {
                const Icon = tool.icon;
                return (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${pathname === tool.href ? 'bg-accent/10 text-accent font-semibold' : 'hover:bg-surface2 text-text2'}`}
                  >
                    <div className={`w-8 h-8 rounded-lg ${tool.bg} flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-4 h-4 ${tool.color}`} />
                    </div>
                    <span className="font-medium text-sm">{tool.name}</span>
                  </Link>
                );
              })}
            </div>

            <div className="pt-1 border-t border-border">
              <Link href="/about" className="flex p-3 rounded-xl hover:bg-surface2 text-text2 transition-colors">
                About
              </Link>
              <Link href="/contact" className="flex p-3 rounded-xl hover:bg-surface2 text-text2 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
