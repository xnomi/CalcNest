import React from 'react';

interface ResultCardProps {
  title: string;
  value: string | React.ReactNode;
  subtitle?: string;
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'accent' | 'accent2';
}

export default function ResultCard({ title, value, subtitle, variant = 'default' }: ResultCardProps) {
  const bgColors = {
    default: 'bg-surface border-muted/20 text-text',
    success: 'bg-[#10b981]/10 border-[#10b981]/30 text-[#10b981]',
    warning: 'bg-[#f59e0b]/10 border-[#f59e0b]/30 text-[#f59e0b]',
    danger: 'bg-[#ef4444]/10 border-[#ef4444]/30 text-[#ef4444]',
    accent: 'bg-[#4f46e5]/10 border-[#4f46e5]/30 text-[#4f46e5]',
    accent2: 'bg-[#06b6d4]/10 border-[#06b6d4]/30 text-[#06b6d4]',
  };

  return (
    <div className={`p-6 rounded-xl border ${bgColors[variant]} flex flex-col items-center justify-center text-center transition-all`}>
      <h3 className="text-sm font-medium opacity-80 mb-1">{title}</h3>
      <div className="text-3xl font-heading font-bold mb-1">{value}</div>
      {subtitle && <p className="text-sm opacity-80">{subtitle}</p>}
    </div>
  );
}
