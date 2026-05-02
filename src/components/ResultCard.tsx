import React from 'react';

interface ResultCardProps {
  title: string;
  value: string | React.ReactNode | undefined;
  subtitle?: string;
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'accent' | 'accent2';
}

const variantStyles: Record<
  NonNullable<ResultCardProps['variant']>,
  { bg: string; border: string; color: string }
> = {
  default: {
    bg: 'var(--surface2)',
    border: 'var(--border)',
    color: 'var(--text)',
  },
  success: {
    bg: 'rgba(16, 185, 129, 0.08)',
    border: 'rgba(16, 185, 129, 0.25)',
    color: 'var(--success)',
  },
  warning: {
    bg: 'rgba(245, 158, 11, 0.08)',
    border: 'rgba(245, 158, 11, 0.25)',
    color: 'var(--warning)',
  },
  danger: {
    bg: 'rgba(239, 68, 68, 0.08)',
    border: 'rgba(239, 68, 68, 0.25)',
    color: 'var(--danger)',
  },
  accent: {
    bg: 'rgba(79, 70, 229, 0.08)',
    border: 'rgba(79, 70, 229, 0.25)',
    color: 'var(--accent)',
  },
  accent2: {
    bg: 'rgba(6, 182, 212, 0.08)',
    border: 'rgba(6, 182, 212, 0.25)',
    color: 'var(--accent2)',
  },
};

export default function ResultCard({
  title,
  value,
  subtitle,
  variant = 'default',
}: ResultCardProps) {
  const styles = variantStyles[variant];

  return (
    <div
      style={{
        background: styles.bg,
        border: `1.5px solid ${styles.border}`,
        borderRadius: 'var(--radius-md)',
        padding: '1.25rem',
        textAlign: 'center',
        transition: 'all 0.3s ease',
      }}
    >
      <p
        style={{
          fontSize: '0.75rem',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          color: 'var(--muted)',
          marginBottom: '0.5rem',
        }}
      >
        {title}
      </p>
      <div
        style={{
          fontSize: '1.75rem',
          fontWeight: 900,
          fontFamily: 'Nunito, sans-serif',
          color: styles.color,
          lineHeight: 1.1,
          wordBreak: 'break-word',
        }}
      >
        {value ?? '—'}
      </div>
      {subtitle && (
        <p
          style={{
            fontSize: '0.8rem',
            marginTop: '0.35rem',
            color: styles.color,
            opacity: 0.75,
            fontWeight: 600,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
