'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Cookie, X, Check, Settings } from 'lucide-react';

type ConsentChoice = 'accepted' | 'rejected' | 'partial';

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analyticsOk, setAnalyticsOk] = useState(true);
  const [adsOk, setAdsOk] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('calcnest_cookie_consent');
    if (!stored) {
      // Slight delay so page renders first
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  const saveChoice = (choice: ConsentChoice, analytics: boolean, ads: boolean) => {
    localStorage.setItem('calcnest_cookie_consent', choice);
    localStorage.setItem('calcnest_analytics', String(analytics));
    localStorage.setItem('calcnest_ads', String(ads));
    setVisible(false);
  };

  const acceptAll = () => saveChoice('accepted', true, true);
  const rejectAll = () => saveChoice('rejected', false, false);
  const saveCustom = () => saveChoice('partial', analyticsOk, adsOk);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Cookie consent preferences"
      aria-live="polite"
      style={{
        position: 'fixed',
        bottom: '1.25rem',
        left: '1.25rem',
        right: '1.25rem',
        zIndex: 9999,
        maxWidth: 480,
        margin: '0 auto',
      }}
    >
      <div
        style={{
          background: 'linear-gradient(135deg, #1e1b4b 0%, #1a1740 100%)',
          borderRadius: 20,
          border: '1px solid rgba(99,102,241,0.3)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
          color: '#e0e7ff',
          overflow: 'hidden',
        }}
      >
        {/* Header */}
        <div style={{ padding: '1.25rem 1.5rem 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
            <div style={{
              width: 36, height: 36, borderRadius: 10,
              background: 'rgba(99,102,241,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              <Cookie style={{ width: 18, height: 18, color: '#818cf8' }} />
            </div>
            <strong style={{ fontSize: 15, color: '#f1f5f9' }}>We value your privacy</strong>
          </div>
          <p style={{ fontSize: 13, lineHeight: 1.7, color: '#a5b4fc', marginBottom: 12 }}>
            We use cookies to serve relevant ads via{' '}
            <strong style={{ color: '#c7d2fe' }}>Google AdSense</strong> and to analyze site
            traffic via <strong style={{ color: '#c7d2fe' }}>Google Analytics</strong>. You can
            accept all, reject non-essential cookies, or customize your preferences.{' '}
            <Link href="/privacy-policy" style={{ color: '#818cf8', textDecoration: 'underline' }}>
              Privacy Policy
            </Link>
          </p>
        </div>

        {/* Customise Panel */}
        {showDetails && (
          <div style={{
            margin: '0 1.5rem 1rem',
            background: 'rgba(255,255,255,0.05)',
            borderRadius: 12,
            border: '1px solid rgba(99,102,241,0.2)',
            padding: '0.75rem 1rem',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
              <span style={{ fontSize: 13, color: '#c7d2fe', fontWeight: 600 }}>Strictly Necessary</span>
              <span style={{ fontSize: 11, padding: '2px 8px', borderRadius: 99, background: 'rgba(16,185,129,0.2)', color: '#34d399' }}>
                Always Active
              </span>
            </div>
            <ToggleRow label="Analytics Cookies" desc="Google Analytics — anonymous traffic data" checked={analyticsOk} onChange={setAnalyticsOk} />
            <ToggleRow label="Advertising Cookies" desc="Google AdSense — personalized ads" checked={adsOk} onChange={setAdsOk} />
          </div>
        )}

        {/* Actions */}
        <div style={{
          padding: '0 1.5rem 1.25rem',
          display: 'flex', flexWrap: 'wrap', gap: 8,
        }}>
          <button
            id="cookie-accept-btn"
            onClick={acceptAll}
            style={{
              flex: 1, minWidth: 120,
              background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
              color: '#fff', border: 'none', borderRadius: 10,
              padding: '10px 16px', cursor: 'pointer', fontWeight: 700,
              fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
            }}
          >
            <Check style={{ width: 15, height: 15 }} />
            Accept All
          </button>
          <button
            id="cookie-reject-btn"
            onClick={rejectAll}
            style={{
              flex: 1, minWidth: 100,
              background: 'rgba(255,255,255,0.08)',
              color: '#a5b4fc', border: '1px solid rgba(99,102,241,0.3)',
              borderRadius: 10, padding: '10px 16px', cursor: 'pointer',
              fontWeight: 600, fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
            }}
          >
            <X style={{ width: 15, height: 15 }} />
            Reject All
          </button>
          <button
            id="cookie-customize-btn"
            onClick={() => showDetails ? saveCustom() : setShowDetails(true)}
            style={{
              background: 'rgba(255,255,255,0.06)',
              color: '#a5b4fc', border: '1px solid rgba(99,102,241,0.2)',
              borderRadius: 10, padding: '10px 14px', cursor: 'pointer',
              fontWeight: 600, fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
              whiteSpace: 'nowrap',
            }}
          >
            <Settings style={{ width: 14, height: 14 }} />
            {showDetails ? 'Save' : 'Customize'}
          </button>
        </div>
      </div>
    </div>
  );
}

function ToggleRow({
  label, desc, checked, onChange,
}: {
  label: string; desc: string; checked: boolean; onChange: (v: boolean) => void;
}) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderTop: '1px solid rgba(99,102,241,0.1)' }}>
      <div>
        <p style={{ fontSize: 13, color: '#e0e7ff', fontWeight: 600 }}>{label}</p>
        <p style={{ fontSize: 11, color: '#818cf8', marginTop: 2 }}>{desc}</p>
      </div>
      <button
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        style={{
          width: 44, height: 24, borderRadius: 99, border: 'none', cursor: 'pointer',
          background: checked ? '#4f46e5' : 'rgba(255,255,255,0.1)',
          position: 'relative', transition: 'background 0.2s', flexShrink: 0, marginLeft: 12,
        }}
      >
        <span style={{
          position: 'absolute', top: 2, left: checked ? 22 : 2,
          width: 20, height: 20, borderRadius: 99, background: '#fff',
          transition: 'left 0.2s', boxShadow: '0 1px 4px rgba(0,0,0,0.3)',
        }} />
      </button>
    </div>
  );
}
