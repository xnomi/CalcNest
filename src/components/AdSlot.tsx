'use client';

interface AdSlotProps {
  slot: string;
  format?: 'auto' | 'rectangle' | 'leaderboard' | 'in-article';
  style?: React.CSSProperties;
  className?: string;
  label?: string;
}

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export function AdSlot({
  slot,
  format = 'auto',
  style,
  className,
  label = 'Advertisement',
}: AdSlotProps) {
  const adsEnabled = process.env.NEXT_PUBLIC_ENABLE_ADS === 'true';
  const publisherId = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID;
  if (!adsEnabled || !publisherId) return null;

  return (
    <div
      className={className}
      style={{
        minHeight: format === 'leaderboard' ? 90 : 250,
        width: '100%',
        textAlign: 'center',
        position: 'relative',
        ...style,
      }}
      aria-label={label}
    >
      {/* Visible label for transparency (AdSense policy) */}
      <p
        style={{
          fontSize: 10,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          color: 'var(--muted2)',
          marginBottom: 4,
          fontWeight: 600,
        }}
      >
        {label}
      </p>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={publisherId}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}

/**
 * Convenience: In-article ad (best for between sections)
 */
export function InArticleAd({ slot }: { slot: string }) {
  return (
    <div className="my-8 max-w-3xl mx-auto px-4">
      <AdSlot slot={slot} format="in-article" label="Advertisement" />
    </div>
  );
}

/**
 * Convenience: Leaderboard/Banner ad
 */
export function LeaderboardAd({ slot }: { slot: string }) {
  return (
    <div
      className="w-full py-4 px-4"
      style={{
        background: 'var(--surface2)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <AdSlot
        slot={slot}
        format="leaderboard"
        label="Advertisement"
        style={{ maxWidth: 728, margin: '0 auto', minHeight: 90 }}
      />
    </div>
  );
}
